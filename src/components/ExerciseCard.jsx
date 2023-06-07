import { Box, Typography } from '@mui/material'
import React from 'react'
import CategoryImages from './CategoryImages'

const ExerciseCard = ({item}) => {

  /*console.log(item)*/

  return (
      <Box style={{ maxWidth: '250px' }} position='relative'>
        <CategoryImages category={item.Category}  />
        <Typography variant='h6'>{item.exercise_name}</Typography>
        <Box position='absolute' top='12px' right='-25px'>
          <Typography p={1} bgcolor="#E86A33" color='#fff' fontWeight='600' borderRadius='10px'>{item.Category}</Typography>
        </Box>
      </Box>
  )
}

export default ExerciseCard