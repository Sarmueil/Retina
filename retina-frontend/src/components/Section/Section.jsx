import React from 'react'
import Secvideo from '../Video/explore.mp4'
import { motion } from 'framer-motion'

const Section = () => {
    return (
        <div className="w-full bg-white">
            {/* about-header */}
            {/* <div className="mt-10 ml-10 mb-10 border-b-4 border-green-300 w-12">
               <h2 className="text-black font-poppins text-4xl tracking-wide mr-6 cursor-pointer mb-1">About</h2> 
            </div> */}
            <div className="flex justify-center items-center w-full pb-20">
              {/* about_text */}
              <motion.div className="flex-1 w-full ml-12 bg-black self-start mt-20" initial={{x:-250, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:4, duration:1}}>
                  <video autoPlay loop muted>
                      <source src={Secvideo} type="video/mp4"/>
                  </video>
              </motion.div>
              {/*  */}
            {/* about_imgae */}
            <div className="flex-1 w-2/3 mr-8 p-2">
                <motion.div className="mb-10 mt-20 ml-9" initial={{x:250, opacity:0}} animate={{x:0,opacity:1}} transition={{delay:3,duration:1.5}}>
                    <h1 className="text-black text-5xl font-medium mb-4">Share your travel experience with others</h1>
                    <p className="text-black text-lg mb-4 tracking-wide">Friends and family deserves to know what's bustling around you, don't you think? 😇 </p>
                    <h3 className="text-white font-poppins text-lg tracking-wide w-32 bg-black font-medium p-3 cursor-pointer text-center rounded-full">Share it</h3>
                </motion.div>
                <motion.img src="/images/aboutC.png" alt="image_section" className="-ml-20 mt-5" initial={{x:-250, opacity:0}} animate={{x:0,opacity:1}} transition={{delay:3,duration:1.5}}/>
            </div> 
            </div>
        </div>
    )
}

export default Section