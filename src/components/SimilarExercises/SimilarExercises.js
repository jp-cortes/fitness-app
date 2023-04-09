import React from 'react';
import { Box, Typography } from '@mui/material';
import { HorizontalScrollbar } from '../HorizontalScrollbar/HorizontalScrollbar';
import { Loader } from '../Loader/Loader';

export function SimilarExercises({ targetMusclesExercises, equipmentExercises }) {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0'}}}>
      <Typography variant="h3" mb={5} ml={3}>
        Exercises that target the same muscles group
      </Typography>
      <Box sx={{ position: 'relative',
    width: '100%', p: '20px'}}>
        {targetMusclesExercises.length ? <HorizontalScrollbar data={targetMusclesExercises}/> : <Loader/>
        }

      </Box>
      <Typography variant="h3" mt={5} mb={5} ml={3}>
        Exercises that use the same equipment
      </Typography>
      <Box sx={{ position: 'relative',
    width: '100%', p: '20px'}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader/>
        }

      </Box>
    </Box>
  )
}
