"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import "swiper/css";

const YangiTovar = ({ last }) => {
  return (
    <div className="container mx-auto mt-6 p-4 rounded-2xl text-center yangi">
      <h2 className="text-3xl  text-yellow-300">Yangi mahsulotlar</h2>
      <ul className="yangi_card  gap-5  mt-10">
        <Swiper
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },

            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            }, 
         
          
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            }, 
             1314: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          slidesPerView={4}
        >
          {last?.map((category) => (
            <SwiperSlide key={category?._id}>
              <li className="text-yellow-300 mx-auto">
                <Link href={`category/${category?.category}`}>
                  <Image
                    className="w-72 rounded-2xl m-auto h-44 p-2 bg-cover"
                    src={category?.image?.url}
                    alt="rasm"
                    width={250}
                    height={20}
                  />
                  <div className="last_title">
                    <h3>{category?.title}</h3>
                  </div>
                </Link>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </div>
  );
};
YangiTovar.propTypes = {
  last: PropTypes.array,
};
export default YangiTovar;
