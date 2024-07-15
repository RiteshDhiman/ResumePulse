import React, { useContext } from 'react'
import { StepBarContext } from '../contexts/StepBarContext'
import { easeInOut, motion } from "framer-motion"

function ChooseTemplates() {
  const { data, setData } = useContext(StepBarContext);
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
      <div class="grid grid-cols-1 px-[4vw] md:p-0 gap-6 md:gap-6 md:grid-cols-2 lg:grid-cols-3 w-full ">
          {templates.map((template, index)=><div key={index}><img src={template} alt="template" /></div>)}  
        </div>

    </motion.div>
  )
}

export default ChooseTemplates
