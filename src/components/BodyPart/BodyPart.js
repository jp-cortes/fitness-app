import React from 'react';
import { Stack, Typography } from '@mui/material';
import Styles from './BodyPart.module.css'
import dumbbell from '../../assets/icons/dumbbell.svg'

function BodyPart({ item, bodyPart, setBodyPart }) {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className={Styles.bodyPart_card}
    sx={{
      borderTop: bodyPart === item ? '4px solid #f8b10e' : '',
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth'})
    }}
    >
      <img 
      className={Styles.icon}
      src={dumbbell}  
      alt='dumbbell'
       />
       <Typography 
       fontSize='24px' 
       ontWeight='bold' 
       color='#3A1212'
       testTransform='capitalize'
       >
        {item}
       </Typography>
    </Stack>
  )
}

export { BodyPart }