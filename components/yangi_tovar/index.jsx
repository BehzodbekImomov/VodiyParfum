

import { request } from "@/server/request";

import Image from "next/image";
import Link from "next/link";
import React from "react";
// import Slider from "react-slick";

async function getData() {
  try {
    return request("last-products");
  } catch (err) {
    console.log(err);
  }
}

const YangiTovar = async () => {
  const { data: last } = await getData();
//   let settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
  return (
    <div className="container mx-auto mt-6 p-4 rounded-2xl text-center yangi">
      <h2 className="text-3xl  text-yellow-300">Yangi mahsulotlar</h2>
      <ul className="yangi_card grid grid-cols-4 gap-5 items-center justify-between mt-10">
        {last?.map((category) => (
            //   <Slider {...settings}>

          <li className="text-yellow-300" key={category?._id}  >
            <Link href={`category/${category?.category}`}>
              <Image
                className="w-72 rounded-2xl m-auto h-44 p-2 bg-cover"
                src={category?.images?.url}
                alt="rasm"
                width={250}
                height={20}
              />
              <div className="last_title">
                <h3>{category?.title}</h3>
              </div>
            </Link>
          </li>
            //   {/* </Slider> */}
        ))}
      </ul>
    </div>
  );
};

export default YangiTovar;
