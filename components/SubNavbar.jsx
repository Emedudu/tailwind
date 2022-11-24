import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { VscRepo } from "react-icons/vsc";
import { TbTable } from "react-icons/tb";
import { BsBox } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

function SubNavbar(props) {
  return (
    <div className="border-b mt-12 flex">
      <div className="w-1/3 lg:w-1/4">yo</div>
      <ul
        class="
  nav nav-tabs nav-justified
  flex flex-row
  list-none
  border-b-0
  pl-0
  mb-4
"
        id="tabs-tabJustify"
        role="tablist"
      >
        <li class="nav-item flex-grow text-center px-3" role="presentation">
          <button className="hover:bg-slate-100 rounded-lg flex items-center">
            <FiBookOpen className="m-1" />
            <h6 className="m-1">Overview</h6>
          </button>
        </li>
        <li class="nav-item flex-grow text-center px-3" role="presentation">
          <button className="hover:bg-slate-100 flex items-center rounded-lg">
            <VscRepo className="m-1" />
            <h6 className="m-1">Repositories</h6>
          </button>
        </li>
        <li class="nav-item flex-grow text-center px-3" role="presentation">
          <button className="hover:bg-slate-100 flex items-center rounded-lg">
            <TbTable className="m-1" />
            <h6 className="m-1">Projects</h6>
          </button>
        </li>
        <li class="nav-item flex-grow text-center px-3" role="presentation">
          <button className="hover:bg-slate-100 flex items-center rounded-lg">
            <BsBox className="m-1" />
            <h6 className="m-1">Packages</h6>
          </button>
        </li>
        <li class="nav-item flex-grow text-center px-3" role="presentation">
          <button className="hover:bg-slate-100 flex items-center rounded-lg">
            <AiOutlineStar className="m-1" />
            <h6 className="m-1">Stars</h6>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SubNavbar;
