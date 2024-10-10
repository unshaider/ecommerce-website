export interface Product {
  discount: string;
  image: string;
  name: string;
  discountedPrice: string;
  withoutDiscount: string;
  stars: JSX.Element[];
  rating: string;
}