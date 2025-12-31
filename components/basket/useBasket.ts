import { ChangeEvent, useEffect, useState } from "react";
import { IProduct } from "@/types/product";
import { useBasket } from "@/zustand/basket";
import { useCart, IItem } from "@/zustand/cart";

export const useBasketLogic = (products: IProduct[] | undefined) => {
    const basket = useBasket();
    const cart = useCart();

    const [product, setProduct] = useState<IProduct | null>(null);
    const [amount, setAmount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [like, setLike] = useState(false);

    useEffect(() => {
        if (!basket.id) return;

        const found = products?.find((p) => p.id === basket.id);
        if (!found) return;

        setProduct(found);
        setAmount(1);
        setTotalPrice(found.price);
    }, [basket.id, products]);

    const close = () => {
        basket.close();
        setAmount(1);
        setTotalPrice(0);
    };

    const handleTopping = (event: ChangeEvent<HTMLInputElement>, price: number) => {
        if (event.target.checked)
            setTotalPrice(totalPrice + price)
        else setTotalPrice(totalPrice - price)
    }

    const increase = () => {
        if (!product) return;
        setAmount((a) => a + 1);
        setTotalPrice((p) => p + product.price);
    };

    const decrease = () => {
        if (!product) return;
        if (amount === 1) return;

        setAmount((a) => a - 1);
        setTotalPrice((p) => p - product.price);
    };

    const toggleLike = () => setLike((l) => !l);

    const handleSause = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked)
            setTotalPrice(totalPrice + 2)
        else setTotalPrice(totalPrice - 2)
    }

    const addToCart = () => {
        if (!product) return;

        const item: IItem = {
            id: product.id,
            title: product.name,
            image: product.image,
            price: product.price,
            amount,
            totalPrice,
        };



        cart.addToCart(item);
        close();
    };

    return {
        basket,
        product,
        amount,
        totalPrice,
        like,
        increase,
        decrease,
        toggleLike,
        addToCart,
        close,
        handleTopping,
        handleSause
    };
};
