import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/system';
import './App.css';
import { ExerciseDetail } from './page/ExerciseDetail';
import { Home } from './page/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

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