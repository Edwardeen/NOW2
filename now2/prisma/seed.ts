const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

const NUM_USERS = 50;
const NUM_ENTITIES = 50;
const NUM_ADMINS = 50;
const NUM_SCREENERS = 50;
const NUM_TRANSFORMERS = 50;
const NUM_LANDFILL_AREAS = 2; // User specified 2: Kuala Lumpur & Putrajaya
const NUM_WAQF_CAUSES = 50;
const NUM_WAQFS = 50;
const NUM_LANDFILLS = 50;
const TRANSACTIONS_TO_CREATE = 50;
const HISTORY_RECORDS_TO_CREATE = 50;
const CAUSES_PER_WAQF = 3; // Average number of causes to assign per Waqf

const staticWaqfData = [
    {
      "waqfName": "National Mosque of Malaysia",
      "waqfAddress": "Jalan Perdana, Tasik Perdana, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia",
      "waqfPhoneNumber": "03-2274 2227",
      "imageUrl": "https://example.com/national-mosque.jpg",
      "description": "A prominent landmark symbolizing Malaysia's independence and Islamic heritage, with a capacity for 15,000 worshippers.",
      "bankNumber": 100000001,
      "totalRaised": 1000000
    },
    {
      "waqfName": "Putra Mosque",
      "waqfAddress": "Precinct 2, 62572 Putrajaya, Federal Territory of Putrajaya, Malaysia",
      "waqfPhoneNumber": "03-8887 3000",
      "imageUrl": "https://example.com/putra-mosque.jpg",
      "description": "Known as the Pink Mosque, it features a distinctive pink dome and is a popular tourist attraction.",
      "bankNumber": 100000002,
      "totalRaised": 2000000
    },
    {
      "waqfName": "Sultan Salahuddin Abdul Aziz Mosque",
      "waqfAddress": "Section 13, 40100 Shah Alam, Selangor, Malaysia",
      "waqfPhoneNumber": "03-5510 6600",
      "imageUrl": "https://example.com/blue-mosque.jpg",
      "description": "The largest mosque in Southeast Asia, known for its blue dome and stained-glass windows.",
      "bankNumber": 100000003,
      "totalRaised": 3000000
    },
    {
      "waqfName": "Federal Territory Mosque",
      "waqfAddress": "Jalan Duta, 50480 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia",
      "waqfPhoneNumber": "03-6201 2000",
      "imageUrl": "https://example.com/federal-mosque.jpg",
      "description": "A modern mosque with Ottoman and Malay architectural influences, located near the Government Office Complex.",
      "bankNumber": 100000004,
      "totalRaised": 4000000
    },
    {
      "waqfName": "Malacca Straits Mosque",
      "waqfAddress": "Jalan Merdeka, 75000 Malacca City, Malacca, Malaysia",
      "waqfPhoneNumber": "06-282 5370",
      "imageUrl": "https://example.com/malacca-mosque.jpg",
      "description": "A floating mosque built on stilts, offering a stunning view of the Straits of Malacca.",
      "bankNumber": 100000005,
      "totalRaised": 5000000
    },
    {
      "waqfName": "Masjid Jamek",
      "waqfAddress": "Jalan Tun Perak, 50050 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia",
      "waqfPhoneNumber": "03-2692 3692",
      "imageUrl": "https://example.com/jamek-mosque.jpg",
      "description": "One of the oldest mosques in Kuala Lumpur, located at the confluence of the Klang and Gombak rivers.",
      "bankNumber": 100000006,
      "totalRaised": 6000000
    },
    {
      "waqfName": "Masjid India",
      "waqfAddress": "Jalan Tun H.S. Lee, 50000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia",
      "waqfPhoneNumber": "03-2032 8151",
      "imageUrl": "https://example.com/india-mosque.jpg",
      "description": "A historic mosque serving the Indian Muslim community since the early 20th century.",
      "bankNumber": 100000007,
      "totalRaised": 7000000
    },
    {
      "waqfName": "Sultan Abu Bakar Mosque",
      "waqfAddress": "Jalan Abdul Samad, 80000 Johor Bahru, Johor, Malaysia",
      "waqfPhoneNumber": "07-222 2222",
      "imageUrl": "https://example.com/abu-bakar-mosque.jpg",
      "description": "A beautiful mosque with Moorish architecture, named after Sultan Abu Bakar of Johor.",
      "bankNumber": 100000008,
      "totalRaised": 8000000
    },
    {
      "waqfName": "Ubudiah Mosque",
      "waqfAddress": "Jalan Istana, 33000 Kuala Kangsar, Perak, Malaysia",
      "waqfPhoneNumber": "05-776 1414",
      "imageUrl": "https://example.com/ubudiah-mosque.jpg",
      "description": "A stunning mosque with a golden dome, considered one of the most beautiful in Malaysia.",
      "bankNumber": 100000009,
      "totalRaised": 9000000
    },
    {
      "waqfName": "Zahir Mosque",
      "waqfAddress": "Jalan Istana, 05000 Alor Setar, Kedah, Malaysia",
      "waqfPhoneNumber": "04-733 3333",
      "imageUrl": "https://example.com/zahir-mosque.jpg",
      "description": "The state mosque of Kedah, known for its unique black domes and minarets.",
      "bankNumber": 100000010,
      "totalRaised": 10000000
    },
    {
      "waqfName": "Waqf Al-Nur",
      "waqfAddress": "Taman Tun Dr Ismail, 60000 Kuala Lumpur, Malaysia",
      "waqfPhoneNumber": "03-7722 1111",
      "imageUrl": "https://example.com/al-nur.jpg",
      "description": "A community endowment supporting local education and welfare programs.",
      "bankNumber": 100000011,
      "totalRaised": 1200000
    },
    {
      "waqfName": "Waqf Al-Rahman",
      "waqfAddress": "Precinct 16, 62100 Putrajaya, Malaysia",
      "waqfPhoneNumber": "03-8888 2222",
      "imageUrl": "https://example.com/al-rahman.jpg",
      "description": "An endowment for healthcare initiatives in Putrajaya.",
      "bankNumber": 100000012,
      "totalRaised": 2500000
    },
    {
      "waqfName": "Waqf Al-Hidayah",
      "waqfAddress": "Cheras, 56100 Kuala Lumpur, Malaysia",
      "waqfPhoneNumber": "03-9288 3333",
      "imageUrl": "https://example.com/al-hidayah.jpg",
      "description": "Supports religious education and community development in Cheras.",
      "bankNumber": 100000013,
      "totalRaised": 1800000
    },
    {
      "waqfName": "Waqf Al-Barakah",
      "waqfAddress": "Bangsar, 59000 Kuala Lumpur, Malaysia",
      "waqfPhoneNumber": "03-2288 4444",
      "imageUrl": "https://example.com/al-barakah.jpg",
      "description": "A waqf dedicated to supporting orphanages and social welfare.",
      "bankNumber": 100000014,
      "totalRaised": 3000000
    },
    {
      "waqfName": "Waqf Al-Salam",
      "waqfAddress": "Precinct 8, 62250 Putrajaya, Malaysia",
      "waqfPhoneNumber": "03-8888 5555",
      "imageUrl": "https://example.com/al-salam.jpg",
      "description": "An endowment for environmental conservation projects.",
      "bankNumber": 100000015,
      "totalRaised": 2200000
    },
    {
      "waqfName": "Waqf Al-Madinah",
      "waqfAddress": "Setapak, 53000 Kuala Lumpur, Malaysia",
      "waqfPhoneNumber": "03-4022 6666",
      "imageUrl": "https://example.com/al-madinah.jpg",
      "description": "Supports community centers and youth programs in Setapak.",
      "bankNumber": 100000016,
      "totalRaised": 2700000
    },
    {
      "waqfName": "Waqf Al-Ikram",
      "waqfAddress": "Damansara, 60000 Kuala Lumpur, Malaysia",
      "waqfPhoneNumber": "03-7722 7777",
      "imageUrl": "https://example.com/al-ikram.jpg",
      "description": "A waqf for building community libraries and educational facilities.",
      "bankNumber": 100000017,
      "totalRaised": 3500000
    },
    {
      "waqfName": "Waqf Al-Taqwa",
      "waqfAddress": "Precinct 10, 62300 Putrajaya, Malaysia",
      "waqfPhoneNumber": "03-8888 8888",
      "imageUrl": "https://example.com/al-taqwa.jpg",
      "description": "Supports religious schools and Islamic studies programs.",
      "bankNumber": 100000018,
      "totalRaised": 4000000
    },
    {
      "waqfName": "Waqf Al-Falah",
      "waqfAddress": "Wangsa Maju, 53300 Kuala Lumpur, Malaysia",
      "waqfPhoneNumber": "03-4142 9999",
      "imageUrl": "https://example.com/al-falah.jpg",
      "description": "An endowment for poverty alleviation and social services.",
      "bankNumber": 100000019,
      "totalRaised": 3200000
    },
    {
      "waqfName": "Waqf Al-Khair",
      "waqfAddress": "Cyberjaya, 63000 Selangor, Malaysia",
      "waqfPhoneNumber": "03-8312 0000",
      "imageUrl": "https://example.com/al-khair.jpg",
      "description": "Supports technological education and innovation hubs.",
      "bankNumber": 100000020,
      "totalRaised": 3800000
    }
  ];

