
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
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model DocumentCategories
 * 
 */
export type DocumentCategories = $Result.DefaultSelection<Prisma.$DocumentCategoriesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Documents
 * const documents = await prisma.document.findMany()
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
   * // Fetch zero or more Documents
   * const documents = await prisma.document.findMany()
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
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentCategories`: Exposes CRUD operations for the **DocumentCategories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentCategories
    * const documentCategories = await prisma.documentCategories.findMany()
    * ```
    */
  get documentCategories(): Prisma.DocumentCategoriesDelegate<ExtArgs, ClientOptions>;
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
    Document: 'Document',
    Categories: 'Categories',
    DocumentCategories: 'DocumentCategories'
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
      modelProps: "document" | "categories" | "documentCategories"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      DocumentCategories: {
        payload: Prisma.$DocumentCategoriesPayload<ExtArgs>
        fields: Prisma.DocumentCategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentCategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentCategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCategoriesPayload>
          }
          findFirst: {
            args: Prisma.DocumentCategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentCategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCategoriesPayload>
          }
          findMany: {
            args: Prisma.DocumentCategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCategoriesPayload>[]
          }
          create: {
            args: Prisma.DocumentCategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCategoriesPayload>
          }
          createMany: {
            args: Prisma.DocumentCategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCategoriesPayload>[]
          }
          delete: {
            args: Prisma.DocumentCategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCategoriesPayload>
          }
          update: {
            args: Prisma.DocumentCategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCategoriesPayload>
          }
          deleteMany: {
            args: Prisma.DocumentCategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentCategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentCategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCategoriesPayload>[]
          }
          upsert: {
            args: Prisma.DocumentCategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCategoriesPayload>
          }
          aggregate: {
            args: Prisma.DocumentCategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentCategories>
          }
          groupBy: {
            args: Prisma.DocumentCategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentCategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCategoriesCountAggregateOutputType> | number
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
    document?: DocumentOmit
    categories?: CategoriesOmit
    documentCategories?: DocumentCategoriesOmit
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
   * Count Type DocumentCountOutputType
   */

  export type DocumentCountOutputType = {
    categories: number
  }

  export type DocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | DocumentCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCountOutputType
     */
    select?: DocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentCategoriesWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    documents: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | CategoriesCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentCategoriesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    id: number | null
  }

  export type DocumentSumAggregateOutputType = {
    id: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    pathImg: string | null
    pathFile: string | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    pathImg: string | null
    pathFile: string | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    pathImg: number
    pathFile: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    id?: true
  }

  export type DocumentSumAggregateInputType = {
    id?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    pathImg?: true
    pathFile?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    pathImg?: true
    pathFile?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    pathImg?: true
    pathFile?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: number
    name: string
    description: string
    pathImg: string
    pathFile: string
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    pathImg?: boolean
    pathFile?: boolean
    categories?: boolean | Document$categoriesArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    pathImg?: boolean
    pathFile?: boolean
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    pathImg?: boolean
    pathFile?: boolean
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    pathImg?: boolean
    pathFile?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "pathImg" | "pathFile", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Document$categoriesArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      categories: Prisma.$DocumentCategoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      pathImg: string
      pathFile: string
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Document$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Document$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'Int'>
    readonly name: FieldRef<"Document", 'String'>
    readonly description: FieldRef<"Document", 'String'>
    readonly pathImg: FieldRef<"Document", 'String'>
    readonly pathFile: FieldRef<"Document", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.categories
   */
  export type Document$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCategories
     */
    select?: DocumentCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCategories
     */
    omit?: DocumentCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCategoriesInclude<ExtArgs> | null
    where?: DocumentCategoriesWhereInput
    orderBy?: DocumentCategoriesOrderByWithRelationInput | DocumentCategoriesOrderByWithRelationInput[]
    cursor?: DocumentCategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentCategoriesScalarFieldEnum | DocumentCategoriesScalarFieldEnum[]
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    description: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    description: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    description: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    description?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    description?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    description?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    description: string
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    documents?: boolean | Categories$documentsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean
    description?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | Categories$documentsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      documents: Prisma.$DocumentCategoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends Categories$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Categories$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'Int'>
    readonly description: FieldRef<"Categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.documents
   */
  export type Categories$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCategories
     */
    select?: DocumentCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCategories
     */
    omit?: DocumentCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCategoriesInclude<ExtArgs> | null
    where?: DocumentCategoriesWhereInput
    orderBy?: DocumentCategoriesOrderByWithRelationInput | DocumentCategoriesOrderByWithRelationInput[]
    cursor?: DocumentCategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentCategoriesScalarFieldEnum | DocumentCategoriesScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model DocumentCategories
   */

  export type AggregateDocumentCategories = {
    _count: DocumentCategoriesCountAggregateOutputType | null
    _avg: DocumentCategoriesAvgAggregateOutputType | null
    _sum: DocumentCategoriesSumAggregateOutputType | null
    _min: DocumentCategoriesMinAggregateOutputType | null
    _max: DocumentCategoriesMaxAggregateOutputType | null
  }

  export type DocumentCategoriesAvgAggregateOutputType = {
    documentId: number | null
    categoryId: number | null
  }

  export type DocumentCategoriesSumAggregateOutputType = {
    documentId: number | null
    categoryId: number | null
  }

  export type DocumentCategoriesMinAggregateOutputType = {
    documentId: number | null
    categoryId: number | null
  }

  export type DocumentCategoriesMaxAggregateOutputType = {
    documentId: number | null
    categoryId: number | null
  }

  export type DocumentCategoriesCountAggregateOutputType = {
    documentId: number
    categoryId: number
    _all: number
  }


  export type DocumentCategoriesAvgAggregateInputType = {
    documentId?: true
    categoryId?: true
  }

  export type DocumentCategoriesSumAggregateInputType = {
    documentId?: true
    categoryId?: true
  }

  export type DocumentCategoriesMinAggregateInputType = {
    documentId?: true
    categoryId?: true
  }

  export type DocumentCategoriesMaxAggregateInputType = {
    documentId?: true
    categoryId?: true
  }

  export type DocumentCategoriesCountAggregateInputType = {
    documentId?: true
    categoryId?: true
    _all?: true
  }

  export type DocumentCategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentCategories to aggregate.
     */
    where?: DocumentCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentCategories to fetch.
     */
    orderBy?: DocumentCategoriesOrderByWithRelationInput | DocumentCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentCategories
    **/
    _count?: true | DocumentCategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentCategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentCategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentCategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentCategoriesMaxAggregateInputType
  }

  export type GetDocumentCategoriesAggregateType<T extends DocumentCategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentCategories[P]>
      : GetScalarType<T[P], AggregateDocumentCategories[P]>
  }




  export type DocumentCategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentCategoriesWhereInput
    orderBy?: DocumentCategoriesOrderByWithAggregationInput | DocumentCategoriesOrderByWithAggregationInput[]
    by: DocumentCategoriesScalarFieldEnum[] | DocumentCategoriesScalarFieldEnum
    having?: DocumentCategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCategoriesCountAggregateInputType | true
    _avg?: DocumentCategoriesAvgAggregateInputType
    _sum?: DocumentCategoriesSumAggregateInputType
    _min?: DocumentCategoriesMinAggregateInputType
    _max?: DocumentCategoriesMaxAggregateInputType
  }

  export type DocumentCategoriesGroupByOutputType = {
    documentId: number
    categoryId: number
    _count: DocumentCategoriesCountAggregateOutputType | null
    _avg: DocumentCategoriesAvgAggregateOutputType | null
    _sum: DocumentCategoriesSumAggregateOutputType | null
    _min: DocumentCategoriesMinAggregateOutputType | null
    _max: DocumentCategoriesMaxAggregateOutputType | null
  }

  type GetDocumentCategoriesGroupByPayload<T extends DocumentCategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentCategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentCategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentCategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentCategoriesGroupByOutputType[P]>
        }
      >
    >


  export type DocumentCategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    documentId?: boolean
    categoryId?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentCategories"]>

  export type DocumentCategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    documentId?: boolean
    categoryId?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentCategories"]>

  export type DocumentCategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    documentId?: boolean
    categoryId?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentCategories"]>

  export type DocumentCategoriesSelectScalar = {
    documentId?: boolean
    categoryId?: boolean
  }

  export type DocumentCategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"documentId" | "categoryId", ExtArgs["result"]["documentCategories"]>
  export type DocumentCategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }
  export type DocumentCategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }
  export type DocumentCategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }

  export type $DocumentCategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentCategories"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
      category: Prisma.$CategoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      documentId: number
      categoryId: number
    }, ExtArgs["result"]["documentCategories"]>
    composites: {}
  }

  type DocumentCategoriesGetPayload<S extends boolean | null | undefined | DocumentCategoriesDefaultArgs> = $Result.GetResult<Prisma.$DocumentCategoriesPayload, S>

  type DocumentCategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentCategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCategoriesCountAggregateInputType | true
    }

  export interface DocumentCategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentCategories'], meta: { name: 'DocumentCategories' } }
    /**
     * Find zero or one DocumentCategories that matches the filter.
     * @param {DocumentCategoriesFindUniqueArgs} args - Arguments to find a DocumentCategories
     * @example
     * // Get one DocumentCategories
     * const documentCategories = await prisma.documentCategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentCategoriesFindUniqueArgs>(args: SelectSubset<T, DocumentCategoriesFindUniqueArgs<ExtArgs>>): Prisma__DocumentCategoriesClient<$Result.GetResult<Prisma.$DocumentCategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentCategories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentCategoriesFindUniqueOrThrowArgs} args - Arguments to find a DocumentCategories
     * @example
     * // Get one DocumentCategories
     * const documentCategories = await prisma.documentCategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentCategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentCategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentCategoriesClient<$Result.GetResult<Prisma.$DocumentCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCategoriesFindFirstArgs} args - Arguments to find a DocumentCategories
     * @example
     * // Get one DocumentCategories
     * const documentCategories = await prisma.documentCategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentCategoriesFindFirstArgs>(args?: SelectSubset<T, DocumentCategoriesFindFirstArgs<ExtArgs>>): Prisma__DocumentCategoriesClient<$Result.GetResult<Prisma.$DocumentCategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentCategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCategoriesFindFirstOrThrowArgs} args - Arguments to find a DocumentCategories
     * @example
     * // Get one DocumentCategories
     * const documentCategories = await prisma.documentCategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentCategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentCategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentCategoriesClient<$Result.GetResult<Prisma.$DocumentCategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentCategories
     * const documentCategories = await prisma.documentCategories.findMany()
     * 
     * // Get first 10 DocumentCategories
     * const documentCategories = await prisma.documentCategories.findMany({ take: 10 })
     * 
     * // Only select the `documentId`
     * const documentCategoriesWithDocumentIdOnly = await prisma.documentCategories.findMany({ select: { documentId: true } })
     * 
     */
    findMany<T extends DocumentCategoriesFindManyArgs>(args?: SelectSubset<T, DocumentCategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentCategories.
     * @param {DocumentCategoriesCreateArgs} args - Arguments to create a DocumentCategories.
     * @example
     * // Create one DocumentCategories
     * const DocumentCategories = await prisma.documentCategories.create({
     *   data: {
     *     // ... data to create a DocumentCategories
     *   }
     * })
     * 
     */
    create<T extends DocumentCategoriesCreateArgs>(args: SelectSubset<T, DocumentCategoriesCreateArgs<ExtArgs>>): Prisma__DocumentCategoriesClient<$Result.GetResult<Prisma.$DocumentCategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentCategories.
     * @param {DocumentCategoriesCreateManyArgs} args - Arguments to create many DocumentCategories.
     * @example
     * // Create many DocumentCategories
     * const documentCategories = await prisma.documentCategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCategoriesCreateManyArgs>(args?: SelectSubset<T, DocumentCategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentCategories and returns the data saved in the database.
     * @param {DocumentCategoriesCreateManyAndReturnArgs} args - Arguments to create many DocumentCategories.
     * @example
     * // Create many DocumentCategories
     * const documentCategories = await prisma.documentCategories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentCategories and only return the `documentId`
     * const documentCategoriesWithDocumentIdOnly = await prisma.documentCategories.createManyAndReturn({
     *   select: { documentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentCategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentCategories.
     * @param {DocumentCategoriesDeleteArgs} args - Arguments to delete one DocumentCategories.
     * @example
     * // Delete one DocumentCategories
     * const DocumentCategories = await prisma.documentCategories.delete({
     *   where: {
     *     // ... filter to delete one DocumentCategories
     *   }
     * })
     * 
     */
    delete<T extends DocumentCategoriesDeleteArgs>(args: SelectSubset<T, DocumentCategoriesDeleteArgs<ExtArgs>>): Prisma__DocumentCategoriesClient<$Result.GetResult<Prisma.$DocumentCategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentCategories.
     * @param {DocumentCategoriesUpdateArgs} args - Arguments to update one DocumentCategories.
     * @example
     * // Update one DocumentCategories
     * const documentCategories = await prisma.documentCategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentCategoriesUpdateArgs>(args: SelectSubset<T, DocumentCategoriesUpdateArgs<ExtArgs>>): Prisma__DocumentCategoriesClient<$Result.GetResult<Prisma.$DocumentCategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentCategories.
     * @param {DocumentCategoriesDeleteManyArgs} args - Arguments to filter DocumentCategories to delete.
     * @example
     * // Delete a few DocumentCategories
     * const { count } = await prisma.documentCategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentCategoriesDeleteManyArgs>(args?: SelectSubset<T, DocumentCategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentCategories
     * const documentCategories = await prisma.documentCategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentCategoriesUpdateManyArgs>(args: SelectSubset<T, DocumentCategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentCategories and returns the data updated in the database.
     * @param {DocumentCategoriesUpdateManyAndReturnArgs} args - Arguments to update many DocumentCategories.
     * @example
     * // Update many DocumentCategories
     * const documentCategories = await prisma.documentCategories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentCategories and only return the `documentId`
     * const documentCategoriesWithDocumentIdOnly = await prisma.documentCategories.updateManyAndReturn({
     *   select: { documentId: true },
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
    updateManyAndReturn<T extends DocumentCategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentCategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentCategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentCategories.
     * @param {DocumentCategoriesUpsertArgs} args - Arguments to update or create a DocumentCategories.
     * @example
     * // Update or create a DocumentCategories
     * const documentCategories = await prisma.documentCategories.upsert({
     *   create: {
     *     // ... data to create a DocumentCategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentCategories we want to update
     *   }
     * })
     */
    upsert<T extends DocumentCategoriesUpsertArgs>(args: SelectSubset<T, DocumentCategoriesUpsertArgs<ExtArgs>>): Prisma__DocumentCategoriesClient<$Result.GetResult<Prisma.$DocumentCategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCategoriesCountArgs} args - Arguments to filter DocumentCategories to count.
     * @example
     * // Count the number of DocumentCategories
     * const count = await prisma.documentCategories.count({
     *   where: {
     *     // ... the filter for the DocumentCategories we want to count
     *   }
     * })
    **/
    count<T extends DocumentCategoriesCountArgs>(
      args?: Subset<T, DocumentCategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentCategoriesAggregateArgs>(args: Subset<T, DocumentCategoriesAggregateArgs>): Prisma.PrismaPromise<GetDocumentCategoriesAggregateType<T>>

    /**
     * Group by DocumentCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCategoriesGroupByArgs} args - Group by arguments.
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
      T extends DocumentCategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentCategoriesGroupByArgs['orderBy'] }
        : { orderBy?: DocumentCategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentCategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentCategories model
   */
  readonly fields: DocumentCategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentCategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentCategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DocumentCategories model
   */
  interface DocumentCategoriesFieldRefs {
    readonly documentId: FieldRef<"DocumentCategories", 'Int'>
    readonly categoryId: FieldRef<"DocumentCategories", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DocumentCategories findUnique
   */
  export type DocumentCategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCategories
     */
    select?: DocumentCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCategories
     */
    omit?: DocumentCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which DocumentCategories to fetch.
     */
    where: DocumentCategoriesWhereUniqueInput
  }

  /**
   * DocumentCategories findUniqueOrThrow
   */
  export type DocumentCategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCategories
     */
    select?: DocumentCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCategories
     */
    omit?: DocumentCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which DocumentCategories to fetch.
     */
    where: DocumentCategoriesWhereUniqueInput
  }

  /**
   * DocumentCategories findFirst
   */
  export type DocumentCategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCategories
     */
    select?: DocumentCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCategories
     */
    omit?: DocumentCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which DocumentCategories to fetch.
     */
    where?: DocumentCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentCategories to fetch.
     */
    orderBy?: DocumentCategoriesOrderByWithRelationInput | DocumentCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentCategories.
     */
    cursor?: DocumentCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentCategories.
     */
    distinct?: DocumentCategoriesScalarFieldEnum | DocumentCategoriesScalarFieldEnum[]
  }

  /**
   * DocumentCategories findFirstOrThrow
   */
  export type DocumentCategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCategories
     */
    select?: DocumentCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCategories
     */
    omit?: DocumentCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which DocumentCategories to fetch.
     */
    where?: DocumentCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentCategories to fetch.
     */
    orderBy?: DocumentCategoriesOrderByWithRelationInput | DocumentCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentCategories.
     */
    cursor?: DocumentCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentCategories.
     */
    distinct?: DocumentCategoriesScalarFieldEnum | DocumentCategoriesScalarFieldEnum[]
  }

  /**
   * DocumentCategories findMany
   */
  export type DocumentCategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCategories
     */
    select?: DocumentCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCategories
     */
    omit?: DocumentCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which DocumentCategories to fetch.
     */
    where?: DocumentCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentCategories to fetch.
     */
    orderBy?: DocumentCategoriesOrderByWithRelationInput | DocumentCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentCategories.
     */
    cursor?: DocumentCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentCategories.
     */
    skip?: number
    distinct?: DocumentCategoriesScalarFieldEnum | DocumentCategoriesScalarFieldEnum[]
  }

  /**
   * DocumentCategories create
   */
  export type DocumentCategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCategories
     */
    select?: DocumentCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCategories
     */
    omit?: DocumentCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentCategories.
     */
    data: XOR<DocumentCategoriesCreateInput, DocumentCategoriesUncheckedCreateInput>
  }

  /**
   * DocumentCategories createMany
   */
  export type DocumentCategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentCategories.
     */
    data: DocumentCategoriesCreateManyInput | DocumentCategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentCategories createManyAndReturn
   */
  export type DocumentCategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCategories
     */
    select?: DocumentCategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCategories
     */
    omit?: DocumentCategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentCategories.
     */
    data: DocumentCategoriesCreateManyInput | DocumentCategoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCategoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentCategories update
   */
  export type DocumentCategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCategories
     */
    select?: DocumentCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCategories
     */
    omit?: DocumentCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentCategories.
     */
    data: XOR<DocumentCategoriesUpdateInput, DocumentCategoriesUncheckedUpdateInput>
    /**
     * Choose, which DocumentCategories to update.
     */
    where: DocumentCategoriesWhereUniqueInput
  }

  /**
   * DocumentCategories updateMany
   */
  export type DocumentCategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentCategories.
     */
    data: XOR<DocumentCategoriesUpdateManyMutationInput, DocumentCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which DocumentCategories to update
     */
    where?: DocumentCategoriesWhereInput
    /**
     * Limit how many DocumentCategories to update.
     */
    limit?: number
  }

  /**
   * DocumentCategories updateManyAndReturn
   */
  export type DocumentCategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCategories
     */
    select?: DocumentCategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCategories
     */
    omit?: DocumentCategoriesOmit<ExtArgs> | null
    /**
     * The data used to update DocumentCategories.
     */
    data: XOR<DocumentCategoriesUpdateManyMutationInput, DocumentCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which DocumentCategories to update
     */
    where?: DocumentCategoriesWhereInput
    /**
     * Limit how many DocumentCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCategoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentCategories upsert
   */
  export type DocumentCategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCategories
     */
    select?: DocumentCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCategories
     */
    omit?: DocumentCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentCategories to update in case it exists.
     */
    where: DocumentCategoriesWhereUniqueInput
    /**
     * In case the DocumentCategories found by the `where` argument doesn't exist, create a new DocumentCategories with this data.
     */
    create: XOR<DocumentCategoriesCreateInput, DocumentCategoriesUncheckedCreateInput>
    /**
     * In case the DocumentCategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentCategoriesUpdateInput, DocumentCategoriesUncheckedUpdateInput>
  }

  /**
   * DocumentCategories delete
   */
  export type DocumentCategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCategories
     */
    select?: DocumentCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCategories
     */
    omit?: DocumentCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCategoriesInclude<ExtArgs> | null
    /**
     * Filter which DocumentCategories to delete.
     */
    where: DocumentCategoriesWhereUniqueInput
  }

  /**
   * DocumentCategories deleteMany
   */
  export type DocumentCategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentCategories to delete
     */
    where?: DocumentCategoriesWhereInput
    /**
     * Limit how many DocumentCategories to delete.
     */
    limit?: number
  }

  /**
   * DocumentCategories without action
   */
  export type DocumentCategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCategories
     */
    select?: DocumentCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCategories
     */
    omit?: DocumentCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCategoriesInclude<ExtArgs> | null
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


  export const DocumentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    pathImg: 'pathImg',
    pathFile: 'pathFile'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    description: 'description'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const DocumentCategoriesScalarFieldEnum: {
    documentId: 'documentId',
    categoryId: 'categoryId'
  };

  export type DocumentCategoriesScalarFieldEnum = (typeof DocumentCategoriesScalarFieldEnum)[keyof typeof DocumentCategoriesScalarFieldEnum]


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


  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: IntFilter<"Document"> | number
    name?: StringFilter<"Document"> | string
    description?: StringFilter<"Document"> | string
    pathImg?: StringFilter<"Document"> | string
    pathFile?: StringFilter<"Document"> | string
    categories?: DocumentCategoriesListRelationFilter
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pathImg?: SortOrder
    pathFile?: SortOrder
    categories?: DocumentCategoriesOrderByRelationAggregateInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    description?: StringFilter<"Document"> | string
    pathImg?: StringFilter<"Document"> | string
    pathFile?: StringFilter<"Document"> | string
    categories?: DocumentCategoriesListRelationFilter
  }, "id" | "name">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pathImg?: SortOrder
    pathFile?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Document"> | number
    name?: StringWithAggregatesFilter<"Document"> | string
    description?: StringWithAggregatesFilter<"Document"> | string
    pathImg?: StringWithAggregatesFilter<"Document"> | string
    pathFile?: StringWithAggregatesFilter<"Document"> | string
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: IntFilter<"Categories"> | number
    description?: StringFilter<"Categories"> | string
    documents?: DocumentCategoriesListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    documents?: DocumentCategoriesOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    description?: StringFilter<"Categories"> | string
    documents?: DocumentCategoriesListRelationFilter
  }, "id">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categories"> | number
    description?: StringWithAggregatesFilter<"Categories"> | string
  }

  export type DocumentCategoriesWhereInput = {
    AND?: DocumentCategoriesWhereInput | DocumentCategoriesWhereInput[]
    OR?: DocumentCategoriesWhereInput[]
    NOT?: DocumentCategoriesWhereInput | DocumentCategoriesWhereInput[]
    documentId?: IntFilter<"DocumentCategories"> | number
    categoryId?: IntFilter<"DocumentCategories"> | number
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
  }

  export type DocumentCategoriesOrderByWithRelationInput = {
    documentId?: SortOrder
    categoryId?: SortOrder
    document?: DocumentOrderByWithRelationInput
    category?: CategoriesOrderByWithRelationInput
  }

  export type DocumentCategoriesWhereUniqueInput = Prisma.AtLeast<{
    documentId_categoryId?: DocumentCategoriesDocumentIdCategoryIdCompoundUniqueInput
    AND?: DocumentCategoriesWhereInput | DocumentCategoriesWhereInput[]
    OR?: DocumentCategoriesWhereInput[]
    NOT?: DocumentCategoriesWhereInput | DocumentCategoriesWhereInput[]
    documentId?: IntFilter<"DocumentCategories"> | number
    categoryId?: IntFilter<"DocumentCategories"> | number
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
  }, "documentId_categoryId">

  export type DocumentCategoriesOrderByWithAggregationInput = {
    documentId?: SortOrder
    categoryId?: SortOrder
    _count?: DocumentCategoriesCountOrderByAggregateInput
    _avg?: DocumentCategoriesAvgOrderByAggregateInput
    _max?: DocumentCategoriesMaxOrderByAggregateInput
    _min?: DocumentCategoriesMinOrderByAggregateInput
    _sum?: DocumentCategoriesSumOrderByAggregateInput
  }

  export type DocumentCategoriesScalarWhereWithAggregatesInput = {
    AND?: DocumentCategoriesScalarWhereWithAggregatesInput | DocumentCategoriesScalarWhereWithAggregatesInput[]
    OR?: DocumentCategoriesScalarWhereWithAggregatesInput[]
    NOT?: DocumentCategoriesScalarWhereWithAggregatesInput | DocumentCategoriesScalarWhereWithAggregatesInput[]
    documentId?: IntWithAggregatesFilter<"DocumentCategories"> | number
    categoryId?: IntWithAggregatesFilter<"DocumentCategories"> | number
  }

  export type DocumentCreateInput = {
    name: string
    description: string
    pathImg: string
    pathFile: string
    categories?: DocumentCategoriesCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    pathImg: string
    pathFile: string
    categories?: DocumentCategoriesUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pathImg?: StringFieldUpdateOperationsInput | string
    pathFile?: StringFieldUpdateOperationsInput | string
    categories?: DocumentCategoriesUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pathImg?: StringFieldUpdateOperationsInput | string
    pathFile?: StringFieldUpdateOperationsInput | string
    categories?: DocumentCategoriesUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentCreateManyInput = {
    id?: number
    name: string
    description: string
    pathImg: string
    pathFile: string
  }

  export type DocumentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pathImg?: StringFieldUpdateOperationsInput | string
    pathFile?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pathImg?: StringFieldUpdateOperationsInput | string
    pathFile?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesCreateInput = {
    description: string
    documents?: DocumentCategoriesCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: number
    description: string
    documents?: DocumentCategoriesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    documents?: DocumentCategoriesUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    documents?: DocumentCategoriesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: number
    description: string
  }

  export type CategoriesUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCategoriesCreateInput = {
    document: DocumentCreateNestedOneWithoutCategoriesInput
    category: CategoriesCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentCategoriesUncheckedCreateInput = {
    documentId: number
    categoryId: number
  }

  export type DocumentCategoriesUpdateInput = {
    document?: DocumentUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoriesUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentCategoriesUncheckedUpdateInput = {
    documentId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentCategoriesCreateManyInput = {
    documentId: number
    categoryId: number
  }

  export type DocumentCategoriesUpdateManyMutationInput = {

  }

  export type DocumentCategoriesUncheckedUpdateManyInput = {
    documentId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
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

  export type DocumentCategoriesListRelationFilter = {
    every?: DocumentCategoriesWhereInput
    some?: DocumentCategoriesWhereInput
    none?: DocumentCategoriesWhereInput
  }

  export type DocumentCategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pathImg?: SortOrder
    pathFile?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pathImg?: SortOrder
    pathFile?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    pathImg?: SortOrder
    pathFile?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DocumentScalarRelationFilter = {
    is?: DocumentWhereInput
    isNot?: DocumentWhereInput
  }

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type DocumentCategoriesDocumentIdCategoryIdCompoundUniqueInput = {
    documentId: number
    categoryId: number
  }

  export type DocumentCategoriesCountOrderByAggregateInput = {
    documentId?: SortOrder
    categoryId?: SortOrder
  }

  export type DocumentCategoriesAvgOrderByAggregateInput = {
    documentId?: SortOrder
    categoryId?: SortOrder
  }

  export type DocumentCategoriesMaxOrderByAggregateInput = {
    documentId?: SortOrder
    categoryId?: SortOrder
  }

  export type DocumentCategoriesMinOrderByAggregateInput = {
    documentId?: SortOrder
    categoryId?: SortOrder
  }

  export type DocumentCategoriesSumOrderByAggregateInput = {
    documentId?: SortOrder
    categoryId?: SortOrder
  }

  export type DocumentCategoriesCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentCategoriesCreateWithoutDocumentInput, DocumentCategoriesUncheckedCreateWithoutDocumentInput> | DocumentCategoriesCreateWithoutDocumentInput[] | DocumentCategoriesUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentCategoriesCreateOrConnectWithoutDocumentInput | DocumentCategoriesCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentCategoriesCreateManyDocumentInputEnvelope
    connect?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
  }

  export type DocumentCategoriesUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DocumentCategoriesCreateWithoutDocumentInput, DocumentCategoriesUncheckedCreateWithoutDocumentInput> | DocumentCategoriesCreateWithoutDocumentInput[] | DocumentCategoriesUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentCategoriesCreateOrConnectWithoutDocumentInput | DocumentCategoriesCreateOrConnectWithoutDocumentInput[]
    createMany?: DocumentCategoriesCreateManyDocumentInputEnvelope
    connect?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DocumentCategoriesUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentCategoriesCreateWithoutDocumentInput, DocumentCategoriesUncheckedCreateWithoutDocumentInput> | DocumentCategoriesCreateWithoutDocumentInput[] | DocumentCategoriesUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentCategoriesCreateOrConnectWithoutDocumentInput | DocumentCategoriesCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentCategoriesUpsertWithWhereUniqueWithoutDocumentInput | DocumentCategoriesUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentCategoriesCreateManyDocumentInputEnvelope
    set?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
    disconnect?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
    delete?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
    connect?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
    update?: DocumentCategoriesUpdateWithWhereUniqueWithoutDocumentInput | DocumentCategoriesUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentCategoriesUpdateManyWithWhereWithoutDocumentInput | DocumentCategoriesUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentCategoriesScalarWhereInput | DocumentCategoriesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DocumentCategoriesUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DocumentCategoriesCreateWithoutDocumentInput, DocumentCategoriesUncheckedCreateWithoutDocumentInput> | DocumentCategoriesCreateWithoutDocumentInput[] | DocumentCategoriesUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DocumentCategoriesCreateOrConnectWithoutDocumentInput | DocumentCategoriesCreateOrConnectWithoutDocumentInput[]
    upsert?: DocumentCategoriesUpsertWithWhereUniqueWithoutDocumentInput | DocumentCategoriesUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DocumentCategoriesCreateManyDocumentInputEnvelope
    set?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
    disconnect?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
    delete?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
    connect?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
    update?: DocumentCategoriesUpdateWithWhereUniqueWithoutDocumentInput | DocumentCategoriesUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DocumentCategoriesUpdateManyWithWhereWithoutDocumentInput | DocumentCategoriesUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DocumentCategoriesScalarWhereInput | DocumentCategoriesScalarWhereInput[]
  }

  export type DocumentCategoriesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<DocumentCategoriesCreateWithoutCategoryInput, DocumentCategoriesUncheckedCreateWithoutCategoryInput> | DocumentCategoriesCreateWithoutCategoryInput[] | DocumentCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DocumentCategoriesCreateOrConnectWithoutCategoryInput | DocumentCategoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: DocumentCategoriesCreateManyCategoryInputEnvelope
    connect?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
  }

  export type DocumentCategoriesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<DocumentCategoriesCreateWithoutCategoryInput, DocumentCategoriesUncheckedCreateWithoutCategoryInput> | DocumentCategoriesCreateWithoutCategoryInput[] | DocumentCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DocumentCategoriesCreateOrConnectWithoutCategoryInput | DocumentCategoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: DocumentCategoriesCreateManyCategoryInputEnvelope
    connect?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
  }

  export type DocumentCategoriesUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<DocumentCategoriesCreateWithoutCategoryInput, DocumentCategoriesUncheckedCreateWithoutCategoryInput> | DocumentCategoriesCreateWithoutCategoryInput[] | DocumentCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DocumentCategoriesCreateOrConnectWithoutCategoryInput | DocumentCategoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: DocumentCategoriesUpsertWithWhereUniqueWithoutCategoryInput | DocumentCategoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: DocumentCategoriesCreateManyCategoryInputEnvelope
    set?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
    disconnect?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
    delete?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
    connect?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
    update?: DocumentCategoriesUpdateWithWhereUniqueWithoutCategoryInput | DocumentCategoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: DocumentCategoriesUpdateManyWithWhereWithoutCategoryInput | DocumentCategoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: DocumentCategoriesScalarWhereInput | DocumentCategoriesScalarWhereInput[]
  }

  export type DocumentCategoriesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<DocumentCategoriesCreateWithoutCategoryInput, DocumentCategoriesUncheckedCreateWithoutCategoryInput> | DocumentCategoriesCreateWithoutCategoryInput[] | DocumentCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DocumentCategoriesCreateOrConnectWithoutCategoryInput | DocumentCategoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: DocumentCategoriesUpsertWithWhereUniqueWithoutCategoryInput | DocumentCategoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: DocumentCategoriesCreateManyCategoryInputEnvelope
    set?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
    disconnect?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
    delete?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
    connect?: DocumentCategoriesWhereUniqueInput | DocumentCategoriesWhereUniqueInput[]
    update?: DocumentCategoriesUpdateWithWhereUniqueWithoutCategoryInput | DocumentCategoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: DocumentCategoriesUpdateManyWithWhereWithoutCategoryInput | DocumentCategoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: DocumentCategoriesScalarWhereInput | DocumentCategoriesScalarWhereInput[]
  }

  export type DocumentCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<DocumentCreateWithoutCategoriesInput, DocumentUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutCategoriesInput
    connect?: DocumentWhereUniqueInput
  }

  export type CategoriesCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<CategoriesCreateWithoutDocumentsInput, CategoriesUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutDocumentsInput
    connect?: CategoriesWhereUniqueInput
  }

  export type DocumentUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<DocumentCreateWithoutCategoriesInput, DocumentUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutCategoriesInput
    upsert?: DocumentUpsertWithoutCategoriesInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutCategoriesInput, DocumentUpdateWithoutCategoriesInput>, DocumentUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoriesUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<CategoriesCreateWithoutDocumentsInput, CategoriesUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutDocumentsInput
    upsert?: CategoriesUpsertWithoutDocumentsInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutDocumentsInput, CategoriesUpdateWithoutDocumentsInput>, CategoriesUncheckedUpdateWithoutDocumentsInput>
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

  export type DocumentCategoriesCreateWithoutDocumentInput = {
    category: CategoriesCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentCategoriesUncheckedCreateWithoutDocumentInput = {
    categoryId: number
  }

  export type DocumentCategoriesCreateOrConnectWithoutDocumentInput = {
    where: DocumentCategoriesWhereUniqueInput
    create: XOR<DocumentCategoriesCreateWithoutDocumentInput, DocumentCategoriesUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentCategoriesCreateManyDocumentInputEnvelope = {
    data: DocumentCategoriesCreateManyDocumentInput | DocumentCategoriesCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCategoriesUpsertWithWhereUniqueWithoutDocumentInput = {
    where: DocumentCategoriesWhereUniqueInput
    update: XOR<DocumentCategoriesUpdateWithoutDocumentInput, DocumentCategoriesUncheckedUpdateWithoutDocumentInput>
    create: XOR<DocumentCategoriesCreateWithoutDocumentInput, DocumentCategoriesUncheckedCreateWithoutDocumentInput>
  }

  export type DocumentCategoriesUpdateWithWhereUniqueWithoutDocumentInput = {
    where: DocumentCategoriesWhereUniqueInput
    data: XOR<DocumentCategoriesUpdateWithoutDocumentInput, DocumentCategoriesUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentCategoriesUpdateManyWithWhereWithoutDocumentInput = {
    where: DocumentCategoriesScalarWhereInput
    data: XOR<DocumentCategoriesUpdateManyMutationInput, DocumentCategoriesUncheckedUpdateManyWithoutDocumentInput>
  }

  export type DocumentCategoriesScalarWhereInput = {
    AND?: DocumentCategoriesScalarWhereInput | DocumentCategoriesScalarWhereInput[]
    OR?: DocumentCategoriesScalarWhereInput[]
    NOT?: DocumentCategoriesScalarWhereInput | DocumentCategoriesScalarWhereInput[]
    documentId?: IntFilter<"DocumentCategories"> | number
    categoryId?: IntFilter<"DocumentCategories"> | number
  }

  export type DocumentCategoriesCreateWithoutCategoryInput = {
    document: DocumentCreateNestedOneWithoutCategoriesInput
  }

  export type DocumentCategoriesUncheckedCreateWithoutCategoryInput = {
    documentId: number
  }

  export type DocumentCategoriesCreateOrConnectWithoutCategoryInput = {
    where: DocumentCategoriesWhereUniqueInput
    create: XOR<DocumentCategoriesCreateWithoutCategoryInput, DocumentCategoriesUncheckedCreateWithoutCategoryInput>
  }

  export type DocumentCategoriesCreateManyCategoryInputEnvelope = {
    data: DocumentCategoriesCreateManyCategoryInput | DocumentCategoriesCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCategoriesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: DocumentCategoriesWhereUniqueInput
    update: XOR<DocumentCategoriesUpdateWithoutCategoryInput, DocumentCategoriesUncheckedUpdateWithoutCategoryInput>
    create: XOR<DocumentCategoriesCreateWithoutCategoryInput, DocumentCategoriesUncheckedCreateWithoutCategoryInput>
  }

  export type DocumentCategoriesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: DocumentCategoriesWhereUniqueInput
    data: XOR<DocumentCategoriesUpdateWithoutCategoryInput, DocumentCategoriesUncheckedUpdateWithoutCategoryInput>
  }

  export type DocumentCategoriesUpdateManyWithWhereWithoutCategoryInput = {
    where: DocumentCategoriesScalarWhereInput
    data: XOR<DocumentCategoriesUpdateManyMutationInput, DocumentCategoriesUncheckedUpdateManyWithoutCategoryInput>
  }

  export type DocumentCreateWithoutCategoriesInput = {
    name: string
    description: string
    pathImg: string
    pathFile: string
  }

  export type DocumentUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    description: string
    pathImg: string
    pathFile: string
  }

  export type DocumentCreateOrConnectWithoutCategoriesInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutCategoriesInput, DocumentUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoriesCreateWithoutDocumentsInput = {
    description: string
  }

  export type CategoriesUncheckedCreateWithoutDocumentsInput = {
    id?: number
    description: string
  }

  export type CategoriesCreateOrConnectWithoutDocumentsInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutDocumentsInput, CategoriesUncheckedCreateWithoutDocumentsInput>
  }

  export type DocumentUpsertWithoutCategoriesInput = {
    update: XOR<DocumentUpdateWithoutCategoriesInput, DocumentUncheckedUpdateWithoutCategoriesInput>
    create: XOR<DocumentCreateWithoutCategoriesInput, DocumentUncheckedCreateWithoutCategoriesInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutCategoriesInput, DocumentUncheckedUpdateWithoutCategoriesInput>
  }

  export type DocumentUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pathImg?: StringFieldUpdateOperationsInput | string
    pathFile?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pathImg?: StringFieldUpdateOperationsInput | string
    pathFile?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesUpsertWithoutDocumentsInput = {
    update: XOR<CategoriesUpdateWithoutDocumentsInput, CategoriesUncheckedUpdateWithoutDocumentsInput>
    create: XOR<CategoriesCreateWithoutDocumentsInput, CategoriesUncheckedCreateWithoutDocumentsInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutDocumentsInput, CategoriesUncheckedUpdateWithoutDocumentsInput>
  }

  export type CategoriesUpdateWithoutDocumentsInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCategoriesCreateManyDocumentInput = {
    categoryId: number
  }

  export type DocumentCategoriesUpdateWithoutDocumentInput = {
    category?: CategoriesUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentCategoriesUncheckedUpdateWithoutDocumentInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentCategoriesUncheckedUpdateManyWithoutDocumentInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentCategoriesCreateManyCategoryInput = {
    documentId: number
  }

  export type DocumentCategoriesUpdateWithoutCategoryInput = {
    document?: DocumentUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type DocumentCategoriesUncheckedUpdateWithoutCategoryInput = {
    documentId?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentCategoriesUncheckedUpdateManyWithoutCategoryInput = {
    documentId?: IntFieldUpdateOperationsInput | number
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