import { Box, Typography } from '@mui/material'
import React from 'react'
import CategoryImages from './CategoryImages'
import { Link, useLocation  } from 'react-router-dom'

const ExerciseCard = ({item}) => {

  /*console.log(item)*/
  const execiseName = item.exercise_name.replace(" ", "_");
  const location = useLocation();
  const { pathname } = location;

  return (
      <Box style={{ maxWidth: '290px' }} position='relative'>
        <Link to={`${pathname}/exercise/${execiseName.toLowerCase()}`} style={{textDecoration:'none', color:'var(--dark-color)'}}>
          <CategoryImages category={item.Category}  />
          <Typography variant='h6' textAlign='center'>{item.exercise_name}</Typography>
          <Box position='absolute' top='12px' right='10px'>
            <Typography p={1} bgcolor="#E86A33" color='#fff' fontWeight='600' borderRadius='10px'>{item.Category}</Typography>
          </Box>
        </Link>
      </Box>
  )
}

export default ExerciseCard