import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { fetchData } from '../../utils/fetchData';
import { Detail } from '../../components/Detail/Detail';
import { ExerciseVideos } from '../../components/ExerciseVideos/ExerciseVideos';
import { SimilarExercises } from '../../components/SimilarExercises/SimilarExercises';

export function ExerciseDetail() {
const [exerciseDetail, setExerciseDetail] = useState({});
const { id } = useParams();

useEffect(() => {
  const fetcExercisesData = async () => {
    const exerciseDbUrl = process.env.REACT_APP_API_URL;
    const youtubeSearchUrl = process.env.REACT_APP_VIDEO_URL;

    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`);
      setExerciseDetail(exerciseDetailData);
  }
  fetcExercisesData();
}, [id])
console.log({exerciseDetail})
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos/>
      <SimilarExercises/>
    </Box>
  )
}

