"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

import korzinka from "/public/korzinka.png";
import menu from "/public/menu.png";
import close from "/public/close.png";
const Header = () => {
  const handleClose = () => {
    const modal = document.querySelector(".modal");
    modal.classList.remove("open");
  };
  const handleShow = () => {
    const modal = document.querySelector(".modal");
    modal.classList.toggle("open");
  };

  const { isAuth, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div className="container relative  mx-auto ">
      <nav className="flex justify-between  fixed  top-0 left-0 right-0 z-10 text-yellow-300 items-center mt-1 p-4 rounded-2xl   ">
        <Link className="text-3xl logo" href="#">
          Vodiy Parfum
        </Link>
        <ul className=" hidden items-center lg:flex gap-6">
          <li>
            <Link href="/">Asosiy</Link>
          </li>

          <li>
            <Link href="#">Biz haqimizda</Link>
          </li>

          <li>
            <Link href="#">Aloqa</Link>
          </li>

          <li>
            <Link href="#">Buyurtmalar tarixi</Link>
          </li>
          <li>
            <Link onClick={() => dispatch(logout(router))} href="#">
              Chiqish
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="border-solid border-2 border-orange-300 py-2 px-5 flex  rounded-2xl"
            >
              Login
            </Link>
          </li>
          <li>
            {isAuth ? (
              <div className="flex gap-2">
                <Link
                  className="border-solid border-2  border-orange-300 py-2 px-5 flex  rounded-2xl"
                  href="/account"
                >
                  Account {user?.firstName}{" "}
                </Link>
                <button
                  className="border-solid border-2  border-orange-300 py-2 px-5 flex  rounded-2xl"
                  onClick={() => dispatch(logout(router))}
                >
                  Logout
                </button>
              </div>
            ) : null}
          </li>
          <li className="korzinka p-2 rounded-2xl">
            <Link href="#">
              <Image src={korzinka} alt="korzinka" width={50} height={50} />
            </Link>
          </li>
        </ul>
        <Image
          onClick={handleShow}
          className=" inline-flex lg:hidden"
          src={menu}
          alt="logo"
          width={40}
          height={40}
        />
      </nav>
      <div className="modal  flex align-top justify-evenly">
        <ul className=" items-center grid grid-cols-1 md:grid-cols-2 text-2xl md:pt-10 justify-center  text-yellow-300  gap-6">
          <li>
            <Link href="/">Asosiy</Link>
          </li>

          <li>
            <Link href="#">Biz haqimizda</Link>
          </li>

          <li>
            <Link href="#">Aloqa</Link>
          </li>

          <li>
            <Link href="#">Buyurtmalar tarixi</Link>
          </li>

          <li>
            <Link onClick={() => dispatch(logout(router))} href="#">
              Chiqish
            </Link>
          </li>

          <li>
            <Link
              href="/login"
              className="border-solid border-2 border-orange-300 py-2 px-5 flex justify-center rounded-2xl"
            >
              Login
            </Link>
          </li>
          <li>
            {isAuth ? (
              <div className="flex gap-2">
                <Link
                  className="border-solid border-2  border-orange-300 py-2 px-5 flex  rounded-2xl"
                  href="/account"
                >
                  Account {user?.firstName}{" "}
                </Link>
              </div>
            ) : null}
          </li>
         
          <li className="korzinka m-0 p-0  rounded-2xl  md:relative md:bottom-28">
            <Link href="#">
              <Image
                className="w-10 "
                src={korzinka}
                alt="korzinka"
                width={5}
                height={5}
              />
            </Link>
          </li>
        </ul>
        <Image
          className="close"
          onClick={handleClose}
          src={close}
          alt="close"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default Header;
