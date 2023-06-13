import { Box } from '@mui/material'
import React from 'react'
import DifficultyCards from '../components/DifficultyCards';
import Banner from '../components/Banner';

const Home = () => {

  return (
    <div>
      <Banner/>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ maxWidth: '100%', width: '100%', padding: '0 16px' }}>
          <DifficultyCards />
        </Box>
      </Box>
    </div>
  )
}

export default Home