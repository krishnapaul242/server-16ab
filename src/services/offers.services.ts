import { PrismaClient, Offer } from '@prisma/client';
import { CreateOfferDto } from '@dtos/offers.dtos';
import HttpException from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';

class OfferService {
  public offers = new PrismaClient().offer;

  public async findAllOffers(): Promise<Offer[]> {
    const allOffers: Offer[] = await this.offers.findMany();
    return allOffers;
  }

  public async createOffer(offerData: CreateOfferDto): Promise<Offer> {
    if (isEmpty(offerData)) throw new HttpException(400, 'Offer Data cannot be empty.');
    const createOfferData: Offer = await this.offers.create({ data: offerData });
    return createOfferData;
  }
}

export default OfferService;
