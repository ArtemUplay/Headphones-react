import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICartItem, ICartSliceState } from './cartSlice.types';
import { getCartItemsFromLocalStorage } from 'src/utils/utils';

const cartItems = getCartItemsFromLocalStorage();

const initialState: ICartSliceState = {
  cartItems,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ICartItem>) => {
      state.cartItems.push(action.payload);
    },
    removeItemFromCart: (state, action: PayloadAction<ICartItem>) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
    increaseAmountItem: (state, action: PayloadAction<ICartItem>) => {
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (itemIndex !== -1) {
        state.cartItems[itemIndex].amount++;
      }
    },
    decreaseAmountItem: (state, action: PayloadAction<ICartItem>) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].amount--;
        if (state.cartItems[itemIndex].amount === 0) {
          state.cartItems.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, increaseAmountItem, decreaseAmountItem } = cartSlice.actions;

export default cartSlice.reducer;
