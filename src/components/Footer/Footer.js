import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import Styles from './Footer.module.css'


function Footer() {
  return (
    <Box bgcolor="#ffff" borderTop="dotted 1px #f8b10e;" mt={5}>
      <Stack direction="row" gap="40px" alignItems="center" px="40px" pt="24px" pb="48px" justifyContent="space-around" >
        <img className={Styles.logo} src={Logo} alt="logo"/>
        <Typography color="#21325f">
          Made By <a className={Styles.link} href="https://www.linkedin.com/in/juan-pablo-cortes/">JPCortes</a>
        </Typography>
        <Typography color="#21325f ">
          Check the <a className={Styles.link} href="https://github.com/jp-cortes/fitness-app">Code</a>
        </Typography>
      </Stack>

    </Box>
  )
}
export { Footer };
