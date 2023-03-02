import React from 'react';
import { Box } from '@mui/system';
import { HeroBanner } from '../../components/HeroBanner/HeroBanner';
import { SearchExercises } from '../../components/SearchExercises/SearchExercises';
import { Exercises } from '../../components/Exercises/Exercises';

 function Home() {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  );
}
export { Home };
