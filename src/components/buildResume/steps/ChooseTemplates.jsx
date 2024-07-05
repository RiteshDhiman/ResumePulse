import React, { useContext } from 'react'
import { StepBarContext } from '../contexts/StepBarContext'
import { easeInOut, motion } from "framer-motion"

function ChooseTemplates() {
  const {data, setData} = useContext(StepBarContext);
  const handleChange=(e)=>{
    const {field, value} = e.target;
    setData({...data, [field]:value});
  };


  return (
    <motion.div
    initial={{ x: 200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeInOut" }} className='text-white h-full'>
      HEH templates
      
    </motion.div>
  )
}

export default ChooseTemplates
