import React from 'react';
import { Box } from '@mui/system';
import { HeroBanner } from '../../components/HeroBanner/HeroBanner';
import { SearchExercises } from '../../components/SearchExercises/SearchExercises';
import { Exercises } from '../../components/Exercises/Exercises';

 function Home() {
  const [bodyPart,setBodyPart] = useState([])
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
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      />
    </Box>
  );
}
export { Home };
