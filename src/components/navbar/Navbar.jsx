import React, { useState } from "react";
import '../navbar/navbarcss.scss';

const Navbar = ({loginClick, whetherLogin}) => {

  const handleClick = () => {
    {loginClick()}
    whetherLogin();
  }

  return (
    <div className="h-[70px] bg-[#000726] flex justify-center items-center">
      <div className="h-full w-11/12 flex justify-center items-center">
        <div className="w-2/12 h-full text-white flex items-center"><img className="h-full" src="/images/google.png" alt="" />गूगल भारत ❤️</div>
        <div className="w-10/12 h-full text-white font-semibold flex justify-around items-center font-poppins md:text-xl">
          <a href="/"><div>Home</div></a>
          <a href="about"><div>About</div></a>
          <a href="templates"><div>Templates</div></a>
          <div className="centering rounded-full bg-[#66A947] w-[150px] h-3/5 text-lg font-medium hover:cursor-pointer" onClick={handleClick}>Log in/Signup</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
