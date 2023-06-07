import './custom.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import { Box } from "@mui/material";
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DifficultyExercises from './components/DifficultyExercises';
import MuscleExercises from './components/MuscleExercises';

function App() {

  return (
    <BrowserRouter>
        <Box style={{backgroundColor: 'var(--dark-color)'}}>
          <Navbar/>
        </Box>
        <Box>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/difficulty/:difficulty"  element={<DifficultyExercises/>}/>
            <Route path="/difficulty/:difficulty/muscle/:muscleName" element={<MuscleExercises/>} />
          </Routes>
        </Box>
        <Box style={{backgroundColor: 'var(--dark-color)'}}>
          <Footer/>  
        </Box>
      </BrowserRouter>
  );
}

export default App;
