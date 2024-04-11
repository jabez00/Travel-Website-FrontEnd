import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div class="flex absolute w-full text-white z-10 h-20 items-center justify-between px-4">
      <div className="">
        <h1 class={nav ? "hidden md:block" : ""}>BEACHES.</h1>
      </div>
      <ul className="hidden md:flex space-x-4 ">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex space-x-2">
        <BsPerson size={20} />
        <BiSearch size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden cursor-pointer z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* Mobile DropDown */}
      <div
        className={
          nav
            ? "absolute left-0 top-0 w-full text-black bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>BEACHES.</h1>
          <li className="border-b border-black">Home</li>
          <li className="border-b border-black">Destination</li>
          <li className="border-b border-black">Travel</li>
          <li className="border-b border-black">View</li>
          <li className="border-b border-black">Book</li>
        </ul>
        <div className="flex flex-col">
          <button className="my-6">Search</button>
          <button>Account</button>
        </div>
        <div className="flex justify-between my-6">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
          <FaPinterest className="icon" />
          <FaYoutube className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
