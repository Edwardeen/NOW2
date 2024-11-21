
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Entity
 * 
 */
export type Entity = $Result.DefaultSelection<Prisma.$EntityPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Screener
 * 
 */
export type Screener = $Result.DefaultSelection<Prisma.$ScreenerPayload>
/**
 * Model Transformer
 * 
 */
export type Transformer = $Result.DefaultSelection<Prisma.$TransformerPayload>
/**
 * Model landfillArea
 * 
 */
export type landfillArea = $Result.DefaultSelection<Prisma.$landfillAreaPayload>
/**
 * Model Landfills
 * 
 */
export type Landfills = $Result.DefaultSelection<Prisma.$LandfillsPayload>
/**
 * Model Waqf
 * 
 */
export type Waqf = $Result.DefaultSelection<Prisma.$WaqfPayload>
/**
 * Model WaqfCause
 * 
 */
export type WaqfCause = $Result.DefaultSelection<Prisma.$WaqfCausePayload>
/**
 * Model CauseOnWaqf
 * 
 */
export type CauseOnWaqf = $Result.DefaultSelection<Prisma.$CauseOnWaqfPayload>
/**
 * Model Transactions
 * 
 */
export type Transactions = $Result.DefaultSelection<Prisma.$TransactionsPayload>
/**
 * Model History
 * 
 */
export type History = $Result.DefaultSelection<Prisma.$HistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.entity`: Exposes CRUD operations for the **Entity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entities
    * const entities = await prisma.entity.findMany()
    * ```
    */
  get entity(): Prisma.EntityDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.screener`: Exposes CRUD operations for the **Screener** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Screeners
    * const screeners = await prisma.screener.findMany()
    * ```
    */
  get screener(): Prisma.ScreenerDelegate<ExtArgs>;

  /**
   * `prisma.transformer`: Exposes CRUD operations for the **Transformer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transformers
    * const transformers = await prisma.transformer.findMany()
    * ```
    */
  get transformer(): Prisma.TransformerDelegate<ExtArgs>;

  /**
   * `prisma.landfillArea`: Exposes CRUD operations for the **landfillArea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LandfillAreas
    * const landfillAreas = await prisma.landfillArea.findMany()
    * ```
    */
  get landfillArea(): Prisma.landfillAreaDelegate<ExtArgs>;

  /**
   * `prisma.landfills`: Exposes CRUD operations for the **Landfills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Landfills
    * const landfills = await prisma.landfills.findMany()
    * ```
    */
  get landfills(): Prisma.LandfillsDelegate<ExtArgs>;

  /**
   * `prisma.waqf`: Exposes CRUD operations for the **Waqf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Waqfs
    * const waqfs = await prisma.waqf.findMany()
    * ```
    */
  get waqf(): Prisma.WaqfDelegate<ExtArgs>;

  /**
   * `prisma.waqfCause`: Exposes CRUD operations for the **WaqfCause** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaqfCauses
    * const waqfCauses = await prisma.waqfCause.findMany()
    * ```
    */
  get waqfCause(): Prisma.WaqfCauseDelegate<ExtArgs>;

  /**
   * `prisma.causeOnWaqf`: Exposes CRUD operations for the **CauseOnWaqf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CauseOnWaqfs
    * const causeOnWaqfs = await prisma.causeOnWaqf.findMany()
    * ```
    */
  get causeOnWaqf(): Prisma.CauseOnWaqfDelegate<ExtArgs>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **Transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.TransactionsDelegate<ExtArgs>;

  /**
   * `prisma.history`: Exposes CRUD operations for the **History** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Histories
    * const histories = await prisma.history.findMany()
    * ```
    */
  get history(): Prisma.HistoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "entity" | "admin" | "screener" | "transformer" | "landfillArea" | "landfills" | "waqf" | "waqfCause" | "causeOnWaqf" | "transactions" | "history"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Entity: {
        payload: Prisma.$EntityPayload<ExtArgs>
        fields: Prisma.EntityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          findFirst: {
            args: Prisma.EntityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          findMany: {
            args: Prisma.EntityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>[]
          }
          create: {
            args: Prisma.EntityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          createMany: {
            args: Prisma.EntityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>[]
          }
          delete: {
            args: Prisma.EntityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          update: {
            args: Prisma.EntityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          deleteMany: {
            args: Prisma.EntityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EntityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntityPayload>
          }
          aggregate: {
            args: Prisma.EntityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntity>
          }
          groupBy: {
            args: Prisma.EntityGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntityGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntityCountArgs<ExtArgs>
            result: $Utils.Optional<EntityCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Screener: {
        payload: Prisma.$ScreenerPayload<ExtArgs>
        fields: Prisma.ScreenerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScreenerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScreenerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerPayload>
          }
          findFirst: {
            args: Prisma.ScreenerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScreenerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerPayload>
          }
          findMany: {
            args: Prisma.ScreenerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerPayload>[]
          }
          create: {
            args: Prisma.ScreenerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerPayload>
          }
          createMany: {
            args: Prisma.ScreenerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScreenerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerPayload>[]
          }
          delete: {
            args: Prisma.ScreenerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerPayload>
          }
          update: {
            args: Prisma.ScreenerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerPayload>
          }
          deleteMany: {
            args: Prisma.ScreenerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScreenerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScreenerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenerPayload>
          }
          aggregate: {
            args: Prisma.ScreenerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScreener>
          }
          groupBy: {
            args: Prisma.ScreenerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScreenerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScreenerCountArgs<ExtArgs>
            result: $Utils.Optional<ScreenerCountAggregateOutputType> | number
          }
        }
      }
      Transformer: {
        payload: Prisma.$TransformerPayload<ExtArgs>
        fields: Prisma.TransformerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransformerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransformerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformerPayload>
          }
          findFirst: {
            args: Prisma.TransformerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransformerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformerPayload>
          }
          findMany: {
            args: Prisma.TransformerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformerPayload>[]
          }
          create: {
            args: Prisma.TransformerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformerPayload>
          }
          createMany: {
            args: Prisma.TransformerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransformerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformerPayload>[]
          }
          delete: {
            args: Prisma.TransformerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformerPayload>
          }
          update: {
            args: Prisma.TransformerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformerPayload>
          }
          deleteMany: {
            args: Prisma.TransformerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransformerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransformerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransformerPayload>
          }
          aggregate: {
            args: Prisma.TransformerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransformer>
          }
          groupBy: {
            args: Prisma.TransformerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransformerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransformerCountArgs<ExtArgs>
            result: $Utils.Optional<TransformerCountAggregateOutputType> | number
          }
        }
      }
      landfillArea: {
        payload: Prisma.$landfillAreaPayload<ExtArgs>
        fields: Prisma.landfillAreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.landfillAreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landfillAreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.landfillAreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landfillAreaPayload>
          }
          findFirst: {
            args: Prisma.landfillAreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landfillAreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.landfillAreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landfillAreaPayload>
          }
          findMany: {
            args: Prisma.landfillAreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landfillAreaPayload>[]
          }
          create: {
            args: Prisma.landfillAreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landfillAreaPayload>
          }
          createMany: {
            args: Prisma.landfillAreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.landfillAreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landfillAreaPayload>[]
          }
          delete: {
            args: Prisma.landfillAreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landfillAreaPayload>
          }
          update: {
            args: Prisma.landfillAreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landfillAreaPayload>
          }
          deleteMany: {
            args: Prisma.landfillAreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.landfillAreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.landfillAreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$landfillAreaPayload>
          }
          aggregate: {
            args: Prisma.LandfillAreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLandfillArea>
          }
          groupBy: {
            args: Prisma.landfillAreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<LandfillAreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.landfillAreaCountArgs<ExtArgs>
            result: $Utils.Optional<LandfillAreaCountAggregateOutputType> | number
          }
        }
      }
      Landfills: {
        payload: Prisma.$LandfillsPayload<ExtArgs>
        fields: Prisma.LandfillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LandfillsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandfillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LandfillsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandfillsPayload>
          }
          findFirst: {
            args: Prisma.LandfillsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandfillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LandfillsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandfillsPayload>
          }
          findMany: {
            args: Prisma.LandfillsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandfillsPayload>[]
          }
          create: {
            args: Prisma.LandfillsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandfillsPayload>
          }
          createMany: {
            args: Prisma.LandfillsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LandfillsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandfillsPayload>[]
          }
          delete: {
            args: Prisma.LandfillsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandfillsPayload>
          }
          update: {
            args: Prisma.LandfillsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandfillsPayload>
          }
          deleteMany: {
            args: Prisma.LandfillsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LandfillsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LandfillsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandfillsPayload>
          }
          aggregate: {
            args: Prisma.LandfillsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLandfills>
          }
          groupBy: {
            args: Prisma.LandfillsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LandfillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LandfillsCountArgs<ExtArgs>
            result: $Utils.Optional<LandfillsCountAggregateOutputType> | number
          }
        }
      }
      Waqf: {
        payload: Prisma.$WaqfPayload<ExtArgs>
        fields: Prisma.WaqfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaqfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaqfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfPayload>
          }
          findFirst: {
            args: Prisma.WaqfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaqfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfPayload>
          }
          findMany: {
            args: Prisma.WaqfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfPayload>[]
          }
          create: {
            args: Prisma.WaqfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfPayload>
          }
          createMany: {
            args: Prisma.WaqfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaqfCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfPayload>[]
          }
          delete: {
            args: Prisma.WaqfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfPayload>
          }
          update: {
            args: Prisma.WaqfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfPayload>
          }
          deleteMany: {
            args: Prisma.WaqfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaqfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WaqfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfPayload>
          }
          aggregate: {
            args: Prisma.WaqfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaqf>
          }
          groupBy: {
            args: Prisma.WaqfGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaqfGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaqfCountArgs<ExtArgs>
            result: $Utils.Optional<WaqfCountAggregateOutputType> | number
          }
        }
      }
      WaqfCause: {
        payload: Prisma.$WaqfCausePayload<ExtArgs>
        fields: Prisma.WaqfCauseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaqfCauseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfCausePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaqfCauseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfCausePayload>
          }
          findFirst: {
            args: Prisma.WaqfCauseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfCausePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaqfCauseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfCausePayload>
          }
          findMany: {
            args: Prisma.WaqfCauseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfCausePayload>[]
          }
          create: {
            args: Prisma.WaqfCauseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfCausePayload>
          }
          createMany: {
            args: Prisma.WaqfCauseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaqfCauseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfCausePayload>[]
          }
          delete: {
            args: Prisma.WaqfCauseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfCausePayload>
          }
          update: {
            args: Prisma.WaqfCauseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfCausePayload>
          }
          deleteMany: {
            args: Prisma.WaqfCauseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaqfCauseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WaqfCauseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaqfCausePayload>
          }
          aggregate: {
            args: Prisma.WaqfCauseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaqfCause>
          }
          groupBy: {
            args: Prisma.WaqfCauseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaqfCauseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaqfCauseCountArgs<ExtArgs>
            result: $Utils.Optional<WaqfCauseCountAggregateOutputType> | number
          }
        }
      }
      CauseOnWaqf: {
        payload: Prisma.$CauseOnWaqfPayload<ExtArgs>
        fields: Prisma.CauseOnWaqfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CauseOnWaqfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CauseOnWaqfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CauseOnWaqfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CauseOnWaqfPayload>
          }
          findFirst: {
            args: Prisma.CauseOnWaqfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CauseOnWaqfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CauseOnWaqfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CauseOnWaqfPayload>
          }
          findMany: {
            args: Prisma.CauseOnWaqfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CauseOnWaqfPayload>[]
          }
          create: {
            args: Prisma.CauseOnWaqfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CauseOnWaqfPayload>
          }
          createMany: {
            args: Prisma.CauseOnWaqfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CauseOnWaqfCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CauseOnWaqfPayload>[]
          }
          delete: {
            args: Prisma.CauseOnWaqfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CauseOnWaqfPayload>
          }
          update: {
            args: Prisma.CauseOnWaqfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CauseOnWaqfPayload>
          }
          deleteMany: {
            args: Prisma.CauseOnWaqfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CauseOnWaqfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CauseOnWaqfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CauseOnWaqfPayload>
          }
          aggregate: {
            args: Prisma.CauseOnWaqfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCauseOnWaqf>
          }
          groupBy: {
            args: Prisma.CauseOnWaqfGroupByArgs<ExtArgs>
            result: $Utils.Optional<CauseOnWaqfGroupByOutputType>[]
          }
          count: {
            args: Prisma.CauseOnWaqfCountArgs<ExtArgs>
            result: $Utils.Optional<CauseOnWaqfCountAggregateOutputType> | number
          }
        }
      }
      Transactions: {
        payload: Prisma.$TransactionsPayload<ExtArgs>
        fields: Prisma.TransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findFirst: {
            args: Prisma.TransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findMany: {
            args: Prisma.TransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          create: {
            args: Prisma.TransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          createMany: {
            args: Prisma.TransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          delete: {
            args: Prisma.TransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          update: {
            args: Prisma.TransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          deleteMany: {
            args: Prisma.TransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.TransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
      History: {
        payload: Prisma.$HistoryPayload<ExtArgs>
        fields: Prisma.HistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findFirst: {
            args: Prisma.HistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findMany: {
            args: Prisma.HistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          create: {
            args: Prisma.HistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          createMany: {
            args: Prisma.HistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          delete: {
            args: Prisma.HistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          update: {
            args: Prisma.HistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          deleteMany: {
            args: Prisma.HistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          aggregate: {
            args: Prisma.HistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistory>
          }
          groupBy: {
            args: Prisma.HistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Transactions: number
    History: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    History?: boolean | UserCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }


  /**
   * Count Type EntityCountOutputType
   */

  export type EntityCountOutputType = {
    History: number
    Transactions: number
  }

  export type EntityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    History?: boolean | EntityCountOutputTypeCountHistoryArgs
    Transactions?: boolean | EntityCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntityCountOutputType
     */
    select?: EntityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }

  /**
   * EntityCountOutputType without action
   */
  export type EntityCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Count Type ScreenerCountOutputType
   */

  export type ScreenerCountOutputType = {
    Landfills: number
    Transactions: number
    History: number
  }

  export type ScreenerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Landfills?: boolean | ScreenerCountOutputTypeCountLandfillsArgs
    Transactions?: boolean | ScreenerCountOutputTypeCountTransactionsArgs
    History?: boolean | ScreenerCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * ScreenerCountOutputType without action
   */
  export type ScreenerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenerCountOutputType
     */
    select?: ScreenerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScreenerCountOutputType without action
   */
  export type ScreenerCountOutputTypeCountLandfillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandfillsWhereInput
  }

  /**
   * ScreenerCountOutputType without action
   */
  export type ScreenerCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }

  /**
   * ScreenerCountOutputType without action
   */
  export type ScreenerCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }


  /**
   * Count Type TransformerCountOutputType
   */

  export type TransformerCountOutputType = {
    Landfills: number
    Transactions: number
    History: number
  }

  export type TransformerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Landfills?: boolean | TransformerCountOutputTypeCountLandfillsArgs
    Transactions?: boolean | TransformerCountOutputTypeCountTransactionsArgs
    History?: boolean | TransformerCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * TransformerCountOutputType without action
   */
  export type TransformerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransformerCountOutputType
     */
    select?: TransformerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransformerCountOutputType without action
   */
  export type TransformerCountOutputTypeCountLandfillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandfillsWhereInput
  }

  /**
   * TransformerCountOutputType without action
   */
  export type TransformerCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }

  /**
   * TransformerCountOutputType without action
   */
  export type TransformerCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }


  /**
   * Count Type LandfillAreaCountOutputType
   */

  export type LandfillAreaCountOutputType = {
    landfills: number
  }

  export type LandfillAreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    landfills?: boolean | LandfillAreaCountOutputTypeCountLandfillsArgs
  }

  // Custom InputTypes
  /**
   * LandfillAreaCountOutputType without action
   */
  export type LandfillAreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandfillAreaCountOutputType
     */
    select?: LandfillAreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LandfillAreaCountOutputType without action
   */
  export type LandfillAreaCountOutputTypeCountLandfillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandfillsWhereInput
  }


  /**
   * Count Type LandfillsCountOutputType
   */

  export type LandfillsCountOutputType = {
    Transactions: number
    History: number
  }

  export type LandfillsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transactions?: boolean | LandfillsCountOutputTypeCountTransactionsArgs
    History?: boolean | LandfillsCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * LandfillsCountOutputType without action
   */
  export type LandfillsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandfillsCountOutputType
     */
    select?: LandfillsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LandfillsCountOutputType without action
   */
  export type LandfillsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }

  /**
   * LandfillsCountOutputType without action
   */
  export type LandfillsCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }


  /**
   * Count Type WaqfCountOutputType
   */

  export type WaqfCountOutputType = {
    CauseOnWaqf: number
    History: number
    Transactions: number
  }

  export type WaqfCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CauseOnWaqf?: boolean | WaqfCountOutputTypeCountCauseOnWaqfArgs
    History?: boolean | WaqfCountOutputTypeCountHistoryArgs
    Transactions?: boolean | WaqfCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * WaqfCountOutputType without action
   */
  export type WaqfCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaqfCountOutputType
     */
    select?: WaqfCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WaqfCountOutputType without action
   */
  export type WaqfCountOutputTypeCountCauseOnWaqfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CauseOnWaqfWhereInput
  }

  /**
   * WaqfCountOutputType without action
   */
  export type WaqfCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }

  /**
   * WaqfCountOutputType without action
   */
  export type WaqfCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Count Type WaqfCauseCountOutputType
   */

  export type WaqfCauseCountOutputType = {
    CauseOnWaqf: number
  }

  export type WaqfCauseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CauseOnWaqf?: boolean | WaqfCauseCountOutputTypeCountCauseOnWaqfArgs
  }

  // Custom InputTypes
  /**
   * WaqfCauseCountOutputType without action
   */
  export type WaqfCauseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaqfCauseCountOutputType
     */
    select?: WaqfCauseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WaqfCauseCountOutputType without action
   */
  export type WaqfCauseCountOutputTypeCountCauseOnWaqfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CauseOnWaqfWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    icNumber: number | null
    zipCode: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    icNumber: number | null
    zipCode: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    frontName: string | null
    familyName: string | null
    dateofbirth: Date | null
    icNumber: number | null
    address: string | null
    phoneNumber: string | null
    username: string | null
    zipCode: number | null
    province: string | null
    city: string | null
    country: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    frontName: string | null
    familyName: string | null
    dateofbirth: Date | null
    icNumber: number | null
    address: string | null
    phoneNumber: string | null
    username: string | null
    zipCode: number | null
    province: string | null
    city: string | null
    country: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    frontName: number
    familyName: number
    dateofbirth: number
    icNumber: number
    address: number
    phoneNumber: number
    username: number
    zipCode: number
    province: number
    city: number
    country: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    icNumber?: true
    zipCode?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    icNumber?: true
    zipCode?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    frontName?: true
    familyName?: true
    dateofbirth?: true
    icNumber?: true
    address?: true
    phoneNumber?: true
    username?: true
    zipCode?: true
    province?: true
    city?: true
    country?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    frontName?: true
    familyName?: true
    dateofbirth?: true
    icNumber?: true
    address?: true
    phoneNumber?: true
    username?: true
    zipCode?: true
    province?: true
    city?: true
    country?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    frontName?: true
    familyName?: true
    dateofbirth?: true
    icNumber?: true
    address?: true
    phoneNumber?: true
    username?: true
    zipCode?: true
    province?: true
    city?: true
    country?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    frontName: string | null
    familyName: string | null
    dateofbirth: Date | null
    icNumber: number | null
    address: string | null
    phoneNumber: string | null
    username: string
    zipCode: number | null
    province: string | null
    city: string | null
    country: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    frontName?: boolean
    familyName?: boolean
    dateofbirth?: boolean
    icNumber?: boolean
    address?: boolean
    phoneNumber?: boolean
    username?: boolean
    zipCode?: boolean
    province?: boolean
    city?: boolean
    country?: boolean
    Transactions?: boolean | User$TransactionsArgs<ExtArgs>
    History?: boolean | User$HistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    frontName?: boolean
    familyName?: boolean
    dateofbirth?: boolean
    icNumber?: boolean
    address?: boolean
    phoneNumber?: boolean
    username?: boolean
    zipCode?: boolean
    province?: boolean
    city?: boolean
    country?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    frontName?: boolean
    familyName?: boolean
    dateofbirth?: boolean
    icNumber?: boolean
    address?: boolean
    phoneNumber?: boolean
    username?: boolean
    zipCode?: boolean
    province?: boolean
    city?: boolean
    country?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transactions?: boolean | User$TransactionsArgs<ExtArgs>
    History?: boolean | User$HistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Transactions: Prisma.$TransactionsPayload<ExtArgs>[]
      History: Prisma.$HistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      frontName: string | null
      familyName: string | null
      dateofbirth: Date | null
      icNumber: number | null
      address: string | null
      phoneNumber: string | null
      username: string
      zipCode: number | null
      province: string | null
      city: string | null
      country: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Transactions<T extends User$TransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$TransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany"> | Null>
    History<T extends User$HistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$HistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly frontName: FieldRef<"User", 'String'>
    readonly familyName: FieldRef<"User", 'String'>
    readonly dateofbirth: FieldRef<"User", 'DateTime'>
    readonly icNumber: FieldRef<"User", 'Int'>
    readonly address: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly zipCode: FieldRef<"User", 'Int'>
    readonly province: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.Transactions
   */
  export type User$TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * User.History
   */
  export type User$HistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Entity
   */

  export type AggregateEntity = {
    _count: EntityCountAggregateOutputType | null
    _avg: EntityAvgAggregateOutputType | null
    _sum: EntitySumAggregateOutputType | null
    _min: EntityMinAggregateOutputType | null
    _max: EntityMaxAggregateOutputType | null
  }

  export type EntityAvgAggregateOutputType = {
    id: number | null
    companyZipCode: number | null
  }

  export type EntitySumAggregateOutputType = {
    id: number | null
    companyZipCode: number | null
  }

  export type EntityMinAggregateOutputType = {
    id: number | null
    companyUsername: string | null
    password: string | null
    picFrontName: string | null
    picFamilyName: string | null
    picPhoneNumber: string | null
    dateofbirth: Date | null
    companyName: string | null
    companyAddress: string | null
    companyPhoneNumber: string | null
    companyZipCode: number | null
    companyEmail: string | null
    companyRegistrationNumber: string | null
  }

  export type EntityMaxAggregateOutputType = {
    id: number | null
    companyUsername: string | null
    password: string | null
    picFrontName: string | null
    picFamilyName: string | null
    picPhoneNumber: string | null
    dateofbirth: Date | null
    companyName: string | null
    companyAddress: string | null
    companyPhoneNumber: string | null
    companyZipCode: number | null
    companyEmail: string | null
    companyRegistrationNumber: string | null
  }

  export type EntityCountAggregateOutputType = {
    id: number
    companyUsername: number
    password: number
    picFrontName: number
    picFamilyName: number
    picPhoneNumber: number
    dateofbirth: number
    companyName: number
    companyAddress: number
    companyPhoneNumber: number
    companyZipCode: number
    companyEmail: number
    companyRegistrationNumber: number
    _all: number
  }


  export type EntityAvgAggregateInputType = {
    id?: true
    companyZipCode?: true
  }

  export type EntitySumAggregateInputType = {
    id?: true
    companyZipCode?: true
  }

  export type EntityMinAggregateInputType = {
    id?: true
    companyUsername?: true
    password?: true
    picFrontName?: true
    picFamilyName?: true
    picPhoneNumber?: true
    dateofbirth?: true
    companyName?: true
    companyAddress?: true
    companyPhoneNumber?: true
    companyZipCode?: true
    companyEmail?: true
    companyRegistrationNumber?: true
  }

  export type EntityMaxAggregateInputType = {
    id?: true
    companyUsername?: true
    password?: true
    picFrontName?: true
    picFamilyName?: true
    picPhoneNumber?: true
    dateofbirth?: true
    companyName?: true
    companyAddress?: true
    companyPhoneNumber?: true
    companyZipCode?: true
    companyEmail?: true
    companyRegistrationNumber?: true
  }

  export type EntityCountAggregateInputType = {
    id?: true
    companyUsername?: true
    password?: true
    picFrontName?: true
    picFamilyName?: true
    picPhoneNumber?: true
    dateofbirth?: true
    companyName?: true
    companyAddress?: true
    companyPhoneNumber?: true
    companyZipCode?: true
    companyEmail?: true
    companyRegistrationNumber?: true
    _all?: true
  }

  export type EntityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entity to aggregate.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entities
    **/
    _count?: true | EntityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntityMaxAggregateInputType
  }

  export type GetEntityAggregateType<T extends EntityAggregateArgs> = {
        [P in keyof T & keyof AggregateEntity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntity[P]>
      : GetScalarType<T[P], AggregateEntity[P]>
  }




  export type EntityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntityWhereInput
    orderBy?: EntityOrderByWithAggregationInput | EntityOrderByWithAggregationInput[]
    by: EntityScalarFieldEnum[] | EntityScalarFieldEnum
    having?: EntityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntityCountAggregateInputType | true
    _avg?: EntityAvgAggregateInputType
    _sum?: EntitySumAggregateInputType
    _min?: EntityMinAggregateInputType
    _max?: EntityMaxAggregateInputType
  }

  export type EntityGroupByOutputType = {
    id: number
    companyUsername: string
    password: string
    picFrontName: string | null
    picFamilyName: string | null
    picPhoneNumber: string | null
    dateofbirth: Date | null
    companyName: string | null
    companyAddress: string | null
    companyPhoneNumber: string | null
    companyZipCode: number | null
    companyEmail: string | null
    companyRegistrationNumber: string | null
    _count: EntityCountAggregateOutputType | null
    _avg: EntityAvgAggregateOutputType | null
    _sum: EntitySumAggregateOutputType | null
    _min: EntityMinAggregateOutputType | null
    _max: EntityMaxAggregateOutputType | null
  }

  type GetEntityGroupByPayload<T extends EntityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntityGroupByOutputType[P]>
            : GetScalarType<T[P], EntityGroupByOutputType[P]>
        }
      >
    >


  export type EntitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyUsername?: boolean
    password?: boolean
    picFrontName?: boolean
    picFamilyName?: boolean
    picPhoneNumber?: boolean
    dateofbirth?: boolean
    companyName?: boolean
    companyAddress?: boolean
    companyPhoneNumber?: boolean
    companyZipCode?: boolean
    companyEmail?: boolean
    companyRegistrationNumber?: boolean
    History?: boolean | Entity$HistoryArgs<ExtArgs>
    Transactions?: boolean | Entity$TransactionsArgs<ExtArgs>
    _count?: boolean | EntityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entity"]>

  export type EntitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyUsername?: boolean
    password?: boolean
    picFrontName?: boolean
    picFamilyName?: boolean
    picPhoneNumber?: boolean
    dateofbirth?: boolean
    companyName?: boolean
    companyAddress?: boolean
    companyPhoneNumber?: boolean
    companyZipCode?: boolean
    companyEmail?: boolean
    companyRegistrationNumber?: boolean
  }, ExtArgs["result"]["entity"]>

  export type EntitySelectScalar = {
    id?: boolean
    companyUsername?: boolean
    password?: boolean
    picFrontName?: boolean
    picFamilyName?: boolean
    picPhoneNumber?: boolean
    dateofbirth?: boolean
    companyName?: boolean
    companyAddress?: boolean
    companyPhoneNumber?: boolean
    companyZipCode?: boolean
    companyEmail?: boolean
    companyRegistrationNumber?: boolean
  }

  export type EntityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    History?: boolean | Entity$HistoryArgs<ExtArgs>
    Transactions?: boolean | Entity$TransactionsArgs<ExtArgs>
    _count?: boolean | EntityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EntityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EntityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entity"
    objects: {
      History: Prisma.$HistoryPayload<ExtArgs>[]
      Transactions: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyUsername: string
      password: string
      picFrontName: string | null
      picFamilyName: string | null
      picPhoneNumber: string | null
      dateofbirth: Date | null
      companyName: string | null
      companyAddress: string | null
      companyPhoneNumber: string | null
      companyZipCode: number | null
      companyEmail: string | null
      companyRegistrationNumber: string | null
    }, ExtArgs["result"]["entity"]>
    composites: {}
  }

  type EntityGetPayload<S extends boolean | null | undefined | EntityDefaultArgs> = $Result.GetResult<Prisma.$EntityPayload, S>

  type EntityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EntityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EntityCountAggregateInputType | true
    }

  export interface EntityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entity'], meta: { name: 'Entity' } }
    /**
     * Find zero or one Entity that matches the filter.
     * @param {EntityFindUniqueArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntityFindUniqueArgs>(args: SelectSubset<T, EntityFindUniqueArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Entity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EntityFindUniqueOrThrowArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntityFindUniqueOrThrowArgs>(args: SelectSubset<T, EntityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Entity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindFirstArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntityFindFirstArgs>(args?: SelectSubset<T, EntityFindFirstArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Entity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindFirstOrThrowArgs} args - Arguments to find a Entity
     * @example
     * // Get one Entity
     * const entity = await prisma.entity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntityFindFirstOrThrowArgs>(args?: SelectSubset<T, EntityFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Entities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entities
     * const entities = await prisma.entity.findMany()
     * 
     * // Get first 10 Entities
     * const entities = await prisma.entity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entityWithIdOnly = await prisma.entity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntityFindManyArgs>(args?: SelectSubset<T, EntityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Entity.
     * @param {EntityCreateArgs} args - Arguments to create a Entity.
     * @example
     * // Create one Entity
     * const Entity = await prisma.entity.create({
     *   data: {
     *     // ... data to create a Entity
     *   }
     * })
     * 
     */
    create<T extends EntityCreateArgs>(args: SelectSubset<T, EntityCreateArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Entities.
     * @param {EntityCreateManyArgs} args - Arguments to create many Entities.
     * @example
     * // Create many Entities
     * const entity = await prisma.entity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntityCreateManyArgs>(args?: SelectSubset<T, EntityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entities and returns the data saved in the database.
     * @param {EntityCreateManyAndReturnArgs} args - Arguments to create many Entities.
     * @example
     * // Create many Entities
     * const entity = await prisma.entity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entities and only return the `id`
     * const entityWithIdOnly = await prisma.entity.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntityCreateManyAndReturnArgs>(args?: SelectSubset<T, EntityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Entity.
     * @param {EntityDeleteArgs} args - Arguments to delete one Entity.
     * @example
     * // Delete one Entity
     * const Entity = await prisma.entity.delete({
     *   where: {
     *     // ... filter to delete one Entity
     *   }
     * })
     * 
     */
    delete<T extends EntityDeleteArgs>(args: SelectSubset<T, EntityDeleteArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Entity.
     * @param {EntityUpdateArgs} args - Arguments to update one Entity.
     * @example
     * // Update one Entity
     * const entity = await prisma.entity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntityUpdateArgs>(args: SelectSubset<T, EntityUpdateArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Entities.
     * @param {EntityDeleteManyArgs} args - Arguments to filter Entities to delete.
     * @example
     * // Delete a few Entities
     * const { count } = await prisma.entity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntityDeleteManyArgs>(args?: SelectSubset<T, EntityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entities
     * const entity = await prisma.entity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntityUpdateManyArgs>(args: SelectSubset<T, EntityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entity.
     * @param {EntityUpsertArgs} args - Arguments to update or create a Entity.
     * @example
     * // Update or create a Entity
     * const entity = await prisma.entity.upsert({
     *   create: {
     *     // ... data to create a Entity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entity we want to update
     *   }
     * })
     */
    upsert<T extends EntityUpsertArgs>(args: SelectSubset<T, EntityUpsertArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityCountArgs} args - Arguments to filter Entities to count.
     * @example
     * // Count the number of Entities
     * const count = await prisma.entity.count({
     *   where: {
     *     // ... the filter for the Entities we want to count
     *   }
     * })
    **/
    count<T extends EntityCountArgs>(
      args?: Subset<T, EntityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntityAggregateArgs>(args: Subset<T, EntityAggregateArgs>): Prisma.PrismaPromise<GetEntityAggregateType<T>>

    /**
     * Group by Entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntityGroupByArgs['orderBy'] }
        : { orderBy?: EntityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entity model
   */
  readonly fields: EntityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    History<T extends Entity$HistoryArgs<ExtArgs> = {}>(args?: Subset<T, Entity$HistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany"> | Null>
    Transactions<T extends Entity$TransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Entity$TransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Entity model
   */ 
  interface EntityFieldRefs {
    readonly id: FieldRef<"Entity", 'Int'>
    readonly companyUsername: FieldRef<"Entity", 'String'>
    readonly password: FieldRef<"Entity", 'String'>
    readonly picFrontName: FieldRef<"Entity", 'String'>
    readonly picFamilyName: FieldRef<"Entity", 'String'>
    readonly picPhoneNumber: FieldRef<"Entity", 'String'>
    readonly dateofbirth: FieldRef<"Entity", 'DateTime'>
    readonly companyName: FieldRef<"Entity", 'String'>
    readonly companyAddress: FieldRef<"Entity", 'String'>
    readonly companyPhoneNumber: FieldRef<"Entity", 'String'>
    readonly companyZipCode: FieldRef<"Entity", 'Int'>
    readonly companyEmail: FieldRef<"Entity", 'String'>
    readonly companyRegistrationNumber: FieldRef<"Entity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Entity findUnique
   */
  export type EntityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity findUniqueOrThrow
   */
  export type EntityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity findFirst
   */
  export type EntityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entities.
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entities.
     */
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * Entity findFirstOrThrow
   */
  export type EntityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entity to fetch.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entities.
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entities.
     */
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * Entity findMany
   */
  export type EntityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter, which Entities to fetch.
     */
    where?: EntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entities to fetch.
     */
    orderBy?: EntityOrderByWithRelationInput | EntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entities.
     */
    cursor?: EntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entities.
     */
    skip?: number
    distinct?: EntityScalarFieldEnum | EntityScalarFieldEnum[]
  }

  /**
   * Entity create
   */
  export type EntityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * The data needed to create a Entity.
     */
    data: XOR<EntityCreateInput, EntityUncheckedCreateInput>
  }

  /**
   * Entity createMany
   */
  export type EntityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entities.
     */
    data: EntityCreateManyInput | EntityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entity createManyAndReturn
   */
  export type EntityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Entities.
     */
    data: EntityCreateManyInput | EntityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entity update
   */
  export type EntityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * The data needed to update a Entity.
     */
    data: XOR<EntityUpdateInput, EntityUncheckedUpdateInput>
    /**
     * Choose, which Entity to update.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity updateMany
   */
  export type EntityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entities.
     */
    data: XOR<EntityUpdateManyMutationInput, EntityUncheckedUpdateManyInput>
    /**
     * Filter which Entities to update
     */
    where?: EntityWhereInput
  }

  /**
   * Entity upsert
   */
  export type EntityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * The filter to search for the Entity to update in case it exists.
     */
    where: EntityWhereUniqueInput
    /**
     * In case the Entity found by the `where` argument doesn't exist, create a new Entity with this data.
     */
    create: XOR<EntityCreateInput, EntityUncheckedCreateInput>
    /**
     * In case the Entity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntityUpdateInput, EntityUncheckedUpdateInput>
  }

  /**
   * Entity delete
   */
  export type EntityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    /**
     * Filter which Entity to delete.
     */
    where: EntityWhereUniqueInput
  }

  /**
   * Entity deleteMany
   */
  export type EntityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entities to delete
     */
    where?: EntityWhereInput
  }

  /**
   * Entity.History
   */
  export type Entity$HistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * Entity.Transactions
   */
  export type Entity$TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Entity without action
   */
  export type EntityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    username: number
    password: number
    name: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    username: string | null
    password: string | null
    name: string
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string | null
      password: string | null
      name: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
  }


  /**
   * Model Screener
   */

  export type AggregateScreener = {
    _count: ScreenerCountAggregateOutputType | null
    _avg: ScreenerAvgAggregateOutputType | null
    _sum: ScreenerSumAggregateOutputType | null
    _min: ScreenerMinAggregateOutputType | null
    _max: ScreenerMaxAggregateOutputType | null
  }

  export type ScreenerAvgAggregateOutputType = {
    id: number | null
  }

  export type ScreenerSumAggregateOutputType = {
    id: number | null
  }

  export type ScreenerMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type ScreenerMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type ScreenerCountAggregateOutputType = {
    id: number
    username: number
    password: number
    name: number
    email: number
    phoneNumber: number
    _all: number
  }


  export type ScreenerAvgAggregateInputType = {
    id?: true
  }

  export type ScreenerSumAggregateInputType = {
    id?: true
  }

  export type ScreenerMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    email?: true
    phoneNumber?: true
  }

  export type ScreenerMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    email?: true
    phoneNumber?: true
  }

  export type ScreenerCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    email?: true
    phoneNumber?: true
    _all?: true
  }

  export type ScreenerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Screener to aggregate.
     */
    where?: ScreenerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screeners to fetch.
     */
    orderBy?: ScreenerOrderByWithRelationInput | ScreenerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScreenerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screeners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screeners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Screeners
    **/
    _count?: true | ScreenerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScreenerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScreenerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScreenerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScreenerMaxAggregateInputType
  }

  export type GetScreenerAggregateType<T extends ScreenerAggregateArgs> = {
        [P in keyof T & keyof AggregateScreener]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScreener[P]>
      : GetScalarType<T[P], AggregateScreener[P]>
  }




  export type ScreenerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreenerWhereInput
    orderBy?: ScreenerOrderByWithAggregationInput | ScreenerOrderByWithAggregationInput[]
    by: ScreenerScalarFieldEnum[] | ScreenerScalarFieldEnum
    having?: ScreenerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScreenerCountAggregateInputType | true
    _avg?: ScreenerAvgAggregateInputType
    _sum?: ScreenerSumAggregateInputType
    _min?: ScreenerMinAggregateInputType
    _max?: ScreenerMaxAggregateInputType
  }

  export type ScreenerGroupByOutputType = {
    id: number
    username: string | null
    password: string | null
    name: string
    email: string
    phoneNumber: string
    _count: ScreenerCountAggregateOutputType | null
    _avg: ScreenerAvgAggregateOutputType | null
    _sum: ScreenerSumAggregateOutputType | null
    _min: ScreenerMinAggregateOutputType | null
    _max: ScreenerMaxAggregateOutputType | null
  }

  type GetScreenerGroupByPayload<T extends ScreenerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScreenerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScreenerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScreenerGroupByOutputType[P]>
            : GetScalarType<T[P], ScreenerGroupByOutputType[P]>
        }
      >
    >


  export type ScreenerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    Landfills?: boolean | Screener$LandfillsArgs<ExtArgs>
    Transactions?: boolean | Screener$TransactionsArgs<ExtArgs>
    History?: boolean | Screener$HistoryArgs<ExtArgs>
    _count?: boolean | ScreenerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screener"]>

  export type ScreenerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["screener"]>

  export type ScreenerSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }

  export type ScreenerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Landfills?: boolean | Screener$LandfillsArgs<ExtArgs>
    Transactions?: boolean | Screener$TransactionsArgs<ExtArgs>
    History?: boolean | Screener$HistoryArgs<ExtArgs>
    _count?: boolean | ScreenerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScreenerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ScreenerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Screener"
    objects: {
      Landfills: Prisma.$LandfillsPayload<ExtArgs>[]
      Transactions: Prisma.$TransactionsPayload<ExtArgs>[]
      History: Prisma.$HistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string | null
      password: string | null
      name: string
      email: string
      phoneNumber: string
    }, ExtArgs["result"]["screener"]>
    composites: {}
  }

  type ScreenerGetPayload<S extends boolean | null | undefined | ScreenerDefaultArgs> = $Result.GetResult<Prisma.$ScreenerPayload, S>

  type ScreenerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScreenerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScreenerCountAggregateInputType | true
    }

  export interface ScreenerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Screener'], meta: { name: 'Screener' } }
    /**
     * Find zero or one Screener that matches the filter.
     * @param {ScreenerFindUniqueArgs} args - Arguments to find a Screener
     * @example
     * // Get one Screener
     * const screener = await prisma.screener.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScreenerFindUniqueArgs>(args: SelectSubset<T, ScreenerFindUniqueArgs<ExtArgs>>): Prisma__ScreenerClient<$Result.GetResult<Prisma.$ScreenerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Screener that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ScreenerFindUniqueOrThrowArgs} args - Arguments to find a Screener
     * @example
     * // Get one Screener
     * const screener = await prisma.screener.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScreenerFindUniqueOrThrowArgs>(args: SelectSubset<T, ScreenerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScreenerClient<$Result.GetResult<Prisma.$ScreenerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Screener that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenerFindFirstArgs} args - Arguments to find a Screener
     * @example
     * // Get one Screener
     * const screener = await prisma.screener.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScreenerFindFirstArgs>(args?: SelectSubset<T, ScreenerFindFirstArgs<ExtArgs>>): Prisma__ScreenerClient<$Result.GetResult<Prisma.$ScreenerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Screener that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenerFindFirstOrThrowArgs} args - Arguments to find a Screener
     * @example
     * // Get one Screener
     * const screener = await prisma.screener.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScreenerFindFirstOrThrowArgs>(args?: SelectSubset<T, ScreenerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScreenerClient<$Result.GetResult<Prisma.$ScreenerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Screeners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Screeners
     * const screeners = await prisma.screener.findMany()
     * 
     * // Get first 10 Screeners
     * const screeners = await prisma.screener.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const screenerWithIdOnly = await prisma.screener.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScreenerFindManyArgs>(args?: SelectSubset<T, ScreenerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Screener.
     * @param {ScreenerCreateArgs} args - Arguments to create a Screener.
     * @example
     * // Create one Screener
     * const Screener = await prisma.screener.create({
     *   data: {
     *     // ... data to create a Screener
     *   }
     * })
     * 
     */
    create<T extends ScreenerCreateArgs>(args: SelectSubset<T, ScreenerCreateArgs<ExtArgs>>): Prisma__ScreenerClient<$Result.GetResult<Prisma.$ScreenerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Screeners.
     * @param {ScreenerCreateManyArgs} args - Arguments to create many Screeners.
     * @example
     * // Create many Screeners
     * const screener = await prisma.screener.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScreenerCreateManyArgs>(args?: SelectSubset<T, ScreenerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Screeners and returns the data saved in the database.
     * @param {ScreenerCreateManyAndReturnArgs} args - Arguments to create many Screeners.
     * @example
     * // Create many Screeners
     * const screener = await prisma.screener.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Screeners and only return the `id`
     * const screenerWithIdOnly = await prisma.screener.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScreenerCreateManyAndReturnArgs>(args?: SelectSubset<T, ScreenerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Screener.
     * @param {ScreenerDeleteArgs} args - Arguments to delete one Screener.
     * @example
     * // Delete one Screener
     * const Screener = await prisma.screener.delete({
     *   where: {
     *     // ... filter to delete one Screener
     *   }
     * })
     * 
     */
    delete<T extends ScreenerDeleteArgs>(args: SelectSubset<T, ScreenerDeleteArgs<ExtArgs>>): Prisma__ScreenerClient<$Result.GetResult<Prisma.$ScreenerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Screener.
     * @param {ScreenerUpdateArgs} args - Arguments to update one Screener.
     * @example
     * // Update one Screener
     * const screener = await prisma.screener.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScreenerUpdateArgs>(args: SelectSubset<T, ScreenerUpdateArgs<ExtArgs>>): Prisma__ScreenerClient<$Result.GetResult<Prisma.$ScreenerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Screeners.
     * @param {ScreenerDeleteManyArgs} args - Arguments to filter Screeners to delete.
     * @example
     * // Delete a few Screeners
     * const { count } = await prisma.screener.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScreenerDeleteManyArgs>(args?: SelectSubset<T, ScreenerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Screeners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Screeners
     * const screener = await prisma.screener.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScreenerUpdateManyArgs>(args: SelectSubset<T, ScreenerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Screener.
     * @param {ScreenerUpsertArgs} args - Arguments to update or create a Screener.
     * @example
     * // Update or create a Screener
     * const screener = await prisma.screener.upsert({
     *   create: {
     *     // ... data to create a Screener
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Screener we want to update
     *   }
     * })
     */
    upsert<T extends ScreenerUpsertArgs>(args: SelectSubset<T, ScreenerUpsertArgs<ExtArgs>>): Prisma__ScreenerClient<$Result.GetResult<Prisma.$ScreenerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Screeners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenerCountArgs} args - Arguments to filter Screeners to count.
     * @example
     * // Count the number of Screeners
     * const count = await prisma.screener.count({
     *   where: {
     *     // ... the filter for the Screeners we want to count
     *   }
     * })
    **/
    count<T extends ScreenerCountArgs>(
      args?: Subset<T, ScreenerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScreenerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Screener.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScreenerAggregateArgs>(args: Subset<T, ScreenerAggregateArgs>): Prisma.PrismaPromise<GetScreenerAggregateType<T>>

    /**
     * Group by Screener.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScreenerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScreenerGroupByArgs['orderBy'] }
        : { orderBy?: ScreenerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScreenerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScreenerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Screener model
   */
  readonly fields: ScreenerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Screener.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScreenerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Landfills<T extends Screener$LandfillsArgs<ExtArgs> = {}>(args?: Subset<T, Screener$LandfillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandfillsPayload<ExtArgs>, T, "findMany"> | Null>
    Transactions<T extends Screener$TransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Screener$TransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany"> | Null>
    History<T extends Screener$HistoryArgs<ExtArgs> = {}>(args?: Subset<T, Screener$HistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Screener model
   */ 
  interface ScreenerFieldRefs {
    readonly id: FieldRef<"Screener", 'Int'>
    readonly username: FieldRef<"Screener", 'String'>
    readonly password: FieldRef<"Screener", 'String'>
    readonly name: FieldRef<"Screener", 'String'>
    readonly email: FieldRef<"Screener", 'String'>
    readonly phoneNumber: FieldRef<"Screener", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Screener findUnique
   */
  export type ScreenerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screener
     */
    select?: ScreenerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerInclude<ExtArgs> | null
    /**
     * Filter, which Screener to fetch.
     */
    where: ScreenerWhereUniqueInput
  }

  /**
   * Screener findUniqueOrThrow
   */
  export type ScreenerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screener
     */
    select?: ScreenerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerInclude<ExtArgs> | null
    /**
     * Filter, which Screener to fetch.
     */
    where: ScreenerWhereUniqueInput
  }

  /**
   * Screener findFirst
   */
  export type ScreenerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screener
     */
    select?: ScreenerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerInclude<ExtArgs> | null
    /**
     * Filter, which Screener to fetch.
     */
    where?: ScreenerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screeners to fetch.
     */
    orderBy?: ScreenerOrderByWithRelationInput | ScreenerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Screeners.
     */
    cursor?: ScreenerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screeners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screeners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Screeners.
     */
    distinct?: ScreenerScalarFieldEnum | ScreenerScalarFieldEnum[]
  }

  /**
   * Screener findFirstOrThrow
   */
  export type ScreenerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screener
     */
    select?: ScreenerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerInclude<ExtArgs> | null
    /**
     * Filter, which Screener to fetch.
     */
    where?: ScreenerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screeners to fetch.
     */
    orderBy?: ScreenerOrderByWithRelationInput | ScreenerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Screeners.
     */
    cursor?: ScreenerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screeners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screeners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Screeners.
     */
    distinct?: ScreenerScalarFieldEnum | ScreenerScalarFieldEnum[]
  }

  /**
   * Screener findMany
   */
  export type ScreenerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screener
     */
    select?: ScreenerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerInclude<ExtArgs> | null
    /**
     * Filter, which Screeners to fetch.
     */
    where?: ScreenerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screeners to fetch.
     */
    orderBy?: ScreenerOrderByWithRelationInput | ScreenerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Screeners.
     */
    cursor?: ScreenerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screeners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screeners.
     */
    skip?: number
    distinct?: ScreenerScalarFieldEnum | ScreenerScalarFieldEnum[]
  }

  /**
   * Screener create
   */
  export type ScreenerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screener
     */
    select?: ScreenerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerInclude<ExtArgs> | null
    /**
     * The data needed to create a Screener.
     */
    data: XOR<ScreenerCreateInput, ScreenerUncheckedCreateInput>
  }

  /**
   * Screener createMany
   */
  export type ScreenerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Screeners.
     */
    data: ScreenerCreateManyInput | ScreenerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Screener createManyAndReturn
   */
  export type ScreenerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screener
     */
    select?: ScreenerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Screeners.
     */
    data: ScreenerCreateManyInput | ScreenerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Screener update
   */
  export type ScreenerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screener
     */
    select?: ScreenerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerInclude<ExtArgs> | null
    /**
     * The data needed to update a Screener.
     */
    data: XOR<ScreenerUpdateInput, ScreenerUncheckedUpdateInput>
    /**
     * Choose, which Screener to update.
     */
    where: ScreenerWhereUniqueInput
  }

  /**
   * Screener updateMany
   */
  export type ScreenerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Screeners.
     */
    data: XOR<ScreenerUpdateManyMutationInput, ScreenerUncheckedUpdateManyInput>
    /**
     * Filter which Screeners to update
     */
    where?: ScreenerWhereInput
  }

  /**
   * Screener upsert
   */
  export type ScreenerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screener
     */
    select?: ScreenerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerInclude<ExtArgs> | null
    /**
     * The filter to search for the Screener to update in case it exists.
     */
    where: ScreenerWhereUniqueInput
    /**
     * In case the Screener found by the `where` argument doesn't exist, create a new Screener with this data.
     */
    create: XOR<ScreenerCreateInput, ScreenerUncheckedCreateInput>
    /**
     * In case the Screener was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScreenerUpdateInput, ScreenerUncheckedUpdateInput>
  }

  /**
   * Screener delete
   */
  export type ScreenerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screener
     */
    select?: ScreenerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerInclude<ExtArgs> | null
    /**
     * Filter which Screener to delete.
     */
    where: ScreenerWhereUniqueInput
  }

  /**
   * Screener deleteMany
   */
  export type ScreenerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Screeners to delete
     */
    where?: ScreenerWhereInput
  }

  /**
   * Screener.Landfills
   */
  export type Screener$LandfillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landfills
     */
    select?: LandfillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandfillsInclude<ExtArgs> | null
    where?: LandfillsWhereInput
    orderBy?: LandfillsOrderByWithRelationInput | LandfillsOrderByWithRelationInput[]
    cursor?: LandfillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LandfillsScalarFieldEnum | LandfillsScalarFieldEnum[]
  }

  /**
   * Screener.Transactions
   */
  export type Screener$TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Screener.History
   */
  export type Screener$HistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * Screener without action
   */
  export type ScreenerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screener
     */
    select?: ScreenerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerInclude<ExtArgs> | null
  }


  /**
   * Model Transformer
   */

  export type AggregateTransformer = {
    _count: TransformerCountAggregateOutputType | null
    _avg: TransformerAvgAggregateOutputType | null
    _sum: TransformerSumAggregateOutputType | null
    _min: TransformerMinAggregateOutputType | null
    _max: TransformerMaxAggregateOutputType | null
  }

  export type TransformerAvgAggregateOutputType = {
    id: number | null
  }

  export type TransformerSumAggregateOutputType = {
    id: number | null
  }

  export type TransformerMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type TransformerMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type TransformerCountAggregateOutputType = {
    id: number
    username: number
    password: number
    name: number
    email: number
    phoneNumber: number
    _all: number
  }


  export type TransformerAvgAggregateInputType = {
    id?: true
  }

  export type TransformerSumAggregateInputType = {
    id?: true
  }

  export type TransformerMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    email?: true
    phoneNumber?: true
  }

  export type TransformerMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    email?: true
    phoneNumber?: true
  }

  export type TransformerCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    email?: true
    phoneNumber?: true
    _all?: true
  }

  export type TransformerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transformer to aggregate.
     */
    where?: TransformerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transformers to fetch.
     */
    orderBy?: TransformerOrderByWithRelationInput | TransformerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransformerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transformers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transformers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transformers
    **/
    _count?: true | TransformerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransformerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransformerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransformerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransformerMaxAggregateInputType
  }

  export type GetTransformerAggregateType<T extends TransformerAggregateArgs> = {
        [P in keyof T & keyof AggregateTransformer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransformer[P]>
      : GetScalarType<T[P], AggregateTransformer[P]>
  }




  export type TransformerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransformerWhereInput
    orderBy?: TransformerOrderByWithAggregationInput | TransformerOrderByWithAggregationInput[]
    by: TransformerScalarFieldEnum[] | TransformerScalarFieldEnum
    having?: TransformerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransformerCountAggregateInputType | true
    _avg?: TransformerAvgAggregateInputType
    _sum?: TransformerSumAggregateInputType
    _min?: TransformerMinAggregateInputType
    _max?: TransformerMaxAggregateInputType
  }

  export type TransformerGroupByOutputType = {
    id: number
    username: string | null
    password: string | null
    name: string
    email: string
    phoneNumber: string
    _count: TransformerCountAggregateOutputType | null
    _avg: TransformerAvgAggregateOutputType | null
    _sum: TransformerSumAggregateOutputType | null
    _min: TransformerMinAggregateOutputType | null
    _max: TransformerMaxAggregateOutputType | null
  }

  type GetTransformerGroupByPayload<T extends TransformerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransformerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransformerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransformerGroupByOutputType[P]>
            : GetScalarType<T[P], TransformerGroupByOutputType[P]>
        }
      >
    >


  export type TransformerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    Landfills?: boolean | Transformer$LandfillsArgs<ExtArgs>
    Transactions?: boolean | Transformer$TransactionsArgs<ExtArgs>
    History?: boolean | Transformer$HistoryArgs<ExtArgs>
    _count?: boolean | TransformerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transformer"]>

  export type TransformerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["transformer"]>

  export type TransformerSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }

  export type TransformerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Landfills?: boolean | Transformer$LandfillsArgs<ExtArgs>
    Transactions?: boolean | Transformer$TransactionsArgs<ExtArgs>
    History?: boolean | Transformer$HistoryArgs<ExtArgs>
    _count?: boolean | TransformerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransformerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TransformerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transformer"
    objects: {
      Landfills: Prisma.$LandfillsPayload<ExtArgs>[]
      Transactions: Prisma.$TransactionsPayload<ExtArgs>[]
      History: Prisma.$HistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string | null
      password: string | null
      name: string
      email: string
      phoneNumber: string
    }, ExtArgs["result"]["transformer"]>
    composites: {}
  }

  type TransformerGetPayload<S extends boolean | null | undefined | TransformerDefaultArgs> = $Result.GetResult<Prisma.$TransformerPayload, S>

  type TransformerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransformerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransformerCountAggregateInputType | true
    }

  export interface TransformerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transformer'], meta: { name: 'Transformer' } }
    /**
     * Find zero or one Transformer that matches the filter.
     * @param {TransformerFindUniqueArgs} args - Arguments to find a Transformer
     * @example
     * // Get one Transformer
     * const transformer = await prisma.transformer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransformerFindUniqueArgs>(args: SelectSubset<T, TransformerFindUniqueArgs<ExtArgs>>): Prisma__TransformerClient<$Result.GetResult<Prisma.$TransformerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transformer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransformerFindUniqueOrThrowArgs} args - Arguments to find a Transformer
     * @example
     * // Get one Transformer
     * const transformer = await prisma.transformer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransformerFindUniqueOrThrowArgs>(args: SelectSubset<T, TransformerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransformerClient<$Result.GetResult<Prisma.$TransformerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transformer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransformerFindFirstArgs} args - Arguments to find a Transformer
     * @example
     * // Get one Transformer
     * const transformer = await prisma.transformer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransformerFindFirstArgs>(args?: SelectSubset<T, TransformerFindFirstArgs<ExtArgs>>): Prisma__TransformerClient<$Result.GetResult<Prisma.$TransformerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transformer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransformerFindFirstOrThrowArgs} args - Arguments to find a Transformer
     * @example
     * // Get one Transformer
     * const transformer = await prisma.transformer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransformerFindFirstOrThrowArgs>(args?: SelectSubset<T, TransformerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransformerClient<$Result.GetResult<Prisma.$TransformerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transformers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransformerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transformers
     * const transformers = await prisma.transformer.findMany()
     * 
     * // Get first 10 Transformers
     * const transformers = await prisma.transformer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transformerWithIdOnly = await prisma.transformer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransformerFindManyArgs>(args?: SelectSubset<T, TransformerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransformerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transformer.
     * @param {TransformerCreateArgs} args - Arguments to create a Transformer.
     * @example
     * // Create one Transformer
     * const Transformer = await prisma.transformer.create({
     *   data: {
     *     // ... data to create a Transformer
     *   }
     * })
     * 
     */
    create<T extends TransformerCreateArgs>(args: SelectSubset<T, TransformerCreateArgs<ExtArgs>>): Prisma__TransformerClient<$Result.GetResult<Prisma.$TransformerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transformers.
     * @param {TransformerCreateManyArgs} args - Arguments to create many Transformers.
     * @example
     * // Create many Transformers
     * const transformer = await prisma.transformer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransformerCreateManyArgs>(args?: SelectSubset<T, TransformerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transformers and returns the data saved in the database.
     * @param {TransformerCreateManyAndReturnArgs} args - Arguments to create many Transformers.
     * @example
     * // Create many Transformers
     * const transformer = await prisma.transformer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transformers and only return the `id`
     * const transformerWithIdOnly = await prisma.transformer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransformerCreateManyAndReturnArgs>(args?: SelectSubset<T, TransformerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransformerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transformer.
     * @param {TransformerDeleteArgs} args - Arguments to delete one Transformer.
     * @example
     * // Delete one Transformer
     * const Transformer = await prisma.transformer.delete({
     *   where: {
     *     // ... filter to delete one Transformer
     *   }
     * })
     * 
     */
    delete<T extends TransformerDeleteArgs>(args: SelectSubset<T, TransformerDeleteArgs<ExtArgs>>): Prisma__TransformerClient<$Result.GetResult<Prisma.$TransformerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transformer.
     * @param {TransformerUpdateArgs} args - Arguments to update one Transformer.
     * @example
     * // Update one Transformer
     * const transformer = await prisma.transformer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransformerUpdateArgs>(args: SelectSubset<T, TransformerUpdateArgs<ExtArgs>>): Prisma__TransformerClient<$Result.GetResult<Prisma.$TransformerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transformers.
     * @param {TransformerDeleteManyArgs} args - Arguments to filter Transformers to delete.
     * @example
     * // Delete a few Transformers
     * const { count } = await prisma.transformer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransformerDeleteManyArgs>(args?: SelectSubset<T, TransformerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transformers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransformerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transformers
     * const transformer = await prisma.transformer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransformerUpdateManyArgs>(args: SelectSubset<T, TransformerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transformer.
     * @param {TransformerUpsertArgs} args - Arguments to update or create a Transformer.
     * @example
     * // Update or create a Transformer
     * const transformer = await prisma.transformer.upsert({
     *   create: {
     *     // ... data to create a Transformer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transformer we want to update
     *   }
     * })
     */
    upsert<T extends TransformerUpsertArgs>(args: SelectSubset<T, TransformerUpsertArgs<ExtArgs>>): Prisma__TransformerClient<$Result.GetResult<Prisma.$TransformerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transformers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransformerCountArgs} args - Arguments to filter Transformers to count.
     * @example
     * // Count the number of Transformers
     * const count = await prisma.transformer.count({
     *   where: {
     *     // ... the filter for the Transformers we want to count
     *   }
     * })
    **/
    count<T extends TransformerCountArgs>(
      args?: Subset<T, TransformerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransformerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transformer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransformerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransformerAggregateArgs>(args: Subset<T, TransformerAggregateArgs>): Prisma.PrismaPromise<GetTransformerAggregateType<T>>

    /**
     * Group by Transformer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransformerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransformerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransformerGroupByArgs['orderBy'] }
        : { orderBy?: TransformerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransformerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransformerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transformer model
   */
  readonly fields: TransformerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transformer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransformerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Landfills<T extends Transformer$LandfillsArgs<ExtArgs> = {}>(args?: Subset<T, Transformer$LandfillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandfillsPayload<ExtArgs>, T, "findMany"> | Null>
    Transactions<T extends Transformer$TransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Transformer$TransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany"> | Null>
    History<T extends Transformer$HistoryArgs<ExtArgs> = {}>(args?: Subset<T, Transformer$HistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transformer model
   */ 
  interface TransformerFieldRefs {
    readonly id: FieldRef<"Transformer", 'Int'>
    readonly username: FieldRef<"Transformer", 'String'>
    readonly password: FieldRef<"Transformer", 'String'>
    readonly name: FieldRef<"Transformer", 'String'>
    readonly email: FieldRef<"Transformer", 'String'>
    readonly phoneNumber: FieldRef<"Transformer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transformer findUnique
   */
  export type TransformerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformer
     */
    select?: TransformerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformerInclude<ExtArgs> | null
    /**
     * Filter, which Transformer to fetch.
     */
    where: TransformerWhereUniqueInput
  }

  /**
   * Transformer findUniqueOrThrow
   */
  export type TransformerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformer
     */
    select?: TransformerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformerInclude<ExtArgs> | null
    /**
     * Filter, which Transformer to fetch.
     */
    where: TransformerWhereUniqueInput
  }

  /**
   * Transformer findFirst
   */
  export type TransformerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformer
     */
    select?: TransformerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformerInclude<ExtArgs> | null
    /**
     * Filter, which Transformer to fetch.
     */
    where?: TransformerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transformers to fetch.
     */
    orderBy?: TransformerOrderByWithRelationInput | TransformerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transformers.
     */
    cursor?: TransformerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transformers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transformers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transformers.
     */
    distinct?: TransformerScalarFieldEnum | TransformerScalarFieldEnum[]
  }

  /**
   * Transformer findFirstOrThrow
   */
  export type TransformerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformer
     */
    select?: TransformerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformerInclude<ExtArgs> | null
    /**
     * Filter, which Transformer to fetch.
     */
    where?: TransformerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transformers to fetch.
     */
    orderBy?: TransformerOrderByWithRelationInput | TransformerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transformers.
     */
    cursor?: TransformerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transformers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transformers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transformers.
     */
    distinct?: TransformerScalarFieldEnum | TransformerScalarFieldEnum[]
  }

  /**
   * Transformer findMany
   */
  export type TransformerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformer
     */
    select?: TransformerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformerInclude<ExtArgs> | null
    /**
     * Filter, which Transformers to fetch.
     */
    where?: TransformerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transformers to fetch.
     */
    orderBy?: TransformerOrderByWithRelationInput | TransformerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transformers.
     */
    cursor?: TransformerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transformers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transformers.
     */
    skip?: number
    distinct?: TransformerScalarFieldEnum | TransformerScalarFieldEnum[]
  }

  /**
   * Transformer create
   */
  export type TransformerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformer
     */
    select?: TransformerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformerInclude<ExtArgs> | null
    /**
     * The data needed to create a Transformer.
     */
    data: XOR<TransformerCreateInput, TransformerUncheckedCreateInput>
  }

  /**
   * Transformer createMany
   */
  export type TransformerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transformers.
     */
    data: TransformerCreateManyInput | TransformerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transformer createManyAndReturn
   */
  export type TransformerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformer
     */
    select?: TransformerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transformers.
     */
    data: TransformerCreateManyInput | TransformerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transformer update
   */
  export type TransformerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformer
     */
    select?: TransformerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformerInclude<ExtArgs> | null
    /**
     * The data needed to update a Transformer.
     */
    data: XOR<TransformerUpdateInput, TransformerUncheckedUpdateInput>
    /**
     * Choose, which Transformer to update.
     */
    where: TransformerWhereUniqueInput
  }

  /**
   * Transformer updateMany
   */
  export type TransformerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transformers.
     */
    data: XOR<TransformerUpdateManyMutationInput, TransformerUncheckedUpdateManyInput>
    /**
     * Filter which Transformers to update
     */
    where?: TransformerWhereInput
  }

  /**
   * Transformer upsert
   */
  export type TransformerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformer
     */
    select?: TransformerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformerInclude<ExtArgs> | null
    /**
     * The filter to search for the Transformer to update in case it exists.
     */
    where: TransformerWhereUniqueInput
    /**
     * In case the Transformer found by the `where` argument doesn't exist, create a new Transformer with this data.
     */
    create: XOR<TransformerCreateInput, TransformerUncheckedCreateInput>
    /**
     * In case the Transformer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransformerUpdateInput, TransformerUncheckedUpdateInput>
  }

  /**
   * Transformer delete
   */
  export type TransformerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformer
     */
    select?: TransformerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformerInclude<ExtArgs> | null
    /**
     * Filter which Transformer to delete.
     */
    where: TransformerWhereUniqueInput
  }

  /**
   * Transformer deleteMany
   */
  export type TransformerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transformers to delete
     */
    where?: TransformerWhereInput
  }

  /**
   * Transformer.Landfills
   */
  export type Transformer$LandfillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landfills
     */
    select?: LandfillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandfillsInclude<ExtArgs> | null
    where?: LandfillsWhereInput
    orderBy?: LandfillsOrderByWithRelationInput | LandfillsOrderByWithRelationInput[]
    cursor?: LandfillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LandfillsScalarFieldEnum | LandfillsScalarFieldEnum[]
  }

  /**
   * Transformer.Transactions
   */
  export type Transformer$TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transformer.History
   */
  export type Transformer$HistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * Transformer without action
   */
  export type TransformerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformer
     */
    select?: TransformerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformerInclude<ExtArgs> | null
  }


  /**
   * Model landfillArea
   */

  export type AggregateLandfillArea = {
    _count: LandfillAreaCountAggregateOutputType | null
    _avg: LandfillAreaAvgAggregateOutputType | null
    _sum: LandfillAreaSumAggregateOutputType | null
    _min: LandfillAreaMinAggregateOutputType | null
    _max: LandfillAreaMaxAggregateOutputType | null
  }

  export type LandfillAreaAvgAggregateOutputType = {
    id: number | null
  }

  export type LandfillAreaSumAggregateOutputType = {
    id: number | null
  }

  export type LandfillAreaMinAggregateOutputType = {
    id: number | null
    location: string | null
  }

  export type LandfillAreaMaxAggregateOutputType = {
    id: number | null
    location: string | null
  }

  export type LandfillAreaCountAggregateOutputType = {
    id: number
    location: number
    _all: number
  }


  export type LandfillAreaAvgAggregateInputType = {
    id?: true
  }

  export type LandfillAreaSumAggregateInputType = {
    id?: true
  }

  export type LandfillAreaMinAggregateInputType = {
    id?: true
    location?: true
  }

  export type LandfillAreaMaxAggregateInputType = {
    id?: true
    location?: true
  }

  export type LandfillAreaCountAggregateInputType = {
    id?: true
    location?: true
    _all?: true
  }

  export type LandfillAreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which landfillArea to aggregate.
     */
    where?: landfillAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of landfillAreas to fetch.
     */
    orderBy?: landfillAreaOrderByWithRelationInput | landfillAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: landfillAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` landfillAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` landfillAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned landfillAreas
    **/
    _count?: true | LandfillAreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LandfillAreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LandfillAreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LandfillAreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LandfillAreaMaxAggregateInputType
  }

  export type GetLandfillAreaAggregateType<T extends LandfillAreaAggregateArgs> = {
        [P in keyof T & keyof AggregateLandfillArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLandfillArea[P]>
      : GetScalarType<T[P], AggregateLandfillArea[P]>
  }




  export type landfillAreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: landfillAreaWhereInput
    orderBy?: landfillAreaOrderByWithAggregationInput | landfillAreaOrderByWithAggregationInput[]
    by: LandfillAreaScalarFieldEnum[] | LandfillAreaScalarFieldEnum
    having?: landfillAreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LandfillAreaCountAggregateInputType | true
    _avg?: LandfillAreaAvgAggregateInputType
    _sum?: LandfillAreaSumAggregateInputType
    _min?: LandfillAreaMinAggregateInputType
    _max?: LandfillAreaMaxAggregateInputType
  }

  export type LandfillAreaGroupByOutputType = {
    id: number
    location: string
    _count: LandfillAreaCountAggregateOutputType | null
    _avg: LandfillAreaAvgAggregateOutputType | null
    _sum: LandfillAreaSumAggregateOutputType | null
    _min: LandfillAreaMinAggregateOutputType | null
    _max: LandfillAreaMaxAggregateOutputType | null
  }

  type GetLandfillAreaGroupByPayload<T extends landfillAreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LandfillAreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LandfillAreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LandfillAreaGroupByOutputType[P]>
            : GetScalarType<T[P], LandfillAreaGroupByOutputType[P]>
        }
      >
    >


  export type landfillAreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    landfills?: boolean | landfillArea$landfillsArgs<ExtArgs>
    _count?: boolean | LandfillAreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["landfillArea"]>

  export type landfillAreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
  }, ExtArgs["result"]["landfillArea"]>

  export type landfillAreaSelectScalar = {
    id?: boolean
    location?: boolean
  }

  export type landfillAreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    landfills?: boolean | landfillArea$landfillsArgs<ExtArgs>
    _count?: boolean | LandfillAreaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type landfillAreaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $landfillAreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "landfillArea"
    objects: {
      landfills: Prisma.$LandfillsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      location: string
    }, ExtArgs["result"]["landfillArea"]>
    composites: {}
  }

  type landfillAreaGetPayload<S extends boolean | null | undefined | landfillAreaDefaultArgs> = $Result.GetResult<Prisma.$landfillAreaPayload, S>

  type landfillAreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<landfillAreaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LandfillAreaCountAggregateInputType | true
    }

  export interface landfillAreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['landfillArea'], meta: { name: 'landfillArea' } }
    /**
     * Find zero or one LandfillArea that matches the filter.
     * @param {landfillAreaFindUniqueArgs} args - Arguments to find a LandfillArea
     * @example
     * // Get one LandfillArea
     * const landfillArea = await prisma.landfillArea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends landfillAreaFindUniqueArgs>(args: SelectSubset<T, landfillAreaFindUniqueArgs<ExtArgs>>): Prisma__landfillAreaClient<$Result.GetResult<Prisma.$landfillAreaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LandfillArea that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {landfillAreaFindUniqueOrThrowArgs} args - Arguments to find a LandfillArea
     * @example
     * // Get one LandfillArea
     * const landfillArea = await prisma.landfillArea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends landfillAreaFindUniqueOrThrowArgs>(args: SelectSubset<T, landfillAreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__landfillAreaClient<$Result.GetResult<Prisma.$landfillAreaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LandfillArea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landfillAreaFindFirstArgs} args - Arguments to find a LandfillArea
     * @example
     * // Get one LandfillArea
     * const landfillArea = await prisma.landfillArea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends landfillAreaFindFirstArgs>(args?: SelectSubset<T, landfillAreaFindFirstArgs<ExtArgs>>): Prisma__landfillAreaClient<$Result.GetResult<Prisma.$landfillAreaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LandfillArea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landfillAreaFindFirstOrThrowArgs} args - Arguments to find a LandfillArea
     * @example
     * // Get one LandfillArea
     * const landfillArea = await prisma.landfillArea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends landfillAreaFindFirstOrThrowArgs>(args?: SelectSubset<T, landfillAreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__landfillAreaClient<$Result.GetResult<Prisma.$landfillAreaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LandfillAreas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landfillAreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LandfillAreas
     * const landfillAreas = await prisma.landfillArea.findMany()
     * 
     * // Get first 10 LandfillAreas
     * const landfillAreas = await prisma.landfillArea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const landfillAreaWithIdOnly = await prisma.landfillArea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends landfillAreaFindManyArgs>(args?: SelectSubset<T, landfillAreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$landfillAreaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LandfillArea.
     * @param {landfillAreaCreateArgs} args - Arguments to create a LandfillArea.
     * @example
     * // Create one LandfillArea
     * const LandfillArea = await prisma.landfillArea.create({
     *   data: {
     *     // ... data to create a LandfillArea
     *   }
     * })
     * 
     */
    create<T extends landfillAreaCreateArgs>(args: SelectSubset<T, landfillAreaCreateArgs<ExtArgs>>): Prisma__landfillAreaClient<$Result.GetResult<Prisma.$landfillAreaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LandfillAreas.
     * @param {landfillAreaCreateManyArgs} args - Arguments to create many LandfillAreas.
     * @example
     * // Create many LandfillAreas
     * const landfillArea = await prisma.landfillArea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends landfillAreaCreateManyArgs>(args?: SelectSubset<T, landfillAreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LandfillAreas and returns the data saved in the database.
     * @param {landfillAreaCreateManyAndReturnArgs} args - Arguments to create many LandfillAreas.
     * @example
     * // Create many LandfillAreas
     * const landfillArea = await prisma.landfillArea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LandfillAreas and only return the `id`
     * const landfillAreaWithIdOnly = await prisma.landfillArea.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends landfillAreaCreateManyAndReturnArgs>(args?: SelectSubset<T, landfillAreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$landfillAreaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LandfillArea.
     * @param {landfillAreaDeleteArgs} args - Arguments to delete one LandfillArea.
     * @example
     * // Delete one LandfillArea
     * const LandfillArea = await prisma.landfillArea.delete({
     *   where: {
     *     // ... filter to delete one LandfillArea
     *   }
     * })
     * 
     */
    delete<T extends landfillAreaDeleteArgs>(args: SelectSubset<T, landfillAreaDeleteArgs<ExtArgs>>): Prisma__landfillAreaClient<$Result.GetResult<Prisma.$landfillAreaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LandfillArea.
     * @param {landfillAreaUpdateArgs} args - Arguments to update one LandfillArea.
     * @example
     * // Update one LandfillArea
     * const landfillArea = await prisma.landfillArea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends landfillAreaUpdateArgs>(args: SelectSubset<T, landfillAreaUpdateArgs<ExtArgs>>): Prisma__landfillAreaClient<$Result.GetResult<Prisma.$landfillAreaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LandfillAreas.
     * @param {landfillAreaDeleteManyArgs} args - Arguments to filter LandfillAreas to delete.
     * @example
     * // Delete a few LandfillAreas
     * const { count } = await prisma.landfillArea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends landfillAreaDeleteManyArgs>(args?: SelectSubset<T, landfillAreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LandfillAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landfillAreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LandfillAreas
     * const landfillArea = await prisma.landfillArea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends landfillAreaUpdateManyArgs>(args: SelectSubset<T, landfillAreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LandfillArea.
     * @param {landfillAreaUpsertArgs} args - Arguments to update or create a LandfillArea.
     * @example
     * // Update or create a LandfillArea
     * const landfillArea = await prisma.landfillArea.upsert({
     *   create: {
     *     // ... data to create a LandfillArea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LandfillArea we want to update
     *   }
     * })
     */
    upsert<T extends landfillAreaUpsertArgs>(args: SelectSubset<T, landfillAreaUpsertArgs<ExtArgs>>): Prisma__landfillAreaClient<$Result.GetResult<Prisma.$landfillAreaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LandfillAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landfillAreaCountArgs} args - Arguments to filter LandfillAreas to count.
     * @example
     * // Count the number of LandfillAreas
     * const count = await prisma.landfillArea.count({
     *   where: {
     *     // ... the filter for the LandfillAreas we want to count
     *   }
     * })
    **/
    count<T extends landfillAreaCountArgs>(
      args?: Subset<T, landfillAreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LandfillAreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LandfillArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandfillAreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LandfillAreaAggregateArgs>(args: Subset<T, LandfillAreaAggregateArgs>): Prisma.PrismaPromise<GetLandfillAreaAggregateType<T>>

    /**
     * Group by LandfillArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {landfillAreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends landfillAreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: landfillAreaGroupByArgs['orderBy'] }
        : { orderBy?: landfillAreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, landfillAreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandfillAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the landfillArea model
   */
  readonly fields: landfillAreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for landfillArea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__landfillAreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    landfills<T extends landfillArea$landfillsArgs<ExtArgs> = {}>(args?: Subset<T, landfillArea$landfillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandfillsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the landfillArea model
   */ 
  interface landfillAreaFieldRefs {
    readonly id: FieldRef<"landfillArea", 'Int'>
    readonly location: FieldRef<"landfillArea", 'String'>
  }
    

  // Custom InputTypes
  /**
   * landfillArea findUnique
   */
  export type landfillAreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landfillArea
     */
    select?: landfillAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landfillAreaInclude<ExtArgs> | null
    /**
     * Filter, which landfillArea to fetch.
     */
    where: landfillAreaWhereUniqueInput
  }

  /**
   * landfillArea findUniqueOrThrow
   */
  export type landfillAreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landfillArea
     */
    select?: landfillAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landfillAreaInclude<ExtArgs> | null
    /**
     * Filter, which landfillArea to fetch.
     */
    where: landfillAreaWhereUniqueInput
  }

  /**
   * landfillArea findFirst
   */
  export type landfillAreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landfillArea
     */
    select?: landfillAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landfillAreaInclude<ExtArgs> | null
    /**
     * Filter, which landfillArea to fetch.
     */
    where?: landfillAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of landfillAreas to fetch.
     */
    orderBy?: landfillAreaOrderByWithRelationInput | landfillAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for landfillAreas.
     */
    cursor?: landfillAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` landfillAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` landfillAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of landfillAreas.
     */
    distinct?: LandfillAreaScalarFieldEnum | LandfillAreaScalarFieldEnum[]
  }

  /**
   * landfillArea findFirstOrThrow
   */
  export type landfillAreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landfillArea
     */
    select?: landfillAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landfillAreaInclude<ExtArgs> | null
    /**
     * Filter, which landfillArea to fetch.
     */
    where?: landfillAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of landfillAreas to fetch.
     */
    orderBy?: landfillAreaOrderByWithRelationInput | landfillAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for landfillAreas.
     */
    cursor?: landfillAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` landfillAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` landfillAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of landfillAreas.
     */
    distinct?: LandfillAreaScalarFieldEnum | LandfillAreaScalarFieldEnum[]
  }

  /**
   * landfillArea findMany
   */
  export type landfillAreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landfillArea
     */
    select?: landfillAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landfillAreaInclude<ExtArgs> | null
    /**
     * Filter, which landfillAreas to fetch.
     */
    where?: landfillAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of landfillAreas to fetch.
     */
    orderBy?: landfillAreaOrderByWithRelationInput | landfillAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing landfillAreas.
     */
    cursor?: landfillAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` landfillAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` landfillAreas.
     */
    skip?: number
    distinct?: LandfillAreaScalarFieldEnum | LandfillAreaScalarFieldEnum[]
  }

  /**
   * landfillArea create
   */
  export type landfillAreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landfillArea
     */
    select?: landfillAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landfillAreaInclude<ExtArgs> | null
    /**
     * The data needed to create a landfillArea.
     */
    data: XOR<landfillAreaCreateInput, landfillAreaUncheckedCreateInput>
  }

  /**
   * landfillArea createMany
   */
  export type landfillAreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many landfillAreas.
     */
    data: landfillAreaCreateManyInput | landfillAreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * landfillArea createManyAndReturn
   */
  export type landfillAreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landfillArea
     */
    select?: landfillAreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many landfillAreas.
     */
    data: landfillAreaCreateManyInput | landfillAreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * landfillArea update
   */
  export type landfillAreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landfillArea
     */
    select?: landfillAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landfillAreaInclude<ExtArgs> | null
    /**
     * The data needed to update a landfillArea.
     */
    data: XOR<landfillAreaUpdateInput, landfillAreaUncheckedUpdateInput>
    /**
     * Choose, which landfillArea to update.
     */
    where: landfillAreaWhereUniqueInput
  }

  /**
   * landfillArea updateMany
   */
  export type landfillAreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update landfillAreas.
     */
    data: XOR<landfillAreaUpdateManyMutationInput, landfillAreaUncheckedUpdateManyInput>
    /**
     * Filter which landfillAreas to update
     */
    where?: landfillAreaWhereInput
  }

  /**
   * landfillArea upsert
   */
  export type landfillAreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landfillArea
     */
    select?: landfillAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landfillAreaInclude<ExtArgs> | null
    /**
     * The filter to search for the landfillArea to update in case it exists.
     */
    where: landfillAreaWhereUniqueInput
    /**
     * In case the landfillArea found by the `where` argument doesn't exist, create a new landfillArea with this data.
     */
    create: XOR<landfillAreaCreateInput, landfillAreaUncheckedCreateInput>
    /**
     * In case the landfillArea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<landfillAreaUpdateInput, landfillAreaUncheckedUpdateInput>
  }

  /**
   * landfillArea delete
   */
  export type landfillAreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landfillArea
     */
    select?: landfillAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landfillAreaInclude<ExtArgs> | null
    /**
     * Filter which landfillArea to delete.
     */
    where: landfillAreaWhereUniqueInput
  }

  /**
   * landfillArea deleteMany
   */
  export type landfillAreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which landfillAreas to delete
     */
    where?: landfillAreaWhereInput
  }

  /**
   * landfillArea.landfills
   */
  export type landfillArea$landfillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landfills
     */
    select?: LandfillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandfillsInclude<ExtArgs> | null
    where?: LandfillsWhereInput
    orderBy?: LandfillsOrderByWithRelationInput | LandfillsOrderByWithRelationInput[]
    cursor?: LandfillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LandfillsScalarFieldEnum | LandfillsScalarFieldEnum[]
  }

  /**
   * landfillArea without action
   */
  export type landfillAreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the landfillArea
     */
    select?: landfillAreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: landfillAreaInclude<ExtArgs> | null
  }


  /**
   * Model Landfills
   */

  export type AggregateLandfills = {
    _count: LandfillsCountAggregateOutputType | null
    _avg: LandfillsAvgAggregateOutputType | null
    _sum: LandfillsSumAggregateOutputType | null
    _min: LandfillsMinAggregateOutputType | null
    _max: LandfillsMaxAggregateOutputType | null
  }

  export type LandfillsAvgAggregateOutputType = {
    id: number | null
    TransformerID: number | null
    ScreenerID: number | null
  }

  export type LandfillsSumAggregateOutputType = {
    id: number | null
    TransformerID: number | null
    ScreenerID: number | null
  }

  export type LandfillsMinAggregateOutputType = {
    id: number | null
    landfillName: string | null
    landfillAreaName: string | null
    landfillAddress: string | null
    landfillPhoneNumber: string | null
    imageUri: string | null
    TransformerID: number | null
    ScreenerID: number | null
  }

  export type LandfillsMaxAggregateOutputType = {
    id: number | null
    landfillName: string | null
    landfillAreaName: string | null
    landfillAddress: string | null
    landfillPhoneNumber: string | null
    imageUri: string | null
    TransformerID: number | null
    ScreenerID: number | null
  }

  export type LandfillsCountAggregateOutputType = {
    id: number
    landfillName: number
    landfillAreaName: number
    landfillAddress: number
    landfillPhoneNumber: number
    imageUri: number
    TransformerID: number
    ScreenerID: number
    _all: number
  }


  export type LandfillsAvgAggregateInputType = {
    id?: true
    TransformerID?: true
    ScreenerID?: true
  }

  export type LandfillsSumAggregateInputType = {
    id?: true
    TransformerID?: true
    ScreenerID?: true
  }

  export type LandfillsMinAggregateInputType = {
    id?: true
    landfillName?: true
    landfillAreaName?: true
    landfillAddress?: true
    landfillPhoneNumber?: true
    imageUri?: true
    TransformerID?: true
    ScreenerID?: true
  }

  export type LandfillsMaxAggregateInputType = {
    id?: true
    landfillName?: true
    landfillAreaName?: true
    landfillAddress?: true
    landfillPhoneNumber?: true
    imageUri?: true
    TransformerID?: true
    ScreenerID?: true
  }

  export type LandfillsCountAggregateInputType = {
    id?: true
    landfillName?: true
    landfillAreaName?: true
    landfillAddress?: true
    landfillPhoneNumber?: true
    imageUri?: true
    TransformerID?: true
    ScreenerID?: true
    _all?: true
  }

  export type LandfillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Landfills to aggregate.
     */
    where?: LandfillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Landfills to fetch.
     */
    orderBy?: LandfillsOrderByWithRelationInput | LandfillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LandfillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Landfills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Landfills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Landfills
    **/
    _count?: true | LandfillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LandfillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LandfillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LandfillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LandfillsMaxAggregateInputType
  }

  export type GetLandfillsAggregateType<T extends LandfillsAggregateArgs> = {
        [P in keyof T & keyof AggregateLandfills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLandfills[P]>
      : GetScalarType<T[P], AggregateLandfills[P]>
  }




  export type LandfillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandfillsWhereInput
    orderBy?: LandfillsOrderByWithAggregationInput | LandfillsOrderByWithAggregationInput[]
    by: LandfillsScalarFieldEnum[] | LandfillsScalarFieldEnum
    having?: LandfillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LandfillsCountAggregateInputType | true
    _avg?: LandfillsAvgAggregateInputType
    _sum?: LandfillsSumAggregateInputType
    _min?: LandfillsMinAggregateInputType
    _max?: LandfillsMaxAggregateInputType
  }

  export type LandfillsGroupByOutputType = {
    id: number
    landfillName: string
    landfillAreaName: string
    landfillAddress: string | null
    landfillPhoneNumber: string | null
    imageUri: string | null
    TransformerID: number | null
    ScreenerID: number | null
    _count: LandfillsCountAggregateOutputType | null
    _avg: LandfillsAvgAggregateOutputType | null
    _sum: LandfillsSumAggregateOutputType | null
    _min: LandfillsMinAggregateOutputType | null
    _max: LandfillsMaxAggregateOutputType | null
  }

  type GetLandfillsGroupByPayload<T extends LandfillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LandfillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LandfillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LandfillsGroupByOutputType[P]>
            : GetScalarType<T[P], LandfillsGroupByOutputType[P]>
        }
      >
    >


  export type LandfillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    landfillName?: boolean
    landfillAreaName?: boolean
    landfillAddress?: boolean
    landfillPhoneNumber?: boolean
    imageUri?: boolean
    TransformerID?: boolean
    ScreenerID?: boolean
    landfillArea?: boolean | landfillAreaDefaultArgs<ExtArgs>
    Transformer?: boolean | Landfills$TransformerArgs<ExtArgs>
    Screener?: boolean | Landfills$ScreenerArgs<ExtArgs>
    Transactions?: boolean | Landfills$TransactionsArgs<ExtArgs>
    History?: boolean | Landfills$HistoryArgs<ExtArgs>
    _count?: boolean | LandfillsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["landfills"]>

  export type LandfillsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    landfillName?: boolean
    landfillAreaName?: boolean
    landfillAddress?: boolean
    landfillPhoneNumber?: boolean
    imageUri?: boolean
    TransformerID?: boolean
    ScreenerID?: boolean
    landfillArea?: boolean | landfillAreaDefaultArgs<ExtArgs>
    Transformer?: boolean | Landfills$TransformerArgs<ExtArgs>
    Screener?: boolean | Landfills$ScreenerArgs<ExtArgs>
  }, ExtArgs["result"]["landfills"]>

  export type LandfillsSelectScalar = {
    id?: boolean
    landfillName?: boolean
    landfillAreaName?: boolean
    landfillAddress?: boolean
    landfillPhoneNumber?: boolean
    imageUri?: boolean
    TransformerID?: boolean
    ScreenerID?: boolean
  }

  export type LandfillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    landfillArea?: boolean | landfillAreaDefaultArgs<ExtArgs>
    Transformer?: boolean | Landfills$TransformerArgs<ExtArgs>
    Screener?: boolean | Landfills$ScreenerArgs<ExtArgs>
    Transactions?: boolean | Landfills$TransactionsArgs<ExtArgs>
    History?: boolean | Landfills$HistoryArgs<ExtArgs>
    _count?: boolean | LandfillsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LandfillsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    landfillArea?: boolean | landfillAreaDefaultArgs<ExtArgs>
    Transformer?: boolean | Landfills$TransformerArgs<ExtArgs>
    Screener?: boolean | Landfills$ScreenerArgs<ExtArgs>
  }

  export type $LandfillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Landfills"
    objects: {
      landfillArea: Prisma.$landfillAreaPayload<ExtArgs>
      Transformer: Prisma.$TransformerPayload<ExtArgs> | null
      Screener: Prisma.$ScreenerPayload<ExtArgs> | null
      Transactions: Prisma.$TransactionsPayload<ExtArgs>[]
      History: Prisma.$HistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      landfillName: string
      landfillAreaName: string
      landfillAddress: string | null
      landfillPhoneNumber: string | null
      imageUri: string | null
      TransformerID: number | null
      ScreenerID: number | null
    }, ExtArgs["result"]["landfills"]>
    composites: {}
  }

  type LandfillsGetPayload<S extends boolean | null | undefined | LandfillsDefaultArgs> = $Result.GetResult<Prisma.$LandfillsPayload, S>

  type LandfillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LandfillsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LandfillsCountAggregateInputType | true
    }

  export interface LandfillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Landfills'], meta: { name: 'Landfills' } }
    /**
     * Find zero or one Landfills that matches the filter.
     * @param {LandfillsFindUniqueArgs} args - Arguments to find a Landfills
     * @example
     * // Get one Landfills
     * const landfills = await prisma.landfills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LandfillsFindUniqueArgs>(args: SelectSubset<T, LandfillsFindUniqueArgs<ExtArgs>>): Prisma__LandfillsClient<$Result.GetResult<Prisma.$LandfillsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Landfills that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LandfillsFindUniqueOrThrowArgs} args - Arguments to find a Landfills
     * @example
     * // Get one Landfills
     * const landfills = await prisma.landfills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LandfillsFindUniqueOrThrowArgs>(args: SelectSubset<T, LandfillsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LandfillsClient<$Result.GetResult<Prisma.$LandfillsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Landfills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandfillsFindFirstArgs} args - Arguments to find a Landfills
     * @example
     * // Get one Landfills
     * const landfills = await prisma.landfills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LandfillsFindFirstArgs>(args?: SelectSubset<T, LandfillsFindFirstArgs<ExtArgs>>): Prisma__LandfillsClient<$Result.GetResult<Prisma.$LandfillsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Landfills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandfillsFindFirstOrThrowArgs} args - Arguments to find a Landfills
     * @example
     * // Get one Landfills
     * const landfills = await prisma.landfills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LandfillsFindFirstOrThrowArgs>(args?: SelectSubset<T, LandfillsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LandfillsClient<$Result.GetResult<Prisma.$LandfillsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Landfills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandfillsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Landfills
     * const landfills = await prisma.landfills.findMany()
     * 
     * // Get first 10 Landfills
     * const landfills = await prisma.landfills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const landfillsWithIdOnly = await prisma.landfills.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LandfillsFindManyArgs>(args?: SelectSubset<T, LandfillsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandfillsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Landfills.
     * @param {LandfillsCreateArgs} args - Arguments to create a Landfills.
     * @example
     * // Create one Landfills
     * const Landfills = await prisma.landfills.create({
     *   data: {
     *     // ... data to create a Landfills
     *   }
     * })
     * 
     */
    create<T extends LandfillsCreateArgs>(args: SelectSubset<T, LandfillsCreateArgs<ExtArgs>>): Prisma__LandfillsClient<$Result.GetResult<Prisma.$LandfillsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Landfills.
     * @param {LandfillsCreateManyArgs} args - Arguments to create many Landfills.
     * @example
     * // Create many Landfills
     * const landfills = await prisma.landfills.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LandfillsCreateManyArgs>(args?: SelectSubset<T, LandfillsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Landfills and returns the data saved in the database.
     * @param {LandfillsCreateManyAndReturnArgs} args - Arguments to create many Landfills.
     * @example
     * // Create many Landfills
     * const landfills = await prisma.landfills.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Landfills and only return the `id`
     * const landfillsWithIdOnly = await prisma.landfills.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LandfillsCreateManyAndReturnArgs>(args?: SelectSubset<T, LandfillsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandfillsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Landfills.
     * @param {LandfillsDeleteArgs} args - Arguments to delete one Landfills.
     * @example
     * // Delete one Landfills
     * const Landfills = await prisma.landfills.delete({
     *   where: {
     *     // ... filter to delete one Landfills
     *   }
     * })
     * 
     */
    delete<T extends LandfillsDeleteArgs>(args: SelectSubset<T, LandfillsDeleteArgs<ExtArgs>>): Prisma__LandfillsClient<$Result.GetResult<Prisma.$LandfillsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Landfills.
     * @param {LandfillsUpdateArgs} args - Arguments to update one Landfills.
     * @example
     * // Update one Landfills
     * const landfills = await prisma.landfills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LandfillsUpdateArgs>(args: SelectSubset<T, LandfillsUpdateArgs<ExtArgs>>): Prisma__LandfillsClient<$Result.GetResult<Prisma.$LandfillsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Landfills.
     * @param {LandfillsDeleteManyArgs} args - Arguments to filter Landfills to delete.
     * @example
     * // Delete a few Landfills
     * const { count } = await prisma.landfills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LandfillsDeleteManyArgs>(args?: SelectSubset<T, LandfillsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Landfills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandfillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Landfills
     * const landfills = await prisma.landfills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LandfillsUpdateManyArgs>(args: SelectSubset<T, LandfillsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Landfills.
     * @param {LandfillsUpsertArgs} args - Arguments to update or create a Landfills.
     * @example
     * // Update or create a Landfills
     * const landfills = await prisma.landfills.upsert({
     *   create: {
     *     // ... data to create a Landfills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Landfills we want to update
     *   }
     * })
     */
    upsert<T extends LandfillsUpsertArgs>(args: SelectSubset<T, LandfillsUpsertArgs<ExtArgs>>): Prisma__LandfillsClient<$Result.GetResult<Prisma.$LandfillsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Landfills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandfillsCountArgs} args - Arguments to filter Landfills to count.
     * @example
     * // Count the number of Landfills
     * const count = await prisma.landfills.count({
     *   where: {
     *     // ... the filter for the Landfills we want to count
     *   }
     * })
    **/
    count<T extends LandfillsCountArgs>(
      args?: Subset<T, LandfillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LandfillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Landfills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandfillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LandfillsAggregateArgs>(args: Subset<T, LandfillsAggregateArgs>): Prisma.PrismaPromise<GetLandfillsAggregateType<T>>

    /**
     * Group by Landfills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandfillsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LandfillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LandfillsGroupByArgs['orderBy'] }
        : { orderBy?: LandfillsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LandfillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandfillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Landfills model
   */
  readonly fields: LandfillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Landfills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LandfillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    landfillArea<T extends landfillAreaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, landfillAreaDefaultArgs<ExtArgs>>): Prisma__landfillAreaClient<$Result.GetResult<Prisma.$landfillAreaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Transformer<T extends Landfills$TransformerArgs<ExtArgs> = {}>(args?: Subset<T, Landfills$TransformerArgs<ExtArgs>>): Prisma__TransformerClient<$Result.GetResult<Prisma.$TransformerPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Screener<T extends Landfills$ScreenerArgs<ExtArgs> = {}>(args?: Subset<T, Landfills$ScreenerArgs<ExtArgs>>): Prisma__ScreenerClient<$Result.GetResult<Prisma.$ScreenerPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Transactions<T extends Landfills$TransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Landfills$TransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany"> | Null>
    History<T extends Landfills$HistoryArgs<ExtArgs> = {}>(args?: Subset<T, Landfills$HistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Landfills model
   */ 
  interface LandfillsFieldRefs {
    readonly id: FieldRef<"Landfills", 'Int'>
    readonly landfillName: FieldRef<"Landfills", 'String'>
    readonly landfillAreaName: FieldRef<"Landfills", 'String'>
    readonly landfillAddress: FieldRef<"Landfills", 'String'>
    readonly landfillPhoneNumber: FieldRef<"Landfills", 'String'>
    readonly imageUri: FieldRef<"Landfills", 'String'>
    readonly TransformerID: FieldRef<"Landfills", 'Int'>
    readonly ScreenerID: FieldRef<"Landfills", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Landfills findUnique
   */
  export type LandfillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landfills
     */
    select?: LandfillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandfillsInclude<ExtArgs> | null
    /**
     * Filter, which Landfills to fetch.
     */
    where: LandfillsWhereUniqueInput
  }

  /**
   * Landfills findUniqueOrThrow
   */
  export type LandfillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landfills
     */
    select?: LandfillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandfillsInclude<ExtArgs> | null
    /**
     * Filter, which Landfills to fetch.
     */
    where: LandfillsWhereUniqueInput
  }

  /**
   * Landfills findFirst
   */
  export type LandfillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landfills
     */
    select?: LandfillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandfillsInclude<ExtArgs> | null
    /**
     * Filter, which Landfills to fetch.
     */
    where?: LandfillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Landfills to fetch.
     */
    orderBy?: LandfillsOrderByWithRelationInput | LandfillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Landfills.
     */
    cursor?: LandfillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Landfills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Landfills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Landfills.
     */
    distinct?: LandfillsScalarFieldEnum | LandfillsScalarFieldEnum[]
  }

  /**
   * Landfills findFirstOrThrow
   */
  export type LandfillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landfills
     */
    select?: LandfillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandfillsInclude<ExtArgs> | null
    /**
     * Filter, which Landfills to fetch.
     */
    where?: LandfillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Landfills to fetch.
     */
    orderBy?: LandfillsOrderByWithRelationInput | LandfillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Landfills.
     */
    cursor?: LandfillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Landfills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Landfills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Landfills.
     */
    distinct?: LandfillsScalarFieldEnum | LandfillsScalarFieldEnum[]
  }

  /**
   * Landfills findMany
   */
  export type LandfillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landfills
     */
    select?: LandfillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandfillsInclude<ExtArgs> | null
    /**
     * Filter, which Landfills to fetch.
     */
    where?: LandfillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Landfills to fetch.
     */
    orderBy?: LandfillsOrderByWithRelationInput | LandfillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Landfills.
     */
    cursor?: LandfillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Landfills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Landfills.
     */
    skip?: number
    distinct?: LandfillsScalarFieldEnum | LandfillsScalarFieldEnum[]
  }

  /**
   * Landfills create
   */
  export type LandfillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landfills
     */
    select?: LandfillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandfillsInclude<ExtArgs> | null
    /**
     * The data needed to create a Landfills.
     */
    data: XOR<LandfillsCreateInput, LandfillsUncheckedCreateInput>
  }

  /**
   * Landfills createMany
   */
  export type LandfillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Landfills.
     */
    data: LandfillsCreateManyInput | LandfillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Landfills createManyAndReturn
   */
  export type LandfillsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landfills
     */
    select?: LandfillsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Landfills.
     */
    data: LandfillsCreateManyInput | LandfillsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandfillsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Landfills update
   */
  export type LandfillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landfills
     */
    select?: LandfillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandfillsInclude<ExtArgs> | null
    /**
     * The data needed to update a Landfills.
     */
    data: XOR<LandfillsUpdateInput, LandfillsUncheckedUpdateInput>
    /**
     * Choose, which Landfills to update.
     */
    where: LandfillsWhereUniqueInput
  }

  /**
   * Landfills updateMany
   */
  export type LandfillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Landfills.
     */
    data: XOR<LandfillsUpdateManyMutationInput, LandfillsUncheckedUpdateManyInput>
    /**
     * Filter which Landfills to update
     */
    where?: LandfillsWhereInput
  }

  /**
   * Landfills upsert
   */
  export type LandfillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landfills
     */
    select?: LandfillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandfillsInclude<ExtArgs> | null
    /**
     * The filter to search for the Landfills to update in case it exists.
     */
    where: LandfillsWhereUniqueInput
    /**
     * In case the Landfills found by the `where` argument doesn't exist, create a new Landfills with this data.
     */
    create: XOR<LandfillsCreateInput, LandfillsUncheckedCreateInput>
    /**
     * In case the Landfills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LandfillsUpdateInput, LandfillsUncheckedUpdateInput>
  }

  /**
   * Landfills delete
   */
  export type LandfillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landfills
     */
    select?: LandfillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandfillsInclude<ExtArgs> | null
    /**
     * Filter which Landfills to delete.
     */
    where: LandfillsWhereUniqueInput
  }

  /**
   * Landfills deleteMany
   */
  export type LandfillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Landfills to delete
     */
    where?: LandfillsWhereInput
  }

  /**
   * Landfills.Transformer
   */
  export type Landfills$TransformerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformer
     */
    select?: TransformerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformerInclude<ExtArgs> | null
    where?: TransformerWhereInput
  }

  /**
   * Landfills.Screener
   */
  export type Landfills$ScreenerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screener
     */
    select?: ScreenerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerInclude<ExtArgs> | null
    where?: ScreenerWhereInput
  }

  /**
   * Landfills.Transactions
   */
  export type Landfills$TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Landfills.History
   */
  export type Landfills$HistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * Landfills without action
   */
  export type LandfillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landfills
     */
    select?: LandfillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandfillsInclude<ExtArgs> | null
  }


  /**
   * Model Waqf
   */

  export type AggregateWaqf = {
    _count: WaqfCountAggregateOutputType | null
    _avg: WaqfAvgAggregateOutputType | null
    _sum: WaqfSumAggregateOutputType | null
    _min: WaqfMinAggregateOutputType | null
    _max: WaqfMaxAggregateOutputType | null
  }

  export type WaqfAvgAggregateOutputType = {
    id: number | null
    totalRaised: number | null
    bankNumber: number | null
  }

  export type WaqfSumAggregateOutputType = {
    id: number | null
    totalRaised: number | null
    bankNumber: number | null
  }

  export type WaqfMinAggregateOutputType = {
    id: number | null
    totalRaised: number | null
    bankNumber: number | null
    waqfName: string | null
    waqfAddress: string | null
    waqfPhoneNumber: string | null
    imageUrl: string | null
    description: string | null
  }

  export type WaqfMaxAggregateOutputType = {
    id: number | null
    totalRaised: number | null
    bankNumber: number | null
    waqfName: string | null
    waqfAddress: string | null
    waqfPhoneNumber: string | null
    imageUrl: string | null
    description: string | null
  }

  export type WaqfCountAggregateOutputType = {
    id: number
    totalRaised: number
    bankNumber: number
    waqfName: number
    waqfAddress: number
    waqfPhoneNumber: number
    imageUrl: number
    description: number
    _all: number
  }


  export type WaqfAvgAggregateInputType = {
    id?: true
    totalRaised?: true
    bankNumber?: true
  }

  export type WaqfSumAggregateInputType = {
    id?: true
    totalRaised?: true
    bankNumber?: true
  }

  export type WaqfMinAggregateInputType = {
    id?: true
    totalRaised?: true
    bankNumber?: true
    waqfName?: true
    waqfAddress?: true
    waqfPhoneNumber?: true
    imageUrl?: true
    description?: true
  }

  export type WaqfMaxAggregateInputType = {
    id?: true
    totalRaised?: true
    bankNumber?: true
    waqfName?: true
    waqfAddress?: true
    waqfPhoneNumber?: true
    imageUrl?: true
    description?: true
  }

  export type WaqfCountAggregateInputType = {
    id?: true
    totalRaised?: true
    bankNumber?: true
    waqfName?: true
    waqfAddress?: true
    waqfPhoneNumber?: true
    imageUrl?: true
    description?: true
    _all?: true
  }

  export type WaqfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Waqf to aggregate.
     */
    where?: WaqfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waqfs to fetch.
     */
    orderBy?: WaqfOrderByWithRelationInput | WaqfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaqfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waqfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waqfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Waqfs
    **/
    _count?: true | WaqfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaqfAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaqfSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaqfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaqfMaxAggregateInputType
  }

  export type GetWaqfAggregateType<T extends WaqfAggregateArgs> = {
        [P in keyof T & keyof AggregateWaqf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaqf[P]>
      : GetScalarType<T[P], AggregateWaqf[P]>
  }




  export type WaqfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaqfWhereInput
    orderBy?: WaqfOrderByWithAggregationInput | WaqfOrderByWithAggregationInput[]
    by: WaqfScalarFieldEnum[] | WaqfScalarFieldEnum
    having?: WaqfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaqfCountAggregateInputType | true
    _avg?: WaqfAvgAggregateInputType
    _sum?: WaqfSumAggregateInputType
    _min?: WaqfMinAggregateInputType
    _max?: WaqfMaxAggregateInputType
  }

  export type WaqfGroupByOutputType = {
    id: number
    totalRaised: number | null
    bankNumber: number | null
    waqfName: string
    waqfAddress: string | null
    waqfPhoneNumber: string | null
    imageUrl: string | null
    description: string | null
    _count: WaqfCountAggregateOutputType | null
    _avg: WaqfAvgAggregateOutputType | null
    _sum: WaqfSumAggregateOutputType | null
    _min: WaqfMinAggregateOutputType | null
    _max: WaqfMaxAggregateOutputType | null
  }

  type GetWaqfGroupByPayload<T extends WaqfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaqfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaqfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaqfGroupByOutputType[P]>
            : GetScalarType<T[P], WaqfGroupByOutputType[P]>
        }
      >
    >


  export type WaqfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalRaised?: boolean
    bankNumber?: boolean
    waqfName?: boolean
    waqfAddress?: boolean
    waqfPhoneNumber?: boolean
    imageUrl?: boolean
    description?: boolean
    CauseOnWaqf?: boolean | Waqf$CauseOnWaqfArgs<ExtArgs>
    History?: boolean | Waqf$HistoryArgs<ExtArgs>
    Transactions?: boolean | Waqf$TransactionsArgs<ExtArgs>
    _count?: boolean | WaqfCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waqf"]>

  export type WaqfSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalRaised?: boolean
    bankNumber?: boolean
    waqfName?: boolean
    waqfAddress?: boolean
    waqfPhoneNumber?: boolean
    imageUrl?: boolean
    description?: boolean
  }, ExtArgs["result"]["waqf"]>

  export type WaqfSelectScalar = {
    id?: boolean
    totalRaised?: boolean
    bankNumber?: boolean
    waqfName?: boolean
    waqfAddress?: boolean
    waqfPhoneNumber?: boolean
    imageUrl?: boolean
    description?: boolean
  }

  export type WaqfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CauseOnWaqf?: boolean | Waqf$CauseOnWaqfArgs<ExtArgs>
    History?: boolean | Waqf$HistoryArgs<ExtArgs>
    Transactions?: boolean | Waqf$TransactionsArgs<ExtArgs>
    _count?: boolean | WaqfCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WaqfIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WaqfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Waqf"
    objects: {
      CauseOnWaqf: Prisma.$CauseOnWaqfPayload<ExtArgs>[]
      History: Prisma.$HistoryPayload<ExtArgs>[]
      Transactions: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      totalRaised: number | null
      bankNumber: number | null
      waqfName: string
      waqfAddress: string | null
      waqfPhoneNumber: string | null
      imageUrl: string | null
      description: string | null
    }, ExtArgs["result"]["waqf"]>
    composites: {}
  }

  type WaqfGetPayload<S extends boolean | null | undefined | WaqfDefaultArgs> = $Result.GetResult<Prisma.$WaqfPayload, S>

  type WaqfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WaqfFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WaqfCountAggregateInputType | true
    }

  export interface WaqfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Waqf'], meta: { name: 'Waqf' } }
    /**
     * Find zero or one Waqf that matches the filter.
     * @param {WaqfFindUniqueArgs} args - Arguments to find a Waqf
     * @example
     * // Get one Waqf
     * const waqf = await prisma.waqf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaqfFindUniqueArgs>(args: SelectSubset<T, WaqfFindUniqueArgs<ExtArgs>>): Prisma__WaqfClient<$Result.GetResult<Prisma.$WaqfPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Waqf that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WaqfFindUniqueOrThrowArgs} args - Arguments to find a Waqf
     * @example
     * // Get one Waqf
     * const waqf = await prisma.waqf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaqfFindUniqueOrThrowArgs>(args: SelectSubset<T, WaqfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaqfClient<$Result.GetResult<Prisma.$WaqfPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Waqf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaqfFindFirstArgs} args - Arguments to find a Waqf
     * @example
     * // Get one Waqf
     * const waqf = await prisma.waqf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaqfFindFirstArgs>(args?: SelectSubset<T, WaqfFindFirstArgs<ExtArgs>>): Prisma__WaqfClient<$Result.GetResult<Prisma.$WaqfPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Waqf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaqfFindFirstOrThrowArgs} args - Arguments to find a Waqf
     * @example
     * // Get one Waqf
     * const waqf = await prisma.waqf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaqfFindFirstOrThrowArgs>(args?: SelectSubset<T, WaqfFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaqfClient<$Result.GetResult<Prisma.$WaqfPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Waqfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaqfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Waqfs
     * const waqfs = await prisma.waqf.findMany()
     * 
     * // Get first 10 Waqfs
     * const waqfs = await prisma.waqf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waqfWithIdOnly = await prisma.waqf.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaqfFindManyArgs>(args?: SelectSubset<T, WaqfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaqfPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Waqf.
     * @param {WaqfCreateArgs} args - Arguments to create a Waqf.
     * @example
     * // Create one Waqf
     * const Waqf = await prisma.waqf.create({
     *   data: {
     *     // ... data to create a Waqf
     *   }
     * })
     * 
     */
    create<T extends WaqfCreateArgs>(args: SelectSubset<T, WaqfCreateArgs<ExtArgs>>): Prisma__WaqfClient<$Result.GetResult<Prisma.$WaqfPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Waqfs.
     * @param {WaqfCreateManyArgs} args - Arguments to create many Waqfs.
     * @example
     * // Create many Waqfs
     * const waqf = await prisma.waqf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaqfCreateManyArgs>(args?: SelectSubset<T, WaqfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Waqfs and returns the data saved in the database.
     * @param {WaqfCreateManyAndReturnArgs} args - Arguments to create many Waqfs.
     * @example
     * // Create many Waqfs
     * const waqf = await prisma.waqf.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Waqfs and only return the `id`
     * const waqfWithIdOnly = await prisma.waqf.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaqfCreateManyAndReturnArgs>(args?: SelectSubset<T, WaqfCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaqfPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Waqf.
     * @param {WaqfDeleteArgs} args - Arguments to delete one Waqf.
     * @example
     * // Delete one Waqf
     * const Waqf = await prisma.waqf.delete({
     *   where: {
     *     // ... filter to delete one Waqf
     *   }
     * })
     * 
     */
    delete<T extends WaqfDeleteArgs>(args: SelectSubset<T, WaqfDeleteArgs<ExtArgs>>): Prisma__WaqfClient<$Result.GetResult<Prisma.$WaqfPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Waqf.
     * @param {WaqfUpdateArgs} args - Arguments to update one Waqf.
     * @example
     * // Update one Waqf
     * const waqf = await prisma.waqf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaqfUpdateArgs>(args: SelectSubset<T, WaqfUpdateArgs<ExtArgs>>): Prisma__WaqfClient<$Result.GetResult<Prisma.$WaqfPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Waqfs.
     * @param {WaqfDeleteManyArgs} args - Arguments to filter Waqfs to delete.
     * @example
     * // Delete a few Waqfs
     * const { count } = await prisma.waqf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaqfDeleteManyArgs>(args?: SelectSubset<T, WaqfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waqfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaqfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Waqfs
     * const waqf = await prisma.waqf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaqfUpdateManyArgs>(args: SelectSubset<T, WaqfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Waqf.
     * @param {WaqfUpsertArgs} args - Arguments to update or create a Waqf.
     * @example
     * // Update or create a Waqf
     * const waqf = await prisma.waqf.upsert({
     *   create: {
     *     // ... data to create a Waqf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Waqf we want to update
     *   }
     * })
     */
    upsert<T extends WaqfUpsertArgs>(args: SelectSubset<T, WaqfUpsertArgs<ExtArgs>>): Prisma__WaqfClient<$Result.GetResult<Prisma.$WaqfPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Waqfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaqfCountArgs} args - Arguments to filter Waqfs to count.
     * @example
     * // Count the number of Waqfs
     * const count = await prisma.waqf.count({
     *   where: {
     *     // ... the filter for the Waqfs we want to count
     *   }
     * })
    **/
    count<T extends WaqfCountArgs>(
      args?: Subset<T, WaqfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaqfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Waqf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaqfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WaqfAggregateArgs>(args: Subset<T, WaqfAggregateArgs>): Prisma.PrismaPromise<GetWaqfAggregateType<T>>

    /**
     * Group by Waqf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaqfGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WaqfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaqfGroupByArgs['orderBy'] }
        : { orderBy?: WaqfGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WaqfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaqfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Waqf model
   */
  readonly fields: WaqfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Waqf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaqfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CauseOnWaqf<T extends Waqf$CauseOnWaqfArgs<ExtArgs> = {}>(args?: Subset<T, Waqf$CauseOnWaqfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CauseOnWaqfPayload<ExtArgs>, T, "findMany"> | Null>
    History<T extends Waqf$HistoryArgs<ExtArgs> = {}>(args?: Subset<T, Waqf$HistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany"> | Null>
    Transactions<T extends Waqf$TransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Waqf$TransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Waqf model
   */ 
  interface WaqfFieldRefs {
    readonly id: FieldRef<"Waqf", 'Int'>
    readonly totalRaised: FieldRef<"Waqf", 'Int'>
    readonly bankNumber: FieldRef<"Waqf", 'Int'>
    readonly waqfName: FieldRef<"Waqf", 'String'>
    readonly waqfAddress: FieldRef<"Waqf", 'String'>
    readonly waqfPhoneNumber: FieldRef<"Waqf", 'String'>
    readonly imageUrl: FieldRef<"Waqf", 'String'>
    readonly description: FieldRef<"Waqf", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Waqf findUnique
   */
  export type WaqfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waqf
     */
    select?: WaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfInclude<ExtArgs> | null
    /**
     * Filter, which Waqf to fetch.
     */
    where: WaqfWhereUniqueInput
  }

  /**
   * Waqf findUniqueOrThrow
   */
  export type WaqfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waqf
     */
    select?: WaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfInclude<ExtArgs> | null
    /**
     * Filter, which Waqf to fetch.
     */
    where: WaqfWhereUniqueInput
  }

  /**
   * Waqf findFirst
   */
  export type WaqfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waqf
     */
    select?: WaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfInclude<ExtArgs> | null
    /**
     * Filter, which Waqf to fetch.
     */
    where?: WaqfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waqfs to fetch.
     */
    orderBy?: WaqfOrderByWithRelationInput | WaqfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waqfs.
     */
    cursor?: WaqfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waqfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waqfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waqfs.
     */
    distinct?: WaqfScalarFieldEnum | WaqfScalarFieldEnum[]
  }

  /**
   * Waqf findFirstOrThrow
   */
  export type WaqfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waqf
     */
    select?: WaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfInclude<ExtArgs> | null
    /**
     * Filter, which Waqf to fetch.
     */
    where?: WaqfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waqfs to fetch.
     */
    orderBy?: WaqfOrderByWithRelationInput | WaqfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waqfs.
     */
    cursor?: WaqfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waqfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waqfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waqfs.
     */
    distinct?: WaqfScalarFieldEnum | WaqfScalarFieldEnum[]
  }

  /**
   * Waqf findMany
   */
  export type WaqfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waqf
     */
    select?: WaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfInclude<ExtArgs> | null
    /**
     * Filter, which Waqfs to fetch.
     */
    where?: WaqfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waqfs to fetch.
     */
    orderBy?: WaqfOrderByWithRelationInput | WaqfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Waqfs.
     */
    cursor?: WaqfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waqfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waqfs.
     */
    skip?: number
    distinct?: WaqfScalarFieldEnum | WaqfScalarFieldEnum[]
  }

  /**
   * Waqf create
   */
  export type WaqfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waqf
     */
    select?: WaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfInclude<ExtArgs> | null
    /**
     * The data needed to create a Waqf.
     */
    data: XOR<WaqfCreateInput, WaqfUncheckedCreateInput>
  }

  /**
   * Waqf createMany
   */
  export type WaqfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Waqfs.
     */
    data: WaqfCreateManyInput | WaqfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Waqf createManyAndReturn
   */
  export type WaqfCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waqf
     */
    select?: WaqfSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Waqfs.
     */
    data: WaqfCreateManyInput | WaqfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Waqf update
   */
  export type WaqfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waqf
     */
    select?: WaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfInclude<ExtArgs> | null
    /**
     * The data needed to update a Waqf.
     */
    data: XOR<WaqfUpdateInput, WaqfUncheckedUpdateInput>
    /**
     * Choose, which Waqf to update.
     */
    where: WaqfWhereUniqueInput
  }

  /**
   * Waqf updateMany
   */
  export type WaqfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Waqfs.
     */
    data: XOR<WaqfUpdateManyMutationInput, WaqfUncheckedUpdateManyInput>
    /**
     * Filter which Waqfs to update
     */
    where?: WaqfWhereInput
  }

  /**
   * Waqf upsert
   */
  export type WaqfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waqf
     */
    select?: WaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfInclude<ExtArgs> | null
    /**
     * The filter to search for the Waqf to update in case it exists.
     */
    where: WaqfWhereUniqueInput
    /**
     * In case the Waqf found by the `where` argument doesn't exist, create a new Waqf with this data.
     */
    create: XOR<WaqfCreateInput, WaqfUncheckedCreateInput>
    /**
     * In case the Waqf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaqfUpdateInput, WaqfUncheckedUpdateInput>
  }

  /**
   * Waqf delete
   */
  export type WaqfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waqf
     */
    select?: WaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfInclude<ExtArgs> | null
    /**
     * Filter which Waqf to delete.
     */
    where: WaqfWhereUniqueInput
  }

  /**
   * Waqf deleteMany
   */
  export type WaqfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Waqfs to delete
     */
    where?: WaqfWhereInput
  }

  /**
   * Waqf.CauseOnWaqf
   */
  export type Waqf$CauseOnWaqfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CauseOnWaqf
     */
    select?: CauseOnWaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseOnWaqfInclude<ExtArgs> | null
    where?: CauseOnWaqfWhereInput
    orderBy?: CauseOnWaqfOrderByWithRelationInput | CauseOnWaqfOrderByWithRelationInput[]
    cursor?: CauseOnWaqfWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CauseOnWaqfScalarFieldEnum | CauseOnWaqfScalarFieldEnum[]
  }

  /**
   * Waqf.History
   */
  export type Waqf$HistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * Waqf.Transactions
   */
  export type Waqf$TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Waqf without action
   */
  export type WaqfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waqf
     */
    select?: WaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfInclude<ExtArgs> | null
  }


  /**
   * Model WaqfCause
   */

  export type AggregateWaqfCause = {
    _count: WaqfCauseCountAggregateOutputType | null
    _avg: WaqfCauseAvgAggregateOutputType | null
    _sum: WaqfCauseSumAggregateOutputType | null
    _min: WaqfCauseMinAggregateOutputType | null
    _max: WaqfCauseMaxAggregateOutputType | null
  }

  export type WaqfCauseAvgAggregateOutputType = {
    id: number | null
  }

  export type WaqfCauseSumAggregateOutputType = {
    id: number | null
  }

  export type WaqfCauseMinAggregateOutputType = {
    id: number | null
    waqfCause: string | null
  }

  export type WaqfCauseMaxAggregateOutputType = {
    id: number | null
    waqfCause: string | null
  }

  export type WaqfCauseCountAggregateOutputType = {
    id: number
    waqfCause: number
    _all: number
  }


  export type WaqfCauseAvgAggregateInputType = {
    id?: true
  }

  export type WaqfCauseSumAggregateInputType = {
    id?: true
  }

  export type WaqfCauseMinAggregateInputType = {
    id?: true
    waqfCause?: true
  }

  export type WaqfCauseMaxAggregateInputType = {
    id?: true
    waqfCause?: true
  }

  export type WaqfCauseCountAggregateInputType = {
    id?: true
    waqfCause?: true
    _all?: true
  }

  export type WaqfCauseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaqfCause to aggregate.
     */
    where?: WaqfCauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaqfCauses to fetch.
     */
    orderBy?: WaqfCauseOrderByWithRelationInput | WaqfCauseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaqfCauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaqfCauses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaqfCauses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaqfCauses
    **/
    _count?: true | WaqfCauseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaqfCauseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaqfCauseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaqfCauseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaqfCauseMaxAggregateInputType
  }

  export type GetWaqfCauseAggregateType<T extends WaqfCauseAggregateArgs> = {
        [P in keyof T & keyof AggregateWaqfCause]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaqfCause[P]>
      : GetScalarType<T[P], AggregateWaqfCause[P]>
  }




  export type WaqfCauseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaqfCauseWhereInput
    orderBy?: WaqfCauseOrderByWithAggregationInput | WaqfCauseOrderByWithAggregationInput[]
    by: WaqfCauseScalarFieldEnum[] | WaqfCauseScalarFieldEnum
    having?: WaqfCauseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaqfCauseCountAggregateInputType | true
    _avg?: WaqfCauseAvgAggregateInputType
    _sum?: WaqfCauseSumAggregateInputType
    _min?: WaqfCauseMinAggregateInputType
    _max?: WaqfCauseMaxAggregateInputType
  }

  export type WaqfCauseGroupByOutputType = {
    id: number
    waqfCause: string
    _count: WaqfCauseCountAggregateOutputType | null
    _avg: WaqfCauseAvgAggregateOutputType | null
    _sum: WaqfCauseSumAggregateOutputType | null
    _min: WaqfCauseMinAggregateOutputType | null
    _max: WaqfCauseMaxAggregateOutputType | null
  }

  type GetWaqfCauseGroupByPayload<T extends WaqfCauseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaqfCauseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaqfCauseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaqfCauseGroupByOutputType[P]>
            : GetScalarType<T[P], WaqfCauseGroupByOutputType[P]>
        }
      >
    >


  export type WaqfCauseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waqfCause?: boolean
    CauseOnWaqf?: boolean | WaqfCause$CauseOnWaqfArgs<ExtArgs>
    _count?: boolean | WaqfCauseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waqfCause"]>

  export type WaqfCauseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    waqfCause?: boolean
  }, ExtArgs["result"]["waqfCause"]>

  export type WaqfCauseSelectScalar = {
    id?: boolean
    waqfCause?: boolean
  }

  export type WaqfCauseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CauseOnWaqf?: boolean | WaqfCause$CauseOnWaqfArgs<ExtArgs>
    _count?: boolean | WaqfCauseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WaqfCauseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WaqfCausePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaqfCause"
    objects: {
      CauseOnWaqf: Prisma.$CauseOnWaqfPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      waqfCause: string
    }, ExtArgs["result"]["waqfCause"]>
    composites: {}
  }

  type WaqfCauseGetPayload<S extends boolean | null | undefined | WaqfCauseDefaultArgs> = $Result.GetResult<Prisma.$WaqfCausePayload, S>

  type WaqfCauseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WaqfCauseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WaqfCauseCountAggregateInputType | true
    }

  export interface WaqfCauseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaqfCause'], meta: { name: 'WaqfCause' } }
    /**
     * Find zero or one WaqfCause that matches the filter.
     * @param {WaqfCauseFindUniqueArgs} args - Arguments to find a WaqfCause
     * @example
     * // Get one WaqfCause
     * const waqfCause = await prisma.waqfCause.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaqfCauseFindUniqueArgs>(args: SelectSubset<T, WaqfCauseFindUniqueArgs<ExtArgs>>): Prisma__WaqfCauseClient<$Result.GetResult<Prisma.$WaqfCausePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WaqfCause that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WaqfCauseFindUniqueOrThrowArgs} args - Arguments to find a WaqfCause
     * @example
     * // Get one WaqfCause
     * const waqfCause = await prisma.waqfCause.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaqfCauseFindUniqueOrThrowArgs>(args: SelectSubset<T, WaqfCauseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaqfCauseClient<$Result.GetResult<Prisma.$WaqfCausePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WaqfCause that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaqfCauseFindFirstArgs} args - Arguments to find a WaqfCause
     * @example
     * // Get one WaqfCause
     * const waqfCause = await prisma.waqfCause.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaqfCauseFindFirstArgs>(args?: SelectSubset<T, WaqfCauseFindFirstArgs<ExtArgs>>): Prisma__WaqfCauseClient<$Result.GetResult<Prisma.$WaqfCausePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WaqfCause that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaqfCauseFindFirstOrThrowArgs} args - Arguments to find a WaqfCause
     * @example
     * // Get one WaqfCause
     * const waqfCause = await prisma.waqfCause.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaqfCauseFindFirstOrThrowArgs>(args?: SelectSubset<T, WaqfCauseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaqfCauseClient<$Result.GetResult<Prisma.$WaqfCausePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WaqfCauses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaqfCauseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaqfCauses
     * const waqfCauses = await prisma.waqfCause.findMany()
     * 
     * // Get first 10 WaqfCauses
     * const waqfCauses = await prisma.waqfCause.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waqfCauseWithIdOnly = await prisma.waqfCause.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaqfCauseFindManyArgs>(args?: SelectSubset<T, WaqfCauseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaqfCausePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WaqfCause.
     * @param {WaqfCauseCreateArgs} args - Arguments to create a WaqfCause.
     * @example
     * // Create one WaqfCause
     * const WaqfCause = await prisma.waqfCause.create({
     *   data: {
     *     // ... data to create a WaqfCause
     *   }
     * })
     * 
     */
    create<T extends WaqfCauseCreateArgs>(args: SelectSubset<T, WaqfCauseCreateArgs<ExtArgs>>): Prisma__WaqfCauseClient<$Result.GetResult<Prisma.$WaqfCausePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WaqfCauses.
     * @param {WaqfCauseCreateManyArgs} args - Arguments to create many WaqfCauses.
     * @example
     * // Create many WaqfCauses
     * const waqfCause = await prisma.waqfCause.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaqfCauseCreateManyArgs>(args?: SelectSubset<T, WaqfCauseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WaqfCauses and returns the data saved in the database.
     * @param {WaqfCauseCreateManyAndReturnArgs} args - Arguments to create many WaqfCauses.
     * @example
     * // Create many WaqfCauses
     * const waqfCause = await prisma.waqfCause.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WaqfCauses and only return the `id`
     * const waqfCauseWithIdOnly = await prisma.waqfCause.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaqfCauseCreateManyAndReturnArgs>(args?: SelectSubset<T, WaqfCauseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaqfCausePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WaqfCause.
     * @param {WaqfCauseDeleteArgs} args - Arguments to delete one WaqfCause.
     * @example
     * // Delete one WaqfCause
     * const WaqfCause = await prisma.waqfCause.delete({
     *   where: {
     *     // ... filter to delete one WaqfCause
     *   }
     * })
     * 
     */
    delete<T extends WaqfCauseDeleteArgs>(args: SelectSubset<T, WaqfCauseDeleteArgs<ExtArgs>>): Prisma__WaqfCauseClient<$Result.GetResult<Prisma.$WaqfCausePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WaqfCause.
     * @param {WaqfCauseUpdateArgs} args - Arguments to update one WaqfCause.
     * @example
     * // Update one WaqfCause
     * const waqfCause = await prisma.waqfCause.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaqfCauseUpdateArgs>(args: SelectSubset<T, WaqfCauseUpdateArgs<ExtArgs>>): Prisma__WaqfCauseClient<$Result.GetResult<Prisma.$WaqfCausePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WaqfCauses.
     * @param {WaqfCauseDeleteManyArgs} args - Arguments to filter WaqfCauses to delete.
     * @example
     * // Delete a few WaqfCauses
     * const { count } = await prisma.waqfCause.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaqfCauseDeleteManyArgs>(args?: SelectSubset<T, WaqfCauseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaqfCauses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaqfCauseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaqfCauses
     * const waqfCause = await prisma.waqfCause.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaqfCauseUpdateManyArgs>(args: SelectSubset<T, WaqfCauseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WaqfCause.
     * @param {WaqfCauseUpsertArgs} args - Arguments to update or create a WaqfCause.
     * @example
     * // Update or create a WaqfCause
     * const waqfCause = await prisma.waqfCause.upsert({
     *   create: {
     *     // ... data to create a WaqfCause
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaqfCause we want to update
     *   }
     * })
     */
    upsert<T extends WaqfCauseUpsertArgs>(args: SelectSubset<T, WaqfCauseUpsertArgs<ExtArgs>>): Prisma__WaqfCauseClient<$Result.GetResult<Prisma.$WaqfCausePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WaqfCauses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaqfCauseCountArgs} args - Arguments to filter WaqfCauses to count.
     * @example
     * // Count the number of WaqfCauses
     * const count = await prisma.waqfCause.count({
     *   where: {
     *     // ... the filter for the WaqfCauses we want to count
     *   }
     * })
    **/
    count<T extends WaqfCauseCountArgs>(
      args?: Subset<T, WaqfCauseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaqfCauseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaqfCause.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaqfCauseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WaqfCauseAggregateArgs>(args: Subset<T, WaqfCauseAggregateArgs>): Prisma.PrismaPromise<GetWaqfCauseAggregateType<T>>

    /**
     * Group by WaqfCause.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaqfCauseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WaqfCauseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaqfCauseGroupByArgs['orderBy'] }
        : { orderBy?: WaqfCauseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WaqfCauseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaqfCauseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaqfCause model
   */
  readonly fields: WaqfCauseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaqfCause.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaqfCauseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CauseOnWaqf<T extends WaqfCause$CauseOnWaqfArgs<ExtArgs> = {}>(args?: Subset<T, WaqfCause$CauseOnWaqfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CauseOnWaqfPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WaqfCause model
   */ 
  interface WaqfCauseFieldRefs {
    readonly id: FieldRef<"WaqfCause", 'Int'>
    readonly waqfCause: FieldRef<"WaqfCause", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WaqfCause findUnique
   */
  export type WaqfCauseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaqfCause
     */
    select?: WaqfCauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfCauseInclude<ExtArgs> | null
    /**
     * Filter, which WaqfCause to fetch.
     */
    where: WaqfCauseWhereUniqueInput
  }

  /**
   * WaqfCause findUniqueOrThrow
   */
  export type WaqfCauseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaqfCause
     */
    select?: WaqfCauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfCauseInclude<ExtArgs> | null
    /**
     * Filter, which WaqfCause to fetch.
     */
    where: WaqfCauseWhereUniqueInput
  }

  /**
   * WaqfCause findFirst
   */
  export type WaqfCauseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaqfCause
     */
    select?: WaqfCauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfCauseInclude<ExtArgs> | null
    /**
     * Filter, which WaqfCause to fetch.
     */
    where?: WaqfCauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaqfCauses to fetch.
     */
    orderBy?: WaqfCauseOrderByWithRelationInput | WaqfCauseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaqfCauses.
     */
    cursor?: WaqfCauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaqfCauses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaqfCauses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaqfCauses.
     */
    distinct?: WaqfCauseScalarFieldEnum | WaqfCauseScalarFieldEnum[]
  }

  /**
   * WaqfCause findFirstOrThrow
   */
  export type WaqfCauseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaqfCause
     */
    select?: WaqfCauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfCauseInclude<ExtArgs> | null
    /**
     * Filter, which WaqfCause to fetch.
     */
    where?: WaqfCauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaqfCauses to fetch.
     */
    orderBy?: WaqfCauseOrderByWithRelationInput | WaqfCauseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaqfCauses.
     */
    cursor?: WaqfCauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaqfCauses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaqfCauses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaqfCauses.
     */
    distinct?: WaqfCauseScalarFieldEnum | WaqfCauseScalarFieldEnum[]
  }

  /**
   * WaqfCause findMany
   */
  export type WaqfCauseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaqfCause
     */
    select?: WaqfCauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfCauseInclude<ExtArgs> | null
    /**
     * Filter, which WaqfCauses to fetch.
     */
    where?: WaqfCauseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaqfCauses to fetch.
     */
    orderBy?: WaqfCauseOrderByWithRelationInput | WaqfCauseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaqfCauses.
     */
    cursor?: WaqfCauseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaqfCauses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaqfCauses.
     */
    skip?: number
    distinct?: WaqfCauseScalarFieldEnum | WaqfCauseScalarFieldEnum[]
  }

  /**
   * WaqfCause create
   */
  export type WaqfCauseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaqfCause
     */
    select?: WaqfCauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfCauseInclude<ExtArgs> | null
    /**
     * The data needed to create a WaqfCause.
     */
    data: XOR<WaqfCauseCreateInput, WaqfCauseUncheckedCreateInput>
  }

  /**
   * WaqfCause createMany
   */
  export type WaqfCauseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaqfCauses.
     */
    data: WaqfCauseCreateManyInput | WaqfCauseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaqfCause createManyAndReturn
   */
  export type WaqfCauseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaqfCause
     */
    select?: WaqfCauseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WaqfCauses.
     */
    data: WaqfCauseCreateManyInput | WaqfCauseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaqfCause update
   */
  export type WaqfCauseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaqfCause
     */
    select?: WaqfCauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfCauseInclude<ExtArgs> | null
    /**
     * The data needed to update a WaqfCause.
     */
    data: XOR<WaqfCauseUpdateInput, WaqfCauseUncheckedUpdateInput>
    /**
     * Choose, which WaqfCause to update.
     */
    where: WaqfCauseWhereUniqueInput
  }

  /**
   * WaqfCause updateMany
   */
  export type WaqfCauseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaqfCauses.
     */
    data: XOR<WaqfCauseUpdateManyMutationInput, WaqfCauseUncheckedUpdateManyInput>
    /**
     * Filter which WaqfCauses to update
     */
    where?: WaqfCauseWhereInput
  }

  /**
   * WaqfCause upsert
   */
  export type WaqfCauseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaqfCause
     */
    select?: WaqfCauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfCauseInclude<ExtArgs> | null
    /**
     * The filter to search for the WaqfCause to update in case it exists.
     */
    where: WaqfCauseWhereUniqueInput
    /**
     * In case the WaqfCause found by the `where` argument doesn't exist, create a new WaqfCause with this data.
     */
    create: XOR<WaqfCauseCreateInput, WaqfCauseUncheckedCreateInput>
    /**
     * In case the WaqfCause was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaqfCauseUpdateInput, WaqfCauseUncheckedUpdateInput>
  }

  /**
   * WaqfCause delete
   */
  export type WaqfCauseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaqfCause
     */
    select?: WaqfCauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfCauseInclude<ExtArgs> | null
    /**
     * Filter which WaqfCause to delete.
     */
    where: WaqfCauseWhereUniqueInput
  }

  /**
   * WaqfCause deleteMany
   */
  export type WaqfCauseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaqfCauses to delete
     */
    where?: WaqfCauseWhereInput
  }

  /**
   * WaqfCause.CauseOnWaqf
   */
  export type WaqfCause$CauseOnWaqfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CauseOnWaqf
     */
    select?: CauseOnWaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseOnWaqfInclude<ExtArgs> | null
    where?: CauseOnWaqfWhereInput
    orderBy?: CauseOnWaqfOrderByWithRelationInput | CauseOnWaqfOrderByWithRelationInput[]
    cursor?: CauseOnWaqfWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CauseOnWaqfScalarFieldEnum | CauseOnWaqfScalarFieldEnum[]
  }

  /**
   * WaqfCause without action
   */
  export type WaqfCauseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaqfCause
     */
    select?: WaqfCauseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfCauseInclude<ExtArgs> | null
  }


  /**
   * Model CauseOnWaqf
   */

  export type AggregateCauseOnWaqf = {
    _count: CauseOnWaqfCountAggregateOutputType | null
    _avg: CauseOnWaqfAvgAggregateOutputType | null
    _sum: CauseOnWaqfSumAggregateOutputType | null
    _min: CauseOnWaqfMinAggregateOutputType | null
    _max: CauseOnWaqfMaxAggregateOutputType | null
  }

  export type CauseOnWaqfAvgAggregateOutputType = {
    waqfID: number | null
    waqfCauseID: number | null
  }

  export type CauseOnWaqfSumAggregateOutputType = {
    waqfID: number | null
    waqfCauseID: number | null
  }

  export type CauseOnWaqfMinAggregateOutputType = {
    waqfID: number | null
    waqfCauseID: number | null
  }

  export type CauseOnWaqfMaxAggregateOutputType = {
    waqfID: number | null
    waqfCauseID: number | null
  }

  export type CauseOnWaqfCountAggregateOutputType = {
    waqfID: number
    waqfCauseID: number
    _all: number
  }


  export type CauseOnWaqfAvgAggregateInputType = {
    waqfID?: true
    waqfCauseID?: true
  }

  export type CauseOnWaqfSumAggregateInputType = {
    waqfID?: true
    waqfCauseID?: true
  }

  export type CauseOnWaqfMinAggregateInputType = {
    waqfID?: true
    waqfCauseID?: true
  }

  export type CauseOnWaqfMaxAggregateInputType = {
    waqfID?: true
    waqfCauseID?: true
  }

  export type CauseOnWaqfCountAggregateInputType = {
    waqfID?: true
    waqfCauseID?: true
    _all?: true
  }

  export type CauseOnWaqfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CauseOnWaqf to aggregate.
     */
    where?: CauseOnWaqfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CauseOnWaqfs to fetch.
     */
    orderBy?: CauseOnWaqfOrderByWithRelationInput | CauseOnWaqfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CauseOnWaqfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CauseOnWaqfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CauseOnWaqfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CauseOnWaqfs
    **/
    _count?: true | CauseOnWaqfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CauseOnWaqfAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CauseOnWaqfSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CauseOnWaqfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CauseOnWaqfMaxAggregateInputType
  }

  export type GetCauseOnWaqfAggregateType<T extends CauseOnWaqfAggregateArgs> = {
        [P in keyof T & keyof AggregateCauseOnWaqf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCauseOnWaqf[P]>
      : GetScalarType<T[P], AggregateCauseOnWaqf[P]>
  }




  export type CauseOnWaqfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CauseOnWaqfWhereInput
    orderBy?: CauseOnWaqfOrderByWithAggregationInput | CauseOnWaqfOrderByWithAggregationInput[]
    by: CauseOnWaqfScalarFieldEnum[] | CauseOnWaqfScalarFieldEnum
    having?: CauseOnWaqfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CauseOnWaqfCountAggregateInputType | true
    _avg?: CauseOnWaqfAvgAggregateInputType
    _sum?: CauseOnWaqfSumAggregateInputType
    _min?: CauseOnWaqfMinAggregateInputType
    _max?: CauseOnWaqfMaxAggregateInputType
  }

  export type CauseOnWaqfGroupByOutputType = {
    waqfID: number
    waqfCauseID: number
    _count: CauseOnWaqfCountAggregateOutputType | null
    _avg: CauseOnWaqfAvgAggregateOutputType | null
    _sum: CauseOnWaqfSumAggregateOutputType | null
    _min: CauseOnWaqfMinAggregateOutputType | null
    _max: CauseOnWaqfMaxAggregateOutputType | null
  }

  type GetCauseOnWaqfGroupByPayload<T extends CauseOnWaqfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CauseOnWaqfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CauseOnWaqfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CauseOnWaqfGroupByOutputType[P]>
            : GetScalarType<T[P], CauseOnWaqfGroupByOutputType[P]>
        }
      >
    >


  export type CauseOnWaqfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    waqfID?: boolean
    waqfCauseID?: boolean
    waqfCause?: boolean | WaqfCauseDefaultArgs<ExtArgs>
    Waqf?: boolean | WaqfDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["causeOnWaqf"]>

  export type CauseOnWaqfSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    waqfID?: boolean
    waqfCauseID?: boolean
    waqfCause?: boolean | WaqfCauseDefaultArgs<ExtArgs>
    Waqf?: boolean | WaqfDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["causeOnWaqf"]>

  export type CauseOnWaqfSelectScalar = {
    waqfID?: boolean
    waqfCauseID?: boolean
  }

  export type CauseOnWaqfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waqfCause?: boolean | WaqfCauseDefaultArgs<ExtArgs>
    Waqf?: boolean | WaqfDefaultArgs<ExtArgs>
  }
  export type CauseOnWaqfIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waqfCause?: boolean | WaqfCauseDefaultArgs<ExtArgs>
    Waqf?: boolean | WaqfDefaultArgs<ExtArgs>
  }

  export type $CauseOnWaqfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CauseOnWaqf"
    objects: {
      waqfCause: Prisma.$WaqfCausePayload<ExtArgs>
      Waqf: Prisma.$WaqfPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      waqfID: number
      waqfCauseID: number
    }, ExtArgs["result"]["causeOnWaqf"]>
    composites: {}
  }

  type CauseOnWaqfGetPayload<S extends boolean | null | undefined | CauseOnWaqfDefaultArgs> = $Result.GetResult<Prisma.$CauseOnWaqfPayload, S>

  type CauseOnWaqfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CauseOnWaqfFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CauseOnWaqfCountAggregateInputType | true
    }

  export interface CauseOnWaqfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CauseOnWaqf'], meta: { name: 'CauseOnWaqf' } }
    /**
     * Find zero or one CauseOnWaqf that matches the filter.
     * @param {CauseOnWaqfFindUniqueArgs} args - Arguments to find a CauseOnWaqf
     * @example
     * // Get one CauseOnWaqf
     * const causeOnWaqf = await prisma.causeOnWaqf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CauseOnWaqfFindUniqueArgs>(args: SelectSubset<T, CauseOnWaqfFindUniqueArgs<ExtArgs>>): Prisma__CauseOnWaqfClient<$Result.GetResult<Prisma.$CauseOnWaqfPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CauseOnWaqf that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CauseOnWaqfFindUniqueOrThrowArgs} args - Arguments to find a CauseOnWaqf
     * @example
     * // Get one CauseOnWaqf
     * const causeOnWaqf = await prisma.causeOnWaqf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CauseOnWaqfFindUniqueOrThrowArgs>(args: SelectSubset<T, CauseOnWaqfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CauseOnWaqfClient<$Result.GetResult<Prisma.$CauseOnWaqfPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CauseOnWaqf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CauseOnWaqfFindFirstArgs} args - Arguments to find a CauseOnWaqf
     * @example
     * // Get one CauseOnWaqf
     * const causeOnWaqf = await prisma.causeOnWaqf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CauseOnWaqfFindFirstArgs>(args?: SelectSubset<T, CauseOnWaqfFindFirstArgs<ExtArgs>>): Prisma__CauseOnWaqfClient<$Result.GetResult<Prisma.$CauseOnWaqfPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CauseOnWaqf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CauseOnWaqfFindFirstOrThrowArgs} args - Arguments to find a CauseOnWaqf
     * @example
     * // Get one CauseOnWaqf
     * const causeOnWaqf = await prisma.causeOnWaqf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CauseOnWaqfFindFirstOrThrowArgs>(args?: SelectSubset<T, CauseOnWaqfFindFirstOrThrowArgs<ExtArgs>>): Prisma__CauseOnWaqfClient<$Result.GetResult<Prisma.$CauseOnWaqfPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CauseOnWaqfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CauseOnWaqfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CauseOnWaqfs
     * const causeOnWaqfs = await prisma.causeOnWaqf.findMany()
     * 
     * // Get first 10 CauseOnWaqfs
     * const causeOnWaqfs = await prisma.causeOnWaqf.findMany({ take: 10 })
     * 
     * // Only select the `waqfID`
     * const causeOnWaqfWithWaqfIDOnly = await prisma.causeOnWaqf.findMany({ select: { waqfID: true } })
     * 
     */
    findMany<T extends CauseOnWaqfFindManyArgs>(args?: SelectSubset<T, CauseOnWaqfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CauseOnWaqfPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CauseOnWaqf.
     * @param {CauseOnWaqfCreateArgs} args - Arguments to create a CauseOnWaqf.
     * @example
     * // Create one CauseOnWaqf
     * const CauseOnWaqf = await prisma.causeOnWaqf.create({
     *   data: {
     *     // ... data to create a CauseOnWaqf
     *   }
     * })
     * 
     */
    create<T extends CauseOnWaqfCreateArgs>(args: SelectSubset<T, CauseOnWaqfCreateArgs<ExtArgs>>): Prisma__CauseOnWaqfClient<$Result.GetResult<Prisma.$CauseOnWaqfPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CauseOnWaqfs.
     * @param {CauseOnWaqfCreateManyArgs} args - Arguments to create many CauseOnWaqfs.
     * @example
     * // Create many CauseOnWaqfs
     * const causeOnWaqf = await prisma.causeOnWaqf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CauseOnWaqfCreateManyArgs>(args?: SelectSubset<T, CauseOnWaqfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CauseOnWaqfs and returns the data saved in the database.
     * @param {CauseOnWaqfCreateManyAndReturnArgs} args - Arguments to create many CauseOnWaqfs.
     * @example
     * // Create many CauseOnWaqfs
     * const causeOnWaqf = await prisma.causeOnWaqf.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CauseOnWaqfs and only return the `waqfID`
     * const causeOnWaqfWithWaqfIDOnly = await prisma.causeOnWaqf.createManyAndReturn({ 
     *   select: { waqfID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CauseOnWaqfCreateManyAndReturnArgs>(args?: SelectSubset<T, CauseOnWaqfCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CauseOnWaqfPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CauseOnWaqf.
     * @param {CauseOnWaqfDeleteArgs} args - Arguments to delete one CauseOnWaqf.
     * @example
     * // Delete one CauseOnWaqf
     * const CauseOnWaqf = await prisma.causeOnWaqf.delete({
     *   where: {
     *     // ... filter to delete one CauseOnWaqf
     *   }
     * })
     * 
     */
    delete<T extends CauseOnWaqfDeleteArgs>(args: SelectSubset<T, CauseOnWaqfDeleteArgs<ExtArgs>>): Prisma__CauseOnWaqfClient<$Result.GetResult<Prisma.$CauseOnWaqfPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CauseOnWaqf.
     * @param {CauseOnWaqfUpdateArgs} args - Arguments to update one CauseOnWaqf.
     * @example
     * // Update one CauseOnWaqf
     * const causeOnWaqf = await prisma.causeOnWaqf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CauseOnWaqfUpdateArgs>(args: SelectSubset<T, CauseOnWaqfUpdateArgs<ExtArgs>>): Prisma__CauseOnWaqfClient<$Result.GetResult<Prisma.$CauseOnWaqfPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CauseOnWaqfs.
     * @param {CauseOnWaqfDeleteManyArgs} args - Arguments to filter CauseOnWaqfs to delete.
     * @example
     * // Delete a few CauseOnWaqfs
     * const { count } = await prisma.causeOnWaqf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CauseOnWaqfDeleteManyArgs>(args?: SelectSubset<T, CauseOnWaqfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CauseOnWaqfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CauseOnWaqfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CauseOnWaqfs
     * const causeOnWaqf = await prisma.causeOnWaqf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CauseOnWaqfUpdateManyArgs>(args: SelectSubset<T, CauseOnWaqfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CauseOnWaqf.
     * @param {CauseOnWaqfUpsertArgs} args - Arguments to update or create a CauseOnWaqf.
     * @example
     * // Update or create a CauseOnWaqf
     * const causeOnWaqf = await prisma.causeOnWaqf.upsert({
     *   create: {
     *     // ... data to create a CauseOnWaqf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CauseOnWaqf we want to update
     *   }
     * })
     */
    upsert<T extends CauseOnWaqfUpsertArgs>(args: SelectSubset<T, CauseOnWaqfUpsertArgs<ExtArgs>>): Prisma__CauseOnWaqfClient<$Result.GetResult<Prisma.$CauseOnWaqfPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CauseOnWaqfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CauseOnWaqfCountArgs} args - Arguments to filter CauseOnWaqfs to count.
     * @example
     * // Count the number of CauseOnWaqfs
     * const count = await prisma.causeOnWaqf.count({
     *   where: {
     *     // ... the filter for the CauseOnWaqfs we want to count
     *   }
     * })
    **/
    count<T extends CauseOnWaqfCountArgs>(
      args?: Subset<T, CauseOnWaqfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CauseOnWaqfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CauseOnWaqf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CauseOnWaqfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CauseOnWaqfAggregateArgs>(args: Subset<T, CauseOnWaqfAggregateArgs>): Prisma.PrismaPromise<GetCauseOnWaqfAggregateType<T>>

    /**
     * Group by CauseOnWaqf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CauseOnWaqfGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CauseOnWaqfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CauseOnWaqfGroupByArgs['orderBy'] }
        : { orderBy?: CauseOnWaqfGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CauseOnWaqfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCauseOnWaqfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CauseOnWaqf model
   */
  readonly fields: CauseOnWaqfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CauseOnWaqf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CauseOnWaqfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    waqfCause<T extends WaqfCauseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WaqfCauseDefaultArgs<ExtArgs>>): Prisma__WaqfCauseClient<$Result.GetResult<Prisma.$WaqfCausePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Waqf<T extends WaqfDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WaqfDefaultArgs<ExtArgs>>): Prisma__WaqfClient<$Result.GetResult<Prisma.$WaqfPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CauseOnWaqf model
   */ 
  interface CauseOnWaqfFieldRefs {
    readonly waqfID: FieldRef<"CauseOnWaqf", 'Int'>
    readonly waqfCauseID: FieldRef<"CauseOnWaqf", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CauseOnWaqf findUnique
   */
  export type CauseOnWaqfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CauseOnWaqf
     */
    select?: CauseOnWaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseOnWaqfInclude<ExtArgs> | null
    /**
     * Filter, which CauseOnWaqf to fetch.
     */
    where: CauseOnWaqfWhereUniqueInput
  }

  /**
   * CauseOnWaqf findUniqueOrThrow
   */
  export type CauseOnWaqfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CauseOnWaqf
     */
    select?: CauseOnWaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseOnWaqfInclude<ExtArgs> | null
    /**
     * Filter, which CauseOnWaqf to fetch.
     */
    where: CauseOnWaqfWhereUniqueInput
  }

  /**
   * CauseOnWaqf findFirst
   */
  export type CauseOnWaqfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CauseOnWaqf
     */
    select?: CauseOnWaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseOnWaqfInclude<ExtArgs> | null
    /**
     * Filter, which CauseOnWaqf to fetch.
     */
    where?: CauseOnWaqfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CauseOnWaqfs to fetch.
     */
    orderBy?: CauseOnWaqfOrderByWithRelationInput | CauseOnWaqfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CauseOnWaqfs.
     */
    cursor?: CauseOnWaqfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CauseOnWaqfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CauseOnWaqfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CauseOnWaqfs.
     */
    distinct?: CauseOnWaqfScalarFieldEnum | CauseOnWaqfScalarFieldEnum[]
  }

  /**
   * CauseOnWaqf findFirstOrThrow
   */
  export type CauseOnWaqfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CauseOnWaqf
     */
    select?: CauseOnWaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseOnWaqfInclude<ExtArgs> | null
    /**
     * Filter, which CauseOnWaqf to fetch.
     */
    where?: CauseOnWaqfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CauseOnWaqfs to fetch.
     */
    orderBy?: CauseOnWaqfOrderByWithRelationInput | CauseOnWaqfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CauseOnWaqfs.
     */
    cursor?: CauseOnWaqfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CauseOnWaqfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CauseOnWaqfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CauseOnWaqfs.
     */
    distinct?: CauseOnWaqfScalarFieldEnum | CauseOnWaqfScalarFieldEnum[]
  }

  /**
   * CauseOnWaqf findMany
   */
  export type CauseOnWaqfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CauseOnWaqf
     */
    select?: CauseOnWaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseOnWaqfInclude<ExtArgs> | null
    /**
     * Filter, which CauseOnWaqfs to fetch.
     */
    where?: CauseOnWaqfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CauseOnWaqfs to fetch.
     */
    orderBy?: CauseOnWaqfOrderByWithRelationInput | CauseOnWaqfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CauseOnWaqfs.
     */
    cursor?: CauseOnWaqfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CauseOnWaqfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CauseOnWaqfs.
     */
    skip?: number
    distinct?: CauseOnWaqfScalarFieldEnum | CauseOnWaqfScalarFieldEnum[]
  }

  /**
   * CauseOnWaqf create
   */
  export type CauseOnWaqfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CauseOnWaqf
     */
    select?: CauseOnWaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseOnWaqfInclude<ExtArgs> | null
    /**
     * The data needed to create a CauseOnWaqf.
     */
    data: XOR<CauseOnWaqfCreateInput, CauseOnWaqfUncheckedCreateInput>
  }

  /**
   * CauseOnWaqf createMany
   */
  export type CauseOnWaqfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CauseOnWaqfs.
     */
    data: CauseOnWaqfCreateManyInput | CauseOnWaqfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CauseOnWaqf createManyAndReturn
   */
  export type CauseOnWaqfCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CauseOnWaqf
     */
    select?: CauseOnWaqfSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CauseOnWaqfs.
     */
    data: CauseOnWaqfCreateManyInput | CauseOnWaqfCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseOnWaqfIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CauseOnWaqf update
   */
  export type CauseOnWaqfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CauseOnWaqf
     */
    select?: CauseOnWaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseOnWaqfInclude<ExtArgs> | null
    /**
     * The data needed to update a CauseOnWaqf.
     */
    data: XOR<CauseOnWaqfUpdateInput, CauseOnWaqfUncheckedUpdateInput>
    /**
     * Choose, which CauseOnWaqf to update.
     */
    where: CauseOnWaqfWhereUniqueInput
  }

  /**
   * CauseOnWaqf updateMany
   */
  export type CauseOnWaqfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CauseOnWaqfs.
     */
    data: XOR<CauseOnWaqfUpdateManyMutationInput, CauseOnWaqfUncheckedUpdateManyInput>
    /**
     * Filter which CauseOnWaqfs to update
     */
    where?: CauseOnWaqfWhereInput
  }

  /**
   * CauseOnWaqf upsert
   */
  export type CauseOnWaqfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CauseOnWaqf
     */
    select?: CauseOnWaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseOnWaqfInclude<ExtArgs> | null
    /**
     * The filter to search for the CauseOnWaqf to update in case it exists.
     */
    where: CauseOnWaqfWhereUniqueInput
    /**
     * In case the CauseOnWaqf found by the `where` argument doesn't exist, create a new CauseOnWaqf with this data.
     */
    create: XOR<CauseOnWaqfCreateInput, CauseOnWaqfUncheckedCreateInput>
    /**
     * In case the CauseOnWaqf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CauseOnWaqfUpdateInput, CauseOnWaqfUncheckedUpdateInput>
  }

  /**
   * CauseOnWaqf delete
   */
  export type CauseOnWaqfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CauseOnWaqf
     */
    select?: CauseOnWaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseOnWaqfInclude<ExtArgs> | null
    /**
     * Filter which CauseOnWaqf to delete.
     */
    where: CauseOnWaqfWhereUniqueInput
  }

  /**
   * CauseOnWaqf deleteMany
   */
  export type CauseOnWaqfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CauseOnWaqfs to delete
     */
    where?: CauseOnWaqfWhereInput
  }

  /**
   * CauseOnWaqf without action
   */
  export type CauseOnWaqfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CauseOnWaqf
     */
    select?: CauseOnWaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CauseOnWaqfInclude<ExtArgs> | null
  }


  /**
   * Model Transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    id: number | null
    transactionAmount: number | null
    totalScreened: number | null
    UserID: number | null
    EntityID: number | null
    WaqfID: number | null
    LandfillsID: number | null
    ScreenerID: number | null
    TransformerID: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    id: number | null
    transactionAmount: number | null
    totalScreened: number | null
    UserID: number | null
    EntityID: number | null
    WaqfID: number | null
    LandfillsID: number | null
    ScreenerID: number | null
    TransformerID: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: number | null
    transactionDate: Date | null
    transactionAmount: number | null
    transactionType: string | null
    transactionStatus: string | null
    transactionDescription: string | null
    transactionDeposited: boolean | null
    transactionScreened: boolean | null
    totalScreened: number | null
    transactionTransformed: boolean | null
    transactionTransfered: boolean | null
    UserID: number | null
    EntityID: number | null
    WaqfID: number | null
    LandfillsID: number | null
    ScreenerID: number | null
    TransformerID: number | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: number | null
    transactionDate: Date | null
    transactionAmount: number | null
    transactionType: string | null
    transactionStatus: string | null
    transactionDescription: string | null
    transactionDeposited: boolean | null
    transactionScreened: boolean | null
    totalScreened: number | null
    transactionTransformed: boolean | null
    transactionTransfered: boolean | null
    UserID: number | null
    EntityID: number | null
    WaqfID: number | null
    LandfillsID: number | null
    ScreenerID: number | null
    TransformerID: number | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    transactionDate: number
    transactionAmount: number
    transactionType: number
    transactionStatus: number
    transactionDescription: number
    transactionDeposited: number
    transactionScreened: number
    totalScreened: number
    transactionTransformed: number
    transactionTransfered: number
    UserID: number
    EntityID: number
    WaqfID: number
    LandfillsID: number
    ScreenerID: number
    TransformerID: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    id?: true
    transactionAmount?: true
    totalScreened?: true
    UserID?: true
    EntityID?: true
    WaqfID?: true
    LandfillsID?: true
    ScreenerID?: true
    TransformerID?: true
  }

  export type TransactionsSumAggregateInputType = {
    id?: true
    transactionAmount?: true
    totalScreened?: true
    UserID?: true
    EntityID?: true
    WaqfID?: true
    LandfillsID?: true
    ScreenerID?: true
    TransformerID?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    transactionDate?: true
    transactionAmount?: true
    transactionType?: true
    transactionStatus?: true
    transactionDescription?: true
    transactionDeposited?: true
    transactionScreened?: true
    totalScreened?: true
    transactionTransformed?: true
    transactionTransfered?: true
    UserID?: true
    EntityID?: true
    WaqfID?: true
    LandfillsID?: true
    ScreenerID?: true
    TransformerID?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    transactionDate?: true
    transactionAmount?: true
    transactionType?: true
    transactionStatus?: true
    transactionDescription?: true
    transactionDeposited?: true
    transactionScreened?: true
    totalScreened?: true
    transactionTransformed?: true
    transactionTransfered?: true
    UserID?: true
    EntityID?: true
    WaqfID?: true
    LandfillsID?: true
    ScreenerID?: true
    TransformerID?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    transactionDate?: true
    transactionAmount?: true
    transactionType?: true
    transactionStatus?: true
    transactionDescription?: true
    transactionDeposited?: true
    transactionScreened?: true
    totalScreened?: true
    transactionTransformed?: true
    transactionTransfered?: true
    UserID?: true
    EntityID?: true
    WaqfID?: true
    LandfillsID?: true
    ScreenerID?: true
    TransformerID?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to aggregate.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type TransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithAggregationInput | TransactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: TransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: number
    transactionDate: Date
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription: string | null
    transactionDeposited: boolean
    transactionScreened: boolean
    totalScreened: number
    transactionTransformed: boolean
    transactionTransfered: boolean
    UserID: number | null
    EntityID: number | null
    WaqfID: number | null
    LandfillsID: number | null
    ScreenerID: number | null
    TransformerID: number | null
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends TransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type TransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionDate?: boolean
    transactionAmount?: boolean
    transactionType?: boolean
    transactionStatus?: boolean
    transactionDescription?: boolean
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened?: boolean
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    UserID?: boolean
    EntityID?: boolean
    WaqfID?: boolean
    LandfillsID?: boolean
    ScreenerID?: boolean
    TransformerID?: boolean
    User?: boolean | Transactions$UserArgs<ExtArgs>
    Entity?: boolean | Transactions$EntityArgs<ExtArgs>
    Waqf?: boolean | Transactions$WaqfArgs<ExtArgs>
    Landfills?: boolean | Transactions$LandfillsArgs<ExtArgs>
    Screener?: boolean | Transactions$ScreenerArgs<ExtArgs>
    Transformer?: boolean | Transactions$TransformerArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionDate?: boolean
    transactionAmount?: boolean
    transactionType?: boolean
    transactionStatus?: boolean
    transactionDescription?: boolean
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened?: boolean
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    UserID?: boolean
    EntityID?: boolean
    WaqfID?: boolean
    LandfillsID?: boolean
    ScreenerID?: boolean
    TransformerID?: boolean
    User?: boolean | Transactions$UserArgs<ExtArgs>
    Entity?: boolean | Transactions$EntityArgs<ExtArgs>
    Waqf?: boolean | Transactions$WaqfArgs<ExtArgs>
    Landfills?: boolean | Transactions$LandfillsArgs<ExtArgs>
    Screener?: boolean | Transactions$ScreenerArgs<ExtArgs>
    Transformer?: boolean | Transactions$TransformerArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectScalar = {
    id?: boolean
    transactionDate?: boolean
    transactionAmount?: boolean
    transactionType?: boolean
    transactionStatus?: boolean
    transactionDescription?: boolean
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened?: boolean
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    UserID?: boolean
    EntityID?: boolean
    WaqfID?: boolean
    LandfillsID?: boolean
    ScreenerID?: boolean
    TransformerID?: boolean
  }

  export type TransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Transactions$UserArgs<ExtArgs>
    Entity?: boolean | Transactions$EntityArgs<ExtArgs>
    Waqf?: boolean | Transactions$WaqfArgs<ExtArgs>
    Landfills?: boolean | Transactions$LandfillsArgs<ExtArgs>
    Screener?: boolean | Transactions$ScreenerArgs<ExtArgs>
    Transformer?: boolean | Transactions$TransformerArgs<ExtArgs>
  }
  export type TransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Transactions$UserArgs<ExtArgs>
    Entity?: boolean | Transactions$EntityArgs<ExtArgs>
    Waqf?: boolean | Transactions$WaqfArgs<ExtArgs>
    Landfills?: boolean | Transactions$LandfillsArgs<ExtArgs>
    Screener?: boolean | Transactions$ScreenerArgs<ExtArgs>
    Transformer?: boolean | Transactions$TransformerArgs<ExtArgs>
  }

  export type $TransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transactions"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      Entity: Prisma.$EntityPayload<ExtArgs> | null
      Waqf: Prisma.$WaqfPayload<ExtArgs> | null
      Landfills: Prisma.$LandfillsPayload<ExtArgs> | null
      Screener: Prisma.$ScreenerPayload<ExtArgs> | null
      Transformer: Prisma.$TransformerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transactionDate: Date
      transactionAmount: number
      transactionType: string
      transactionStatus: string
      transactionDescription: string | null
      transactionDeposited: boolean
      transactionScreened: boolean
      totalScreened: number
      transactionTransformed: boolean
      transactionTransfered: boolean
      UserID: number | null
      EntityID: number | null
      WaqfID: number | null
      LandfillsID: number | null
      ScreenerID: number | null
      TransformerID: number | null
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type TransactionsGetPayload<S extends boolean | null | undefined | TransactionsDefaultArgs> = $Result.GetResult<Prisma.$TransactionsPayload, S>

  type TransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface TransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transactions'], meta: { name: 'Transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {TransactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionsFindUniqueArgs>(args: SelectSubset<T, TransactionsFindUniqueArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionsFindFirstArgs>(args?: SelectSubset<T, TransactionsFindFirstArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionsFindManyArgs>(args?: SelectSubset<T, TransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transactions.
     * @param {TransactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends TransactionsCreateArgs>(args: SelectSubset<T, TransactionsCreateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionsCreateManyArgs>(args?: SelectSubset<T, TransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transactions.
     * @param {TransactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends TransactionsDeleteArgs>(args: SelectSubset<T, TransactionsDeleteArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transactions.
     * @param {TransactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionsUpdateArgs>(args: SelectSubset<T, TransactionsUpdateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionsDeleteManyArgs>(args?: SelectSubset<T, TransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionsUpdateManyArgs>(args: SelectSubset<T, TransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transactions.
     * @param {TransactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends TransactionsUpsertArgs>(args: SelectSubset<T, TransactionsUpsertArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionsCountArgs>(
      args?: Subset<T, TransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionsGroupByArgs['orderBy'] }
        : { orderBy?: TransactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transactions model
   */
  readonly fields: TransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Transactions$UserArgs<ExtArgs> = {}>(args?: Subset<T, Transactions$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Entity<T extends Transactions$EntityArgs<ExtArgs> = {}>(args?: Subset<T, Transactions$EntityArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Waqf<T extends Transactions$WaqfArgs<ExtArgs> = {}>(args?: Subset<T, Transactions$WaqfArgs<ExtArgs>>): Prisma__WaqfClient<$Result.GetResult<Prisma.$WaqfPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Landfills<T extends Transactions$LandfillsArgs<ExtArgs> = {}>(args?: Subset<T, Transactions$LandfillsArgs<ExtArgs>>): Prisma__LandfillsClient<$Result.GetResult<Prisma.$LandfillsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Screener<T extends Transactions$ScreenerArgs<ExtArgs> = {}>(args?: Subset<T, Transactions$ScreenerArgs<ExtArgs>>): Prisma__ScreenerClient<$Result.GetResult<Prisma.$ScreenerPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Transformer<T extends Transactions$TransformerArgs<ExtArgs> = {}>(args?: Subset<T, Transactions$TransformerArgs<ExtArgs>>): Prisma__TransformerClient<$Result.GetResult<Prisma.$TransformerPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transactions model
   */ 
  interface TransactionsFieldRefs {
    readonly id: FieldRef<"Transactions", 'Int'>
    readonly transactionDate: FieldRef<"Transactions", 'DateTime'>
    readonly transactionAmount: FieldRef<"Transactions", 'Float'>
    readonly transactionType: FieldRef<"Transactions", 'String'>
    readonly transactionStatus: FieldRef<"Transactions", 'String'>
    readonly transactionDescription: FieldRef<"Transactions", 'String'>
    readonly transactionDeposited: FieldRef<"Transactions", 'Boolean'>
    readonly transactionScreened: FieldRef<"Transactions", 'Boolean'>
    readonly totalScreened: FieldRef<"Transactions", 'Int'>
    readonly transactionTransformed: FieldRef<"Transactions", 'Boolean'>
    readonly transactionTransfered: FieldRef<"Transactions", 'Boolean'>
    readonly UserID: FieldRef<"Transactions", 'Int'>
    readonly EntityID: FieldRef<"Transactions", 'Int'>
    readonly WaqfID: FieldRef<"Transactions", 'Int'>
    readonly LandfillsID: FieldRef<"Transactions", 'Int'>
    readonly ScreenerID: FieldRef<"Transactions", 'Int'>
    readonly TransformerID: FieldRef<"Transactions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transactions findUnique
   */
  export type TransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findUniqueOrThrow
   */
  export type TransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findFirst
   */
  export type TransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findFirstOrThrow
   */
  export type TransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findMany
   */
  export type TransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions create
   */
  export type TransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Transactions.
     */
    data: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
  }

  /**
   * Transactions createMany
   */
  export type TransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transactions createManyAndReturn
   */
  export type TransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions update
   */
  export type TransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Transactions.
     */
    data: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
    /**
     * Choose, which Transactions to update.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions updateMany
   */
  export type TransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
  }

  /**
   * Transactions upsert
   */
  export type TransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Transactions to update in case it exists.
     */
    where: TransactionsWhereUniqueInput
    /**
     * In case the Transactions found by the `where` argument doesn't exist, create a new Transactions with this data.
     */
    create: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
    /**
     * In case the Transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
  }

  /**
   * Transactions delete
   */
  export type TransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter which Transactions to delete.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions deleteMany
   */
  export type TransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionsWhereInput
  }

  /**
   * Transactions.User
   */
  export type Transactions$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Transactions.Entity
   */
  export type Transactions$EntityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    where?: EntityWhereInput
  }

  /**
   * Transactions.Waqf
   */
  export type Transactions$WaqfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waqf
     */
    select?: WaqfSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaqfInclude<ExtArgs> | null
    where?: WaqfWhereInput
  }

  /**
   * Transactions.Landfills
   */
  export type Transactions$LandfillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landfills
     */
    select?: LandfillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandfillsInclude<ExtArgs> | null
    where?: LandfillsWhereInput
  }

  /**
   * Transactions.Screener
   */
  export type Transactions$ScreenerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screener
     */
    select?: ScreenerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerInclude<ExtArgs> | null
    where?: ScreenerWhereInput
  }

  /**
   * Transactions.Transformer
   */
  export type Transactions$TransformerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformer
     */
    select?: TransformerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformerInclude<ExtArgs> | null
    where?: TransformerWhereInput
  }

  /**
   * Transactions without action
   */
  export type TransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
  }


  /**
   * Model History
   */

  export type AggregateHistory = {
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  export type HistoryAvgAggregateOutputType = {
    id: number | null
    UserID: number | null
    EntityID: number | null
    totalTransferred: number | null
    ScreenerID: number | null
    TransformerID: number | null
  }

  export type HistorySumAggregateOutputType = {
    id: number | null
    UserID: number | null
    EntityID: number | null
    totalTransferred: number | null
    ScreenerID: number | null
    TransformerID: number | null
  }

  export type HistoryMinAggregateOutputType = {
    id: number | null
    historyDate: Date | null
    historyDescription: string | null
    UserID: number | null
    EntityID: number | null
    WaqfName: string | null
    totalTransferred: number | null
    LandfillName: string | null
    ScreenerID: number | null
    TransformerID: number | null
  }

  export type HistoryMaxAggregateOutputType = {
    id: number | null
    historyDate: Date | null
    historyDescription: string | null
    UserID: number | null
    EntityID: number | null
    WaqfName: string | null
    totalTransferred: number | null
    LandfillName: string | null
    ScreenerID: number | null
    TransformerID: number | null
  }

  export type HistoryCountAggregateOutputType = {
    id: number
    historyDate: number
    historyDescription: number
    UserID: number
    EntityID: number
    WaqfName: number
    totalTransferred: number
    LandfillName: number
    ScreenerID: number
    TransformerID: number
    _all: number
  }


  export type HistoryAvgAggregateInputType = {
    id?: true
    UserID?: true
    EntityID?: true
    totalTransferred?: true
    ScreenerID?: true
    TransformerID?: true
  }

  export type HistorySumAggregateInputType = {
    id?: true
    UserID?: true
    EntityID?: true
    totalTransferred?: true
    ScreenerID?: true
    TransformerID?: true
  }

  export type HistoryMinAggregateInputType = {
    id?: true
    historyDate?: true
    historyDescription?: true
    UserID?: true
    EntityID?: true
    WaqfName?: true
    totalTransferred?: true
    LandfillName?: true
    ScreenerID?: true
    TransformerID?: true
  }

  export type HistoryMaxAggregateInputType = {
    id?: true
    historyDate?: true
    historyDescription?: true
    UserID?: true
    EntityID?: true
    WaqfName?: true
    totalTransferred?: true
    LandfillName?: true
    ScreenerID?: true
    TransformerID?: true
  }

  export type HistoryCountAggregateInputType = {
    id?: true
    historyDate?: true
    historyDescription?: true
    UserID?: true
    EntityID?: true
    WaqfName?: true
    totalTransferred?: true
    LandfillName?: true
    ScreenerID?: true
    TransformerID?: true
    _all?: true
  }

  export type HistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which History to aggregate.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Histories
    **/
    _count?: true | HistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryMaxAggregateInputType
  }

  export type GetHistoryAggregateType<T extends HistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistory[P]>
      : GetScalarType<T[P], AggregateHistory[P]>
  }




  export type HistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithAggregationInput | HistoryOrderByWithAggregationInput[]
    by: HistoryScalarFieldEnum[] | HistoryScalarFieldEnum
    having?: HistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryCountAggregateInputType | true
    _avg?: HistoryAvgAggregateInputType
    _sum?: HistorySumAggregateInputType
    _min?: HistoryMinAggregateInputType
    _max?: HistoryMaxAggregateInputType
  }

  export type HistoryGroupByOutputType = {
    id: number
    historyDate: Date
    historyDescription: string | null
    UserID: number | null
    EntityID: number | null
    WaqfName: string
    totalTransferred: number
    LandfillName: string
    ScreenerID: number | null
    TransformerID: number | null
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  type GetHistoryGroupByPayload<T extends HistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryGroupByOutputType[P]>
        }
      >
    >


  export type HistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    historyDate?: boolean
    historyDescription?: boolean
    UserID?: boolean
    EntityID?: boolean
    WaqfName?: boolean
    totalTransferred?: boolean
    LandfillName?: boolean
    ScreenerID?: boolean
    TransformerID?: boolean
    User?: boolean | History$UserArgs<ExtArgs>
    Entity?: boolean | History$EntityArgs<ExtArgs>
    Waqf?: boolean | WaqfDefaultArgs<ExtArgs>
    Landfills?: boolean | LandfillsDefaultArgs<ExtArgs>
    Screener?: boolean | History$ScreenerArgs<ExtArgs>
    Transformer?: boolean | History$TransformerArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    historyDate?: boolean
    historyDescription?: boolean
    UserID?: boolean
    EntityID?: boolean
    WaqfName?: boolean
    totalTransferred?: boolean
    LandfillName?: boolean
    ScreenerID?: boolean
    TransformerID?: boolean
    User?: boolean | History$UserArgs<ExtArgs>
    Entity?: boolean | History$EntityArgs<ExtArgs>
    Waqf?: boolean | WaqfDefaultArgs<ExtArgs>
    Landfills?: boolean | LandfillsDefaultArgs<ExtArgs>
    Screener?: boolean | History$ScreenerArgs<ExtArgs>
    Transformer?: boolean | History$TransformerArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectScalar = {
    id?: boolean
    historyDate?: boolean
    historyDescription?: boolean
    UserID?: boolean
    EntityID?: boolean
    WaqfName?: boolean
    totalTransferred?: boolean
    LandfillName?: boolean
    ScreenerID?: boolean
    TransformerID?: boolean
  }

  export type HistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | History$UserArgs<ExtArgs>
    Entity?: boolean | History$EntityArgs<ExtArgs>
    Waqf?: boolean | WaqfDefaultArgs<ExtArgs>
    Landfills?: boolean | LandfillsDefaultArgs<ExtArgs>
    Screener?: boolean | History$ScreenerArgs<ExtArgs>
    Transformer?: boolean | History$TransformerArgs<ExtArgs>
  }
  export type HistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | History$UserArgs<ExtArgs>
    Entity?: boolean | History$EntityArgs<ExtArgs>
    Waqf?: boolean | WaqfDefaultArgs<ExtArgs>
    Landfills?: boolean | LandfillsDefaultArgs<ExtArgs>
    Screener?: boolean | History$ScreenerArgs<ExtArgs>
    Transformer?: boolean | History$TransformerArgs<ExtArgs>
  }

  export type $HistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "History"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      Entity: Prisma.$EntityPayload<ExtArgs> | null
      Waqf: Prisma.$WaqfPayload<ExtArgs>
      Landfills: Prisma.$LandfillsPayload<ExtArgs>
      Screener: Prisma.$ScreenerPayload<ExtArgs> | null
      Transformer: Prisma.$TransformerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      historyDate: Date
      historyDescription: string | null
      UserID: number | null
      EntityID: number | null
      WaqfName: string
      totalTransferred: number
      LandfillName: string
      ScreenerID: number | null
      TransformerID: number | null
    }, ExtArgs["result"]["history"]>
    composites: {}
  }

  type HistoryGetPayload<S extends boolean | null | undefined | HistoryDefaultArgs> = $Result.GetResult<Prisma.$HistoryPayload, S>

  type HistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HistoryCountAggregateInputType | true
    }

  export interface HistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['History'], meta: { name: 'History' } }
    /**
     * Find zero or one History that matches the filter.
     * @param {HistoryFindUniqueArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryFindUniqueArgs>(args: SelectSubset<T, HistoryFindUniqueArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one History that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HistoryFindUniqueOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first History that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryFindFirstArgs>(args?: SelectSubset<T, HistoryFindFirstArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first History that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Histories
     * const histories = await prisma.history.findMany()
     * 
     * // Get first 10 Histories
     * const histories = await prisma.history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyWithIdOnly = await prisma.history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoryFindManyArgs>(args?: SelectSubset<T, HistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a History.
     * @param {HistoryCreateArgs} args - Arguments to create a History.
     * @example
     * // Create one History
     * const History = await prisma.history.create({
     *   data: {
     *     // ... data to create a History
     *   }
     * })
     * 
     */
    create<T extends HistoryCreateArgs>(args: SelectSubset<T, HistoryCreateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Histories.
     * @param {HistoryCreateManyArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryCreateManyArgs>(args?: SelectSubset<T, HistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Histories and returns the data saved in the database.
     * @param {HistoryCreateManyAndReturnArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Histories and only return the `id`
     * const historyWithIdOnly = await prisma.history.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a History.
     * @param {HistoryDeleteArgs} args - Arguments to delete one History.
     * @example
     * // Delete one History
     * const History = await prisma.history.delete({
     *   where: {
     *     // ... filter to delete one History
     *   }
     * })
     * 
     */
    delete<T extends HistoryDeleteArgs>(args: SelectSubset<T, HistoryDeleteArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one History.
     * @param {HistoryUpdateArgs} args - Arguments to update one History.
     * @example
     * // Update one History
     * const history = await prisma.history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryUpdateArgs>(args: SelectSubset<T, HistoryUpdateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Histories.
     * @param {HistoryDeleteManyArgs} args - Arguments to filter Histories to delete.
     * @example
     * // Delete a few Histories
     * const { count } = await prisma.history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryDeleteManyArgs>(args?: SelectSubset<T, HistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryUpdateManyArgs>(args: SelectSubset<T, HistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one History.
     * @param {HistoryUpsertArgs} args - Arguments to update or create a History.
     * @example
     * // Update or create a History
     * const history = await prisma.history.upsert({
     *   create: {
     *     // ... data to create a History
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the History we want to update
     *   }
     * })
     */
    upsert<T extends HistoryUpsertArgs>(args: SelectSubset<T, HistoryUpsertArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryCountArgs} args - Arguments to filter Histories to count.
     * @example
     * // Count the number of Histories
     * const count = await prisma.history.count({
     *   where: {
     *     // ... the filter for the Histories we want to count
     *   }
     * })
    **/
    count<T extends HistoryCountArgs>(
      args?: Subset<T, HistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoryAggregateArgs>(args: Subset<T, HistoryAggregateArgs>): Prisma.PrismaPromise<GetHistoryAggregateType<T>>

    /**
     * Group by History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryGroupByArgs['orderBy'] }
        : { orderBy?: HistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the History model
   */
  readonly fields: HistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for History.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends History$UserArgs<ExtArgs> = {}>(args?: Subset<T, History$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Entity<T extends History$EntityArgs<ExtArgs> = {}>(args?: Subset<T, History$EntityArgs<ExtArgs>>): Prisma__EntityClient<$Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Waqf<T extends WaqfDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WaqfDefaultArgs<ExtArgs>>): Prisma__WaqfClient<$Result.GetResult<Prisma.$WaqfPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Landfills<T extends LandfillsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LandfillsDefaultArgs<ExtArgs>>): Prisma__LandfillsClient<$Result.GetResult<Prisma.$LandfillsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Screener<T extends History$ScreenerArgs<ExtArgs> = {}>(args?: Subset<T, History$ScreenerArgs<ExtArgs>>): Prisma__ScreenerClient<$Result.GetResult<Prisma.$ScreenerPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Transformer<T extends History$TransformerArgs<ExtArgs> = {}>(args?: Subset<T, History$TransformerArgs<ExtArgs>>): Prisma__TransformerClient<$Result.GetResult<Prisma.$TransformerPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the History model
   */ 
  interface HistoryFieldRefs {
    readonly id: FieldRef<"History", 'Int'>
    readonly historyDate: FieldRef<"History", 'DateTime'>
    readonly historyDescription: FieldRef<"History", 'String'>
    readonly UserID: FieldRef<"History", 'Int'>
    readonly EntityID: FieldRef<"History", 'Int'>
    readonly WaqfName: FieldRef<"History", 'String'>
    readonly totalTransferred: FieldRef<"History", 'Int'>
    readonly LandfillName: FieldRef<"History", 'String'>
    readonly ScreenerID: FieldRef<"History", 'Int'>
    readonly TransformerID: FieldRef<"History", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * History findUnique
   */
  export type HistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findUniqueOrThrow
   */
  export type HistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findFirst
   */
  export type HistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findFirstOrThrow
   */
  export type HistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findMany
   */
  export type HistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Histories to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History create
   */
  export type HistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a History.
     */
    data: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
  }

  /**
   * History createMany
   */
  export type HistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * History createManyAndReturn
   */
  export type HistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * History update
   */
  export type HistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a History.
     */
    data: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
    /**
     * Choose, which History to update.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History updateMany
   */
  export type HistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Histories.
     */
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Histories to update
     */
    where?: HistoryWhereInput
  }

  /**
   * History upsert
   */
  export type HistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the History to update in case it exists.
     */
    where: HistoryWhereUniqueInput
    /**
     * In case the History found by the `where` argument doesn't exist, create a new History with this data.
     */
    create: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
    /**
     * In case the History was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
  }

  /**
   * History delete
   */
  export type HistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter which History to delete.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History deleteMany
   */
  export type HistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Histories to delete
     */
    where?: HistoryWhereInput
  }

  /**
   * History.User
   */
  export type History$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * History.Entity
   */
  export type History$EntityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entity
     */
    select?: EntitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntityInclude<ExtArgs> | null
    where?: EntityWhereInput
  }

  /**
   * History.Screener
   */
  export type History$ScreenerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screener
     */
    select?: ScreenerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenerInclude<ExtArgs> | null
    where?: ScreenerWhereInput
  }

  /**
   * History.Transformer
   */
  export type History$TransformerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transformer
     */
    select?: TransformerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransformerInclude<ExtArgs> | null
    where?: TransformerWhereInput
  }

  /**
   * History without action
   */
  export type HistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EntityScalarFieldEnum: {
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

  export type EntityScalarFieldEnum = (typeof EntityScalarFieldEnum)[keyof typeof EntityScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    name: 'name'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const ScreenerScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber'
  };

  export type ScreenerScalarFieldEnum = (typeof ScreenerScalarFieldEnum)[keyof typeof ScreenerScalarFieldEnum]


  export const TransformerScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber'
  };

  export type TransformerScalarFieldEnum = (typeof TransformerScalarFieldEnum)[keyof typeof TransformerScalarFieldEnum]


  export const LandfillAreaScalarFieldEnum: {
    id: 'id',
    location: 'location'
  };

  export type LandfillAreaScalarFieldEnum = (typeof LandfillAreaScalarFieldEnum)[keyof typeof LandfillAreaScalarFieldEnum]


  export const LandfillsScalarFieldEnum: {
    id: 'id',
    landfillName: 'landfillName',
    landfillAreaName: 'landfillAreaName',
    landfillAddress: 'landfillAddress',
    landfillPhoneNumber: 'landfillPhoneNumber',
    imageUri: 'imageUri',
    TransformerID: 'TransformerID',
    ScreenerID: 'ScreenerID'
  };

  export type LandfillsScalarFieldEnum = (typeof LandfillsScalarFieldEnum)[keyof typeof LandfillsScalarFieldEnum]


  export const WaqfScalarFieldEnum: {
    id: 'id',
    totalRaised: 'totalRaised',
    bankNumber: 'bankNumber',
    waqfName: 'waqfName',
    waqfAddress: 'waqfAddress',
    waqfPhoneNumber: 'waqfPhoneNumber',
    imageUrl: 'imageUrl',
    description: 'description'
  };

  export type WaqfScalarFieldEnum = (typeof WaqfScalarFieldEnum)[keyof typeof WaqfScalarFieldEnum]


  export const WaqfCauseScalarFieldEnum: {
    id: 'id',
    waqfCause: 'waqfCause'
  };

  export type WaqfCauseScalarFieldEnum = (typeof WaqfCauseScalarFieldEnum)[keyof typeof WaqfCauseScalarFieldEnum]


  export const CauseOnWaqfScalarFieldEnum: {
    waqfID: 'waqfID',
    waqfCauseID: 'waqfCauseID'
  };

  export type CauseOnWaqfScalarFieldEnum = (typeof CauseOnWaqfScalarFieldEnum)[keyof typeof CauseOnWaqfScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
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

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const HistoryScalarFieldEnum: {
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

  export type HistoryScalarFieldEnum = (typeof HistoryScalarFieldEnum)[keyof typeof HistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    frontName?: StringNullableFilter<"User"> | string | null
    familyName?: StringNullableFilter<"User"> | string | null
    dateofbirth?: DateTimeNullableFilter<"User"> | Date | string | null
    icNumber?: IntNullableFilter<"User"> | number | null
    address?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    username?: StringFilter<"User"> | string
    zipCode?: IntNullableFilter<"User"> | number | null
    province?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    Transactions?: TransactionsListRelationFilter
    History?: HistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    frontName?: SortOrderInput | SortOrder
    familyName?: SortOrderInput | SortOrder
    dateofbirth?: SortOrderInput | SortOrder
    icNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    username?: SortOrder
    zipCode?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    Transactions?: TransactionsOrderByRelationAggregateInput
    History?: HistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    frontName?: StringNullableFilter<"User"> | string | null
    familyName?: StringNullableFilter<"User"> | string | null
    dateofbirth?: DateTimeNullableFilter<"User"> | Date | string | null
    icNumber?: IntNullableFilter<"User"> | number | null
    address?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    zipCode?: IntNullableFilter<"User"> | number | null
    province?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    Transactions?: TransactionsListRelationFilter
    History?: HistoryListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    frontName?: SortOrderInput | SortOrder
    familyName?: SortOrderInput | SortOrder
    dateofbirth?: SortOrderInput | SortOrder
    icNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    username?: SortOrder
    zipCode?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    frontName?: StringNullableWithAggregatesFilter<"User"> | string | null
    familyName?: StringNullableWithAggregatesFilter<"User"> | string | null
    dateofbirth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    icNumber?: IntNullableWithAggregatesFilter<"User"> | number | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringWithAggregatesFilter<"User"> | string
    zipCode?: IntNullableWithAggregatesFilter<"User"> | number | null
    province?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type EntityWhereInput = {
    AND?: EntityWhereInput | EntityWhereInput[]
    OR?: EntityWhereInput[]
    NOT?: EntityWhereInput | EntityWhereInput[]
    id?: IntFilter<"Entity"> | number
    companyUsername?: StringFilter<"Entity"> | string
    password?: StringFilter<"Entity"> | string
    picFrontName?: StringNullableFilter<"Entity"> | string | null
    picFamilyName?: StringNullableFilter<"Entity"> | string | null
    picPhoneNumber?: StringNullableFilter<"Entity"> | string | null
    dateofbirth?: DateTimeNullableFilter<"Entity"> | Date | string | null
    companyName?: StringNullableFilter<"Entity"> | string | null
    companyAddress?: StringNullableFilter<"Entity"> | string | null
    companyPhoneNumber?: StringNullableFilter<"Entity"> | string | null
    companyZipCode?: IntNullableFilter<"Entity"> | number | null
    companyEmail?: StringNullableFilter<"Entity"> | string | null
    companyRegistrationNumber?: StringNullableFilter<"Entity"> | string | null
    History?: HistoryListRelationFilter
    Transactions?: TransactionsListRelationFilter
  }

  export type EntityOrderByWithRelationInput = {
    id?: SortOrder
    companyUsername?: SortOrder
    password?: SortOrder
    picFrontName?: SortOrderInput | SortOrder
    picFamilyName?: SortOrderInput | SortOrder
    picPhoneNumber?: SortOrderInput | SortOrder
    dateofbirth?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    companyAddress?: SortOrderInput | SortOrder
    companyPhoneNumber?: SortOrderInput | SortOrder
    companyZipCode?: SortOrderInput | SortOrder
    companyEmail?: SortOrderInput | SortOrder
    companyRegistrationNumber?: SortOrderInput | SortOrder
    History?: HistoryOrderByRelationAggregateInput
    Transactions?: TransactionsOrderByRelationAggregateInput
  }

  export type EntityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    companyUsername?: string
    AND?: EntityWhereInput | EntityWhereInput[]
    OR?: EntityWhereInput[]
    NOT?: EntityWhereInput | EntityWhereInput[]
    password?: StringFilter<"Entity"> | string
    picFrontName?: StringNullableFilter<"Entity"> | string | null
    picFamilyName?: StringNullableFilter<"Entity"> | string | null
    picPhoneNumber?: StringNullableFilter<"Entity"> | string | null
    dateofbirth?: DateTimeNullableFilter<"Entity"> | Date | string | null
    companyName?: StringNullableFilter<"Entity"> | string | null
    companyAddress?: StringNullableFilter<"Entity"> | string | null
    companyPhoneNumber?: StringNullableFilter<"Entity"> | string | null
    companyZipCode?: IntNullableFilter<"Entity"> | number | null
    companyEmail?: StringNullableFilter<"Entity"> | string | null
    companyRegistrationNumber?: StringNullableFilter<"Entity"> | string | null
    History?: HistoryListRelationFilter
    Transactions?: TransactionsListRelationFilter
  }, "id" | "companyUsername">

  export type EntityOrderByWithAggregationInput = {
    id?: SortOrder
    companyUsername?: SortOrder
    password?: SortOrder
    picFrontName?: SortOrderInput | SortOrder
    picFamilyName?: SortOrderInput | SortOrder
    picPhoneNumber?: SortOrderInput | SortOrder
    dateofbirth?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    companyAddress?: SortOrderInput | SortOrder
    companyPhoneNumber?: SortOrderInput | SortOrder
    companyZipCode?: SortOrderInput | SortOrder
    companyEmail?: SortOrderInput | SortOrder
    companyRegistrationNumber?: SortOrderInput | SortOrder
    _count?: EntityCountOrderByAggregateInput
    _avg?: EntityAvgOrderByAggregateInput
    _max?: EntityMaxOrderByAggregateInput
    _min?: EntityMinOrderByAggregateInput
    _sum?: EntitySumOrderByAggregateInput
  }

  export type EntityScalarWhereWithAggregatesInput = {
    AND?: EntityScalarWhereWithAggregatesInput | EntityScalarWhereWithAggregatesInput[]
    OR?: EntityScalarWhereWithAggregatesInput[]
    NOT?: EntityScalarWhereWithAggregatesInput | EntityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Entity"> | number
    companyUsername?: StringWithAggregatesFilter<"Entity"> | string
    password?: StringWithAggregatesFilter<"Entity"> | string
    picFrontName?: StringNullableWithAggregatesFilter<"Entity"> | string | null
    picFamilyName?: StringNullableWithAggregatesFilter<"Entity"> | string | null
    picPhoneNumber?: StringNullableWithAggregatesFilter<"Entity"> | string | null
    dateofbirth?: DateTimeNullableWithAggregatesFilter<"Entity"> | Date | string | null
    companyName?: StringNullableWithAggregatesFilter<"Entity"> | string | null
    companyAddress?: StringNullableWithAggregatesFilter<"Entity"> | string | null
    companyPhoneNumber?: StringNullableWithAggregatesFilter<"Entity"> | string | null
    companyZipCode?: IntNullableWithAggregatesFilter<"Entity"> | number | null
    companyEmail?: StringNullableWithAggregatesFilter<"Entity"> | string | null
    companyRegistrationNumber?: StringNullableWithAggregatesFilter<"Entity"> | string | null
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    username?: StringNullableFilter<"Admin"> | string | null
    password?: StringNullableFilter<"Admin"> | string | null
    name?: StringFilter<"Admin"> | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringNullableFilter<"Admin"> | string | null
    name?: StringFilter<"Admin"> | string
  }, "id" | "username">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    username?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    password?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    name?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type ScreenerWhereInput = {
    AND?: ScreenerWhereInput | ScreenerWhereInput[]
    OR?: ScreenerWhereInput[]
    NOT?: ScreenerWhereInput | ScreenerWhereInput[]
    id?: IntFilter<"Screener"> | number
    username?: StringNullableFilter<"Screener"> | string | null
    password?: StringNullableFilter<"Screener"> | string | null
    name?: StringFilter<"Screener"> | string
    email?: StringFilter<"Screener"> | string
    phoneNumber?: StringFilter<"Screener"> | string
    Landfills?: LandfillsListRelationFilter
    Transactions?: TransactionsListRelationFilter
    History?: HistoryListRelationFilter
  }

  export type ScreenerOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    Landfills?: LandfillsOrderByRelationAggregateInput
    Transactions?: TransactionsOrderByRelationAggregateInput
    History?: HistoryOrderByRelationAggregateInput
  }

  export type ScreenerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: ScreenerWhereInput | ScreenerWhereInput[]
    OR?: ScreenerWhereInput[]
    NOT?: ScreenerWhereInput | ScreenerWhereInput[]
    password?: StringNullableFilter<"Screener"> | string | null
    name?: StringFilter<"Screener"> | string
    email?: StringFilter<"Screener"> | string
    phoneNumber?: StringFilter<"Screener"> | string
    Landfills?: LandfillsListRelationFilter
    Transactions?: TransactionsListRelationFilter
    History?: HistoryListRelationFilter
  }, "id" | "username">

  export type ScreenerOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    _count?: ScreenerCountOrderByAggregateInput
    _avg?: ScreenerAvgOrderByAggregateInput
    _max?: ScreenerMaxOrderByAggregateInput
    _min?: ScreenerMinOrderByAggregateInput
    _sum?: ScreenerSumOrderByAggregateInput
  }

  export type ScreenerScalarWhereWithAggregatesInput = {
    AND?: ScreenerScalarWhereWithAggregatesInput | ScreenerScalarWhereWithAggregatesInput[]
    OR?: ScreenerScalarWhereWithAggregatesInput[]
    NOT?: ScreenerScalarWhereWithAggregatesInput | ScreenerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Screener"> | number
    username?: StringNullableWithAggregatesFilter<"Screener"> | string | null
    password?: StringNullableWithAggregatesFilter<"Screener"> | string | null
    name?: StringWithAggregatesFilter<"Screener"> | string
    email?: StringWithAggregatesFilter<"Screener"> | string
    phoneNumber?: StringWithAggregatesFilter<"Screener"> | string
  }

  export type TransformerWhereInput = {
    AND?: TransformerWhereInput | TransformerWhereInput[]
    OR?: TransformerWhereInput[]
    NOT?: TransformerWhereInput | TransformerWhereInput[]
    id?: IntFilter<"Transformer"> | number
    username?: StringNullableFilter<"Transformer"> | string | null
    password?: StringNullableFilter<"Transformer"> | string | null
    name?: StringFilter<"Transformer"> | string
    email?: StringFilter<"Transformer"> | string
    phoneNumber?: StringFilter<"Transformer"> | string
    Landfills?: LandfillsListRelationFilter
    Transactions?: TransactionsListRelationFilter
    History?: HistoryListRelationFilter
  }

  export type TransformerOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    Landfills?: LandfillsOrderByRelationAggregateInput
    Transactions?: TransactionsOrderByRelationAggregateInput
    History?: HistoryOrderByRelationAggregateInput
  }

  export type TransformerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: TransformerWhereInput | TransformerWhereInput[]
    OR?: TransformerWhereInput[]
    NOT?: TransformerWhereInput | TransformerWhereInput[]
    password?: StringNullableFilter<"Transformer"> | string | null
    name?: StringFilter<"Transformer"> | string
    email?: StringFilter<"Transformer"> | string
    phoneNumber?: StringFilter<"Transformer"> | string
    Landfills?: LandfillsListRelationFilter
    Transactions?: TransactionsListRelationFilter
    History?: HistoryListRelationFilter
  }, "id" | "username">

  export type TransformerOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    _count?: TransformerCountOrderByAggregateInput
    _avg?: TransformerAvgOrderByAggregateInput
    _max?: TransformerMaxOrderByAggregateInput
    _min?: TransformerMinOrderByAggregateInput
    _sum?: TransformerSumOrderByAggregateInput
  }

  export type TransformerScalarWhereWithAggregatesInput = {
    AND?: TransformerScalarWhereWithAggregatesInput | TransformerScalarWhereWithAggregatesInput[]
    OR?: TransformerScalarWhereWithAggregatesInput[]
    NOT?: TransformerScalarWhereWithAggregatesInput | TransformerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transformer"> | number
    username?: StringNullableWithAggregatesFilter<"Transformer"> | string | null
    password?: StringNullableWithAggregatesFilter<"Transformer"> | string | null
    name?: StringWithAggregatesFilter<"Transformer"> | string
    email?: StringWithAggregatesFilter<"Transformer"> | string
    phoneNumber?: StringWithAggregatesFilter<"Transformer"> | string
  }

  export type landfillAreaWhereInput = {
    AND?: landfillAreaWhereInput | landfillAreaWhereInput[]
    OR?: landfillAreaWhereInput[]
    NOT?: landfillAreaWhereInput | landfillAreaWhereInput[]
    id?: IntFilter<"landfillArea"> | number
    location?: StringFilter<"landfillArea"> | string
    landfills?: LandfillsListRelationFilter
  }

  export type landfillAreaOrderByWithRelationInput = {
    id?: SortOrder
    location?: SortOrder
    landfills?: LandfillsOrderByRelationAggregateInput
  }

  export type landfillAreaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    location?: string
    AND?: landfillAreaWhereInput | landfillAreaWhereInput[]
    OR?: landfillAreaWhereInput[]
    NOT?: landfillAreaWhereInput | landfillAreaWhereInput[]
    landfills?: LandfillsListRelationFilter
  }, "id" | "location">

  export type landfillAreaOrderByWithAggregationInput = {
    id?: SortOrder
    location?: SortOrder
    _count?: landfillAreaCountOrderByAggregateInput
    _avg?: landfillAreaAvgOrderByAggregateInput
    _max?: landfillAreaMaxOrderByAggregateInput
    _min?: landfillAreaMinOrderByAggregateInput
    _sum?: landfillAreaSumOrderByAggregateInput
  }

  export type landfillAreaScalarWhereWithAggregatesInput = {
    AND?: landfillAreaScalarWhereWithAggregatesInput | landfillAreaScalarWhereWithAggregatesInput[]
    OR?: landfillAreaScalarWhereWithAggregatesInput[]
    NOT?: landfillAreaScalarWhereWithAggregatesInput | landfillAreaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"landfillArea"> | number
    location?: StringWithAggregatesFilter<"landfillArea"> | string
  }

  export type LandfillsWhereInput = {
    AND?: LandfillsWhereInput | LandfillsWhereInput[]
    OR?: LandfillsWhereInput[]
    NOT?: LandfillsWhereInput | LandfillsWhereInput[]
    id?: IntFilter<"Landfills"> | number
    landfillName?: StringFilter<"Landfills"> | string
    landfillAreaName?: StringFilter<"Landfills"> | string
    landfillAddress?: StringNullableFilter<"Landfills"> | string | null
    landfillPhoneNumber?: StringNullableFilter<"Landfills"> | string | null
    imageUri?: StringNullableFilter<"Landfills"> | string | null
    TransformerID?: IntNullableFilter<"Landfills"> | number | null
    ScreenerID?: IntNullableFilter<"Landfills"> | number | null
    landfillArea?: XOR<LandfillAreaRelationFilter, landfillAreaWhereInput>
    Transformer?: XOR<TransformerNullableRelationFilter, TransformerWhereInput> | null
    Screener?: XOR<ScreenerNullableRelationFilter, ScreenerWhereInput> | null
    Transactions?: TransactionsListRelationFilter
    History?: HistoryListRelationFilter
  }

  export type LandfillsOrderByWithRelationInput = {
    id?: SortOrder
    landfillName?: SortOrder
    landfillAreaName?: SortOrder
    landfillAddress?: SortOrderInput | SortOrder
    landfillPhoneNumber?: SortOrderInput | SortOrder
    imageUri?: SortOrderInput | SortOrder
    TransformerID?: SortOrderInput | SortOrder
    ScreenerID?: SortOrderInput | SortOrder
    landfillArea?: landfillAreaOrderByWithRelationInput
    Transformer?: TransformerOrderByWithRelationInput
    Screener?: ScreenerOrderByWithRelationInput
    Transactions?: TransactionsOrderByRelationAggregateInput
    History?: HistoryOrderByRelationAggregateInput
  }

  export type LandfillsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    landfillName?: string
    AND?: LandfillsWhereInput | LandfillsWhereInput[]
    OR?: LandfillsWhereInput[]
    NOT?: LandfillsWhereInput | LandfillsWhereInput[]
    landfillAreaName?: StringFilter<"Landfills"> | string
    landfillAddress?: StringNullableFilter<"Landfills"> | string | null
    landfillPhoneNumber?: StringNullableFilter<"Landfills"> | string | null
    imageUri?: StringNullableFilter<"Landfills"> | string | null
    TransformerID?: IntNullableFilter<"Landfills"> | number | null
    ScreenerID?: IntNullableFilter<"Landfills"> | number | null
    landfillArea?: XOR<LandfillAreaRelationFilter, landfillAreaWhereInput>
    Transformer?: XOR<TransformerNullableRelationFilter, TransformerWhereInput> | null
    Screener?: XOR<ScreenerNullableRelationFilter, ScreenerWhereInput> | null
    Transactions?: TransactionsListRelationFilter
    History?: HistoryListRelationFilter
  }, "id" | "landfillName">

  export type LandfillsOrderByWithAggregationInput = {
    id?: SortOrder
    landfillName?: SortOrder
    landfillAreaName?: SortOrder
    landfillAddress?: SortOrderInput | SortOrder
    landfillPhoneNumber?: SortOrderInput | SortOrder
    imageUri?: SortOrderInput | SortOrder
    TransformerID?: SortOrderInput | SortOrder
    ScreenerID?: SortOrderInput | SortOrder
    _count?: LandfillsCountOrderByAggregateInput
    _avg?: LandfillsAvgOrderByAggregateInput
    _max?: LandfillsMaxOrderByAggregateInput
    _min?: LandfillsMinOrderByAggregateInput
    _sum?: LandfillsSumOrderByAggregateInput
  }

  export type LandfillsScalarWhereWithAggregatesInput = {
    AND?: LandfillsScalarWhereWithAggregatesInput | LandfillsScalarWhereWithAggregatesInput[]
    OR?: LandfillsScalarWhereWithAggregatesInput[]
    NOT?: LandfillsScalarWhereWithAggregatesInput | LandfillsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Landfills"> | number
    landfillName?: StringWithAggregatesFilter<"Landfills"> | string
    landfillAreaName?: StringWithAggregatesFilter<"Landfills"> | string
    landfillAddress?: StringNullableWithAggregatesFilter<"Landfills"> | string | null
    landfillPhoneNumber?: StringNullableWithAggregatesFilter<"Landfills"> | string | null
    imageUri?: StringNullableWithAggregatesFilter<"Landfills"> | string | null
    TransformerID?: IntNullableWithAggregatesFilter<"Landfills"> | number | null
    ScreenerID?: IntNullableWithAggregatesFilter<"Landfills"> | number | null
  }

  export type WaqfWhereInput = {
    AND?: WaqfWhereInput | WaqfWhereInput[]
    OR?: WaqfWhereInput[]
    NOT?: WaqfWhereInput | WaqfWhereInput[]
    id?: IntFilter<"Waqf"> | number
    totalRaised?: IntNullableFilter<"Waqf"> | number | null
    bankNumber?: IntNullableFilter<"Waqf"> | number | null
    waqfName?: StringFilter<"Waqf"> | string
    waqfAddress?: StringNullableFilter<"Waqf"> | string | null
    waqfPhoneNumber?: StringNullableFilter<"Waqf"> | string | null
    imageUrl?: StringNullableFilter<"Waqf"> | string | null
    description?: StringNullableFilter<"Waqf"> | string | null
    CauseOnWaqf?: CauseOnWaqfListRelationFilter
    History?: HistoryListRelationFilter
    Transactions?: TransactionsListRelationFilter
  }

  export type WaqfOrderByWithRelationInput = {
    id?: SortOrder
    totalRaised?: SortOrderInput | SortOrder
    bankNumber?: SortOrderInput | SortOrder
    waqfName?: SortOrder
    waqfAddress?: SortOrderInput | SortOrder
    waqfPhoneNumber?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    CauseOnWaqf?: CauseOnWaqfOrderByRelationAggregateInput
    History?: HistoryOrderByRelationAggregateInput
    Transactions?: TransactionsOrderByRelationAggregateInput
  }

  export type WaqfWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    bankNumber?: number
    waqfName?: string
    AND?: WaqfWhereInput | WaqfWhereInput[]
    OR?: WaqfWhereInput[]
    NOT?: WaqfWhereInput | WaqfWhereInput[]
    totalRaised?: IntNullableFilter<"Waqf"> | number | null
    waqfAddress?: StringNullableFilter<"Waqf"> | string | null
    waqfPhoneNumber?: StringNullableFilter<"Waqf"> | string | null
    imageUrl?: StringNullableFilter<"Waqf"> | string | null
    description?: StringNullableFilter<"Waqf"> | string | null
    CauseOnWaqf?: CauseOnWaqfListRelationFilter
    History?: HistoryListRelationFilter
    Transactions?: TransactionsListRelationFilter
  }, "id" | "bankNumber" | "waqfName">

  export type WaqfOrderByWithAggregationInput = {
    id?: SortOrder
    totalRaised?: SortOrderInput | SortOrder
    bankNumber?: SortOrderInput | SortOrder
    waqfName?: SortOrder
    waqfAddress?: SortOrderInput | SortOrder
    waqfPhoneNumber?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: WaqfCountOrderByAggregateInput
    _avg?: WaqfAvgOrderByAggregateInput
    _max?: WaqfMaxOrderByAggregateInput
    _min?: WaqfMinOrderByAggregateInput
    _sum?: WaqfSumOrderByAggregateInput
  }

  export type WaqfScalarWhereWithAggregatesInput = {
    AND?: WaqfScalarWhereWithAggregatesInput | WaqfScalarWhereWithAggregatesInput[]
    OR?: WaqfScalarWhereWithAggregatesInput[]
    NOT?: WaqfScalarWhereWithAggregatesInput | WaqfScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Waqf"> | number
    totalRaised?: IntNullableWithAggregatesFilter<"Waqf"> | number | null
    bankNumber?: IntNullableWithAggregatesFilter<"Waqf"> | number | null
    waqfName?: StringWithAggregatesFilter<"Waqf"> | string
    waqfAddress?: StringNullableWithAggregatesFilter<"Waqf"> | string | null
    waqfPhoneNumber?: StringNullableWithAggregatesFilter<"Waqf"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Waqf"> | string | null
    description?: StringNullableWithAggregatesFilter<"Waqf"> | string | null
  }

  export type WaqfCauseWhereInput = {
    AND?: WaqfCauseWhereInput | WaqfCauseWhereInput[]
    OR?: WaqfCauseWhereInput[]
    NOT?: WaqfCauseWhereInput | WaqfCauseWhereInput[]
    id?: IntFilter<"WaqfCause"> | number
    waqfCause?: StringFilter<"WaqfCause"> | string
    CauseOnWaqf?: CauseOnWaqfListRelationFilter
  }

  export type WaqfCauseOrderByWithRelationInput = {
    id?: SortOrder
    waqfCause?: SortOrder
    CauseOnWaqf?: CauseOnWaqfOrderByRelationAggregateInput
  }

  export type WaqfCauseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    waqfCause?: string
    AND?: WaqfCauseWhereInput | WaqfCauseWhereInput[]
    OR?: WaqfCauseWhereInput[]
    NOT?: WaqfCauseWhereInput | WaqfCauseWhereInput[]
    CauseOnWaqf?: CauseOnWaqfListRelationFilter
  }, "id" | "waqfCause">

  export type WaqfCauseOrderByWithAggregationInput = {
    id?: SortOrder
    waqfCause?: SortOrder
    _count?: WaqfCauseCountOrderByAggregateInput
    _avg?: WaqfCauseAvgOrderByAggregateInput
    _max?: WaqfCauseMaxOrderByAggregateInput
    _min?: WaqfCauseMinOrderByAggregateInput
    _sum?: WaqfCauseSumOrderByAggregateInput
  }

  export type WaqfCauseScalarWhereWithAggregatesInput = {
    AND?: WaqfCauseScalarWhereWithAggregatesInput | WaqfCauseScalarWhereWithAggregatesInput[]
    OR?: WaqfCauseScalarWhereWithAggregatesInput[]
    NOT?: WaqfCauseScalarWhereWithAggregatesInput | WaqfCauseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WaqfCause"> | number
    waqfCause?: StringWithAggregatesFilter<"WaqfCause"> | string
  }

  export type CauseOnWaqfWhereInput = {
    AND?: CauseOnWaqfWhereInput | CauseOnWaqfWhereInput[]
    OR?: CauseOnWaqfWhereInput[]
    NOT?: CauseOnWaqfWhereInput | CauseOnWaqfWhereInput[]
    waqfID?: IntFilter<"CauseOnWaqf"> | number
    waqfCauseID?: IntFilter<"CauseOnWaqf"> | number
    waqfCause?: XOR<WaqfCauseRelationFilter, WaqfCauseWhereInput>
    Waqf?: XOR<WaqfRelationFilter, WaqfWhereInput>
  }

  export type CauseOnWaqfOrderByWithRelationInput = {
    waqfID?: SortOrder
    waqfCauseID?: SortOrder
    waqfCause?: WaqfCauseOrderByWithRelationInput
    Waqf?: WaqfOrderByWithRelationInput
  }

  export type CauseOnWaqfWhereUniqueInput = Prisma.AtLeast<{
    waqfID_waqfCauseID?: CauseOnWaqfWaqfIDWaqfCauseIDCompoundUniqueInput
    AND?: CauseOnWaqfWhereInput | CauseOnWaqfWhereInput[]
    OR?: CauseOnWaqfWhereInput[]
    NOT?: CauseOnWaqfWhereInput | CauseOnWaqfWhereInput[]
    waqfID?: IntFilter<"CauseOnWaqf"> | number
    waqfCauseID?: IntFilter<"CauseOnWaqf"> | number
    waqfCause?: XOR<WaqfCauseRelationFilter, WaqfCauseWhereInput>
    Waqf?: XOR<WaqfRelationFilter, WaqfWhereInput>
  }, "waqfID_waqfCauseID">

  export type CauseOnWaqfOrderByWithAggregationInput = {
    waqfID?: SortOrder
    waqfCauseID?: SortOrder
    _count?: CauseOnWaqfCountOrderByAggregateInput
    _avg?: CauseOnWaqfAvgOrderByAggregateInput
    _max?: CauseOnWaqfMaxOrderByAggregateInput
    _min?: CauseOnWaqfMinOrderByAggregateInput
    _sum?: CauseOnWaqfSumOrderByAggregateInput
  }

  export type CauseOnWaqfScalarWhereWithAggregatesInput = {
    AND?: CauseOnWaqfScalarWhereWithAggregatesInput | CauseOnWaqfScalarWhereWithAggregatesInput[]
    OR?: CauseOnWaqfScalarWhereWithAggregatesInput[]
    NOT?: CauseOnWaqfScalarWhereWithAggregatesInput | CauseOnWaqfScalarWhereWithAggregatesInput[]
    waqfID?: IntWithAggregatesFilter<"CauseOnWaqf"> | number
    waqfCauseID?: IntWithAggregatesFilter<"CauseOnWaqf"> | number
  }

  export type TransactionsWhereInput = {
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    id?: IntFilter<"Transactions"> | number
    transactionDate?: DateTimeFilter<"Transactions"> | Date | string
    transactionAmount?: FloatFilter<"Transactions"> | number
    transactionType?: StringFilter<"Transactions"> | string
    transactionStatus?: StringFilter<"Transactions"> | string
    transactionDescription?: StringNullableFilter<"Transactions"> | string | null
    transactionDeposited?: BoolFilter<"Transactions"> | boolean
    transactionScreened?: BoolFilter<"Transactions"> | boolean
    totalScreened?: IntFilter<"Transactions"> | number
    transactionTransformed?: BoolFilter<"Transactions"> | boolean
    transactionTransfered?: BoolFilter<"Transactions"> | boolean
    UserID?: IntNullableFilter<"Transactions"> | number | null
    EntityID?: IntNullableFilter<"Transactions"> | number | null
    WaqfID?: IntNullableFilter<"Transactions"> | number | null
    LandfillsID?: IntNullableFilter<"Transactions"> | number | null
    ScreenerID?: IntNullableFilter<"Transactions"> | number | null
    TransformerID?: IntNullableFilter<"Transactions"> | number | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Entity?: XOR<EntityNullableRelationFilter, EntityWhereInput> | null
    Waqf?: XOR<WaqfNullableRelationFilter, WaqfWhereInput> | null
    Landfills?: XOR<LandfillsNullableRelationFilter, LandfillsWhereInput> | null
    Screener?: XOR<ScreenerNullableRelationFilter, ScreenerWhereInput> | null
    Transformer?: XOR<TransformerNullableRelationFilter, TransformerWhereInput> | null
  }

  export type TransactionsOrderByWithRelationInput = {
    id?: SortOrder
    transactionDate?: SortOrder
    transactionAmount?: SortOrder
    transactionType?: SortOrder
    transactionStatus?: SortOrder
    transactionDescription?: SortOrderInput | SortOrder
    transactionDeposited?: SortOrder
    transactionScreened?: SortOrder
    totalScreened?: SortOrder
    transactionTransformed?: SortOrder
    transactionTransfered?: SortOrder
    UserID?: SortOrderInput | SortOrder
    EntityID?: SortOrderInput | SortOrder
    WaqfID?: SortOrderInput | SortOrder
    LandfillsID?: SortOrderInput | SortOrder
    ScreenerID?: SortOrderInput | SortOrder
    TransformerID?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    Entity?: EntityOrderByWithRelationInput
    Waqf?: WaqfOrderByWithRelationInput
    Landfills?: LandfillsOrderByWithRelationInput
    Screener?: ScreenerOrderByWithRelationInput
    Transformer?: TransformerOrderByWithRelationInput
  }

  export type TransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    transactionDate?: DateTimeFilter<"Transactions"> | Date | string
    transactionAmount?: FloatFilter<"Transactions"> | number
    transactionType?: StringFilter<"Transactions"> | string
    transactionStatus?: StringFilter<"Transactions"> | string
    transactionDescription?: StringNullableFilter<"Transactions"> | string | null
    transactionDeposited?: BoolFilter<"Transactions"> | boolean
    transactionScreened?: BoolFilter<"Transactions"> | boolean
    totalScreened?: IntFilter<"Transactions"> | number
    transactionTransformed?: BoolFilter<"Transactions"> | boolean
    transactionTransfered?: BoolFilter<"Transactions"> | boolean
    UserID?: IntNullableFilter<"Transactions"> | number | null
    EntityID?: IntNullableFilter<"Transactions"> | number | null
    WaqfID?: IntNullableFilter<"Transactions"> | number | null
    LandfillsID?: IntNullableFilter<"Transactions"> | number | null
    ScreenerID?: IntNullableFilter<"Transactions"> | number | null
    TransformerID?: IntNullableFilter<"Transactions"> | number | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Entity?: XOR<EntityNullableRelationFilter, EntityWhereInput> | null
    Waqf?: XOR<WaqfNullableRelationFilter, WaqfWhereInput> | null
    Landfills?: XOR<LandfillsNullableRelationFilter, LandfillsWhereInput> | null
    Screener?: XOR<ScreenerNullableRelationFilter, ScreenerWhereInput> | null
    Transformer?: XOR<TransformerNullableRelationFilter, TransformerWhereInput> | null
  }, "id">

  export type TransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    transactionDate?: SortOrder
    transactionAmount?: SortOrder
    transactionType?: SortOrder
    transactionStatus?: SortOrder
    transactionDescription?: SortOrderInput | SortOrder
    transactionDeposited?: SortOrder
    transactionScreened?: SortOrder
    totalScreened?: SortOrder
    transactionTransformed?: SortOrder
    transactionTransfered?: SortOrder
    UserID?: SortOrderInput | SortOrder
    EntityID?: SortOrderInput | SortOrder
    WaqfID?: SortOrderInput | SortOrder
    LandfillsID?: SortOrderInput | SortOrder
    ScreenerID?: SortOrderInput | SortOrder
    TransformerID?: SortOrderInput | SortOrder
    _count?: TransactionsCountOrderByAggregateInput
    _avg?: TransactionsAvgOrderByAggregateInput
    _max?: TransactionsMaxOrderByAggregateInput
    _min?: TransactionsMinOrderByAggregateInput
    _sum?: TransactionsSumOrderByAggregateInput
  }

  export type TransactionsScalarWhereWithAggregatesInput = {
    AND?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    OR?: TransactionsScalarWhereWithAggregatesInput[]
    NOT?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transactions"> | number
    transactionDate?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
    transactionAmount?: FloatWithAggregatesFilter<"Transactions"> | number
    transactionType?: StringWithAggregatesFilter<"Transactions"> | string
    transactionStatus?: StringWithAggregatesFilter<"Transactions"> | string
    transactionDescription?: StringNullableWithAggregatesFilter<"Transactions"> | string | null
    transactionDeposited?: BoolWithAggregatesFilter<"Transactions"> | boolean
    transactionScreened?: BoolWithAggregatesFilter<"Transactions"> | boolean
    totalScreened?: IntWithAggregatesFilter<"Transactions"> | number
    transactionTransformed?: BoolWithAggregatesFilter<"Transactions"> | boolean
    transactionTransfered?: BoolWithAggregatesFilter<"Transactions"> | boolean
    UserID?: IntNullableWithAggregatesFilter<"Transactions"> | number | null
    EntityID?: IntNullableWithAggregatesFilter<"Transactions"> | number | null
    WaqfID?: IntNullableWithAggregatesFilter<"Transactions"> | number | null
    LandfillsID?: IntNullableWithAggregatesFilter<"Transactions"> | number | null
    ScreenerID?: IntNullableWithAggregatesFilter<"Transactions"> | number | null
    TransformerID?: IntNullableWithAggregatesFilter<"Transactions"> | number | null
  }

  export type HistoryWhereInput = {
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    id?: IntFilter<"History"> | number
    historyDate?: DateTimeFilter<"History"> | Date | string
    historyDescription?: StringNullableFilter<"History"> | string | null
    UserID?: IntNullableFilter<"History"> | number | null
    EntityID?: IntNullableFilter<"History"> | number | null
    WaqfName?: StringFilter<"History"> | string
    totalTransferred?: IntFilter<"History"> | number
    LandfillName?: StringFilter<"History"> | string
    ScreenerID?: IntNullableFilter<"History"> | number | null
    TransformerID?: IntNullableFilter<"History"> | number | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Entity?: XOR<EntityNullableRelationFilter, EntityWhereInput> | null
    Waqf?: XOR<WaqfRelationFilter, WaqfWhereInput>
    Landfills?: XOR<LandfillsRelationFilter, LandfillsWhereInput>
    Screener?: XOR<ScreenerNullableRelationFilter, ScreenerWhereInput> | null
    Transformer?: XOR<TransformerNullableRelationFilter, TransformerWhereInput> | null
  }

  export type HistoryOrderByWithRelationInput = {
    id?: SortOrder
    historyDate?: SortOrder
    historyDescription?: SortOrderInput | SortOrder
    UserID?: SortOrderInput | SortOrder
    EntityID?: SortOrderInput | SortOrder
    WaqfName?: SortOrder
    totalTransferred?: SortOrder
    LandfillName?: SortOrder
    ScreenerID?: SortOrderInput | SortOrder
    TransformerID?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    Entity?: EntityOrderByWithRelationInput
    Waqf?: WaqfOrderByWithRelationInput
    Landfills?: LandfillsOrderByWithRelationInput
    Screener?: ScreenerOrderByWithRelationInput
    Transformer?: TransformerOrderByWithRelationInput
  }

  export type HistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    historyDate?: DateTimeFilter<"History"> | Date | string
    historyDescription?: StringNullableFilter<"History"> | string | null
    UserID?: IntNullableFilter<"History"> | number | null
    EntityID?: IntNullableFilter<"History"> | number | null
    WaqfName?: StringFilter<"History"> | string
    totalTransferred?: IntFilter<"History"> | number
    LandfillName?: StringFilter<"History"> | string
    ScreenerID?: IntNullableFilter<"History"> | number | null
    TransformerID?: IntNullableFilter<"History"> | number | null
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    Entity?: XOR<EntityNullableRelationFilter, EntityWhereInput> | null
    Waqf?: XOR<WaqfRelationFilter, WaqfWhereInput>
    Landfills?: XOR<LandfillsRelationFilter, LandfillsWhereInput>
    Screener?: XOR<ScreenerNullableRelationFilter, ScreenerWhereInput> | null
    Transformer?: XOR<TransformerNullableRelationFilter, TransformerWhereInput> | null
  }, "id">

  export type HistoryOrderByWithAggregationInput = {
    id?: SortOrder
    historyDate?: SortOrder
    historyDescription?: SortOrderInput | SortOrder
    UserID?: SortOrderInput | SortOrder
    EntityID?: SortOrderInput | SortOrder
    WaqfName?: SortOrder
    totalTransferred?: SortOrder
    LandfillName?: SortOrder
    ScreenerID?: SortOrderInput | SortOrder
    TransformerID?: SortOrderInput | SortOrder
    _count?: HistoryCountOrderByAggregateInput
    _avg?: HistoryAvgOrderByAggregateInput
    _max?: HistoryMaxOrderByAggregateInput
    _min?: HistoryMinOrderByAggregateInput
    _sum?: HistorySumOrderByAggregateInput
  }

  export type HistoryScalarWhereWithAggregatesInput = {
    AND?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    OR?: HistoryScalarWhereWithAggregatesInput[]
    NOT?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"History"> | number
    historyDate?: DateTimeWithAggregatesFilter<"History"> | Date | string
    historyDescription?: StringNullableWithAggregatesFilter<"History"> | string | null
    UserID?: IntNullableWithAggregatesFilter<"History"> | number | null
    EntityID?: IntNullableWithAggregatesFilter<"History"> | number | null
    WaqfName?: StringWithAggregatesFilter<"History"> | string
    totalTransferred?: IntWithAggregatesFilter<"History"> | number
    LandfillName?: StringWithAggregatesFilter<"History"> | string
    ScreenerID?: IntNullableWithAggregatesFilter<"History"> | number | null
    TransformerID?: IntNullableWithAggregatesFilter<"History"> | number | null
  }

  export type UserCreateInput = {
    email: string
    password: string
    frontName?: string | null
    familyName?: string | null
    dateofbirth?: Date | string | null
    icNumber?: number | null
    address?: string | null
    phoneNumber?: string | null
    username: string
    zipCode?: number | null
    province?: string | null
    city?: string | null
    country?: string | null
    Transactions?: TransactionsCreateNestedManyWithoutUserInput
    History?: HistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    frontName?: string | null
    familyName?: string | null
    dateofbirth?: Date | string | null
    icNumber?: number | null
    address?: string | null
    phoneNumber?: string | null
    username: string
    zipCode?: number | null
    province?: string | null
    city?: string | null
    country?: string | null
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    History?: HistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frontName?: NullableStringFieldUpdateOperationsInput | string | null
    familyName?: NullableStringFieldUpdateOperationsInput | string | null
    dateofbirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icNumber?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableIntFieldUpdateOperationsInput | number | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    Transactions?: TransactionsUpdateManyWithoutUserNestedInput
    History?: HistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frontName?: NullableStringFieldUpdateOperationsInput | string | null
    familyName?: NullableStringFieldUpdateOperationsInput | string | null
    dateofbirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icNumber?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableIntFieldUpdateOperationsInput | number | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    Transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    History?: HistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    frontName?: string | null
    familyName?: string | null
    dateofbirth?: Date | string | null
    icNumber?: number | null
    address?: string | null
    phoneNumber?: string | null
    username: string
    zipCode?: number | null
    province?: string | null
    city?: string | null
    country?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frontName?: NullableStringFieldUpdateOperationsInput | string | null
    familyName?: NullableStringFieldUpdateOperationsInput | string | null
    dateofbirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icNumber?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableIntFieldUpdateOperationsInput | number | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frontName?: NullableStringFieldUpdateOperationsInput | string | null
    familyName?: NullableStringFieldUpdateOperationsInput | string | null
    dateofbirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icNumber?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableIntFieldUpdateOperationsInput | number | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntityCreateInput = {
    companyUsername: string
    password: string
    picFrontName?: string | null
    picFamilyName?: string | null
    picPhoneNumber?: string | null
    dateofbirth?: Date | string | null
    companyName?: string | null
    companyAddress?: string | null
    companyPhoneNumber?: string | null
    companyZipCode?: number | null
    companyEmail?: string | null
    companyRegistrationNumber?: string | null
    History?: HistoryCreateNestedManyWithoutEntityInput
    Transactions?: TransactionsCreateNestedManyWithoutEntityInput
  }

  export type EntityUncheckedCreateInput = {
    id?: number
    companyUsername: string
    password: string
    picFrontName?: string | null
    picFamilyName?: string | null
    picPhoneNumber?: string | null
    dateofbirth?: Date | string | null
    companyName?: string | null
    companyAddress?: string | null
    companyPhoneNumber?: string | null
    companyZipCode?: number | null
    companyEmail?: string | null
    companyRegistrationNumber?: string | null
    History?: HistoryUncheckedCreateNestedManyWithoutEntityInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutEntityInput
  }

  export type EntityUpdateInput = {
    companyUsername?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picFrontName?: NullableStringFieldUpdateOperationsInput | string | null
    picFamilyName?: NullableStringFieldUpdateOperationsInput | string | null
    picPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateofbirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    companyPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyZipCode?: NullableIntFieldUpdateOperationsInput | number | null
    companyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    companyRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    History?: HistoryUpdateManyWithoutEntityNestedInput
    Transactions?: TransactionsUpdateManyWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyUsername?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picFrontName?: NullableStringFieldUpdateOperationsInput | string | null
    picFamilyName?: NullableStringFieldUpdateOperationsInput | string | null
    picPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateofbirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    companyPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyZipCode?: NullableIntFieldUpdateOperationsInput | number | null
    companyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    companyRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    History?: HistoryUncheckedUpdateManyWithoutEntityNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutEntityNestedInput
  }

  export type EntityCreateManyInput = {
    id?: number
    companyUsername: string
    password: string
    picFrontName?: string | null
    picFamilyName?: string | null
    picPhoneNumber?: string | null
    dateofbirth?: Date | string | null
    companyName?: string | null
    companyAddress?: string | null
    companyPhoneNumber?: string | null
    companyZipCode?: number | null
    companyEmail?: string | null
    companyRegistrationNumber?: string | null
  }

  export type EntityUpdateManyMutationInput = {
    companyUsername?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picFrontName?: NullableStringFieldUpdateOperationsInput | string | null
    picFamilyName?: NullableStringFieldUpdateOperationsInput | string | null
    picPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateofbirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    companyPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyZipCode?: NullableIntFieldUpdateOperationsInput | number | null
    companyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    companyRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyUsername?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picFrontName?: NullableStringFieldUpdateOperationsInput | string | null
    picFamilyName?: NullableStringFieldUpdateOperationsInput | string | null
    picPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateofbirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    companyPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyZipCode?: NullableIntFieldUpdateOperationsInput | number | null
    companyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    companyRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminCreateInput = {
    username?: string | null
    password?: string | null
    name: string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    username?: string | null
    password?: string | null
    name: string
  }

  export type AdminUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: number
    username?: string | null
    password?: string | null
    name: string
  }

  export type AdminUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ScreenerCreateInput = {
    username?: string | null
    password?: string | null
    name: string
    email: string
    phoneNumber: string
    Landfills?: LandfillsCreateNestedManyWithoutScreenerInput
    Transactions?: TransactionsCreateNestedManyWithoutScreenerInput
    History?: HistoryCreateNestedManyWithoutScreenerInput
  }

  export type ScreenerUncheckedCreateInput = {
    id?: number
    username?: string | null
    password?: string | null
    name: string
    email: string
    phoneNumber: string
    Landfills?: LandfillsUncheckedCreateNestedManyWithoutScreenerInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutScreenerInput
    History?: HistoryUncheckedCreateNestedManyWithoutScreenerInput
  }

  export type ScreenerUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    Landfills?: LandfillsUpdateManyWithoutScreenerNestedInput
    Transactions?: TransactionsUpdateManyWithoutScreenerNestedInput
    History?: HistoryUpdateManyWithoutScreenerNestedInput
  }

  export type ScreenerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    Landfills?: LandfillsUncheckedUpdateManyWithoutScreenerNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutScreenerNestedInput
    History?: HistoryUncheckedUpdateManyWithoutScreenerNestedInput
  }

  export type ScreenerCreateManyInput = {
    id?: number
    username?: string | null
    password?: string | null
    name: string
    email: string
    phoneNumber: string
  }

  export type ScreenerUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type ScreenerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type TransformerCreateInput = {
    username?: string | null
    password?: string | null
    name: string
    email: string
    phoneNumber: string
    Landfills?: LandfillsCreateNestedManyWithoutTransformerInput
    Transactions?: TransactionsCreateNestedManyWithoutTransformerInput
    History?: HistoryCreateNestedManyWithoutTransformerInput
  }

  export type TransformerUncheckedCreateInput = {
    id?: number
    username?: string | null
    password?: string | null
    name: string
    email: string
    phoneNumber: string
    Landfills?: LandfillsUncheckedCreateNestedManyWithoutTransformerInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutTransformerInput
    History?: HistoryUncheckedCreateNestedManyWithoutTransformerInput
  }

  export type TransformerUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    Landfills?: LandfillsUpdateManyWithoutTransformerNestedInput
    Transactions?: TransactionsUpdateManyWithoutTransformerNestedInput
    History?: HistoryUpdateManyWithoutTransformerNestedInput
  }

  export type TransformerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    Landfills?: LandfillsUncheckedUpdateManyWithoutTransformerNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutTransformerNestedInput
    History?: HistoryUncheckedUpdateManyWithoutTransformerNestedInput
  }

  export type TransformerCreateManyInput = {
    id?: number
    username?: string | null
    password?: string | null
    name: string
    email: string
    phoneNumber: string
  }

  export type TransformerUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type TransformerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type landfillAreaCreateInput = {
    location: string
    landfills?: LandfillsCreateNestedManyWithoutLandfillAreaInput
  }

  export type landfillAreaUncheckedCreateInput = {
    id?: number
    location: string
    landfills?: LandfillsUncheckedCreateNestedManyWithoutLandfillAreaInput
  }

  export type landfillAreaUpdateInput = {
    location?: StringFieldUpdateOperationsInput | string
    landfills?: LandfillsUpdateManyWithoutLandfillAreaNestedInput
  }

  export type landfillAreaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    landfills?: LandfillsUncheckedUpdateManyWithoutLandfillAreaNestedInput
  }

  export type landfillAreaCreateManyInput = {
    id?: number
    location: string
  }

  export type landfillAreaUpdateManyMutationInput = {
    location?: StringFieldUpdateOperationsInput | string
  }

  export type landfillAreaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
  }

  export type LandfillsCreateInput = {
    landfillName: string
    landfillAddress?: string | null
    landfillPhoneNumber?: string | null
    imageUri?: string | null
    landfillArea: landfillAreaCreateNestedOneWithoutLandfillsInput
    Transformer?: TransformerCreateNestedOneWithoutLandfillsInput
    Screener?: ScreenerCreateNestedOneWithoutLandfillsInput
    Transactions?: TransactionsCreateNestedManyWithoutLandfillsInput
    History?: HistoryCreateNestedManyWithoutLandfillsInput
  }

  export type LandfillsUncheckedCreateInput = {
    id?: number
    landfillName: string
    landfillAreaName: string
    landfillAddress?: string | null
    landfillPhoneNumber?: string | null
    imageUri?: string | null
    TransformerID?: number | null
    ScreenerID?: number | null
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutLandfillsInput
    History?: HistoryUncheckedCreateNestedManyWithoutLandfillsInput
  }

  export type LandfillsUpdateInput = {
    landfillName?: StringFieldUpdateOperationsInput | string
    landfillAddress?: NullableStringFieldUpdateOperationsInput | string | null
    landfillPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUri?: NullableStringFieldUpdateOperationsInput | string | null
    landfillArea?: landfillAreaUpdateOneRequiredWithoutLandfillsNestedInput
    Transformer?: TransformerUpdateOneWithoutLandfillsNestedInput
    Screener?: ScreenerUpdateOneWithoutLandfillsNestedInput
    Transactions?: TransactionsUpdateManyWithoutLandfillsNestedInput
    History?: HistoryUpdateManyWithoutLandfillsNestedInput
  }

  export type LandfillsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    landfillName?: StringFieldUpdateOperationsInput | string
    landfillAreaName?: StringFieldUpdateOperationsInput | string
    landfillAddress?: NullableStringFieldUpdateOperationsInput | string | null
    landfillPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUri?: NullableStringFieldUpdateOperationsInput | string | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    Transactions?: TransactionsUncheckedUpdateManyWithoutLandfillsNestedInput
    History?: HistoryUncheckedUpdateManyWithoutLandfillsNestedInput
  }

  export type LandfillsCreateManyInput = {
    id?: number
    landfillName: string
    landfillAreaName: string
    landfillAddress?: string | null
    landfillPhoneNumber?: string | null
    imageUri?: string | null
    TransformerID?: number | null
    ScreenerID?: number | null
  }

  export type LandfillsUpdateManyMutationInput = {
    landfillName?: StringFieldUpdateOperationsInput | string
    landfillAddress?: NullableStringFieldUpdateOperationsInput | string | null
    landfillPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUri?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LandfillsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    landfillName?: StringFieldUpdateOperationsInput | string
    landfillAreaName?: StringFieldUpdateOperationsInput | string
    landfillAddress?: NullableStringFieldUpdateOperationsInput | string | null
    landfillPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUri?: NullableStringFieldUpdateOperationsInput | string | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WaqfCreateInput = {
    totalRaised?: number | null
    bankNumber?: number | null
    waqfName: string
    waqfAddress?: string | null
    waqfPhoneNumber?: string | null
    imageUrl?: string | null
    description?: string | null
    CauseOnWaqf?: CauseOnWaqfCreateNestedManyWithoutWaqfInput
    History?: HistoryCreateNestedManyWithoutWaqfInput
    Transactions?: TransactionsCreateNestedManyWithoutWaqfInput
  }

  export type WaqfUncheckedCreateInput = {
    id?: number
    totalRaised?: number | null
    bankNumber?: number | null
    waqfName: string
    waqfAddress?: string | null
    waqfPhoneNumber?: string | null
    imageUrl?: string | null
    description?: string | null
    CauseOnWaqf?: CauseOnWaqfUncheckedCreateNestedManyWithoutWaqfInput
    History?: HistoryUncheckedCreateNestedManyWithoutWaqfInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutWaqfInput
  }

  export type WaqfUpdateInput = {
    totalRaised?: NullableIntFieldUpdateOperationsInput | number | null
    bankNumber?: NullableIntFieldUpdateOperationsInput | number | null
    waqfName?: StringFieldUpdateOperationsInput | string
    waqfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    waqfPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    CauseOnWaqf?: CauseOnWaqfUpdateManyWithoutWaqfNestedInput
    History?: HistoryUpdateManyWithoutWaqfNestedInput
    Transactions?: TransactionsUpdateManyWithoutWaqfNestedInput
  }

  export type WaqfUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalRaised?: NullableIntFieldUpdateOperationsInput | number | null
    bankNumber?: NullableIntFieldUpdateOperationsInput | number | null
    waqfName?: StringFieldUpdateOperationsInput | string
    waqfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    waqfPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    CauseOnWaqf?: CauseOnWaqfUncheckedUpdateManyWithoutWaqfNestedInput
    History?: HistoryUncheckedUpdateManyWithoutWaqfNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutWaqfNestedInput
  }

  export type WaqfCreateManyInput = {
    id?: number
    totalRaised?: number | null
    bankNumber?: number | null
    waqfName: string
    waqfAddress?: string | null
    waqfPhoneNumber?: string | null
    imageUrl?: string | null
    description?: string | null
  }

  export type WaqfUpdateManyMutationInput = {
    totalRaised?: NullableIntFieldUpdateOperationsInput | number | null
    bankNumber?: NullableIntFieldUpdateOperationsInput | number | null
    waqfName?: StringFieldUpdateOperationsInput | string
    waqfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    waqfPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WaqfUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalRaised?: NullableIntFieldUpdateOperationsInput | number | null
    bankNumber?: NullableIntFieldUpdateOperationsInput | number | null
    waqfName?: StringFieldUpdateOperationsInput | string
    waqfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    waqfPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WaqfCauseCreateInput = {
    waqfCause: string
    CauseOnWaqf?: CauseOnWaqfCreateNestedManyWithoutWaqfCauseInput
  }

  export type WaqfCauseUncheckedCreateInput = {
    id?: number
    waqfCause: string
    CauseOnWaqf?: CauseOnWaqfUncheckedCreateNestedManyWithoutWaqfCauseInput
  }

  export type WaqfCauseUpdateInput = {
    waqfCause?: StringFieldUpdateOperationsInput | string
    CauseOnWaqf?: CauseOnWaqfUpdateManyWithoutWaqfCauseNestedInput
  }

  export type WaqfCauseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    waqfCause?: StringFieldUpdateOperationsInput | string
    CauseOnWaqf?: CauseOnWaqfUncheckedUpdateManyWithoutWaqfCauseNestedInput
  }

  export type WaqfCauseCreateManyInput = {
    id?: number
    waqfCause: string
  }

  export type WaqfCauseUpdateManyMutationInput = {
    waqfCause?: StringFieldUpdateOperationsInput | string
  }

  export type WaqfCauseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    waqfCause?: StringFieldUpdateOperationsInput | string
  }

  export type CauseOnWaqfCreateInput = {
    waqfCause: WaqfCauseCreateNestedOneWithoutCauseOnWaqfInput
    Waqf: WaqfCreateNestedOneWithoutCauseOnWaqfInput
  }

  export type CauseOnWaqfUncheckedCreateInput = {
    waqfID: number
    waqfCauseID: number
  }

  export type CauseOnWaqfUpdateInput = {
    waqfCause?: WaqfCauseUpdateOneRequiredWithoutCauseOnWaqfNestedInput
    Waqf?: WaqfUpdateOneRequiredWithoutCauseOnWaqfNestedInput
  }

  export type CauseOnWaqfUncheckedUpdateInput = {
    waqfID?: IntFieldUpdateOperationsInput | number
    waqfCauseID?: IntFieldUpdateOperationsInput | number
  }

  export type CauseOnWaqfCreateManyInput = {
    waqfID: number
    waqfCauseID: number
  }

  export type CauseOnWaqfUpdateManyMutationInput = {

  }

  export type CauseOnWaqfUncheckedUpdateManyInput = {
    waqfID?: IntFieldUpdateOperationsInput | number
    waqfCauseID?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionsCreateInput = {
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    User?: UserCreateNestedOneWithoutTransactionsInput
    Entity?: EntityCreateNestedOneWithoutTransactionsInput
    Waqf?: WaqfCreateNestedOneWithoutTransactionsInput
    Landfills?: LandfillsCreateNestedOneWithoutTransactionsInput
    Screener?: ScreenerCreateNestedOneWithoutTransactionsInput
    Transformer?: TransformerCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateInput = {
    id?: number
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    UserID?: number | null
    EntityID?: number | null
    WaqfID?: number | null
    LandfillsID?: number | null
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type TransactionsUpdateInput = {
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutTransactionsNestedInput
    Entity?: EntityUpdateOneWithoutTransactionsNestedInput
    Waqf?: WaqfUpdateOneWithoutTransactionsNestedInput
    Landfills?: LandfillsUpdateOneWithoutTransactionsNestedInput
    Screener?: ScreenerUpdateOneWithoutTransactionsNestedInput
    Transformer?: TransformerUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfID?: NullableIntFieldUpdateOperationsInput | number | null
    LandfillsID?: NullableIntFieldUpdateOperationsInput | number | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionsCreateManyInput = {
    id?: number
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    UserID?: number | null
    EntityID?: number | null
    WaqfID?: number | null
    LandfillsID?: number | null
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type TransactionsUpdateManyMutationInput = {
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfID?: NullableIntFieldUpdateOperationsInput | number | null
    LandfillsID?: NullableIntFieldUpdateOperationsInput | number | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistoryCreateInput = {
    historyDate: Date | string
    historyDescription?: string | null
    totalTransferred: number
    User?: UserCreateNestedOneWithoutHistoryInput
    Entity?: EntityCreateNestedOneWithoutHistoryInput
    Waqf: WaqfCreateNestedOneWithoutHistoryInput
    Landfills: LandfillsCreateNestedOneWithoutHistoryInput
    Screener?: ScreenerCreateNestedOneWithoutHistoryInput
    Transformer?: TransformerCreateNestedOneWithoutHistoryInput
  }

  export type HistoryUncheckedCreateInput = {
    id?: number
    historyDate: Date | string
    historyDescription?: string | null
    UserID?: number | null
    EntityID?: number | null
    WaqfName: string
    totalTransferred: number
    LandfillName: string
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type HistoryUpdateInput = {
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    totalTransferred?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneWithoutHistoryNestedInput
    Entity?: EntityUpdateOneWithoutHistoryNestedInput
    Waqf?: WaqfUpdateOneRequiredWithoutHistoryNestedInput
    Landfills?: LandfillsUpdateOneRequiredWithoutHistoryNestedInput
    Screener?: ScreenerUpdateOneWithoutHistoryNestedInput
    Transformer?: TransformerUpdateOneWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfName?: StringFieldUpdateOperationsInput | string
    totalTransferred?: IntFieldUpdateOperationsInput | number
    LandfillName?: StringFieldUpdateOperationsInput | string
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistoryCreateManyInput = {
    id?: number
    historyDate: Date | string
    historyDescription?: string | null
    UserID?: number | null
    EntityID?: number | null
    WaqfName: string
    totalTransferred: number
    LandfillName: string
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type HistoryUpdateManyMutationInput = {
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    totalTransferred?: IntFieldUpdateOperationsInput | number
  }

  export type HistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfName?: StringFieldUpdateOperationsInput | string
    totalTransferred?: IntFieldUpdateOperationsInput | number
    LandfillName?: StringFieldUpdateOperationsInput | string
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TransactionsListRelationFilter = {
    every?: TransactionsWhereInput
    some?: TransactionsWhereInput
    none?: TransactionsWhereInput
  }

  export type HistoryListRelationFilter = {
    every?: HistoryWhereInput
    some?: HistoryWhereInput
    none?: HistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    frontName?: SortOrder
    familyName?: SortOrder
    dateofbirth?: SortOrder
    icNumber?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    username?: SortOrder
    zipCode?: SortOrder
    province?: SortOrder
    city?: SortOrder
    country?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    icNumber?: SortOrder
    zipCode?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    frontName?: SortOrder
    familyName?: SortOrder
    dateofbirth?: SortOrder
    icNumber?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    username?: SortOrder
    zipCode?: SortOrder
    province?: SortOrder
    city?: SortOrder
    country?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    frontName?: SortOrder
    familyName?: SortOrder
    dateofbirth?: SortOrder
    icNumber?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    username?: SortOrder
    zipCode?: SortOrder
    province?: SortOrder
    city?: SortOrder
    country?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    icNumber?: SortOrder
    zipCode?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EntityCountOrderByAggregateInput = {
    id?: SortOrder
    companyUsername?: SortOrder
    password?: SortOrder
    picFrontName?: SortOrder
    picFamilyName?: SortOrder
    picPhoneNumber?: SortOrder
    dateofbirth?: SortOrder
    companyName?: SortOrder
    companyAddress?: SortOrder
    companyPhoneNumber?: SortOrder
    companyZipCode?: SortOrder
    companyEmail?: SortOrder
    companyRegistrationNumber?: SortOrder
  }

  export type EntityAvgOrderByAggregateInput = {
    id?: SortOrder
    companyZipCode?: SortOrder
  }

  export type EntityMaxOrderByAggregateInput = {
    id?: SortOrder
    companyUsername?: SortOrder
    password?: SortOrder
    picFrontName?: SortOrder
    picFamilyName?: SortOrder
    picPhoneNumber?: SortOrder
    dateofbirth?: SortOrder
    companyName?: SortOrder
    companyAddress?: SortOrder
    companyPhoneNumber?: SortOrder
    companyZipCode?: SortOrder
    companyEmail?: SortOrder
    companyRegistrationNumber?: SortOrder
  }

  export type EntityMinOrderByAggregateInput = {
    id?: SortOrder
    companyUsername?: SortOrder
    password?: SortOrder
    picFrontName?: SortOrder
    picFamilyName?: SortOrder
    picPhoneNumber?: SortOrder
    dateofbirth?: SortOrder
    companyName?: SortOrder
    companyAddress?: SortOrder
    companyPhoneNumber?: SortOrder
    companyZipCode?: SortOrder
    companyEmail?: SortOrder
    companyRegistrationNumber?: SortOrder
  }

  export type EntitySumOrderByAggregateInput = {
    id?: SortOrder
    companyZipCode?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LandfillsListRelationFilter = {
    every?: LandfillsWhereInput
    some?: LandfillsWhereInput
    none?: LandfillsWhereInput
  }

  export type LandfillsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScreenerCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type ScreenerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ScreenerMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type ScreenerMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type ScreenerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TransformerCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type TransformerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TransformerMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type TransformerMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type TransformerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type landfillAreaCountOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
  }

  export type landfillAreaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type landfillAreaMaxOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
  }

  export type landfillAreaMinOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
  }

  export type landfillAreaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LandfillAreaRelationFilter = {
    is?: landfillAreaWhereInput
    isNot?: landfillAreaWhereInput
  }

  export type TransformerNullableRelationFilter = {
    is?: TransformerWhereInput | null
    isNot?: TransformerWhereInput | null
  }

  export type ScreenerNullableRelationFilter = {
    is?: ScreenerWhereInput | null
    isNot?: ScreenerWhereInput | null
  }

  export type LandfillsCountOrderByAggregateInput = {
    id?: SortOrder
    landfillName?: SortOrder
    landfillAreaName?: SortOrder
    landfillAddress?: SortOrder
    landfillPhoneNumber?: SortOrder
    imageUri?: SortOrder
    TransformerID?: SortOrder
    ScreenerID?: SortOrder
  }

  export type LandfillsAvgOrderByAggregateInput = {
    id?: SortOrder
    TransformerID?: SortOrder
    ScreenerID?: SortOrder
  }

  export type LandfillsMaxOrderByAggregateInput = {
    id?: SortOrder
    landfillName?: SortOrder
    landfillAreaName?: SortOrder
    landfillAddress?: SortOrder
    landfillPhoneNumber?: SortOrder
    imageUri?: SortOrder
    TransformerID?: SortOrder
    ScreenerID?: SortOrder
  }

  export type LandfillsMinOrderByAggregateInput = {
    id?: SortOrder
    landfillName?: SortOrder
    landfillAreaName?: SortOrder
    landfillAddress?: SortOrder
    landfillPhoneNumber?: SortOrder
    imageUri?: SortOrder
    TransformerID?: SortOrder
    ScreenerID?: SortOrder
  }

  export type LandfillsSumOrderByAggregateInput = {
    id?: SortOrder
    TransformerID?: SortOrder
    ScreenerID?: SortOrder
  }

  export type CauseOnWaqfListRelationFilter = {
    every?: CauseOnWaqfWhereInput
    some?: CauseOnWaqfWhereInput
    none?: CauseOnWaqfWhereInput
  }

  export type CauseOnWaqfOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WaqfCountOrderByAggregateInput = {
    id?: SortOrder
    totalRaised?: SortOrder
    bankNumber?: SortOrder
    waqfName?: SortOrder
    waqfAddress?: SortOrder
    waqfPhoneNumber?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
  }

  export type WaqfAvgOrderByAggregateInput = {
    id?: SortOrder
    totalRaised?: SortOrder
    bankNumber?: SortOrder
  }

  export type WaqfMaxOrderByAggregateInput = {
    id?: SortOrder
    totalRaised?: SortOrder
    bankNumber?: SortOrder
    waqfName?: SortOrder
    waqfAddress?: SortOrder
    waqfPhoneNumber?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
  }

  export type WaqfMinOrderByAggregateInput = {
    id?: SortOrder
    totalRaised?: SortOrder
    bankNumber?: SortOrder
    waqfName?: SortOrder
    waqfAddress?: SortOrder
    waqfPhoneNumber?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
  }

  export type WaqfSumOrderByAggregateInput = {
    id?: SortOrder
    totalRaised?: SortOrder
    bankNumber?: SortOrder
  }

  export type WaqfCauseCountOrderByAggregateInput = {
    id?: SortOrder
    waqfCause?: SortOrder
  }

  export type WaqfCauseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WaqfCauseMaxOrderByAggregateInput = {
    id?: SortOrder
    waqfCause?: SortOrder
  }

  export type WaqfCauseMinOrderByAggregateInput = {
    id?: SortOrder
    waqfCause?: SortOrder
  }

  export type WaqfCauseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WaqfCauseRelationFilter = {
    is?: WaqfCauseWhereInput
    isNot?: WaqfCauseWhereInput
  }

  export type WaqfRelationFilter = {
    is?: WaqfWhereInput
    isNot?: WaqfWhereInput
  }

  export type CauseOnWaqfWaqfIDWaqfCauseIDCompoundUniqueInput = {
    waqfID: number
    waqfCauseID: number
  }

  export type CauseOnWaqfCountOrderByAggregateInput = {
    waqfID?: SortOrder
    waqfCauseID?: SortOrder
  }

  export type CauseOnWaqfAvgOrderByAggregateInput = {
    waqfID?: SortOrder
    waqfCauseID?: SortOrder
  }

  export type CauseOnWaqfMaxOrderByAggregateInput = {
    waqfID?: SortOrder
    waqfCauseID?: SortOrder
  }

  export type CauseOnWaqfMinOrderByAggregateInput = {
    waqfID?: SortOrder
    waqfCauseID?: SortOrder
  }

  export type CauseOnWaqfSumOrderByAggregateInput = {
    waqfID?: SortOrder
    waqfCauseID?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EntityNullableRelationFilter = {
    is?: EntityWhereInput | null
    isNot?: EntityWhereInput | null
  }

  export type WaqfNullableRelationFilter = {
    is?: WaqfWhereInput | null
    isNot?: WaqfWhereInput | null
  }

  export type LandfillsNullableRelationFilter = {
    is?: LandfillsWhereInput | null
    isNot?: LandfillsWhereInput | null
  }

  export type TransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    transactionDate?: SortOrder
    transactionAmount?: SortOrder
    transactionType?: SortOrder
    transactionStatus?: SortOrder
    transactionDescription?: SortOrder
    transactionDeposited?: SortOrder
    transactionScreened?: SortOrder
    totalScreened?: SortOrder
    transactionTransformed?: SortOrder
    transactionTransfered?: SortOrder
    UserID?: SortOrder
    EntityID?: SortOrder
    WaqfID?: SortOrder
    LandfillsID?: SortOrder
    ScreenerID?: SortOrder
    TransformerID?: SortOrder
  }

  export type TransactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    transactionAmount?: SortOrder
    totalScreened?: SortOrder
    UserID?: SortOrder
    EntityID?: SortOrder
    WaqfID?: SortOrder
    LandfillsID?: SortOrder
    ScreenerID?: SortOrder
    TransformerID?: SortOrder
  }

  export type TransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionDate?: SortOrder
    transactionAmount?: SortOrder
    transactionType?: SortOrder
    transactionStatus?: SortOrder
    transactionDescription?: SortOrder
    transactionDeposited?: SortOrder
    transactionScreened?: SortOrder
    totalScreened?: SortOrder
    transactionTransformed?: SortOrder
    transactionTransfered?: SortOrder
    UserID?: SortOrder
    EntityID?: SortOrder
    WaqfID?: SortOrder
    LandfillsID?: SortOrder
    ScreenerID?: SortOrder
    TransformerID?: SortOrder
  }

  export type TransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    transactionDate?: SortOrder
    transactionAmount?: SortOrder
    transactionType?: SortOrder
    transactionStatus?: SortOrder
    transactionDescription?: SortOrder
    transactionDeposited?: SortOrder
    transactionScreened?: SortOrder
    totalScreened?: SortOrder
    transactionTransformed?: SortOrder
    transactionTransfered?: SortOrder
    UserID?: SortOrder
    EntityID?: SortOrder
    WaqfID?: SortOrder
    LandfillsID?: SortOrder
    ScreenerID?: SortOrder
    TransformerID?: SortOrder
  }

  export type TransactionsSumOrderByAggregateInput = {
    id?: SortOrder
    transactionAmount?: SortOrder
    totalScreened?: SortOrder
    UserID?: SortOrder
    EntityID?: SortOrder
    WaqfID?: SortOrder
    LandfillsID?: SortOrder
    ScreenerID?: SortOrder
    TransformerID?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LandfillsRelationFilter = {
    is?: LandfillsWhereInput
    isNot?: LandfillsWhereInput
  }

  export type HistoryCountOrderByAggregateInput = {
    id?: SortOrder
    historyDate?: SortOrder
    historyDescription?: SortOrder
    UserID?: SortOrder
    EntityID?: SortOrder
    WaqfName?: SortOrder
    totalTransferred?: SortOrder
    LandfillName?: SortOrder
    ScreenerID?: SortOrder
    TransformerID?: SortOrder
  }

  export type HistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    UserID?: SortOrder
    EntityID?: SortOrder
    totalTransferred?: SortOrder
    ScreenerID?: SortOrder
    TransformerID?: SortOrder
  }

  export type HistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    historyDate?: SortOrder
    historyDescription?: SortOrder
    UserID?: SortOrder
    EntityID?: SortOrder
    WaqfName?: SortOrder
    totalTransferred?: SortOrder
    LandfillName?: SortOrder
    ScreenerID?: SortOrder
    TransformerID?: SortOrder
  }

  export type HistoryMinOrderByAggregateInput = {
    id?: SortOrder
    historyDate?: SortOrder
    historyDescription?: SortOrder
    UserID?: SortOrder
    EntityID?: SortOrder
    WaqfName?: SortOrder
    totalTransferred?: SortOrder
    LandfillName?: SortOrder
    ScreenerID?: SortOrder
    TransformerID?: SortOrder
  }

  export type HistorySumOrderByAggregateInput = {
    id?: SortOrder
    UserID?: SortOrder
    EntityID?: SortOrder
    totalTransferred?: SortOrder
    ScreenerID?: SortOrder
    TransformerID?: SortOrder
  }

  export type TransactionsCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type HistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransactionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutUserInput | TransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutUserInput | TransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutUserInput | TransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type HistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutUserInput | HistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutUserInput | HistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutUserInput | HistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransactionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutUserInput | TransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutUserInput | TransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutUserInput | TransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutUserInput | HistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutUserInput | HistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutUserInput | HistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type HistoryCreateNestedManyWithoutEntityInput = {
    create?: XOR<HistoryCreateWithoutEntityInput, HistoryUncheckedCreateWithoutEntityInput> | HistoryCreateWithoutEntityInput[] | HistoryUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutEntityInput | HistoryCreateOrConnectWithoutEntityInput[]
    createMany?: HistoryCreateManyEntityInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type TransactionsCreateNestedManyWithoutEntityInput = {
    create?: XOR<TransactionsCreateWithoutEntityInput, TransactionsUncheckedCreateWithoutEntityInput> | TransactionsCreateWithoutEntityInput[] | TransactionsUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutEntityInput | TransactionsCreateOrConnectWithoutEntityInput[]
    createMany?: TransactionsCreateManyEntityInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutEntityInput = {
    create?: XOR<HistoryCreateWithoutEntityInput, HistoryUncheckedCreateWithoutEntityInput> | HistoryCreateWithoutEntityInput[] | HistoryUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutEntityInput | HistoryCreateOrConnectWithoutEntityInput[]
    createMany?: HistoryCreateManyEntityInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutEntityInput = {
    create?: XOR<TransactionsCreateWithoutEntityInput, TransactionsUncheckedCreateWithoutEntityInput> | TransactionsCreateWithoutEntityInput[] | TransactionsUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutEntityInput | TransactionsCreateOrConnectWithoutEntityInput[]
    createMany?: TransactionsCreateManyEntityInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type HistoryUpdateManyWithoutEntityNestedInput = {
    create?: XOR<HistoryCreateWithoutEntityInput, HistoryUncheckedCreateWithoutEntityInput> | HistoryCreateWithoutEntityInput[] | HistoryUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutEntityInput | HistoryCreateOrConnectWithoutEntityInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutEntityInput | HistoryUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: HistoryCreateManyEntityInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutEntityInput | HistoryUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutEntityInput | HistoryUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type TransactionsUpdateManyWithoutEntityNestedInput = {
    create?: XOR<TransactionsCreateWithoutEntityInput, TransactionsUncheckedCreateWithoutEntityInput> | TransactionsCreateWithoutEntityInput[] | TransactionsUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutEntityInput | TransactionsCreateOrConnectWithoutEntityInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutEntityInput | TransactionsUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: TransactionsCreateManyEntityInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutEntityInput | TransactionsUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutEntityInput | TransactionsUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutEntityNestedInput = {
    create?: XOR<HistoryCreateWithoutEntityInput, HistoryUncheckedCreateWithoutEntityInput> | HistoryCreateWithoutEntityInput[] | HistoryUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutEntityInput | HistoryCreateOrConnectWithoutEntityInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutEntityInput | HistoryUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: HistoryCreateManyEntityInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutEntityInput | HistoryUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutEntityInput | HistoryUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutEntityNestedInput = {
    create?: XOR<TransactionsCreateWithoutEntityInput, TransactionsUncheckedCreateWithoutEntityInput> | TransactionsCreateWithoutEntityInput[] | TransactionsUncheckedCreateWithoutEntityInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutEntityInput | TransactionsCreateOrConnectWithoutEntityInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutEntityInput | TransactionsUpsertWithWhereUniqueWithoutEntityInput[]
    createMany?: TransactionsCreateManyEntityInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutEntityInput | TransactionsUpdateWithWhereUniqueWithoutEntityInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutEntityInput | TransactionsUpdateManyWithWhereWithoutEntityInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type LandfillsCreateNestedManyWithoutScreenerInput = {
    create?: XOR<LandfillsCreateWithoutScreenerInput, LandfillsUncheckedCreateWithoutScreenerInput> | LandfillsCreateWithoutScreenerInput[] | LandfillsUncheckedCreateWithoutScreenerInput[]
    connectOrCreate?: LandfillsCreateOrConnectWithoutScreenerInput | LandfillsCreateOrConnectWithoutScreenerInput[]
    createMany?: LandfillsCreateManyScreenerInputEnvelope
    connect?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
  }

  export type TransactionsCreateNestedManyWithoutScreenerInput = {
    create?: XOR<TransactionsCreateWithoutScreenerInput, TransactionsUncheckedCreateWithoutScreenerInput> | TransactionsCreateWithoutScreenerInput[] | TransactionsUncheckedCreateWithoutScreenerInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutScreenerInput | TransactionsCreateOrConnectWithoutScreenerInput[]
    createMany?: TransactionsCreateManyScreenerInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type HistoryCreateNestedManyWithoutScreenerInput = {
    create?: XOR<HistoryCreateWithoutScreenerInput, HistoryUncheckedCreateWithoutScreenerInput> | HistoryCreateWithoutScreenerInput[] | HistoryUncheckedCreateWithoutScreenerInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutScreenerInput | HistoryCreateOrConnectWithoutScreenerInput[]
    createMany?: HistoryCreateManyScreenerInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type LandfillsUncheckedCreateNestedManyWithoutScreenerInput = {
    create?: XOR<LandfillsCreateWithoutScreenerInput, LandfillsUncheckedCreateWithoutScreenerInput> | LandfillsCreateWithoutScreenerInput[] | LandfillsUncheckedCreateWithoutScreenerInput[]
    connectOrCreate?: LandfillsCreateOrConnectWithoutScreenerInput | LandfillsCreateOrConnectWithoutScreenerInput[]
    createMany?: LandfillsCreateManyScreenerInputEnvelope
    connect?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutScreenerInput = {
    create?: XOR<TransactionsCreateWithoutScreenerInput, TransactionsUncheckedCreateWithoutScreenerInput> | TransactionsCreateWithoutScreenerInput[] | TransactionsUncheckedCreateWithoutScreenerInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutScreenerInput | TransactionsCreateOrConnectWithoutScreenerInput[]
    createMany?: TransactionsCreateManyScreenerInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutScreenerInput = {
    create?: XOR<HistoryCreateWithoutScreenerInput, HistoryUncheckedCreateWithoutScreenerInput> | HistoryCreateWithoutScreenerInput[] | HistoryUncheckedCreateWithoutScreenerInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutScreenerInput | HistoryCreateOrConnectWithoutScreenerInput[]
    createMany?: HistoryCreateManyScreenerInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type LandfillsUpdateManyWithoutScreenerNestedInput = {
    create?: XOR<LandfillsCreateWithoutScreenerInput, LandfillsUncheckedCreateWithoutScreenerInput> | LandfillsCreateWithoutScreenerInput[] | LandfillsUncheckedCreateWithoutScreenerInput[]
    connectOrCreate?: LandfillsCreateOrConnectWithoutScreenerInput | LandfillsCreateOrConnectWithoutScreenerInput[]
    upsert?: LandfillsUpsertWithWhereUniqueWithoutScreenerInput | LandfillsUpsertWithWhereUniqueWithoutScreenerInput[]
    createMany?: LandfillsCreateManyScreenerInputEnvelope
    set?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    disconnect?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    delete?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    connect?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    update?: LandfillsUpdateWithWhereUniqueWithoutScreenerInput | LandfillsUpdateWithWhereUniqueWithoutScreenerInput[]
    updateMany?: LandfillsUpdateManyWithWhereWithoutScreenerInput | LandfillsUpdateManyWithWhereWithoutScreenerInput[]
    deleteMany?: LandfillsScalarWhereInput | LandfillsScalarWhereInput[]
  }

  export type TransactionsUpdateManyWithoutScreenerNestedInput = {
    create?: XOR<TransactionsCreateWithoutScreenerInput, TransactionsUncheckedCreateWithoutScreenerInput> | TransactionsCreateWithoutScreenerInput[] | TransactionsUncheckedCreateWithoutScreenerInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutScreenerInput | TransactionsCreateOrConnectWithoutScreenerInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutScreenerInput | TransactionsUpsertWithWhereUniqueWithoutScreenerInput[]
    createMany?: TransactionsCreateManyScreenerInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutScreenerInput | TransactionsUpdateWithWhereUniqueWithoutScreenerInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutScreenerInput | TransactionsUpdateManyWithWhereWithoutScreenerInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type HistoryUpdateManyWithoutScreenerNestedInput = {
    create?: XOR<HistoryCreateWithoutScreenerInput, HistoryUncheckedCreateWithoutScreenerInput> | HistoryCreateWithoutScreenerInput[] | HistoryUncheckedCreateWithoutScreenerInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutScreenerInput | HistoryCreateOrConnectWithoutScreenerInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutScreenerInput | HistoryUpsertWithWhereUniqueWithoutScreenerInput[]
    createMany?: HistoryCreateManyScreenerInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutScreenerInput | HistoryUpdateWithWhereUniqueWithoutScreenerInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutScreenerInput | HistoryUpdateManyWithWhereWithoutScreenerInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type LandfillsUncheckedUpdateManyWithoutScreenerNestedInput = {
    create?: XOR<LandfillsCreateWithoutScreenerInput, LandfillsUncheckedCreateWithoutScreenerInput> | LandfillsCreateWithoutScreenerInput[] | LandfillsUncheckedCreateWithoutScreenerInput[]
    connectOrCreate?: LandfillsCreateOrConnectWithoutScreenerInput | LandfillsCreateOrConnectWithoutScreenerInput[]
    upsert?: LandfillsUpsertWithWhereUniqueWithoutScreenerInput | LandfillsUpsertWithWhereUniqueWithoutScreenerInput[]
    createMany?: LandfillsCreateManyScreenerInputEnvelope
    set?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    disconnect?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    delete?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    connect?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    update?: LandfillsUpdateWithWhereUniqueWithoutScreenerInput | LandfillsUpdateWithWhereUniqueWithoutScreenerInput[]
    updateMany?: LandfillsUpdateManyWithWhereWithoutScreenerInput | LandfillsUpdateManyWithWhereWithoutScreenerInput[]
    deleteMany?: LandfillsScalarWhereInput | LandfillsScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutScreenerNestedInput = {
    create?: XOR<TransactionsCreateWithoutScreenerInput, TransactionsUncheckedCreateWithoutScreenerInput> | TransactionsCreateWithoutScreenerInput[] | TransactionsUncheckedCreateWithoutScreenerInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutScreenerInput | TransactionsCreateOrConnectWithoutScreenerInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutScreenerInput | TransactionsUpsertWithWhereUniqueWithoutScreenerInput[]
    createMany?: TransactionsCreateManyScreenerInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutScreenerInput | TransactionsUpdateWithWhereUniqueWithoutScreenerInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutScreenerInput | TransactionsUpdateManyWithWhereWithoutScreenerInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutScreenerNestedInput = {
    create?: XOR<HistoryCreateWithoutScreenerInput, HistoryUncheckedCreateWithoutScreenerInput> | HistoryCreateWithoutScreenerInput[] | HistoryUncheckedCreateWithoutScreenerInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutScreenerInput | HistoryCreateOrConnectWithoutScreenerInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutScreenerInput | HistoryUpsertWithWhereUniqueWithoutScreenerInput[]
    createMany?: HistoryCreateManyScreenerInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutScreenerInput | HistoryUpdateWithWhereUniqueWithoutScreenerInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutScreenerInput | HistoryUpdateManyWithWhereWithoutScreenerInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type LandfillsCreateNestedManyWithoutTransformerInput = {
    create?: XOR<LandfillsCreateWithoutTransformerInput, LandfillsUncheckedCreateWithoutTransformerInput> | LandfillsCreateWithoutTransformerInput[] | LandfillsUncheckedCreateWithoutTransformerInput[]
    connectOrCreate?: LandfillsCreateOrConnectWithoutTransformerInput | LandfillsCreateOrConnectWithoutTransformerInput[]
    createMany?: LandfillsCreateManyTransformerInputEnvelope
    connect?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
  }

  export type TransactionsCreateNestedManyWithoutTransformerInput = {
    create?: XOR<TransactionsCreateWithoutTransformerInput, TransactionsUncheckedCreateWithoutTransformerInput> | TransactionsCreateWithoutTransformerInput[] | TransactionsUncheckedCreateWithoutTransformerInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutTransformerInput | TransactionsCreateOrConnectWithoutTransformerInput[]
    createMany?: TransactionsCreateManyTransformerInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type HistoryCreateNestedManyWithoutTransformerInput = {
    create?: XOR<HistoryCreateWithoutTransformerInput, HistoryUncheckedCreateWithoutTransformerInput> | HistoryCreateWithoutTransformerInput[] | HistoryUncheckedCreateWithoutTransformerInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutTransformerInput | HistoryCreateOrConnectWithoutTransformerInput[]
    createMany?: HistoryCreateManyTransformerInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type LandfillsUncheckedCreateNestedManyWithoutTransformerInput = {
    create?: XOR<LandfillsCreateWithoutTransformerInput, LandfillsUncheckedCreateWithoutTransformerInput> | LandfillsCreateWithoutTransformerInput[] | LandfillsUncheckedCreateWithoutTransformerInput[]
    connectOrCreate?: LandfillsCreateOrConnectWithoutTransformerInput | LandfillsCreateOrConnectWithoutTransformerInput[]
    createMany?: LandfillsCreateManyTransformerInputEnvelope
    connect?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutTransformerInput = {
    create?: XOR<TransactionsCreateWithoutTransformerInput, TransactionsUncheckedCreateWithoutTransformerInput> | TransactionsCreateWithoutTransformerInput[] | TransactionsUncheckedCreateWithoutTransformerInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutTransformerInput | TransactionsCreateOrConnectWithoutTransformerInput[]
    createMany?: TransactionsCreateManyTransformerInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutTransformerInput = {
    create?: XOR<HistoryCreateWithoutTransformerInput, HistoryUncheckedCreateWithoutTransformerInput> | HistoryCreateWithoutTransformerInput[] | HistoryUncheckedCreateWithoutTransformerInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutTransformerInput | HistoryCreateOrConnectWithoutTransformerInput[]
    createMany?: HistoryCreateManyTransformerInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type LandfillsUpdateManyWithoutTransformerNestedInput = {
    create?: XOR<LandfillsCreateWithoutTransformerInput, LandfillsUncheckedCreateWithoutTransformerInput> | LandfillsCreateWithoutTransformerInput[] | LandfillsUncheckedCreateWithoutTransformerInput[]
    connectOrCreate?: LandfillsCreateOrConnectWithoutTransformerInput | LandfillsCreateOrConnectWithoutTransformerInput[]
    upsert?: LandfillsUpsertWithWhereUniqueWithoutTransformerInput | LandfillsUpsertWithWhereUniqueWithoutTransformerInput[]
    createMany?: LandfillsCreateManyTransformerInputEnvelope
    set?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    disconnect?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    delete?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    connect?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    update?: LandfillsUpdateWithWhereUniqueWithoutTransformerInput | LandfillsUpdateWithWhereUniqueWithoutTransformerInput[]
    updateMany?: LandfillsUpdateManyWithWhereWithoutTransformerInput | LandfillsUpdateManyWithWhereWithoutTransformerInput[]
    deleteMany?: LandfillsScalarWhereInput | LandfillsScalarWhereInput[]
  }

  export type TransactionsUpdateManyWithoutTransformerNestedInput = {
    create?: XOR<TransactionsCreateWithoutTransformerInput, TransactionsUncheckedCreateWithoutTransformerInput> | TransactionsCreateWithoutTransformerInput[] | TransactionsUncheckedCreateWithoutTransformerInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutTransformerInput | TransactionsCreateOrConnectWithoutTransformerInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutTransformerInput | TransactionsUpsertWithWhereUniqueWithoutTransformerInput[]
    createMany?: TransactionsCreateManyTransformerInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutTransformerInput | TransactionsUpdateWithWhereUniqueWithoutTransformerInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutTransformerInput | TransactionsUpdateManyWithWhereWithoutTransformerInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type HistoryUpdateManyWithoutTransformerNestedInput = {
    create?: XOR<HistoryCreateWithoutTransformerInput, HistoryUncheckedCreateWithoutTransformerInput> | HistoryCreateWithoutTransformerInput[] | HistoryUncheckedCreateWithoutTransformerInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutTransformerInput | HistoryCreateOrConnectWithoutTransformerInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutTransformerInput | HistoryUpsertWithWhereUniqueWithoutTransformerInput[]
    createMany?: HistoryCreateManyTransformerInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutTransformerInput | HistoryUpdateWithWhereUniqueWithoutTransformerInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutTransformerInput | HistoryUpdateManyWithWhereWithoutTransformerInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type LandfillsUncheckedUpdateManyWithoutTransformerNestedInput = {
    create?: XOR<LandfillsCreateWithoutTransformerInput, LandfillsUncheckedCreateWithoutTransformerInput> | LandfillsCreateWithoutTransformerInput[] | LandfillsUncheckedCreateWithoutTransformerInput[]
    connectOrCreate?: LandfillsCreateOrConnectWithoutTransformerInput | LandfillsCreateOrConnectWithoutTransformerInput[]
    upsert?: LandfillsUpsertWithWhereUniqueWithoutTransformerInput | LandfillsUpsertWithWhereUniqueWithoutTransformerInput[]
    createMany?: LandfillsCreateManyTransformerInputEnvelope
    set?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    disconnect?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    delete?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    connect?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    update?: LandfillsUpdateWithWhereUniqueWithoutTransformerInput | LandfillsUpdateWithWhereUniqueWithoutTransformerInput[]
    updateMany?: LandfillsUpdateManyWithWhereWithoutTransformerInput | LandfillsUpdateManyWithWhereWithoutTransformerInput[]
    deleteMany?: LandfillsScalarWhereInput | LandfillsScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutTransformerNestedInput = {
    create?: XOR<TransactionsCreateWithoutTransformerInput, TransactionsUncheckedCreateWithoutTransformerInput> | TransactionsCreateWithoutTransformerInput[] | TransactionsUncheckedCreateWithoutTransformerInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutTransformerInput | TransactionsCreateOrConnectWithoutTransformerInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutTransformerInput | TransactionsUpsertWithWhereUniqueWithoutTransformerInput[]
    createMany?: TransactionsCreateManyTransformerInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutTransformerInput | TransactionsUpdateWithWhereUniqueWithoutTransformerInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutTransformerInput | TransactionsUpdateManyWithWhereWithoutTransformerInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutTransformerNestedInput = {
    create?: XOR<HistoryCreateWithoutTransformerInput, HistoryUncheckedCreateWithoutTransformerInput> | HistoryCreateWithoutTransformerInput[] | HistoryUncheckedCreateWithoutTransformerInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutTransformerInput | HistoryCreateOrConnectWithoutTransformerInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutTransformerInput | HistoryUpsertWithWhereUniqueWithoutTransformerInput[]
    createMany?: HistoryCreateManyTransformerInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutTransformerInput | HistoryUpdateWithWhereUniqueWithoutTransformerInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutTransformerInput | HistoryUpdateManyWithWhereWithoutTransformerInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type LandfillsCreateNestedManyWithoutLandfillAreaInput = {
    create?: XOR<LandfillsCreateWithoutLandfillAreaInput, LandfillsUncheckedCreateWithoutLandfillAreaInput> | LandfillsCreateWithoutLandfillAreaInput[] | LandfillsUncheckedCreateWithoutLandfillAreaInput[]
    connectOrCreate?: LandfillsCreateOrConnectWithoutLandfillAreaInput | LandfillsCreateOrConnectWithoutLandfillAreaInput[]
    createMany?: LandfillsCreateManyLandfillAreaInputEnvelope
    connect?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
  }

  export type LandfillsUncheckedCreateNestedManyWithoutLandfillAreaInput = {
    create?: XOR<LandfillsCreateWithoutLandfillAreaInput, LandfillsUncheckedCreateWithoutLandfillAreaInput> | LandfillsCreateWithoutLandfillAreaInput[] | LandfillsUncheckedCreateWithoutLandfillAreaInput[]
    connectOrCreate?: LandfillsCreateOrConnectWithoutLandfillAreaInput | LandfillsCreateOrConnectWithoutLandfillAreaInput[]
    createMany?: LandfillsCreateManyLandfillAreaInputEnvelope
    connect?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
  }

  export type LandfillsUpdateManyWithoutLandfillAreaNestedInput = {
    create?: XOR<LandfillsCreateWithoutLandfillAreaInput, LandfillsUncheckedCreateWithoutLandfillAreaInput> | LandfillsCreateWithoutLandfillAreaInput[] | LandfillsUncheckedCreateWithoutLandfillAreaInput[]
    connectOrCreate?: LandfillsCreateOrConnectWithoutLandfillAreaInput | LandfillsCreateOrConnectWithoutLandfillAreaInput[]
    upsert?: LandfillsUpsertWithWhereUniqueWithoutLandfillAreaInput | LandfillsUpsertWithWhereUniqueWithoutLandfillAreaInput[]
    createMany?: LandfillsCreateManyLandfillAreaInputEnvelope
    set?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    disconnect?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    delete?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    connect?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    update?: LandfillsUpdateWithWhereUniqueWithoutLandfillAreaInput | LandfillsUpdateWithWhereUniqueWithoutLandfillAreaInput[]
    updateMany?: LandfillsUpdateManyWithWhereWithoutLandfillAreaInput | LandfillsUpdateManyWithWhereWithoutLandfillAreaInput[]
    deleteMany?: LandfillsScalarWhereInput | LandfillsScalarWhereInput[]
  }

  export type LandfillsUncheckedUpdateManyWithoutLandfillAreaNestedInput = {
    create?: XOR<LandfillsCreateWithoutLandfillAreaInput, LandfillsUncheckedCreateWithoutLandfillAreaInput> | LandfillsCreateWithoutLandfillAreaInput[] | LandfillsUncheckedCreateWithoutLandfillAreaInput[]
    connectOrCreate?: LandfillsCreateOrConnectWithoutLandfillAreaInput | LandfillsCreateOrConnectWithoutLandfillAreaInput[]
    upsert?: LandfillsUpsertWithWhereUniqueWithoutLandfillAreaInput | LandfillsUpsertWithWhereUniqueWithoutLandfillAreaInput[]
    createMany?: LandfillsCreateManyLandfillAreaInputEnvelope
    set?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    disconnect?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    delete?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    connect?: LandfillsWhereUniqueInput | LandfillsWhereUniqueInput[]
    update?: LandfillsUpdateWithWhereUniqueWithoutLandfillAreaInput | LandfillsUpdateWithWhereUniqueWithoutLandfillAreaInput[]
    updateMany?: LandfillsUpdateManyWithWhereWithoutLandfillAreaInput | LandfillsUpdateManyWithWhereWithoutLandfillAreaInput[]
    deleteMany?: LandfillsScalarWhereInput | LandfillsScalarWhereInput[]
  }

  export type landfillAreaCreateNestedOneWithoutLandfillsInput = {
    create?: XOR<landfillAreaCreateWithoutLandfillsInput, landfillAreaUncheckedCreateWithoutLandfillsInput>
    connectOrCreate?: landfillAreaCreateOrConnectWithoutLandfillsInput
    connect?: landfillAreaWhereUniqueInput
  }

  export type TransformerCreateNestedOneWithoutLandfillsInput = {
    create?: XOR<TransformerCreateWithoutLandfillsInput, TransformerUncheckedCreateWithoutLandfillsInput>
    connectOrCreate?: TransformerCreateOrConnectWithoutLandfillsInput
    connect?: TransformerWhereUniqueInput
  }

  export type ScreenerCreateNestedOneWithoutLandfillsInput = {
    create?: XOR<ScreenerCreateWithoutLandfillsInput, ScreenerUncheckedCreateWithoutLandfillsInput>
    connectOrCreate?: ScreenerCreateOrConnectWithoutLandfillsInput
    connect?: ScreenerWhereUniqueInput
  }

  export type TransactionsCreateNestedManyWithoutLandfillsInput = {
    create?: XOR<TransactionsCreateWithoutLandfillsInput, TransactionsUncheckedCreateWithoutLandfillsInput> | TransactionsCreateWithoutLandfillsInput[] | TransactionsUncheckedCreateWithoutLandfillsInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutLandfillsInput | TransactionsCreateOrConnectWithoutLandfillsInput[]
    createMany?: TransactionsCreateManyLandfillsInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type HistoryCreateNestedManyWithoutLandfillsInput = {
    create?: XOR<HistoryCreateWithoutLandfillsInput, HistoryUncheckedCreateWithoutLandfillsInput> | HistoryCreateWithoutLandfillsInput[] | HistoryUncheckedCreateWithoutLandfillsInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutLandfillsInput | HistoryCreateOrConnectWithoutLandfillsInput[]
    createMany?: HistoryCreateManyLandfillsInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutLandfillsInput = {
    create?: XOR<TransactionsCreateWithoutLandfillsInput, TransactionsUncheckedCreateWithoutLandfillsInput> | TransactionsCreateWithoutLandfillsInput[] | TransactionsUncheckedCreateWithoutLandfillsInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutLandfillsInput | TransactionsCreateOrConnectWithoutLandfillsInput[]
    createMany?: TransactionsCreateManyLandfillsInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutLandfillsInput = {
    create?: XOR<HistoryCreateWithoutLandfillsInput, HistoryUncheckedCreateWithoutLandfillsInput> | HistoryCreateWithoutLandfillsInput[] | HistoryUncheckedCreateWithoutLandfillsInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutLandfillsInput | HistoryCreateOrConnectWithoutLandfillsInput[]
    createMany?: HistoryCreateManyLandfillsInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type landfillAreaUpdateOneRequiredWithoutLandfillsNestedInput = {
    create?: XOR<landfillAreaCreateWithoutLandfillsInput, landfillAreaUncheckedCreateWithoutLandfillsInput>
    connectOrCreate?: landfillAreaCreateOrConnectWithoutLandfillsInput
    upsert?: landfillAreaUpsertWithoutLandfillsInput
    connect?: landfillAreaWhereUniqueInput
    update?: XOR<XOR<landfillAreaUpdateToOneWithWhereWithoutLandfillsInput, landfillAreaUpdateWithoutLandfillsInput>, landfillAreaUncheckedUpdateWithoutLandfillsInput>
  }

  export type TransformerUpdateOneWithoutLandfillsNestedInput = {
    create?: XOR<TransformerCreateWithoutLandfillsInput, TransformerUncheckedCreateWithoutLandfillsInput>
    connectOrCreate?: TransformerCreateOrConnectWithoutLandfillsInput
    upsert?: TransformerUpsertWithoutLandfillsInput
    disconnect?: TransformerWhereInput | boolean
    delete?: TransformerWhereInput | boolean
    connect?: TransformerWhereUniqueInput
    update?: XOR<XOR<TransformerUpdateToOneWithWhereWithoutLandfillsInput, TransformerUpdateWithoutLandfillsInput>, TransformerUncheckedUpdateWithoutLandfillsInput>
  }

  export type ScreenerUpdateOneWithoutLandfillsNestedInput = {
    create?: XOR<ScreenerCreateWithoutLandfillsInput, ScreenerUncheckedCreateWithoutLandfillsInput>
    connectOrCreate?: ScreenerCreateOrConnectWithoutLandfillsInput
    upsert?: ScreenerUpsertWithoutLandfillsInput
    disconnect?: ScreenerWhereInput | boolean
    delete?: ScreenerWhereInput | boolean
    connect?: ScreenerWhereUniqueInput
    update?: XOR<XOR<ScreenerUpdateToOneWithWhereWithoutLandfillsInput, ScreenerUpdateWithoutLandfillsInput>, ScreenerUncheckedUpdateWithoutLandfillsInput>
  }

  export type TransactionsUpdateManyWithoutLandfillsNestedInput = {
    create?: XOR<TransactionsCreateWithoutLandfillsInput, TransactionsUncheckedCreateWithoutLandfillsInput> | TransactionsCreateWithoutLandfillsInput[] | TransactionsUncheckedCreateWithoutLandfillsInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutLandfillsInput | TransactionsCreateOrConnectWithoutLandfillsInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutLandfillsInput | TransactionsUpsertWithWhereUniqueWithoutLandfillsInput[]
    createMany?: TransactionsCreateManyLandfillsInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutLandfillsInput | TransactionsUpdateWithWhereUniqueWithoutLandfillsInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutLandfillsInput | TransactionsUpdateManyWithWhereWithoutLandfillsInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type HistoryUpdateManyWithoutLandfillsNestedInput = {
    create?: XOR<HistoryCreateWithoutLandfillsInput, HistoryUncheckedCreateWithoutLandfillsInput> | HistoryCreateWithoutLandfillsInput[] | HistoryUncheckedCreateWithoutLandfillsInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutLandfillsInput | HistoryCreateOrConnectWithoutLandfillsInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutLandfillsInput | HistoryUpsertWithWhereUniqueWithoutLandfillsInput[]
    createMany?: HistoryCreateManyLandfillsInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutLandfillsInput | HistoryUpdateWithWhereUniqueWithoutLandfillsInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutLandfillsInput | HistoryUpdateManyWithWhereWithoutLandfillsInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutLandfillsNestedInput = {
    create?: XOR<TransactionsCreateWithoutLandfillsInput, TransactionsUncheckedCreateWithoutLandfillsInput> | TransactionsCreateWithoutLandfillsInput[] | TransactionsUncheckedCreateWithoutLandfillsInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutLandfillsInput | TransactionsCreateOrConnectWithoutLandfillsInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutLandfillsInput | TransactionsUpsertWithWhereUniqueWithoutLandfillsInput[]
    createMany?: TransactionsCreateManyLandfillsInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutLandfillsInput | TransactionsUpdateWithWhereUniqueWithoutLandfillsInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutLandfillsInput | TransactionsUpdateManyWithWhereWithoutLandfillsInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutLandfillsNestedInput = {
    create?: XOR<HistoryCreateWithoutLandfillsInput, HistoryUncheckedCreateWithoutLandfillsInput> | HistoryCreateWithoutLandfillsInput[] | HistoryUncheckedCreateWithoutLandfillsInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutLandfillsInput | HistoryCreateOrConnectWithoutLandfillsInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutLandfillsInput | HistoryUpsertWithWhereUniqueWithoutLandfillsInput[]
    createMany?: HistoryCreateManyLandfillsInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutLandfillsInput | HistoryUpdateWithWhereUniqueWithoutLandfillsInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutLandfillsInput | HistoryUpdateManyWithWhereWithoutLandfillsInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type CauseOnWaqfCreateNestedManyWithoutWaqfInput = {
    create?: XOR<CauseOnWaqfCreateWithoutWaqfInput, CauseOnWaqfUncheckedCreateWithoutWaqfInput> | CauseOnWaqfCreateWithoutWaqfInput[] | CauseOnWaqfUncheckedCreateWithoutWaqfInput[]
    connectOrCreate?: CauseOnWaqfCreateOrConnectWithoutWaqfInput | CauseOnWaqfCreateOrConnectWithoutWaqfInput[]
    createMany?: CauseOnWaqfCreateManyWaqfInputEnvelope
    connect?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
  }

  export type HistoryCreateNestedManyWithoutWaqfInput = {
    create?: XOR<HistoryCreateWithoutWaqfInput, HistoryUncheckedCreateWithoutWaqfInput> | HistoryCreateWithoutWaqfInput[] | HistoryUncheckedCreateWithoutWaqfInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutWaqfInput | HistoryCreateOrConnectWithoutWaqfInput[]
    createMany?: HistoryCreateManyWaqfInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type TransactionsCreateNestedManyWithoutWaqfInput = {
    create?: XOR<TransactionsCreateWithoutWaqfInput, TransactionsUncheckedCreateWithoutWaqfInput> | TransactionsCreateWithoutWaqfInput[] | TransactionsUncheckedCreateWithoutWaqfInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutWaqfInput | TransactionsCreateOrConnectWithoutWaqfInput[]
    createMany?: TransactionsCreateManyWaqfInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type CauseOnWaqfUncheckedCreateNestedManyWithoutWaqfInput = {
    create?: XOR<CauseOnWaqfCreateWithoutWaqfInput, CauseOnWaqfUncheckedCreateWithoutWaqfInput> | CauseOnWaqfCreateWithoutWaqfInput[] | CauseOnWaqfUncheckedCreateWithoutWaqfInput[]
    connectOrCreate?: CauseOnWaqfCreateOrConnectWithoutWaqfInput | CauseOnWaqfCreateOrConnectWithoutWaqfInput[]
    createMany?: CauseOnWaqfCreateManyWaqfInputEnvelope
    connect?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutWaqfInput = {
    create?: XOR<HistoryCreateWithoutWaqfInput, HistoryUncheckedCreateWithoutWaqfInput> | HistoryCreateWithoutWaqfInput[] | HistoryUncheckedCreateWithoutWaqfInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutWaqfInput | HistoryCreateOrConnectWithoutWaqfInput[]
    createMany?: HistoryCreateManyWaqfInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutWaqfInput = {
    create?: XOR<TransactionsCreateWithoutWaqfInput, TransactionsUncheckedCreateWithoutWaqfInput> | TransactionsCreateWithoutWaqfInput[] | TransactionsUncheckedCreateWithoutWaqfInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutWaqfInput | TransactionsCreateOrConnectWithoutWaqfInput[]
    createMany?: TransactionsCreateManyWaqfInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type CauseOnWaqfUpdateManyWithoutWaqfNestedInput = {
    create?: XOR<CauseOnWaqfCreateWithoutWaqfInput, CauseOnWaqfUncheckedCreateWithoutWaqfInput> | CauseOnWaqfCreateWithoutWaqfInput[] | CauseOnWaqfUncheckedCreateWithoutWaqfInput[]
    connectOrCreate?: CauseOnWaqfCreateOrConnectWithoutWaqfInput | CauseOnWaqfCreateOrConnectWithoutWaqfInput[]
    upsert?: CauseOnWaqfUpsertWithWhereUniqueWithoutWaqfInput | CauseOnWaqfUpsertWithWhereUniqueWithoutWaqfInput[]
    createMany?: CauseOnWaqfCreateManyWaqfInputEnvelope
    set?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
    disconnect?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
    delete?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
    connect?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
    update?: CauseOnWaqfUpdateWithWhereUniqueWithoutWaqfInput | CauseOnWaqfUpdateWithWhereUniqueWithoutWaqfInput[]
    updateMany?: CauseOnWaqfUpdateManyWithWhereWithoutWaqfInput | CauseOnWaqfUpdateManyWithWhereWithoutWaqfInput[]
    deleteMany?: CauseOnWaqfScalarWhereInput | CauseOnWaqfScalarWhereInput[]
  }

  export type HistoryUpdateManyWithoutWaqfNestedInput = {
    create?: XOR<HistoryCreateWithoutWaqfInput, HistoryUncheckedCreateWithoutWaqfInput> | HistoryCreateWithoutWaqfInput[] | HistoryUncheckedCreateWithoutWaqfInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutWaqfInput | HistoryCreateOrConnectWithoutWaqfInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutWaqfInput | HistoryUpsertWithWhereUniqueWithoutWaqfInput[]
    createMany?: HistoryCreateManyWaqfInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutWaqfInput | HistoryUpdateWithWhereUniqueWithoutWaqfInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutWaqfInput | HistoryUpdateManyWithWhereWithoutWaqfInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type TransactionsUpdateManyWithoutWaqfNestedInput = {
    create?: XOR<TransactionsCreateWithoutWaqfInput, TransactionsUncheckedCreateWithoutWaqfInput> | TransactionsCreateWithoutWaqfInput[] | TransactionsUncheckedCreateWithoutWaqfInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutWaqfInput | TransactionsCreateOrConnectWithoutWaqfInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutWaqfInput | TransactionsUpsertWithWhereUniqueWithoutWaqfInput[]
    createMany?: TransactionsCreateManyWaqfInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutWaqfInput | TransactionsUpdateWithWhereUniqueWithoutWaqfInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutWaqfInput | TransactionsUpdateManyWithWhereWithoutWaqfInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type CauseOnWaqfUncheckedUpdateManyWithoutWaqfNestedInput = {
    create?: XOR<CauseOnWaqfCreateWithoutWaqfInput, CauseOnWaqfUncheckedCreateWithoutWaqfInput> | CauseOnWaqfCreateWithoutWaqfInput[] | CauseOnWaqfUncheckedCreateWithoutWaqfInput[]
    connectOrCreate?: CauseOnWaqfCreateOrConnectWithoutWaqfInput | CauseOnWaqfCreateOrConnectWithoutWaqfInput[]
    upsert?: CauseOnWaqfUpsertWithWhereUniqueWithoutWaqfInput | CauseOnWaqfUpsertWithWhereUniqueWithoutWaqfInput[]
    createMany?: CauseOnWaqfCreateManyWaqfInputEnvelope
    set?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
    disconnect?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
    delete?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
    connect?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
    update?: CauseOnWaqfUpdateWithWhereUniqueWithoutWaqfInput | CauseOnWaqfUpdateWithWhereUniqueWithoutWaqfInput[]
    updateMany?: CauseOnWaqfUpdateManyWithWhereWithoutWaqfInput | CauseOnWaqfUpdateManyWithWhereWithoutWaqfInput[]
    deleteMany?: CauseOnWaqfScalarWhereInput | CauseOnWaqfScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutWaqfNestedInput = {
    create?: XOR<HistoryCreateWithoutWaqfInput, HistoryUncheckedCreateWithoutWaqfInput> | HistoryCreateWithoutWaqfInput[] | HistoryUncheckedCreateWithoutWaqfInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutWaqfInput | HistoryCreateOrConnectWithoutWaqfInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutWaqfInput | HistoryUpsertWithWhereUniqueWithoutWaqfInput[]
    createMany?: HistoryCreateManyWaqfInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutWaqfInput | HistoryUpdateWithWhereUniqueWithoutWaqfInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutWaqfInput | HistoryUpdateManyWithWhereWithoutWaqfInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutWaqfNestedInput = {
    create?: XOR<TransactionsCreateWithoutWaqfInput, TransactionsUncheckedCreateWithoutWaqfInput> | TransactionsCreateWithoutWaqfInput[] | TransactionsUncheckedCreateWithoutWaqfInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutWaqfInput | TransactionsCreateOrConnectWithoutWaqfInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutWaqfInput | TransactionsUpsertWithWhereUniqueWithoutWaqfInput[]
    createMany?: TransactionsCreateManyWaqfInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutWaqfInput | TransactionsUpdateWithWhereUniqueWithoutWaqfInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutWaqfInput | TransactionsUpdateManyWithWhereWithoutWaqfInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type CauseOnWaqfCreateNestedManyWithoutWaqfCauseInput = {
    create?: XOR<CauseOnWaqfCreateWithoutWaqfCauseInput, CauseOnWaqfUncheckedCreateWithoutWaqfCauseInput> | CauseOnWaqfCreateWithoutWaqfCauseInput[] | CauseOnWaqfUncheckedCreateWithoutWaqfCauseInput[]
    connectOrCreate?: CauseOnWaqfCreateOrConnectWithoutWaqfCauseInput | CauseOnWaqfCreateOrConnectWithoutWaqfCauseInput[]
    createMany?: CauseOnWaqfCreateManyWaqfCauseInputEnvelope
    connect?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
  }

  export type CauseOnWaqfUncheckedCreateNestedManyWithoutWaqfCauseInput = {
    create?: XOR<CauseOnWaqfCreateWithoutWaqfCauseInput, CauseOnWaqfUncheckedCreateWithoutWaqfCauseInput> | CauseOnWaqfCreateWithoutWaqfCauseInput[] | CauseOnWaqfUncheckedCreateWithoutWaqfCauseInput[]
    connectOrCreate?: CauseOnWaqfCreateOrConnectWithoutWaqfCauseInput | CauseOnWaqfCreateOrConnectWithoutWaqfCauseInput[]
    createMany?: CauseOnWaqfCreateManyWaqfCauseInputEnvelope
    connect?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
  }

  export type CauseOnWaqfUpdateManyWithoutWaqfCauseNestedInput = {
    create?: XOR<CauseOnWaqfCreateWithoutWaqfCauseInput, CauseOnWaqfUncheckedCreateWithoutWaqfCauseInput> | CauseOnWaqfCreateWithoutWaqfCauseInput[] | CauseOnWaqfUncheckedCreateWithoutWaqfCauseInput[]
    connectOrCreate?: CauseOnWaqfCreateOrConnectWithoutWaqfCauseInput | CauseOnWaqfCreateOrConnectWithoutWaqfCauseInput[]
    upsert?: CauseOnWaqfUpsertWithWhereUniqueWithoutWaqfCauseInput | CauseOnWaqfUpsertWithWhereUniqueWithoutWaqfCauseInput[]
    createMany?: CauseOnWaqfCreateManyWaqfCauseInputEnvelope
    set?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
    disconnect?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
    delete?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
    connect?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
    update?: CauseOnWaqfUpdateWithWhereUniqueWithoutWaqfCauseInput | CauseOnWaqfUpdateWithWhereUniqueWithoutWaqfCauseInput[]
    updateMany?: CauseOnWaqfUpdateManyWithWhereWithoutWaqfCauseInput | CauseOnWaqfUpdateManyWithWhereWithoutWaqfCauseInput[]
    deleteMany?: CauseOnWaqfScalarWhereInput | CauseOnWaqfScalarWhereInput[]
  }

  export type CauseOnWaqfUncheckedUpdateManyWithoutWaqfCauseNestedInput = {
    create?: XOR<CauseOnWaqfCreateWithoutWaqfCauseInput, CauseOnWaqfUncheckedCreateWithoutWaqfCauseInput> | CauseOnWaqfCreateWithoutWaqfCauseInput[] | CauseOnWaqfUncheckedCreateWithoutWaqfCauseInput[]
    connectOrCreate?: CauseOnWaqfCreateOrConnectWithoutWaqfCauseInput | CauseOnWaqfCreateOrConnectWithoutWaqfCauseInput[]
    upsert?: CauseOnWaqfUpsertWithWhereUniqueWithoutWaqfCauseInput | CauseOnWaqfUpsertWithWhereUniqueWithoutWaqfCauseInput[]
    createMany?: CauseOnWaqfCreateManyWaqfCauseInputEnvelope
    set?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
    disconnect?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
    delete?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
    connect?: CauseOnWaqfWhereUniqueInput | CauseOnWaqfWhereUniqueInput[]
    update?: CauseOnWaqfUpdateWithWhereUniqueWithoutWaqfCauseInput | CauseOnWaqfUpdateWithWhereUniqueWithoutWaqfCauseInput[]
    updateMany?: CauseOnWaqfUpdateManyWithWhereWithoutWaqfCauseInput | CauseOnWaqfUpdateManyWithWhereWithoutWaqfCauseInput[]
    deleteMany?: CauseOnWaqfScalarWhereInput | CauseOnWaqfScalarWhereInput[]
  }

  export type WaqfCauseCreateNestedOneWithoutCauseOnWaqfInput = {
    create?: XOR<WaqfCauseCreateWithoutCauseOnWaqfInput, WaqfCauseUncheckedCreateWithoutCauseOnWaqfInput>
    connectOrCreate?: WaqfCauseCreateOrConnectWithoutCauseOnWaqfInput
    connect?: WaqfCauseWhereUniqueInput
  }

  export type WaqfCreateNestedOneWithoutCauseOnWaqfInput = {
    create?: XOR<WaqfCreateWithoutCauseOnWaqfInput, WaqfUncheckedCreateWithoutCauseOnWaqfInput>
    connectOrCreate?: WaqfCreateOrConnectWithoutCauseOnWaqfInput
    connect?: WaqfWhereUniqueInput
  }

  export type WaqfCauseUpdateOneRequiredWithoutCauseOnWaqfNestedInput = {
    create?: XOR<WaqfCauseCreateWithoutCauseOnWaqfInput, WaqfCauseUncheckedCreateWithoutCauseOnWaqfInput>
    connectOrCreate?: WaqfCauseCreateOrConnectWithoutCauseOnWaqfInput
    upsert?: WaqfCauseUpsertWithoutCauseOnWaqfInput
    connect?: WaqfCauseWhereUniqueInput
    update?: XOR<XOR<WaqfCauseUpdateToOneWithWhereWithoutCauseOnWaqfInput, WaqfCauseUpdateWithoutCauseOnWaqfInput>, WaqfCauseUncheckedUpdateWithoutCauseOnWaqfInput>
  }

  export type WaqfUpdateOneRequiredWithoutCauseOnWaqfNestedInput = {
    create?: XOR<WaqfCreateWithoutCauseOnWaqfInput, WaqfUncheckedCreateWithoutCauseOnWaqfInput>
    connectOrCreate?: WaqfCreateOrConnectWithoutCauseOnWaqfInput
    upsert?: WaqfUpsertWithoutCauseOnWaqfInput
    connect?: WaqfWhereUniqueInput
    update?: XOR<XOR<WaqfUpdateToOneWithWhereWithoutCauseOnWaqfInput, WaqfUpdateWithoutCauseOnWaqfInput>, WaqfUncheckedUpdateWithoutCauseOnWaqfInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EntityCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<EntityCreateWithoutTransactionsInput, EntityUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: EntityCreateOrConnectWithoutTransactionsInput
    connect?: EntityWhereUniqueInput
  }

  export type WaqfCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<WaqfCreateWithoutTransactionsInput, WaqfUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: WaqfCreateOrConnectWithoutTransactionsInput
    connect?: WaqfWhereUniqueInput
  }

  export type LandfillsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<LandfillsCreateWithoutTransactionsInput, LandfillsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: LandfillsCreateOrConnectWithoutTransactionsInput
    connect?: LandfillsWhereUniqueInput
  }

  export type ScreenerCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ScreenerCreateWithoutTransactionsInput, ScreenerUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ScreenerCreateOrConnectWithoutTransactionsInput
    connect?: ScreenerWhereUniqueInput
  }

  export type TransformerCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<TransformerCreateWithoutTransactionsInput, TransformerUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TransformerCreateOrConnectWithoutTransactionsInput
    connect?: TransformerWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type EntityUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<EntityCreateWithoutTransactionsInput, EntityUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: EntityCreateOrConnectWithoutTransactionsInput
    upsert?: EntityUpsertWithoutTransactionsInput
    disconnect?: EntityWhereInput | boolean
    delete?: EntityWhereInput | boolean
    connect?: EntityWhereUniqueInput
    update?: XOR<XOR<EntityUpdateToOneWithWhereWithoutTransactionsInput, EntityUpdateWithoutTransactionsInput>, EntityUncheckedUpdateWithoutTransactionsInput>
  }

  export type WaqfUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<WaqfCreateWithoutTransactionsInput, WaqfUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: WaqfCreateOrConnectWithoutTransactionsInput
    upsert?: WaqfUpsertWithoutTransactionsInput
    disconnect?: WaqfWhereInput | boolean
    delete?: WaqfWhereInput | boolean
    connect?: WaqfWhereUniqueInput
    update?: XOR<XOR<WaqfUpdateToOneWithWhereWithoutTransactionsInput, WaqfUpdateWithoutTransactionsInput>, WaqfUncheckedUpdateWithoutTransactionsInput>
  }

  export type LandfillsUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<LandfillsCreateWithoutTransactionsInput, LandfillsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: LandfillsCreateOrConnectWithoutTransactionsInput
    upsert?: LandfillsUpsertWithoutTransactionsInput
    disconnect?: LandfillsWhereInput | boolean
    delete?: LandfillsWhereInput | boolean
    connect?: LandfillsWhereUniqueInput
    update?: XOR<XOR<LandfillsUpdateToOneWithWhereWithoutTransactionsInput, LandfillsUpdateWithoutTransactionsInput>, LandfillsUncheckedUpdateWithoutTransactionsInput>
  }

  export type ScreenerUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<ScreenerCreateWithoutTransactionsInput, ScreenerUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ScreenerCreateOrConnectWithoutTransactionsInput
    upsert?: ScreenerUpsertWithoutTransactionsInput
    disconnect?: ScreenerWhereInput | boolean
    delete?: ScreenerWhereInput | boolean
    connect?: ScreenerWhereUniqueInput
    update?: XOR<XOR<ScreenerUpdateToOneWithWhereWithoutTransactionsInput, ScreenerUpdateWithoutTransactionsInput>, ScreenerUncheckedUpdateWithoutTransactionsInput>
  }

  export type TransformerUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<TransformerCreateWithoutTransactionsInput, TransformerUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TransformerCreateOrConnectWithoutTransactionsInput
    upsert?: TransformerUpsertWithoutTransactionsInput
    disconnect?: TransformerWhereInput | boolean
    delete?: TransformerWhereInput | boolean
    connect?: TransformerWhereUniqueInput
    update?: XOR<XOR<TransformerUpdateToOneWithWhereWithoutTransactionsInput, TransformerUpdateWithoutTransactionsInput>, TransformerUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutHistoryInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type EntityCreateNestedOneWithoutHistoryInput = {
    create?: XOR<EntityCreateWithoutHistoryInput, EntityUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: EntityCreateOrConnectWithoutHistoryInput
    connect?: EntityWhereUniqueInput
  }

  export type WaqfCreateNestedOneWithoutHistoryInput = {
    create?: XOR<WaqfCreateWithoutHistoryInput, WaqfUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: WaqfCreateOrConnectWithoutHistoryInput
    connect?: WaqfWhereUniqueInput
  }

  export type LandfillsCreateNestedOneWithoutHistoryInput = {
    create?: XOR<LandfillsCreateWithoutHistoryInput, LandfillsUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: LandfillsCreateOrConnectWithoutHistoryInput
    connect?: LandfillsWhereUniqueInput
  }

  export type ScreenerCreateNestedOneWithoutHistoryInput = {
    create?: XOR<ScreenerCreateWithoutHistoryInput, ScreenerUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: ScreenerCreateOrConnectWithoutHistoryInput
    connect?: ScreenerWhereUniqueInput
  }

  export type TransformerCreateNestedOneWithoutHistoryInput = {
    create?: XOR<TransformerCreateWithoutHistoryInput, TransformerUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: TransformerCreateOrConnectWithoutHistoryInput
    connect?: TransformerWhereUniqueInput
  }

  export type UserUpdateOneWithoutHistoryNestedInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    upsert?: UserUpsertWithoutHistoryInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoryInput, UserUpdateWithoutHistoryInput>, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type EntityUpdateOneWithoutHistoryNestedInput = {
    create?: XOR<EntityCreateWithoutHistoryInput, EntityUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: EntityCreateOrConnectWithoutHistoryInput
    upsert?: EntityUpsertWithoutHistoryInput
    disconnect?: EntityWhereInput | boolean
    delete?: EntityWhereInput | boolean
    connect?: EntityWhereUniqueInput
    update?: XOR<XOR<EntityUpdateToOneWithWhereWithoutHistoryInput, EntityUpdateWithoutHistoryInput>, EntityUncheckedUpdateWithoutHistoryInput>
  }

  export type WaqfUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<WaqfCreateWithoutHistoryInput, WaqfUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: WaqfCreateOrConnectWithoutHistoryInput
    upsert?: WaqfUpsertWithoutHistoryInput
    connect?: WaqfWhereUniqueInput
    update?: XOR<XOR<WaqfUpdateToOneWithWhereWithoutHistoryInput, WaqfUpdateWithoutHistoryInput>, WaqfUncheckedUpdateWithoutHistoryInput>
  }

  export type LandfillsUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<LandfillsCreateWithoutHistoryInput, LandfillsUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: LandfillsCreateOrConnectWithoutHistoryInput
    upsert?: LandfillsUpsertWithoutHistoryInput
    connect?: LandfillsWhereUniqueInput
    update?: XOR<XOR<LandfillsUpdateToOneWithWhereWithoutHistoryInput, LandfillsUpdateWithoutHistoryInput>, LandfillsUncheckedUpdateWithoutHistoryInput>
  }

  export type ScreenerUpdateOneWithoutHistoryNestedInput = {
    create?: XOR<ScreenerCreateWithoutHistoryInput, ScreenerUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: ScreenerCreateOrConnectWithoutHistoryInput
    upsert?: ScreenerUpsertWithoutHistoryInput
    disconnect?: ScreenerWhereInput | boolean
    delete?: ScreenerWhereInput | boolean
    connect?: ScreenerWhereUniqueInput
    update?: XOR<XOR<ScreenerUpdateToOneWithWhereWithoutHistoryInput, ScreenerUpdateWithoutHistoryInput>, ScreenerUncheckedUpdateWithoutHistoryInput>
  }

  export type TransformerUpdateOneWithoutHistoryNestedInput = {
    create?: XOR<TransformerCreateWithoutHistoryInput, TransformerUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: TransformerCreateOrConnectWithoutHistoryInput
    upsert?: TransformerUpsertWithoutHistoryInput
    disconnect?: TransformerWhereInput | boolean
    delete?: TransformerWhereInput | boolean
    connect?: TransformerWhereUniqueInput
    update?: XOR<XOR<TransformerUpdateToOneWithWhereWithoutHistoryInput, TransformerUpdateWithoutHistoryInput>, TransformerUncheckedUpdateWithoutHistoryInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TransactionsCreateWithoutUserInput = {
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    Entity?: EntityCreateNestedOneWithoutTransactionsInput
    Waqf?: WaqfCreateNestedOneWithoutTransactionsInput
    Landfills?: LandfillsCreateNestedOneWithoutTransactionsInput
    Screener?: ScreenerCreateNestedOneWithoutTransactionsInput
    Transformer?: TransformerCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutUserInput = {
    id?: number
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    EntityID?: number | null
    WaqfID?: number | null
    LandfillsID?: number | null
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type TransactionsCreateOrConnectWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput>
  }

  export type TransactionsCreateManyUserInputEnvelope = {
    data: TransactionsCreateManyUserInput | TransactionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HistoryCreateWithoutUserInput = {
    historyDate: Date | string
    historyDescription?: string | null
    totalTransferred: number
    Entity?: EntityCreateNestedOneWithoutHistoryInput
    Waqf: WaqfCreateNestedOneWithoutHistoryInput
    Landfills: LandfillsCreateNestedOneWithoutHistoryInput
    Screener?: ScreenerCreateNestedOneWithoutHistoryInput
    Transformer?: TransformerCreateNestedOneWithoutHistoryInput
  }

  export type HistoryUncheckedCreateWithoutUserInput = {
    id?: number
    historyDate: Date | string
    historyDescription?: string | null
    EntityID?: number | null
    WaqfName: string
    totalTransferred: number
    LandfillName: string
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type HistoryCreateOrConnectWithoutUserInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput>
  }

  export type HistoryCreateManyUserInputEnvelope = {
    data: HistoryCreateManyUserInput | HistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutUserInput, TransactionsUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutUserInput, TransactionsUncheckedUpdateWithoutUserInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutUserInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionsScalarWhereInput = {
    AND?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    OR?: TransactionsScalarWhereInput[]
    NOT?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    id?: IntFilter<"Transactions"> | number
    transactionDate?: DateTimeFilter<"Transactions"> | Date | string
    transactionAmount?: FloatFilter<"Transactions"> | number
    transactionType?: StringFilter<"Transactions"> | string
    transactionStatus?: StringFilter<"Transactions"> | string
    transactionDescription?: StringNullableFilter<"Transactions"> | string | null
    transactionDeposited?: BoolFilter<"Transactions"> | boolean
    transactionScreened?: BoolFilter<"Transactions"> | boolean
    totalScreened?: IntFilter<"Transactions"> | number
    transactionTransformed?: BoolFilter<"Transactions"> | boolean
    transactionTransfered?: BoolFilter<"Transactions"> | boolean
    UserID?: IntNullableFilter<"Transactions"> | number | null
    EntityID?: IntNullableFilter<"Transactions"> | number | null
    WaqfID?: IntNullableFilter<"Transactions"> | number | null
    LandfillsID?: IntNullableFilter<"Transactions"> | number | null
    ScreenerID?: IntNullableFilter<"Transactions"> | number | null
    TransformerID?: IntNullableFilter<"Transactions"> | number | null
  }

  export type HistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutUserInput, HistoryUncheckedUpdateWithoutUserInput>
    create: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutUserInput, HistoryUncheckedUpdateWithoutUserInput>
  }

  export type HistoryUpdateManyWithWhereWithoutUserInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type HistoryScalarWhereInput = {
    AND?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    OR?: HistoryScalarWhereInput[]
    NOT?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    id?: IntFilter<"History"> | number
    historyDate?: DateTimeFilter<"History"> | Date | string
    historyDescription?: StringNullableFilter<"History"> | string | null
    UserID?: IntNullableFilter<"History"> | number | null
    EntityID?: IntNullableFilter<"History"> | number | null
    WaqfName?: StringFilter<"History"> | string
    totalTransferred?: IntFilter<"History"> | number
    LandfillName?: StringFilter<"History"> | string
    ScreenerID?: IntNullableFilter<"History"> | number | null
    TransformerID?: IntNullableFilter<"History"> | number | null
  }

  export type HistoryCreateWithoutEntityInput = {
    historyDate: Date | string
    historyDescription?: string | null
    totalTransferred: number
    User?: UserCreateNestedOneWithoutHistoryInput
    Waqf: WaqfCreateNestedOneWithoutHistoryInput
    Landfills: LandfillsCreateNestedOneWithoutHistoryInput
    Screener?: ScreenerCreateNestedOneWithoutHistoryInput
    Transformer?: TransformerCreateNestedOneWithoutHistoryInput
  }

  export type HistoryUncheckedCreateWithoutEntityInput = {
    id?: number
    historyDate: Date | string
    historyDescription?: string | null
    UserID?: number | null
    WaqfName: string
    totalTransferred: number
    LandfillName: string
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type HistoryCreateOrConnectWithoutEntityInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutEntityInput, HistoryUncheckedCreateWithoutEntityInput>
  }

  export type HistoryCreateManyEntityInputEnvelope = {
    data: HistoryCreateManyEntityInput | HistoryCreateManyEntityInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsCreateWithoutEntityInput = {
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    User?: UserCreateNestedOneWithoutTransactionsInput
    Waqf?: WaqfCreateNestedOneWithoutTransactionsInput
    Landfills?: LandfillsCreateNestedOneWithoutTransactionsInput
    Screener?: ScreenerCreateNestedOneWithoutTransactionsInput
    Transformer?: TransformerCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutEntityInput = {
    id?: number
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    UserID?: number | null
    WaqfID?: number | null
    LandfillsID?: number | null
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type TransactionsCreateOrConnectWithoutEntityInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutEntityInput, TransactionsUncheckedCreateWithoutEntityInput>
  }

  export type TransactionsCreateManyEntityInputEnvelope = {
    data: TransactionsCreateManyEntityInput | TransactionsCreateManyEntityInput[]
    skipDuplicates?: boolean
  }

  export type HistoryUpsertWithWhereUniqueWithoutEntityInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutEntityInput, HistoryUncheckedUpdateWithoutEntityInput>
    create: XOR<HistoryCreateWithoutEntityInput, HistoryUncheckedCreateWithoutEntityInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutEntityInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutEntityInput, HistoryUncheckedUpdateWithoutEntityInput>
  }

  export type HistoryUpdateManyWithWhereWithoutEntityInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutEntityInput>
  }

  export type TransactionsUpsertWithWhereUniqueWithoutEntityInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutEntityInput, TransactionsUncheckedUpdateWithoutEntityInput>
    create: XOR<TransactionsCreateWithoutEntityInput, TransactionsUncheckedCreateWithoutEntityInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutEntityInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutEntityInput, TransactionsUncheckedUpdateWithoutEntityInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutEntityInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutEntityInput>
  }

  export type LandfillsCreateWithoutScreenerInput = {
    landfillName: string
    landfillAddress?: string | null
    landfillPhoneNumber?: string | null
    imageUri?: string | null
    landfillArea: landfillAreaCreateNestedOneWithoutLandfillsInput
    Transformer?: TransformerCreateNestedOneWithoutLandfillsInput
    Transactions?: TransactionsCreateNestedManyWithoutLandfillsInput
    History?: HistoryCreateNestedManyWithoutLandfillsInput
  }

  export type LandfillsUncheckedCreateWithoutScreenerInput = {
    id?: number
    landfillName: string
    landfillAreaName: string
    landfillAddress?: string | null
    landfillPhoneNumber?: string | null
    imageUri?: string | null
    TransformerID?: number | null
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutLandfillsInput
    History?: HistoryUncheckedCreateNestedManyWithoutLandfillsInput
  }

  export type LandfillsCreateOrConnectWithoutScreenerInput = {
    where: LandfillsWhereUniqueInput
    create: XOR<LandfillsCreateWithoutScreenerInput, LandfillsUncheckedCreateWithoutScreenerInput>
  }

  export type LandfillsCreateManyScreenerInputEnvelope = {
    data: LandfillsCreateManyScreenerInput | LandfillsCreateManyScreenerInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsCreateWithoutScreenerInput = {
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    User?: UserCreateNestedOneWithoutTransactionsInput
    Entity?: EntityCreateNestedOneWithoutTransactionsInput
    Waqf?: WaqfCreateNestedOneWithoutTransactionsInput
    Landfills?: LandfillsCreateNestedOneWithoutTransactionsInput
    Transformer?: TransformerCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutScreenerInput = {
    id?: number
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    UserID?: number | null
    EntityID?: number | null
    WaqfID?: number | null
    LandfillsID?: number | null
    TransformerID?: number | null
  }

  export type TransactionsCreateOrConnectWithoutScreenerInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutScreenerInput, TransactionsUncheckedCreateWithoutScreenerInput>
  }

  export type TransactionsCreateManyScreenerInputEnvelope = {
    data: TransactionsCreateManyScreenerInput | TransactionsCreateManyScreenerInput[]
    skipDuplicates?: boolean
  }

  export type HistoryCreateWithoutScreenerInput = {
    historyDate: Date | string
    historyDescription?: string | null
    totalTransferred: number
    User?: UserCreateNestedOneWithoutHistoryInput
    Entity?: EntityCreateNestedOneWithoutHistoryInput
    Waqf: WaqfCreateNestedOneWithoutHistoryInput
    Landfills: LandfillsCreateNestedOneWithoutHistoryInput
    Transformer?: TransformerCreateNestedOneWithoutHistoryInput
  }

  export type HistoryUncheckedCreateWithoutScreenerInput = {
    id?: number
    historyDate: Date | string
    historyDescription?: string | null
    UserID?: number | null
    EntityID?: number | null
    WaqfName: string
    totalTransferred: number
    LandfillName: string
    TransformerID?: number | null
  }

  export type HistoryCreateOrConnectWithoutScreenerInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutScreenerInput, HistoryUncheckedCreateWithoutScreenerInput>
  }

  export type HistoryCreateManyScreenerInputEnvelope = {
    data: HistoryCreateManyScreenerInput | HistoryCreateManyScreenerInput[]
    skipDuplicates?: boolean
  }

  export type LandfillsUpsertWithWhereUniqueWithoutScreenerInput = {
    where: LandfillsWhereUniqueInput
    update: XOR<LandfillsUpdateWithoutScreenerInput, LandfillsUncheckedUpdateWithoutScreenerInput>
    create: XOR<LandfillsCreateWithoutScreenerInput, LandfillsUncheckedCreateWithoutScreenerInput>
  }

  export type LandfillsUpdateWithWhereUniqueWithoutScreenerInput = {
    where: LandfillsWhereUniqueInput
    data: XOR<LandfillsUpdateWithoutScreenerInput, LandfillsUncheckedUpdateWithoutScreenerInput>
  }

  export type LandfillsUpdateManyWithWhereWithoutScreenerInput = {
    where: LandfillsScalarWhereInput
    data: XOR<LandfillsUpdateManyMutationInput, LandfillsUncheckedUpdateManyWithoutScreenerInput>
  }

  export type LandfillsScalarWhereInput = {
    AND?: LandfillsScalarWhereInput | LandfillsScalarWhereInput[]
    OR?: LandfillsScalarWhereInput[]
    NOT?: LandfillsScalarWhereInput | LandfillsScalarWhereInput[]
    id?: IntFilter<"Landfills"> | number
    landfillName?: StringFilter<"Landfills"> | string
    landfillAreaName?: StringFilter<"Landfills"> | string
    landfillAddress?: StringNullableFilter<"Landfills"> | string | null
    landfillPhoneNumber?: StringNullableFilter<"Landfills"> | string | null
    imageUri?: StringNullableFilter<"Landfills"> | string | null
    TransformerID?: IntNullableFilter<"Landfills"> | number | null
    ScreenerID?: IntNullableFilter<"Landfills"> | number | null
  }

  export type TransactionsUpsertWithWhereUniqueWithoutScreenerInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutScreenerInput, TransactionsUncheckedUpdateWithoutScreenerInput>
    create: XOR<TransactionsCreateWithoutScreenerInput, TransactionsUncheckedCreateWithoutScreenerInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutScreenerInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutScreenerInput, TransactionsUncheckedUpdateWithoutScreenerInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutScreenerInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutScreenerInput>
  }

  export type HistoryUpsertWithWhereUniqueWithoutScreenerInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutScreenerInput, HistoryUncheckedUpdateWithoutScreenerInput>
    create: XOR<HistoryCreateWithoutScreenerInput, HistoryUncheckedCreateWithoutScreenerInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutScreenerInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutScreenerInput, HistoryUncheckedUpdateWithoutScreenerInput>
  }

  export type HistoryUpdateManyWithWhereWithoutScreenerInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutScreenerInput>
  }

  export type LandfillsCreateWithoutTransformerInput = {
    landfillName: string
    landfillAddress?: string | null
    landfillPhoneNumber?: string | null
    imageUri?: string | null
    landfillArea: landfillAreaCreateNestedOneWithoutLandfillsInput
    Screener?: ScreenerCreateNestedOneWithoutLandfillsInput
    Transactions?: TransactionsCreateNestedManyWithoutLandfillsInput
    History?: HistoryCreateNestedManyWithoutLandfillsInput
  }

  export type LandfillsUncheckedCreateWithoutTransformerInput = {
    id?: number
    landfillName: string
    landfillAreaName: string
    landfillAddress?: string | null
    landfillPhoneNumber?: string | null
    imageUri?: string | null
    ScreenerID?: number | null
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutLandfillsInput
    History?: HistoryUncheckedCreateNestedManyWithoutLandfillsInput
  }

  export type LandfillsCreateOrConnectWithoutTransformerInput = {
    where: LandfillsWhereUniqueInput
    create: XOR<LandfillsCreateWithoutTransformerInput, LandfillsUncheckedCreateWithoutTransformerInput>
  }

  export type LandfillsCreateManyTransformerInputEnvelope = {
    data: LandfillsCreateManyTransformerInput | LandfillsCreateManyTransformerInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsCreateWithoutTransformerInput = {
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    User?: UserCreateNestedOneWithoutTransactionsInput
    Entity?: EntityCreateNestedOneWithoutTransactionsInput
    Waqf?: WaqfCreateNestedOneWithoutTransactionsInput
    Landfills?: LandfillsCreateNestedOneWithoutTransactionsInput
    Screener?: ScreenerCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutTransformerInput = {
    id?: number
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    UserID?: number | null
    EntityID?: number | null
    WaqfID?: number | null
    LandfillsID?: number | null
    ScreenerID?: number | null
  }

  export type TransactionsCreateOrConnectWithoutTransformerInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutTransformerInput, TransactionsUncheckedCreateWithoutTransformerInput>
  }

  export type TransactionsCreateManyTransformerInputEnvelope = {
    data: TransactionsCreateManyTransformerInput | TransactionsCreateManyTransformerInput[]
    skipDuplicates?: boolean
  }

  export type HistoryCreateWithoutTransformerInput = {
    historyDate: Date | string
    historyDescription?: string | null
    totalTransferred: number
    User?: UserCreateNestedOneWithoutHistoryInput
    Entity?: EntityCreateNestedOneWithoutHistoryInput
    Waqf: WaqfCreateNestedOneWithoutHistoryInput
    Landfills: LandfillsCreateNestedOneWithoutHistoryInput
    Screener?: ScreenerCreateNestedOneWithoutHistoryInput
  }

  export type HistoryUncheckedCreateWithoutTransformerInput = {
    id?: number
    historyDate: Date | string
    historyDescription?: string | null
    UserID?: number | null
    EntityID?: number | null
    WaqfName: string
    totalTransferred: number
    LandfillName: string
    ScreenerID?: number | null
  }

  export type HistoryCreateOrConnectWithoutTransformerInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutTransformerInput, HistoryUncheckedCreateWithoutTransformerInput>
  }

  export type HistoryCreateManyTransformerInputEnvelope = {
    data: HistoryCreateManyTransformerInput | HistoryCreateManyTransformerInput[]
    skipDuplicates?: boolean
  }

  export type LandfillsUpsertWithWhereUniqueWithoutTransformerInput = {
    where: LandfillsWhereUniqueInput
    update: XOR<LandfillsUpdateWithoutTransformerInput, LandfillsUncheckedUpdateWithoutTransformerInput>
    create: XOR<LandfillsCreateWithoutTransformerInput, LandfillsUncheckedCreateWithoutTransformerInput>
  }

  export type LandfillsUpdateWithWhereUniqueWithoutTransformerInput = {
    where: LandfillsWhereUniqueInput
    data: XOR<LandfillsUpdateWithoutTransformerInput, LandfillsUncheckedUpdateWithoutTransformerInput>
  }

  export type LandfillsUpdateManyWithWhereWithoutTransformerInput = {
    where: LandfillsScalarWhereInput
    data: XOR<LandfillsUpdateManyMutationInput, LandfillsUncheckedUpdateManyWithoutTransformerInput>
  }

  export type TransactionsUpsertWithWhereUniqueWithoutTransformerInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutTransformerInput, TransactionsUncheckedUpdateWithoutTransformerInput>
    create: XOR<TransactionsCreateWithoutTransformerInput, TransactionsUncheckedCreateWithoutTransformerInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutTransformerInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutTransformerInput, TransactionsUncheckedUpdateWithoutTransformerInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutTransformerInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutTransformerInput>
  }

  export type HistoryUpsertWithWhereUniqueWithoutTransformerInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutTransformerInput, HistoryUncheckedUpdateWithoutTransformerInput>
    create: XOR<HistoryCreateWithoutTransformerInput, HistoryUncheckedCreateWithoutTransformerInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutTransformerInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutTransformerInput, HistoryUncheckedUpdateWithoutTransformerInput>
  }

  export type HistoryUpdateManyWithWhereWithoutTransformerInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutTransformerInput>
  }

  export type LandfillsCreateWithoutLandfillAreaInput = {
    landfillName: string
    landfillAddress?: string | null
    landfillPhoneNumber?: string | null
    imageUri?: string | null
    Transformer?: TransformerCreateNestedOneWithoutLandfillsInput
    Screener?: ScreenerCreateNestedOneWithoutLandfillsInput
    Transactions?: TransactionsCreateNestedManyWithoutLandfillsInput
    History?: HistoryCreateNestedManyWithoutLandfillsInput
  }

  export type LandfillsUncheckedCreateWithoutLandfillAreaInput = {
    id?: number
    landfillName: string
    landfillAddress?: string | null
    landfillPhoneNumber?: string | null
    imageUri?: string | null
    TransformerID?: number | null
    ScreenerID?: number | null
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutLandfillsInput
    History?: HistoryUncheckedCreateNestedManyWithoutLandfillsInput
  }

  export type LandfillsCreateOrConnectWithoutLandfillAreaInput = {
    where: LandfillsWhereUniqueInput
    create: XOR<LandfillsCreateWithoutLandfillAreaInput, LandfillsUncheckedCreateWithoutLandfillAreaInput>
  }

  export type LandfillsCreateManyLandfillAreaInputEnvelope = {
    data: LandfillsCreateManyLandfillAreaInput | LandfillsCreateManyLandfillAreaInput[]
    skipDuplicates?: boolean
  }

  export type LandfillsUpsertWithWhereUniqueWithoutLandfillAreaInput = {
    where: LandfillsWhereUniqueInput
    update: XOR<LandfillsUpdateWithoutLandfillAreaInput, LandfillsUncheckedUpdateWithoutLandfillAreaInput>
    create: XOR<LandfillsCreateWithoutLandfillAreaInput, LandfillsUncheckedCreateWithoutLandfillAreaInput>
  }

  export type LandfillsUpdateWithWhereUniqueWithoutLandfillAreaInput = {
    where: LandfillsWhereUniqueInput
    data: XOR<LandfillsUpdateWithoutLandfillAreaInput, LandfillsUncheckedUpdateWithoutLandfillAreaInput>
  }

  export type LandfillsUpdateManyWithWhereWithoutLandfillAreaInput = {
    where: LandfillsScalarWhereInput
    data: XOR<LandfillsUpdateManyMutationInput, LandfillsUncheckedUpdateManyWithoutLandfillAreaInput>
  }

  export type landfillAreaCreateWithoutLandfillsInput = {
    location: string
  }

  export type landfillAreaUncheckedCreateWithoutLandfillsInput = {
    id?: number
    location: string
  }

  export type landfillAreaCreateOrConnectWithoutLandfillsInput = {
    where: landfillAreaWhereUniqueInput
    create: XOR<landfillAreaCreateWithoutLandfillsInput, landfillAreaUncheckedCreateWithoutLandfillsInput>
  }

  export type TransformerCreateWithoutLandfillsInput = {
    username?: string | null
    password?: string | null
    name: string
    email: string
    phoneNumber: string
    Transactions?: TransactionsCreateNestedManyWithoutTransformerInput
    History?: HistoryCreateNestedManyWithoutTransformerInput
  }

  export type TransformerUncheckedCreateWithoutLandfillsInput = {
    id?: number
    username?: string | null
    password?: string | null
    name: string
    email: string
    phoneNumber: string
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutTransformerInput
    History?: HistoryUncheckedCreateNestedManyWithoutTransformerInput
  }

  export type TransformerCreateOrConnectWithoutLandfillsInput = {
    where: TransformerWhereUniqueInput
    create: XOR<TransformerCreateWithoutLandfillsInput, TransformerUncheckedCreateWithoutLandfillsInput>
  }

  export type ScreenerCreateWithoutLandfillsInput = {
    username?: string | null
    password?: string | null
    name: string
    email: string
    phoneNumber: string
    Transactions?: TransactionsCreateNestedManyWithoutScreenerInput
    History?: HistoryCreateNestedManyWithoutScreenerInput
  }

  export type ScreenerUncheckedCreateWithoutLandfillsInput = {
    id?: number
    username?: string | null
    password?: string | null
    name: string
    email: string
    phoneNumber: string
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutScreenerInput
    History?: HistoryUncheckedCreateNestedManyWithoutScreenerInput
  }

  export type ScreenerCreateOrConnectWithoutLandfillsInput = {
    where: ScreenerWhereUniqueInput
    create: XOR<ScreenerCreateWithoutLandfillsInput, ScreenerUncheckedCreateWithoutLandfillsInput>
  }

  export type TransactionsCreateWithoutLandfillsInput = {
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    User?: UserCreateNestedOneWithoutTransactionsInput
    Entity?: EntityCreateNestedOneWithoutTransactionsInput
    Waqf?: WaqfCreateNestedOneWithoutTransactionsInput
    Screener?: ScreenerCreateNestedOneWithoutTransactionsInput
    Transformer?: TransformerCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutLandfillsInput = {
    id?: number
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    UserID?: number | null
    EntityID?: number | null
    WaqfID?: number | null
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type TransactionsCreateOrConnectWithoutLandfillsInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutLandfillsInput, TransactionsUncheckedCreateWithoutLandfillsInput>
  }

  export type TransactionsCreateManyLandfillsInputEnvelope = {
    data: TransactionsCreateManyLandfillsInput | TransactionsCreateManyLandfillsInput[]
    skipDuplicates?: boolean
  }

  export type HistoryCreateWithoutLandfillsInput = {
    historyDate: Date | string
    historyDescription?: string | null
    totalTransferred: number
    User?: UserCreateNestedOneWithoutHistoryInput
    Entity?: EntityCreateNestedOneWithoutHistoryInput
    Waqf: WaqfCreateNestedOneWithoutHistoryInput
    Screener?: ScreenerCreateNestedOneWithoutHistoryInput
    Transformer?: TransformerCreateNestedOneWithoutHistoryInput
  }

  export type HistoryUncheckedCreateWithoutLandfillsInput = {
    id?: number
    historyDate: Date | string
    historyDescription?: string | null
    UserID?: number | null
    EntityID?: number | null
    WaqfName: string
    totalTransferred: number
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type HistoryCreateOrConnectWithoutLandfillsInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutLandfillsInput, HistoryUncheckedCreateWithoutLandfillsInput>
  }

  export type HistoryCreateManyLandfillsInputEnvelope = {
    data: HistoryCreateManyLandfillsInput | HistoryCreateManyLandfillsInput[]
    skipDuplicates?: boolean
  }

  export type landfillAreaUpsertWithoutLandfillsInput = {
    update: XOR<landfillAreaUpdateWithoutLandfillsInput, landfillAreaUncheckedUpdateWithoutLandfillsInput>
    create: XOR<landfillAreaCreateWithoutLandfillsInput, landfillAreaUncheckedCreateWithoutLandfillsInput>
    where?: landfillAreaWhereInput
  }

  export type landfillAreaUpdateToOneWithWhereWithoutLandfillsInput = {
    where?: landfillAreaWhereInput
    data: XOR<landfillAreaUpdateWithoutLandfillsInput, landfillAreaUncheckedUpdateWithoutLandfillsInput>
  }

  export type landfillAreaUpdateWithoutLandfillsInput = {
    location?: StringFieldUpdateOperationsInput | string
  }

  export type landfillAreaUncheckedUpdateWithoutLandfillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
  }

  export type TransformerUpsertWithoutLandfillsInput = {
    update: XOR<TransformerUpdateWithoutLandfillsInput, TransformerUncheckedUpdateWithoutLandfillsInput>
    create: XOR<TransformerCreateWithoutLandfillsInput, TransformerUncheckedCreateWithoutLandfillsInput>
    where?: TransformerWhereInput
  }

  export type TransformerUpdateToOneWithWhereWithoutLandfillsInput = {
    where?: TransformerWhereInput
    data: XOR<TransformerUpdateWithoutLandfillsInput, TransformerUncheckedUpdateWithoutLandfillsInput>
  }

  export type TransformerUpdateWithoutLandfillsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    Transactions?: TransactionsUpdateManyWithoutTransformerNestedInput
    History?: HistoryUpdateManyWithoutTransformerNestedInput
  }

  export type TransformerUncheckedUpdateWithoutLandfillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    Transactions?: TransactionsUncheckedUpdateManyWithoutTransformerNestedInput
    History?: HistoryUncheckedUpdateManyWithoutTransformerNestedInput
  }

  export type ScreenerUpsertWithoutLandfillsInput = {
    update: XOR<ScreenerUpdateWithoutLandfillsInput, ScreenerUncheckedUpdateWithoutLandfillsInput>
    create: XOR<ScreenerCreateWithoutLandfillsInput, ScreenerUncheckedCreateWithoutLandfillsInput>
    where?: ScreenerWhereInput
  }

  export type ScreenerUpdateToOneWithWhereWithoutLandfillsInput = {
    where?: ScreenerWhereInput
    data: XOR<ScreenerUpdateWithoutLandfillsInput, ScreenerUncheckedUpdateWithoutLandfillsInput>
  }

  export type ScreenerUpdateWithoutLandfillsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    Transactions?: TransactionsUpdateManyWithoutScreenerNestedInput
    History?: HistoryUpdateManyWithoutScreenerNestedInput
  }

  export type ScreenerUncheckedUpdateWithoutLandfillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    Transactions?: TransactionsUncheckedUpdateManyWithoutScreenerNestedInput
    History?: HistoryUncheckedUpdateManyWithoutScreenerNestedInput
  }

  export type TransactionsUpsertWithWhereUniqueWithoutLandfillsInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutLandfillsInput, TransactionsUncheckedUpdateWithoutLandfillsInput>
    create: XOR<TransactionsCreateWithoutLandfillsInput, TransactionsUncheckedCreateWithoutLandfillsInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutLandfillsInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutLandfillsInput, TransactionsUncheckedUpdateWithoutLandfillsInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutLandfillsInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutLandfillsInput>
  }

  export type HistoryUpsertWithWhereUniqueWithoutLandfillsInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutLandfillsInput, HistoryUncheckedUpdateWithoutLandfillsInput>
    create: XOR<HistoryCreateWithoutLandfillsInput, HistoryUncheckedCreateWithoutLandfillsInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutLandfillsInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutLandfillsInput, HistoryUncheckedUpdateWithoutLandfillsInput>
  }

  export type HistoryUpdateManyWithWhereWithoutLandfillsInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutLandfillsInput>
  }

  export type CauseOnWaqfCreateWithoutWaqfInput = {
    waqfCause: WaqfCauseCreateNestedOneWithoutCauseOnWaqfInput
  }

  export type CauseOnWaqfUncheckedCreateWithoutWaqfInput = {
    waqfCauseID: number
  }

  export type CauseOnWaqfCreateOrConnectWithoutWaqfInput = {
    where: CauseOnWaqfWhereUniqueInput
    create: XOR<CauseOnWaqfCreateWithoutWaqfInput, CauseOnWaqfUncheckedCreateWithoutWaqfInput>
  }

  export type CauseOnWaqfCreateManyWaqfInputEnvelope = {
    data: CauseOnWaqfCreateManyWaqfInput | CauseOnWaqfCreateManyWaqfInput[]
    skipDuplicates?: boolean
  }

  export type HistoryCreateWithoutWaqfInput = {
    historyDate: Date | string
    historyDescription?: string | null
    totalTransferred: number
    User?: UserCreateNestedOneWithoutHistoryInput
    Entity?: EntityCreateNestedOneWithoutHistoryInput
    Landfills: LandfillsCreateNestedOneWithoutHistoryInput
    Screener?: ScreenerCreateNestedOneWithoutHistoryInput
    Transformer?: TransformerCreateNestedOneWithoutHistoryInput
  }

  export type HistoryUncheckedCreateWithoutWaqfInput = {
    id?: number
    historyDate: Date | string
    historyDescription?: string | null
    UserID?: number | null
    EntityID?: number | null
    totalTransferred: number
    LandfillName: string
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type HistoryCreateOrConnectWithoutWaqfInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutWaqfInput, HistoryUncheckedCreateWithoutWaqfInput>
  }

  export type HistoryCreateManyWaqfInputEnvelope = {
    data: HistoryCreateManyWaqfInput | HistoryCreateManyWaqfInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsCreateWithoutWaqfInput = {
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    User?: UserCreateNestedOneWithoutTransactionsInput
    Entity?: EntityCreateNestedOneWithoutTransactionsInput
    Landfills?: LandfillsCreateNestedOneWithoutTransactionsInput
    Screener?: ScreenerCreateNestedOneWithoutTransactionsInput
    Transformer?: TransformerCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutWaqfInput = {
    id?: number
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    UserID?: number | null
    EntityID?: number | null
    LandfillsID?: number | null
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type TransactionsCreateOrConnectWithoutWaqfInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutWaqfInput, TransactionsUncheckedCreateWithoutWaqfInput>
  }

  export type TransactionsCreateManyWaqfInputEnvelope = {
    data: TransactionsCreateManyWaqfInput | TransactionsCreateManyWaqfInput[]
    skipDuplicates?: boolean
  }

  export type CauseOnWaqfUpsertWithWhereUniqueWithoutWaqfInput = {
    where: CauseOnWaqfWhereUniqueInput
    update: XOR<CauseOnWaqfUpdateWithoutWaqfInput, CauseOnWaqfUncheckedUpdateWithoutWaqfInput>
    create: XOR<CauseOnWaqfCreateWithoutWaqfInput, CauseOnWaqfUncheckedCreateWithoutWaqfInput>
  }

  export type CauseOnWaqfUpdateWithWhereUniqueWithoutWaqfInput = {
    where: CauseOnWaqfWhereUniqueInput
    data: XOR<CauseOnWaqfUpdateWithoutWaqfInput, CauseOnWaqfUncheckedUpdateWithoutWaqfInput>
  }

  export type CauseOnWaqfUpdateManyWithWhereWithoutWaqfInput = {
    where: CauseOnWaqfScalarWhereInput
    data: XOR<CauseOnWaqfUpdateManyMutationInput, CauseOnWaqfUncheckedUpdateManyWithoutWaqfInput>
  }

  export type CauseOnWaqfScalarWhereInput = {
    AND?: CauseOnWaqfScalarWhereInput | CauseOnWaqfScalarWhereInput[]
    OR?: CauseOnWaqfScalarWhereInput[]
    NOT?: CauseOnWaqfScalarWhereInput | CauseOnWaqfScalarWhereInput[]
    waqfID?: IntFilter<"CauseOnWaqf"> | number
    waqfCauseID?: IntFilter<"CauseOnWaqf"> | number
  }

  export type HistoryUpsertWithWhereUniqueWithoutWaqfInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutWaqfInput, HistoryUncheckedUpdateWithoutWaqfInput>
    create: XOR<HistoryCreateWithoutWaqfInput, HistoryUncheckedCreateWithoutWaqfInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutWaqfInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutWaqfInput, HistoryUncheckedUpdateWithoutWaqfInput>
  }

  export type HistoryUpdateManyWithWhereWithoutWaqfInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutWaqfInput>
  }

  export type TransactionsUpsertWithWhereUniqueWithoutWaqfInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutWaqfInput, TransactionsUncheckedUpdateWithoutWaqfInput>
    create: XOR<TransactionsCreateWithoutWaqfInput, TransactionsUncheckedCreateWithoutWaqfInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutWaqfInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutWaqfInput, TransactionsUncheckedUpdateWithoutWaqfInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutWaqfInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutWaqfInput>
  }

  export type CauseOnWaqfCreateWithoutWaqfCauseInput = {
    Waqf: WaqfCreateNestedOneWithoutCauseOnWaqfInput
  }

  export type CauseOnWaqfUncheckedCreateWithoutWaqfCauseInput = {
    waqfID: number
  }

  export type CauseOnWaqfCreateOrConnectWithoutWaqfCauseInput = {
    where: CauseOnWaqfWhereUniqueInput
    create: XOR<CauseOnWaqfCreateWithoutWaqfCauseInput, CauseOnWaqfUncheckedCreateWithoutWaqfCauseInput>
  }

  export type CauseOnWaqfCreateManyWaqfCauseInputEnvelope = {
    data: CauseOnWaqfCreateManyWaqfCauseInput | CauseOnWaqfCreateManyWaqfCauseInput[]
    skipDuplicates?: boolean
  }

  export type CauseOnWaqfUpsertWithWhereUniqueWithoutWaqfCauseInput = {
    where: CauseOnWaqfWhereUniqueInput
    update: XOR<CauseOnWaqfUpdateWithoutWaqfCauseInput, CauseOnWaqfUncheckedUpdateWithoutWaqfCauseInput>
    create: XOR<CauseOnWaqfCreateWithoutWaqfCauseInput, CauseOnWaqfUncheckedCreateWithoutWaqfCauseInput>
  }

  export type CauseOnWaqfUpdateWithWhereUniqueWithoutWaqfCauseInput = {
    where: CauseOnWaqfWhereUniqueInput
    data: XOR<CauseOnWaqfUpdateWithoutWaqfCauseInput, CauseOnWaqfUncheckedUpdateWithoutWaqfCauseInput>
  }

  export type CauseOnWaqfUpdateManyWithWhereWithoutWaqfCauseInput = {
    where: CauseOnWaqfScalarWhereInput
    data: XOR<CauseOnWaqfUpdateManyMutationInput, CauseOnWaqfUncheckedUpdateManyWithoutWaqfCauseInput>
  }

  export type WaqfCauseCreateWithoutCauseOnWaqfInput = {
    waqfCause: string
  }

  export type WaqfCauseUncheckedCreateWithoutCauseOnWaqfInput = {
    id?: number
    waqfCause: string
  }

  export type WaqfCauseCreateOrConnectWithoutCauseOnWaqfInput = {
    where: WaqfCauseWhereUniqueInput
    create: XOR<WaqfCauseCreateWithoutCauseOnWaqfInput, WaqfCauseUncheckedCreateWithoutCauseOnWaqfInput>
  }

  export type WaqfCreateWithoutCauseOnWaqfInput = {
    totalRaised?: number | null
    bankNumber?: number | null
    waqfName: string
    waqfAddress?: string | null
    waqfPhoneNumber?: string | null
    imageUrl?: string | null
    description?: string | null
    History?: HistoryCreateNestedManyWithoutWaqfInput
    Transactions?: TransactionsCreateNestedManyWithoutWaqfInput
  }

  export type WaqfUncheckedCreateWithoutCauseOnWaqfInput = {
    id?: number
    totalRaised?: number | null
    bankNumber?: number | null
    waqfName: string
    waqfAddress?: string | null
    waqfPhoneNumber?: string | null
    imageUrl?: string | null
    description?: string | null
    History?: HistoryUncheckedCreateNestedManyWithoutWaqfInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutWaqfInput
  }

  export type WaqfCreateOrConnectWithoutCauseOnWaqfInput = {
    where: WaqfWhereUniqueInput
    create: XOR<WaqfCreateWithoutCauseOnWaqfInput, WaqfUncheckedCreateWithoutCauseOnWaqfInput>
  }

  export type WaqfCauseUpsertWithoutCauseOnWaqfInput = {
    update: XOR<WaqfCauseUpdateWithoutCauseOnWaqfInput, WaqfCauseUncheckedUpdateWithoutCauseOnWaqfInput>
    create: XOR<WaqfCauseCreateWithoutCauseOnWaqfInput, WaqfCauseUncheckedCreateWithoutCauseOnWaqfInput>
    where?: WaqfCauseWhereInput
  }

  export type WaqfCauseUpdateToOneWithWhereWithoutCauseOnWaqfInput = {
    where?: WaqfCauseWhereInput
    data: XOR<WaqfCauseUpdateWithoutCauseOnWaqfInput, WaqfCauseUncheckedUpdateWithoutCauseOnWaqfInput>
  }

  export type WaqfCauseUpdateWithoutCauseOnWaqfInput = {
    waqfCause?: StringFieldUpdateOperationsInput | string
  }

  export type WaqfCauseUncheckedUpdateWithoutCauseOnWaqfInput = {
    id?: IntFieldUpdateOperationsInput | number
    waqfCause?: StringFieldUpdateOperationsInput | string
  }

  export type WaqfUpsertWithoutCauseOnWaqfInput = {
    update: XOR<WaqfUpdateWithoutCauseOnWaqfInput, WaqfUncheckedUpdateWithoutCauseOnWaqfInput>
    create: XOR<WaqfCreateWithoutCauseOnWaqfInput, WaqfUncheckedCreateWithoutCauseOnWaqfInput>
    where?: WaqfWhereInput
  }

  export type WaqfUpdateToOneWithWhereWithoutCauseOnWaqfInput = {
    where?: WaqfWhereInput
    data: XOR<WaqfUpdateWithoutCauseOnWaqfInput, WaqfUncheckedUpdateWithoutCauseOnWaqfInput>
  }

  export type WaqfUpdateWithoutCauseOnWaqfInput = {
    totalRaised?: NullableIntFieldUpdateOperationsInput | number | null
    bankNumber?: NullableIntFieldUpdateOperationsInput | number | null
    waqfName?: StringFieldUpdateOperationsInput | string
    waqfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    waqfPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    History?: HistoryUpdateManyWithoutWaqfNestedInput
    Transactions?: TransactionsUpdateManyWithoutWaqfNestedInput
  }

  export type WaqfUncheckedUpdateWithoutCauseOnWaqfInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalRaised?: NullableIntFieldUpdateOperationsInput | number | null
    bankNumber?: NullableIntFieldUpdateOperationsInput | number | null
    waqfName?: StringFieldUpdateOperationsInput | string
    waqfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    waqfPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    History?: HistoryUncheckedUpdateManyWithoutWaqfNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutWaqfNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    email: string
    password: string
    frontName?: string | null
    familyName?: string | null
    dateofbirth?: Date | string | null
    icNumber?: number | null
    address?: string | null
    phoneNumber?: string | null
    username: string
    zipCode?: number | null
    province?: string | null
    city?: string | null
    country?: string | null
    History?: HistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: number
    email: string
    password: string
    frontName?: string | null
    familyName?: string | null
    dateofbirth?: Date | string | null
    icNumber?: number | null
    address?: string | null
    phoneNumber?: string | null
    username: string
    zipCode?: number | null
    province?: string | null
    city?: string | null
    country?: string | null
    History?: HistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type EntityCreateWithoutTransactionsInput = {
    companyUsername: string
    password: string
    picFrontName?: string | null
    picFamilyName?: string | null
    picPhoneNumber?: string | null
    dateofbirth?: Date | string | null
    companyName?: string | null
    companyAddress?: string | null
    companyPhoneNumber?: string | null
    companyZipCode?: number | null
    companyEmail?: string | null
    companyRegistrationNumber?: string | null
    History?: HistoryCreateNestedManyWithoutEntityInput
  }

  export type EntityUncheckedCreateWithoutTransactionsInput = {
    id?: number
    companyUsername: string
    password: string
    picFrontName?: string | null
    picFamilyName?: string | null
    picPhoneNumber?: string | null
    dateofbirth?: Date | string | null
    companyName?: string | null
    companyAddress?: string | null
    companyPhoneNumber?: string | null
    companyZipCode?: number | null
    companyEmail?: string | null
    companyRegistrationNumber?: string | null
    History?: HistoryUncheckedCreateNestedManyWithoutEntityInput
  }

  export type EntityCreateOrConnectWithoutTransactionsInput = {
    where: EntityWhereUniqueInput
    create: XOR<EntityCreateWithoutTransactionsInput, EntityUncheckedCreateWithoutTransactionsInput>
  }

  export type WaqfCreateWithoutTransactionsInput = {
    totalRaised?: number | null
    bankNumber?: number | null
    waqfName: string
    waqfAddress?: string | null
    waqfPhoneNumber?: string | null
    imageUrl?: string | null
    description?: string | null
    CauseOnWaqf?: CauseOnWaqfCreateNestedManyWithoutWaqfInput
    History?: HistoryCreateNestedManyWithoutWaqfInput
  }

  export type WaqfUncheckedCreateWithoutTransactionsInput = {
    id?: number
    totalRaised?: number | null
    bankNumber?: number | null
    waqfName: string
    waqfAddress?: string | null
    waqfPhoneNumber?: string | null
    imageUrl?: string | null
    description?: string | null
    CauseOnWaqf?: CauseOnWaqfUncheckedCreateNestedManyWithoutWaqfInput
    History?: HistoryUncheckedCreateNestedManyWithoutWaqfInput
  }

  export type WaqfCreateOrConnectWithoutTransactionsInput = {
    where: WaqfWhereUniqueInput
    create: XOR<WaqfCreateWithoutTransactionsInput, WaqfUncheckedCreateWithoutTransactionsInput>
  }

  export type LandfillsCreateWithoutTransactionsInput = {
    landfillName: string
    landfillAddress?: string | null
    landfillPhoneNumber?: string | null
    imageUri?: string | null
    landfillArea: landfillAreaCreateNestedOneWithoutLandfillsInput
    Transformer?: TransformerCreateNestedOneWithoutLandfillsInput
    Screener?: ScreenerCreateNestedOneWithoutLandfillsInput
    History?: HistoryCreateNestedManyWithoutLandfillsInput
  }

  export type LandfillsUncheckedCreateWithoutTransactionsInput = {
    id?: number
    landfillName: string
    landfillAreaName: string
    landfillAddress?: string | null
    landfillPhoneNumber?: string | null
    imageUri?: string | null
    TransformerID?: number | null
    ScreenerID?: number | null
    History?: HistoryUncheckedCreateNestedManyWithoutLandfillsInput
  }

  export type LandfillsCreateOrConnectWithoutTransactionsInput = {
    where: LandfillsWhereUniqueInput
    create: XOR<LandfillsCreateWithoutTransactionsInput, LandfillsUncheckedCreateWithoutTransactionsInput>
  }

  export type ScreenerCreateWithoutTransactionsInput = {
    username?: string | null
    password?: string | null
    name: string
    email: string
    phoneNumber: string
    Landfills?: LandfillsCreateNestedManyWithoutScreenerInput
    History?: HistoryCreateNestedManyWithoutScreenerInput
  }

  export type ScreenerUncheckedCreateWithoutTransactionsInput = {
    id?: number
    username?: string | null
    password?: string | null
    name: string
    email: string
    phoneNumber: string
    Landfills?: LandfillsUncheckedCreateNestedManyWithoutScreenerInput
    History?: HistoryUncheckedCreateNestedManyWithoutScreenerInput
  }

  export type ScreenerCreateOrConnectWithoutTransactionsInput = {
    where: ScreenerWhereUniqueInput
    create: XOR<ScreenerCreateWithoutTransactionsInput, ScreenerUncheckedCreateWithoutTransactionsInput>
  }

  export type TransformerCreateWithoutTransactionsInput = {
    username?: string | null
    password?: string | null
    name: string
    email: string
    phoneNumber: string
    Landfills?: LandfillsCreateNestedManyWithoutTransformerInput
    History?: HistoryCreateNestedManyWithoutTransformerInput
  }

  export type TransformerUncheckedCreateWithoutTransactionsInput = {
    id?: number
    username?: string | null
    password?: string | null
    name: string
    email: string
    phoneNumber: string
    Landfills?: LandfillsUncheckedCreateNestedManyWithoutTransformerInput
    History?: HistoryUncheckedCreateNestedManyWithoutTransformerInput
  }

  export type TransformerCreateOrConnectWithoutTransactionsInput = {
    where: TransformerWhereUniqueInput
    create: XOR<TransformerCreateWithoutTransactionsInput, TransformerUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frontName?: NullableStringFieldUpdateOperationsInput | string | null
    familyName?: NullableStringFieldUpdateOperationsInput | string | null
    dateofbirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icNumber?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableIntFieldUpdateOperationsInput | number | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    History?: HistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frontName?: NullableStringFieldUpdateOperationsInput | string | null
    familyName?: NullableStringFieldUpdateOperationsInput | string | null
    dateofbirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icNumber?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableIntFieldUpdateOperationsInput | number | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    History?: HistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EntityUpsertWithoutTransactionsInput = {
    update: XOR<EntityUpdateWithoutTransactionsInput, EntityUncheckedUpdateWithoutTransactionsInput>
    create: XOR<EntityCreateWithoutTransactionsInput, EntityUncheckedCreateWithoutTransactionsInput>
    where?: EntityWhereInput
  }

  export type EntityUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: EntityWhereInput
    data: XOR<EntityUpdateWithoutTransactionsInput, EntityUncheckedUpdateWithoutTransactionsInput>
  }

  export type EntityUpdateWithoutTransactionsInput = {
    companyUsername?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picFrontName?: NullableStringFieldUpdateOperationsInput | string | null
    picFamilyName?: NullableStringFieldUpdateOperationsInput | string | null
    picPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateofbirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    companyPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyZipCode?: NullableIntFieldUpdateOperationsInput | number | null
    companyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    companyRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    History?: HistoryUpdateManyWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyUsername?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picFrontName?: NullableStringFieldUpdateOperationsInput | string | null
    picFamilyName?: NullableStringFieldUpdateOperationsInput | string | null
    picPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateofbirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    companyPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyZipCode?: NullableIntFieldUpdateOperationsInput | number | null
    companyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    companyRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    History?: HistoryUncheckedUpdateManyWithoutEntityNestedInput
  }

  export type WaqfUpsertWithoutTransactionsInput = {
    update: XOR<WaqfUpdateWithoutTransactionsInput, WaqfUncheckedUpdateWithoutTransactionsInput>
    create: XOR<WaqfCreateWithoutTransactionsInput, WaqfUncheckedCreateWithoutTransactionsInput>
    where?: WaqfWhereInput
  }

  export type WaqfUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: WaqfWhereInput
    data: XOR<WaqfUpdateWithoutTransactionsInput, WaqfUncheckedUpdateWithoutTransactionsInput>
  }

  export type WaqfUpdateWithoutTransactionsInput = {
    totalRaised?: NullableIntFieldUpdateOperationsInput | number | null
    bankNumber?: NullableIntFieldUpdateOperationsInput | number | null
    waqfName?: StringFieldUpdateOperationsInput | string
    waqfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    waqfPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    CauseOnWaqf?: CauseOnWaqfUpdateManyWithoutWaqfNestedInput
    History?: HistoryUpdateManyWithoutWaqfNestedInput
  }

  export type WaqfUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalRaised?: NullableIntFieldUpdateOperationsInput | number | null
    bankNumber?: NullableIntFieldUpdateOperationsInput | number | null
    waqfName?: StringFieldUpdateOperationsInput | string
    waqfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    waqfPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    CauseOnWaqf?: CauseOnWaqfUncheckedUpdateManyWithoutWaqfNestedInput
    History?: HistoryUncheckedUpdateManyWithoutWaqfNestedInput
  }

  export type LandfillsUpsertWithoutTransactionsInput = {
    update: XOR<LandfillsUpdateWithoutTransactionsInput, LandfillsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<LandfillsCreateWithoutTransactionsInput, LandfillsUncheckedCreateWithoutTransactionsInput>
    where?: LandfillsWhereInput
  }

  export type LandfillsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: LandfillsWhereInput
    data: XOR<LandfillsUpdateWithoutTransactionsInput, LandfillsUncheckedUpdateWithoutTransactionsInput>
  }

  export type LandfillsUpdateWithoutTransactionsInput = {
    landfillName?: StringFieldUpdateOperationsInput | string
    landfillAddress?: NullableStringFieldUpdateOperationsInput | string | null
    landfillPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUri?: NullableStringFieldUpdateOperationsInput | string | null
    landfillArea?: landfillAreaUpdateOneRequiredWithoutLandfillsNestedInput
    Transformer?: TransformerUpdateOneWithoutLandfillsNestedInput
    Screener?: ScreenerUpdateOneWithoutLandfillsNestedInput
    History?: HistoryUpdateManyWithoutLandfillsNestedInput
  }

  export type LandfillsUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    landfillName?: StringFieldUpdateOperationsInput | string
    landfillAreaName?: StringFieldUpdateOperationsInput | string
    landfillAddress?: NullableStringFieldUpdateOperationsInput | string | null
    landfillPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUri?: NullableStringFieldUpdateOperationsInput | string | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    History?: HistoryUncheckedUpdateManyWithoutLandfillsNestedInput
  }

  export type ScreenerUpsertWithoutTransactionsInput = {
    update: XOR<ScreenerUpdateWithoutTransactionsInput, ScreenerUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ScreenerCreateWithoutTransactionsInput, ScreenerUncheckedCreateWithoutTransactionsInput>
    where?: ScreenerWhereInput
  }

  export type ScreenerUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ScreenerWhereInput
    data: XOR<ScreenerUpdateWithoutTransactionsInput, ScreenerUncheckedUpdateWithoutTransactionsInput>
  }

  export type ScreenerUpdateWithoutTransactionsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    Landfills?: LandfillsUpdateManyWithoutScreenerNestedInput
    History?: HistoryUpdateManyWithoutScreenerNestedInput
  }

  export type ScreenerUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    Landfills?: LandfillsUncheckedUpdateManyWithoutScreenerNestedInput
    History?: HistoryUncheckedUpdateManyWithoutScreenerNestedInput
  }

  export type TransformerUpsertWithoutTransactionsInput = {
    update: XOR<TransformerUpdateWithoutTransactionsInput, TransformerUncheckedUpdateWithoutTransactionsInput>
    create: XOR<TransformerCreateWithoutTransactionsInput, TransformerUncheckedCreateWithoutTransactionsInput>
    where?: TransformerWhereInput
  }

  export type TransformerUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: TransformerWhereInput
    data: XOR<TransformerUpdateWithoutTransactionsInput, TransformerUncheckedUpdateWithoutTransactionsInput>
  }

  export type TransformerUpdateWithoutTransactionsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    Landfills?: LandfillsUpdateManyWithoutTransformerNestedInput
    History?: HistoryUpdateManyWithoutTransformerNestedInput
  }

  export type TransformerUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    Landfills?: LandfillsUncheckedUpdateManyWithoutTransformerNestedInput
    History?: HistoryUncheckedUpdateManyWithoutTransformerNestedInput
  }

  export type UserCreateWithoutHistoryInput = {
    email: string
    password: string
    frontName?: string | null
    familyName?: string | null
    dateofbirth?: Date | string | null
    icNumber?: number | null
    address?: string | null
    phoneNumber?: string | null
    username: string
    zipCode?: number | null
    province?: string | null
    city?: string | null
    country?: string | null
    Transactions?: TransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHistoryInput = {
    id?: number
    email: string
    password: string
    frontName?: string | null
    familyName?: string | null
    dateofbirth?: Date | string | null
    icNumber?: number | null
    address?: string | null
    phoneNumber?: string | null
    username: string
    zipCode?: number | null
    province?: string | null
    city?: string | null
    country?: string | null
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
  }

  export type EntityCreateWithoutHistoryInput = {
    companyUsername: string
    password: string
    picFrontName?: string | null
    picFamilyName?: string | null
    picPhoneNumber?: string | null
    dateofbirth?: Date | string | null
    companyName?: string | null
    companyAddress?: string | null
    companyPhoneNumber?: string | null
    companyZipCode?: number | null
    companyEmail?: string | null
    companyRegistrationNumber?: string | null
    Transactions?: TransactionsCreateNestedManyWithoutEntityInput
  }

  export type EntityUncheckedCreateWithoutHistoryInput = {
    id?: number
    companyUsername: string
    password: string
    picFrontName?: string | null
    picFamilyName?: string | null
    picPhoneNumber?: string | null
    dateofbirth?: Date | string | null
    companyName?: string | null
    companyAddress?: string | null
    companyPhoneNumber?: string | null
    companyZipCode?: number | null
    companyEmail?: string | null
    companyRegistrationNumber?: string | null
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutEntityInput
  }

  export type EntityCreateOrConnectWithoutHistoryInput = {
    where: EntityWhereUniqueInput
    create: XOR<EntityCreateWithoutHistoryInput, EntityUncheckedCreateWithoutHistoryInput>
  }

  export type WaqfCreateWithoutHistoryInput = {
    totalRaised?: number | null
    bankNumber?: number | null
    waqfName: string
    waqfAddress?: string | null
    waqfPhoneNumber?: string | null
    imageUrl?: string | null
    description?: string | null
    CauseOnWaqf?: CauseOnWaqfCreateNestedManyWithoutWaqfInput
    Transactions?: TransactionsCreateNestedManyWithoutWaqfInput
  }

  export type WaqfUncheckedCreateWithoutHistoryInput = {
    id?: number
    totalRaised?: number | null
    bankNumber?: number | null
    waqfName: string
    waqfAddress?: string | null
    waqfPhoneNumber?: string | null
    imageUrl?: string | null
    description?: string | null
    CauseOnWaqf?: CauseOnWaqfUncheckedCreateNestedManyWithoutWaqfInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutWaqfInput
  }

  export type WaqfCreateOrConnectWithoutHistoryInput = {
    where: WaqfWhereUniqueInput
    create: XOR<WaqfCreateWithoutHistoryInput, WaqfUncheckedCreateWithoutHistoryInput>
  }

  export type LandfillsCreateWithoutHistoryInput = {
    landfillName: string
    landfillAddress?: string | null
    landfillPhoneNumber?: string | null
    imageUri?: string | null
    landfillArea: landfillAreaCreateNestedOneWithoutLandfillsInput
    Transformer?: TransformerCreateNestedOneWithoutLandfillsInput
    Screener?: ScreenerCreateNestedOneWithoutLandfillsInput
    Transactions?: TransactionsCreateNestedManyWithoutLandfillsInput
  }

  export type LandfillsUncheckedCreateWithoutHistoryInput = {
    id?: number
    landfillName: string
    landfillAreaName: string
    landfillAddress?: string | null
    landfillPhoneNumber?: string | null
    imageUri?: string | null
    TransformerID?: number | null
    ScreenerID?: number | null
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutLandfillsInput
  }

  export type LandfillsCreateOrConnectWithoutHistoryInput = {
    where: LandfillsWhereUniqueInput
    create: XOR<LandfillsCreateWithoutHistoryInput, LandfillsUncheckedCreateWithoutHistoryInput>
  }

  export type ScreenerCreateWithoutHistoryInput = {
    username?: string | null
    password?: string | null
    name: string
    email: string
    phoneNumber: string
    Landfills?: LandfillsCreateNestedManyWithoutScreenerInput
    Transactions?: TransactionsCreateNestedManyWithoutScreenerInput
  }

  export type ScreenerUncheckedCreateWithoutHistoryInput = {
    id?: number
    username?: string | null
    password?: string | null
    name: string
    email: string
    phoneNumber: string
    Landfills?: LandfillsUncheckedCreateNestedManyWithoutScreenerInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutScreenerInput
  }

  export type ScreenerCreateOrConnectWithoutHistoryInput = {
    where: ScreenerWhereUniqueInput
    create: XOR<ScreenerCreateWithoutHistoryInput, ScreenerUncheckedCreateWithoutHistoryInput>
  }

  export type TransformerCreateWithoutHistoryInput = {
    username?: string | null
    password?: string | null
    name: string
    email: string
    phoneNumber: string
    Landfills?: LandfillsCreateNestedManyWithoutTransformerInput
    Transactions?: TransactionsCreateNestedManyWithoutTransformerInput
  }

  export type TransformerUncheckedCreateWithoutHistoryInput = {
    id?: number
    username?: string | null
    password?: string | null
    name: string
    email: string
    phoneNumber: string
    Landfills?: LandfillsUncheckedCreateNestedManyWithoutTransformerInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutTransformerInput
  }

  export type TransformerCreateOrConnectWithoutHistoryInput = {
    where: TransformerWhereUniqueInput
    create: XOR<TransformerCreateWithoutHistoryInput, TransformerUncheckedCreateWithoutHistoryInput>
  }

  export type UserUpsertWithoutHistoryInput = {
    update: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateWithoutHistoryInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frontName?: NullableStringFieldUpdateOperationsInput | string | null
    familyName?: NullableStringFieldUpdateOperationsInput | string | null
    dateofbirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icNumber?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableIntFieldUpdateOperationsInput | number | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    Transactions?: TransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    frontName?: NullableStringFieldUpdateOperationsInput | string | null
    familyName?: NullableStringFieldUpdateOperationsInput | string | null
    dateofbirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    icNumber?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableIntFieldUpdateOperationsInput | number | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    Transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EntityUpsertWithoutHistoryInput = {
    update: XOR<EntityUpdateWithoutHistoryInput, EntityUncheckedUpdateWithoutHistoryInput>
    create: XOR<EntityCreateWithoutHistoryInput, EntityUncheckedCreateWithoutHistoryInput>
    where?: EntityWhereInput
  }

  export type EntityUpdateToOneWithWhereWithoutHistoryInput = {
    where?: EntityWhereInput
    data: XOR<EntityUpdateWithoutHistoryInput, EntityUncheckedUpdateWithoutHistoryInput>
  }

  export type EntityUpdateWithoutHistoryInput = {
    companyUsername?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picFrontName?: NullableStringFieldUpdateOperationsInput | string | null
    picFamilyName?: NullableStringFieldUpdateOperationsInput | string | null
    picPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateofbirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    companyPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyZipCode?: NullableIntFieldUpdateOperationsInput | number | null
    companyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    companyRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Transactions?: TransactionsUpdateManyWithoutEntityNestedInput
  }

  export type EntityUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyUsername?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picFrontName?: NullableStringFieldUpdateOperationsInput | string | null
    picFamilyName?: NullableStringFieldUpdateOperationsInput | string | null
    picPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateofbirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    companyPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    companyZipCode?: NullableIntFieldUpdateOperationsInput | number | null
    companyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    companyRegistrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Transactions?: TransactionsUncheckedUpdateManyWithoutEntityNestedInput
  }

  export type WaqfUpsertWithoutHistoryInput = {
    update: XOR<WaqfUpdateWithoutHistoryInput, WaqfUncheckedUpdateWithoutHistoryInput>
    create: XOR<WaqfCreateWithoutHistoryInput, WaqfUncheckedCreateWithoutHistoryInput>
    where?: WaqfWhereInput
  }

  export type WaqfUpdateToOneWithWhereWithoutHistoryInput = {
    where?: WaqfWhereInput
    data: XOR<WaqfUpdateWithoutHistoryInput, WaqfUncheckedUpdateWithoutHistoryInput>
  }

  export type WaqfUpdateWithoutHistoryInput = {
    totalRaised?: NullableIntFieldUpdateOperationsInput | number | null
    bankNumber?: NullableIntFieldUpdateOperationsInput | number | null
    waqfName?: StringFieldUpdateOperationsInput | string
    waqfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    waqfPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    CauseOnWaqf?: CauseOnWaqfUpdateManyWithoutWaqfNestedInput
    Transactions?: TransactionsUpdateManyWithoutWaqfNestedInput
  }

  export type WaqfUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalRaised?: NullableIntFieldUpdateOperationsInput | number | null
    bankNumber?: NullableIntFieldUpdateOperationsInput | number | null
    waqfName?: StringFieldUpdateOperationsInput | string
    waqfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    waqfPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    CauseOnWaqf?: CauseOnWaqfUncheckedUpdateManyWithoutWaqfNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutWaqfNestedInput
  }

  export type LandfillsUpsertWithoutHistoryInput = {
    update: XOR<LandfillsUpdateWithoutHistoryInput, LandfillsUncheckedUpdateWithoutHistoryInput>
    create: XOR<LandfillsCreateWithoutHistoryInput, LandfillsUncheckedCreateWithoutHistoryInput>
    where?: LandfillsWhereInput
  }

  export type LandfillsUpdateToOneWithWhereWithoutHistoryInput = {
    where?: LandfillsWhereInput
    data: XOR<LandfillsUpdateWithoutHistoryInput, LandfillsUncheckedUpdateWithoutHistoryInput>
  }

  export type LandfillsUpdateWithoutHistoryInput = {
    landfillName?: StringFieldUpdateOperationsInput | string
    landfillAddress?: NullableStringFieldUpdateOperationsInput | string | null
    landfillPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUri?: NullableStringFieldUpdateOperationsInput | string | null
    landfillArea?: landfillAreaUpdateOneRequiredWithoutLandfillsNestedInput
    Transformer?: TransformerUpdateOneWithoutLandfillsNestedInput
    Screener?: ScreenerUpdateOneWithoutLandfillsNestedInput
    Transactions?: TransactionsUpdateManyWithoutLandfillsNestedInput
  }

  export type LandfillsUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    landfillName?: StringFieldUpdateOperationsInput | string
    landfillAreaName?: StringFieldUpdateOperationsInput | string
    landfillAddress?: NullableStringFieldUpdateOperationsInput | string | null
    landfillPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUri?: NullableStringFieldUpdateOperationsInput | string | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    Transactions?: TransactionsUncheckedUpdateManyWithoutLandfillsNestedInput
  }

  export type ScreenerUpsertWithoutHistoryInput = {
    update: XOR<ScreenerUpdateWithoutHistoryInput, ScreenerUncheckedUpdateWithoutHistoryInput>
    create: XOR<ScreenerCreateWithoutHistoryInput, ScreenerUncheckedCreateWithoutHistoryInput>
    where?: ScreenerWhereInput
  }

  export type ScreenerUpdateToOneWithWhereWithoutHistoryInput = {
    where?: ScreenerWhereInput
    data: XOR<ScreenerUpdateWithoutHistoryInput, ScreenerUncheckedUpdateWithoutHistoryInput>
  }

  export type ScreenerUpdateWithoutHistoryInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    Landfills?: LandfillsUpdateManyWithoutScreenerNestedInput
    Transactions?: TransactionsUpdateManyWithoutScreenerNestedInput
  }

  export type ScreenerUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    Landfills?: LandfillsUncheckedUpdateManyWithoutScreenerNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutScreenerNestedInput
  }

  export type TransformerUpsertWithoutHistoryInput = {
    update: XOR<TransformerUpdateWithoutHistoryInput, TransformerUncheckedUpdateWithoutHistoryInput>
    create: XOR<TransformerCreateWithoutHistoryInput, TransformerUncheckedCreateWithoutHistoryInput>
    where?: TransformerWhereInput
  }

  export type TransformerUpdateToOneWithWhereWithoutHistoryInput = {
    where?: TransformerWhereInput
    data: XOR<TransformerUpdateWithoutHistoryInput, TransformerUncheckedUpdateWithoutHistoryInput>
  }

  export type TransformerUpdateWithoutHistoryInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    Landfills?: LandfillsUpdateManyWithoutTransformerNestedInput
    Transactions?: TransactionsUpdateManyWithoutTransformerNestedInput
  }

  export type TransformerUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    Landfills?: LandfillsUncheckedUpdateManyWithoutTransformerNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutTransformerNestedInput
  }

  export type TransactionsCreateManyUserInput = {
    id?: number
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    EntityID?: number | null
    WaqfID?: number | null
    LandfillsID?: number | null
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type HistoryCreateManyUserInput = {
    id?: number
    historyDate: Date | string
    historyDescription?: string | null
    EntityID?: number | null
    WaqfName: string
    totalTransferred: number
    LandfillName: string
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type TransactionsUpdateWithoutUserInput = {
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    Entity?: EntityUpdateOneWithoutTransactionsNestedInput
    Waqf?: WaqfUpdateOneWithoutTransactionsNestedInput
    Landfills?: LandfillsUpdateOneWithoutTransactionsNestedInput
    Screener?: ScreenerUpdateOneWithoutTransactionsNestedInput
    Transformer?: TransformerUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfID?: NullableIntFieldUpdateOperationsInput | number | null
    LandfillsID?: NullableIntFieldUpdateOperationsInput | number | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfID?: NullableIntFieldUpdateOperationsInput | number | null
    LandfillsID?: NullableIntFieldUpdateOperationsInput | number | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistoryUpdateWithoutUserInput = {
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    totalTransferred?: IntFieldUpdateOperationsInput | number
    Entity?: EntityUpdateOneWithoutHistoryNestedInput
    Waqf?: WaqfUpdateOneRequiredWithoutHistoryNestedInput
    Landfills?: LandfillsUpdateOneRequiredWithoutHistoryNestedInput
    Screener?: ScreenerUpdateOneWithoutHistoryNestedInput
    Transformer?: TransformerUpdateOneWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfName?: StringFieldUpdateOperationsInput | string
    totalTransferred?: IntFieldUpdateOperationsInput | number
    LandfillName?: StringFieldUpdateOperationsInput | string
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfName?: StringFieldUpdateOperationsInput | string
    totalTransferred?: IntFieldUpdateOperationsInput | number
    LandfillName?: StringFieldUpdateOperationsInput | string
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistoryCreateManyEntityInput = {
    id?: number
    historyDate: Date | string
    historyDescription?: string | null
    UserID?: number | null
    WaqfName: string
    totalTransferred: number
    LandfillName: string
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type TransactionsCreateManyEntityInput = {
    id?: number
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    UserID?: number | null
    WaqfID?: number | null
    LandfillsID?: number | null
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type HistoryUpdateWithoutEntityInput = {
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    totalTransferred?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneWithoutHistoryNestedInput
    Waqf?: WaqfUpdateOneRequiredWithoutHistoryNestedInput
    Landfills?: LandfillsUpdateOneRequiredWithoutHistoryNestedInput
    Screener?: ScreenerUpdateOneWithoutHistoryNestedInput
    Transformer?: TransformerUpdateOneWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateWithoutEntityInput = {
    id?: IntFieldUpdateOperationsInput | number
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfName?: StringFieldUpdateOperationsInput | string
    totalTransferred?: IntFieldUpdateOperationsInput | number
    LandfillName?: StringFieldUpdateOperationsInput | string
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistoryUncheckedUpdateManyWithoutEntityInput = {
    id?: IntFieldUpdateOperationsInput | number
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfName?: StringFieldUpdateOperationsInput | string
    totalTransferred?: IntFieldUpdateOperationsInput | number
    LandfillName?: StringFieldUpdateOperationsInput | string
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionsUpdateWithoutEntityInput = {
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutTransactionsNestedInput
    Waqf?: WaqfUpdateOneWithoutTransactionsNestedInput
    Landfills?: LandfillsUpdateOneWithoutTransactionsNestedInput
    Screener?: ScreenerUpdateOneWithoutTransactionsNestedInput
    Transformer?: TransformerUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutEntityInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfID?: NullableIntFieldUpdateOperationsInput | number | null
    LandfillsID?: NullableIntFieldUpdateOperationsInput | number | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionsUncheckedUpdateManyWithoutEntityInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfID?: NullableIntFieldUpdateOperationsInput | number | null
    LandfillsID?: NullableIntFieldUpdateOperationsInput | number | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LandfillsCreateManyScreenerInput = {
    id?: number
    landfillName: string
    landfillAreaName: string
    landfillAddress?: string | null
    landfillPhoneNumber?: string | null
    imageUri?: string | null
    TransformerID?: number | null
  }

  export type TransactionsCreateManyScreenerInput = {
    id?: number
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    UserID?: number | null
    EntityID?: number | null
    WaqfID?: number | null
    LandfillsID?: number | null
    TransformerID?: number | null
  }

  export type HistoryCreateManyScreenerInput = {
    id?: number
    historyDate: Date | string
    historyDescription?: string | null
    UserID?: number | null
    EntityID?: number | null
    WaqfName: string
    totalTransferred: number
    LandfillName: string
    TransformerID?: number | null
  }

  export type LandfillsUpdateWithoutScreenerInput = {
    landfillName?: StringFieldUpdateOperationsInput | string
    landfillAddress?: NullableStringFieldUpdateOperationsInput | string | null
    landfillPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUri?: NullableStringFieldUpdateOperationsInput | string | null
    landfillArea?: landfillAreaUpdateOneRequiredWithoutLandfillsNestedInput
    Transformer?: TransformerUpdateOneWithoutLandfillsNestedInput
    Transactions?: TransactionsUpdateManyWithoutLandfillsNestedInput
    History?: HistoryUpdateManyWithoutLandfillsNestedInput
  }

  export type LandfillsUncheckedUpdateWithoutScreenerInput = {
    id?: IntFieldUpdateOperationsInput | number
    landfillName?: StringFieldUpdateOperationsInput | string
    landfillAreaName?: StringFieldUpdateOperationsInput | string
    landfillAddress?: NullableStringFieldUpdateOperationsInput | string | null
    landfillPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUri?: NullableStringFieldUpdateOperationsInput | string | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
    Transactions?: TransactionsUncheckedUpdateManyWithoutLandfillsNestedInput
    History?: HistoryUncheckedUpdateManyWithoutLandfillsNestedInput
  }

  export type LandfillsUncheckedUpdateManyWithoutScreenerInput = {
    id?: IntFieldUpdateOperationsInput | number
    landfillName?: StringFieldUpdateOperationsInput | string
    landfillAreaName?: StringFieldUpdateOperationsInput | string
    landfillAddress?: NullableStringFieldUpdateOperationsInput | string | null
    landfillPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUri?: NullableStringFieldUpdateOperationsInput | string | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionsUpdateWithoutScreenerInput = {
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutTransactionsNestedInput
    Entity?: EntityUpdateOneWithoutTransactionsNestedInput
    Waqf?: WaqfUpdateOneWithoutTransactionsNestedInput
    Landfills?: LandfillsUpdateOneWithoutTransactionsNestedInput
    Transformer?: TransformerUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutScreenerInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfID?: NullableIntFieldUpdateOperationsInput | number | null
    LandfillsID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionsUncheckedUpdateManyWithoutScreenerInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfID?: NullableIntFieldUpdateOperationsInput | number | null
    LandfillsID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistoryUpdateWithoutScreenerInput = {
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    totalTransferred?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneWithoutHistoryNestedInput
    Entity?: EntityUpdateOneWithoutHistoryNestedInput
    Waqf?: WaqfUpdateOneRequiredWithoutHistoryNestedInput
    Landfills?: LandfillsUpdateOneRequiredWithoutHistoryNestedInput
    Transformer?: TransformerUpdateOneWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateWithoutScreenerInput = {
    id?: IntFieldUpdateOperationsInput | number
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfName?: StringFieldUpdateOperationsInput | string
    totalTransferred?: IntFieldUpdateOperationsInput | number
    LandfillName?: StringFieldUpdateOperationsInput | string
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistoryUncheckedUpdateManyWithoutScreenerInput = {
    id?: IntFieldUpdateOperationsInput | number
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfName?: StringFieldUpdateOperationsInput | string
    totalTransferred?: IntFieldUpdateOperationsInput | number
    LandfillName?: StringFieldUpdateOperationsInput | string
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LandfillsCreateManyTransformerInput = {
    id?: number
    landfillName: string
    landfillAreaName: string
    landfillAddress?: string | null
    landfillPhoneNumber?: string | null
    imageUri?: string | null
    ScreenerID?: number | null
  }

  export type TransactionsCreateManyTransformerInput = {
    id?: number
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    UserID?: number | null
    EntityID?: number | null
    WaqfID?: number | null
    LandfillsID?: number | null
    ScreenerID?: number | null
  }

  export type HistoryCreateManyTransformerInput = {
    id?: number
    historyDate: Date | string
    historyDescription?: string | null
    UserID?: number | null
    EntityID?: number | null
    WaqfName: string
    totalTransferred: number
    LandfillName: string
    ScreenerID?: number | null
  }

  export type LandfillsUpdateWithoutTransformerInput = {
    landfillName?: StringFieldUpdateOperationsInput | string
    landfillAddress?: NullableStringFieldUpdateOperationsInput | string | null
    landfillPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUri?: NullableStringFieldUpdateOperationsInput | string | null
    landfillArea?: landfillAreaUpdateOneRequiredWithoutLandfillsNestedInput
    Screener?: ScreenerUpdateOneWithoutLandfillsNestedInput
    Transactions?: TransactionsUpdateManyWithoutLandfillsNestedInput
    History?: HistoryUpdateManyWithoutLandfillsNestedInput
  }

  export type LandfillsUncheckedUpdateWithoutTransformerInput = {
    id?: IntFieldUpdateOperationsInput | number
    landfillName?: StringFieldUpdateOperationsInput | string
    landfillAreaName?: StringFieldUpdateOperationsInput | string
    landfillAddress?: NullableStringFieldUpdateOperationsInput | string | null
    landfillPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUri?: NullableStringFieldUpdateOperationsInput | string | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    Transactions?: TransactionsUncheckedUpdateManyWithoutLandfillsNestedInput
    History?: HistoryUncheckedUpdateManyWithoutLandfillsNestedInput
  }

  export type LandfillsUncheckedUpdateManyWithoutTransformerInput = {
    id?: IntFieldUpdateOperationsInput | number
    landfillName?: StringFieldUpdateOperationsInput | string
    landfillAreaName?: StringFieldUpdateOperationsInput | string
    landfillAddress?: NullableStringFieldUpdateOperationsInput | string | null
    landfillPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUri?: NullableStringFieldUpdateOperationsInput | string | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionsUpdateWithoutTransformerInput = {
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutTransactionsNestedInput
    Entity?: EntityUpdateOneWithoutTransactionsNestedInput
    Waqf?: WaqfUpdateOneWithoutTransactionsNestedInput
    Landfills?: LandfillsUpdateOneWithoutTransactionsNestedInput
    Screener?: ScreenerUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutTransformerInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfID?: NullableIntFieldUpdateOperationsInput | number | null
    LandfillsID?: NullableIntFieldUpdateOperationsInput | number | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionsUncheckedUpdateManyWithoutTransformerInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfID?: NullableIntFieldUpdateOperationsInput | number | null
    LandfillsID?: NullableIntFieldUpdateOperationsInput | number | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistoryUpdateWithoutTransformerInput = {
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    totalTransferred?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneWithoutHistoryNestedInput
    Entity?: EntityUpdateOneWithoutHistoryNestedInput
    Waqf?: WaqfUpdateOneRequiredWithoutHistoryNestedInput
    Landfills?: LandfillsUpdateOneRequiredWithoutHistoryNestedInput
    Screener?: ScreenerUpdateOneWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateWithoutTransformerInput = {
    id?: IntFieldUpdateOperationsInput | number
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfName?: StringFieldUpdateOperationsInput | string
    totalTransferred?: IntFieldUpdateOperationsInput | number
    LandfillName?: StringFieldUpdateOperationsInput | string
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistoryUncheckedUpdateManyWithoutTransformerInput = {
    id?: IntFieldUpdateOperationsInput | number
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfName?: StringFieldUpdateOperationsInput | string
    totalTransferred?: IntFieldUpdateOperationsInput | number
    LandfillName?: StringFieldUpdateOperationsInput | string
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LandfillsCreateManyLandfillAreaInput = {
    id?: number
    landfillName: string
    landfillAddress?: string | null
    landfillPhoneNumber?: string | null
    imageUri?: string | null
    TransformerID?: number | null
    ScreenerID?: number | null
  }

  export type LandfillsUpdateWithoutLandfillAreaInput = {
    landfillName?: StringFieldUpdateOperationsInput | string
    landfillAddress?: NullableStringFieldUpdateOperationsInput | string | null
    landfillPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUri?: NullableStringFieldUpdateOperationsInput | string | null
    Transformer?: TransformerUpdateOneWithoutLandfillsNestedInput
    Screener?: ScreenerUpdateOneWithoutLandfillsNestedInput
    Transactions?: TransactionsUpdateManyWithoutLandfillsNestedInput
    History?: HistoryUpdateManyWithoutLandfillsNestedInput
  }

  export type LandfillsUncheckedUpdateWithoutLandfillAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    landfillName?: StringFieldUpdateOperationsInput | string
    landfillAddress?: NullableStringFieldUpdateOperationsInput | string | null
    landfillPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUri?: NullableStringFieldUpdateOperationsInput | string | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    Transactions?: TransactionsUncheckedUpdateManyWithoutLandfillsNestedInput
    History?: HistoryUncheckedUpdateManyWithoutLandfillsNestedInput
  }

  export type LandfillsUncheckedUpdateManyWithoutLandfillAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    landfillName?: StringFieldUpdateOperationsInput | string
    landfillAddress?: NullableStringFieldUpdateOperationsInput | string | null
    landfillPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    imageUri?: NullableStringFieldUpdateOperationsInput | string | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionsCreateManyLandfillsInput = {
    id?: number
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    UserID?: number | null
    EntityID?: number | null
    WaqfID?: number | null
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type HistoryCreateManyLandfillsInput = {
    id?: number
    historyDate: Date | string
    historyDescription?: string | null
    UserID?: number | null
    EntityID?: number | null
    WaqfName: string
    totalTransferred: number
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type TransactionsUpdateWithoutLandfillsInput = {
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutTransactionsNestedInput
    Entity?: EntityUpdateOneWithoutTransactionsNestedInput
    Waqf?: WaqfUpdateOneWithoutTransactionsNestedInput
    Screener?: ScreenerUpdateOneWithoutTransactionsNestedInput
    Transformer?: TransformerUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutLandfillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfID?: NullableIntFieldUpdateOperationsInput | number | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionsUncheckedUpdateManyWithoutLandfillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfID?: NullableIntFieldUpdateOperationsInput | number | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistoryUpdateWithoutLandfillsInput = {
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    totalTransferred?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneWithoutHistoryNestedInput
    Entity?: EntityUpdateOneWithoutHistoryNestedInput
    Waqf?: WaqfUpdateOneRequiredWithoutHistoryNestedInput
    Screener?: ScreenerUpdateOneWithoutHistoryNestedInput
    Transformer?: TransformerUpdateOneWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateWithoutLandfillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfName?: StringFieldUpdateOperationsInput | string
    totalTransferred?: IntFieldUpdateOperationsInput | number
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistoryUncheckedUpdateManyWithoutLandfillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    WaqfName?: StringFieldUpdateOperationsInput | string
    totalTransferred?: IntFieldUpdateOperationsInput | number
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CauseOnWaqfCreateManyWaqfInput = {
    waqfCauseID: number
  }

  export type HistoryCreateManyWaqfInput = {
    id?: number
    historyDate: Date | string
    historyDescription?: string | null
    UserID?: number | null
    EntityID?: number | null
    totalTransferred: number
    LandfillName: string
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type TransactionsCreateManyWaqfInput = {
    id?: number
    transactionDate: Date | string
    transactionAmount: number
    transactionType: string
    transactionStatus: string
    transactionDescription?: string | null
    transactionDeposited?: boolean
    transactionScreened?: boolean
    totalScreened: number
    transactionTransformed?: boolean
    transactionTransfered?: boolean
    UserID?: number | null
    EntityID?: number | null
    LandfillsID?: number | null
    ScreenerID?: number | null
    TransformerID?: number | null
  }

  export type CauseOnWaqfUpdateWithoutWaqfInput = {
    waqfCause?: WaqfCauseUpdateOneRequiredWithoutCauseOnWaqfNestedInput
  }

  export type CauseOnWaqfUncheckedUpdateWithoutWaqfInput = {
    waqfCauseID?: IntFieldUpdateOperationsInput | number
  }

  export type CauseOnWaqfUncheckedUpdateManyWithoutWaqfInput = {
    waqfCauseID?: IntFieldUpdateOperationsInput | number
  }

  export type HistoryUpdateWithoutWaqfInput = {
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    totalTransferred?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneWithoutHistoryNestedInput
    Entity?: EntityUpdateOneWithoutHistoryNestedInput
    Landfills?: LandfillsUpdateOneRequiredWithoutHistoryNestedInput
    Screener?: ScreenerUpdateOneWithoutHistoryNestedInput
    Transformer?: TransformerUpdateOneWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateWithoutWaqfInput = {
    id?: IntFieldUpdateOperationsInput | number
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    totalTransferred?: IntFieldUpdateOperationsInput | number
    LandfillName?: StringFieldUpdateOperationsInput | string
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistoryUncheckedUpdateManyWithoutWaqfInput = {
    id?: IntFieldUpdateOperationsInput | number
    historyDate?: DateTimeFieldUpdateOperationsInput | Date | string
    historyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    totalTransferred?: IntFieldUpdateOperationsInput | number
    LandfillName?: StringFieldUpdateOperationsInput | string
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionsUpdateWithoutWaqfInput = {
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutTransactionsNestedInput
    Entity?: EntityUpdateOneWithoutTransactionsNestedInput
    Landfills?: LandfillsUpdateOneWithoutTransactionsNestedInput
    Screener?: ScreenerUpdateOneWithoutTransactionsNestedInput
    Transformer?: TransformerUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutWaqfInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    LandfillsID?: NullableIntFieldUpdateOperationsInput | number | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TransactionsUncheckedUpdateManyWithoutWaqfInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionAmount?: FloatFieldUpdateOperationsInput | number
    transactionType?: StringFieldUpdateOperationsInput | string
    transactionStatus?: StringFieldUpdateOperationsInput | string
    transactionDescription?: NullableStringFieldUpdateOperationsInput | string | null
    transactionDeposited?: BoolFieldUpdateOperationsInput | boolean
    transactionScreened?: BoolFieldUpdateOperationsInput | boolean
    totalScreened?: IntFieldUpdateOperationsInput | number
    transactionTransformed?: BoolFieldUpdateOperationsInput | boolean
    transactionTransfered?: BoolFieldUpdateOperationsInput | boolean
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    EntityID?: NullableIntFieldUpdateOperationsInput | number | null
    LandfillsID?: NullableIntFieldUpdateOperationsInput | number | null
    ScreenerID?: NullableIntFieldUpdateOperationsInput | number | null
    TransformerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CauseOnWaqfCreateManyWaqfCauseInput = {
    waqfID: number
  }

  export type CauseOnWaqfUpdateWithoutWaqfCauseInput = {
    Waqf?: WaqfUpdateOneRequiredWithoutCauseOnWaqfNestedInput
  }

  export type CauseOnWaqfUncheckedUpdateWithoutWaqfCauseInput = {
    waqfID?: IntFieldUpdateOperationsInput | number
  }

  export type CauseOnWaqfUncheckedUpdateManyWithoutWaqfCauseInput = {
    waqfID?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EntityCountOutputTypeDefaultArgs instead
     */
    export type EntityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EntityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScreenerCountOutputTypeDefaultArgs instead
     */
    export type ScreenerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScreenerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransformerCountOutputTypeDefaultArgs instead
     */
    export type TransformerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransformerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LandfillAreaCountOutputTypeDefaultArgs instead
     */
    export type LandfillAreaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LandfillAreaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LandfillsCountOutputTypeDefaultArgs instead
     */
    export type LandfillsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LandfillsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WaqfCountOutputTypeDefaultArgs instead
     */
    export type WaqfCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WaqfCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WaqfCauseCountOutputTypeDefaultArgs instead
     */
    export type WaqfCauseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WaqfCauseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EntityDefaultArgs instead
     */
    export type EntityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EntityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScreenerDefaultArgs instead
     */
    export type ScreenerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScreenerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransformerDefaultArgs instead
     */
    export type TransformerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransformerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use landfillAreaDefaultArgs instead
     */
    export type landfillAreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = landfillAreaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LandfillsDefaultArgs instead
     */
    export type LandfillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LandfillsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WaqfDefaultArgs instead
     */
    export type WaqfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WaqfDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WaqfCauseDefaultArgs instead
     */
    export type WaqfCauseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WaqfCauseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CauseOnWaqfDefaultArgs instead
     */
    export type CauseOnWaqfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CauseOnWaqfDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionsDefaultArgs instead
     */
    export type TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HistoryDefaultArgs instead
     */
    export type HistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HistoryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}