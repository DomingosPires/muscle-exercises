import { Box, Typography } from '@mui/material'
import React from 'react'
import ExerciseImages from './ExerciseImages'

const ExerciseCard = ({item}) => {

    console.log(item)

  return (
      <Box>
        <ExerciseImages targetMuscle={item.target.Primary} exerciseName={item.exercise_name}  />
        <Typography variant='h6'>{item.exercise_name}</Typography>
        <Box>
          <Typography>{item.target.Primary}</Typography>
        </Box>
        
      </Box>
  )
}

export default ExerciseCard