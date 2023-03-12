import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { HorizontalScrollbar } from '../HorizontalScrollbar/HorizontalScrollbar';
import { Loader } from '../Loader/Loader';

export function SimilarExercises({ targetMusclesExercises, equipmentExercises }) {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0'}}}>
      <Typography variant="h3" mb={5} ml={3}>
        Exercises that target the same muscles group
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
        {targetMusclesExercises.length ? <HorizontalScrollbar data={targetMusclesExercises}/> : <Loader/>
        }

      </Stack>
      <Typography variant="h3" mt={5} mb={5} ml={3}>
        Exercises that use the same muscles equipment
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader/>
        }

      </Stack>
    </Box>
  )
}
