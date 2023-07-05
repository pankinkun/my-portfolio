 import React from 'react'
 import { motion } from 'framer-motion'
 
 const Footer = () => {
   return (
     <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
     className="w-full flex items-center justify-center p-8">
        Developed with care by Trique Nguyen &copy; {new Date().getFullYear()} 
     </motion.div>
   )
 }
 
 export default Footer