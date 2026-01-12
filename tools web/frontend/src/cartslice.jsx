import { createSlice } from "@reduxjs/toolkit";

// Helpers
const getLocalData = (key) => JSON.parse(localStorage.getItem(key)) || [];
const saveLocalData = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

const initialState = {
  cart: getLocalData("cart"),
  wishlist: getLocalData("wishlist"),
};

const cartSlice = createSlice({
  name: "hardwareCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const found = state.cart.find((item) => item.id === product.id);

      if (found) {
        found.qnty += 1;
      } else {
        state.cart.push({
          id: product.id,
          name: product.name,
          category: product.category?.toLowerCase(),
          price: product.price,
          image: product.image,
          description: product.description,
          qnty: 1,
        });
      }
      saveLocalData("cart", state.cart);
    },

    increaseQuantity: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);
      if (item) item.qnty += 1;
      saveLocalData("cart", state.cart);
    },

    decreaseQuantity: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.id);
      if (item && item.qnty > 1) item.qnty -= 1;
      saveLocalData("cart", state.cart);
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      saveLocalData("cart", state.cart);
    },

    addToWishlist: (state, action) => {
      const exists = state.wishlist.find(
        (item) => item.id === action.payload.id
      );
      if (!exists) state.wishlist.push(action.payload);
      saveLocalData("wishlist", state.wishlist);
    },

    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
      saveLocalData("wishlist", state.wishlist);
    },

    clearCart: (state) => {
      state.cart = [];
      saveLocalData("cart", []);
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
