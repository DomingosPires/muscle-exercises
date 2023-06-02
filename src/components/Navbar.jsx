import { Link, Stack } from '@mui/material'
import React from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center' m='0 auto' sx={{gap:{sm:'122px', xs:'40px'}, py:'20px', justifyContent:'space-between', maxWidth:{sm:'100%', lg:'1300px'}}}  >
        <a href="/"><img src={Logo}/></a>
        <Stack direction='row' justifyContent='end' gap='40px'>
          <Link href="/exercises" variant='h6'>Exercises</Link>
          <Link href="/categories" variant='h6'>Categories</Link>
          <Link href="/muscles" variant='h6'>Muscles</Link>
        </Stack>
    </Stack>
  )
}

export default Navbar