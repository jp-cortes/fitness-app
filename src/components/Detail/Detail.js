import React from 'react';
import { Typography, Stack } from '@mui/material';
import Styles from './Detail.module.css';

import BodyPartImg from '../../assets/images/bodyPart.png';
import targetImg from '../../assets/images/target.png';
import equipmentImg from '../../assets/images/equipment.png';

export function Detail({ exerciseDetail }) {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
const extraDetails = [
    {
        icon:BodyPartImg,
        name: bodyPart,
    },
    {
        icon:targetImg,
        name: target,
    },
    {
        icon:equipmentImg,
        name: equipment,
    },
]

  return (
    <Stack
    gap="60px"
    sx={{ flexDirection: { lg: 'row'}, p: '20px', alignItems: 'center'  }}>
    <img src={gifUrl} alt={name} loading="lazy" className={Styles['detail-image']}/>
    <Stack sx={{ gap: { lg: '35px', xs: '20px'}}}>
    <Typography textTransform="capitalize" variant="h3">
        {name}
    </Typography>
    <Typography variant="h6">
        Exercises keep you strong. {name} {' '}
        Is one of the best exercises to target your {target}.
        It will help you to improve your mood and gain energy.
    </Typography>
    {extraDetails.map((item, index) => (
        <Stack key={index + 1} direction="row" gap="24px" alignItems="center">
        <button className={Styles.icon}>
            <img src={item.icon} width="50" height="50" alt='icon'/>
        </button>
        <Typography textTransform="capitalize" variant="h5">
            {item.name}
        </Typography>
    </Stack>

    ))
    }
    </Stack>
    </Stack>
  )
}
