import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { MdOutlineNotifications } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSlashSquare } from "react-icons/bs";

function Navbar(props) {
  return (
    <div className="bg-gray-900 text-white flex justify-between py-2 px-6 text-sm font-semibold items-center">
      <div className="md:hidden text-gray-300">
        <GiHamburgerMenu size={24} />
      </div>
      <div className="flex items-center ">
        <BsGithub size={32} className="m-2" />
        <div className="items-center text-gray-500 outline outline-1 outline-gray-500 h-6 rounded-md px-1 m-2 hidden md:flex">
          <input
            placeholder="Search or jump to..."
            className="form-control bg-transparent h-full py-1 px-2 text-white focus:text-black font-normal focus:bg-white focus:w-[max(calc(100vw-730px),175px)] lg:focus:w-[min(calc(100vw-730px),500px)] "
          />
          <BsSlashSquare />
        </div>
        <Link href={"#"}>
          <a className="m-2 hidden md:block lg:hidden">Pulls</a>
        </Link>
        <Link href={"#"}>
          <a className="m-2 hidden lg:block ">Pull Requests</a>
        </Link>
        <Link href={"#"}>
          <a className="m-2 hidden md:block">Issues</a>
        </Link>
        <Link href={"#"}>
          <a className="m-2 hidden md:block">Codespaces</a>
        </Link>
        <Link href={"#"}>
          <a className="m-2 hidden md:block">Marketplace</a>
        </Link>
        <Link href={"#"}>
          <a className="m-2 hidden md:block">Explore</a>
        </Link>
      </div>
      <div className="flex items-center">
        <MdOutlineNotifications size={24} className="m-2" />
        <input id="drop" type="checkbox" className="group" />
        <label for="drop" className=" m-2 hidden md:flex relative">
          <AiOutlinePlus />
          <IoMdArrowDropdown />
          <div
            id="drop"
            className={`absolute top-12 z-10 text-black hidden group-checked:block`}
          >
            dropdown
          </div>
        </label>
        <div className="m-2 hidden md:flex">
          <Image
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            width={20}
            height={20}
            class="rounded-full"
            alt="Avatar"
          />
          <IoMdArrowDropdown />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
