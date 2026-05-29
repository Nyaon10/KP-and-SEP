// 1. Point directly to the folder your terminal just generated!
import { PrismaClient } from '../../prisma/generated/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const prismaClientSingleton = () => {
  const dbUrl = new URL(process.env.DATABASE_URL || 'mysql://root:@localhost:3306/wanst_coffee');
  
  const adapter = new PrismaMariaDb({
    host: dbUrl.hostname,
    port: parseInt(dbUrl.port || '3306', 10),
    user: dbUrl.username,
    password: dbUrl.password,
    database: dbUrl.pathname.slice(1), 
  });
  
  return new PrismaClient({ adapter });
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;