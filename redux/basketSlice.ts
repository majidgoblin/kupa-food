import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface BasketState {
  status: boolean;
  id:number | undefined;
};

const initialState: BasketState = {
  status: false,
  id:0
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    open: (state) => {
      state.status = true
    },
    close: (state) => {
      state.status = false
    },
    productId: (state, action: PayloadAction<number | undefined>) => {
      state.id = action.payload
    },
  },
});

export const { open, close,productId } = basketSlice.actions;

export default basketSlice.reducer;