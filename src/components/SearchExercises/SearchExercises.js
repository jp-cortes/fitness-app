import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, TextField } from '@mui/material';
import { fetchData } from '../../utils/fetchData';
import { HorizontalScrollbar } from '../HorizontalScrollbar/HorizontalScrollbar';
import Styles from './SearchExercises.module.css';

function SearchExercises({ setExercises, bodyPart, setBodyPart}) {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyParts = await fetchData(`${process.env.REACT_APP_API_URL}/exercises/bodyPartList`);
      setBodyParts(['all', ...bodyParts])
    }
    fetchExercisesData();
  }, []);
  const handleSearch = async (e) => {
    e.preventDefault()
    if(search) {
const exerciseData = await fetchData(`${process.env.REACT_APP_API_URL}/exercises/`);
console.log(exerciseData)
const searchExercises = exerciseData.filter(
  (exercise) => exercise.name.toLowerCase().includes(search)
  ||exercise.target.toLowerCase().includes(search)
  ||exercise.equipment.toLowerCase().includes(search)
  ||exercise.bodyPart.toLowerCase().includes(search)
  );

  setSearch('');
  setExercises(searchExercises)
    }
  }

  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px"
    >
      <Typography 
      fontWeight={700} 
      sx={{ fontSize: { lg: '44px', xs: '30px'}}}
      mb="50px" textAlign="center"
      >
Awesome Exercises You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <form 
        className={Styles.form}
        onSubmit={handleSearch}>
        <TextField
        sx={{
          input: {
            fontWeight: '700',
            border: 'none',
            boderRadius: '4px',
          },
          width: { lg: '800px', xs: '300px'},
          backgroundColor: "#fff",
          borderRadius: "40px"
        }}
        height="76px"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercises"
        type="text"
        />
        <button
        type="submit"
         className={Styles.searchButton}>
          Search
        </button>
        </form>
      </Box>
      <Box sx={{ position: 'relative',
    width: '100%', p: '20px'}}>
        <HorizontalScrollbar 
        data={bodyParts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        />
      </Box>
      </Stack>
  )
}

export { SearchExercises }