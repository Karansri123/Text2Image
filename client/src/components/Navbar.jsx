import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";

import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Navbar = () => {

  const {user,setShowLogin} = useContext(AppContext);

  const navigate = useNavigate();
  return (
    <div className="flex item-center justify-between py-4">
      <Link to="/" className="flex items-center gap-2 ">
        <img
          src="/favicon.png"
          alt="Logo"
          className="w-8 sm:w-10 lg:w-12 object-contain"
        />{" "}
        <h2 className="font-semibold text-2xl">Text2Image</h2>
      </Link>

      <div>
        {user ? (
          <div className="flex items-center sm:gap-3">
            <button onClick={()=>{
              navigate('/buy')
            }} className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700">
              <img className="w-5" src={assets.credit_star} alt="" />
              <p className="text-xm sm:text-sm font-medium text-gray-600">Credit left: 10</p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4">Hi there, KS!</p>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="user image"
                className="w-10 drop-shadow"
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10 ">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              onClick={() => {
                navigate("/buy");
              }}
              className="cursor-pointer"
            >
              Pricing
            </p>
            <button onClick={()=>setShowLogin(true)} className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
