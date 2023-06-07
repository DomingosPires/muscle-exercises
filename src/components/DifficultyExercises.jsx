import { Box, Pagination, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { exerciseAttributeData, exerciseData, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import HorizontalTargetMenu from './HorizontalTargetMenu';
import Breadcrumb from './Breadcrumb';



const DifficultyExercises = () => {

    const { difficulty } = useParams();

    const [difficultyExcersises, setDifficultyExcersises] = useState([]);
    const [exerciseAttributes, setExerciseAttributes] = useState([]);

    const links = [{ url: '#', label: difficulty }];

    useEffect(() => {
        const fetchexercisesDifficultyData = async () => {
            const difficultyExcersisesData = await fetchData(`https://musclewiki.p.rapidapi.com/exercises`, exerciseData);

            const beginnerExercises = difficultyExcersisesData.filter(exercise => {
                const exerciseDifficulty = exercise?.Difficulty?.toLowerCase() ?? ''; 
              
                return exerciseDifficulty === difficulty;
            });
            setDifficultyExcersises(beginnerExercises);
        }
        
        const fetchExerciseAttributes = async () => {
            const exerciseAttributesData = await fetchData(`https://musclewiki.p.rapidapi.com/exercises/attributes`, exerciseAttributeData);
            
            setExerciseAttributes(exerciseAttributesData);
        }
        
        fetchexercisesDifficultyData()
        fetchExerciseAttributes()

        
    }, [])

    /*useEffect(() => {
        console.log("exerciseAttributes");
        console.log(exerciseAttributes);
    }, [exerciseAttributes]);*/


    const itemsPerPage = 12; // Number of exercises to display per page

    const [page, setPage] = useState(1);

    // Calculate the starting and ending index for the exercises to display on the current page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the exercises for the current page
    const exercisesToShow = difficultyExcersises.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <Stack className='container' py='50px' m='0 auto'>
            <Breadcrumb links={links}/>
            <Typography variant='h3' textAlign='center'>
                Exercises for <span style={{ fontWeight: '600', color: 'var(--heading-color)' }}>{difficulty.toUpperCase()}</span>
            </Typography>
            
            {exerciseAttributes && exerciseAttributes["muscles"] && Array.isArray(exerciseAttributes["muscles"]) && (
                <HorizontalTargetMenu target={exerciseAttributes["muscles"]} />
            )}

            <Stack direction='row' flexWrap='wrap' gap='70px' justifyContent='center' py='50px'>
                {exercisesToShow.map((item, index) => (
                    <ExerciseCard key={index} item={item} />
                ))}
            </Stack>
            <Box display='flex' justifyContent='center'>
                <Pagination
                variant='outlined'
                color='primary'
                count={Math.ceil(difficultyExcersises.length / itemsPerPage)}
                page={page}
                onChange={handlePageChange}
                />
            </Box>
        </Stack>
    )
}

export default DifficultyExercises