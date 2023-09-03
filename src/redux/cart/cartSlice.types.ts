export interface ICartSliceState {
  cartItems: ICartItem[];
}

export interface ICartItem {
  id: string;
  title: string;
  image: string;
  price: number;
  oldPrice: number | null;
  rate: number;
  amount: number;
}
