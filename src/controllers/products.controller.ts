import { NextFunction, Request, Response } from 'express';
import { Product } from '@prisma/client';
import { CreateProductDto } from '@dtos/products.dto';
import ProductService from '@services/products.service';

class ProductController {
  public productService = new ProductService();
  public getProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllProductsData: Product[] = await this.productService.findAllProducts();
      res.status(200).json({ data: findAllProductsData, message: 'findAll' });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  public getProductById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const productId = Number(req.params.id);
      const findOneProductData: Product = await this.productService.findProductById(productId);
      res.status(200).json({ data: findOneProductData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const productData: CreateProductDto = req.body;
      const createProductData: Product = await this.productService.createProduct(productData);
      res.status(201).json({ data: createProductData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const productId = Number(req.params.id);
      const productData: CreateProductDto = req.body;
      const updateProductData: Product = await this.productService.updateProduct(productId, productData);
      res.status(200).json({ data: updateProductData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };
  public deleteProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const productId = Number(req.params.id);
      const deleteProductData: Product = await this.productService.deleteProduct(productId);
      res.status(200).json({ data: deleteProductData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default ProductController;
