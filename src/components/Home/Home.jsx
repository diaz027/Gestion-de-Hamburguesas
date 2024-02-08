import React from "react";
import "tailwindcss/tailwind.css";
import Users from "../Users/Users";
import Foter from "../Foter/Foter";

const Home = () => {
  return (
    <section className="">
      <Users></Users>

      <div className="flex justify-center items-center ">
  <img className="w-1/3 md:w-1/6" src="./logo.png" alt="logo billiebob" />
</div>

<div className="flex flex-wrap">
  <div className="h-full w-1/2 p-1 rounded-xl">
    <img
      src="./promo.jpg"
      alt="Imagen 1"
      className="w-full h-full md:w-1/2 md:h-3/4 md:ml-auto rounded-xl"
    />
  </div>
  <div className="p-1 h-full w-1/2 rounded-xl">
    <img
      src="./pediosYa.jpg"
      alt="Imagen 2"
      className="w-full h-full md:w-2/4 md:h-3/4 md:mx-left rounded-xl"
    />
  </div>
  <div className="w-full p-1 rounded-xl">
    <img
      src="https://www.on24.com.ar/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-11-at-4.21.57-PM.jpeg"
      alt="Imagen 3"
      className="w-full h-full md:w-2/4 md:h-full md:mx-auto rounded-xl"
    />
  </div>
</div>

<Foter></Foter>
    </section>
  );
};

export default Home;
