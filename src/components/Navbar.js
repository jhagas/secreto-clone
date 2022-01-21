import React from "react";
import { Link } from "react-router-dom";
import { IoChatbubblesOutline } from "react-icons/io5";
import Dropdown from "./Dropdown";

export default function Navbar() {
  return (
    <>
      <nav className="sticky inset-0 overflow-hidden">
        <div className="flex justify-between items-center h-16 bg-gray-100">
          <Link
            to="/"
            className="flex flex-row items-center pl-8 font-bold text-xl"
          >
            <div className="pr-1">
              <IoChatbubblesOutline color="rgb(154 52 18)" />
            </div>
            <span className="text-orange-700">Rerasan</span>
            <span className="text-white bg-orange-500 rounded-md mx-1 px-1">
              Hub
            </span>
          </Link>
          <div className="pr-8 md:block hidden">
            <Link className="p-4 hover:text-orange-600" to="/about">
              About
            </Link>
            <Link className="p-4 hover:text-orange-600" to="/contact">
              Contact
            </Link>
            <Link
              className="p-4 bg-orange-500 hover:bg-orange-600 transition-colors rounded-md text-white font-bold"
              to="/start"
            >
              Mulai Ngerasani!
            </Link>
          </div>
          <Dropdown />
        </div>
      </nav>
    </>
  );
}
