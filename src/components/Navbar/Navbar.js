import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';

import Logo from '../../assets/images/logo.png';

function Navbar() {
  return (
    <Stack fontFamily="Alegreya" direction="row" justifyContent="space-around" sx={{ gap: { sm: '132px', xs: '10px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px">
      <Link to="/" style={{ textDecoration: 'none'}}>
      <img src={Logo} alt="logo" style={{ width: '58px', height: '58px', margin: '0px 20px'}}/>
          
      </Link>
      <Stack
      sx={{gap: { sm: '40px', xs: '30px'},}}
      direction="row"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
      >

        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #f8b10e'}}>Home</Link>
        <a href="/#exercises" style={{ textDecoration: 'none', color: '#3A1212'}}>Excersises</a>
      </Stack>
    </Stack>
  )
}
export { Navbar }