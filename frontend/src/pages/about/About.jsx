import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";
import {people} from './people.js'
import '../../components/herobanner/star.scss';

const AboutUs = () => {

  return (
    <div className="h-screen bg-gradient-to-b from-[#000931] to-[#00020C] text-white flex flex-col items-center">

      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      
      <div className="w-full flex justify-center py-12">
        <div className="w-3/5 md:w-4/5 sm:flex sm:flex-col md:flex-row md:flex md:justify-center md:items-center">
          <div className="text-center md:hidden font-krona text-2xl md:text-4xl">About Us</div>
          <div className="w-full md:w-1/2">
            <img src="/images/danalitic.png" alt="" className="w-5/6 lg:w-2/3 mx-auto"/>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-4 lg:gap-5">
            <p className="hidden md:block font-krona text-2xl md:text-4xl">About Us</p>
            <p className="w-full lg:w-4/5 font-krub text-sm md:text-lg lg:text-xl ">
              Danalitic is a software company that has earned its place as a
              Google Cloud and AWS partner by delivering innovative solutions
              in the fields of data analytics, financial data modelling,
              artificial intelligence, and machine learning.
            </p>
            <p>Registered Office : World Trade Center, Level 9 ,2nd Floor, Kharadi, Pune–– 411014, M.H.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-10">
        <div className="w-full text-center font-krona text-2xl md:text-4xl">Our Team </div>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
