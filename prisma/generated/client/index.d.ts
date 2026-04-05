
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model order_items
 * 
 */
export type order_items = $Result.DefaultSelection<Prisma.$order_itemsPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model finance_transactions
 * 
 */
export type finance_transactions = $Result.DefaultSelection<Prisma.$finance_transactionsPayload>
/**
 * Model procurements
 * 
 */
export type procurements = $Result.DefaultSelection<Prisma.$procurementsPayload>
/**
 * Model product_images
 * 
 */
export type product_images = $Result.DefaultSelection<Prisma.$product_imagesPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model transactions
 * 
 */
export type transactions = $Result.DefaultSelection<Prisma.$transactionsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model customers
 * 
 */
export type customers = $Result.DefaultSelection<Prisma.$customersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const orders_status: {
  PENDING_PROCESSING: 'PENDING_PROCESSING',
  SHIPPED: 'SHIPPED',
  CANCELLED: 'CANCELLED'
};

export type orders_status = (typeof orders_status)[keyof typeof orders_status]


export const users_role: {
  admin: 'admin',
  manager: 'manager'
};

export type users_role = (typeof users_role)[keyof typeof users_role]


export const users_status: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type users_status = (typeof users_status)[keyof typeof users_status]


export const transactions_type: {
  CREDIT: 'CREDIT',
  DEBIT: 'DEBIT'
};

export type transactions_type = (typeof transactions_type)[keyof typeof transactions_type]


export const transactions_category: {
  SALES: 'SALES',
  PROCUREMENT: 'PROCUREMENT',
  OPERATIONAL: 'OPERATIONAL',
  SHIPPING: 'SHIPPING'
};

export type transactions_category = (typeof transactions_category)[keyof typeof transactions_category]


export const procurements_logistics: {
  DELIVERY: 'DELIVERY',
  SELF_PICKUP: 'SELF_PICKUP'
};

export type procurements_logistics = (typeof procurements_logistics)[keyof typeof procurements_logistics]

}

export type orders_status = $Enums.orders_status

export const orders_status: typeof $Enums.orders_status

export type users_role = $Enums.users_role

export const users_role: typeof $Enums.users_role

export type users_status = $Enums.users_status

export const users_status: typeof $Enums.users_status

export type transactions_type = $Enums.transactions_type

export const transactions_type: typeof $Enums.transactions_type

export type transactions_category = $Enums.transactions_category

export const transactions_category: typeof $Enums.transactions_category

export type procurements_logistics = $Enums.procurements_logistics

