
import React from 'react';
import Hero from '../Hero/Hero';
import Section from '../Section/Section';
import Pin from '../Pin/Pin'

const Homepage = () => {
  return (
  <>
  <Hero />
  <Section />
  <Pin />
  </>
  )
}

export default Homepage
























// import { useEffect, useState } from "react";
// import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
// import "./Homepage.css";

// // Components
// import Header from "../Header";
// import Banner from "../Banner";
// import Loader from "../Loader";

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loading
//       ? document.querySelector("body").classList.add("loading")
//       : document.querySelector("body").classList.remove("loading");
//   }, [loading]);

//   return (
//     <AnimateSharedLayout type='crossfade'>
//       <AnimatePresence>
//         {loading ? (
//           <motion.div key='loader'>
//             <Loader setLoading={setLoading} />
//           </motion.div>
//         ) : (
//           <>   
//             <Header />
//             <Banner />
//             {!loading && (
//               <div className='transition-image final'>
//                 <motion.img
//                   transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
//                   src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
//                   layoutId='main-image-1'
//                 />
//               </div>
//             )}
//           </>
//         )}
//       </AnimatePresence>
//     </AnimateSharedLayout>
//   );
// }

// export default App;

