import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const Breadcrumb = ({links}) => {

  return (
    <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">Home</Link>

        {links.map((link, index) => (
            <Link key={index} href={link.url} underline={link.url === '#' ? "none" : "hover"} color="inherit" >
                <Typography>{link.label.charAt(0).toUpperCase() + link.label.slice(1)}</Typography>
            </Link>
        ))}
    
    </Breadcrumbs>
  )
}

export default Breadcrumb