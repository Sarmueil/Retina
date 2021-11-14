import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Homepage from './components/Homepage/Homepage'
import MapPage from './components/MapPage/MapPage';

function App() {
  return (
    <div className="App">
       <Routes>
     {/* page-landing */}
     <Route path="/" element={<Homepage />}/>
     {/* map-page */}
     <Route path="/map" element={<MapPage />}/>
     </Routes>

    </div>
  );
}    

export default App;
 