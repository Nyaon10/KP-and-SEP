import { PrismaClient } from '../../prisma/generated/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const prismaClientSingleton = () => {
  // 1. Use Node's built-in URL parser which perfectly handles empty passwords
  const dbUrl = new URL(process.env.DATABASE_URL || 'mysql://root:@localhost:3306/wanst_coffee');
  
  // 2. Feed the parsed pieces directly to the adapter so it doesn't try to parse the string itself
  const adapter = new PrismaMariaDb({
    host: dbUrl.hostname,
    port: parseInt(dbUrl.port || '3306', 10),
    user: dbUrl.username,
    password: dbUrl.password,
    database: dbUrl.pathname.slice(1), // Removes the leading '/' from the database name
  });
  
  // 3. Pass the adapter to Prisma 7
  return new PrismaClient({ adapter });
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;