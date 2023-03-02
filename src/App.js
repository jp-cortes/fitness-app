import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/system';
import './App.css';
import { ExerciseDetail } from './page/ExerciseDetail/ExerciseDetail';
import { Home } from './page/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <Box>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
        </Routes>
        <Footer/>
    </Box>
  )
}
export { App }