import { PrismaClient } from '@prisma/client';
export { Product, User, Offer } from '@prisma/client';

const pclient = () => {
  const pc = new PrismaClient({
    log: ['query', 'info', `warn`, `error`],
  });
  console.log('PrismaClient: ', pc);
  return pc;
};

export const PC = pclient();
export const ProductModel = PC.product;
export const OfferModel = PC.offer;
export const UserModel = PC.user;
