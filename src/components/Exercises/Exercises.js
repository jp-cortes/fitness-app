import React, { useState, useEffect } from 'react';
import  Pagination  from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { ExerciseCard } from '../ExerciseCard/ExerciseCard';

import { fetchData } from '../../utils/fetchData';

function Exercises({ exercises, setExercises, bodyPart}) {
const [currentPage, setCurrentPage] = useState(1);
const exercisePerPage = 9;

const indexOfLastExercise = currentPage * exercisePerPage;
const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);


function paginate(event, value) {
  setCurrentPage(value);

  window.scrollTo({ top: 1500, behavior: 'smooth'})
}

useEffect(() => {
  async function fetchExercises() {
    let exercisesData = [];
    if(bodyPart === 'all') {
      exercisesData = await fetchData(`${process.env.REACT_APP_API_URL}/exercises/`);
    } else {
      exercisesData = await fetchData(`${process.env.REACT_APP_API_URL}/exercises/bodyPart/${bodyPart}`);
    }
    setExercises(exercisesData);
  }

  fetchExercises();
}, [bodyPart])

  return (
    <Box
    id="exercises"
    sx={{mt: { lg: '110px'}}}
    mt="50px"
    p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack 
      direction="rox" 
      sx={{ gap: { lg: '110px', xs: '50px'}}}
      flexWrap="wrap"
      justifyContent="center"
      > 
      {currentExercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise}/>
      ))}
      </Stack>
        <Stack>
          {exercises.length > 9 && (
            <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            />
          )}
        </Stack>
    </Box>
  )
}

export { Exercises }