import React, { useEffect } from 'react'
import { easeInOut, motion } from "framer-motion"
import { StepBarContext } from '../contexts/StepBarContext'
import { useContext } from 'react';
import { useSelector } from 'react-redux';


function Complete() {
  const { currentStep, handleStep } = useContext(StepBarContext);
  const sliceData = useSelector((state) => state.form)
  const personalData = sliceData.personal;


  return (
    <>
      <div className='w-full mb-6 px-10 flex justify-between items-center'>
        <button onClick={() => handleStep('')} className={`' bg-white text-black py-2 px-4 rounded-full font-semibold cursor-pointer ${currentStep == 1 ? ' bg-opacity-50 cursor-not-allowed' : 'hover:bg-[#ababab] transition duration-300 ease-in-out active:bg-[#454545] active:text-white'} `}>Back</button>
        <button className='bg-[#66A947] text-white py-2 px-4 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Submit</button>
      </div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className='container mb-10 bg-[url("/images/form/form_bg.png")] bg-cover bg-center w-full gap-0 flex flex-col justify-between items-center font-poppins rounded-3xl overflow-hidden p-10'>

        <div className="row w-full gap-20 mb-5 justify-start flex flex-col items-center ">

          <div className='heading text-white underline text-2xl'>Preview</div>
          <div className='heading text-white text-xl'>{personalData.name}</div>
          <div className='heading text-white text-xl'>{personalData.location}</div>

        </div>
      </motion.div>
    </>

  )
}

export default Complete
