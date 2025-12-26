"use client";

import MenuItems from "@/components/menuItems";
import ProductBox from "@/components/productBox";
import { IProduct } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";

const Menu: NextPage = () => {
  const { data } = useQuery<IProduct[]>({
    queryKey: ["homeProduct"],
    queryFn: () => fetch("/api/homeProducts.json").then((rest) => rest.json()),
  });

  return (
    <div className="px-5">
      <div className="mt-4 text-center">
        <span className="text-txt-primary text-xl font-semibold">Menu</span>
      </div>
      <MenuItems />
      <div className="flex mt-8 justify-around items-start flex-col">
        {data?.map((row: IProduct) => {
          return (
            <ProductBox
              key={row.id}
              id={row.id}
              name={row.name}
              price={row.price}
              image={row.image}
              discount={row.discount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
