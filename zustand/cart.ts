import { create } from "zustand";

export interface IItem {
  id: number | undefined;
  title: string;
  image: string;
  price: number;
  amount: number;
  totalPrice: number;
}

interface CartState {
  items: IItem[];
  addToCart: (item: IItem) => void;
  addItem: (id: number | undefined) => void;
  decreaseItem: (id: number | undefined) => void;
  deleteItem: (id: number | undefined) => void;
}

export const useCart = create<CartState>((set) => ({
  items: [],

  // add new item to basket
  addToCart: (item) =>
    set((state) => {
      const newItem = {
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        amount: item.amount,
        totalPrice: item.totalPrice,
      };

      if (state.items[0].id !== 0) {
        return { items: [...state.items, newItem] };
      } else {
        return { items: [newItem] };
      }
    }),

  // increse items
  addItem: (id) =>
    set((state) => ({
      items: state.items.map((row) => {
        if (row?.id === id) {
          const amount = row.amount + 1;
          const totalPrice = row.totalPrice + row.price;
          return { ...row, amount, totalPrice };
        }
        return row;
      }),
    })),

  // decrise items
  decreaseItem: (id) =>
    set((state) => ({
      items: state.items.map((row) => {
        if (row?.id === id) {
          const amount = row.amount - 1;
          const totalPrice = row.totalPrice - row.price;
          return { ...row, amount, totalPrice };
        }
        return row;
      }),
    })),

  // delete item
  deleteItem: (id) =>
    set((state) => {
      const filtered = state.items.filter((row) => row?.id !== id);
      if (filtered.length === 0) {
        return {
          items: [
            {
              id: 0,
              title: "",
              image: "",
              price: 0,
              amount: 0,
              totalPrice: 0,
            },
          ],
        };
      }
      return { items: filtered };
    }),
}));
