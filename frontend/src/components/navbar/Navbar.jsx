import React, { useState } from "react";
import '../navbar/navbarcss.scss';
import { RiMenuLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = ({loginClick, whetherLogin}) => {

  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    {loginClick()}
    whetherLogin();
  }

  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <>
      <div className="h-[70px] bg-[#000726] md:flex justify-center items-center ">
        <div className="h-full mx-auto w-11/12 flex justify-between md:justify-center items-center ">

          <div className="w-1/3 md:w-2/12 h-full text-white flex justify-center items-center">
            <a className = 'h-full' href="/"><img className="h-full" src="/images/signup/google.png" alt="" /></a>
            <div className="flex flex-col font-poppins">
            <div>Resume</div>
            <div>Pulse</div>
            </div>
          </div>

          <div className="w-10/12 h-full text-white font-semibold hidden md:flex justify-around items-center font-poppins md:text-xl">
            <a href="/"><div>Home</div></a>
            <Link to="about"><div>About</div></Link>
            <Link to="templates"><div>Templates</div></Link>
            <div className="centering rounded-full bg-[#66A947] w-[150px] h-3/5 text-lg font-medium hover:cursor-pointer" onClick={handleClick}>Log in/Signup</div>
          </div>

          {/* Hidden Hamburger Menu */}
          <div className="flex md:hidden h-full items-center justify-end gap-6">
            <div className="centering rounded-full bg-[#66A947] w-[150px] h-3/5 text-lg font-medium hover:cursor-pointer text-white" onClick={handleClick}>Log in/Signup</div>
            <RiMenuLine className="text-white text-2xl" onClick={handleMenu}/>
          </div>
        </div>

      </div>
      {menu && 
      <div className="h-[60px] bg-[#000726] border-b-[1px] border-t-[1px] border-white w-full absolute">
        <div className="w-full justify-around py-5 text-center flex gap-3">
          <a href="/"><div className="font-krona text-white">Home</div></a>
          <a href="about"><div className="font-krona text-white">About</div></a>
          <a href="templates"><div className="font-krona text-white">Templates</div></a>
        </div>
      </div>
      }
    </>
  );
};

export default Navbar;
