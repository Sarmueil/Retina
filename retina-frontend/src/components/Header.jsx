import React from "react";
import { motion } from "framer-motion";
import './Homepage/Homepage.css'

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className='header'>
      <div className='header-inner'>
        <div className='logo'>Re<span className='logo' style={{color:'#00A8E8'}}>tina</span></div>
        <div className='contact'>
        <a href='#' className='links'>About</a>
         <a href='#'  className='links'>Log In</a>
          <a href='#' style={{fontSize:'2rem', backgroundColor:'#00A8E8'}} className='join'>Join</a>
        </div>
        <div className='hamburger-menu'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
