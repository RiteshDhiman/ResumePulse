import React, { useContext } from 'react'
import { StepBarContext } from '../contexts/StepBarContext'
import { easeInOut, motion } from "framer-motion"

function ChooseTemplates() {
  const { data, setData, currentStep, handleStep } = useContext(StepBarContext);
  const handleChange = (e) => {
    const { field, value } = e.target;
    setData({ ...data, [field]: value });
  };

  const templates = [
    "/images/templates/template1.png",
    "/images/templates/template1.png",
    "/images/templates/template1.png",
    "/images/templates/template1.png",
    "/images/templates/template1.png",
    "/images/templates/template1.png",
    "/images/templates/template1.png",
    "/images/templates/template1.png",
    "/images/templates/template1.png",
    "/images/templates/template1.png",
    "/images/templates/template1.png",
    "/images/templates/template1.png",
  ]


  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }} className='text-white h-full w-full'>
        <div className='w-full mb-2 px-10 flex justify-between items-center'>
          <button onClick={() => handleStep('')} className={`' bg-white text-black py-2 px-4 rounded-full font-semibold cursor-pointer ${currentStep == 1 ? ' bg-opacity-50 cursor-not-allowed' : 'hover:bg-[#ababab] transition duration-300 ease-in-out active:bg-[#454545] active:text-white'} `}>Back</button>
          <button onClick={() => handleStep('next')} className='bg-[#66A947] text-white py-2 px-4 rounded-full font-semibold cursor-pointer hover:bg-[#3f6c2a] transition duration-300 ease-in-out active:bg-[#264d14] '>Save and Continue</button>
        </div>
      <div className="grid grid-cols-1 px-[4vw] md:p-0 gap-6 md:gap-6 md:grid-cols-2 lg:grid-cols-3 w-full ">
          {templates.map((template, index)=><div key={index}><img src={template} alt="template" /></div>)}  
      </div>

        

    </motion.div>
  )
}

export default ChooseTemplates
