import { Link, Stack } from '@mui/material'
import React from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <Stack className='container' justifyContent='space-between' alignItems='center' m='0 auto' sx={{flexDirection:{xs:'column', sm:'row', lg:'row'}, gap:{sm:'122px', xs:'40px'}, py:'20px', justifyContent:'space-between'}}  >
        <a href="/"><img src={Logo}/></a>
        <Stack direction='row' justifyContent='end' gap='40px' >
          <Link href="/exercises" variant='h6' style={{color:'#E86A33' }} underline="hover">Exercises</Link>
          <Link href="/categories" variant='h6' style={{color:'#E86A33'}} underline="hover">Categories</Link>
          <Link href="/muscles" variant='h6' style={{color:'#E86A33'}} underline="hover">Muscles</Link>
        </Stack>
    </Stack>
  )
}

export default Navbar