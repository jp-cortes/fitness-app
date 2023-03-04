import React, { useState } from 'react';
import { Box } from '@mui/system';
import { HeroBanner } from '../../components/HeroBanner/HeroBanner';
import { SearchExercises } from '../../components/SearchExercises/SearchExercises';
import { Exercises } from '../../components/Exercises/Exercises';

 function Home() {
  const [bodyPart,setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      />
      <Exercises
      setExercises={setExercises}
      exercises={exercises}
      bodyPart={bodyPart}
      
      />
    </Box>
  );
}
export { Home };
