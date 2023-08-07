import { request } from "@/server/request";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getCategory() {
  try {
    return request("category");
  } catch (err) {
    console.log(err);
  }
}

const Categorys = async () => {
  const { data: categories } = await getCategory();
  return (
    <div className="container mx-auto mt-6 p-4 rounded-2xl text-center category">
      <div className="category_title">
        <h2 className="text-3xl  text-yellow-300">Mahsulotlar kategoriyasi</h2>
      </div>
      <ul className="yangi_card grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center gap-5 items-center mt-10">
        {categories?.map((ctg) => (
          <li className= " mx-auto text-yellow-300" key={ctg?._id}>
            <Link href={`category/${ctg?._id}`}>
              <Image
                className="w-72 rounded-2xl m-auto h-44 p-2 bg-cover"
                src={ctg?.image?.url}
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
