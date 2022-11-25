import Image from "next/image";
import React from "react";
import { HiOutlineUsers } from "react-icons/hi";
import { BsDot } from "react-icons/bs";

function Profile(props) {
  return (
    <div className="-mt-12 w-[200]">
      <Image
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        width={"400"}
        height={"400"}
        className="rounded-full"
        alt="Avatar"
      />
      <p className="text-2xl font-semibold text-gray-900 capitalize">
        emeduduna akerejola
      </p>
      <p className="text-xl font-thin text-gray-900 capitalize">emedudu</p>
      <p className="my-4">Web3 Developer</p>
      <button className="border w-full p-1.5 font-semibold text-gray-800 text-sm rounded-lg bg-slate-50">
        Edit profile
      </button>
      <div className="my-4 flex">
        <p className="flex items-center text-sm">
          <HiOutlineUsers className="cursor-pointer" />
          <p className="font-semibold m-1">11</p> followers
          <BsDot /> <p className="font-semibold m-1">12</p> following
        </p>
      </div>
    </div>
  );
}

export default Profile;
