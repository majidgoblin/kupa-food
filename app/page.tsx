"use client";

import ProductBox from "@/components/productBox";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
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
import RestaurantBox from "@/components/RestaurantBox";

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
          rounded-br-[2rem]
          rounded-bl-[2rem]
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
      <div className={`px-5`}>
        <AddressBox />
        {/* <Menu /> */}
        <span className="font-bold text-txt-primary text-lg mt-6 mb-3 block">
          Nearest Restaurants
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
                <RestaurantBox
                  id={row.id}
                  name={row.name}
                  price={row.price}
                  image={row.image}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <span className="font-bold text-txt-primary text-lg mt-6 mb-3 block">
          Popular Restaurants
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
                <RestaurantBox
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
