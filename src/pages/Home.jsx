import { Box } from '@mui/material'
import React from 'react'
import DifficultyCards from '../components/DifficultyCards';

const Home = () => {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ maxWidth: '100%', width: '100%', padding: '0 16px' }}>
        <DifficultyCards />
      </Box>
    </Box>
  )
}

export default Home