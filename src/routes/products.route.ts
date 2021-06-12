import { Router } from 'express';
import ProductController from '@controllers/products.controller';
import { CreateProductDto } from '@dtos/products.dto';
import Route from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class ProductRoute implements Route {
  public path = '/products';
  public router = Router();
  public productController = new ProductController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.productController.getProducts);
    this.router.get(`${this.path}/:id(\\d+)`, this.productController.getProductById);
    this.router.post(`${this.path}`, validationMiddleware(CreateProductDto, 'body'), this.productController.createProduct);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateProductDto, 'body'), this.productController.updateProduct);
    this.router.delete(`${this.path}/:id(\\d+)`, this.productController.deleteProduct);
  }
}

export default ProductRoute;