const staticLandfillsData = [
    {
      "landfillName": "Jeram Sanitary Landfill",
      "landfillAreaName": "Kuala Lumpur",
      "landfillAddress": "Jeram, Kuala Selangor, Selangor, Malaysia",
      "landfillPhoneNumber": "03-3372 1234",
      "imageUri": "https://example.com/jeram-landfill.jpg",
      "ScreenerID": 1, // This will be mapped
      "TransformerID": 1 // This will be mapped
    },
    {
      "landfillName": "Kuang Inert Waste Landfill",
      "landfillAreaName": "Kuala Lumpur",
      "landfillAddress": "Lot 2712, Mukim, Kuang, Selangor, Malaysia",
      "landfillPhoneNumber": "03-6092 5678",
      "imageUri": "https://example.com/kuang-landfill.jpg",
      "ScreenerID": 2,
      "TransformerID": 2
    },
    {
      "landfillName": "Dengkil Inert Waste Landfill",
      "landfillAreaName": "Putrajaya",
      "landfillAddress": "Dengkil, Sepang, Selangor, Malaysia",
      "landfillPhoneNumber": "03-8732 9101",
      "imageUri": "https://example.com/dengkil-landfill.jpg",
      "ScreenerID": 3,
      "TransformerID": 3
    },
    {
      "landfillName": "Tanjung Dua Belas Sanitary Landfill",
      "landfillAreaName": "Putrajaya",
      "landfillAddress": "Kuala Langat, Selangor, Malaysia",
      "landfillPhoneNumber": "03-3187 4567",
      "imageUri": "https://example.com/tanjung-landfill.jpg",
      "ScreenerID": 4,
      "TransformerID": 4
    },
    {
      "landfillName": "Bukit Tagar EnviroParks",
      "landfillAreaName": "Kuala Lumpur",
      "landfillAddress": "PT 1682, Jalan Bukit Tagar, 45600 Bestari Jaya, Selangor, Malaysia",
      "landfillPhoneNumber": "03-5569 2468",
      "imageUri": "https://example.com/bukit-tagar.jpg",
      "ScreenerID": 5,
      "TransformerID": 5
    },
    {
      "landfillName": "Sungai Kertas Inert Waste Landfill",
      "landfillAreaName": "Kuala Lumpur",
      "landfillAddress": "Selayang, Selangor, Malaysia",
      "landfillPhoneNumber": "03-6123 7890",
      "imageUri": "https://example.com/sungai-kertas.jpg",
      "ScreenerID": 6,
      "TransformerID": 6
    },
    {
      "landfillName": "Sabak Bernam Sanitary Landfill",
      "landfillAreaName": "Kuala Lumpur",
      "landfillAddress": "Sabak Bernam, Selangor, Malaysia",
      "landfillPhoneNumber": "03-3232 1357",
      "imageUri": "https://example.com/sabak-bernam.jpg",
      "ScreenerID": 7,
      "TransformerID": 7
    },
    {
      "landfillName": "P/E Sanitary Landfill",
      "landfillAreaName": "Kuala Lumpur",
      "landfillAddress": "Pesiaran Lestari Puchong, 47100 Puchong, Selangor, Malaysia",
      "landfillPhoneNumber": "03-8077 9111",
      "imageUri": "https://example.com/p-e-landfill.jpg",
      "ScreenerID": 8,
      "TransformerID": 8
    },
    {
      "landfillName": "Tanjung Kling Sanitary Landfill",
      "landfillAreaName": "Kuala Lumpur",
      "landfillAddress": "Tanjung Kling, Melaka, Malaysia",
      "landfillPhoneNumber": "06-3377 2468",
      "imageUri": "https://example.com/tanjung-kling.jpg",
      "ScreenerID": 9,
      "TransformerID": 9
    },
    {
      "landfillName": "Pulau Burung Sanitary Landfill",
      "landfillAreaName": "Kuala Lumpur",
      "landfillAddress": "Pulau Burung, Penang, Malaysia",
      "landfillPhoneNumber": "04-8999 3692",
      "imageUri": "https://example.com/pulau-burung.jpg",
      "ScreenerID": 10,
      "TransformerID": 10
    },
    {
      "landfillName": "Taman Desa Landfill",
      "landfillAreaName": "Kuala Lumpur",
      "landfillAddress": "Taman Desa, 58100 Kuala Lumpur, Malaysia",
      "landfillPhoneNumber": "03-7988 1234",
      "imageUri": "https://example.com/taman-desa.jpg",
      "ScreenerID": 11,
      "TransformerID": 11
    },
    {
      "landfillName": "Sungai Besi Landfill",
      "landfillAreaName": "Kuala Lumpur",
      "landfillAddress": "Sungai Besi, 57000 Kuala Lumpur, Malaysia",
      "landfillPhoneNumber": "03-9055 5678",
      "imageUri": "https://example.com/sungai-besi.jpg",
      "ScreenerID": 12,
      "TransformerID": 12
    },
    {
      "landfillName": "Precinct 14 Landfill",
      "landfillAreaName": "Putrajaya",
      "landfillAddress": "Precinct 14, 62000 Putrajaya, Malaysia",
      "landfillPhoneNumber": "03-8888 9012",
      "imageUri": "https://example.com/precinct-14.jpg",
      "ScreenerID": 13,
      "TransformerID": 13
    },
    {
      "landfillName": "Batu Caves Landfill",
      "landfillAreaName": "Kuala Lumpur",
      "landfillAddress": "Batu Caves, 68100 Selangor, Malaysia",
      "landfillPhoneNumber": "03-6188 3456",
      "imageUri": "https://example.com/batu-caves.jpg",
      "ScreenerID": 14,
      "TransformerID": 14
    },
    {
      "landfillName": "Kajang Inert Landfill",
      "landfillAreaName": "Kuala Lumpur",
      "landfillAddress": "Kajang, 43000 Selangor, Malaysia",
      "landfillPhoneNumber": "03-8733 7890",
      "imageUri": "https://example.com/kajang-landfill.jpg",
      "ScreenerID": 15,
      "TransformerID": 15
    },
    {
      "landfillName": "Ampang Jaya Landfill",
      "landfillAreaName": "Kuala Lumpur",
      "landfillAddress": "Ampang Jaya, 68000 Selangor, Malaysia",
      "landfillPhoneNumber": "03-4299 1234",
      "imageUri": "https://example.com/ampang-jaya.jpg",
      "ScreenerID": 16,
      "TransformerID": 16
    },
    {
      "landfillName": "Precinct 11 Landfill",
      "landfillAreaName": "Putrajaya",
      "landfillAddress": "Precinct 11, 62150 Putrajaya, Malaysia",
      "landfillPhoneNumber": "03-8888 5678",
      "imageUri": "https://example.com/precinct-11.jpg",
      "ScreenerID": 17,
      "TransformerID": 17
    },
    {
      "landfillName": "Petaling Jaya Landfill",
      "landfillAreaName": "Kuala Lumpur",
      "landfillAddress": "Petaling Jaya, 46000 Selangor, Malaysia",
      "landfillPhoneNumber": "03-7955 9012",
      "imageUri": "https://example.com/petaling-jaya.jpg",
      "ScreenerID": 18,
      "TransformerID": 18
    },
    {
      "landfillName": "Seri Kembangan Landfill",
      "landfillAreaName": "Kuala Lumpur",
      "landfillAddress": "Seri Kembangan, 43300 Selangor, Malaysia",
      "landfillPhoneNumber": "03-8944 3456",
      "imageUri": "https://example.com/seri-kembangan.jpg",
      "ScreenerID": 19,
      "TransformerID": 19
    },
    {
      "landfillName": "Cyberjaya Eco Landfill",
      "landfillAreaName": "Putrajaya",
      "landfillAddress": "Cyberjaya, 63000 Selangor, Malaysia",
      "landfillPhoneNumber": "03-8312 7890",
      "imageUri": "https://example.com/cyberjaya-eco.jpg",
      "ScreenerID": 20,
      "TransformerID": 20
    }
  ];

