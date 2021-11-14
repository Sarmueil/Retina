import React from 'react'
import { motion } from 'framer-motion'
import SecvideoA from '../Video/exploreA.mp4'
import SecvideoB from '../Video/exploreB.mp4'
import SecvideoC from '../Video/exploreC.mp4'
import SecvideoD from '../Video/exploreD.mp4'
import SecvideoE from '../Video/exploreE.mp4'
import SecvideoF from '../Video/exploreF.mp4'


const Pin = () => {
    return (
        <div className="w-full bg-black pt-10 pb-20">
            <motion.h1 className="text-center text-5xl text-white font-medium tracking-wide mb-9" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:8, duration:1}}>Explore trendy pins on Retina</motion.h1>
        <div className="flex justify-center items-center">
            <motion.div className="w-11/12 m-5 rounded-xl" initial={{x:-250, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:6, duration:1}}>
            <video autoPlay loop muted className="rounded-xl">
                      <source src={SecvideoA} type="video/mp4"/>
                  </video>
            </motion.div>
            <motion.div className="h-80 w-full m-6  rounded-xl flex justify-center items-center" initial={{x:-250, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:6, duration:1}}>
            <video autoPlay loop muted className="object-contain h-80 rounded-xl">
                      <source src={SecvideoB} type="video/mp4"/>
                  </video>
                  <video autoPlay loop muted className="object-contain h-80 rounded-xl">
                      <source src={SecvideoE} type="video/mp4"/>
                  </video>
            </motion.div>
            <motion.div className="h-80 w-full m-6 rounded-xl flex justify-center items-center" initial={{y:-250, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:7, duration:1}}>
            <video autoPlay loop muted className="object-contain h-80 rounded-xl">
                      <source src={SecvideoF} type="video/mp4"/>
                  </video>
                  <video autoPlay loop muted className="object-contain h-80 rounded-xl">
                      <source src={SecvideoC} type="video/mp4"/>
                  </video>
            </motion.div>
            <motion.div className=" w-11/12 m-5 rounded-xl" initial={{y:-250, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:7, duration:1}}>
            <video autoPlay loop muted className="rounded-xl">
                      <source src={SecvideoD} type="video/mp4"/>
                  </video>
            </motion.div>              
            </div>
            
            <div className="text-center mt-9">
                <h3 className="text-white text-2xl font-medium mb-6">Learn about the world on your most personal map.</h3>
                <button className="text-black font-poppins text-base tracking-wide w-32 bg-white font-medium p-3 cursor-pointer text-center rounded-full">Explore</button>
            </div>
            </div>
    )
}

export default Pin
