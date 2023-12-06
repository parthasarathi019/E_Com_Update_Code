import React from "react";
import logo from "../../../assets/Logos.png";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Menu from "./Menu";
import Searchbar from "./Searchbar";
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <>
      <div className=" flex items-center md:hidden justify-between px-3">
        <Link to='/'>
          <div className="">
            <img src={logo} alt="logo" className="w-[73px] h-[25px]" />
          </div>
        </Link>
        <div><Searchbar /></div>
        <FiShoppingCart className="text-2xl  text-[#f85606] hover:bg-black/10  cursor-pointer rounded-md" />
      </div>
      {/* navbar  */}
      <nav className="bg-primaryColor2 w-full py-4 sticky top-0 left-0 hidden  z-30  md:block">
        <div className="myContainer">
          <div className="flex items-center justify-between gap-3">
            {/* logo */}
            <Link to='/'>
              <div className="">
                <img src={logo} alt="logo" className="w-[113px] h-[34px]" />
              </div>
            </Link>

            {/* nav menu  */}
            <div className="">
              <Menu />
            </div>

            {/* search bar  */}
            <div className=" bg-white rounded-md px-2 py-[.35rem] flex items-center flex-1">
              <input
                type="text"
                placeholder="Search here"
                className=" border-none outline-none w-full h-full"
              />
              <CiSearch className="cursor-pointer text-primaryColor1 text-lg bg-primaryColorLight w-7 h-7 rounded-full p-1 font-bold" />
            </div>
            {/* profile */}
            <div className="flex items-center gap-2 font-semibold text-whiteText  capitalize ">
              {/* login  */}
              <Link to='/login' className="flex items-center  gap-1 text-lg font-semibold text-whiteText hover:bg-black/10  cursor-pointer p-2 rounded-md">
                <FaRegUser className="text-xl" />
                <span>login</span>
              </Link>

              {/* sign up  */}
              <Link to='/register'> <p className=" text-whiteText hover:bg-black/10  cursor-pointer p-2 rounded-md">
                Sign up
              </p> </Link>

              {/* cart  */}
              <FiShoppingCart className="text-4xl  text-whiteText hover:bg-black/10  cursor-pointer p-2 rounded-md" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
