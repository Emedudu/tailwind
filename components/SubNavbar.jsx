import React, { useEffect } from "react";
import { FiBookOpen } from "react-icons/fi";
import { VscRepo } from "react-icons/vsc";
import { TbTable } from "react-icons/tb";
import { BsBox } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

function SubNavbar(props) {
  return (
    <div className="border-b mt-6 flex text-sm sticky top-0 bg-white z-20 px-16 items-center">
      <div className="w-[400px]">
        {!props.visibility && (
          <div className="flex items-center space-x-2">
            <Image
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              width={"32"}
              height={"32"}
              className="rounded-full"
              alt="Avatar"
            />
            <p className="font-semibold text-sm text-gray-600">Emedudu</p>
          </div>
        )}
      </div>
      <ul
        className="
  nav nav-tabs nav-justified
  flex flex-row
  list-none
  border-b-0
  pl-0
  text-gray-800
"
        id="tabs-tabJustify"
        role="tablist"
      >
        <li
          className={`nav-item flex-grow text-center px-1 py-2 ${
            props.tab == "overview" &&
            "border-b-2 border-red-300 font-medium text-black"
          }`}
          role="presentation"
        >
          <Link href={"/"}>
            <button className="hover:bg-slate-100 rounded-lg flex items-center px-1">
              <FiBookOpen className="m-1" />
              <h6 className="m-1">Overview</h6>
            </button>
          </Link>
        </li>
        <li
          className={`nav-item flex-grow text-center px-1 py-2 ${
            props.tab == "repos" &&
            "border-b-2 border-red-300 font-medium text-black"
          }`}
          role="presentation"
        >
          <Link href={"/repos"}>
            <button className="hover:bg-slate-100 flex items-center rounded-lg px-1">
              <VscRepo className="m-1" />
              <h6 className="m-1">Repositories</h6>
            </button>
          </Link>
        </li>
        <li
          className={`nav-item flex-grow text-center px-1 py-2 ${
            props.tab == "projects" &&
            "border-b-2 border-red-300 font-medium text-black"
          }`}
          role="presentation"
        >
          <Link href={"/projects"}>
            <button className="hover:bg-slate-100 flex items-center rounded-lg px-1">
              <TbTable className="m-1" />
              <h6 className="m-1">Projects</h6>
            </button>
          </Link>
        </li>
        <li
          className={`nav-item flex-grow text-center px-1 py-2 ${
            props.tab == "packages" &&
            "border-b-2 border-red-300 font-medium text-black"
          }`}
          role="presentation"
        >
          <Link href={"/packages"}>
            <button className="hover:bg-slate-100 flex items-center rounded-lg px-1">
              <BsBox className="m-1" />
              <h6 className="m-1">Packages</h6>
            </button>
          </Link>
        </li>
        <li
          className={`nav-item flex-grow text-center px-1 py-2 ${
            props.tab == "stars" &&
            "border-b-2 border-red-300 font-medium text-black"
          }`}
          role="presentation"
        >
          <Link href={"/stars"}>
            <button className="hover:bg-slate-100 flex items-center rounded-lg px-1">
              <AiOutlineStar className="m-1" />
              <h6 className="m-1">Stars</h6>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SubNavbar;
