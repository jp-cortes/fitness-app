import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/system';
import { ExerciseDetail } from './page/ExerciseDetail/ExerciseDetail';
import { Home } from './page/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
     <Box>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
        </Routes>
        <Footer/>
     </Box>
    </BrowserRouter>
  )
}
export { App }