import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../redux/basketSlice';
import cartReducer from '../redux/cartSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    cart:cartReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch