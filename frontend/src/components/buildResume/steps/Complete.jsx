import React from 'react'
import { easeInOut, motion } from "framer-motion"

function Complete() {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className='container mb-10 bg-[url("/images/form/form_bg.png")] bg-cover bg-center w-full gap-0 flex flex-col justify-between items-center font-poppins rounded-3xl overflow-hidden p-10'>

      <div className="row w-full gap-20 mb-5 justify-start flex flex-col items-center ">
       
          <div className='heading text-white text-2xl mb-10 '>Please wait...</div>
          <div className='text-white text-2xl '>We are building your resume...</div>
    

      </div>
      


    </motion.div>
  )
}

export default Complete
