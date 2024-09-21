import { ISate } from '@/types/product';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ICart {
    items: ISate[]
};

const initialState: ICart = {
    items: [{
        amount: 0,
        totalPrice: 0,
        id: 0,
        price: 0,
        title: '',
        image: ''
    }]
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ISate>) => {
            const newItem = {
                id: action.payload.id,
                amount: action.payload.amount,
                totalPrice: action.payload.totalPrice,
                price: action.payload.price,
                title: action.payload.title,
                image: action.payload.image,
            }
            if (state.items[0].id !== 0)
                state.items.push(newItem)
            else state.items = [newItem]
        },
        addItem: (state, action: PayloadAction<number | undefined>) => {
            state.items.map(row => {
                if (row.id === action.payload) {
                    row.amount++;
                    row.totalPrice = row.totalPrice + row.price;
                }
            })
        },
        decreaseItem: (state, action: PayloadAction<number | undefined>) => {
            state.items.map(row => {
                if (row.id === action.payload) {
                    row.amount--;
                    row.totalPrice = row.totalPrice - row.price;
                }
            })
        },
        deleteItem: (state, action: PayloadAction<number | undefined>) => {
            state.items = state.items.filter(row => row.id !== action.payload)
            if (state.items.length === 0) {
                state.items.push({
                    amount: 0,
                    totalPrice: 0,
                    id: 0,
                    price: 0,
                    title: '',
                    image: ''
                })
            }
        },
    },
});

export const { addToCart, addItem, decreaseItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;