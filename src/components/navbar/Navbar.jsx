import React, { useState } from "react";
import '../navbar/navbarcss.scss';

const Navbar = () => {

  const [show, setShow] = useState('');

  return (
    <div className="h-[70px] bg-[#000726] flex justify-center items-center">
      <div className="h-full w-11/12 flex justify-center items-center">
        <div className="w-2/12 bg-slate-300">dsf</div>
        <div className="w-10/12 h-full text-white font-semibold text-xl flex justify-around items-center font-poppins">
          <div>Home</div>
          <a href="/"><div>About</div></a>
          <div>Templates</div>
          <div className="centering rounded-full bg-[#66A947] w-[150px] h-3/5 text-lg font-medium">Log in/Signup</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
