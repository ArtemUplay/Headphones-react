import { ICartItem } from 'src/redux/cart/cartSlice.types';

export function fakeApi(time: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

export const loadPage = async (setter: (value: boolean) => void) => {
  try {
    setter(true);

    await fakeApi(1000);
  } catch (error) {
    console.log(error);
  } finally {
    setter(false);
  }
};

export const getCartItemsFromLocalStorage = (): ICartItem[] => {
  const items = localStorage.getItem('cartItems');

  if (items) {
    return JSON.parse(items);
  }

  return [];
};
