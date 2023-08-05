import { request } from "@/server/request";
import Image from "next/image";
import Link from "next/link";
import React from "react";


async function getCategory() {
  try {
  return  request("category");
  } catch (err) {
    console.log(err);
  }
}

const Categorys = async () => {
  const { data:categories } = await getCategory();
  return (
    <div className="container mx-auto mt-6 p-4 rounded-2xl text-center category">
      <div className="category_title">
        <h2 className="text-3xl  text-yellow-300">Mahsulotlar kategoriyasi</h2>
      </div>
      <ul className="yangi_card grid grid-cols-4 gap-5 items-center justify-between mt-10">

        {categories?.map((ctg) => (
          <li className="text-yellow-300" key={ctg?._id}>
            <Link href="#">
              <Image
                className="w-72 rounded-2xl m-auto h-44 p-2 bg-cover"
                src={ctg?.images?.url}
                alt="rasm"
                width={250}
                height={20}
              />
              <div className="last_title">
                <h3>{ctg?.name}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categorys;
