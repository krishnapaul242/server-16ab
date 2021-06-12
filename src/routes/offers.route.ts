import { Router } from 'express';
import OffersController from '@/controllers/offers.controller';
import { CreateOfferDto } from '@/dtos/offers.dtos';
import Route from '@interfaces/routes.interface';
import validationMiddleware from '@/middlewares/validation.middleware';

class OffersRoute implements Route {
  public path = '/offers';
  public router = Router();
  public offersController = new OffersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.offersController.getOffers);
    this.router.post(`${this.path}`, validationMiddleware(CreateOfferDto, 'body', true), this.offersController.createOffer);
  }
}

export default OffersRoute;
