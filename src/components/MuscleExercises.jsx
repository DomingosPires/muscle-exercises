import { Box } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

const MuscleExercises = () => {

    const { difficulty, muscleName } = useParams();

    const links = [
      { url: '/difficulty/'+difficulty, label: difficulty },
      { url: '#', label: muscleName },
    ];
  return (
    <Box>
      <Breadcrumb links={links}/>
    </Box>
  )
}

export default MuscleExercises