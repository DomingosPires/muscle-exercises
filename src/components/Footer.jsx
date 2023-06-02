import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Stack direction='row' alignItems='center' justifyContent='center' py='30px'>
        <Box>
            <Typography fontSize='20px' color='white'>@Copyright Made By Domingos Pires</Typography>
        </Box>
    </Stack>
  )
}

export default Footer