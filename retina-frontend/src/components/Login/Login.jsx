import React, {useState } from 'react'
import { motion } from 'framer-motion'
import { Link, Navigate} from "react-router-dom"
import { Redirect } from 'react-router'
import axios from "axios"
import RoomIcon from '@mui/icons-material/Room';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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




 const Login = ({ myStorage,setCurrentUsername }) => {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState(false);
    const [ logname, setLogname ] = useState("")
    const [ logpassword, setLogpassword] = useState("")

    const [success, setSuccess] = useState(false);
 const [error, setError] = useState(false);
    const handleSubmitlog = async(e)=>{
        e.preventDefault()
        const user = {
          username:logname,
          password:logpassword,
          //avatar??
        }
        console.log(user)
        try{
         const res = await axios.post('/api/user/login',user);
         console.log(res.data)
         myStorage.setItem('user', res.data.username);
         setCurrentUsername(res.data.username)
           setSuccess(true)
        }catch(err){
          console.log(err)
             setError(true)
        }
      }
     return (
         <div>
             {/* login modal */}
 <div>
 <h3 onClick={handleOpen} className="text-white font-poppins text-lg tracking-wide mr-5 pt-2 pb-2 pr-6 pl-6 rounded-sm border-2 border-gray-200 ">Log in</h3>
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
 {success && (<Navigate to="/map"/>)}
 {error && <p className="text-base text-red-500 tracking-wide">Something went wrong, please try again</p>} 
 <div className="flex justify-between items-center p-4 rounded-lg">
    <h1 className="text-3xl font-semibold tracking-wide text-black mr-20">Log in</h1>
     <img src="/images/map-red.png" alt="map-pin" style={{width:'6rem', height:'6.5rem'}}/>
  </div>
 <form onSubmit={handleSubmitlog}>
  <TextField fullWidth label="Username" id="fullWidth" style={{marginBottom:'0.5rem'}} onChange={(e)=>setLogname(e.target.value)}/>
  <TextField fullWidth label="Password" id="fullWidth" style={{marginBottom:'0.5rem'}} onChange={(e)=>setLogpassword(e.target.value)}/>
  <button className="text-white font-poppins text-base tracking-wide mt-5 bg-black font-medium p-3 cursor-pointer text-center rounded-full" type='submit'>Log in</button>
</form>
{/* <p className="mt-3">Don't have an account?<span className="text-red-500 ml-3" onClick={handleOpen}>Sign Up</span></p> */}
 </div>
          </Box>
        </Fade>
      </Modal>
</div>
         </div>
     )
 }
 
 export default Login
 
 

 
 