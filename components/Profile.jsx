import Image from "next/image";
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { HiOutlineUsers } from "react-icons/hi";
import { BsDot, BsTwitter } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { BiLink } from "react-icons/bi";
import { RiFocus2Line } from "react-icons/ri";

function Profile({ setVisibility }) {
  return (
    <div className="-mt-12 w-[200] divide-y">
      <div>
        <div>
          <div className="relative z-50 md:w-64 md:h-64 lg:w-72 lg:h-72">
            <Image
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              layout="fill"
              className="rounded-full"
              alt="Avatar"
            />
            <div className="absolute md:top-52 md:left-52 lg:top-56 lg:left-56 p-2 bg-white rounded-full border group shadow ">
              <a className="flex space-x-2 cursor-pointer hover:text-blue-600 items-center">
                <RiFocus2Line size={20} color="rgb(238, 75, 43)" />
                <p className="hidden group-hover:block text-xs">Focusing</p>
              </a>
            </div>
          </div>
          <VisibilitySensor
            onChange={(isVisible) => {
              setVisibility(isVisible);
            }}
          >
            <p className="text-2xl font-semibold text-gray-900 capitalize">
              emeduduna akerejola
            </p>
          </VisibilitySensor>
          <p className="text-xl font-thin text-gray-900 capitalize">emedudu</p>
        </div>

        <p className="my-4">Web3 Developer</p>
        <button className="border w-full p-1.5 font-semibold text-gray-800 text-sm rounded-lg bg-slate-50 hover:bg-slate-100">
          Edit profile
        </button>
        <div className="my-4 flex">
          <p className="flex items-center text-sm">
            <HiOutlineUsers className="cursor-pointer" />
            <p className="font-semibold m-1">11 </p> followers
            <BsDot /> <p className="font-semibold m-1">12</p> following
          </p>
        </div>
        <div className="text-sm text-gray-700 mb-4">
          <span className="flex items-center space-x-2">
            <CiLocationOn />
            <p className="text-gray-900">Ondo</p>
          </span>
          <span className="flex items-center space-x-2">
            <BiLink />
            <p className="text-gray-900">https://emedev.vercel.app</p>
          </span>
          <span className="flex items-center space-x-2">
            <BsTwitter />
            <p className="text-gray-900">@emeduduna</p>
          </span>
        </div>
      </div>
      <div className="py-4 space-y-3">
        <p className="font-semibold">Achievements</p>
        <div className="flex space-x-2 ">
          <Image
            src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png"
            width={"60"}
            height={"60"}
            className="rounded-full"
            alt="Avatar"
          />
        </div>
        <div className="flex space-x-1 items-center">
          <span className="text-green-700 border border-green-700 rounded-xl px-2 text-sm">
            Beta
          </span>
          <p className="text-xs text-blue-600">Send feedback</p>
        </div>
      </div>
      <div className="py-4 space-y-3">
        <p className="font-semibold">Organizations</p>
        <div className="flex space-x-0.5">
          <div className="border text-[0px] rounded-lg">
            <Image
              src="https://avatars.githubusercontent.com/u/35373879?s=64&v=4"
              width={"36"}
              height={"36"}
              alt="Avatar"
            />
          </div>
          <div className="border text-[0px] rounded-lg">
            <Image
              src="https://avatars.githubusercontent.com/u/89759498?s=64&v=4"
              width={"36"}
              height={"36"}
              alt="Avatar"
            />
          </div>
          <div className="border text-[0px] rounded-lg">
            <Image
              src="https://avatars.githubusercontent.com/u/113453650?s=64&v=4"
              width={"36"}
              height={"36"}
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
