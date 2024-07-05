import React from 'react'
import { easeInOut, motion } from "framer-motion"

function Complete() {
  return (
    <motion.div
    initial={{ x: 200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}>
      
    </motion.div>
  )
}

export default Complete
