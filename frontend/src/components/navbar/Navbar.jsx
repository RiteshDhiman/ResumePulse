import React, { useState } from "react";
import '../navbar/navbarcss.scss';
import { RiMenuLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion'

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
      <div className="h-[80px] bg-[#000726] md:flex justify-center items-center ">
        <div className="h-full mx-auto w-11/12 flex justify-between md:justify-center items-center ">

          <div className="w-1/3 md:w-2/12 h-full text-white flex items-center justify-center">
            <div className="w-1/3 h-full flex">
              <Link to={'/'}>
                <img src="/images/resume__logo.png" className="h-full w-full" />
              </Link>
            </div>
              <div className="font-krona ">
                <span className="text-md">Resume</span>
                <span className="text-[#80d459]">Pulse</span>
              </div>
          </div>

          <div className="w-10/12 h-full text-white font-semibold hidden md:flex justify-around items-center font-poppins md:text-xl">
            <a href="/"><div>Home</div></a>
            <Link to="about"><div>About</div></Link>
            <Link to="build"><div>Create</div></Link>
            <div className="centering rounded-full bg-[#66A947] w-[150px] h-3/5 text-lg font-medium hover:cursor-pointer" onClick={handleClick}>Log in/Signup</div>
          </div>

          {/* Hidden Hamburger Menu */}
          <div className="flex md:hidden h-full items-center justify-end gap-6">
            <div className="centering rounded-full bg-[#66A947] w-[150px] h-3/5 text-lg font-medium hover:cursor-pointer text-white" onClick={handleClick}>Log in/Signup</div>
            <RiMenuLine className="text-white text-2xl cursor-pointer" onClick={handleMenu}/>
          </div>
        </div>

      </div>
      <AnimatePresence>
        {menu && 
          <motion.div
            className="md:hidden h-[60px] bg-[#000726] border-b-[1px] border-t-[1px] border-white w-full absolute"
            initial={{ opacity: 0, y:-20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full justify-around py-5 text-center flex gap-3">
              <Link to={'/'}><div className="font-krona text-white">Home</div></Link>
              <Link to={'about'}><div className="font-krona text-white">About Us</div></Link>
              <Link to={'build'}><div className="font-krona text-white">Create</div></Link>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>
  );
};

export default Navbar;
