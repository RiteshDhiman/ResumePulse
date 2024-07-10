import React, { useState } from "react";
import '../navbar/navbarcss.scss';
import { RiMenuLine } from "react-icons/ri";

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
            <img className="h-full" src="/images/google.png" alt="" />गूगल भारत ❤️
          </div>

          <div className="w-10/12 h-full text-white font-semibold hidden md:flex justify-around items-center font-poppins md:text-xl">
            <a href="/"><div>Home</div></a>
            <a href="about"><div>About</div></a>
            <a href="templates"><div>Templates</div></a>
            <div className="centering rounded-full bg-[#66A947] w-[150px] h-3/5 text-lg font-medium hover:cursor-pointer" onClick={handleClick}>Log in/Signup</div>
          </div>

          {/* Hidden Hamburger Menu */}
          <div className="flex md:hidden h-full items-center justify-end gap-6">
            <div className="centering rounded-full bg-[#66A947] w-[150px] h-3/5 text-lg font-medium hover:cursor-pointer" onClick={handleClick}>Log in/Signup</div>
            <RiMenuLine className="text-white text-2xl" onClick={handleMenu}/>
          </div>
        </div>

      </div>
      {menu && 
      <div className="h-[150px] bg-[#000726] border-b-[1px] border-t-[1px] border-white w-full absolute">
        <div className="w-1/3 mx-auto py-5 text-center flex flex-col gap-3">
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
