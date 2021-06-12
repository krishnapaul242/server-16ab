import { NextFunction, Request, Response } from 'express';
import { Offer } from '@prisma/client';
import { CreateOfferDto } from '@dtos/offers.dtos';
import OfferService from '@/services/offers.services';

class OffersController {
  public offerService = new OfferService();

  public getOffers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllUsersData: Offer[] = await this.offerService.findAllOffers();
      res.status(200).json({ data: findAllUsersData, message: 'All Offers' });
    } catch (error) {
      next(error);
    }
  };

  public createOffer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const offerData: CreateOfferDto = req.body;
      const createOfferData: Offer = await this.offerService.createOffer(offerData);
      res.status(201).json({ data: createOfferData, message: 'Offer Created' });
    } catch (error) {
      next(error);
    }
  };
}

export default OffersController;
