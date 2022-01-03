import React from "react";
import { Link } from "react-router-dom";

function Dropdown() {
  return (
    <div className="flex-col bg-orange-300 md:hidden text-center">
      <div className="p-3 hover:bg-amber-500 transition-colors">
        <Link className="p-4" to="/about">
          About
        </Link>
      </div>
      <div className="p-3 hover:bg-amber-500 transition-colors">
        <Link className="p-4" to="/contact">
          Contact
        </Link>
      </div>
      <div className="p-3 hover:bg-amber-500 transition-colors">
        <Link className="p-4 font-bold" to="/start">
          Mulai Ngerasani!
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isShown, setShown] = React.useState(false);
  const toogle = () => {
    setShown(!isShown);
  };

  return (
    <>
      <nav className="flex justify-between items-center h-16 shadow-sm">
        <Link to="/" className="pl-8 font-bold text-xl">
          Rerasan 2.0
        </Link>
        <div className="px-4 cursor-pointer md:hidden" onClick={toogle}>
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
        </div>
        <div className="pr-8 md:block hidden">
          <Link className="p-4" to="/about">
            About
          </Link>
          <Link className="p-4" to="/contact">
            Contact
          </Link>
          <Link className="p-4 bg-orange-300 rounded-lg" to="/start">
            Mulai Ngerasani!
          </Link>
        </div>
      </nav>
      {isShown ? (
        <div className="scale-y-0 transition-transform">
          <Dropdown />
        </div>
      ) : (
        <div className="scale-y-100 transition-transform">
          <Dropdown />
        </div>
      )}
    </>
  );
}
