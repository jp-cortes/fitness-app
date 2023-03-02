import React from 'react';
import { Box, Typography } from '@mui/material';
import banner from '../../assets/images/banner.jpg';
import Styles from './HeroBanner.module.css';
function HeroBanner() {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }} position="relative" p="20px"
    >
        <Typography
        color="#f8b10e"
        fontWeight="600"
        fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px'}}}
        mt="30px"
        mb="30px"
        >
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize="22px"
        lineHeight="35px"
        mb="40px">
            Check out the most effective exercises
        </Typography>
        <a
        href="#exercises" 
        className={Styles.button}>
            Explore Exercises
        </a>
        <Typography
        fontWeight={600}
        color="#"
        sx={{
            opacity:0.1,
            display: { lg: 'block', xs: 'none'}
        }}
        fontSize="200px"
        mt="30px"
        >
            Exercise
        </Typography>
        <img
        className={Styles.bannerImg} 
        src={banner} alt="banner"/>
    </Box>
  );
}

export { HeroBanner };