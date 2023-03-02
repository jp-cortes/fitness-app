import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';

import Logo from '../../assets/images/logo.png';

function Navbar() {
  return (
    <Stack fontFamily="Alegreya" direction="row" justifyContent="space-around" sx={{ gap: { sm: '132px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px">
      <Link to="/" style={{ textDecoration: 'none'}}>
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px'}}/>
          
      </Link>
      <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
      >

        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #f8b10e'}}>Home</Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212'}}>Excersises</a>
      </Stack>
    </Stack>
  )
}
export { Navbar }