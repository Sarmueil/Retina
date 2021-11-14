import React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, {Marker,Popup} from 'react-map-gl';
import RoomIcon from '@mui/icons-material/Room';
import Mapvid from '../Video/explore.mp4'
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import { format } from 'timeago.js'

 
const MapPage = () => {
  const [pins, setPins] = useState([])

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
    const [viewport, setViewport] = useState({   
        width: "100vw",
        height: "100vh",
        latitude: 6.5227,
        longitude: 3.6218,
        zoom: 5
      });
    return (
        <div>
           <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/sarmueil/ckvo7ol5wm4u515mpfkeb47na"
    >
      {pins.map((pin)=>(
         <div key={pin._id}>
         <Marker latitude={pin.lat} longitude={pin.long} offsetLeft={-20} offsetTop={-10}>
       <RoomIcon style={{fontSize:viewport.zoom * 7, color:"red"}} />
      </Marker>
      <Popup
          latitude={pin.lat}  
          longitude={pin.long}
          closeButton={true}
          closeOnClick={false}
          anchor="left" >
            <div className="flex justify-center items-center flex-col">
          <div className="bg-transparent rounded-2xl h-96" style={{width:'40vw'}}>    
             <div className="bg-black w-full rounded-xl" >
              <video autoPlay loop muted className="object-contain h-96">
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
                     <StarIcon style={{color:'gold'}}/>
                     <StarIcon style={{color:'gold'}}/>
                     <StarIcon style={{color:'gold'}}/>
                     <StarIcon style={{color:'gold'}}/>  
                     <StarIcon style={{color:'gold'}}/>
                  </div>
                     <h3 className="text-base mr-4">{format(pin.createdAt)}</h3>
                  </div>
               </div>
             </div>
          </div>
        </Popup>
        </div>
      ))}
      
    </ReactMapGL>
        </div>
    )
}

export default MapPage
