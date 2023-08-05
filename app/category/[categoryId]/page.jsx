"use client";

import { request } from "@/server/request";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [prodact, setProdact] = useState([]);

  const getProduct = useCallback(async () => {
    try {
      let { data } = await request(`product?category=${categoryId}`);
      console.log(data.products);
      setProdact(data.products);
    } catch (err) {
      console.log(err);
    }
  }, [categoryId]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);
  return (
    <div className="container mx-auto mt-6 p-4 rounded-2xl text-center prodact">
      <ul className="yangi_card grid grid-cols-3 p-14 gap-5 items-center justify-between mt-10">
        {prodact?.map((pr) => (
          <li key={pr._id} className="p-2 pt-3 pb-4">
            <Image
              className="w-48 rounded-2xl m-auto h-52 p-2 bg-cover"
              src={pr?.images?.url}
              alt="rasm"
              width={200}
              height={100}
            />
            <div className="content text-center text-white">
              <h3 className="text-2xl pt-2">{pr?.title}</h3>
              <h3 className="pt-2 text-2xl ">Miqdori:{pr.sold}</h3>
              <h3 className="pt-2 text-2xl">
                Narxi: <br /> {pr?.price}som
              </h3>
              <button className="mt-5 btn ">{`Qo'shish`}</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
