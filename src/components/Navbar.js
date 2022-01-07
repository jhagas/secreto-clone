import React from "react";
import { Link } from "react-router-dom";
import { IoChatbubblesOutline } from "react-icons/io5";

export default function Navbar() {
  const [isShown, setShown] = React.useState(false);
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const toogle = async function () {
    await sleep(60);
    setShown(!isShown);
  };

  const Dropdown = () => {
    return (
      <div
        className={
          (isShown ? "scale-y-100" : "scale-y-0") +
          " fixed w-full grid grid-rows-3 pb-3 bg-white md:hidden z-10 transition-transform duration-500 shadow-md"
        }
      >
        <Link
          className="pl-12 p-4 focus:text-orange-600 transition-colors"
          to="/about" onClick={toogle}
        >
          About
        </Link>
        <Link
          className="pl-12 p-4 focus:text-orange-600 transition-colors"
          to="/contact" onClick={toogle}
        >
          Contact
        </Link>
        <div className="pl-9 p-4 text-white transition-colors font-bold ">
          <Link className="rounded-md bg-orange-500 p-3" to="/start" onClick={toogle}>
            Mulai Ngerasani!
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <nav className="sticky inset-0">
        <div className="flex justify-between items-center h-16 shadow-md bg-slate-100">
          <Link
            to="/"
            className="flex flex-row items-center pl-8 font-bold text-xl"
          >
            <div className="pr-1">
              <IoChatbubblesOutline color="rgb(154 52 18)" />
            </div>
            <span className="text-orange-700">Rerasan</span>
            <span className="text-white bg-orange-500 rounded-md mx-1 px-1">Hub</span>
          </Link>
          <div
            className="px-4 cursor-pointer md:hidden "
            onClick={toogle}
          >
            {isShown ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </div>
          <div className="pr-8 md:block hidden">
            <Link className="p-4 hover:text-orange-600" to="/about">
              About
            </Link>
            <Link className="p-4 hover:text-orange-600" to="/contact">
              Contact
            </Link>
            <Link
              className="p-4 bg-orange-500 rounded-md text-white font-bold"
              to="/start"
            >
              Mulai Ngerasani!
            </Link>
          </div>
        </div>
      </nav>
      <Dropdown />
    </>
  );
}
