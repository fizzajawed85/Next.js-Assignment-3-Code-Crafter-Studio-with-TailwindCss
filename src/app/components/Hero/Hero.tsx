import React from "react";
import Image from "next/image";
import Header from "../Header/Header";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Image
        className="absolute inset-0 object-cover w-full h-full -z-10 rounded-sm ring-4 ring-gray-900 ring-opacity-50"
        src="/images/b_g.png"
        layout="fill"
        alt="hero_bg"
      />
      <Header />

      <div className="container h-[calc(100vh-120px)] grid place-items-center">
        <div className="space-y-4 text-center px-6">
          <p className="uppercase font-medium text-white drop-shadow-md">
          Igniting Innovation, Crafting Ideas into Reality through Design and Technology
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-md">
            <span className="text-accent">Crafting Ideas</span> Into Reality
          </h2>
          <p className="text-white text-[14px] sm:text-[16px] drop-shadow-md">
            At <span className="text-purple-300 drop-shadow-md">Code Crafters Studio</span>, we blend creativity, innovation, and
            technology to turn your ideas into impactful realities
          </p>
          <button className="bg-accent text-slate-900 px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]">
            <Link className=" hover:text-stone-300" href="/Expertise"> Discover More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
