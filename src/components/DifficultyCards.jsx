import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {exerciseData, fetchData} from '../utils/fetchData';
import GymPhoto from '../assets/images/gym.jpg'
import { Link } from 'react-router-dom';

const DifficultyCards = () => {
    const [exercisesDifficulty, setExerciseDifficulty] = useState([]);

    useEffect(() => {
        const fetchexercisesData = async () => {
        const exercisesDifficultyData = await fetchData('https://musclewiki.p.rapidapi.com/exercises/attributes', exerciseData)

        setExerciseDifficulty(exercisesDifficultyData["difficulties"]);
      }

      fetchexercisesData()

    }, [])
  
  return (
    <Stack py='50px' sx={{flexDirection:{xs:'column', sm:'row'}, maxWidth:{xs:'100%', sm:'1300px'}}} m='0 auto'>
      {exercisesDifficulty.map((difficulty,index) => (
        <Box sx={{width:{xs:'100%', sm:'33%'}, cursor:'pointer'}} m='30px' key={index} textAlign='center' position='relative' className='difficultyCard' >
          <Link to={`/difficulty/${difficulty.toLowerCase()}`} style={{ textDecoration: 'none' }}>
            <img width='100%' src={GymPhoto}/>
            <Typography className='difficulty' fontSize='30px' style={{color: 'var(--heading-color)', fontWeight:'600', backgroundColor:'#41644A70'}}  >
              {difficulty}
            </Typography>
          </Link>
        </Box>
      ))}
    </Stack>
  )
}

export default DifficultyCards