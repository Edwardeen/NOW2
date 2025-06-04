import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

// IMPORTANT: This order is critical due to foreign key constraints.
// List models that depend on others (i.e., have foreign keys) first.
// Then list the models they depend on.
// This is a best-guess order based on common patterns and previously seen models.
// !!! YOU MUST VERIFY AND COMPLETE THIS LIST WITH ALL YOUR MODEL NAMES FROM schema.prisma IN THE CORRECT ORDER !!!
const modelNamesInDeletionOrder: Prisma.ModelName[] = [
  // Highly dependent tables (junction tables, tables with many FKs)
  'History',
  'Transactions',
  'CauseOnWaqf',

  // Tables that might be referenced by the above or have their own dependencies
  'Landfills',      // Assuming FKs to Screener, Transformer, LandfillArea
  
  // Other models
  'Waqf',           // Referenced by CauseOnWaqf, Transactions, History
  'User',           // Referenced by Transactions, History
  'Entity',         // Referenced by Transactions, History
  
  // Foundational models or those with fewer incoming dependencies from the above
  'Screener',
  'Transformer',
  'landfillArea',
  'WaqfCause',      // Referenced by CauseOnWaqf
  
  // Standalone or least dependent models
  'Admin',
  // Add any other model names from your schema.prisma here. 
  // Ensure they are in an order that respects foreign key constraints.
];

async function clearDatabase() {
  console.log('\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  console.log('This script will attempt to delete ALL data from the specified tables.');
  console.log('This operation is IRREVERSIBLE.');
  console.log('Please ensure you have a backup if this data is important.');
  console.log('Review the model list and order in the script before proceeding.');
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n');
  console.log('Starting database clearing process in 7 seconds... (Press CTRL+C to cancel)');
  await new Promise(resolve => setTimeout(resolve, 7000));

  console.log('Preparing delete operations...');

  const operationsWithNames: { name: Prisma.ModelName, op: Prisma.PrismaPromise<any> }[] = [];

  for (const modelName of modelNamesInDeletionOrder) {
    // Prisma client uses camelCase for model accessors (e.g., prisma.user, prisma.waqfCause)
    const clientKey = modelName.charAt(0).toLowerCase() + modelName.slice(1) as keyof PrismaClient;
    
    // @ts-ignore - This is a common way to access client methods dynamically when the key is constructed.
    if (prisma[clientKey] && typeof prisma[clientKey].deleteMany === 'function') {
      // @ts-ignore
      operationsWithNames.push({ name: modelName, op: prisma[clientKey].deleteMany({}) });
    } else {
      console.warn(`Model ${modelName} (accessor ${String(clientKey)}) not found on Prisma client or does not support deleteMany. Skipping.`);
    }
  }

  if (operationsWithNames.length === 0) {
    console.log('No valid models found for deletion based on the provided list. Exiting.');
    return;
  }
  
  console.log(`Attempting to delete data from ${operationsWithNames.length} models in a single transaction...`);

  try {
    // Execute all deleteMany operations in the transaction
    const results = await prisma.$transaction(operationsWithNames.map(item => item.op));
    
    console.log('\nDatabase clearing transaction successful:');
    results.forEach((result, index) => {
      const modelName = operationsWithNames[index].name; // Name lines up with result by index
      console.log(` - ${modelName}: Deleted ${result.count} records.`);
    });
    console.log('\nAll specified tables have been successfully cleared.');

  } catch (error) {
    console.error('\nError during database clearing transaction:', error);
    console.error('Database clearing FAILED. Due to the transaction, no data should have been deleted if an error occurred mid-process, but please verify.');
  }
}

clearDatabase()
  .then(() => {
    console.log('\nScript finished.');
  })
  .catch((e) => {
    console.error('\nAn unexpected error occurred outside the main clearing logic:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('Prisma client disconnected.');
  }); 