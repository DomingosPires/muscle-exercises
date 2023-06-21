import React, { useEffect } from 'react'
import {Box, Stack, Typography} from '@mui/material';
import { youtubeOptions, fetchData } from '../utils/fetchData';
import Loader from './Loader'
import { useState } from 'react';




const ExerciseVideos = () => {
    
    const [exerciseVideos, setExerciseVideos] = useState([]);

    const youtubeVideos = async () => {

      const exerciseVideosData = await fetchData(``, youtubeOptions);
      console.log(exerciseVideosData)        
      setExerciseVideos(exerciseVideosData.contents);

    };

    youtubeVideos()

    useEffect(() =>{
        console.log(exerciseVideos)
    },[])

  //if (!exerciseVideos.length) return <Loader />;



  return (
    <Box p="20px">
      <Typography variant='h3' textAlign='center'>
          Search for <span style={{ fontWeight: '600', color: 'var(--heading-color)' }}>NAME</span> videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '70px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {/*
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))} 
        */}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;