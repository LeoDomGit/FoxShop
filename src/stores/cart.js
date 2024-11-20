import { createSlice } from '@reduxjs/toolkit';

const userId = localStorage.getItem('userId');

const initialState = {
  items: userId ? JSON.parse(localStorage.getItem(`cart_${userId}`)) || [] : [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity, size, color } = action.payload;
      const userId = localStorage.getItem('userId');
      if (!userId) {
        return;
      }
      const existingItem = state.items.find(
        (item) =>
          item.productId === productId &&
          item.size === size &&
          item.color === color
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ productId, quantity, size, color });
      }
      localStorage.setItem(`cart_${userId}`, JSON.stringify(state.items));
    },
    changeQuantity(state, action) {
      const { productId, quantity, size, color } = action.payload;
      const userId = localStorage.getItem('userId');
      if (!userId) {
        return;
      }
      const item = state.items.find(
        (item) =>
          item.productId === productId &&
          item.size === size &&
          item.color === color
      );
      if (item) {
        item.quantity = quantity > 0 ? quantity : 1;
        localStorage.setItem(`cart_${userId}`, JSON.stringify(state.items));
      }
    },
    removeFromCart(state, action) {
      const { productId, size, color } = action.payload;
      const userId = localStorage.getItem('userId');
      if (!userId) {
        return;
      }
      state.items = state.items.filter(
        (item) =>
          item.productId !== productId ||
          item.size !== size ||
          item.color !== color
      );
      localStorage.setItem(`cart_${userId}`, JSON.stringify(state.items));
    },
    clearCart(state) {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        return;
      }
      state.items = [];
      localStorage.removeItem(`cart_${userId}`);
    },
    loadCartFromLocalStorage(state) {
      const userId = localStorage.getItem('userId');
      if (userId) {
        const storedCart =
          JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
        state.items = storedCart;
      }
    },
    clearCartLogout(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  changeQuantity,
  removeFromCart,
  clearCart,
  loadCartFromLocalStorage,
  clearCartLogout,
} = cartSlice.actions;

export default cartSlice.reducer;
