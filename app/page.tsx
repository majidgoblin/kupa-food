"use client";

import ProductBox from "@/components/productBox";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import {  FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { IDiscount, IProduct } from "../types/product";
import AddressBox from "@/components/addressBox";
import SearchBox from "@/components/search";
import Basket from "@/components/basket";
import NavigationBar from "@/components/navigationBar";
import { useBasket } from "@/zustand/basket";
import Menu from "@/components/home/Menu";

const Home: NextPage = () => {
  //get home products
  const { data } = useQuery<IProduct[]>({
    queryKey: ["homeProduct"],
    queryFn: () => fetch("/api/homeProducts.json").then((rest) => rest.json()),
  });

  //get home discounts
  const { data: discountData } = useQuery<IDiscount[], Error>({
    queryKey: ["homeDiscouts"],
    queryFn: () => fetch("/api/homeDiscount.json").then((rest) => rest.json()),
  });

  const status = useBasket((state) => state.status);

  return (
    <main className="relative h-full">
      <div
        className="
          relative
          h-[100px]
          w-full
          rounded-br-[3rem]
          rounded-bl-[3rem]
          overflow-hidden
          bg-yellow

          before:content-['']
          before:absolute
          before:inset-0
          before:bg-layar
          before:bg-cover
          before:bg-top
          before:z-0
          before:opacity-20
        "
      >
        <div className="relative z-10 text-center p-5 mt-3">
          <SearchBox />
        </div>
      </div>
      <div className={status ? `bg-gray-800 bg-opacity-30 px-5` : ` px-5`}>
        <AddressBox />
        <Menu />
        <span className="font-bold block text-gray-800 text-xl my-6">
          Top of Week
        </span>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: false,
          }}
          modules={[FreeMode]}
        >
          {data?.map((row: IProduct) => {
            return (
              <SwiperSlide key={row.id}>
                <ProductBox
                  id={row.id}
                  name={row.name}
                  price={row.price}
                  image={row.image}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <NavigationBar />
      </div>
      <Basket products={data} />
    </main>
  );
};

export default Home;
