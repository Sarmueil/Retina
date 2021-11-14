import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'
import RoomIcon from '@mui/icons-material/Room';
// import MenuIcon from '@mui/icons-material/Menu';


  

const Hero = () => {
    return (
        <header className="p-0 m-0 bg-transparent relative w-full">
           <div className="brand_bg">
                 <div className="flex justify-between items-center sticky top-0 w-full z-90" >
                    <div className="flex items-center w-1/2">
                        <motion.div className="flex justify-between items-center" initial={{y:-250}} animate={{y:0}} transition={{delay:1, duration:1.5}}>
                             <RoomIcon style={{fontSize:'4rem', color:'white'}} className="mt-4 mb-7"/>
                            <img src='/images/retina.png' alt="gridhouse-logo" className=" mt-4 mb-7 cursor-pointer"/>
                        </motion.div>
                       <div className="items-center mt-9 ml-16 mb-7 hidden md:flex">
                            <h3 className="text-white font-poppins text-lg tracking-wide mr-6 cursor-pointer transition-all duration-500 hover:text-yellow-400">About</h3>
                            <h3 className="text-white font-poppins text-lg tracking-wide mr-6 cursor-pointer transition-all duration-500 hover:text-yellow-400">Explore</h3>
                            <h3 className="text-white font-poppins text-lg tracking-wide mr-6 cursor-pointer transition-all duration-500 hover:text-yellow-400">Experience</h3>
                            <h3 className="text-white font-poppins text-lg tracking-wide mr-6 cursor-pointer transition-all duration-500 hover:text-yellow-400">Blog</h3>
                       </div>
                    </div>
                    {/* <div>
                        <MenuIcon className="h-8 text-white mr-2 mt-2 md:hidden"/>
                    </div> */}
                    <div className="items-center cursor-pointer mr-8 hidden md:flex">
                        <h3 className="text-white font-poppins text-lg tracking-wide mr-5 pt-2 pb-2 pr-6 pl-6 rounded-sm border-2 border-gray-200 ">Log In</h3>
                        <h3 className="text-yellow-600 font-poppins text-xl tracking-wide bg-gray-50 pt-2 pb-2 pr-6 pl-6 rounded-sm transition-all duration-500 hover:bg-transparent hover:border-gray-200 hover:text-white ">Join</h3>
                    </div>
                 </div>   
                 

                 <div className="absolute top-80 text-center w-full z-20">
                      <motion.h1 className="text-yellow-600 font-extrabold" initial={{x:'-100vw', opacity:0}} animate={{fontSize:'7rem', color:'white', x:0, opacity:1}} transition={{duration:1.5}}>Pin It Share It</motion.h1>
                      <h3 className="text-white font-poppins text-xl tracking-wide bg-yellow-500 font-medium pt-3 pb-3 pl-12 pr-12 cursor-pointer uppercase text-center rounded-full" style={{position:'absolute', left:'37rem'}}>Get started</h3>
                 </div> 
                 
                 <motion.div style={{position:'absolute', left:'60rem', top:'7rem'}} className="cursor-pointer"><motion.img drag dragConstraints={{left:100, top:100, bottom:100, right:10}} src="/images/map-red.png" style={{width:'200px', height:'200px'}} initial={{y:-250, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:1, duration:1.5}}/> </motion.div>
                 {/* <motion.div style={{position:'absolute', left:'70rem', top:'20rem'}} className="cursor-pointer"><motion.img drag dragConstraints={{left:100, top:100, bottom:100,right:10}} src="/images/map-red.png" style={{width:'200px', height:'200px'}} initial={{y:-250, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:3, duration:1.5}}/> </motion.div> */}
                 <motion.div style={{position:'absolute', left:'70rem', top:'20rem'}} className="cursor-pointer"><motion.img drag dragConstraints={{left:100, top:100, bottom:20, right:0}} src="/images/map-red.png" style={{width:'200px', height:'200px'}} initial={{y:-250, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:5, duration:1.5}}/> </motion.div>
           </div>
        </header>
    )
}

export default Hero