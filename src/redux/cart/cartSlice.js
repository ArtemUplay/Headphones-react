import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.title !== action.payload.title;
      });
    },
    increaseAmountItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (itemIndex !== -1) {
        state.cartItems[itemIndex].amount++;
      }
    },
    decreaseAmountItem: (state, action) => {
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
