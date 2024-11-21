
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  frontName: 'frontName',
  familyName: 'familyName',
  dateofbirth: 'dateofbirth',
  icNumber: 'icNumber',
  address: 'address',
  phoneNumber: 'phoneNumber',
  username: 'username',
  zipCode: 'zipCode',
  province: 'province',
  city: 'city',
  country: 'country'
};

exports.Prisma.EntityScalarFieldEnum = {
  id: 'id',
  companyUsername: 'companyUsername',
  password: 'password',
  picFrontName: 'picFrontName',
  picFamilyName: 'picFamilyName',
  picPhoneNumber: 'picPhoneNumber',
  dateofbirth: 'dateofbirth',
  companyName: 'companyName',
  companyAddress: 'companyAddress',
  companyPhoneNumber: 'companyPhoneNumber',
  companyZipCode: 'companyZipCode',
  companyEmail: 'companyEmail',
  companyRegistrationNumber: 'companyRegistrationNumber'
};

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  name: 'name'
};

exports.Prisma.ScreenerScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  name: 'name',
  email: 'email',
  phoneNumber: 'phoneNumber'
};

exports.Prisma.TransformerScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  name: 'name',
  email: 'email',
  phoneNumber: 'phoneNumber'
};

exports.Prisma.LandfillAreaScalarFieldEnum = {
  id: 'id',
  location: 'location'
};

exports.Prisma.LandfillsScalarFieldEnum = {
  id: 'id',
  landfillName: 'landfillName',
  landfillAreaName: 'landfillAreaName',
  landfillAddress: 'landfillAddress',
  landfillPhoneNumber: 'landfillPhoneNumber',
  imageUri: 'imageUri',
  TransformerID: 'TransformerID',
  ScreenerID: 'ScreenerID'
};

exports.Prisma.WaqfScalarFieldEnum = {
  id: 'id',
  totalRaised: 'totalRaised',
  bankNumber: 'bankNumber',
  waqfName: 'waqfName',
  waqfAddress: 'waqfAddress',
  waqfPhoneNumber: 'waqfPhoneNumber',
  imageUrl: 'imageUrl',
  description: 'description'
};

exports.Prisma.WaqfCauseScalarFieldEnum = {
  id: 'id',
  waqfCause: 'waqfCause'
};

exports.Prisma.CauseOnWaqfScalarFieldEnum = {
  waqfID: 'waqfID',
  waqfCauseID: 'waqfCauseID'
};

exports.Prisma.TransactionsScalarFieldEnum = {
  id: 'id',
  transactionDate: 'transactionDate',
  transactionAmount: 'transactionAmount',
  transactionType: 'transactionType',
  transactionStatus: 'transactionStatus',
  transactionDescription: 'transactionDescription',
  transactionDeposited: 'transactionDeposited',
  transactionScreened: 'transactionScreened',
  totalScreened: 'totalScreened',
  transactionTransformed: 'transactionTransformed',
  transactionTransfered: 'transactionTransfered',
  UserID: 'UserID',
  EntityID: 'EntityID',
  WaqfID: 'WaqfID',
  LandfillsID: 'LandfillsID',
  ScreenerID: 'ScreenerID',
  TransformerID: 'TransformerID'
};

exports.Prisma.HistoryScalarFieldEnum = {
  id: 'id',
  historyDate: 'historyDate',
  historyDescription: 'historyDescription',
  UserID: 'UserID',
  EntityID: 'EntityID',
  WaqfName: 'WaqfName',
  totalTransferred: 'totalTransferred',
  LandfillName: 'LandfillName',
  ScreenerID: 'ScreenerID',
  TransformerID: 'TransformerID'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Entity: 'Entity',
  Admin: 'Admin',
  Screener: 'Screener',
  Transformer: 'Transformer',
  landfillArea: 'landfillArea',
  Landfills: 'Landfills',
  Waqf: 'Waqf',
  WaqfCause: 'WaqfCause',
  CauseOnWaqf: 'CauseOnWaqf',
  Transactions: 'Transactions',
  History: 'History'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