async function main() {
  console.log(`Start seeding for Transactions and History ONLY...`);

  // 1. Fetch Landfill Areas
  // const landfillAreaLocations = ["Kuala Lumpur", "Putrajaya"];
  // const landfillAreaData = landfillAreaLocations.map(loc => ({ location: loc }));
  let landfillAreas = [];
  try {
    // await prisma.landfillArea.createMany({ data: landfillAreaData, skipDuplicates: true }); 
    landfillAreas = await prisma.landfillArea.findMany(/*{ where: { location: { in: landfillAreaLocations }}}*/); // Fetch all or specific
    console.log(`Fetched ${landfillAreas.length} landfill areas`);
  } catch (e: any) {
    console.error("Failed to fetch landfill areas:", e);
  }

  // 2. Admins - Skipping creation
  // const adminUsernames = new Set();
  // const adminData = [];
  // for (let i = 0; i < NUM_ADMINS; i++) { ... }
  // try {
  //   await prisma.admin.createMany({ data: adminData, skipDuplicates: true });
  //   console.log(`Attempted to seed ${adminData.length} admins`);
  // } catch (e: any) { ... }
  console.log("Skipping Admin seeding.");


  // 3. Fetch Waqf Causes
  // const waqfCauseTexts = new Set();
  // const waqfCauseData = [];
  // for (let i = 0; i < NUM_WAQF_CAUSES; i++) { ... }
  let waqfCauses = [];
  try {
    // await prisma.waqfCause.createMany({ data: waqfCauseData, skipDuplicates: true });
    waqfCauses = await prisma.waqfCause.findMany(); 
    console.log(`Fetched ${waqfCauses.length} waqf causes`);
  } catch (e: any) {
    console.error("Failed to fetch waqf causes:", e);
  }

  // 4. Fetch Screeners
  // const screenerUsernames = new Set();
  // const screenerData = [];
  // for (let i = 0; i < NUM_SCREENERS; i++) { ... }
  let screeners = [];
  try {
    // await prisma.screener.createMany({ data: screenerData, skipDuplicates: true });
    screeners = await prisma.screener.findMany(); 
    console.log(`Fetched ${screeners.length} screeners`);
  } catch (e: any) {
    console.error("Failed to fetch screeners:", e);
  }

  // 5. Fetch Transformers
  // const transformerUsernames = new Set();
  // const transformerData = [];
  // for (let i = 0; i < NUM_TRANSFORMERS; i++) { ... }
  let transformers = [];
  try {
    // await prisma.transformer.createMany({ data: transformerData, skipDuplicates: true });
    transformers = await prisma.transformer.findMany(); 
    console.log(`Fetched ${transformers.length} transformers`);
  } catch (e: any) {
    console.error("Failed to fetch transformers:", e);
  }

  // 6. Seed Users (Re-enabled)
  const userUsernames = new Set();
  const users = []; // This will store newly created users
  console.log("Attempting to seed Users...");
  for (let i = 0; i < NUM_USERS; i++) {
    let username = faker.internet.username().toLowerCase() + `_usr${i}`;
    while (userUsernames.has(username)) {
      username = faker.internet.username().toLowerCase() + `_usr${i}_` + faker.string.alphanumeric(3);
    }
    userUsernames.add(username);
    let userData; 
    try {
        userData = { 
            email: faker.internet.email(),
            address: faker.location.streetAddress(),
            city: faker.location.city(),
            country: faker.location.country(),
            dateofbirth: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
            familyName: faker.person.lastName(),
            frontName: faker.person.firstName(),
            icNumber: faker.string.numeric(12), // Stays string as per schema
            phoneNumber: faker.phone.number(),
            province: faker.location.state(),
            username: username,
            zipCode: parseInt(faker.location.zipCode('#####')),
            password: faker.internet.password(), // Password will be hashed by API if registered through it, here it's plain for seed
        };
        const user = await prisma.user.create({
            data: userData,
        });
        users.push(user);
    } catch (e: any) {
        console.error(`Failed to create user ${username}. Data: ${userData ? JSON.stringify(userData) : 'DATA_CAPTURE_FAILED'}. Error:`, e);
        if (e.message && e.message.includes('Unique constraint failed')) {
             console.warn(`Skipping user ${username} due to unique constraint violation (likely username or email).`);
        } else if (e.message) {
            console.error(`Error message: ${e.message}`);
            if (e.stack) console.error(`Error stack: ${e.stack}`);
        }
    }
  }
  console.log(`Successfully created ${users.length} users out of ${NUM_USERS} attempts.`);


  // 7. Fetch Entities (Still fetching, not creating)
  let entities = [];
   try {
      entities = await prisma.entity.findMany();
      console.log(`Fetched ${entities.length} entities.`);
  } catch (e: any) {
      console.error("Failed to fetch entities:", e);
  }

  // 8. Fetch Waqfs (previously seeded from static data)
  let createdWaqfs = []; // Renamed to fetchedWaqfs for clarity, but keep name for compatibility
  console.log(`Attempting to fetch existing waqfs...`);
  try {
    // for (const waqfItem of staticWaqfData) { ... } // Creation loop commented out
    createdWaqfs = await prisma.waqf.findMany();
    console.log(`Fetched ${createdWaqfs.length} waqfs from database`);
  } catch (e: any) {
    console.error("Failed to fetch waqfs:", e);
  }


  // 9. Seed CauseOnWaqf (Many-to-Many) - SKIPPING as it depends on waqf/cause creation
  console.log("Skipping CauseOnWaqf seeding as we are only seeding Transactions and History.");
  // if (createdWaqfs.length === 0 || waqfCauses.length === 0) { ... } else { ... }

  // 10. Fetch Landfills (previously seeded from static data)
  let createdLandfills = []; // Renamed to fetchedLandfills, but keep name for compatibility
  console.log(`Attempting to fetch existing landfills...`);
  if (landfillAreas.length === 0) { // LandfillArea is a field in Landfills model, not a direct FK for creation here
    console.log("Note: No landfill areas found, this might affect landfill data if it was dependent during creation.");
  }
  if (screeners.length === 0) {
    console.log("Warning: No screeners found. Landfills might be missing ScreenerID if they were to be created.");
  }
  if (transformers.length === 0) {
    console.log("Warning: No transformers found. Landfills might be missing TransformerID if they were to be created.");
  }
  try {
    // for (const landfillItem of staticLandfillsData) { ... } // Creation loop commented out
    createdLandfills = await prisma.landfills.findMany();
    console.log(`Fetched ${createdLandfills.length} landfills from database`);
  } catch(e: any) {
    console.error("Failed to fetch landfills:", e);
  }
  
  // 11. Seed Transactions
  console.log(`Checking conditions for Transaction seeding: users.length=${users.length}, createdWaqfs.length=${createdWaqfs.length}, createdLandfills.length=${createdLandfills.length}`);
  const transactionsData = [];
  if (users.length > 0 && (entities.length > 0 || screeners.length > 0 || transformers.length > 0 || createdLandfills.length > 0 || createdWaqfs.length > 0) ) {
    for (let i = 0; i < TRANSACTIONS_TO_CREATE; i++) {
      const randomUser = users.length > 0 ? users[faker.number.int({ min: 0, max: users.length - 1 })] : null;
      const randomEntity = entities.length > 0 ? entities[faker.number.int({ min: 0, max: entities.length - 1 })] : null;
      const randomLandfill = createdLandfills.length > 0 ? createdLandfills[faker.number.int({ min: 0, max: createdLandfills.length - 1 })] : null;
      const randomWaqf = createdWaqfs.length > 0 ? createdWaqfs[faker.number.int({ min: 0, max: createdWaqfs.length - 1 })] : null;
      const randomScreener = screeners.length > 0 ? screeners[faker.number.int({ min: 0, max: screeners.length - 1 })] : null;
      const randomTransformer = transformers.length > 0 ? transformers[faker.number.int({ min: 0, max: transformers.length - 1 })] : null;

      transactionsData.push({
        transactionDate: faker.date.recent({ days: 365 }),
        transactionAmount: parseFloat(faker.finance.amount({ min: 10, max: 1000, dec: 2 })),
        transactionType: faker.helpers.arrayElement(['DEPOSIT', 'WITHDRAWAL', 'TRANSFER', 'DONATION']),
        transactionStatus: faker.helpers.arrayElement(['PENDING', 'COMPLETED', 'FAILED', 'CANCELLED']),
        transactionDescription: faker.lorem.sentence(),
        UserID: randomUser ? randomUser.id : undefined,
        EntityID: faker.datatype.boolean(0.3) && randomEntity ? randomEntity.id : undefined,
        transactionDeposited: faker.datatype.boolean(),
        transactionScreened: faker.datatype.boolean(),
        transactionTransfered: faker.datatype.boolean(),
        transactionTransformed: faker.datatype.boolean(),
        totalScreened: faker.number.int({ min: 0, max: 1000 }),
        LandfillsID: faker.datatype.boolean(0.3) && randomLandfill ? randomLandfill.id : undefined,
        WaqfID: faker.datatype.boolean(0.3) && randomWaqf ? randomWaqf.id : undefined,
        ScreenerID: faker.datatype.boolean(0.1) && randomScreener ? randomScreener.id : undefined,
        TransformerID: faker.datatype.boolean(0.1) && randomTransformer ? randomTransformer.id : undefined,
      });
    }
    if (transactionsData.length > 0) {
      try {
        await prisma.transactions.createMany({ data: transactionsData, skipDuplicates: true });
        console.log(`Seeded ${transactionsData.length} transactions`);
      } catch (e) {
        console.error("Failed to seed Transactions:", e);
      }
    } else {
      console.log("No transactions to seed based on available related data.");
    }
  } else {
    console.log("Skipping Transactions seeding due to missing critical related data (e.g. Users).");
  }

  // 12. Seed History
  console.log(`Checking conditions for History seeding: entities.length=${entities.length}, createdWaqfs.length=${createdWaqfs.length}, createdLandfills.length=${createdLandfills.length}`);
  const historyData = [];
  if (entities.length > 0 && createdWaqfs.length > 0 && createdLandfills.length > 0) {
    for (let i = 0; i < HISTORY_RECORDS_TO_CREATE; i++) {
      // const randomUser = users[faker.number.int({ min: 0, max: users.length - 1 })]; // No longer using randomUser for this history batch
      const randomEntity = entities[faker.number.int({ min: 0, max: entities.length - 1 })]; // Ensure entities array is populated
      const randomWaqf = createdWaqfs[faker.number.int({ min: 0, max: createdWaqfs.length - 1 })];
      const randomLandfill = createdLandfills[faker.number.int({ min: 0, max: createdLandfills.length - 1 })];
      const randomScreener = screeners.length > 0 ? screeners[faker.number.int({ min: 0, max: screeners.length - 1 })] : null;
      const randomTransformer = transformers.length > 0 ? transformers[faker.number.int({ min: 0, max: transformers.length - 1 })] : null;
      
      historyData.push({
        historyDate: faker.date.recent({ days: 365 }),
        historyDescription: faker.lorem.sentence(),
        UserID: null, // Explicitly set UserID to null
        WaqfName: randomWaqf.waqfName,
        LandfillName: randomLandfill.landfillName,
        EntityID: randomEntity.id, // Assign EntityID from a random entity
        totalTransferred: faker.number.int({ min: 10, max: 5000 }),
        ScreenerID: faker.datatype.boolean(0.1) && randomScreener ? randomScreener.id : undefined,
        TransformerID: faker.datatype.boolean(0.1) && randomTransformer ? randomTransformer.id : undefined,
        totalScreened: faker.number.int({ min: 0, max: 1000 }),
      });
    }
     if (historyData.length > 0) {
      try {
        await prisma.history.createMany({ data: historyData, skipDuplicates: true });
        console.log(`Seeded ${historyData.length} history records`);
      } catch (e) {
          console.error("Failed to seed History records:", e);
      }
    } else {
      console.log("No history records to seed based on available related data.");
    }
  } else {
    console.log("Skipping History seeding due to missing critical related data (Entities, Waqfs, or Landfills).");
  }

  console.log('Seeding finished for Users, Transactions and History (if data was available).');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
