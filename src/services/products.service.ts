import { ProductModel, Product, PC } from '../prismaclient';
import { CreateProductDto } from '@dtos/products.dto';
import HttpException from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';

class ProductService {
  public products = ProductModel;

  public async findAllProducts(): Promise<Product[]> {
    console.log('Products: ', this.products);
    const res = await PC.$queryRaw('SELECT * FROM Product');
    return res;
  }

  public async findProductById(productId: number): Promise<Product> {
    if (isEmpty(productId)) throw new HttpException(400, 'Product Id cannot be empty.');
    const allProducts: Product[] = await PC.$queryRaw(`SELECT * FROM Product WHERE id = ${productId}`);
    const findProduct = allProducts[0];
    if (!findProduct) throw new HttpException(409, 'Product with this id is not available.');
    return findProduct;
  }

  public async createProduct(productData: CreateProductDto): Promise<Product> {
    console.log({ products: this.products });
    if (isEmpty(productData)) throw new HttpException(400, 'Product Data cannot be empty');
    const allProducts: Product[] = await PC.$queryRaw(`SELECT * FROM Product WHERE name LIKE "${productData.name}"`);
    const findProduct = allProducts[0];
    if (findProduct) throw new HttpException(409, `Product with the name '${productData.name}' already exists.`);
    const query = `INSERT INTO Product (name, veg, price, image, discountedPrice, description) VALUES ("${productData.name}", ${productData.veg}, ${productData.price}, "${productData.image}", ${productData.discountedPrice}, "${productData.description}")`;
    console.log(query);
    const createProductData: Product = await PC.$queryRaw(query);

    return createProductData;
  }

  public async updateProduct(productId: number, productData: CreateProductDto): Promise<Product> {
    if (isEmpty(productId)) throw new HttpException(400, 'Product Id cannot be empty');
    if (isEmpty(productData)) throw new HttpException(400, 'Product Data cannot be empty');
    const findProduct: Product = await this.products.findUnique({ where: { id: productId } });
    if (!findProduct) throw new HttpException(409, `Product with the Id '${productId}' does not exist.`);
    const updateProduct = await this.products.update({ where: { id: productId }, data: productData });
    return updateProduct;
  }

  public async deleteProduct(productId: number): Promise<Product> {
    if (isEmpty(productId)) throw new HttpException(400, 'Product Id cannot be empty');
    const findProduct: Product = await this.products.findUnique({ where: { id: productId } });
    if (!findProduct) throw new HttpException(409, `Product with the Id '${productId}' does not exist.`);
    const deleteProduct = await this.products.delete({ where: { id: productId } });
    return deleteProduct;
  }
}

export default ProductService;
