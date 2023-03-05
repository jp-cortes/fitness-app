import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import Styles from './ExerciseCard.module.css';

export function ExerciseCard({ exercise }) {

    
  return (
    <Link className={Styles.exercise_card} to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
        <Stack direction="row">
            <button className={Styles.bodyPart_button}
            >{exercise.bodyPart}</button>
            <button className={Styles.target_button}
            >{exercise.target}</button>

        </Stack>
        <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="22px"
        >
            {exercise.name}
        </Typography>
    </Link>
  )
}
