import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import ReactMapGL, {Marker,Popup} from 'react-map-gl';
import RoomIcon from '@mui/icons-material/Room';
import Mapvid from '../Video/explore.mp4'
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import { format } from 'timeago.js'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

 
const MapPage = () => {
  const [pins, setPins] = useState([])
   const [pinid, setPinid] = useState(null)
   const [newplace, setNewplace] = useState(null)
   const [location, setLocation ] = useState(null)
   const [caption, setCaption ] = useState(null)
   const [rating, setRating ] = useState(0)

  useEffect(()=>{  
    const getPins = async()=>{
       try{
          const res = await axios.get("/api/pins")
          setPins(res.data)
       }catch(err){
         console.log(err)  
       }
    }
    getPins()
  })
  const cuurentUser = "Tonia";
    const [viewport, setViewport] = useState({   
        width: "100vw",
        height: "100vh",
        latitude: 6.5227,
        longitude: 3.6218,
        zoom: 6
      });
      const handleClick =(id,lat,long)=>{
        setPinid(id)
        setViewport({...viewport, latitude:lat, longitude:long})
      }
      const handleAddClick = (e)=>{
         //getting lon and lat properties from the event object
         const [long, lat ] = e.lngLat;
         setNewplace({
           long,
           lat,
         })
      }
      const handleSubmit = async (e)=>{
        e.preventDefault()
        const newPin = {
          postedBy:cuurentUser,
          location,
          caption,
          rating,
          lat:newplace.lat,
          long:newplace.long
        }
        //send details to the api..
        try{
         const res = await axios.post('/api/pins', newPin);
         //pass it onto existing pins 
         setPins([...pins, res.data])
         //hide the form on submit...
         setNewplace(null)
        }catch(err){
          console.log(err)
        }
      }
    return (
        <div>
           <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/sarmueil/ckvo7ol5wm4u515mpfkeb47na"
      onDblClick={handleAddClick}
      transitionDuration="200"
    >
      {pins.map((pin)=>(
         <div key={pin._id}>
         <Marker latitude={pin.lat} longitude={pin.long} offsetLeft={-viewport.zoom * 3.5} offsetTop={-viewport.zoom * 7}>
       <RoomIcon style={{fontSize:viewport.zoom * 7, color: pin.postedBy === cuurentUser ? "black":"red", cursor:'pointer'}} onClick={()=>handleClick(pin._id,pin.lat,pin.long)}/>
      </Marker>
      {pin._id === pinid && (
        <Popup
        latitude={pin.lat}  
        longitude={pin.long}
        closeButton={true}
        closeOnClick={false}
        onClose={()=>setPinid(null)}
        anchor="left" >
          <div className="flex justify-center items-center flex-col">
        <div className="bg-transparent rounded-2xl h-96" style={{width:'40vw'}}>    
           <div className="bg-black w-full rounded-xl" >
            <video autoPlay loop className="object-contain h-96"> 
            <source src={Mapvid} type="video/mp4"/>
            </video>
           </div> 
        </div>
        <div className="bg-white pt-3 pb-3" style={{width:'40vw'}}>
             <div className="h-full">
               <div className="flex justify-between items-center">
                    <div className="flex items-center">
                       <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                       <h3 className="text-base tracking-wide ml-2 text-black">{pin.postedBy}</h3>
                    </div>
                    <MoreHorizIcon />
               </div>
               <p className="text-sm tracking-wide ml-10 text-black">{pin.location}</p>
                <p className="text-base tracking-wide ml-2 text-black mt-3">{pin.caption}</p>
                <div className="flex justify-between items-center">
                <div className="flex items-center mt-3">
                  {Array(pin.rating).fill(<StarIcon style={{color:'gold'}}/>)}
                </div>
                   <h3 className="text-base mr-4">{format(pin.createdAt)}</h3>
                </div>
             </div>
           </div>
        </div>
      </Popup>
      )}
        </div>
      ))}
      {newplace && (
         <Popup
         latitude={newplace.lat}  
         longitude={newplace.long}
         closeButton={true}
         closeOnClick={false}
         onClose={()=>setNewplace(null)}
         anchor="left" >
           <div className="flex justify-center items-center flex-col">
           <div className="bg-transparent rounded-2xl" style={{width:'35vw', height:'65vh'}}>
               <div className="flex justify-between items-center p-4 rounded-lg">
                 <h1 className="text-3xl font-semibold tracking-wide text-black">Create New Pin</h1>
                  <img src="/images/map-red.png" alt="map-pin" style={{width:'6rem', height:'6.5rem'}}/>
               </div>
           <form onSubmit={handleSubmit}>
               <TextField fullWidth label="Location" id="fullWidth" style={{marginBottom:'0.5rem'}} onChange={(e)=>setLocation(e.target.value)}/>
               {/* <TextField fullWidth label="Add file" id="fullWidth" style={{marginBottom:'0.5rem'}}/> */}
               <input type="file" placeholder="choose file" />
               <TextField label="Caption" fullWidth id="outlined-multiline-static" multiline rows={4} id="outlined-multiline-flexible" style={{marginRight:'1.5rem'}} onChange={(e)=>setCaption(e.target.value)}/>
               <InputLabel id="demo-simple-select-label">Rating</InputLabel>
               <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Rating" style={{width:'8rem'}} onChange={(e)=>setRating(e.target.value)}>
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                     <MenuItem value={3}>Three</MenuItem>
                     <MenuItem value={4}>Four</MenuItem>
                     <MenuItem value={5}>Five</MenuItem>
               </Select>
               <button className="text-white font-poppins text-base tracking-wide w-32 bg-black font-medium p-3 cursor-pointer text-center rounded-full ml-5" type='submit'>Add Pin</button>
           </form>
           <p className="text-black text-base tracking-wide mt-2 ">Click on the red map pin above to create your pin</p>
           </div>
           </div>
         </Popup>
      )}
       

       {/* header */}
       <div className="flex justify-between items-center sticky top-0 w-full z-90">
                    <div className="flex items-center w-1/2">
                      <Link to ='/'>
                        <motion.div className="flex justify-between items-center" initial={{y:-250}} animate={{y:0}} transition={{delay:1, duration:1.5}}>
                             <RoomIcon style={{fontSize:'4rem', color:'black'}} className="mt-4 mb-7"/>
                            <img src='/images/retinab.png' alt="gridhouse-logo" className=" mt-4 mb-7 cursor-pointer"/>
                        </motion.div>
                        </Link>
                    </div>
                    <div className="items-center cursor-pointer mr-8 hidden md:flex">
                        <div className="flex justify-center items-center bg-white p-2 rounded-xl">
                             <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                             <h3 className="text-base text-black ml-2">Hello {cuurentUser}</h3>
                        </div>
                        <h3 className="text-white font-poppins text-xl tracking-wide bg-black pt-2 pb-2 pr-3 pl-3 ml-5 rounded-lg transition-all duration-500">Log Out</h3>
                    </div>
                 </div>
    </ReactMapGL>
        </div>
    )
}

export default MapPage
