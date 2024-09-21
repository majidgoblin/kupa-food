export interface IProduct {
    id?: number;
    name: string;
    price: number;
    image: string;
    description?: string;
};

export interface IDiscount {
    id?: number;
    name: string;
    discount: string;
    image: string;
};

export interface IBasket {
    products?: IProduct[];
};

export interface ISate {
    amount: number;
    totalPrice: number;
    id?: number;
    title: string,
    image: string,
    price:number
};