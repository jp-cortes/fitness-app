import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { fetchData, fetchDataYouTube } from '../../utils/fetchData';
import { Detail } from '../../components/Detail/Detail';
import { ExerciseVideos } from '../../components/ExerciseVideos/ExerciseVideos';
import { SimilarExercises } from '../../components/SimilarExercises/SimilarExercises';

export function ExerciseDetail() {
const [exerciseDetail, setExerciseDetail] = useState({});
const [exerciseVideos, setExerciseVideos] = useState([]);
const [targetMusclesExercises, setTargetMusclesExercises] = useState([]);
const [equipmentExercises, setEquipmentExercises] = useState([]);
const { id } = useParams();

useEffect(() => {
  const fetcExercisesData = async () => {
    const exerciseDbUrl = process.env.REACT_APP_API_URL;
    const youtubeSearchUrl = process.env.REACT_APP_VIDEO_URL;

    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`);
      setExerciseDetail(exerciseDetailData);

    const exerciseVideosData = await fetchDataYouTube(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`);
    setExerciseVideos(exerciseVideosData.contents);

    const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`);
    setTargetMusclesExercises(targetMuscleExerciseData);
    const equipmentMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`);
    setEquipmentExercises(equipmentMuscleExerciseData);
  }
  fetcExercisesData();
}, [id])
console.log(exerciseVideos)
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises 
        targetMusclesExercises={targetMusclesExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  )
}

