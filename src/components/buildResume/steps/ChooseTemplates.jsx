import React, { useContext } from 'react'
import { StepBarContext } from '../contexts/StepBarContext'
import { easeInOut, motion } from "framer-motion"

function ChooseTemplates() {
  const { data, setData } = useContext(StepBarContext);
  const handleChange = (e) => {
    const { field, value } = e.target;
    setData({ ...data, [field]: value });
  };


  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }} className='text-white h-full w-full flex justify-between items-center'>
      <div className="template-grid w-full flex flex-col justify-evenly gap-10 items-center">
        <div className='row flex justify-between gap-10 items-center'>
          <div className='w-1/2 cursor-pointer hover:border-2 border-green-500'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
          <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
          <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
        </div>
        <div className='row flex justify-between gap-10 items-center'>
          <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
          <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
          <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
        </div>
        <div className='row flex justify-between gap-10 items-center'>
          <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
          <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
          <div className='w-1/2'><img src="/images/templates/template1.png" alt="" srcset="" /></div>
        </div>
      </div>

    </motion.div>
  )
}

export default ChooseTemplates
