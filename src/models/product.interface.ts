export class Product {
  id: string;
  description: string;
  name: string;
  path: string;
  price: number;
  old_price: number;
  new: boolean;
  promotion: boolean;
  promotion_discount: string;
  stock: boolean;
  soon: boolean;


}
export class ProductCart {
  id: string;
  name: string;
  path: string;
  price: number;
  quantity: number;
  constructor(init?: Partial<Product>) {
    debugger;
    this.id = init.id;
    this.name = init.name;
    this.path = init.path;
    this.price = init.price;
    this.quantity = 1;
  }
}