export const procurements_logistics: typeof $Enums.procurements_logistics

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_items`: Exposes CRUD operations for the **order_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items
    * const order_items = await prisma.order_items.findMany()
    * ```
    */
  get order_items(): Prisma.order_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.finance_transactions`: Exposes CRUD operations for the **finance_transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Finance_transactions
    * const finance_transactions = await prisma.finance_transactions.findMany()
    * ```
    */
  get finance_transactions(): Prisma.finance_transactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.procurements`: Exposes CRUD operations for the **procurements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Procurements
    * const procurements = await prisma.procurements.findMany()
    * ```
    */
  get procurements(): Prisma.procurementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_images`: Exposes CRUD operations for the **product_images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_images
    * const product_images = await prisma.product_images.findMany()
    * ```
    */
  get product_images(): Prisma.product_imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.transactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.customersDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    categories: 'categories',
    order_items: 'order_items',
    orders: 'orders',
    finance_transactions: 'finance_transactions',
    procurements: 'procurements',
    product_images: 'product_images',
    products: 'products',
    transactions: 'transactions',
    users: 'users',
    customers: 'customers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categories" | "order_items" | "orders" | "finance_transactions" | "procurements" | "product_images" | "products" | "transactions" | "users" | "customers"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      order_items: {
        payload: Prisma.$order_itemsPayload<ExtArgs>
        fields: Prisma.order_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findFirst: {
            args: Prisma.order_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findMany: {
            args: Prisma.order_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          create: {
            args: Prisma.order_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          createMany: {
            args: Prisma.order_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.order_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          update: {
            args: Prisma.order_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          deleteMany: {
            args: Prisma.order_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.order_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          aggregate: {
            args: Prisma.Order_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_items>
          }
          groupBy: {
            args: Prisma.order_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      finance_transactions: {
        payload: Prisma.$finance_transactionsPayload<ExtArgs>
        fields: Prisma.finance_transactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.finance_transactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finance_transactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.finance_transactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finance_transactionsPayload>
          }
          findFirst: {
            args: Prisma.finance_transactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finance_transactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.finance_transactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finance_transactionsPayload>
          }
          findMany: {
            args: Prisma.finance_transactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finance_transactionsPayload>[]
          }
          create: {
            args: Prisma.finance_transactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finance_transactionsPayload>
          }
          createMany: {
            args: Prisma.finance_transactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.finance_transactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finance_transactionsPayload>
          }
          update: {
            args: Prisma.finance_transactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finance_transactionsPayload>
          }
          deleteMany: {
            args: Prisma.finance_transactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.finance_transactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.finance_transactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$finance_transactionsPayload>
          }
          aggregate: {
            args: Prisma.Finance_transactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinance_transactions>
          }
          groupBy: {
            args: Prisma.finance_transactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Finance_transactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.finance_transactionsCountArgs<ExtArgs>
            result: $Utils.Optional<Finance_transactionsCountAggregateOutputType> | number
          }
        }
      }
      procurements: {
        payload: Prisma.$procurementsPayload<ExtArgs>
        fields: Prisma.procurementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.procurementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.procurementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload>
          }
          findFirst: {
            args: Prisma.procurementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.procurementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload>
          }
          findMany: {
            args: Prisma.procurementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload>[]
          }
          create: {
            args: Prisma.procurementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload>
          }
          createMany: {
            args: Prisma.procurementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.procurementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload>
          }
          update: {
            args: Prisma.procurementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload>
          }
          deleteMany: {
            args: Prisma.procurementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.procurementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.procurementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$procurementsPayload>
          }
          aggregate: {
            args: Prisma.ProcurementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcurements>
          }
          groupBy: {
            args: Prisma.procurementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcurementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.procurementsCountArgs<ExtArgs>
            result: $Utils.Optional<ProcurementsCountAggregateOutputType> | number
          }
        }
      }
      product_images: {
        payload: Prisma.$product_imagesPayload<ExtArgs>
        fields: Prisma.product_imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          findFirst: {
            args: Prisma.product_imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          findMany: {
            args: Prisma.product_imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>[]
          }
          create: {
            args: Prisma.product_imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          createMany: {
            args: Prisma.product_imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.product_imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          update: {
            args: Prisma.product_imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          deleteMany: {
            args: Prisma.product_imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.product_imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          aggregate: {
            args: Prisma.Product_imagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_images>
          }
          groupBy: {
            args: Prisma.product_imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_imagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_imagesCountArgs<ExtArgs>
            result: $Utils.Optional<Product_imagesCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      transactions: {
        payload: Prisma.$transactionsPayload<ExtArgs>
        fields: Prisma.transactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findFirst: {
            args: Prisma.transactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findMany: {
            args: Prisma.transactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          create: {
            args: Prisma.transactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          createMany: {
            args: Prisma.transactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.transactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          update: {
            args: Prisma.transactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          deleteMany: {
            args: Prisma.transactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.transactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.transactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      customers: {
        payload: Prisma.$customersPayload<ExtArgs>
        fields: Prisma.customersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findFirst: {
            args: Prisma.customersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findMany: {
            args: Prisma.customersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          create: {
            args: Prisma.customersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          createMany: {
            args: Prisma.customersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.customersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          update: {
            args: Prisma.customersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          deleteMany: {
            args: Prisma.customersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.customersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.customersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.customersCountArgs<ExtArgs>
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    categories?: categoriesOmit
    order_items?: order_itemsOmit
    orders?: ordersOmit
    finance_transactions?: finance_transactionsOmit
    procurements?: procurementsOmit
    product_images?: product_imagesOmit
    products?: productsOmit
    transactions?: transactionsOmit
    users?: usersOmit
    customers?: customersOmit
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
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoriesCountOutputTypeCountProductsArgs
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
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_items: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | OrdersCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    order_items: number
    product_images: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | ProductsCountOutputTypeCountOrder_itemsArgs
    product_images?: boolean | ProductsCountOutputTypeCountProduct_imagesArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProduct_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_imagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesMinAggregateOutputType = {
    slug: string | null
    name: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    slug: string | null
    name: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    slug: number
    name: number
    _all: number
  }


  export type CategoriesMinAggregateInputType = {
    slug?: true
    name?: true
  }

  export type CategoriesMaxAggregateInputType = {
    slug?: true
    name?: true
  }

  export type CategoriesCountAggregateInputType = {
    slug?: true
    name?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
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




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    slug: string
    name: string
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
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


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slug?: boolean
    name?: boolean
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>



  export type categoriesSelectScalar = {
    slug?: boolean
    name?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"slug" | "name", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      slug: string
      name: string
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `slug`
     * const categoriesWithSlugOnly = await prisma.categories.findMany({ select: { slug: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
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
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
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
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
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
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends categories$productsArgs<ExtArgs> = {}>(args?: Subset<T, categories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly slug: FieldRef<"categories", 'String'>
    readonly name: FieldRef<"categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.products
   */
  export type categories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model order_items
   */

  export type AggregateOrder_items = {
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  export type Order_itemsAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    price_at_time: number | null
  }

  export type Order_itemsSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    price_at_time: number | null
  }

  export type Order_itemsMinAggregateOutputType = {
    id: number | null
    order_id: string | null
    product_id: string | null
    product_name: string | null
    quantity: number | null
    price_at_time: number | null
  }

  export type Order_itemsMaxAggregateOutputType = {
    id: number | null
    order_id: string | null
    product_id: string | null
    product_name: string | null
    quantity: number | null
    price_at_time: number | null
  }

  export type Order_itemsCountAggregateOutputType = {
    id: number
    order_id: number
    product_id: number
    product_name: number
    quantity: number
    price_at_time: number
    _all: number
  }


  export type Order_itemsAvgAggregateInputType = {
    id?: true
    quantity?: true
    price_at_time?: true
  }

  export type Order_itemsSumAggregateInputType = {
    id?: true
    quantity?: true
    price_at_time?: true
  }

  export type Order_itemsMinAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    product_name?: true
    quantity?: true
    price_at_time?: true
  }

  export type Order_itemsMaxAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    product_name?: true
    quantity?: true
    price_at_time?: true
  }

  export type Order_itemsCountAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    product_name?: true
    quantity?: true
    price_at_time?: true
    _all?: true
  }

  export type Order_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to aggregate.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items
    **/
    _count?: true | Order_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_itemsMaxAggregateInputType
  }

  export type GetOrder_itemsAggregateType<T extends Order_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_items[P]>
      : GetScalarType<T[P], AggregateOrder_items[P]>
  }




  export type order_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithAggregationInput | order_itemsOrderByWithAggregationInput[]
    by: Order_itemsScalarFieldEnum[] | Order_itemsScalarFieldEnum
    having?: order_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_itemsCountAggregateInputType | true
    _avg?: Order_itemsAvgAggregateInputType
    _sum?: Order_itemsSumAggregateInputType
    _min?: Order_itemsMinAggregateInputType
    _max?: Order_itemsMaxAggregateInputType
  }

  export type Order_itemsGroupByOutputType = {
    id: number
    order_id: string
    product_id: string
    product_name: string
    quantity: number
    price_at_time: number
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  type GetOrder_itemsGroupByPayload<T extends order_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
        }
      >
    >


  export type order_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    product_name?: boolean
    quantity?: boolean
    price_at_time?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>



  export type order_itemsSelectScalar = {
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    product_name?: boolean
    quantity?: boolean
    price_at_time?: boolean
  }

  export type order_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "product_id" | "product_name" | "quantity" | "price_at_time", ExtArgs["result"]["order_items"]>
  export type order_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $order_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_items"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: string
      product_id: string
      product_name: string
      quantity: number
      price_at_time: number
    }, ExtArgs["result"]["order_items"]>
    composites: {}
  }

  type order_itemsGetPayload<S extends boolean | null | undefined | order_itemsDefaultArgs> = $Result.GetResult<Prisma.$order_itemsPayload, S>

  type order_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_itemsCountAggregateInputType | true
    }

  export interface order_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_items'], meta: { name: 'order_items' } }
    /**
     * Find zero or one Order_items that matches the filter.
     * @param {order_itemsFindUniqueArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_itemsFindUniqueArgs>(args: SelectSubset<T, order_itemsFindUniqueArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_itemsFindUniqueOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, order_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_itemsFindFirstArgs>(args?: SelectSubset<T, order_itemsFindFirstArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, order_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_items.findMany()
     * 
     * // Get first 10 Order_items
     * const order_items = await prisma.order_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_itemsWithIdOnly = await prisma.order_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_itemsFindManyArgs>(args?: SelectSubset<T, order_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_items.
     * @param {order_itemsCreateArgs} args - Arguments to create a Order_items.
     * @example
     * // Create one Order_items
     * const Order_items = await prisma.order_items.create({
     *   data: {
     *     // ... data to create a Order_items
     *   }
     * })
     * 
     */
    create<T extends order_itemsCreateArgs>(args: SelectSubset<T, order_itemsCreateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_items.
     * @param {order_itemsCreateManyArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_items = await prisma.order_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_itemsCreateManyArgs>(args?: SelectSubset<T, order_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_items.
     * @param {order_itemsDeleteArgs} args - Arguments to delete one Order_items.
     * @example
     * // Delete one Order_items
     * const Order_items = await prisma.order_items.delete({
     *   where: {
     *     // ... filter to delete one Order_items
     *   }
     * })
     * 
     */
    delete<T extends order_itemsDeleteArgs>(args: SelectSubset<T, order_itemsDeleteArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_items.
     * @param {order_itemsUpdateArgs} args - Arguments to update one Order_items.
     * @example
     * // Update one Order_items
     * const order_items = await prisma.order_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_itemsUpdateArgs>(args: SelectSubset<T, order_itemsUpdateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_items.
     * @param {order_itemsDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_itemsDeleteManyArgs>(args?: SelectSubset<T, order_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_items = await prisma.order_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_itemsUpdateManyArgs>(args: SelectSubset<T, order_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_items.
     * @param {order_itemsUpsertArgs} args - Arguments to update or create a Order_items.
     * @example
     * // Update or create a Order_items
     * const order_items = await prisma.order_items.upsert({
     *   create: {
     *     // ... data to create a Order_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_items we want to update
     *   }
     * })
     */
    upsert<T extends order_itemsUpsertArgs>(args: SelectSubset<T, order_itemsUpsertArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_items.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
    **/
    count<T extends order_itemsCountArgs>(
      args?: Subset<T, order_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_itemsAggregateArgs>(args: Subset<T, Order_itemsAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemsAggregateType<T>>

    /**
     * Group by Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsGroupByArgs} args - Group by arguments.
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
      T extends order_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_itemsGroupByArgs['orderBy'] }
        : { orderBy?: order_itemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, order_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_items model
   */
  readonly fields: order_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the order_items model
   */
  interface order_itemsFieldRefs {
    readonly id: FieldRef<"order_items", 'Int'>
    readonly order_id: FieldRef<"order_items", 'String'>
    readonly product_id: FieldRef<"order_items", 'String'>
    readonly product_name: FieldRef<"order_items", 'String'>
    readonly quantity: FieldRef<"order_items", 'Int'>
    readonly price_at_time: FieldRef<"order_items", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * order_items findUnique
   */
  export type order_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findUniqueOrThrow
   */
  export type order_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findFirst
   */
  export type order_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findFirstOrThrow
   */
  export type order_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findMany
   */
  export type order_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items create
   */
  export type order_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a order_items.
     */
    data: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
  }

  /**
   * order_items createMany
   */
  export type order_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items.
     */
    data: order_itemsCreateManyInput | order_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_items update
   */
  export type order_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a order_items.
     */
    data: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
    /**
     * Choose, which order_items to update.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items updateMany
   */
  export type order_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
  }

  /**
   * order_items upsert
   */
  export type order_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the order_items to update in case it exists.
     */
    where: order_itemsWhereUniqueInput
    /**
     * In case the order_items found by the `where` argument doesn't exist, create a new order_items with this data.
     */
    create: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
    /**
     * In case the order_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
  }

  /**
   * order_items delete
   */
  export type order_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter which order_items to delete.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items deleteMany
   */
  export type order_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to delete.
     */
    limit?: number
  }

  /**
   * order_items without action
   */
  export type order_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    shipping_fee: number | null
    total_amount: number | null
  }

  export type OrdersSumAggregateOutputType = {
    shipping_fee: number | null
    total_amount: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: string | null
    customer_name: string | null
    customer_email: string | null
    customer_phone: string | null
    shipping_address: string | null
    shipping_fee: number | null
    total_amount: number | null
    status: $Enums.orders_status | null
    courier: string | null
    tracking_number: string | null
    cancel_reason: string | null
    created_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: string | null
    customer_name: string | null
    customer_email: string | null
    customer_phone: string | null
    shipping_address: string | null
    shipping_fee: number | null
    total_amount: number | null
    status: $Enums.orders_status | null
    courier: string | null
    tracking_number: string | null
    cancel_reason: string | null
    created_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    customer_name: number
    customer_email: number
    customer_phone: number
    shipping_address: number
    shipping_fee: number
    total_amount: number
    status: number
    courier: number
    tracking_number: number
    cancel_reason: number
    created_at: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    shipping_fee?: true
    total_amount?: true
  }

  export type OrdersSumAggregateInputType = {
    shipping_fee?: true
    total_amount?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    customer_name?: true
    customer_email?: true
    customer_phone?: true
    shipping_address?: true
    shipping_fee?: true
    total_amount?: true
    status?: true
    courier?: true
    tracking_number?: true
    cancel_reason?: true
    created_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    customer_name?: true
    customer_email?: true
    customer_phone?: true
    shipping_address?: true
    shipping_fee?: true
    total_amount?: true
    status?: true
    courier?: true
    tracking_number?: true
    cancel_reason?: true
    created_at?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    customer_name?: true
    customer_email?: true
    customer_phone?: true
    shipping_address?: true
    shipping_fee?: true
    total_amount?: true
    status?: true
    courier?: true
    tracking_number?: true
    cancel_reason?: true
    created_at?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: string
    customer_name: string
    customer_email: string
    customer_phone: string
    shipping_address: string
    shipping_fee: number | null
    total_amount: number
    status: $Enums.orders_status | null
    courier: string | null
    tracking_number: string | null
    cancel_reason: string | null
    created_at: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_name?: boolean
    customer_email?: boolean
    customer_phone?: boolean
    shipping_address?: boolean
    shipping_fee?: boolean
    total_amount?: boolean
    status?: boolean
    courier?: boolean
    tracking_number?: boolean
    cancel_reason?: boolean
    created_at?: boolean
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>



  export type ordersSelectScalar = {
    id?: boolean
    customer_name?: boolean
    customer_email?: boolean
    customer_phone?: boolean
    shipping_address?: boolean
    shipping_fee?: boolean
    total_amount?: boolean
    status?: boolean
    courier?: boolean
    tracking_number?: boolean
    cancel_reason?: boolean
    created_at?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customer_name" | "customer_email" | "customer_phone" | "shipping_address" | "shipping_fee" | "total_amount" | "status" | "courier" | "tracking_number" | "cancel_reason" | "created_at", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customer_name: string
      customer_email: string
      customer_phone: string
      shipping_address: string
      shipping_fee: number | null
      total_amount: number
      status: $Enums.orders_status | null
      courier: string | null
      tracking_number: string | null
      cancel_reason: string | null
      created_at: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
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
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_items<T extends orders$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, orders$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'String'>
    readonly customer_name: FieldRef<"orders", 'String'>
    readonly customer_email: FieldRef<"orders", 'String'>
    readonly customer_phone: FieldRef<"orders", 'String'>
    readonly shipping_address: FieldRef<"orders", 'String'>
    readonly shipping_fee: FieldRef<"orders", 'Int'>
    readonly total_amount: FieldRef<"orders", 'Int'>
    readonly status: FieldRef<"orders", 'orders_status'>
    readonly courier: FieldRef<"orders", 'String'>
    readonly tracking_number: FieldRef<"orders", 'String'>
    readonly cancel_reason: FieldRef<"orders", 'String'>
    readonly created_at: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.order_items
   */
  export type orders$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model finance_transactions
   */

  export type AggregateFinance_transactions = {
    _count: Finance_transactionsCountAggregateOutputType | null
    _avg: Finance_transactionsAvgAggregateOutputType | null
    _sum: Finance_transactionsSumAggregateOutputType | null
    _min: Finance_transactionsMinAggregateOutputType | null
    _max: Finance_transactionsMaxAggregateOutputType | null
  }

  export type Finance_transactionsAvgAggregateOutputType = {
    amount: number | null
  }

  export type Finance_transactionsSumAggregateOutputType = {
    amount: number | null
  }

  export type Finance_transactionsMinAggregateOutputType = {
    id: string | null
    type: string | null
    category: string | null
    amount: number | null
    description: string | null
    reference_id: string | null
    date: Date | null
  }

  export type Finance_transactionsMaxAggregateOutputType = {
    id: string | null
    type: string | null
    category: string | null
    amount: number | null
    description: string | null
    reference_id: string | null
    date: Date | null
  }

  export type Finance_transactionsCountAggregateOutputType = {
    id: number
    type: number
    category: number
    amount: number
    description: number
    reference_id: number
    date: number
    _all: number
  }


  export type Finance_transactionsAvgAggregateInputType = {
    amount?: true
  }

  export type Finance_transactionsSumAggregateInputType = {
    amount?: true
  }

  export type Finance_transactionsMinAggregateInputType = {
    id?: true
    type?: true
    category?: true
    amount?: true
    description?: true
    reference_id?: true
    date?: true
  }

  export type Finance_transactionsMaxAggregateInputType = {
    id?: true
    type?: true
    category?: true
    amount?: true
    description?: true
    reference_id?: true
    date?: true
  }

  export type Finance_transactionsCountAggregateInputType = {
    id?: true
    type?: true
    category?: true
    amount?: true
    description?: true
    reference_id?: true
    date?: true
    _all?: true
  }

  export type Finance_transactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which finance_transactions to aggregate.
     */
    where?: finance_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of finance_transactions to fetch.
     */
    orderBy?: finance_transactionsOrderByWithRelationInput | finance_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: finance_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` finance_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` finance_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned finance_transactions
    **/
    _count?: true | Finance_transactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Finance_transactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Finance_transactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Finance_transactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Finance_transactionsMaxAggregateInputType
  }

  export type GetFinance_transactionsAggregateType<T extends Finance_transactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateFinance_transactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinance_transactions[P]>
      : GetScalarType<T[P], AggregateFinance_transactions[P]>
  }




  export type finance_transactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: finance_transactionsWhereInput
    orderBy?: finance_transactionsOrderByWithAggregationInput | finance_transactionsOrderByWithAggregationInput[]
    by: Finance_transactionsScalarFieldEnum[] | Finance_transactionsScalarFieldEnum
    having?: finance_transactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Finance_transactionsCountAggregateInputType | true
    _avg?: Finance_transactionsAvgAggregateInputType
    _sum?: Finance_transactionsSumAggregateInputType
    _min?: Finance_transactionsMinAggregateInputType
    _max?: Finance_transactionsMaxAggregateInputType
  }

  export type Finance_transactionsGroupByOutputType = {
    id: string
    type: string
    category: string
    amount: number
    description: string | null
    reference_id: string | null
    date: Date
    _count: Finance_transactionsCountAggregateOutputType | null
    _avg: Finance_transactionsAvgAggregateOutputType | null
    _sum: Finance_transactionsSumAggregateOutputType | null
    _min: Finance_transactionsMinAggregateOutputType | null
    _max: Finance_transactionsMaxAggregateOutputType | null
  }

  type GetFinance_transactionsGroupByPayload<T extends finance_transactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Finance_transactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Finance_transactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Finance_transactionsGroupByOutputType[P]>
            : GetScalarType<T[P], Finance_transactionsGroupByOutputType[P]>
        }
      >
    >


  export type finance_transactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    reference_id?: boolean
    date?: boolean
  }, ExtArgs["result"]["finance_transactions"]>



  export type finance_transactionsSelectScalar = {
    id?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    reference_id?: boolean
    date?: boolean
  }

  export type finance_transactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "category" | "amount" | "description" | "reference_id" | "date", ExtArgs["result"]["finance_transactions"]>

  export type $finance_transactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "finance_transactions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      category: string
      amount: number
      description: string | null
      reference_id: string | null
      date: Date
    }, ExtArgs["result"]["finance_transactions"]>
    composites: {}
  }

  type finance_transactionsGetPayload<S extends boolean | null | undefined | finance_transactionsDefaultArgs> = $Result.GetResult<Prisma.$finance_transactionsPayload, S>

  type finance_transactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<finance_transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Finance_transactionsCountAggregateInputType | true
    }

  export interface finance_transactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['finance_transactions'], meta: { name: 'finance_transactions' } }
    /**
     * Find zero or one Finance_transactions that matches the filter.
     * @param {finance_transactionsFindUniqueArgs} args - Arguments to find a Finance_transactions
     * @example
     * // Get one Finance_transactions
     * const finance_transactions = await prisma.finance_transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends finance_transactionsFindUniqueArgs>(args: SelectSubset<T, finance_transactionsFindUniqueArgs<ExtArgs>>): Prisma__finance_transactionsClient<$Result.GetResult<Prisma.$finance_transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Finance_transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {finance_transactionsFindUniqueOrThrowArgs} args - Arguments to find a Finance_transactions
     * @example
     * // Get one Finance_transactions
     * const finance_transactions = await prisma.finance_transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends finance_transactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, finance_transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__finance_transactionsClient<$Result.GetResult<Prisma.$finance_transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Finance_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finance_transactionsFindFirstArgs} args - Arguments to find a Finance_transactions
     * @example
     * // Get one Finance_transactions
     * const finance_transactions = await prisma.finance_transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends finance_transactionsFindFirstArgs>(args?: SelectSubset<T, finance_transactionsFindFirstArgs<ExtArgs>>): Prisma__finance_transactionsClient<$Result.GetResult<Prisma.$finance_transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Finance_transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finance_transactionsFindFirstOrThrowArgs} args - Arguments to find a Finance_transactions
     * @example
     * // Get one Finance_transactions
     * const finance_transactions = await prisma.finance_transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends finance_transactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, finance_transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__finance_transactionsClient<$Result.GetResult<Prisma.$finance_transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Finance_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finance_transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Finance_transactions
     * const finance_transactions = await prisma.finance_transactions.findMany()
     * 
     * // Get first 10 Finance_transactions
     * const finance_transactions = await prisma.finance_transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const finance_transactionsWithIdOnly = await prisma.finance_transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends finance_transactionsFindManyArgs>(args?: SelectSubset<T, finance_transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$finance_transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Finance_transactions.
     * @param {finance_transactionsCreateArgs} args - Arguments to create a Finance_transactions.
     * @example
     * // Create one Finance_transactions
     * const Finance_transactions = await prisma.finance_transactions.create({
     *   data: {
     *     // ... data to create a Finance_transactions
     *   }
     * })
     * 
     */
    create<T extends finance_transactionsCreateArgs>(args: SelectSubset<T, finance_transactionsCreateArgs<ExtArgs>>): Prisma__finance_transactionsClient<$Result.GetResult<Prisma.$finance_transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Finance_transactions.
     * @param {finance_transactionsCreateManyArgs} args - Arguments to create many Finance_transactions.
     * @example
     * // Create many Finance_transactions
     * const finance_transactions = await prisma.finance_transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends finance_transactionsCreateManyArgs>(args?: SelectSubset<T, finance_transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Finance_transactions.
     * @param {finance_transactionsDeleteArgs} args - Arguments to delete one Finance_transactions.
     * @example
     * // Delete one Finance_transactions
     * const Finance_transactions = await prisma.finance_transactions.delete({
     *   where: {
     *     // ... filter to delete one Finance_transactions
     *   }
     * })
     * 
     */
    delete<T extends finance_transactionsDeleteArgs>(args: SelectSubset<T, finance_transactionsDeleteArgs<ExtArgs>>): Prisma__finance_transactionsClient<$Result.GetResult<Prisma.$finance_transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Finance_transactions.
     * @param {finance_transactionsUpdateArgs} args - Arguments to update one Finance_transactions.
     * @example
     * // Update one Finance_transactions
     * const finance_transactions = await prisma.finance_transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends finance_transactionsUpdateArgs>(args: SelectSubset<T, finance_transactionsUpdateArgs<ExtArgs>>): Prisma__finance_transactionsClient<$Result.GetResult<Prisma.$finance_transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Finance_transactions.
     * @param {finance_transactionsDeleteManyArgs} args - Arguments to filter Finance_transactions to delete.
     * @example
     * // Delete a few Finance_transactions
     * const { count } = await prisma.finance_transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends finance_transactionsDeleteManyArgs>(args?: SelectSubset<T, finance_transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Finance_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finance_transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Finance_transactions
     * const finance_transactions = await prisma.finance_transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends finance_transactionsUpdateManyArgs>(args: SelectSubset<T, finance_transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Finance_transactions.
     * @param {finance_transactionsUpsertArgs} args - Arguments to update or create a Finance_transactions.
     * @example
     * // Update or create a Finance_transactions
     * const finance_transactions = await prisma.finance_transactions.upsert({
     *   create: {
     *     // ... data to create a Finance_transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Finance_transactions we want to update
     *   }
     * })
     */
    upsert<T extends finance_transactionsUpsertArgs>(args: SelectSubset<T, finance_transactionsUpsertArgs<ExtArgs>>): Prisma__finance_transactionsClient<$Result.GetResult<Prisma.$finance_transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Finance_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finance_transactionsCountArgs} args - Arguments to filter Finance_transactions to count.
     * @example
     * // Count the number of Finance_transactions
     * const count = await prisma.finance_transactions.count({
     *   where: {
     *     // ... the filter for the Finance_transactions we want to count
     *   }
     * })
    **/
    count<T extends finance_transactionsCountArgs>(
      args?: Subset<T, finance_transactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Finance_transactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Finance_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Finance_transactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Finance_transactionsAggregateArgs>(args: Subset<T, Finance_transactionsAggregateArgs>): Prisma.PrismaPromise<GetFinance_transactionsAggregateType<T>>

    /**
     * Group by Finance_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {finance_transactionsGroupByArgs} args - Group by arguments.
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
      T extends finance_transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: finance_transactionsGroupByArgs['orderBy'] }
        : { orderBy?: finance_transactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, finance_transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinance_transactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the finance_transactions model
   */
  readonly fields: finance_transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for finance_transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__finance_transactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the finance_transactions model
   */
  interface finance_transactionsFieldRefs {
    readonly id: FieldRef<"finance_transactions", 'String'>
    readonly type: FieldRef<"finance_transactions", 'String'>
    readonly category: FieldRef<"finance_transactions", 'String'>
    readonly amount: FieldRef<"finance_transactions", 'Int'>
    readonly description: FieldRef<"finance_transactions", 'String'>
    readonly reference_id: FieldRef<"finance_transactions", 'String'>
    readonly date: FieldRef<"finance_transactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * finance_transactions findUnique
   */
  export type finance_transactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_transactions
     */
    select?: finance_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the finance_transactions
     */
    omit?: finance_transactionsOmit<ExtArgs> | null
    /**
     * Filter, which finance_transactions to fetch.
     */
    where: finance_transactionsWhereUniqueInput
  }

  /**
   * finance_transactions findUniqueOrThrow
   */
  export type finance_transactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_transactions
     */
    select?: finance_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the finance_transactions
     */
    omit?: finance_transactionsOmit<ExtArgs> | null
    /**
     * Filter, which finance_transactions to fetch.
     */
    where: finance_transactionsWhereUniqueInput
  }

  /**
   * finance_transactions findFirst
   */
  export type finance_transactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_transactions
     */
    select?: finance_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the finance_transactions
     */
    omit?: finance_transactionsOmit<ExtArgs> | null
    /**
     * Filter, which finance_transactions to fetch.
     */
    where?: finance_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of finance_transactions to fetch.
     */
    orderBy?: finance_transactionsOrderByWithRelationInput | finance_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for finance_transactions.
     */
    cursor?: finance_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` finance_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` finance_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of finance_transactions.
     */
    distinct?: Finance_transactionsScalarFieldEnum | Finance_transactionsScalarFieldEnum[]
  }

  /**
   * finance_transactions findFirstOrThrow
   */
  export type finance_transactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_transactions
     */
    select?: finance_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the finance_transactions
     */
    omit?: finance_transactionsOmit<ExtArgs> | null
    /**
     * Filter, which finance_transactions to fetch.
     */
    where?: finance_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of finance_transactions to fetch.
     */
    orderBy?: finance_transactionsOrderByWithRelationInput | finance_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for finance_transactions.
     */
    cursor?: finance_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` finance_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` finance_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of finance_transactions.
     */
    distinct?: Finance_transactionsScalarFieldEnum | Finance_transactionsScalarFieldEnum[]
  }

  /**
   * finance_transactions findMany
   */
  export type finance_transactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_transactions
     */
    select?: finance_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the finance_transactions
     */
    omit?: finance_transactionsOmit<ExtArgs> | null
    /**
     * Filter, which finance_transactions to fetch.
     */
    where?: finance_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of finance_transactions to fetch.
     */
    orderBy?: finance_transactionsOrderByWithRelationInput | finance_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing finance_transactions.
     */
    cursor?: finance_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` finance_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` finance_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of finance_transactions.
     */
    distinct?: Finance_transactionsScalarFieldEnum | Finance_transactionsScalarFieldEnum[]
  }

  /**
   * finance_transactions create
   */
  export type finance_transactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_transactions
     */
    select?: finance_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the finance_transactions
     */
    omit?: finance_transactionsOmit<ExtArgs> | null
    /**
     * The data needed to create a finance_transactions.
     */
    data: XOR<finance_transactionsCreateInput, finance_transactionsUncheckedCreateInput>
  }

  /**
   * finance_transactions createMany
   */
  export type finance_transactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many finance_transactions.
     */
    data: finance_transactionsCreateManyInput | finance_transactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * finance_transactions update
   */
  export type finance_transactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_transactions
     */
    select?: finance_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the finance_transactions
     */
    omit?: finance_transactionsOmit<ExtArgs> | null
    /**
     * The data needed to update a finance_transactions.
     */
    data: XOR<finance_transactionsUpdateInput, finance_transactionsUncheckedUpdateInput>
    /**
     * Choose, which finance_transactions to update.
     */
    where: finance_transactionsWhereUniqueInput
  }

  /**
   * finance_transactions updateMany
   */
  export type finance_transactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update finance_transactions.
     */
    data: XOR<finance_transactionsUpdateManyMutationInput, finance_transactionsUncheckedUpdateManyInput>
    /**
     * Filter which finance_transactions to update
     */
    where?: finance_transactionsWhereInput
    /**
     * Limit how many finance_transactions to update.
     */
    limit?: number
  }

  /**
   * finance_transactions upsert
   */
  export type finance_transactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_transactions
     */
    select?: finance_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the finance_transactions
     */
    omit?: finance_transactionsOmit<ExtArgs> | null
    /**
     * The filter to search for the finance_transactions to update in case it exists.
     */
    where: finance_transactionsWhereUniqueInput
    /**
     * In case the finance_transactions found by the `where` argument doesn't exist, create a new finance_transactions with this data.
     */
    create: XOR<finance_transactionsCreateInput, finance_transactionsUncheckedCreateInput>
    /**
     * In case the finance_transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<finance_transactionsUpdateInput, finance_transactionsUncheckedUpdateInput>
  }

  /**
   * finance_transactions delete
   */
  export type finance_transactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_transactions
     */
    select?: finance_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the finance_transactions
     */
    omit?: finance_transactionsOmit<ExtArgs> | null
    /**
     * Filter which finance_transactions to delete.
     */
    where: finance_transactionsWhereUniqueInput
  }

  /**
   * finance_transactions deleteMany
   */
  export type finance_transactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which finance_transactions to delete
     */
    where?: finance_transactionsWhereInput
    /**
     * Limit how many finance_transactions to delete.
     */
    limit?: number
  }

  /**
   * finance_transactions without action
   */
  export type finance_transactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the finance_transactions
     */
    select?: finance_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the finance_transactions
     */
    omit?: finance_transactionsOmit<ExtArgs> | null
  }


  /**
   * Model procurements
   */

  export type AggregateProcurements = {
    _count: ProcurementsCountAggregateOutputType | null
    _avg: ProcurementsAvgAggregateOutputType | null
    _sum: ProcurementsSumAggregateOutputType | null
    _min: ProcurementsMinAggregateOutputType | null
    _max: ProcurementsMaxAggregateOutputType | null
  }

  export type ProcurementsAvgAggregateOutputType = {
    total_cost: number | null
  }

  export type ProcurementsSumAggregateOutputType = {
    total_cost: number | null
  }

  export type ProcurementsMinAggregateOutputType = {
    id: string | null
    supplier: string | null
    items_description: string | null
    total_cost: number | null
    logistics: $Enums.procurements_logistics | null
    courier_service: string | null
    status: string | null
    ordered_date: Date | null
    sent_date: Date | null
    arrival_date: Date | null
    created_at: Date | null
  }

  export type ProcurementsMaxAggregateOutputType = {
    id: string | null
    supplier: string | null
    items_description: string | null
    total_cost: number | null
    logistics: $Enums.procurements_logistics | null
    courier_service: string | null
    status: string | null
    ordered_date: Date | null
    sent_date: Date | null
    arrival_date: Date | null
    created_at: Date | null
  }

  export type ProcurementsCountAggregateOutputType = {
    id: number
    supplier: number
    items_description: number
    total_cost: number
    logistics: number
    courier_service: number
    status: number
    ordered_date: number
    sent_date: number
    arrival_date: number
    created_at: number
    _all: number
  }


  export type ProcurementsAvgAggregateInputType = {
    total_cost?: true
  }

  export type ProcurementsSumAggregateInputType = {
    total_cost?: true
  }

  export type ProcurementsMinAggregateInputType = {
    id?: true
    supplier?: true
    items_description?: true
    total_cost?: true
    logistics?: true
    courier_service?: true
    status?: true
    ordered_date?: true
    sent_date?: true
    arrival_date?: true
    created_at?: true
  }

  export type ProcurementsMaxAggregateInputType = {
    id?: true
    supplier?: true
    items_description?: true
    total_cost?: true
    logistics?: true
    courier_service?: true
    status?: true
    ordered_date?: true
    sent_date?: true
    arrival_date?: true
    created_at?: true
  }

  export type ProcurementsCountAggregateInputType = {
    id?: true
    supplier?: true
    items_description?: true
    total_cost?: true
    logistics?: true
    courier_service?: true
    status?: true
    ordered_date?: true
    sent_date?: true
    arrival_date?: true
    created_at?: true
    _all?: true
  }

  export type ProcurementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which procurements to aggregate.
     */
    where?: procurementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of procurements to fetch.
     */
    orderBy?: procurementsOrderByWithRelationInput | procurementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: procurementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` procurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` procurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned procurements
    **/
    _count?: true | ProcurementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProcurementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProcurementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcurementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcurementsMaxAggregateInputType
  }

  export type GetProcurementsAggregateType<T extends ProcurementsAggregateArgs> = {
        [P in keyof T & keyof AggregateProcurements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcurements[P]>
      : GetScalarType<T[P], AggregateProcurements[P]>
  }




  export type procurementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: procurementsWhereInput
    orderBy?: procurementsOrderByWithAggregationInput | procurementsOrderByWithAggregationInput[]
    by: ProcurementsScalarFieldEnum[] | ProcurementsScalarFieldEnum
    having?: procurementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcurementsCountAggregateInputType | true
    _avg?: ProcurementsAvgAggregateInputType
    _sum?: ProcurementsSumAggregateInputType
    _min?: ProcurementsMinAggregateInputType
    _max?: ProcurementsMaxAggregateInputType
  }

  export type ProcurementsGroupByOutputType = {
    id: string
    supplier: string
    items_description: string
    total_cost: number
    logistics: $Enums.procurements_logistics | null
    courier_service: string | null
    status: string | null
    ordered_date: Date | null
    sent_date: Date | null
    arrival_date: Date | null
    created_at: Date
    _count: ProcurementsCountAggregateOutputType | null
    _avg: ProcurementsAvgAggregateOutputType | null
    _sum: ProcurementsSumAggregateOutputType | null
    _min: ProcurementsMinAggregateOutputType | null
    _max: ProcurementsMaxAggregateOutputType | null
  }

  type GetProcurementsGroupByPayload<T extends procurementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcurementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcurementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcurementsGroupByOutputType[P]>
            : GetScalarType<T[P], ProcurementsGroupByOutputType[P]>
        }
      >
    >


  export type procurementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplier?: boolean
    items_description?: boolean
    total_cost?: boolean
    logistics?: boolean
    courier_service?: boolean
    status?: boolean
    ordered_date?: boolean
    sent_date?: boolean
    arrival_date?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["procurements"]>



  export type procurementsSelectScalar = {
    id?: boolean
    supplier?: boolean
    items_description?: boolean
    total_cost?: boolean
    logistics?: boolean
    courier_service?: boolean
    status?: boolean
    ordered_date?: boolean
    sent_date?: boolean
    arrival_date?: boolean
    created_at?: boolean
  }

  export type procurementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supplier" | "items_description" | "total_cost" | "logistics" | "courier_service" | "status" | "ordered_date" | "sent_date" | "arrival_date" | "created_at", ExtArgs["result"]["procurements"]>

  export type $procurementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "procurements"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supplier: string
      items_description: string
      total_cost: number
      logistics: $Enums.procurements_logistics | null
      courier_service: string | null
      status: string | null
      ordered_date: Date | null
      sent_date: Date | null
      arrival_date: Date | null
      created_at: Date
    }, ExtArgs["result"]["procurements"]>
    composites: {}
  }

  type procurementsGetPayload<S extends boolean | null | undefined | procurementsDefaultArgs> = $Result.GetResult<Prisma.$procurementsPayload, S>

  type procurementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<procurementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcurementsCountAggregateInputType | true
    }

  export interface procurementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['procurements'], meta: { name: 'procurements' } }
    /**
     * Find zero or one Procurements that matches the filter.
     * @param {procurementsFindUniqueArgs} args - Arguments to find a Procurements
     * @example
     * // Get one Procurements
     * const procurements = await prisma.procurements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends procurementsFindUniqueArgs>(args: SelectSubset<T, procurementsFindUniqueArgs<ExtArgs>>): Prisma__procurementsClient<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Procurements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {procurementsFindUniqueOrThrowArgs} args - Arguments to find a Procurements
     * @example
     * // Get one Procurements
     * const procurements = await prisma.procurements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends procurementsFindUniqueOrThrowArgs>(args: SelectSubset<T, procurementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__procurementsClient<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Procurements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {procurementsFindFirstArgs} args - Arguments to find a Procurements
     * @example
     * // Get one Procurements
     * const procurements = await prisma.procurements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends procurementsFindFirstArgs>(args?: SelectSubset<T, procurementsFindFirstArgs<ExtArgs>>): Prisma__procurementsClient<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Procurements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {procurementsFindFirstOrThrowArgs} args - Arguments to find a Procurements
     * @example
     * // Get one Procurements
     * const procurements = await prisma.procurements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends procurementsFindFirstOrThrowArgs>(args?: SelectSubset<T, procurementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__procurementsClient<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Procurements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {procurementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Procurements
     * const procurements = await prisma.procurements.findMany()
     * 
     * // Get first 10 Procurements
     * const procurements = await prisma.procurements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const procurementsWithIdOnly = await prisma.procurements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends procurementsFindManyArgs>(args?: SelectSubset<T, procurementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Procurements.
     * @param {procurementsCreateArgs} args - Arguments to create a Procurements.
     * @example
     * // Create one Procurements
     * const Procurements = await prisma.procurements.create({
     *   data: {
     *     // ... data to create a Procurements
     *   }
     * })
     * 
     */
    create<T extends procurementsCreateArgs>(args: SelectSubset<T, procurementsCreateArgs<ExtArgs>>): Prisma__procurementsClient<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Procurements.
     * @param {procurementsCreateManyArgs} args - Arguments to create many Procurements.
     * @example
     * // Create many Procurements
     * const procurements = await prisma.procurements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends procurementsCreateManyArgs>(args?: SelectSubset<T, procurementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Procurements.
     * @param {procurementsDeleteArgs} args - Arguments to delete one Procurements.
     * @example
     * // Delete one Procurements
     * const Procurements = await prisma.procurements.delete({
     *   where: {
     *     // ... filter to delete one Procurements
     *   }
     * })
     * 
     */
    delete<T extends procurementsDeleteArgs>(args: SelectSubset<T, procurementsDeleteArgs<ExtArgs>>): Prisma__procurementsClient<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Procurements.
     * @param {procurementsUpdateArgs} args - Arguments to update one Procurements.
     * @example
     * // Update one Procurements
     * const procurements = await prisma.procurements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends procurementsUpdateArgs>(args: SelectSubset<T, procurementsUpdateArgs<ExtArgs>>): Prisma__procurementsClient<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Procurements.
     * @param {procurementsDeleteManyArgs} args - Arguments to filter Procurements to delete.
     * @example
     * // Delete a few Procurements
     * const { count } = await prisma.procurements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends procurementsDeleteManyArgs>(args?: SelectSubset<T, procurementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Procurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {procurementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Procurements
     * const procurements = await prisma.procurements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends procurementsUpdateManyArgs>(args: SelectSubset<T, procurementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Procurements.
     * @param {procurementsUpsertArgs} args - Arguments to update or create a Procurements.
     * @example
     * // Update or create a Procurements
     * const procurements = await prisma.procurements.upsert({
     *   create: {
     *     // ... data to create a Procurements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Procurements we want to update
     *   }
     * })
     */
    upsert<T extends procurementsUpsertArgs>(args: SelectSubset<T, procurementsUpsertArgs<ExtArgs>>): Prisma__procurementsClient<$Result.GetResult<Prisma.$procurementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Procurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {procurementsCountArgs} args - Arguments to filter Procurements to count.
     * @example
     * // Count the number of Procurements
     * const count = await prisma.procurements.count({
     *   where: {
     *     // ... the filter for the Procurements we want to count
     *   }
     * })
    **/
    count<T extends procurementsCountArgs>(
      args?: Subset<T, procurementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcurementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Procurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcurementsAggregateArgs>(args: Subset<T, ProcurementsAggregateArgs>): Prisma.PrismaPromise<GetProcurementsAggregateType<T>>

    /**
     * Group by Procurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {procurementsGroupByArgs} args - Group by arguments.
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
      T extends procurementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: procurementsGroupByArgs['orderBy'] }
        : { orderBy?: procurementsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, procurementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcurementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the procurements model
   */
  readonly fields: procurementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for procurements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__procurementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the procurements model
   */
  interface procurementsFieldRefs {
    readonly id: FieldRef<"procurements", 'String'>
    readonly supplier: FieldRef<"procurements", 'String'>
    readonly items_description: FieldRef<"procurements", 'String'>
    readonly total_cost: FieldRef<"procurements", 'Int'>
    readonly logistics: FieldRef<"procurements", 'procurements_logistics'>
    readonly courier_service: FieldRef<"procurements", 'String'>
    readonly status: FieldRef<"procurements", 'String'>
    readonly ordered_date: FieldRef<"procurements", 'DateTime'>
    readonly sent_date: FieldRef<"procurements", 'DateTime'>
    readonly arrival_date: FieldRef<"procurements", 'DateTime'>
    readonly created_at: FieldRef<"procurements", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * procurements findUnique
   */
  export type procurementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * Filter, which procurements to fetch.
     */
    where: procurementsWhereUniqueInput
  }

  /**
   * procurements findUniqueOrThrow
   */
  export type procurementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * Filter, which procurements to fetch.
     */
    where: procurementsWhereUniqueInput
  }

  /**
   * procurements findFirst
   */
  export type procurementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * Filter, which procurements to fetch.
     */
    where?: procurementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of procurements to fetch.
     */
    orderBy?: procurementsOrderByWithRelationInput | procurementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for procurements.
     */
    cursor?: procurementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` procurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` procurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of procurements.
     */
    distinct?: ProcurementsScalarFieldEnum | ProcurementsScalarFieldEnum[]
  }

  /**
   * procurements findFirstOrThrow
   */
  export type procurementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * Filter, which procurements to fetch.
     */
    where?: procurementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of procurements to fetch.
     */
    orderBy?: procurementsOrderByWithRelationInput | procurementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for procurements.
     */
    cursor?: procurementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` procurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` procurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of procurements.
     */
    distinct?: ProcurementsScalarFieldEnum | ProcurementsScalarFieldEnum[]
  }

  /**
   * procurements findMany
   */
  export type procurementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * Filter, which procurements to fetch.
     */
    where?: procurementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of procurements to fetch.
     */
    orderBy?: procurementsOrderByWithRelationInput | procurementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing procurements.
     */
    cursor?: procurementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` procurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` procurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of procurements.
     */
    distinct?: ProcurementsScalarFieldEnum | ProcurementsScalarFieldEnum[]
  }

  /**
   * procurements create
   */
  export type procurementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * The data needed to create a procurements.
     */
    data: XOR<procurementsCreateInput, procurementsUncheckedCreateInput>
  }

  /**
   * procurements createMany
   */
  export type procurementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many procurements.
     */
    data: procurementsCreateManyInput | procurementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * procurements update
   */
  export type procurementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * The data needed to update a procurements.
     */
    data: XOR<procurementsUpdateInput, procurementsUncheckedUpdateInput>
    /**
     * Choose, which procurements to update.
     */
    where: procurementsWhereUniqueInput
  }

  /**
   * procurements updateMany
   */
  export type procurementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update procurements.
     */
    data: XOR<procurementsUpdateManyMutationInput, procurementsUncheckedUpdateManyInput>
    /**
     * Filter which procurements to update
     */
    where?: procurementsWhereInput
    /**
     * Limit how many procurements to update.
     */
    limit?: number
  }

  /**
   * procurements upsert
   */
  export type procurementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * The filter to search for the procurements to update in case it exists.
     */
    where: procurementsWhereUniqueInput
    /**
     * In case the procurements found by the `where` argument doesn't exist, create a new procurements with this data.
     */
    create: XOR<procurementsCreateInput, procurementsUncheckedCreateInput>
    /**
     * In case the procurements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<procurementsUpdateInput, procurementsUncheckedUpdateInput>
  }

  /**
   * procurements delete
   */
  export type procurementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
    /**
     * Filter which procurements to delete.
     */
    where: procurementsWhereUniqueInput
  }

  /**
   * procurements deleteMany
   */
  export type procurementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which procurements to delete
     */
    where?: procurementsWhereInput
    /**
     * Limit how many procurements to delete.
     */
    limit?: number
  }

  /**
   * procurements without action
   */
  export type procurementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the procurements
     */
    select?: procurementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the procurements
     */
    omit?: procurementsOmit<ExtArgs> | null
  }


  /**
   * Model product_images
   */

  export type AggregateProduct_images = {
    _count: Product_imagesCountAggregateOutputType | null
    _avg: Product_imagesAvgAggregateOutputType | null
    _sum: Product_imagesSumAggregateOutputType | null
    _min: Product_imagesMinAggregateOutputType | null
    _max: Product_imagesMaxAggregateOutputType | null
  }

  export type Product_imagesAvgAggregateOutputType = {
    id: number | null
  }

  export type Product_imagesSumAggregateOutputType = {
    id: number | null
  }

  export type Product_imagesMinAggregateOutputType = {
    id: number | null
    product_id: string | null
    image_url: string | null
  }

  export type Product_imagesMaxAggregateOutputType = {
    id: number | null
    product_id: string | null
    image_url: string | null
  }

  export type Product_imagesCountAggregateOutputType = {
    id: number
    product_id: number
    image_url: number
    _all: number
  }


  export type Product_imagesAvgAggregateInputType = {
    id?: true
  }

  export type Product_imagesSumAggregateInputType = {
    id?: true
  }

  export type Product_imagesMinAggregateInputType = {
    id?: true
    product_id?: true
    image_url?: true
  }

  export type Product_imagesMaxAggregateInputType = {
    id?: true
    product_id?: true
    image_url?: true
  }

  export type Product_imagesCountAggregateInputType = {
    id?: true
    product_id?: true
    image_url?: true
    _all?: true
  }

  export type Product_imagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_images to aggregate.
     */
    where?: product_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_images
    **/
    _count?: true | Product_imagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_imagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_imagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_imagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_imagesMaxAggregateInputType
  }

  export type GetProduct_imagesAggregateType<T extends Product_imagesAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_images[P]>
      : GetScalarType<T[P], AggregateProduct_images[P]>
  }




  export type product_imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_imagesWhereInput
    orderBy?: product_imagesOrderByWithAggregationInput | product_imagesOrderByWithAggregationInput[]
    by: Product_imagesScalarFieldEnum[] | Product_imagesScalarFieldEnum
    having?: product_imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_imagesCountAggregateInputType | true
    _avg?: Product_imagesAvgAggregateInputType
    _sum?: Product_imagesSumAggregateInputType
    _min?: Product_imagesMinAggregateInputType
    _max?: Product_imagesMaxAggregateInputType
  }

  export type Product_imagesGroupByOutputType = {
    id: number
    product_id: string
    image_url: string
    _count: Product_imagesCountAggregateOutputType | null
    _avg: Product_imagesAvgAggregateOutputType | null
    _sum: Product_imagesSumAggregateOutputType | null
    _min: Product_imagesMinAggregateOutputType | null
    _max: Product_imagesMaxAggregateOutputType | null
  }

  type GetProduct_imagesGroupByPayload<T extends product_imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_imagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_imagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_imagesGroupByOutputType[P]>
            : GetScalarType<T[P], Product_imagesGroupByOutputType[P]>
        }
      >
    >


  export type product_imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    image_url?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_images"]>



  export type product_imagesSelectScalar = {
    id?: boolean
    product_id?: boolean
    image_url?: boolean
  }

  export type product_imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "image_url", ExtArgs["result"]["product_images"]>
  export type product_imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $product_imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_images"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: string
      image_url: string
    }, ExtArgs["result"]["product_images"]>
    composites: {}
  }

  type product_imagesGetPayload<S extends boolean | null | undefined | product_imagesDefaultArgs> = $Result.GetResult<Prisma.$product_imagesPayload, S>

  type product_imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_imagesCountAggregateInputType | true
    }

  export interface product_imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_images'], meta: { name: 'product_images' } }
    /**
     * Find zero or one Product_images that matches the filter.
     * @param {product_imagesFindUniqueArgs} args - Arguments to find a Product_images
     * @example
     * // Get one Product_images
     * const product_images = await prisma.product_images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_imagesFindUniqueArgs>(args: SelectSubset<T, product_imagesFindUniqueArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_imagesFindUniqueOrThrowArgs} args - Arguments to find a Product_images
     * @example
     * // Get one Product_images
     * const product_images = await prisma.product_images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, product_imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesFindFirstArgs} args - Arguments to find a Product_images
     * @example
     * // Get one Product_images
     * const product_images = await prisma.product_images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_imagesFindFirstArgs>(args?: SelectSubset<T, product_imagesFindFirstArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesFindFirstOrThrowArgs} args - Arguments to find a Product_images
     * @example
     * // Get one Product_images
     * const product_images = await prisma.product_images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, product_imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_images
     * const product_images = await prisma.product_images.findMany()
     * 
     * // Get first 10 Product_images
     * const product_images = await prisma.product_images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_imagesWithIdOnly = await prisma.product_images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends product_imagesFindManyArgs>(args?: SelectSubset<T, product_imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_images.
     * @param {product_imagesCreateArgs} args - Arguments to create a Product_images.
     * @example
     * // Create one Product_images
     * const Product_images = await prisma.product_images.create({
     *   data: {
     *     // ... data to create a Product_images
     *   }
     * })
     * 
     */
    create<T extends product_imagesCreateArgs>(args: SelectSubset<T, product_imagesCreateArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_images.
     * @param {product_imagesCreateManyArgs} args - Arguments to create many Product_images.
     * @example
     * // Create many Product_images
     * const product_images = await prisma.product_images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_imagesCreateManyArgs>(args?: SelectSubset<T, product_imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product_images.
     * @param {product_imagesDeleteArgs} args - Arguments to delete one Product_images.
     * @example
     * // Delete one Product_images
     * const Product_images = await prisma.product_images.delete({
     *   where: {
     *     // ... filter to delete one Product_images
     *   }
     * })
     * 
     */
    delete<T extends product_imagesDeleteArgs>(args: SelectSubset<T, product_imagesDeleteArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_images.
     * @param {product_imagesUpdateArgs} args - Arguments to update one Product_images.
     * @example
     * // Update one Product_images
     * const product_images = await prisma.product_images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_imagesUpdateArgs>(args: SelectSubset<T, product_imagesUpdateArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_images.
     * @param {product_imagesDeleteManyArgs} args - Arguments to filter Product_images to delete.
     * @example
     * // Delete a few Product_images
     * const { count } = await prisma.product_images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_imagesDeleteManyArgs>(args?: SelectSubset<T, product_imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_images
     * const product_images = await prisma.product_images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_imagesUpdateManyArgs>(args: SelectSubset<T, product_imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product_images.
     * @param {product_imagesUpsertArgs} args - Arguments to update or create a Product_images.
     * @example
     * // Update or create a Product_images
     * const product_images = await prisma.product_images.upsert({
     *   create: {
     *     // ... data to create a Product_images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_images we want to update
     *   }
     * })
     */
    upsert<T extends product_imagesUpsertArgs>(args: SelectSubset<T, product_imagesUpsertArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesCountArgs} args - Arguments to filter Product_images to count.
     * @example
     * // Count the number of Product_images
     * const count = await prisma.product_images.count({
     *   where: {
     *     // ... the filter for the Product_images we want to count
     *   }
     * })
    **/
    count<T extends product_imagesCountArgs>(
      args?: Subset<T, product_imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_imagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_imagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Product_imagesAggregateArgs>(args: Subset<T, Product_imagesAggregateArgs>): Prisma.PrismaPromise<GetProduct_imagesAggregateType<T>>

    /**
     * Group by Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesGroupByArgs} args - Group by arguments.
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
      T extends product_imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_imagesGroupByArgs['orderBy'] }
        : { orderBy?: product_imagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, product_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_images model
   */
  readonly fields: product_imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the product_images model
   */
  interface product_imagesFieldRefs {
    readonly id: FieldRef<"product_images", 'Int'>
    readonly product_id: FieldRef<"product_images", 'String'>
    readonly image_url: FieldRef<"product_images", 'String'>
  }
    

  // Custom InputTypes
  /**
   * product_images findUnique
   */
  export type product_imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where: product_imagesWhereUniqueInput
  }

  /**
   * product_images findUniqueOrThrow
   */
  export type product_imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where: product_imagesWhereUniqueInput
  }

  /**
   * product_images findFirst
   */
  export type product_imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where?: product_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_images.
     */
    cursor?: product_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_images.
     */
    distinct?: Product_imagesScalarFieldEnum | Product_imagesScalarFieldEnum[]
  }

  /**
   * product_images findFirstOrThrow
   */
  export type product_imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where?: product_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_images.
     */
    cursor?: product_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_images.
     */
    distinct?: Product_imagesScalarFieldEnum | Product_imagesScalarFieldEnum[]
  }

  /**
   * product_images findMany
   */
  export type product_imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where?: product_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_images.
     */
    cursor?: product_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_images.
     */
    distinct?: Product_imagesScalarFieldEnum | Product_imagesScalarFieldEnum[]
  }

  /**
   * product_images create
   */
  export type product_imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a product_images.
     */
    data: XOR<product_imagesCreateInput, product_imagesUncheckedCreateInput>
  }

  /**
   * product_images createMany
   */
  export type product_imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_images.
     */
    data: product_imagesCreateManyInput | product_imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_images update
   */
  export type product_imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a product_images.
     */
    data: XOR<product_imagesUpdateInput, product_imagesUncheckedUpdateInput>
    /**
     * Choose, which product_images to update.
     */
    where: product_imagesWhereUniqueInput
  }

  /**
   * product_images updateMany
   */
  export type product_imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_images.
     */
    data: XOR<product_imagesUpdateManyMutationInput, product_imagesUncheckedUpdateManyInput>
    /**
     * Filter which product_images to update
     */
    where?: product_imagesWhereInput
    /**
     * Limit how many product_images to update.
     */
    limit?: number
  }

  /**
   * product_images upsert
   */
  export type product_imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the product_images to update in case it exists.
     */
    where: product_imagesWhereUniqueInput
    /**
     * In case the product_images found by the `where` argument doesn't exist, create a new product_images with this data.
     */
    create: XOR<product_imagesCreateInput, product_imagesUncheckedCreateInput>
    /**
     * In case the product_images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_imagesUpdateInput, product_imagesUncheckedUpdateInput>
  }

  /**
   * product_images delete
   */
  export type product_imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter which product_images to delete.
     */
    where: product_imagesWhereUniqueInput
  }

  /**
   * product_images deleteMany
   */
  export type product_imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_images to delete
     */
    where?: product_imagesWhereInput
    /**
     * Limit how many product_images to delete.
     */
    limit?: number
  }

  /**
   * product_images without action
   */
  export type product_imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    acidity_level: number | null
    roast_level: number | null
    cogs: number | null
    base_price: number | null
    stock: number | null
    discount_price: number | null
  }

  export type ProductsSumAggregateOutputType = {
    acidity_level: number | null
    roast_level: number | null
    cogs: number | null
    base_price: number | null
    stock: number | null
    discount_price: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    category_slug: string | null
    name: string | null
    origin: string | null
    description: string | null
    tasting_notes: string | null
    roast_profile: string | null
    acidity_level: number | null
    roast_level: number | null
    cogs: number | null
    base_price: number | null
    stock: number | null
    main_image: string | null
    roast_log: string | null
    created_at: Date | null
    updated_at: Date | null
    discount_price: number | null
    is_on_sale: boolean | null
    discount_start: string | null
    discount_end: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    category_slug: string | null
    name: string | null
    origin: string | null
    description: string | null
    tasting_notes: string | null
    roast_profile: string | null
    acidity_level: number | null
    roast_level: number | null
    cogs: number | null
    base_price: number | null
    stock: number | null
    main_image: string | null
    roast_log: string | null
    created_at: Date | null
    updated_at: Date | null
    discount_price: number | null
    is_on_sale: boolean | null
    discount_start: string | null
    discount_end: string | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    category_slug: number
    name: number
    origin: number
    description: number
    tasting_notes: number
    roast_profile: number
    acidity_level: number
    roast_level: number
    cogs: number
    base_price: number
    stock: number
    main_image: number
    roast_log: number
    created_at: number
    updated_at: number
    discount_price: number
    is_on_sale: number
    discount_start: number
    discount_end: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    acidity_level?: true
    roast_level?: true
    cogs?: true
    base_price?: true
    stock?: true
    discount_price?: true
  }

  export type ProductsSumAggregateInputType = {
    acidity_level?: true
    roast_level?: true
    cogs?: true
    base_price?: true
    stock?: true
    discount_price?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    category_slug?: true
    name?: true
    origin?: true
    description?: true
    tasting_notes?: true
    roast_profile?: true
    acidity_level?: true
    roast_level?: true
    cogs?: true
    base_price?: true
    stock?: true
    main_image?: true
    roast_log?: true
    created_at?: true
    updated_at?: true
    discount_price?: true
    is_on_sale?: true
    discount_start?: true
    discount_end?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    category_slug?: true
    name?: true
    origin?: true
    description?: true
    tasting_notes?: true
    roast_profile?: true
    acidity_level?: true
    roast_level?: true
    cogs?: true
    base_price?: true
    stock?: true
    main_image?: true
    roast_log?: true
    created_at?: true
    updated_at?: true
    discount_price?: true
    is_on_sale?: true
    discount_start?: true
    discount_end?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    category_slug?: true
    name?: true
    origin?: true
    description?: true
    tasting_notes?: true
    roast_profile?: true
    acidity_level?: true
    roast_level?: true
    cogs?: true
    base_price?: true
    stock?: true
    main_image?: true
    roast_log?: true
    created_at?: true
    updated_at?: true
    discount_price?: true
    is_on_sale?: true
    discount_start?: true
    discount_end?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: string
    category_slug: string
    name: string
    origin: string | null
    description: string | null
    tasting_notes: string | null
    roast_profile: string | null
    acidity_level: number | null
    roast_level: number | null
    cogs: number | null
    base_price: number | null
    stock: number | null
    main_image: string | null
    roast_log: string | null
    created_at: Date
    updated_at: Date
    discount_price: number | null
    is_on_sale: boolean | null
    discount_start: string | null
    discount_end: string | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_slug?: boolean
    name?: boolean
    origin?: boolean
    description?: boolean
    tasting_notes?: boolean
    roast_profile?: boolean
    acidity_level?: boolean
    roast_level?: boolean
    cogs?: boolean
    base_price?: boolean
    stock?: boolean
    main_image?: boolean
    roast_log?: boolean
    created_at?: boolean
    updated_at?: boolean
    discount_price?: boolean
    is_on_sale?: boolean
    discount_start?: boolean
    discount_end?: boolean
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    product_images?: boolean | products$product_imagesArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>



  export type productsSelectScalar = {
    id?: boolean
    category_slug?: boolean
    name?: boolean
    origin?: boolean
    description?: boolean
    tasting_notes?: boolean
    roast_profile?: boolean
    acidity_level?: boolean
    roast_level?: boolean
    cogs?: boolean
    base_price?: boolean
    stock?: boolean
    main_image?: boolean
    roast_log?: boolean
    created_at?: boolean
    updated_at?: boolean
    discount_price?: boolean
    is_on_sale?: boolean
    discount_start?: boolean
    discount_end?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category_slug" | "name" | "origin" | "description" | "tasting_notes" | "roast_profile" | "acidity_level" | "roast_level" | "cogs" | "base_price" | "stock" | "main_image" | "roast_log" | "created_at" | "updated_at" | "discount_price" | "is_on_sale" | "discount_start" | "discount_end", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    product_images?: boolean | products$product_imagesArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
      product_images: Prisma.$product_imagesPayload<ExtArgs>[]
      categories: Prisma.$categoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category_slug: string
      name: string
      origin: string | null
      description: string | null
      tasting_notes: string | null
      roast_profile: string | null
      acidity_level: number | null
      roast_level: number | null
      cogs: number | null
      base_price: number | null
      stock: number | null
      main_image: string | null
      roast_log: string | null
      created_at: Date
      updated_at: Date
      discount_price: number | null
      is_on_sale: boolean | null
      discount_start: string | null
      discount_end: string | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_items<T extends products$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, products$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product_images<T extends products$product_imagesArgs<ExtArgs> = {}>(args?: Subset<T, products$product_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'String'>
    readonly category_slug: FieldRef<"products", 'String'>
    readonly name: FieldRef<"products", 'String'>
    readonly origin: FieldRef<"products", 'String'>
    readonly description: FieldRef<"products", 'String'>
    readonly tasting_notes: FieldRef<"products", 'String'>
    readonly roast_profile: FieldRef<"products", 'String'>
    readonly acidity_level: FieldRef<"products", 'Int'>
    readonly roast_level: FieldRef<"products", 'Int'>
    readonly cogs: FieldRef<"products", 'Int'>
    readonly base_price: FieldRef<"products", 'Int'>
    readonly stock: FieldRef<"products", 'Int'>
    readonly main_image: FieldRef<"products", 'String'>
    readonly roast_log: FieldRef<"products", 'String'>
    readonly created_at: FieldRef<"products", 'DateTime'>
    readonly updated_at: FieldRef<"products", 'DateTime'>
    readonly discount_price: FieldRef<"products", 'Int'>
    readonly is_on_sale: FieldRef<"products", 'Boolean'>
    readonly discount_start: FieldRef<"products", 'String'>
    readonly discount_end: FieldRef<"products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.order_items
   */
  export type products$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * products.product_images
   */
  export type products$product_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    where?: product_imagesWhereInput
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    cursor?: product_imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_imagesScalarFieldEnum | Product_imagesScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: string | null
    reference_id: string | null
    type: $Enums.transactions_type | null
    category: $Enums.transactions_category | null
    amount: number | null
    description: string | null
    transaction_date: Date | null
    created_at: Date | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: string | null
    reference_id: string | null
    type: $Enums.transactions_type | null
    category: $Enums.transactions_category | null
    amount: number | null
    description: string | null
    transaction_date: Date | null
    created_at: Date | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    reference_id: number
    type: number
    category: number
    amount: number
    description: number
    transaction_date: number
    created_at: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionsSumAggregateInputType = {
    amount?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    reference_id?: true
    type?: true
    category?: true
    amount?: true
    description?: true
    transaction_date?: true
    created_at?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    reference_id?: true
    type?: true
    category?: true
    amount?: true
    description?: true
    transaction_date?: true
    created_at?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    reference_id?: true
    type?: true
    category?: true
    amount?: true
    description?: true
    transaction_date?: true
    created_at?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to aggregate.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
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




  export type transactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithAggregationInput | transactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: transactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: string
    reference_id: string | null
    type: $Enums.transactions_type
    category: $Enums.transactions_category
    amount: number
    description: string
    transaction_date: Date
    created_at: Date
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends transactionsGroupByArgs> = Prisma.PrismaPromise<
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


  export type transactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference_id?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    transaction_date?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["transactions"]>



  export type transactionsSelectScalar = {
    id?: boolean
    reference_id?: boolean
    type?: boolean
    category?: boolean
    amount?: boolean
    description?: boolean
    transaction_date?: boolean
    created_at?: boolean
  }

  export type transactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reference_id" | "type" | "category" | "amount" | "description" | "transaction_date" | "created_at", ExtArgs["result"]["transactions"]>

  export type $transactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transactions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reference_id: string | null
      type: $Enums.transactions_type
      category: $Enums.transactions_category
      amount: number
      description: string
      transaction_date: Date
      created_at: Date
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type transactionsGetPayload<S extends boolean | null | undefined | transactionsDefaultArgs> = $Result.GetResult<Prisma.$transactionsPayload, S>

  type transactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface transactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transactions'], meta: { name: 'transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {transactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionsFindUniqueArgs>(args: SelectSubset<T, transactionsFindUniqueArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionsFindFirstArgs>(args?: SelectSubset<T, transactionsFindFirstArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends transactionsFindManyArgs>(args?: SelectSubset<T, transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {transactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends transactionsCreateArgs>(args: SelectSubset<T, transactionsCreateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionsCreateManyArgs>(args?: SelectSubset<T, transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transactions.
     * @param {transactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends transactionsDeleteArgs>(args: SelectSubset<T, transactionsDeleteArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {transactionsUpdateArgs} args - Arguments to update one Transactions.
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
    update<T extends transactionsUpdateArgs>(args: SelectSubset<T, transactionsUpdateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionsDeleteManyArgs>(args?: SelectSubset<T, transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends transactionsUpdateManyArgs>(args: SelectSubset<T, transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transactions.
     * @param {transactionsUpsertArgs} args - Arguments to update or create a Transactions.
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
    upsert<T extends transactionsUpsertArgs>(args: SelectSubset<T, transactionsUpsertArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionsCountArgs>(
      args?: Subset<T, transactionsCountArgs>,
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
     * @param {transactionsGroupByArgs} args - Group by arguments.
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
      T extends transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionsGroupByArgs['orderBy'] }
        : { orderBy?: transactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transactions model
   */
  readonly fields: transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the transactions model
   */
  interface transactionsFieldRefs {
    readonly id: FieldRef<"transactions", 'String'>
    readonly reference_id: FieldRef<"transactions", 'String'>
    readonly type: FieldRef<"transactions", 'transactions_type'>
    readonly category: FieldRef<"transactions", 'transactions_category'>
    readonly amount: FieldRef<"transactions", 'Int'>
    readonly description: FieldRef<"transactions", 'String'>
    readonly transaction_date: FieldRef<"transactions", 'DateTime'>
    readonly created_at: FieldRef<"transactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transactions findUnique
   */
  export type transactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findUniqueOrThrow
   */
  export type transactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findFirst
   */
  export type transactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findFirstOrThrow
   */
  export type transactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findMany
   */
  export type transactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions create
   */
  export type transactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The data needed to create a transactions.
     */
    data: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
  }

  /**
   * transactions createMany
   */
  export type transactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transactions update
   */
  export type transactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The data needed to update a transactions.
     */
    data: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
    /**
     * Choose, which transactions to update.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions updateMany
   */
  export type transactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transactions upsert
   */
  export type transactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The filter to search for the transactions to update in case it exists.
     */
    where: transactionsWhereUniqueInput
    /**
     * In case the transactions found by the `where` argument doesn't exist, create a new transactions with this data.
     */
    create: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
    /**
     * In case the transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
  }

  /**
   * transactions delete
   */
  export type transactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Filter which transactions to delete.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions deleteMany
   */
  export type transactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transactions without action
   */
  export type transactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.users_role | null
    status: $Enums.users_status | null
    last_login: Date | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.users_role | null
    status: $Enums.users_status | null
    last_login: Date | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password_hash: number
    role: number
    status: number
    last_login: number
    created_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    status?: true
    last_login?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    status?: true
    last_login?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    status?: true
    last_login?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    email: string
    password_hash: string
    role: $Enums.users_role | null
    status: $Enums.users_status | null
    last_login: Date | null
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    status?: boolean
    last_login?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    status?: boolean
    last_login?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password_hash" | "role" | "status" | "last_login" | "created_at", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password_hash: string
      role: $Enums.users_role | null
      status: $Enums.users_status | null
      last_login: Date | null
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'users_role'>
    readonly status: FieldRef<"users", 'users_status'>
    readonly last_login: FieldRef<"users", 'DateTime'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Model customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    status: string | null
    created_at: Date | null
    profile_image: string | null
  }

  export type CustomersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    status: string | null
    created_at: Date | null
    profile_image: string | null
  }

  export type CustomersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    password: number
    status: number
    created_at: number
    profile_image: number
    _all: number
  }


  export type CustomersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    status?: true
    created_at?: true
    profile_image?: true
  }

  export type CustomersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    status?: true
    created_at?: true
    profile_image?: true
  }

  export type CustomersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    status?: true
    created_at?: true
    profile_image?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to aggregate.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type customersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
    orderBy?: customersOrderByWithAggregationInput | customersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    password: string
    status: string
    created_at: Date
    profile_image: string | null
    _count: CustomersCountAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends customersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type customersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    status?: boolean
    created_at?: boolean
    profile_image?: boolean
  }, ExtArgs["result"]["customers"]>



  export type customersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    status?: boolean
    created_at?: boolean
    profile_image?: boolean
  }

  export type customersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "password" | "status" | "created_at" | "profile_image", ExtArgs["result"]["customers"]>

  export type $customersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      password: string
      status: string
      created_at: Date
      profile_image: string | null
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }

  type customersGetPayload<S extends boolean | null | undefined | customersDefaultArgs> = $Result.GetResult<Prisma.$customersPayload, S>

  type customersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface customersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customers'], meta: { name: 'customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customersFindUniqueArgs>(args: SelectSubset<T, customersFindUniqueArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(args: SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customersFindFirstArgs>(args?: SelectSubset<T, customersFindFirstArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(args?: SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customersWithIdOnly = await prisma.customers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends customersFindManyArgs>(args?: SelectSubset<T, customersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
     */
    create<T extends customersCreateArgs>(args: SelectSubset<T, customersCreateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customersCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customersCreateManyArgs>(args?: SelectSubset<T, customersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
     */
    delete<T extends customersDeleteArgs>(args: SelectSubset<T, customersDeleteArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customersUpdateArgs>(args: SelectSubset<T, customersUpdateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customersDeleteManyArgs>(args?: SelectSubset<T, customersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customersUpdateManyArgs>(args: SelectSubset<T, customersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
     */
    upsert<T extends customersUpsertArgs>(args: SelectSubset<T, customersUpsertArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersGroupByArgs} args - Group by arguments.
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
      T extends customersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customersGroupByArgs['orderBy'] }
        : { orderBy?: customersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customers model
   */
  readonly fields: customersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the customers model
   */
  interface customersFieldRefs {
    readonly id: FieldRef<"customers", 'String'>
    readonly name: FieldRef<"customers", 'String'>
    readonly email: FieldRef<"customers", 'String'>
    readonly phone: FieldRef<"customers", 'String'>
    readonly password: FieldRef<"customers", 'String'>
    readonly status: FieldRef<"customers", 'String'>
    readonly created_at: FieldRef<"customers", 'DateTime'>
    readonly profile_image: FieldRef<"customers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * customers findUnique
   */
  export type customersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findUniqueOrThrow
   */
  export type customersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findFirst
   */
  export type customersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findFirstOrThrow
   */
  export type customersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findMany
   */
  export type customersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers create
   */
  export type customersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data needed to create a customers.
     */
    data: XOR<customersCreateInput, customersUncheckedCreateInput>
  }

  /**
   * customers createMany
   */
  export type customersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers update
   */
  export type customersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data needed to update a customers.
     */
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers upsert
   */
  export type customersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The filter to search for the customers to update in case it exists.
     */
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     */
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }

  /**
   * customers delete
   */
  export type customersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Filter which customers to delete.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customers without action
   */
  export type customersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
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


  export const CategoriesScalarFieldEnum: {
    slug: 'slug',
    name: 'name'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const Order_itemsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    product_id: 'product_id',
    product_name: 'product_name',
    quantity: 'quantity',
    price_at_time: 'price_at_time'
  };

  export type Order_itemsScalarFieldEnum = (typeof Order_itemsScalarFieldEnum)[keyof typeof Order_itemsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    customer_name: 'customer_name',
    customer_email: 'customer_email',
    customer_phone: 'customer_phone',
    shipping_address: 'shipping_address',
    shipping_fee: 'shipping_fee',
    total_amount: 'total_amount',
    status: 'status',
    courier: 'courier',
    tracking_number: 'tracking_number',
    cancel_reason: 'cancel_reason',
    created_at: 'created_at'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const Finance_transactionsScalarFieldEnum: {
    id: 'id',
    type: 'type',
    category: 'category',
    amount: 'amount',
    description: 'description',
    reference_id: 'reference_id',
    date: 'date'
  };

  export type Finance_transactionsScalarFieldEnum = (typeof Finance_transactionsScalarFieldEnum)[keyof typeof Finance_transactionsScalarFieldEnum]


  export const ProcurementsScalarFieldEnum: {
    id: 'id',
    supplier: 'supplier',
    items_description: 'items_description',
    total_cost: 'total_cost',
    logistics: 'logistics',
    courier_service: 'courier_service',
    status: 'status',
    ordered_date: 'ordered_date',
    sent_date: 'sent_date',
    arrival_date: 'arrival_date',
    created_at: 'created_at'
  };

  export type ProcurementsScalarFieldEnum = (typeof ProcurementsScalarFieldEnum)[keyof typeof ProcurementsScalarFieldEnum]


  export const Product_imagesScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    image_url: 'image_url'
  };

  export type Product_imagesScalarFieldEnum = (typeof Product_imagesScalarFieldEnum)[keyof typeof Product_imagesScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    category_slug: 'category_slug',
    name: 'name',
    origin: 'origin',
    description: 'description',
    tasting_notes: 'tasting_notes',
    roast_profile: 'roast_profile',
    acidity_level: 'acidity_level',
    roast_level: 'roast_level',
    cogs: 'cogs',
    base_price: 'base_price',
    stock: 'stock',
    main_image: 'main_image',
    roast_log: 'roast_log',
    created_at: 'created_at',
    updated_at: 'updated_at',
    discount_price: 'discount_price',
    is_on_sale: 'is_on_sale',
    discount_start: 'discount_start',
    discount_end: 'discount_end'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    reference_id: 'reference_id',
    type: 'type',
    category: 'category',
    amount: 'amount',
    description: 'description',
    transaction_date: 'transaction_date',
    created_at: 'created_at'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    role: 'role',
    status: 'status',
    last_login: 'last_login',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const CustomersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    status: 'status',
    created_at: 'created_at',
    profile_image: 'profile_image'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const categoriesOrderByRelevanceFieldEnum: {
    slug: 'slug',
    name: 'name'
  };

  export type categoriesOrderByRelevanceFieldEnum = (typeof categoriesOrderByRelevanceFieldEnum)[keyof typeof categoriesOrderByRelevanceFieldEnum]


  export const order_itemsOrderByRelevanceFieldEnum: {
    order_id: 'order_id',
    product_id: 'product_id',
    product_name: 'product_name'
  };

  export type order_itemsOrderByRelevanceFieldEnum = (typeof order_itemsOrderByRelevanceFieldEnum)[keyof typeof order_itemsOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ordersOrderByRelevanceFieldEnum: {
    id: 'id',
    customer_name: 'customer_name',
    customer_email: 'customer_email',
    customer_phone: 'customer_phone',
    shipping_address: 'shipping_address',
    courier: 'courier',
    tracking_number: 'tracking_number',
    cancel_reason: 'cancel_reason'
  };

  export type ordersOrderByRelevanceFieldEnum = (typeof ordersOrderByRelevanceFieldEnum)[keyof typeof ordersOrderByRelevanceFieldEnum]


  export const finance_transactionsOrderByRelevanceFieldEnum: {
    id: 'id',
    type: 'type',
    category: 'category',
    description: 'description',
    reference_id: 'reference_id'
  };

  export type finance_transactionsOrderByRelevanceFieldEnum = (typeof finance_transactionsOrderByRelevanceFieldEnum)[keyof typeof finance_transactionsOrderByRelevanceFieldEnum]


  export const procurementsOrderByRelevanceFieldEnum: {
    id: 'id',
    supplier: 'supplier',
    items_description: 'items_description',
    courier_service: 'courier_service',
    status: 'status'
  };

  export type procurementsOrderByRelevanceFieldEnum = (typeof procurementsOrderByRelevanceFieldEnum)[keyof typeof procurementsOrderByRelevanceFieldEnum]


  export const product_imagesOrderByRelevanceFieldEnum: {
    product_id: 'product_id',
    image_url: 'image_url'
  };

  export type product_imagesOrderByRelevanceFieldEnum = (typeof product_imagesOrderByRelevanceFieldEnum)[keyof typeof product_imagesOrderByRelevanceFieldEnum]


  export const productsOrderByRelevanceFieldEnum: {
    id: 'id',
    category_slug: 'category_slug',
    name: 'name',
    origin: 'origin',
    description: 'description',
    tasting_notes: 'tasting_notes',
    roast_profile: 'roast_profile',
    main_image: 'main_image',
    roast_log: 'roast_log',
    discount_start: 'discount_start',
    discount_end: 'discount_end'
  };

  export type productsOrderByRelevanceFieldEnum = (typeof productsOrderByRelevanceFieldEnum)[keyof typeof productsOrderByRelevanceFieldEnum]


  export const transactionsOrderByRelevanceFieldEnum: {
    id: 'id',
    reference_id: 'reference_id',
    description: 'description'
  };

  export type transactionsOrderByRelevanceFieldEnum = (typeof transactionsOrderByRelevanceFieldEnum)[keyof typeof transactionsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const customersOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    status: 'status',
    profile_image: 'profile_image'
  };

  export type customersOrderByRelevanceFieldEnum = (typeof customersOrderByRelevanceFieldEnum)[keyof typeof customersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'orders_status'
   */
  export type Enumorders_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'orders_status'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'procurements_logistics'
   */
  export type Enumprocurements_logisticsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'procurements_logistics'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'transactions_type'
   */
  export type Enumtransactions_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transactions_type'>
    


  /**
   * Reference to a field of type 'transactions_category'
   */
  export type Enumtransactions_categoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transactions_category'>
    


  /**
   * Reference to a field of type 'users_role'
   */
  export type Enumusers_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_role'>
    


  /**
   * Reference to a field of type 'users_status'
   */
  export type Enumusers_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    slug?: StringFilter<"categories"> | string
    name?: StringFilter<"categories"> | string
    products?: ProductsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    slug?: SortOrder
    name?: SortOrder
    products?: productsOrderByRelationAggregateInput
    _relevance?: categoriesOrderByRelevanceInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    slug?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    name?: StringFilter<"categories"> | string
    products?: ProductsListRelationFilter
  }, "slug">

  export type categoriesOrderByWithAggregationInput = {
    slug?: SortOrder
    name?: SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    slug?: StringWithAggregatesFilter<"categories"> | string
    name?: StringWithAggregatesFilter<"categories"> | string
  }

  export type order_itemsWhereInput = {
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    id?: IntFilter<"order_items"> | number
    order_id?: StringFilter<"order_items"> | string
    product_id?: StringFilter<"order_items"> | string
    product_name?: StringFilter<"order_items"> | string
    quantity?: IntFilter<"order_items"> | number
    price_at_time?: IntFilter<"order_items"> | number
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type order_itemsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    product_name?: SortOrder
    quantity?: SortOrder
    price_at_time?: SortOrder
    orders?: ordersOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
    _relevance?: order_itemsOrderByRelevanceInput
  }

  export type order_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    order_id?: StringFilter<"order_items"> | string
    product_id?: StringFilter<"order_items"> | string
    product_name?: StringFilter<"order_items"> | string
    quantity?: IntFilter<"order_items"> | number
    price_at_time?: IntFilter<"order_items"> | number
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id">

  export type order_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    product_name?: SortOrder
    quantity?: SortOrder
    price_at_time?: SortOrder
    _count?: order_itemsCountOrderByAggregateInput
    _avg?: order_itemsAvgOrderByAggregateInput
    _max?: order_itemsMaxOrderByAggregateInput
    _min?: order_itemsMinOrderByAggregateInput
    _sum?: order_itemsSumOrderByAggregateInput
  }

  export type order_itemsScalarWhereWithAggregatesInput = {
    AND?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    OR?: order_itemsScalarWhereWithAggregatesInput[]
    NOT?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order_items"> | number
    order_id?: StringWithAggregatesFilter<"order_items"> | string
    product_id?: StringWithAggregatesFilter<"order_items"> | string
    product_name?: StringWithAggregatesFilter<"order_items"> | string
    quantity?: IntWithAggregatesFilter<"order_items"> | number
    price_at_time?: IntWithAggregatesFilter<"order_items"> | number
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: StringFilter<"orders"> | string
    customer_name?: StringFilter<"orders"> | string
    customer_email?: StringFilter<"orders"> | string
    customer_phone?: StringFilter<"orders"> | string
    shipping_address?: StringFilter<"orders"> | string
    shipping_fee?: IntNullableFilter<"orders"> | number | null
    total_amount?: IntFilter<"orders"> | number
    status?: Enumorders_statusNullableFilter<"orders"> | $Enums.orders_status | null
    courier?: StringNullableFilter<"orders"> | string | null
    tracking_number?: StringNullableFilter<"orders"> | string | null
    cancel_reason?: StringNullableFilter<"orders"> | string | null
    created_at?: DateTimeFilter<"orders"> | Date | string
    order_items?: Order_itemsListRelationFilter
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_email?: SortOrder
    customer_phone?: SortOrder
    shipping_address?: SortOrder
    shipping_fee?: SortOrderInput | SortOrder
    total_amount?: SortOrder
    status?: SortOrderInput | SortOrder
    courier?: SortOrderInput | SortOrder
    tracking_number?: SortOrderInput | SortOrder
    cancel_reason?: SortOrderInput | SortOrder
    created_at?: SortOrder
    order_items?: order_itemsOrderByRelationAggregateInput
    _relevance?: ordersOrderByRelevanceInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    customer_name?: StringFilter<"orders"> | string
    customer_email?: StringFilter<"orders"> | string
    customer_phone?: StringFilter<"orders"> | string
    shipping_address?: StringFilter<"orders"> | string
    shipping_fee?: IntNullableFilter<"orders"> | number | null
    total_amount?: IntFilter<"orders"> | number
    status?: Enumorders_statusNullableFilter<"orders"> | $Enums.orders_status | null
    courier?: StringNullableFilter<"orders"> | string | null
    tracking_number?: StringNullableFilter<"orders"> | string | null
    cancel_reason?: StringNullableFilter<"orders"> | string | null
    created_at?: DateTimeFilter<"orders"> | Date | string
    order_items?: Order_itemsListRelationFilter
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_email?: SortOrder
    customer_phone?: SortOrder
    shipping_address?: SortOrder
    shipping_fee?: SortOrderInput | SortOrder
    total_amount?: SortOrder
    status?: SortOrderInput | SortOrder
    courier?: SortOrderInput | SortOrder
    tracking_number?: SortOrderInput | SortOrder
    cancel_reason?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"orders"> | string
    customer_name?: StringWithAggregatesFilter<"orders"> | string
    customer_email?: StringWithAggregatesFilter<"orders"> | string
    customer_phone?: StringWithAggregatesFilter<"orders"> | string
    shipping_address?: StringWithAggregatesFilter<"orders"> | string
    shipping_fee?: IntNullableWithAggregatesFilter<"orders"> | number | null
    total_amount?: IntWithAggregatesFilter<"orders"> | number
    status?: Enumorders_statusNullableWithAggregatesFilter<"orders"> | $Enums.orders_status | null
    courier?: StringNullableWithAggregatesFilter<"orders"> | string | null
    tracking_number?: StringNullableWithAggregatesFilter<"orders"> | string | null
    cancel_reason?: StringNullableWithAggregatesFilter<"orders"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"orders"> | Date | string
  }

  export type finance_transactionsWhereInput = {
    AND?: finance_transactionsWhereInput | finance_transactionsWhereInput[]
    OR?: finance_transactionsWhereInput[]
    NOT?: finance_transactionsWhereInput | finance_transactionsWhereInput[]
    id?: StringFilter<"finance_transactions"> | string
    type?: StringFilter<"finance_transactions"> | string
    category?: StringFilter<"finance_transactions"> | string
    amount?: IntFilter<"finance_transactions"> | number
    description?: StringNullableFilter<"finance_transactions"> | string | null
    reference_id?: StringNullableFilter<"finance_transactions"> | string | null
    date?: DateTimeFilter<"finance_transactions"> | Date | string
  }

  export type finance_transactionsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    reference_id?: SortOrderInput | SortOrder
    date?: SortOrder
    _relevance?: finance_transactionsOrderByRelevanceInput
  }

  export type finance_transactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: finance_transactionsWhereInput | finance_transactionsWhereInput[]
    OR?: finance_transactionsWhereInput[]
    NOT?: finance_transactionsWhereInput | finance_transactionsWhereInput[]
    type?: StringFilter<"finance_transactions"> | string
    category?: StringFilter<"finance_transactions"> | string
    amount?: IntFilter<"finance_transactions"> | number
    description?: StringNullableFilter<"finance_transactions"> | string | null
    reference_id?: StringNullableFilter<"finance_transactions"> | string | null
    date?: DateTimeFilter<"finance_transactions"> | Date | string
  }, "id">

  export type finance_transactionsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    reference_id?: SortOrderInput | SortOrder
    date?: SortOrder
    _count?: finance_transactionsCountOrderByAggregateInput
    _avg?: finance_transactionsAvgOrderByAggregateInput
    _max?: finance_transactionsMaxOrderByAggregateInput
    _min?: finance_transactionsMinOrderByAggregateInput
    _sum?: finance_transactionsSumOrderByAggregateInput
  }

  export type finance_transactionsScalarWhereWithAggregatesInput = {
    AND?: finance_transactionsScalarWhereWithAggregatesInput | finance_transactionsScalarWhereWithAggregatesInput[]
    OR?: finance_transactionsScalarWhereWithAggregatesInput[]
    NOT?: finance_transactionsScalarWhereWithAggregatesInput | finance_transactionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"finance_transactions"> | string
    type?: StringWithAggregatesFilter<"finance_transactions"> | string
    category?: StringWithAggregatesFilter<"finance_transactions"> | string
    amount?: IntWithAggregatesFilter<"finance_transactions"> | number
    description?: StringNullableWithAggregatesFilter<"finance_transactions"> | string | null
    reference_id?: StringNullableWithAggregatesFilter<"finance_transactions"> | string | null
    date?: DateTimeWithAggregatesFilter<"finance_transactions"> | Date | string
  }

  export type procurementsWhereInput = {
    AND?: procurementsWhereInput | procurementsWhereInput[]
    OR?: procurementsWhereInput[]
    NOT?: procurementsWhereInput | procurementsWhereInput[]
    id?: StringFilter<"procurements"> | string
    supplier?: StringFilter<"procurements"> | string
    items_description?: StringFilter<"procurements"> | string
    total_cost?: IntFilter<"procurements"> | number
    logistics?: Enumprocurements_logisticsNullableFilter<"procurements"> | $Enums.procurements_logistics | null
    courier_service?: StringNullableFilter<"procurements"> | string | null
    status?: StringNullableFilter<"procurements"> | string | null
    ordered_date?: DateTimeNullableFilter<"procurements"> | Date | string | null
    sent_date?: DateTimeNullableFilter<"procurements"> | Date | string | null
    arrival_date?: DateTimeNullableFilter<"procurements"> | Date | string | null
    created_at?: DateTimeFilter<"procurements"> | Date | string
  }

  export type procurementsOrderByWithRelationInput = {
    id?: SortOrder
    supplier?: SortOrder
    items_description?: SortOrder
    total_cost?: SortOrder
    logistics?: SortOrderInput | SortOrder
    courier_service?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    ordered_date?: SortOrderInput | SortOrder
    sent_date?: SortOrderInput | SortOrder
    arrival_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _relevance?: procurementsOrderByRelevanceInput
  }

  export type procurementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: procurementsWhereInput | procurementsWhereInput[]
    OR?: procurementsWhereInput[]
    NOT?: procurementsWhereInput | procurementsWhereInput[]
    supplier?: StringFilter<"procurements"> | string
    items_description?: StringFilter<"procurements"> | string
    total_cost?: IntFilter<"procurements"> | number
    logistics?: Enumprocurements_logisticsNullableFilter<"procurements"> | $Enums.procurements_logistics | null
    courier_service?: StringNullableFilter<"procurements"> | string | null
    status?: StringNullableFilter<"procurements"> | string | null
    ordered_date?: DateTimeNullableFilter<"procurements"> | Date | string | null
    sent_date?: DateTimeNullableFilter<"procurements"> | Date | string | null
    arrival_date?: DateTimeNullableFilter<"procurements"> | Date | string | null
    created_at?: DateTimeFilter<"procurements"> | Date | string
  }, "id">

  export type procurementsOrderByWithAggregationInput = {
    id?: SortOrder
    supplier?: SortOrder
    items_description?: SortOrder
    total_cost?: SortOrder
    logistics?: SortOrderInput | SortOrder
    courier_service?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    ordered_date?: SortOrderInput | SortOrder
    sent_date?: SortOrderInput | SortOrder
    arrival_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: procurementsCountOrderByAggregateInput
    _avg?: procurementsAvgOrderByAggregateInput
    _max?: procurementsMaxOrderByAggregateInput
    _min?: procurementsMinOrderByAggregateInput
    _sum?: procurementsSumOrderByAggregateInput
  }

  export type procurementsScalarWhereWithAggregatesInput = {
    AND?: procurementsScalarWhereWithAggregatesInput | procurementsScalarWhereWithAggregatesInput[]
    OR?: procurementsScalarWhereWithAggregatesInput[]
    NOT?: procurementsScalarWhereWithAggregatesInput | procurementsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"procurements"> | string
    supplier?: StringWithAggregatesFilter<"procurements"> | string
    items_description?: StringWithAggregatesFilter<"procurements"> | string
    total_cost?: IntWithAggregatesFilter<"procurements"> | number
    logistics?: Enumprocurements_logisticsNullableWithAggregatesFilter<"procurements"> | $Enums.procurements_logistics | null
    courier_service?: StringNullableWithAggregatesFilter<"procurements"> | string | null
    status?: StringNullableWithAggregatesFilter<"procurements"> | string | null
    ordered_date?: DateTimeNullableWithAggregatesFilter<"procurements"> | Date | string | null
    sent_date?: DateTimeNullableWithAggregatesFilter<"procurements"> | Date | string | null
    arrival_date?: DateTimeNullableWithAggregatesFilter<"procurements"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"procurements"> | Date | string
  }

  export type product_imagesWhereInput = {
    AND?: product_imagesWhereInput | product_imagesWhereInput[]
    OR?: product_imagesWhereInput[]
    NOT?: product_imagesWhereInput | product_imagesWhereInput[]
    id?: IntFilter<"product_images"> | number
    product_id?: StringFilter<"product_images"> | string
    image_url?: StringFilter<"product_images"> | string
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type product_imagesOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    image_url?: SortOrder
    products?: productsOrderByWithRelationInput
    _relevance?: product_imagesOrderByRelevanceInput
  }

  export type product_imagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: product_imagesWhereInput | product_imagesWhereInput[]
    OR?: product_imagesWhereInput[]
    NOT?: product_imagesWhereInput | product_imagesWhereInput[]
    product_id?: StringFilter<"product_images"> | string
    image_url?: StringFilter<"product_images"> | string
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id">

  export type product_imagesOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    image_url?: SortOrder
    _count?: product_imagesCountOrderByAggregateInput
    _avg?: product_imagesAvgOrderByAggregateInput
    _max?: product_imagesMaxOrderByAggregateInput
    _min?: product_imagesMinOrderByAggregateInput
    _sum?: product_imagesSumOrderByAggregateInput
  }

  export type product_imagesScalarWhereWithAggregatesInput = {
    AND?: product_imagesScalarWhereWithAggregatesInput | product_imagesScalarWhereWithAggregatesInput[]
    OR?: product_imagesScalarWhereWithAggregatesInput[]
    NOT?: product_imagesScalarWhereWithAggregatesInput | product_imagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product_images"> | number
    product_id?: StringWithAggregatesFilter<"product_images"> | string
    image_url?: StringWithAggregatesFilter<"product_images"> | string
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: StringFilter<"products"> | string
    category_slug?: StringFilter<"products"> | string
    name?: StringFilter<"products"> | string
    origin?: StringNullableFilter<"products"> | string | null
    description?: StringNullableFilter<"products"> | string | null
    tasting_notes?: StringNullableFilter<"products"> | string | null
    roast_profile?: StringNullableFilter<"products"> | string | null
    acidity_level?: IntNullableFilter<"products"> | number | null
    roast_level?: IntNullableFilter<"products"> | number | null
    cogs?: IntNullableFilter<"products"> | number | null
    base_price?: IntNullableFilter<"products"> | number | null
    stock?: IntNullableFilter<"products"> | number | null
    main_image?: StringNullableFilter<"products"> | string | null
    roast_log?: StringNullableFilter<"products"> | string | null
    created_at?: DateTimeFilter<"products"> | Date | string
    updated_at?: DateTimeFilter<"products"> | Date | string
    discount_price?: IntNullableFilter<"products"> | number | null
    is_on_sale?: BoolNullableFilter<"products"> | boolean | null
    discount_start?: StringNullableFilter<"products"> | string | null
    discount_end?: StringNullableFilter<"products"> | string | null
    order_items?: Order_itemsListRelationFilter
    product_images?: Product_imagesListRelationFilter
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    category_slug?: SortOrder
    name?: SortOrder
    origin?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    tasting_notes?: SortOrderInput | SortOrder
    roast_profile?: SortOrderInput | SortOrder
    acidity_level?: SortOrderInput | SortOrder
    roast_level?: SortOrderInput | SortOrder
    cogs?: SortOrderInput | SortOrder
    base_price?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    main_image?: SortOrderInput | SortOrder
    roast_log?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    discount_price?: SortOrderInput | SortOrder
    is_on_sale?: SortOrderInput | SortOrder
    discount_start?: SortOrderInput | SortOrder
    discount_end?: SortOrderInput | SortOrder
    order_items?: order_itemsOrderByRelationAggregateInput
    product_images?: product_imagesOrderByRelationAggregateInput
    categories?: categoriesOrderByWithRelationInput
    _relevance?: productsOrderByRelevanceInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    category_slug?: StringFilter<"products"> | string
    name?: StringFilter<"products"> | string
    origin?: StringNullableFilter<"products"> | string | null
    description?: StringNullableFilter<"products"> | string | null
    tasting_notes?: StringNullableFilter<"products"> | string | null
    roast_profile?: StringNullableFilter<"products"> | string | null
    acidity_level?: IntNullableFilter<"products"> | number | null
    roast_level?: IntNullableFilter<"products"> | number | null
    cogs?: IntNullableFilter<"products"> | number | null
    base_price?: IntNullableFilter<"products"> | number | null
    stock?: IntNullableFilter<"products"> | number | null
    main_image?: StringNullableFilter<"products"> | string | null
    roast_log?: StringNullableFilter<"products"> | string | null
    created_at?: DateTimeFilter<"products"> | Date | string
    updated_at?: DateTimeFilter<"products"> | Date | string
    discount_price?: IntNullableFilter<"products"> | number | null
    is_on_sale?: BoolNullableFilter<"products"> | boolean | null
    discount_start?: StringNullableFilter<"products"> | string | null
    discount_end?: StringNullableFilter<"products"> | string | null
    order_items?: Order_itemsListRelationFilter
    product_images?: Product_imagesListRelationFilter
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    category_slug?: SortOrder
    name?: SortOrder
    origin?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    tasting_notes?: SortOrderInput | SortOrder
    roast_profile?: SortOrderInput | SortOrder
    acidity_level?: SortOrderInput | SortOrder
    roast_level?: SortOrderInput | SortOrder
    cogs?: SortOrderInput | SortOrder
    base_price?: SortOrderInput | SortOrder
    stock?: SortOrderInput | SortOrder
    main_image?: SortOrderInput | SortOrder
    roast_log?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    discount_price?: SortOrderInput | SortOrder
    is_on_sale?: SortOrderInput | SortOrder
    discount_start?: SortOrderInput | SortOrder
    discount_end?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"products"> | string
    category_slug?: StringWithAggregatesFilter<"products"> | string
    name?: StringWithAggregatesFilter<"products"> | string
    origin?: StringNullableWithAggregatesFilter<"products"> | string | null
    description?: StringNullableWithAggregatesFilter<"products"> | string | null
    tasting_notes?: StringNullableWithAggregatesFilter<"products"> | string | null
    roast_profile?: StringNullableWithAggregatesFilter<"products"> | string | null
    acidity_level?: IntNullableWithAggregatesFilter<"products"> | number | null
    roast_level?: IntNullableWithAggregatesFilter<"products"> | number | null
    cogs?: IntNullableWithAggregatesFilter<"products"> | number | null
    base_price?: IntNullableWithAggregatesFilter<"products"> | number | null
    stock?: IntNullableWithAggregatesFilter<"products"> | number | null
    main_image?: StringNullableWithAggregatesFilter<"products"> | string | null
    roast_log?: StringNullableWithAggregatesFilter<"products"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"products"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"products"> | Date | string
    discount_price?: IntNullableWithAggregatesFilter<"products"> | number | null
    is_on_sale?: BoolNullableWithAggregatesFilter<"products"> | boolean | null
    discount_start?: StringNullableWithAggregatesFilter<"products"> | string | null
    discount_end?: StringNullableWithAggregatesFilter<"products"> | string | null
  }

  export type transactionsWhereInput = {
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    id?: StringFilter<"transactions"> | string
    reference_id?: StringNullableFilter<"transactions"> | string | null
    type?: Enumtransactions_typeFilter<"transactions"> | $Enums.transactions_type
    category?: Enumtransactions_categoryFilter<"transactions"> | $Enums.transactions_category
    amount?: IntFilter<"transactions"> | number
    description?: StringFilter<"transactions"> | string
    transaction_date?: DateTimeFilter<"transactions"> | Date | string
    created_at?: DateTimeFilter<"transactions"> | Date | string
  }

  export type transactionsOrderByWithRelationInput = {
    id?: SortOrder
    reference_id?: SortOrderInput | SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    transaction_date?: SortOrder
    created_at?: SortOrder
    _relevance?: transactionsOrderByRelevanceInput
  }

  export type transactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    reference_id?: StringNullableFilter<"transactions"> | string | null
    type?: Enumtransactions_typeFilter<"transactions"> | $Enums.transactions_type
    category?: Enumtransactions_categoryFilter<"transactions"> | $Enums.transactions_category
    amount?: IntFilter<"transactions"> | number
    description?: StringFilter<"transactions"> | string
    transaction_date?: DateTimeFilter<"transactions"> | Date | string
    created_at?: DateTimeFilter<"transactions"> | Date | string
  }, "id">

  export type transactionsOrderByWithAggregationInput = {
    id?: SortOrder
    reference_id?: SortOrderInput | SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    transaction_date?: SortOrder
    created_at?: SortOrder
    _count?: transactionsCountOrderByAggregateInput
    _avg?: transactionsAvgOrderByAggregateInput
    _max?: transactionsMaxOrderByAggregateInput
    _min?: transactionsMinOrderByAggregateInput
    _sum?: transactionsSumOrderByAggregateInput
  }

  export type transactionsScalarWhereWithAggregatesInput = {
    AND?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    OR?: transactionsScalarWhereWithAggregatesInput[]
    NOT?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"transactions"> | string
    reference_id?: StringNullableWithAggregatesFilter<"transactions"> | string | null
    type?: Enumtransactions_typeWithAggregatesFilter<"transactions"> | $Enums.transactions_type
    category?: Enumtransactions_categoryWithAggregatesFilter<"transactions"> | $Enums.transactions_category
    amount?: IntWithAggregatesFilter<"transactions"> | number
    description?: StringWithAggregatesFilter<"transactions"> | string
    transaction_date?: DateTimeWithAggregatesFilter<"transactions"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"transactions"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    role?: Enumusers_roleNullableFilter<"users"> | $Enums.users_role | null
    status?: Enumusers_statusNullableFilter<"users"> | $Enums.users_status | null
    last_login?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    role?: Enumusers_roleNullableFilter<"users"> | $Enums.users_role | null
    status?: Enumusers_statusNullableFilter<"users"> | $Enums.users_status | null
    last_login?: DateTimeNullableFilter<"users"> | Date | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    role?: Enumusers_roleNullableWithAggregatesFilter<"users"> | $Enums.users_role | null
    status?: Enumusers_statusNullableWithAggregatesFilter<"users"> | $Enums.users_status | null
    last_login?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type customersWhereInput = {
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    id?: StringFilter<"customers"> | string
    name?: StringFilter<"customers"> | string
    email?: StringFilter<"customers"> | string
    phone?: StringNullableFilter<"customers"> | string | null
    password?: StringFilter<"customers"> | string
    status?: StringFilter<"customers"> | string
    created_at?: DateTimeFilter<"customers"> | Date | string
    profile_image?: StringNullableFilter<"customers"> | string | null
  }

  export type customersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    _relevance?: customersOrderByRelevanceInput
  }

  export type customersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    name?: StringFilter<"customers"> | string
    phone?: StringNullableFilter<"customers"> | string | null
    password?: StringFilter<"customers"> | string
    status?: StringFilter<"customers"> | string
    created_at?: DateTimeFilter<"customers"> | Date | string
    profile_image?: StringNullableFilter<"customers"> | string | null
  }, "id" | "email">

  export type customersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    profile_image?: SortOrderInput | SortOrder
    _count?: customersCountOrderByAggregateInput
    _max?: customersMaxOrderByAggregateInput
    _min?: customersMinOrderByAggregateInput
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    OR?: customersScalarWhereWithAggregatesInput[]
    NOT?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"customers"> | string
    name?: StringWithAggregatesFilter<"customers"> | string
    email?: StringWithAggregatesFilter<"customers"> | string
    phone?: StringNullableWithAggregatesFilter<"customers"> | string | null
    password?: StringWithAggregatesFilter<"customers"> | string
    status?: StringWithAggregatesFilter<"customers"> | string
    created_at?: DateTimeWithAggregatesFilter<"customers"> | Date | string
    profile_image?: StringNullableWithAggregatesFilter<"customers"> | string | null
  }

  export type categoriesCreateInput = {
    slug: string
    name: string
    products?: productsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    slug: string
    name: string
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    products?: productsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    slug: string
    name: string
  }

  export type categoriesUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesUncheckedUpdateManyInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type order_itemsCreateInput = {
    product_name: string
    quantity: number
    price_at_time: number
    orders: ordersCreateNestedOneWithoutOrder_itemsInput
    products: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateInput = {
    id?: number
    order_id: string
    product_id: string
    product_name: string
    quantity: number
    price_at_time: number
  }

  export type order_itemsUpdateInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_time?: IntFieldUpdateOperationsInput | number
    orders?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
    products?: productsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_time?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemsCreateManyInput = {
    id?: number
    order_id: string
    product_id: string
    product_name: string
    quantity: number
    price_at_time: number
  }

  export type order_itemsUpdateManyMutationInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_time?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_time?: IntFieldUpdateOperationsInput | number
  }

  export type ordersCreateInput = {
    id: string
    customer_name: string
    customer_email: string
    customer_phone: string
    shipping_address: string
    shipping_fee?: number | null
    total_amount: number
    status?: $Enums.orders_status | null
    courier?: string | null
    tracking_number?: string | null
    cancel_reason?: string | null
    created_at?: Date | string
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id: string
    customer_name: string
    customer_email: string
    customer_phone: string
    shipping_address: string
    shipping_fee?: number | null
    total_amount: number
    status?: $Enums.orders_status | null
    courier?: string | null
    tracking_number?: string | null
    cancel_reason?: string | null
    created_at?: Date | string
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_email?: StringFieldUpdateOperationsInput | string
    customer_phone?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    shipping_fee?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    cancel_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_email?: StringFieldUpdateOperationsInput | string
    customer_phone?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    shipping_fee?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    cancel_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    id: string
    customer_name: string
    customer_email: string
    customer_phone: string
    shipping_address: string
    shipping_fee?: number | null
    total_amount: number
    status?: $Enums.orders_status | null
    courier?: string | null
    tracking_number?: string | null
    cancel_reason?: string | null
    created_at?: Date | string
  }

  export type ordersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_email?: StringFieldUpdateOperationsInput | string
    customer_phone?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    shipping_fee?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    cancel_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_email?: StringFieldUpdateOperationsInput | string
    customer_phone?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    shipping_fee?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    cancel_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type finance_transactionsCreateInput = {
    id?: string
    type: string
    category: string
    amount: number
    description?: string | null
    reference_id?: string | null
    date?: Date | string
  }

  export type finance_transactionsUncheckedCreateInput = {
    id?: string
    type: string
    category: string
    amount: number
    description?: string | null
    reference_id?: string | null
    date?: Date | string
  }

  export type finance_transactionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type finance_transactionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type finance_transactionsCreateManyInput = {
    id?: string
    type: string
    category: string
    amount: number
    description?: string | null
    reference_id?: string | null
    date?: Date | string
  }

  export type finance_transactionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type finance_transactionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type procurementsCreateInput = {
    id?: string
    supplier: string
    items_description: string
    total_cost: number
    logistics?: $Enums.procurements_logistics | null
    courier_service?: string | null
    status?: string | null
    ordered_date?: Date | string | null
    sent_date?: Date | string | null
    arrival_date?: Date | string | null
    created_at?: Date | string
  }

  export type procurementsUncheckedCreateInput = {
    id?: string
    supplier: string
    items_description: string
    total_cost: number
    logistics?: $Enums.procurements_logistics | null
    courier_service?: string | null
    status?: string | null
    ordered_date?: Date | string | null
    sent_date?: Date | string | null
    arrival_date?: Date | string | null
    created_at?: Date | string
  }

  export type procurementsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    items_description?: StringFieldUpdateOperationsInput | string
    total_cost?: IntFieldUpdateOperationsInput | number
    logistics?: NullableEnumprocurements_logisticsFieldUpdateOperationsInput | $Enums.procurements_logistics | null
    courier_service?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    ordered_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrival_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type procurementsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    items_description?: StringFieldUpdateOperationsInput | string
    total_cost?: IntFieldUpdateOperationsInput | number
    logistics?: NullableEnumprocurements_logisticsFieldUpdateOperationsInput | $Enums.procurements_logistics | null
    courier_service?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    ordered_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrival_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type procurementsCreateManyInput = {
    id?: string
    supplier: string
    items_description: string
    total_cost: number
    logistics?: $Enums.procurements_logistics | null
    courier_service?: string | null
    status?: string | null
    ordered_date?: Date | string | null
    sent_date?: Date | string | null
    arrival_date?: Date | string | null
    created_at?: Date | string
  }

  export type procurementsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    items_description?: StringFieldUpdateOperationsInput | string
    total_cost?: IntFieldUpdateOperationsInput | number
    logistics?: NullableEnumprocurements_logisticsFieldUpdateOperationsInput | $Enums.procurements_logistics | null
    courier_service?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    ordered_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrival_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type procurementsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    items_description?: StringFieldUpdateOperationsInput | string
    total_cost?: IntFieldUpdateOperationsInput | number
    logistics?: NullableEnumprocurements_logisticsFieldUpdateOperationsInput | $Enums.procurements_logistics | null
    courier_service?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    ordered_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrival_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type product_imagesCreateInput = {
    image_url: string
    products: productsCreateNestedOneWithoutProduct_imagesInput
  }

  export type product_imagesUncheckedCreateInput = {
    id?: number
    product_id: string
    image_url: string
  }

  export type product_imagesUpdateInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    products?: productsUpdateOneRequiredWithoutProduct_imagesNestedInput
  }

  export type product_imagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type product_imagesCreateManyInput = {
    id?: number
    product_id: string
    image_url: string
  }

  export type product_imagesUpdateManyMutationInput = {
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type product_imagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type productsCreateInput = {
    id: string
    name: string
    origin?: string | null
    description?: string | null
    tasting_notes?: string | null
    roast_profile?: string | null
    acidity_level?: number | null
    roast_level?: number | null
    cogs?: number | null
    base_price?: number | null
    stock?: number | null
    main_image?: string | null
    roast_log?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    discount_price?: number | null
    is_on_sale?: boolean | null
    discount_start?: string | null
    discount_end?: string | null
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    product_images?: product_imagesCreateNestedManyWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id: string
    category_slug: string
    name: string
    origin?: string | null
    description?: string | null
    tasting_notes?: string | null
    roast_profile?: string | null
    acidity_level?: number | null
    roast_level?: number | null
    cogs?: number | null
    base_price?: number | null
    stock?: number | null
    main_image?: string | null
    roast_log?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    discount_price?: number | null
    is_on_sale?: boolean | null
    discount_start?: string | null
    discount_end?: string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
    product_images?: product_imagesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasting_notes?: NullableStringFieldUpdateOperationsInput | string | null
    roast_profile?: NullableStringFieldUpdateOperationsInput | string | null
    acidity_level?: NullableIntFieldUpdateOperationsInput | number | null
    roast_level?: NullableIntFieldUpdateOperationsInput | number | null
    cogs?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    main_image?: NullableStringFieldUpdateOperationsInput | string | null
    roast_log?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_price?: NullableIntFieldUpdateOperationsInput | number | null
    is_on_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount_start?: NullableStringFieldUpdateOperationsInput | string | null
    discount_end?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasting_notes?: NullableStringFieldUpdateOperationsInput | string | null
    roast_profile?: NullableStringFieldUpdateOperationsInput | string | null
    acidity_level?: NullableIntFieldUpdateOperationsInput | number | null
    roast_level?: NullableIntFieldUpdateOperationsInput | number | null
    cogs?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    main_image?: NullableStringFieldUpdateOperationsInput | string | null
    roast_log?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_price?: NullableIntFieldUpdateOperationsInput | number | null
    is_on_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount_start?: NullableStringFieldUpdateOperationsInput | string | null
    discount_end?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    id: string
    category_slug: string
    name: string
    origin?: string | null
    description?: string | null
    tasting_notes?: string | null
    roast_profile?: string | null
    acidity_level?: number | null
    roast_level?: number | null
    cogs?: number | null
    base_price?: number | null
    stock?: number | null
    main_image?: string | null
    roast_log?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    discount_price?: number | null
    is_on_sale?: boolean | null
    discount_start?: string | null
    discount_end?: string | null
  }

  export type productsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasting_notes?: NullableStringFieldUpdateOperationsInput | string | null
    roast_profile?: NullableStringFieldUpdateOperationsInput | string | null
    acidity_level?: NullableIntFieldUpdateOperationsInput | number | null
    roast_level?: NullableIntFieldUpdateOperationsInput | number | null
    cogs?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    main_image?: NullableStringFieldUpdateOperationsInput | string | null
    roast_log?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_price?: NullableIntFieldUpdateOperationsInput | number | null
    is_on_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount_start?: NullableStringFieldUpdateOperationsInput | string | null
    discount_end?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasting_notes?: NullableStringFieldUpdateOperationsInput | string | null
    roast_profile?: NullableStringFieldUpdateOperationsInput | string | null
    acidity_level?: NullableIntFieldUpdateOperationsInput | number | null
    roast_level?: NullableIntFieldUpdateOperationsInput | number | null
    cogs?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    main_image?: NullableStringFieldUpdateOperationsInput | string | null
    roast_log?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_price?: NullableIntFieldUpdateOperationsInput | number | null
    is_on_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount_start?: NullableStringFieldUpdateOperationsInput | string | null
    discount_end?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionsCreateInput = {
    id?: string
    reference_id?: string | null
    type: $Enums.transactions_type
    category: $Enums.transactions_category
    amount: number
    description: string
    transaction_date: Date | string
    created_at?: Date | string
  }

  export type transactionsUncheckedCreateInput = {
    id?: string
    reference_id?: string | null
    type: $Enums.transactions_type
    category: $Enums.transactions_category
    amount: number
    description: string
    transaction_date: Date | string
    created_at?: Date | string
  }

  export type transactionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: Enumtransactions_typeFieldUpdateOperationsInput | $Enums.transactions_type
    category?: Enumtransactions_categoryFieldUpdateOperationsInput | $Enums.transactions_category
    amount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: Enumtransactions_typeFieldUpdateOperationsInput | $Enums.transactions_type
    category?: Enumtransactions_categoryFieldUpdateOperationsInput | $Enums.transactions_category
    amount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsCreateManyInput = {
    id?: string
    reference_id?: string | null
    type: $Enums.transactions_type
    category: $Enums.transactions_category
    amount: number
    description: string
    transaction_date: Date | string
    created_at?: Date | string
  }

  export type transactionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: Enumtransactions_typeFieldUpdateOperationsInput | $Enums.transactions_type
    category?: Enumtransactions_categoryFieldUpdateOperationsInput | $Enums.transactions_category
    amount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference_id?: NullableStringFieldUpdateOperationsInput | string | null
    type?: Enumtransactions_typeFieldUpdateOperationsInput | $Enums.transactions_type
    category?: Enumtransactions_categoryFieldUpdateOperationsInput | $Enums.transactions_category
    amount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    last_login?: Date | string | null
    created_at?: Date | string
  }

  export type usersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    last_login?: Date | string | null
    created_at?: Date | string
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateManyInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    role?: $Enums.users_role | null
    status?: $Enums.users_status | null
    last_login?: Date | string | null
    created_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumusers_roleFieldUpdateOperationsInput | $Enums.users_role | null
    status?: NullableEnumusers_statusFieldUpdateOperationsInput | $Enums.users_status | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customersCreateInput = {
    id: string
    name: string
    email: string
    phone?: string | null
    password: string
    status?: string
    created_at?: Date | string
    profile_image?: string | null
  }

  export type customersUncheckedCreateInput = {
    id: string
    name: string
    email: string
    phone?: string | null
    password: string
    status?: string
    created_at?: Date | string
    profile_image?: string | null
  }

  export type customersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customersCreateManyInput = {
    id: string
    name: string
    email: string
    phone?: string | null
    password: string
    status?: string
    created_at?: Date | string
    profile_image?: string | null
  }

  export type customersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesOrderByRelevanceInput = {
    fields: categoriesOrderByRelevanceFieldEnum | categoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type categoriesCountOrderByAggregateInput = {
    slug?: SortOrder
    name?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    slug?: SortOrder
    name?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    slug?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type OrdersScalarRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type order_itemsOrderByRelevanceInput = {
    fields: order_itemsOrderByRelevanceFieldEnum | order_itemsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type order_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    product_name?: SortOrder
    quantity?: SortOrder
    price_at_time?: SortOrder
  }

  export type order_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price_at_time?: SortOrder
  }

  export type order_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    product_name?: SortOrder
    quantity?: SortOrder
    price_at_time?: SortOrder
  }

  export type order_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    product_name?: SortOrder
    quantity?: SortOrder
    price_at_time?: SortOrder
  }

  export type order_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price_at_time?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Enumorders_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_status | Enumorders_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orders_status[] | null
    notIn?: $Enums.orders_status[] | null
    not?: NestedEnumorders_statusNullableFilter<$PrismaModel> | $Enums.orders_status | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Order_itemsListRelationFilter = {
    every?: order_itemsWhereInput
    some?: order_itemsWhereInput
    none?: order_itemsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type order_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersOrderByRelevanceInput = {
    fields: ordersOrderByRelevanceFieldEnum | ordersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_email?: SortOrder
    customer_phone?: SortOrder
    shipping_address?: SortOrder
    shipping_fee?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    courier?: SortOrder
    tracking_number?: SortOrder
    cancel_reason?: SortOrder
    created_at?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    shipping_fee?: SortOrder
    total_amount?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_email?: SortOrder
    customer_phone?: SortOrder
    shipping_address?: SortOrder
    shipping_fee?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    courier?: SortOrder
    tracking_number?: SortOrder
    cancel_reason?: SortOrder
    created_at?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    customer_name?: SortOrder
    customer_email?: SortOrder
    customer_phone?: SortOrder
    shipping_address?: SortOrder
    shipping_fee?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    courier?: SortOrder
    tracking_number?: SortOrder
    cancel_reason?: SortOrder
    created_at?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    shipping_fee?: SortOrder
    total_amount?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type Enumorders_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_status | Enumorders_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orders_status[] | null
    notIn?: $Enums.orders_status[] | null
    not?: NestedEnumorders_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.orders_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumorders_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumorders_statusNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type finance_transactionsOrderByRelevanceInput = {
    fields: finance_transactionsOrderByRelevanceFieldEnum | finance_transactionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type finance_transactionsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    reference_id?: SortOrder
    date?: SortOrder
  }

  export type finance_transactionsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type finance_transactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    reference_id?: SortOrder
    date?: SortOrder
  }

  export type finance_transactionsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    reference_id?: SortOrder
    date?: SortOrder
  }

  export type finance_transactionsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type Enumprocurements_logisticsNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.procurements_logistics | Enumprocurements_logisticsFieldRefInput<$PrismaModel> | null
    in?: $Enums.procurements_logistics[] | null
    notIn?: $Enums.procurements_logistics[] | null
    not?: NestedEnumprocurements_logisticsNullableFilter<$PrismaModel> | $Enums.procurements_logistics | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type procurementsOrderByRelevanceInput = {
    fields: procurementsOrderByRelevanceFieldEnum | procurementsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type procurementsCountOrderByAggregateInput = {
    id?: SortOrder
    supplier?: SortOrder
    items_description?: SortOrder
    total_cost?: SortOrder
    logistics?: SortOrder
    courier_service?: SortOrder
    status?: SortOrder
    ordered_date?: SortOrder
    sent_date?: SortOrder
    arrival_date?: SortOrder
    created_at?: SortOrder
  }

  export type procurementsAvgOrderByAggregateInput = {
    total_cost?: SortOrder
  }

  export type procurementsMaxOrderByAggregateInput = {
    id?: SortOrder
    supplier?: SortOrder
    items_description?: SortOrder
    total_cost?: SortOrder
    logistics?: SortOrder
    courier_service?: SortOrder
    status?: SortOrder
    ordered_date?: SortOrder
    sent_date?: SortOrder
    arrival_date?: SortOrder
    created_at?: SortOrder
  }

  export type procurementsMinOrderByAggregateInput = {
    id?: SortOrder
    supplier?: SortOrder
    items_description?: SortOrder
    total_cost?: SortOrder
    logistics?: SortOrder
    courier_service?: SortOrder
    status?: SortOrder
    ordered_date?: SortOrder
    sent_date?: SortOrder
    arrival_date?: SortOrder
    created_at?: SortOrder
  }

  export type procurementsSumOrderByAggregateInput = {
    total_cost?: SortOrder
  }

  export type Enumprocurements_logisticsNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.procurements_logistics | Enumprocurements_logisticsFieldRefInput<$PrismaModel> | null
    in?: $Enums.procurements_logistics[] | null
    notIn?: $Enums.procurements_logistics[] | null
    not?: NestedEnumprocurements_logisticsNullableWithAggregatesFilter<$PrismaModel> | $Enums.procurements_logistics | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumprocurements_logisticsNullableFilter<$PrismaModel>
    _max?: NestedEnumprocurements_logisticsNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type product_imagesOrderByRelevanceInput = {
    fields: product_imagesOrderByRelevanceFieldEnum | product_imagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type product_imagesCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    image_url?: SortOrder
  }

  export type product_imagesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type product_imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    image_url?: SortOrder
  }

  export type product_imagesMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    image_url?: SortOrder
  }

  export type product_imagesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Product_imagesListRelationFilter = {
    every?: product_imagesWhereInput
    some?: product_imagesWhereInput
    none?: product_imagesWhereInput
  }

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type product_imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsOrderByRelevanceInput = {
    fields: productsOrderByRelevanceFieldEnum | productsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    category_slug?: SortOrder
    name?: SortOrder
    origin?: SortOrder
    description?: SortOrder
    tasting_notes?: SortOrder
    roast_profile?: SortOrder
    acidity_level?: SortOrder
    roast_level?: SortOrder
    cogs?: SortOrder
    base_price?: SortOrder
    stock?: SortOrder
    main_image?: SortOrder
    roast_log?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    discount_price?: SortOrder
    is_on_sale?: SortOrder
    discount_start?: SortOrder
    discount_end?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    acidity_level?: SortOrder
    roast_level?: SortOrder
    cogs?: SortOrder
    base_price?: SortOrder
    stock?: SortOrder
    discount_price?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    category_slug?: SortOrder
    name?: SortOrder
    origin?: SortOrder
    description?: SortOrder
    tasting_notes?: SortOrder
    roast_profile?: SortOrder
    acidity_level?: SortOrder
    roast_level?: SortOrder
    cogs?: SortOrder
    base_price?: SortOrder
    stock?: SortOrder
    main_image?: SortOrder
    roast_log?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    discount_price?: SortOrder
    is_on_sale?: SortOrder
    discount_start?: SortOrder
    discount_end?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    category_slug?: SortOrder
    name?: SortOrder
    origin?: SortOrder
    description?: SortOrder
    tasting_notes?: SortOrder
    roast_profile?: SortOrder
    acidity_level?: SortOrder
    roast_level?: SortOrder
    cogs?: SortOrder
    base_price?: SortOrder
    stock?: SortOrder
    main_image?: SortOrder
    roast_log?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    discount_price?: SortOrder
    is_on_sale?: SortOrder
    discount_start?: SortOrder
    discount_end?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    acidity_level?: SortOrder
    roast_level?: SortOrder
    cogs?: SortOrder
    base_price?: SortOrder
    stock?: SortOrder
    discount_price?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Enumtransactions_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_type | Enumtransactions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transactions_type[]
    notIn?: $Enums.transactions_type[]
    not?: NestedEnumtransactions_typeFilter<$PrismaModel> | $Enums.transactions_type
  }

  export type Enumtransactions_categoryFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_category | Enumtransactions_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.transactions_category[]
    notIn?: $Enums.transactions_category[]
    not?: NestedEnumtransactions_categoryFilter<$PrismaModel> | $Enums.transactions_category
  }

  export type transactionsOrderByRelevanceInput = {
    fields: transactionsOrderByRelevanceFieldEnum | transactionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type transactionsCountOrderByAggregateInput = {
    id?: SortOrder
    reference_id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    transaction_date?: SortOrder
    created_at?: SortOrder
  }

  export type transactionsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type transactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    reference_id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    transaction_date?: SortOrder
    created_at?: SortOrder
  }

  export type transactionsMinOrderByAggregateInput = {
    id?: SortOrder
    reference_id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    transaction_date?: SortOrder
    created_at?: SortOrder
  }

  export type transactionsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type Enumtransactions_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_type | Enumtransactions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transactions_type[]
    notIn?: $Enums.transactions_type[]
    not?: NestedEnumtransactions_typeWithAggregatesFilter<$PrismaModel> | $Enums.transactions_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransactions_typeFilter<$PrismaModel>
    _max?: NestedEnumtransactions_typeFilter<$PrismaModel>
  }

  export type Enumtransactions_categoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_category | Enumtransactions_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.transactions_category[]
    notIn?: $Enums.transactions_category[]
    not?: NestedEnumtransactions_categoryWithAggregatesFilter<$PrismaModel> | $Enums.transactions_category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransactions_categoryFilter<$PrismaModel>
    _max?: NestedEnumtransactions_categoryFilter<$PrismaModel>
  }

  export type Enumusers_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | null
    notIn?: $Enums.users_role[] | null
    not?: NestedEnumusers_roleNullableFilter<$PrismaModel> | $Enums.users_role | null
  }

  export type Enumusers_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_status | Enumusers_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_status[] | null
    notIn?: $Enums.users_status[] | null
    not?: NestedEnumusers_statusNullableFilter<$PrismaModel> | $Enums.users_status | null
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    status?: SortOrder
    last_login?: SortOrder
    created_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    status?: SortOrder
    last_login?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    status?: SortOrder
    last_login?: SortOrder
    created_at?: SortOrder
  }

  export type Enumusers_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | null
    notIn?: $Enums.users_role[] | null
    not?: NestedEnumusers_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_roleNullableFilter<$PrismaModel>
  }

  export type Enumusers_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_status | Enumusers_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_status[] | null
    notIn?: $Enums.users_status[] | null
    not?: NestedEnumusers_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_statusNullableFilter<$PrismaModel>
  }

  export type customersOrderByRelevanceInput = {
    fields: customersOrderByRelevanceFieldEnum | customersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type customersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    profile_image?: SortOrder
  }

  export type customersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    profile_image?: SortOrder
  }

  export type customersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    profile_image?: SortOrder
  }

  export type productsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type productsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type ordersCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    connect?: productsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ordersUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    upsert?: ordersUpsertWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrder_itemsInput, ordersUpdateWithoutOrder_itemsInput>, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    upsert?: productsUpsertWithoutOrder_itemsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutOrder_itemsInput, productsUpdateWithoutOrder_itemsInput>, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type order_itemsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type order_itemsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumorders_statusFieldUpdateOperationsInput = {
    set?: $Enums.orders_status | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type order_itemsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrdersInput | order_itemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrdersInput | order_itemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrdersInput | order_itemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type order_itemsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrdersInput | order_itemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrdersInput | order_itemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrdersInput | order_itemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type NullableEnumprocurements_logisticsFieldUpdateOperationsInput = {
    set?: $Enums.procurements_logistics | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type productsCreateNestedOneWithoutProduct_imagesInput = {
    create?: XOR<productsCreateWithoutProduct_imagesInput, productsUncheckedCreateWithoutProduct_imagesInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_imagesInput
    connect?: productsWhereUniqueInput
  }

  export type productsUpdateOneRequiredWithoutProduct_imagesNestedInput = {
    create?: XOR<productsCreateWithoutProduct_imagesInput, productsUncheckedCreateWithoutProduct_imagesInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_imagesInput
    upsert?: productsUpsertWithoutProduct_imagesInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutProduct_imagesInput, productsUpdateWithoutProduct_imagesInput>, productsUncheckedUpdateWithoutProduct_imagesInput>
  }

  export type order_itemsCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type product_imagesCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput> | product_imagesCreateWithoutProductsInput[] | product_imagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_imagesCreateOrConnectWithoutProductsInput | product_imagesCreateOrConnectWithoutProductsInput[]
    createMany?: product_imagesCreateManyProductsInputEnvelope
    connect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
  }

  export type categoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    connect?: categoriesWhereUniqueInput
  }

  export type order_itemsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type product_imagesUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput> | product_imagesCreateWithoutProductsInput[] | product_imagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_imagesCreateOrConnectWithoutProductsInput | product_imagesCreateOrConnectWithoutProductsInput[]
    createMany?: product_imagesCreateManyProductsInputEnvelope
    connect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type order_itemsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductsInput | order_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductsInput | order_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductsInput | order_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type product_imagesUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput> | product_imagesCreateWithoutProductsInput[] | product_imagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_imagesCreateOrConnectWithoutProductsInput | product_imagesCreateOrConnectWithoutProductsInput[]
    upsert?: product_imagesUpsertWithWhereUniqueWithoutProductsInput | product_imagesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_imagesCreateManyProductsInputEnvelope
    set?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    disconnect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    delete?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    connect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    update?: product_imagesUpdateWithWhereUniqueWithoutProductsInput | product_imagesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_imagesUpdateManyWithWhereWithoutProductsInput | product_imagesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_imagesScalarWhereInput | product_imagesScalarWhereInput[]
  }

  export type categoriesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    upsert?: categoriesUpsertWithoutProductsInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutProductsInput, categoriesUpdateWithoutProductsInput>, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type order_itemsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductsInput | order_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductsInput | order_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductsInput | order_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type product_imagesUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput> | product_imagesCreateWithoutProductsInput[] | product_imagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_imagesCreateOrConnectWithoutProductsInput | product_imagesCreateOrConnectWithoutProductsInput[]
    upsert?: product_imagesUpsertWithWhereUniqueWithoutProductsInput | product_imagesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_imagesCreateManyProductsInputEnvelope
    set?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    disconnect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    delete?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    connect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    update?: product_imagesUpdateWithWhereUniqueWithoutProductsInput | product_imagesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_imagesUpdateManyWithWhereWithoutProductsInput | product_imagesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_imagesScalarWhereInput | product_imagesScalarWhereInput[]
  }

  export type Enumtransactions_typeFieldUpdateOperationsInput = {
    set?: $Enums.transactions_type
  }

  export type Enumtransactions_categoryFieldUpdateOperationsInput = {
    set?: $Enums.transactions_category
  }

  export type NullableEnumusers_roleFieldUpdateOperationsInput = {
    set?: $Enums.users_role | null
  }

  export type NullableEnumusers_statusFieldUpdateOperationsInput = {
    set?: $Enums.users_status | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumorders_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_status | Enumorders_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orders_status[] | null
    notIn?: $Enums.orders_status[] | null
    not?: NestedEnumorders_statusNullableFilter<$PrismaModel> | $Enums.orders_status | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumorders_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.orders_status | Enumorders_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.orders_status[] | null
    notIn?: $Enums.orders_status[] | null
    not?: NestedEnumorders_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.orders_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumorders_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumorders_statusNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumprocurements_logisticsNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.procurements_logistics | Enumprocurements_logisticsFieldRefInput<$PrismaModel> | null
    in?: $Enums.procurements_logistics[] | null
    notIn?: $Enums.procurements_logistics[] | null
    not?: NestedEnumprocurements_logisticsNullableFilter<$PrismaModel> | $Enums.procurements_logistics | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumprocurements_logisticsNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.procurements_logistics | Enumprocurements_logisticsFieldRefInput<$PrismaModel> | null
    in?: $Enums.procurements_logistics[] | null
    notIn?: $Enums.procurements_logistics[] | null
    not?: NestedEnumprocurements_logisticsNullableWithAggregatesFilter<$PrismaModel> | $Enums.procurements_logistics | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumprocurements_logisticsNullableFilter<$PrismaModel>
    _max?: NestedEnumprocurements_logisticsNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumtransactions_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_type | Enumtransactions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transactions_type[]
    notIn?: $Enums.transactions_type[]
    not?: NestedEnumtransactions_typeFilter<$PrismaModel> | $Enums.transactions_type
  }

  export type NestedEnumtransactions_categoryFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_category | Enumtransactions_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.transactions_category[]
    notIn?: $Enums.transactions_category[]
    not?: NestedEnumtransactions_categoryFilter<$PrismaModel> | $Enums.transactions_category
  }

  export type NestedEnumtransactions_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_type | Enumtransactions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transactions_type[]
    notIn?: $Enums.transactions_type[]
    not?: NestedEnumtransactions_typeWithAggregatesFilter<$PrismaModel> | $Enums.transactions_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransactions_typeFilter<$PrismaModel>
    _max?: NestedEnumtransactions_typeFilter<$PrismaModel>
  }

  export type NestedEnumtransactions_categoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_category | Enumtransactions_categoryFieldRefInput<$PrismaModel>
    in?: $Enums.transactions_category[]
    notIn?: $Enums.transactions_category[]
    not?: NestedEnumtransactions_categoryWithAggregatesFilter<$PrismaModel> | $Enums.transactions_category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransactions_categoryFilter<$PrismaModel>
    _max?: NestedEnumtransactions_categoryFilter<$PrismaModel>
  }

  export type NestedEnumusers_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | null
    notIn?: $Enums.users_role[] | null
    not?: NestedEnumusers_roleNullableFilter<$PrismaModel> | $Enums.users_role | null
  }

  export type NestedEnumusers_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_status | Enumusers_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_status[] | null
    notIn?: $Enums.users_status[] | null
    not?: NestedEnumusers_statusNullableFilter<$PrismaModel> | $Enums.users_status | null
  }

  export type NestedEnumusers_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_role[] | null
    notIn?: $Enums.users_role[] | null
    not?: NestedEnumusers_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_roleNullableFilter<$PrismaModel>
  }

  export type NestedEnumusers_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_status | Enumusers_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_status[] | null
    notIn?: $Enums.users_status[] | null
    not?: NestedEnumusers_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_statusNullableFilter<$PrismaModel>
  }

  export type productsCreateWithoutCategoriesInput = {
    id: string
    name: string
    origin?: string | null
    description?: string | null
    tasting_notes?: string | null
    roast_profile?: string | null
    acidity_level?: number | null
    roast_level?: number | null
    cogs?: number | null
    base_price?: number | null
    stock?: number | null
    main_image?: string | null
    roast_log?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    discount_price?: number | null
    is_on_sale?: boolean | null
    discount_start?: string | null
    discount_end?: string | null
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    product_images?: product_imagesCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutCategoriesInput = {
    id: string
    name: string
    origin?: string | null
    description?: string | null
    tasting_notes?: string | null
    roast_profile?: string | null
    acidity_level?: number | null
    roast_level?: number | null
    cogs?: number | null
    base_price?: number | null
    stock?: number | null
    main_image?: string | null
    roast_log?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    discount_price?: number | null
    is_on_sale?: boolean | null
    discount_start?: string | null
    discount_end?: string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
    product_images?: product_imagesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsCreateManyCategoriesInputEnvelope = {
    data: productsCreateManyCategoriesInput | productsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type productsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
  }

  export type productsUpdateManyWithWhereWithoutCategoriesInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[]
    OR?: productsScalarWhereInput[]
    NOT?: productsScalarWhereInput | productsScalarWhereInput[]
    id?: StringFilter<"products"> | string
    category_slug?: StringFilter<"products"> | string
    name?: StringFilter<"products"> | string
    origin?: StringNullableFilter<"products"> | string | null
    description?: StringNullableFilter<"products"> | string | null
    tasting_notes?: StringNullableFilter<"products"> | string | null
    roast_profile?: StringNullableFilter<"products"> | string | null
    acidity_level?: IntNullableFilter<"products"> | number | null
    roast_level?: IntNullableFilter<"products"> | number | null
    cogs?: IntNullableFilter<"products"> | number | null
    base_price?: IntNullableFilter<"products"> | number | null
    stock?: IntNullableFilter<"products"> | number | null
    main_image?: StringNullableFilter<"products"> | string | null
    roast_log?: StringNullableFilter<"products"> | string | null
    created_at?: DateTimeFilter<"products"> | Date | string
    updated_at?: DateTimeFilter<"products"> | Date | string
    discount_price?: IntNullableFilter<"products"> | number | null
    is_on_sale?: BoolNullableFilter<"products"> | boolean | null
    discount_start?: StringNullableFilter<"products"> | string | null
    discount_end?: StringNullableFilter<"products"> | string | null
  }

  export type ordersCreateWithoutOrder_itemsInput = {
    id: string
    customer_name: string
    customer_email: string
    customer_phone: string
    shipping_address: string
    shipping_fee?: number | null
    total_amount: number
    status?: $Enums.orders_status | null
    courier?: string | null
    tracking_number?: string | null
    cancel_reason?: string | null
    created_at?: Date | string
  }

  export type ordersUncheckedCreateWithoutOrder_itemsInput = {
    id: string
    customer_name: string
    customer_email: string
    customer_phone: string
    shipping_address: string
    shipping_fee?: number | null
    total_amount: number
    status?: $Enums.orders_status | null
    courier?: string | null
    tracking_number?: string | null
    cancel_reason?: string | null
    created_at?: Date | string
  }

  export type ordersCreateOrConnectWithoutOrder_itemsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
  }

  export type productsCreateWithoutOrder_itemsInput = {
    id: string
    name: string
    origin?: string | null
    description?: string | null
    tasting_notes?: string | null
    roast_profile?: string | null
    acidity_level?: number | null
    roast_level?: number | null
    cogs?: number | null
    base_price?: number | null
    stock?: number | null
    main_image?: string | null
    roast_log?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    discount_price?: number | null
    is_on_sale?: boolean | null
    discount_start?: string | null
    discount_end?: string | null
    product_images?: product_imagesCreateNestedManyWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutOrder_itemsInput = {
    id: string
    category_slug: string
    name: string
    origin?: string | null
    description?: string | null
    tasting_notes?: string | null
    roast_profile?: string | null
    acidity_level?: number | null
    roast_level?: number | null
    cogs?: number | null
    base_price?: number | null
    stock?: number | null
    main_image?: string | null
    roast_log?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    discount_price?: number | null
    is_on_sale?: boolean | null
    discount_start?: string | null
    discount_end?: string | null
    product_images?: product_imagesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutOrder_itemsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
  }

  export type ordersUpsertWithoutOrder_itemsInput = {
    update: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type ordersUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_email?: StringFieldUpdateOperationsInput | string
    customer_phone?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    shipping_fee?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    cancel_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_email?: StringFieldUpdateOperationsInput | string
    customer_phone?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    shipping_fee?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumorders_statusFieldUpdateOperationsInput | $Enums.orders_status | null
    courier?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    cancel_reason?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUpsertWithoutOrder_itemsInput = {
    update: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasting_notes?: NullableStringFieldUpdateOperationsInput | string | null
    roast_profile?: NullableStringFieldUpdateOperationsInput | string | null
    acidity_level?: NullableIntFieldUpdateOperationsInput | number | null
    roast_level?: NullableIntFieldUpdateOperationsInput | number | null
    cogs?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    main_image?: NullableStringFieldUpdateOperationsInput | string | null
    roast_log?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_price?: NullableIntFieldUpdateOperationsInput | number | null
    is_on_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount_start?: NullableStringFieldUpdateOperationsInput | string | null
    discount_end?: NullableStringFieldUpdateOperationsInput | string | null
    product_images?: product_imagesUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasting_notes?: NullableStringFieldUpdateOperationsInput | string | null
    roast_profile?: NullableStringFieldUpdateOperationsInput | string | null
    acidity_level?: NullableIntFieldUpdateOperationsInput | number | null
    roast_level?: NullableIntFieldUpdateOperationsInput | number | null
    cogs?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    main_image?: NullableStringFieldUpdateOperationsInput | string | null
    roast_log?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_price?: NullableIntFieldUpdateOperationsInput | number | null
    is_on_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount_start?: NullableStringFieldUpdateOperationsInput | string | null
    discount_end?: NullableStringFieldUpdateOperationsInput | string | null
    product_images?: product_imagesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type order_itemsCreateWithoutOrdersInput = {
    product_name: string
    quantity: number
    price_at_time: number
    products: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutOrdersInput = {
    id?: number
    product_id: string
    product_name: string
    quantity: number
    price_at_time: number
  }

  export type order_itemsCreateOrConnectWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsCreateManyOrdersInputEnvelope = {
    data: order_itemsCreateManyOrdersInput | order_itemsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type order_itemsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutOrdersInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type order_itemsScalarWhereInput = {
    AND?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    OR?: order_itemsScalarWhereInput[]
    NOT?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    id?: IntFilter<"order_items"> | number
    order_id?: StringFilter<"order_items"> | string
    product_id?: StringFilter<"order_items"> | string
    product_name?: StringFilter<"order_items"> | string
    quantity?: IntFilter<"order_items"> | number
    price_at_time?: IntFilter<"order_items"> | number
  }

  export type productsCreateWithoutProduct_imagesInput = {
    id: string
    name: string
    origin?: string | null
    description?: string | null
    tasting_notes?: string | null
    roast_profile?: string | null
    acidity_level?: number | null
    roast_level?: number | null
    cogs?: number | null
    base_price?: number | null
    stock?: number | null
    main_image?: string | null
    roast_log?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    discount_price?: number | null
    is_on_sale?: boolean | null
    discount_start?: string | null
    discount_end?: string | null
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutProduct_imagesInput = {
    id: string
    category_slug: string
    name: string
    origin?: string | null
    description?: string | null
    tasting_notes?: string | null
    roast_profile?: string | null
    acidity_level?: number | null
    roast_level?: number | null
    cogs?: number | null
    base_price?: number | null
    stock?: number | null
    main_image?: string | null
    roast_log?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    discount_price?: number | null
    is_on_sale?: boolean | null
    discount_start?: string | null
    discount_end?: string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutProduct_imagesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProduct_imagesInput, productsUncheckedCreateWithoutProduct_imagesInput>
  }

  export type productsUpsertWithoutProduct_imagesInput = {
    update: XOR<productsUpdateWithoutProduct_imagesInput, productsUncheckedUpdateWithoutProduct_imagesInput>
    create: XOR<productsCreateWithoutProduct_imagesInput, productsUncheckedCreateWithoutProduct_imagesInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutProduct_imagesInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutProduct_imagesInput, productsUncheckedUpdateWithoutProduct_imagesInput>
  }

  export type productsUpdateWithoutProduct_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasting_notes?: NullableStringFieldUpdateOperationsInput | string | null
    roast_profile?: NullableStringFieldUpdateOperationsInput | string | null
    acidity_level?: NullableIntFieldUpdateOperationsInput | number | null
    roast_level?: NullableIntFieldUpdateOperationsInput | number | null
    cogs?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    main_image?: NullableStringFieldUpdateOperationsInput | string | null
    roast_log?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_price?: NullableIntFieldUpdateOperationsInput | number | null
    is_on_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount_start?: NullableStringFieldUpdateOperationsInput | string | null
    discount_end?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutProduct_imagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasting_notes?: NullableStringFieldUpdateOperationsInput | string | null
    roast_profile?: NullableStringFieldUpdateOperationsInput | string | null
    acidity_level?: NullableIntFieldUpdateOperationsInput | number | null
    roast_level?: NullableIntFieldUpdateOperationsInput | number | null
    cogs?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    main_image?: NullableStringFieldUpdateOperationsInput | string | null
    roast_log?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_price?: NullableIntFieldUpdateOperationsInput | number | null
    is_on_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount_start?: NullableStringFieldUpdateOperationsInput | string | null
    discount_end?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type order_itemsCreateWithoutProductsInput = {
    product_name: string
    quantity: number
    price_at_time: number
    orders: ordersCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutProductsInput = {
    id?: number
    order_id: string
    product_name: string
    quantity: number
    price_at_time: number
  }

  export type order_itemsCreateOrConnectWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsCreateManyProductsInputEnvelope = {
    data: order_itemsCreateManyProductsInput | order_itemsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type product_imagesCreateWithoutProductsInput = {
    image_url: string
  }

  export type product_imagesUncheckedCreateWithoutProductsInput = {
    id?: number
    image_url: string
  }

  export type product_imagesCreateOrConnectWithoutProductsInput = {
    where: product_imagesWhereUniqueInput
    create: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput>
  }

  export type product_imagesCreateManyProductsInputEnvelope = {
    data: product_imagesCreateManyProductsInput | product_imagesCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type categoriesCreateWithoutProductsInput = {
    slug: string
    name: string
  }

  export type categoriesUncheckedCreateWithoutProductsInput = {
    slug: string
    name: string
  }

  export type categoriesCreateOrConnectWithoutProductsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsUpsertWithWhereUniqueWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutProductsInput, order_itemsUncheckedUpdateWithoutProductsInput>
    create: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutProductsInput, order_itemsUncheckedUpdateWithoutProductsInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutProductsInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutProductsInput>
  }

  export type product_imagesUpsertWithWhereUniqueWithoutProductsInput = {
    where: product_imagesWhereUniqueInput
    update: XOR<product_imagesUpdateWithoutProductsInput, product_imagesUncheckedUpdateWithoutProductsInput>
    create: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput>
  }

  export type product_imagesUpdateWithWhereUniqueWithoutProductsInput = {
    where: product_imagesWhereUniqueInput
    data: XOR<product_imagesUpdateWithoutProductsInput, product_imagesUncheckedUpdateWithoutProductsInput>
  }

  export type product_imagesUpdateManyWithWhereWithoutProductsInput = {
    where: product_imagesScalarWhereInput
    data: XOR<product_imagesUpdateManyMutationInput, product_imagesUncheckedUpdateManyWithoutProductsInput>
  }

  export type product_imagesScalarWhereInput = {
    AND?: product_imagesScalarWhereInput | product_imagesScalarWhereInput[]
    OR?: product_imagesScalarWhereInput[]
    NOT?: product_imagesScalarWhereInput | product_imagesScalarWhereInput[]
    id?: IntFilter<"product_images"> | number
    product_id?: StringFilter<"product_images"> | string
    image_url?: StringFilter<"product_images"> | string
  }

  export type categoriesUpsertWithoutProductsInput = {
    update: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type categoriesUpdateWithoutProductsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesUncheckedUpdateWithoutProductsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type productsCreateManyCategoriesInput = {
    id: string
    name: string
    origin?: string | null
    description?: string | null
    tasting_notes?: string | null
    roast_profile?: string | null
    acidity_level?: number | null
    roast_level?: number | null
    cogs?: number | null
    base_price?: number | null
    stock?: number | null
    main_image?: string | null
    roast_log?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    discount_price?: number | null
    is_on_sale?: boolean | null
    discount_start?: string | null
    discount_end?: string | null
  }

  export type productsUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasting_notes?: NullableStringFieldUpdateOperationsInput | string | null
    roast_profile?: NullableStringFieldUpdateOperationsInput | string | null
    acidity_level?: NullableIntFieldUpdateOperationsInput | number | null
    roast_level?: NullableIntFieldUpdateOperationsInput | number | null
    cogs?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    main_image?: NullableStringFieldUpdateOperationsInput | string | null
    roast_log?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_price?: NullableIntFieldUpdateOperationsInput | number | null
    is_on_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount_start?: NullableStringFieldUpdateOperationsInput | string | null
    discount_end?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasting_notes?: NullableStringFieldUpdateOperationsInput | string | null
    roast_profile?: NullableStringFieldUpdateOperationsInput | string | null
    acidity_level?: NullableIntFieldUpdateOperationsInput | number | null
    roast_level?: NullableIntFieldUpdateOperationsInput | number | null
    cogs?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    main_image?: NullableStringFieldUpdateOperationsInput | string | null
    roast_log?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_price?: NullableIntFieldUpdateOperationsInput | number | null
    is_on_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount_start?: NullableStringFieldUpdateOperationsInput | string | null
    discount_end?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tasting_notes?: NullableStringFieldUpdateOperationsInput | string | null
    roast_profile?: NullableStringFieldUpdateOperationsInput | string | null
    acidity_level?: NullableIntFieldUpdateOperationsInput | number | null
    roast_level?: NullableIntFieldUpdateOperationsInput | number | null
    cogs?: NullableIntFieldUpdateOperationsInput | number | null
    base_price?: NullableIntFieldUpdateOperationsInput | number | null
    stock?: NullableIntFieldUpdateOperationsInput | number | null
    main_image?: NullableStringFieldUpdateOperationsInput | string | null
    roast_log?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    discount_price?: NullableIntFieldUpdateOperationsInput | number | null
    is_on_sale?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount_start?: NullableStringFieldUpdateOperationsInput | string | null
    discount_end?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_itemsCreateManyOrdersInput = {
    id?: number
    product_id: string
    product_name: string
    quantity: number
    price_at_time: number
  }

  export type order_itemsUpdateWithoutOrdersInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_time?: IntFieldUpdateOperationsInput | number
    products?: productsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_time?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemsUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_time?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemsCreateManyProductsInput = {
    id?: number
    order_id: string
    product_name: string
    quantity: number
    price_at_time: number
  }

  export type product_imagesCreateManyProductsInput = {
    id?: number
    image_url: string
  }

  export type order_itemsUpdateWithoutProductsInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_time?: IntFieldUpdateOperationsInput | number
    orders?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_time?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price_at_time?: IntFieldUpdateOperationsInput | number
  }

  export type product_imagesUpdateWithoutProductsInput = {
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type product_imagesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type product_imagesUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
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