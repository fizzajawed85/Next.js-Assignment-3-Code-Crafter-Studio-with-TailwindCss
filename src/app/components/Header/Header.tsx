import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <nav className="container pt-6">
      <div className="flex justify-between items-center ">
        <Image
          src="/images/logo.png"
          alt="Code Crafters Studio Logo"
          width={60}
          height={60}
          className="h-auto"
        />
        <ul className="md:flex gap-8 items-center font-serif text-[14px] text-neutral hidden">
          <li>
            <Link className="hover:text-accent" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-accent" href="/About">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-accent" href="/Expertise">
              Expertise
            </Link>
          </li>
          <li>
            <Link className="hover:text-accent" href="/Collaborate">
              Collaborate
            </Link>
          </li>
          <button className="bg-accent hover:text-stone-300 text-slate-900 px-6 py-2 rounded-3xl">
            SignUp
          </button>
        </ul>
        <div className="md:hidden">
          <span className="text-red">
            <AiOutlineMenu size={30} />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
