"use client";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import "tailwindcss/tailwind.css";

const Users = () => {
  const user = useUser();
  console.log("fffffff", user);
  const isLogin = user?.isSignedIn;

  const usuario = {
    img: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    name: "Pablo Valdez",
  };
  return (
    <>
      <div className="flex ">
        {/* <img
          className="w-12  mx-3 my-4 br-20 rounded-full"
          src={usuario.img}
          alt="user"
        />
        <h1 className="font-sans font-semibold pt-7 ">{usuario.name}</h1> */}
        {isLogin ? (
          <li>
            <UserButton afterSignOutUrl="/" />
          </li>
        ) : (
          <Link href={"/sign-in"}></Link>
        )}
      </div>
      <button className="  bg-yellow-500 text-black font-bold py-2 px-4 rounded absolute top-5 right-5 place-content-center">
        <img
          className="w-4 absolute place-content-center"
          src="https://cdn-icons-png.flaticon.com/512/263/263056.png"
          alt=""
        />
        __ Puntos
      </button>
    </>
  );
};

export default Users;
