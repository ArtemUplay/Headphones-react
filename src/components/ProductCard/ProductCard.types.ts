export interface IProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  oldPrice: number | null;
  rate: number;
}

export interface IProductCartItem {
  id: string;
  title: string;
  image: string;
  price: number;
  oldPrice: number | null;
  rate: number;
  isWireless: boolean;
}
