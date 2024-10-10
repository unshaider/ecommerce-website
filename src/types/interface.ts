export interface Product {
  discount: string;
  image: unknown;
  name: string;
  discountedPrice: string;
  withoutDiscount: string;
  stars: JSX.Element[];
  rating: string;
}