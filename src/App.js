import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TableFormat from './Components/TableFormat';
import Refer from "./Components/Refer";
import Overview from "./Components/OverView";
import Profile from "./Components/Profile";
import Graph from "./Components/GraphFormat";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/refer" element={<Refer />} />
        <Route path="/graph" element={<Graph />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/table" element={<TableFormat />} />
        <Route path="/" element={<Overview />} />
      </Routes>
      
   </>
    
    
  );
}

export default App;