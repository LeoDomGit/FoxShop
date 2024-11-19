import { createSlice } from '@reduxjs/toolkit';

const userId = localStorage.getItem('userId');

const initialState = {
  items: JSON.parse(localStorage.getItem(`cart_${userId}`)) || [],
};

const cartSlice = createSlice({
  name: `cart_${userId}`,
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity, size, color } = action.payload;
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
      state.items = state.items.filter(
        (item) =>
          item.productId !== productId ||
          item.size !== size ||
          item.color !== color
      );
      localStorage.setItem(`cart_${userId}`, JSON.stringify(state.items));
    },
    clearCart(state) {
      state.items = [];
      localStorage.removeItem(`cart_${userId}`);
    },
    clearCartLogout(state) {
      state.items = [];
    },
    loadCartFromLocalStorage(state) {
      const userId = localStorage.getItem('userId');
      const storedCart =
        JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
      state.items = storedCart;
    },
  },
});

export const {
  addToCart,
  changeQuantity,
  removeFromCart,
  clearCart,
  clearCartLogout,
  loadCartFromLocalStorage,
  initializeCart,
} = cartSlice.actions;
export default cartSlice.reducer;
