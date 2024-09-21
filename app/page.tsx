"use client";

import ProductBox from "@/components/productBox";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { IDiscount, IProduct } from "../types/product";
import HomeDiscounts from "@/components/home/discountsBox";
import AddressBox from "@/components/addressBox";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import SearchBox from "@/components/search";
import Basket from "@/components/basket";
import NavigationBar from "@/components/navigationBar";
import { useEffect, useState } from "react";

const Home: NextPage = () => {

  //get home products
  const { data } = useQuery<IProduct[]>({
    queryKey: ['homeProduct'],
    queryFn: () => fetch('/api/homeProducts.json').then(rest => rest.json())
  })

  //get home discounts
  const { data: discountData } = useQuery<IDiscount[], Error>({
    queryKey: ['homeDiscouts'],
    queryFn: () => fetch('/api/homeDiscount.json').then(rest => rest.json())
  })

  const status = useSelector((state: RootState) => state.basket.status);

  return (
    <main className="relative">
      <div className={status ? `bg-gray-800 bg-opacity-10 px-5` : `"bg-white px-5`}>
        <div className="text-center ">
          <span className="font-bold text-lg text-gray-800 block my-3">Home</span>
          <SearchBox />
        </div>
        <AddressBox />
        <Swiper
          slidesPerView={2.5}
          spaceBetween={30}
          effect={'fade'}
          pagination={{
            clickable: false,
          }}
          modules={[EffectFade]}
        >
          {
            discountData?.map((row: IDiscount) => {
              return <SwiperSlide key={row.id}>
                <HomeDiscounts
                  name={row.name}
                  discount={row.discount}
                  image={row.image} />
              </SwiperSlide>
            })
          }
        </Swiper>
        <span className="font-bold block text-gray-800 text-xl my-6">Top of Week</span>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: false,
          }}
          modules={[FreeMode]}
        >
          {
            data?.map((row: IProduct) => {
              return <SwiperSlide key={row.id}>
                <ProductBox
                  id={row.id}
                  name={row.name}
                  price={row.price}
                  image={row.image} />
              </SwiperSlide>
            })
          }
        </Swiper>

        <NavigationBar />
      </div>
      <Basket
        products={data}
      />

    </main>
  );
}

export default Home