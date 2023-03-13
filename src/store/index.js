import { configureStore } from '@reduxjs/toolkit';
import uiSliceReducer from './ui-slice';
import cartSliceReducer from './cart-slice';
export const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    cart: cartSliceReducer,
  },
});
