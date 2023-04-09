import { Box, Typography, Stack } from '@mui/material';
import React from 'react';
import Styles from './ExerciseVideos.module.css'


export function ExerciseVideos({ exerciseVideos, name }) {
  // console.log(exerciseVideos.map(i => i.video))
  if(!exerciseVideos.length) return 'Loading'
  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px'}}} p='20px'>
      <Typography variant="h3"  mb="33px">
        Watch <span className={Styles.name}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="center" flexWrap="wrap" alignItems="center"
      sx={{ 
        flexDirection: { lg: 'row'},
        gap: { lg: '110px', xs: '0'}
    }}>
        {
        exerciseVideos.slice(0, 3).map((item, index) => (
          <a
          key={index}
          className={Styles['exercise-video']}
          href={`https://www.youtube.com/watch?v${item.video.videoId}`}
          target="_blank"
          rel=" noopener noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
            <Box>
              <Typography variant='h5' color="#000">
                {item.video.title}
              </Typography>
              <Typography variant='h6' color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>

        ))
        }


      </Stack>
    </Box>
  )
}
