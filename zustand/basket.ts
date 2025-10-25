import { create } from 'zustand'

export interface BasketState {
    status: boolean;
    id: number | undefined;
    open: () => void;
    productId: (newId: number | undefined) => void; 
    close: () => void;
};

export const useBasket = create<BasketState>((set) => ({
    status: false,
    id: 0,
    open: () => set(() => ({ status: true })),
    close: () => set(() => ({ status: false })),
    productId: (newId: number | undefined) => {set(() => ({ id: newId }))},
}))
