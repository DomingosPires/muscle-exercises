import { Box, Pagination, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { exerciseData, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const DifficultyExercises = () => {

    const { difficulty } = useParams();

    const [difficultyExcersises, setDifficultyExcersises] = useState([]);

    useEffect(() => {
        const fetchexercisesDifficultyData = async () => {
            const difficultyExcersisesData = await fetchData(`https://musclewiki.p.rapidapi.com/exercises`, exerciseData);

            const beginnerExercises = difficultyExcersisesData.filter(exercise => {
                const exerciseDifficulty = exercise?.Difficulty?.toLowerCase() ?? ''; 
              
                return exerciseDifficulty === difficulty;
            });
            setDifficultyExcersises(beginnerExercises);
        }
        
        fetchexercisesDifficultyData()
        
    }, [])

    useEffect(() => {
        console.log(difficultyExcersises);
      }, [difficultyExcersises]);

    return (
        <Box py='50px'>
            <Typography variant='h3' textAlign='center'>
                Exercises for <span style={{fontWeight:'600', color:'var(--heading-color)'}}>{difficulty.toUpperCase()}</span>
            </Typography>
            <Stack direction='row' flexWrap='wrap' gap='70px' justifyContent='center' py='50px' >
                {difficultyExcersises.map((item, index) => (
                    <ExerciseCard key={index} item={item} />
                ))}
            </Stack>
            <Pagination  variant="outlined" color="primary" count={12} />
        </Box>
    )
}

export default DifficultyExercises