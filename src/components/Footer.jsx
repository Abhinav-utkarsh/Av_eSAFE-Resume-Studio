import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-2 text-center flex flex-col items-center justify-center gap-1.5 bg-white/60 backdrop-blur-2xl backdrop-saturate-150 border-t border-white/40 relative z-50 overflow-hidden shadow-[0_-4px_30px_rgba(0,0,0,0.05)] print:hidden text-gray-800"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-70"></div>
      
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="inline-flex items-center justify-center gap-0.5 px-1.5 py-px rounded-full bg-white/50 border border-gray-200/50 shadow-sm hover:bg-white transition-colors cursor-default"
      >
        <span className="text-[8px] font-medium text-gray-600 tracking-wide">
          Designed & Engineered with
        </span>
        <motion.span 
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-red-500 text-[10px] mx-px"
        >
          ❤️
        </motion.span>
        <span className="text-[8px] font-medium text-gray-600 tracking-wide">by</span>
        <span className="text-transparent text-[8px] bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 font-extrabold ml-0.5">
          Abhinav Utkarsh
        </span>
      </motion.div>

      <p className="text-xs font-medium text-gray-500 tracking-widest ">
        &copy; {new Date().getFullYear()} Av_eSAFE. All Rights Reserved.
      </p>
    </motion.footer>
  );
}