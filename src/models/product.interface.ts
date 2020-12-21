export interface Product {
  id: string;
  description: string;
  name: string;
  path: string;
  price: string;
  old_price: string;
  new: boolean;
  promotion: boolean;
  promotion_discount: string;
  stock: boolean;
  soon: boolean;
}
