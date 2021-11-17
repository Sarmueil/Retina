import React, {useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"
import axios from "axios"
import './Hero.css'
import RoomIcon from '@mui/icons-material/Room';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Login from '../Login/Login'


// import MenuIcon from '@mui/icons-material/Menu';


  
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Hero = () => {
  const myStorage = window.localStorage;
  const [currentUsername, setCurrentUsername] = useState(myStorage.getItem("user"));
  const [currentUserimage, setCurrentUserimage] = useState(myStorage.getItem("user_image"));
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openlog, setOpenlog] = React.useState(false);
  const handleOpenlog = () => setOpenlog(true);
  const handleCloselog = () => setOpenlog(false);

  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword] = useState("")
  const [ image, setImage ] = useState("")
  const [avatarurl, setAvatarurl ] = useState("")
 
  //avatar??
 const [success, setSuccess] = useState(false);
 const [error, setError] = useState(false);
//  const [showlogin , setShowlogin ]= useState(false);

const postImage =()=>{
  const data = new FormData()
  data.append('file',image)
  data.append('upload_preset',"retina")
  data.append('cloud_name', "sarmueil")
  fetch("https://api.cloudinary.com/v1_1/sarmueil/image/upload", {
    method:'post',
    body:data
  }).then(res=> res.json())
   .then(data=>{
    setAvatarurl(data.url)
   })
   .catch(err=>{
     console.log(err)
   })
}

 const handleSubmit = async(e)=>{
   e.preventDefault()
   const newUser = {
     username:name,
     email:email,
     password:password,
     avatar:avatarurl,
     //avatar??
   }
   console.log(newUser)
   try{
    await axios.post('/api/user/signup', newUser);
   
      setSuccess(true)
   }catch(err){
     console.log(err)
        setError(true)
   }
 }



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
                        {/* <h3 className="text-white font-poppins text-lg tracking-wide mr-5 pt-2 pb-2 pr-6 pl-6 rounded-sm border-2 border-gray-200 ">Log In</h3> */}
                        <Login myStorage={myStorage} setCurrentUsername={setCurrentUsername} setCurrentUserimage={setCurrentUserimage}/>
                        <h3 className="text-yellow-600 font-poppins text-xl tracking-wide bg-gray-50 pt-2 pb-2 pr-6 pl-6 rounded-sm transition-all duration-500 hover:bg-transparent hover:border-gray-200 hover:text-white"onClick={handleOpen}>Join</h3>
                    </div>
                 </div>   
                 

                 <div className="absolute top-80 text-center w-full z-20">
                      <motion.h1 className="text-yellow-600 font-extrabold" initial={{x:'-100vw', opacity:0}} animate={{fontSize:'7rem', color:'white', x:0, opacity:1}} transition={{duration:1.5}}>Pin It Share It</motion.h1>
                      <h3 className="text-white font-poppins text-xl tracking-wide bg-yellow-500 font-medium pt-3 pb-3 pl-12 pr-12 cursor-pointer uppercase text-center rounded-full" style={{position:'absolute', left:'37rem'}} onClick={handleOpen}>Get started</h3>
                 </div> 
                 
                 <motion.div style={{position:'absolute', left:'60rem', top:'7rem'}} className="cursor-pointer"><motion.img drag dragConstraints={{left:100, top:100, bottom:100, right:10}} src="/images/map-red.png" style={{width:'200px', height:'200px'}} initial={{y:-250, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:1, duration:1.5}}/> </motion.div>
                 {/* <motion.div style={{position:'absolute', left:'70rem', top:'20rem'}} className="cursor-pointer"><motion.img drag dragConstraints={{left:100, top:100, bottom:100,right:10}} src="/images/map-red.png" style={{width:'200px', height:'200px'}} initial={{y:-250, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:3, duration:1.5}}/> </motion.div> */}
                 <motion.div style={{position:'absolute', left:'70rem', top:'20rem'}} className="cursor-pointer"><motion.img drag dragConstraints={{left:100, top:100, bottom:20, right:0}} src="/images/map-red.png" style={{width:'200px', height:'200px'}} initial={{y:-250, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:5, duration:1.5}}/> </motion.div>
           </div>

           {/* sign up modal */}
           <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
              <div className="flex justify-center items-center flex-col">
              {success && <p className="text-base text-green-500 tracking-wide">Account sucessfully created, Please Log in</p>}
              {error && <p className="text-base text-red-500 tracking-wide">Something went wrong, please try again</p>} 
              <div className="flex justify-between items-center p-4 rounded-lg">
                 <h1 className="text-3xl font-semibold tracking-wide text-black">Create New Account</h1>
                  <img src="/images/map-red.png" alt="map-pin" style={{width:'6rem', height:'6.5rem'}}/>
               </div>
              <form onSubmit={handleSubmit}>
               <TextField fullWidth label="Username" style={{marginBottom:'0.5rem'}} onChange={(e)=>setName(e.target.value)}/>
               <TextField fullWidth label="Email" style={{marginBottom:'0.5rem'}} onChange={(e)=>setEmail(e.target.value)}/>
               <TextField fullWidth label="Password"  style={{marginBottom:'0.5rem'}} onChange={(e)=>setPassword(e.target.value)}/>
               <button className="text-white font-poppins text-base tracking-wide mt-5 bg-black font-medium p-3 cursor-pointer text-center rounded-full" type='submit'>Create Account</button>
           </form>
           <div style={{border:'1px solid black', padding:'0.4rem'}}>
                 <button className="text-gray-800" onClick={()=>postImage()}>Upload Image</button>
               <input type="file" placeholder="Upload display picture" className="cursor-pointer" onChange={(e)=>setImage(e.target.files[0])}/>
                 </div>
           <p className="mt-3">Already have an account<span className="text-red-500 ml-3 cursor-pointer" onClick={handleOpenlog}>Log in</span></p>
              </div>
          </Box>
        </Fade>
      </Modal>
    </div>
        </header>
    )
}

export default Hero