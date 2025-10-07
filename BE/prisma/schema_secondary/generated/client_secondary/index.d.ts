
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
 * Model table_secondary
 * 
 */
export type table_secondary = $Result.DefaultSelection<Prisma.$table_secondaryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Table_secondaries
 * const table_secondaries = await prisma.table_secondary.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Table_secondaries
   * const table_secondaries = await prisma.table_secondary.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.table_secondary`: Exposes CRUD operations for the **table_secondary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Table_secondaries
    * const table_secondaries = await prisma.table_secondary.findMany()
    * ```
    */
  get table_secondary(): Prisma.table_secondaryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    table_secondary: 'table_secondary'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "table_secondary"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      table_secondary: {
        payload: Prisma.$table_secondaryPayload<ExtArgs>
        fields: Prisma.table_secondaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.table_secondaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_secondaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.table_secondaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_secondaryPayload>
          }
          findFirst: {
            args: Prisma.table_secondaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_secondaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.table_secondaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_secondaryPayload>
          }
          findMany: {
            args: Prisma.table_secondaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_secondaryPayload>[]
          }
          create: {
            args: Prisma.table_secondaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_secondaryPayload>
          }
          createMany: {
            args: Prisma.table_secondaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.table_secondaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_secondaryPayload>[]
          }
          delete: {
            args: Prisma.table_secondaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_secondaryPayload>
          }
          update: {
            args: Prisma.table_secondaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_secondaryPayload>
          }
          deleteMany: {
            args: Prisma.table_secondaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.table_secondaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.table_secondaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_secondaryPayload>[]
          }
          upsert: {
            args: Prisma.table_secondaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$table_secondaryPayload>
          }
          aggregate: {
            args: Prisma.Table_secondaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTable_secondary>
          }
          groupBy: {
            args: Prisma.table_secondaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Table_secondaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.table_secondaryCountArgs<ExtArgs>
            result: $Utils.Optional<Table_secondaryCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    table_secondary?: table_secondaryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model table_secondary
   */

  export type AggregateTable_secondary = {
    _count: Table_secondaryCountAggregateOutputType | null
    _avg: Table_secondaryAvgAggregateOutputType | null
    _sum: Table_secondarySumAggregateOutputType | null
    _min: Table_secondaryMinAggregateOutputType | null
    _max: Table_secondaryMaxAggregateOutputType | null
  }

  export type Table_secondaryAvgAggregateOutputType = {
    id: number | null
    field_3: number | null
  }

  export type Table_secondarySumAggregateOutputType = {
    id: number | null
    field_3: number | null
  }

  export type Table_secondaryMinAggregateOutputType = {
    id: number | null
    name: string | null
    del: boolean | null
    field_3: number | null
  }

  export type Table_secondaryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    del: boolean | null
    field_3: number | null
  }

  export type Table_secondaryCountAggregateOutputType = {
    id: number
    name: number
    del: number
    field_3: number
    _all: number
  }


  export type Table_secondaryAvgAggregateInputType = {
    id?: true
    field_3?: true
  }

  export type Table_secondarySumAggregateInputType = {
    id?: true
    field_3?: true
  }

  export type Table_secondaryMinAggregateInputType = {
    id?: true
    name?: true
    del?: true
    field_3?: true
  }

  export type Table_secondaryMaxAggregateInputType = {
    id?: true
    name?: true
    del?: true
    field_3?: true
  }

  export type Table_secondaryCountAggregateInputType = {
    id?: true
    name?: true
    del?: true
    field_3?: true
    _all?: true
  }

  export type Table_secondaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which table_secondary to aggregate.
     */
    where?: table_secondaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of table_secondaries to fetch.
     */
    orderBy?: table_secondaryOrderByWithRelationInput | table_secondaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: table_secondaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` table_secondaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` table_secondaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned table_secondaries
    **/
    _count?: true | Table_secondaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Table_secondaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Table_secondarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Table_secondaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Table_secondaryMaxAggregateInputType
  }

  export type GetTable_secondaryAggregateType<T extends Table_secondaryAggregateArgs> = {
        [P in keyof T & keyof AggregateTable_secondary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable_secondary[P]>
      : GetScalarType<T[P], AggregateTable_secondary[P]>
  }




  export type table_secondaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: table_secondaryWhereInput
    orderBy?: table_secondaryOrderByWithAggregationInput | table_secondaryOrderByWithAggregationInput[]
    by: Table_secondaryScalarFieldEnum[] | Table_secondaryScalarFieldEnum
    having?: table_secondaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Table_secondaryCountAggregateInputType | true
    _avg?: Table_secondaryAvgAggregateInputType
    _sum?: Table_secondarySumAggregateInputType
    _min?: Table_secondaryMinAggregateInputType
    _max?: Table_secondaryMaxAggregateInputType
  }

  export type Table_secondaryGroupByOutputType = {
    id: number
    name: string | null
    del: boolean
    field_3: number
    _count: Table_secondaryCountAggregateOutputType | null
    _avg: Table_secondaryAvgAggregateOutputType | null
    _sum: Table_secondarySumAggregateOutputType | null
    _min: Table_secondaryMinAggregateOutputType | null
    _max: Table_secondaryMaxAggregateOutputType | null
  }

  type GetTable_secondaryGroupByPayload<T extends table_secondaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Table_secondaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Table_secondaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Table_secondaryGroupByOutputType[P]>
            : GetScalarType<T[P], Table_secondaryGroupByOutputType[P]>
        }
      >
    >


  export type table_secondarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    del?: boolean
    field_3?: boolean
  }, ExtArgs["result"]["table_secondary"]>

  export type table_secondarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    del?: boolean
    field_3?: boolean
  }, ExtArgs["result"]["table_secondary"]>

  export type table_secondarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    del?: boolean
    field_3?: boolean
  }, ExtArgs["result"]["table_secondary"]>

  export type table_secondarySelectScalar = {
    id?: boolean
    name?: boolean
    del?: boolean
    field_3?: boolean
  }

  export type table_secondaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "del" | "field_3", ExtArgs["result"]["table_secondary"]>

  export type $table_secondaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "table_secondary"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      del: boolean
      field_3: number
    }, ExtArgs["result"]["table_secondary"]>
    composites: {}
  }

  type table_secondaryGetPayload<S extends boolean | null | undefined | table_secondaryDefaultArgs> = $Result.GetResult<Prisma.$table_secondaryPayload, S>

  type table_secondaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<table_secondaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Table_secondaryCountAggregateInputType | true
    }

  export interface table_secondaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['table_secondary'], meta: { name: 'table_secondary' } }
    /**
     * Find zero or one Table_secondary that matches the filter.
     * @param {table_secondaryFindUniqueArgs} args - Arguments to find a Table_secondary
     * @example
     * // Get one Table_secondary
     * const table_secondary = await prisma.table_secondary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends table_secondaryFindUniqueArgs>(args: SelectSubset<T, table_secondaryFindUniqueArgs<ExtArgs>>): Prisma__table_secondaryClient<$Result.GetResult<Prisma.$table_secondaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Table_secondary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {table_secondaryFindUniqueOrThrowArgs} args - Arguments to find a Table_secondary
     * @example
     * // Get one Table_secondary
     * const table_secondary = await prisma.table_secondary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends table_secondaryFindUniqueOrThrowArgs>(args: SelectSubset<T, table_secondaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__table_secondaryClient<$Result.GetResult<Prisma.$table_secondaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table_secondary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {table_secondaryFindFirstArgs} args - Arguments to find a Table_secondary
     * @example
     * // Get one Table_secondary
     * const table_secondary = await prisma.table_secondary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends table_secondaryFindFirstArgs>(args?: SelectSubset<T, table_secondaryFindFirstArgs<ExtArgs>>): Prisma__table_secondaryClient<$Result.GetResult<Prisma.$table_secondaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table_secondary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {table_secondaryFindFirstOrThrowArgs} args - Arguments to find a Table_secondary
     * @example
     * // Get one Table_secondary
     * const table_secondary = await prisma.table_secondary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends table_secondaryFindFirstOrThrowArgs>(args?: SelectSubset<T, table_secondaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__table_secondaryClient<$Result.GetResult<Prisma.$table_secondaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Table_secondaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {table_secondaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Table_secondaries
     * const table_secondaries = await prisma.table_secondary.findMany()
     * 
     * // Get first 10 Table_secondaries
     * const table_secondaries = await prisma.table_secondary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const table_secondaryWithIdOnly = await prisma.table_secondary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends table_secondaryFindManyArgs>(args?: SelectSubset<T, table_secondaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$table_secondaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Table_secondary.
     * @param {table_secondaryCreateArgs} args - Arguments to create a Table_secondary.
     * @example
     * // Create one Table_secondary
     * const Table_secondary = await prisma.table_secondary.create({
     *   data: {
     *     // ... data to create a Table_secondary
     *   }
     * })
     * 
     */
    create<T extends table_secondaryCreateArgs>(args: SelectSubset<T, table_secondaryCreateArgs<ExtArgs>>): Prisma__table_secondaryClient<$Result.GetResult<Prisma.$table_secondaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Table_secondaries.
     * @param {table_secondaryCreateManyArgs} args - Arguments to create many Table_secondaries.
     * @example
     * // Create many Table_secondaries
     * const table_secondary = await prisma.table_secondary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends table_secondaryCreateManyArgs>(args?: SelectSubset<T, table_secondaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Table_secondaries and returns the data saved in the database.
     * @param {table_secondaryCreateManyAndReturnArgs} args - Arguments to create many Table_secondaries.
     * @example
     * // Create many Table_secondaries
     * const table_secondary = await prisma.table_secondary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Table_secondaries and only return the `id`
     * const table_secondaryWithIdOnly = await prisma.table_secondary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends table_secondaryCreateManyAndReturnArgs>(args?: SelectSubset<T, table_secondaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$table_secondaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Table_secondary.
     * @param {table_secondaryDeleteArgs} args - Arguments to delete one Table_secondary.
     * @example
     * // Delete one Table_secondary
     * const Table_secondary = await prisma.table_secondary.delete({
     *   where: {
     *     // ... filter to delete one Table_secondary
     *   }
     * })
     * 
     */
    delete<T extends table_secondaryDeleteArgs>(args: SelectSubset<T, table_secondaryDeleteArgs<ExtArgs>>): Prisma__table_secondaryClient<$Result.GetResult<Prisma.$table_secondaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Table_secondary.
     * @param {table_secondaryUpdateArgs} args - Arguments to update one Table_secondary.
     * @example
     * // Update one Table_secondary
     * const table_secondary = await prisma.table_secondary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends table_secondaryUpdateArgs>(args: SelectSubset<T, table_secondaryUpdateArgs<ExtArgs>>): Prisma__table_secondaryClient<$Result.GetResult<Prisma.$table_secondaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Table_secondaries.
     * @param {table_secondaryDeleteManyArgs} args - Arguments to filter Table_secondaries to delete.
     * @example
     * // Delete a few Table_secondaries
     * const { count } = await prisma.table_secondary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends table_secondaryDeleteManyArgs>(args?: SelectSubset<T, table_secondaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Table_secondaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {table_secondaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Table_secondaries
     * const table_secondary = await prisma.table_secondary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends table_secondaryUpdateManyArgs>(args: SelectSubset<T, table_secondaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Table_secondaries and returns the data updated in the database.
     * @param {table_secondaryUpdateManyAndReturnArgs} args - Arguments to update many Table_secondaries.
     * @example
     * // Update many Table_secondaries
     * const table_secondary = await prisma.table_secondary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Table_secondaries and only return the `id`
     * const table_secondaryWithIdOnly = await prisma.table_secondary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends table_secondaryUpdateManyAndReturnArgs>(args: SelectSubset<T, table_secondaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$table_secondaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Table_secondary.
     * @param {table_secondaryUpsertArgs} args - Arguments to update or create a Table_secondary.
     * @example
     * // Update or create a Table_secondary
     * const table_secondary = await prisma.table_secondary.upsert({
     *   create: {
     *     // ... data to create a Table_secondary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table_secondary we want to update
     *   }
     * })
     */
    upsert<T extends table_secondaryUpsertArgs>(args: SelectSubset<T, table_secondaryUpsertArgs<ExtArgs>>): Prisma__table_secondaryClient<$Result.GetResult<Prisma.$table_secondaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Table_secondaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {table_secondaryCountArgs} args - Arguments to filter Table_secondaries to count.
     * @example
     * // Count the number of Table_secondaries
     * const count = await prisma.table_secondary.count({
     *   where: {
     *     // ... the filter for the Table_secondaries we want to count
     *   }
     * })
    **/
    count<T extends table_secondaryCountArgs>(
      args?: Subset<T, table_secondaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Table_secondaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table_secondary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_secondaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Table_secondaryAggregateArgs>(args: Subset<T, Table_secondaryAggregateArgs>): Prisma.PrismaPromise<GetTable_secondaryAggregateType<T>>

    /**
     * Group by Table_secondary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {table_secondaryGroupByArgs} args - Group by arguments.
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
      T extends table_secondaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: table_secondaryGroupByArgs['orderBy'] }
        : { orderBy?: table_secondaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, table_secondaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTable_secondaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the table_secondary model
   */
  readonly fields: table_secondaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for table_secondary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__table_secondaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the table_secondary model
   */
  interface table_secondaryFieldRefs {
    readonly id: FieldRef<"table_secondary", 'Int'>
    readonly name: FieldRef<"table_secondary", 'String'>
    readonly del: FieldRef<"table_secondary", 'Boolean'>
    readonly field_3: FieldRef<"table_secondary", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * table_secondary findUnique
   */
  export type table_secondaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_secondary
     */
    select?: table_secondarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_secondary
     */
    omit?: table_secondaryOmit<ExtArgs> | null
    /**
     * Filter, which table_secondary to fetch.
     */
    where: table_secondaryWhereUniqueInput
  }

  /**
   * table_secondary findUniqueOrThrow
   */
  export type table_secondaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_secondary
     */
    select?: table_secondarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_secondary
     */
    omit?: table_secondaryOmit<ExtArgs> | null
    /**
     * Filter, which table_secondary to fetch.
     */
    where: table_secondaryWhereUniqueInput
  }

  /**
   * table_secondary findFirst
   */
  export type table_secondaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_secondary
     */
    select?: table_secondarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_secondary
     */
    omit?: table_secondaryOmit<ExtArgs> | null
    /**
     * Filter, which table_secondary to fetch.
     */
    where?: table_secondaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of table_secondaries to fetch.
     */
    orderBy?: table_secondaryOrderByWithRelationInput | table_secondaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for table_secondaries.
     */
    cursor?: table_secondaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` table_secondaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` table_secondaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of table_secondaries.
     */
    distinct?: Table_secondaryScalarFieldEnum | Table_secondaryScalarFieldEnum[]
  }

  /**
   * table_secondary findFirstOrThrow
   */
  export type table_secondaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_secondary
     */
    select?: table_secondarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_secondary
     */
    omit?: table_secondaryOmit<ExtArgs> | null
    /**
     * Filter, which table_secondary to fetch.
     */
    where?: table_secondaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of table_secondaries to fetch.
     */
    orderBy?: table_secondaryOrderByWithRelationInput | table_secondaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for table_secondaries.
     */
    cursor?: table_secondaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` table_secondaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` table_secondaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of table_secondaries.
     */
    distinct?: Table_secondaryScalarFieldEnum | Table_secondaryScalarFieldEnum[]
  }

  /**
   * table_secondary findMany
   */
  export type table_secondaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_secondary
     */
    select?: table_secondarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_secondary
     */
    omit?: table_secondaryOmit<ExtArgs> | null
    /**
     * Filter, which table_secondaries to fetch.
     */
    where?: table_secondaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of table_secondaries to fetch.
     */
    orderBy?: table_secondaryOrderByWithRelationInput | table_secondaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing table_secondaries.
     */
    cursor?: table_secondaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` table_secondaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` table_secondaries.
     */
    skip?: number
    distinct?: Table_secondaryScalarFieldEnum | Table_secondaryScalarFieldEnum[]
  }

  /**
   * table_secondary create
   */
  export type table_secondaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_secondary
     */
    select?: table_secondarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_secondary
     */
    omit?: table_secondaryOmit<ExtArgs> | null
    /**
     * The data needed to create a table_secondary.
     */
    data?: XOR<table_secondaryCreateInput, table_secondaryUncheckedCreateInput>
  }

  /**
   * table_secondary createMany
   */
  export type table_secondaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many table_secondaries.
     */
    data: table_secondaryCreateManyInput | table_secondaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * table_secondary createManyAndReturn
   */
  export type table_secondaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_secondary
     */
    select?: table_secondarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the table_secondary
     */
    omit?: table_secondaryOmit<ExtArgs> | null
    /**
     * The data used to create many table_secondaries.
     */
    data: table_secondaryCreateManyInput | table_secondaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * table_secondary update
   */
  export type table_secondaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_secondary
     */
    select?: table_secondarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_secondary
     */
    omit?: table_secondaryOmit<ExtArgs> | null
    /**
     * The data needed to update a table_secondary.
     */
    data: XOR<table_secondaryUpdateInput, table_secondaryUncheckedUpdateInput>
    /**
     * Choose, which table_secondary to update.
     */
    where: table_secondaryWhereUniqueInput
  }

  /**
   * table_secondary updateMany
   */
  export type table_secondaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update table_secondaries.
     */
    data: XOR<table_secondaryUpdateManyMutationInput, table_secondaryUncheckedUpdateManyInput>
    /**
     * Filter which table_secondaries to update
     */
    where?: table_secondaryWhereInput
    /**
     * Limit how many table_secondaries to update.
     */
    limit?: number
  }

  /**
   * table_secondary updateManyAndReturn
   */
  export type table_secondaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_secondary
     */
    select?: table_secondarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the table_secondary
     */
    omit?: table_secondaryOmit<ExtArgs> | null
    /**
     * The data used to update table_secondaries.
     */
    data: XOR<table_secondaryUpdateManyMutationInput, table_secondaryUncheckedUpdateManyInput>
    /**
     * Filter which table_secondaries to update
     */
    where?: table_secondaryWhereInput
    /**
     * Limit how many table_secondaries to update.
     */
    limit?: number
  }

  /**
   * table_secondary upsert
   */
  export type table_secondaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_secondary
     */
    select?: table_secondarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_secondary
     */
    omit?: table_secondaryOmit<ExtArgs> | null
    /**
     * The filter to search for the table_secondary to update in case it exists.
     */
    where: table_secondaryWhereUniqueInput
    /**
     * In case the table_secondary found by the `where` argument doesn't exist, create a new table_secondary with this data.
     */
    create: XOR<table_secondaryCreateInput, table_secondaryUncheckedCreateInput>
    /**
     * In case the table_secondary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<table_secondaryUpdateInput, table_secondaryUncheckedUpdateInput>
  }

  /**
   * table_secondary delete
   */
  export type table_secondaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_secondary
     */
    select?: table_secondarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_secondary
     */
    omit?: table_secondaryOmit<ExtArgs> | null
    /**
     * Filter which table_secondary to delete.
     */
    where: table_secondaryWhereUniqueInput
  }

  /**
   * table_secondary deleteMany
   */
  export type table_secondaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which table_secondaries to delete
     */
    where?: table_secondaryWhereInput
    /**
     * Limit how many table_secondaries to delete.
     */
    limit?: number
  }

  /**
   * table_secondary without action
   */
  export type table_secondaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table_secondary
     */
    select?: table_secondarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the table_secondary
     */
    omit?: table_secondaryOmit<ExtArgs> | null
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


  export const Table_secondaryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    del: 'del',
    field_3: 'field_3'
  };

  export type Table_secondaryScalarFieldEnum = (typeof Table_secondaryScalarFieldEnum)[keyof typeof Table_secondaryScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type table_secondaryWhereInput = {
    AND?: table_secondaryWhereInput | table_secondaryWhereInput[]
    OR?: table_secondaryWhereInput[]
    NOT?: table_secondaryWhereInput | table_secondaryWhereInput[]
    id?: IntFilter<"table_secondary"> | number
    name?: StringNullableFilter<"table_secondary"> | string | null
    del?: BoolFilter<"table_secondary"> | boolean
    field_3?: IntFilter<"table_secondary"> | number
  }

  export type table_secondaryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    del?: SortOrder
    field_3?: SortOrder
  }

  export type table_secondaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: table_secondaryWhereInput | table_secondaryWhereInput[]
    OR?: table_secondaryWhereInput[]
    NOT?: table_secondaryWhereInput | table_secondaryWhereInput[]
    name?: StringNullableFilter<"table_secondary"> | string | null
    del?: BoolFilter<"table_secondary"> | boolean
    field_3?: IntFilter<"table_secondary"> | number
  }, "id">

  export type table_secondaryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    del?: SortOrder
    field_3?: SortOrder
    _count?: table_secondaryCountOrderByAggregateInput
    _avg?: table_secondaryAvgOrderByAggregateInput
    _max?: table_secondaryMaxOrderByAggregateInput
    _min?: table_secondaryMinOrderByAggregateInput
    _sum?: table_secondarySumOrderByAggregateInput
  }

  export type table_secondaryScalarWhereWithAggregatesInput = {
    AND?: table_secondaryScalarWhereWithAggregatesInput | table_secondaryScalarWhereWithAggregatesInput[]
    OR?: table_secondaryScalarWhereWithAggregatesInput[]
    NOT?: table_secondaryScalarWhereWithAggregatesInput | table_secondaryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"table_secondary"> | number
    name?: StringNullableWithAggregatesFilter<"table_secondary"> | string | null
    del?: BoolWithAggregatesFilter<"table_secondary"> | boolean
    field_3?: IntWithAggregatesFilter<"table_secondary"> | number
  }

  export type table_secondaryCreateInput = {
    name?: string | null
    del?: boolean
    field_3?: number
  }

  export type table_secondaryUncheckedCreateInput = {
    id?: number
    name?: string | null
    del?: boolean
    field_3?: number
  }

  export type table_secondaryUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    del?: BoolFieldUpdateOperationsInput | boolean
    field_3?: IntFieldUpdateOperationsInput | number
  }

  export type table_secondaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    del?: BoolFieldUpdateOperationsInput | boolean
    field_3?: IntFieldUpdateOperationsInput | number
  }

  export type table_secondaryCreateManyInput = {
    id?: number
    name?: string | null
    del?: boolean
    field_3?: number
  }

  export type table_secondaryUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    del?: BoolFieldUpdateOperationsInput | boolean
    field_3?: IntFieldUpdateOperationsInput | number
  }

  export type table_secondaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    del?: BoolFieldUpdateOperationsInput | boolean
    field_3?: IntFieldUpdateOperationsInput | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type table_secondaryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    del?: SortOrder
    field_3?: SortOrder
  }

  export type table_secondaryAvgOrderByAggregateInput = {
    id?: SortOrder
    field_3?: SortOrder
  }

  export type table_secondaryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    del?: SortOrder
    field_3?: SortOrder
  }

  export type table_secondaryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    del?: SortOrder
    field_3?: SortOrder
  }

  export type table_secondarySumOrderByAggregateInput = {
    id?: SortOrder
    field_3?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



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