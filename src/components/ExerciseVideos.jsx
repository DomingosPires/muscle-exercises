import React, { useEffect } from 'react'
import {Box, Card, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import { youtubeData, fetchData } from '../utils/fetchData';
import Loader from './Loader'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


const ExerciseVideos = () => {
    
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [searchExercise, setSearchExercise] = useState("");


  const handleSearchClick = () => {
    const inputElement = document.getElementById('search-input');
    const searchValue = inputElement.value;

    setSearchExercise(searchValue);

    youtubeVideos(searchValue);
  };

  const youtubeVideos = async (searchQuery) => {
    const exerciseVideosData = await fetchData(`https://youtube138.p.rapidapi.com/search/?q=${searchQuery} exercises gym`, youtubeData);
    
    setExerciseVideos(exerciseVideosData.contents);

  };

  useEffect(() => {
    youtubeVideos(searchExercise);
  }, [searchExercise]);


  if (!exerciseVideos.length) return <Loader />;



  return (
    <Box p="20px">
      <Typography variant='h3' textAlign='center' mb='30px'>
        <span style={{ fontWeight: '600', color: 'var(--heading-color)' }}>{searchExercise.length === 0 ? 'All' : searchExercise.toUpperCase()}</span> exercise videos
      </Typography>
      <div className="search-container">
        <input type="text" id="search-input" placeholder="Search for exercise videos..." />
        <FaSearch className="search-icon active" onClick={handleSearchClick} />
      </div>
      <Grid container spacing={2} justifyContent="center" className='container' m='0 auto'>
        {exerciseVideos?.slice(0, 9)?.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 'none' }}>
              <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">
                <CardMedia
                  sx={{ height: '0', paddingTop: '56.25%' }}
                  image={item.video.thumbnails[0].url}
                  title={item.video.title}
                />
              </a>
              <CardContent style={{padding:'15px 0px'}}>
                <Typography sx={{ fontSize: { lg: '18px', xs: '10px' } }} fontWeight={600} color="#000">
                  {item.video.title}
                </Typography>
                <Typography fontSize="14px" color="#000">
                  {item.video.channelName}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
};

export default ExerciseVideos;