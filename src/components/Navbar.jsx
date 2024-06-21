import React, {useState} from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

function Navbar() {

  const [nav, setNav] = useState(false);

  return (
    <div className="mx-auto max-w-[1640px] flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>{" "}
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black rounded-full  text-white p-2">Delivery</p>
          <p className="p-2">Pick Up</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          className="bg-transparent p-2 w-full focus:outline-none "
          placeholder="Search foods"
        />
      </div>

      {/* Cart button */}
      <button className=" bg-black text-white hidden md:flex rounded-full items-center py-2">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* Mobile Menu */}

      {/* Overlay effect */}
      {nav && (
        <div className="bg-black/80 fixed w-full h-screen left-0 z-10 top-0"></div>
      )}
        
      
      {/* Side drawer menu */}
      {/* <div className={nav ? 'fixed top-0 left-0 bg-white w-[300px] h-screen transition-all duration-300 z-10' : 'fixed top-0 left-[-100%] bg-white w-[300px] h-screen duration-300 z-10' }> */}
      <div className={`fixed top-0 left-0 bg-white w-[300px] h-screen z-10 transition-all duration-300 ${nav ? 'left-0' : 'left-[-100%]'}`}>
        <AiOutlineClose onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>

        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex ">
              <TbTruckDelivery size={25} className="mr-4"/> Orders
            </li>
            <li className="text-xl py-4 flex mr-4 ">
              <MdFavorite size={25} className="mr-4"/> Favorites
            </li>

            <li className="text-xl py-4 flex mr-4 ">
              <FaWallet size={25}className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex mr-4 ">
              <MdHelp size={25} className="mr-4"/> Help
            </li>
            <li className="text-xl py-4 flex mr-4 ">
              <AiFillTag size={25}className="mr-4" /> Promotions
            </li>

            <li className="text-xl py-4 flex ">
              <BsFillSaveFill size={25} className="mr-4 " /> Best Ones
            </li>

            <li className="text-xl py-4 flex mr-4 ">
              <FaUserFriends size={25} className="mr-4"/> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
