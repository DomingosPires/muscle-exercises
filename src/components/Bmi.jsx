import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import React from 'react';

const BmiVelocimeter = ({  bmr, bmi, bodyStatus, idealWeight }) => {
  
  const viewBoxSize = 200;
  const radius = viewBoxSize / 2;
  const circumference = 2 * Math.PI * radius;
  const normalizedBmi = bmi * circumference / 50;
  const remainingCircumference = circumference - normalizedBmi;

  let progressColor = '#4caf50';

  if (bmi < 16) {
    progressColor = '#ff0000';
  } else if (bmi >= 16 && bmi < 17 ) {
    progressColor = '#ff7d7d'; 
  } else if (bmi >= 17 && bmi < 18.5 ) {
    progressColor = '#ffff00'; 
  } else if (bmi >= 18.5 && bmi < 25 ) {
    progressColor = '#00ff00'; 
  } else if (bmi >= 25 && bmi < 30 ) {
    progressColor = '#ffff00';
  } else if (bmi >= 30 && bmi < 35 ) {
    progressColor = '#ff7d7d';
  } else if (bmi >= 35 && bmi < 40 ) {
    progressColor = '#ff0000';
  } else if (bmi >= 40 ) {
    progressColor = '#750000';
  }

  return (
    <Stack sx={{flexDirection:{sm:'column', md:'row'}}} className='calculate_results'>
      <Box>
        <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} width="300" height="300">
          {/* Background Circle */}
          <circle
            cx={radius}
            cy={radius}
            r={radius-20}
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="10"
          />

          {/* Progress Circle */}
          <circle
            cx={radius}
            cy={radius}
            r={radius-20}
            fill="none"
            stroke={progressColor}
            strokeWidth="10"
            strokeDasharray={`${normalizedBmi} ${remainingCircumference}`}
            transform={`rotate(-90 ${radius} ${radius})`}
          />

          {/* Text Labels */}
          <text
            x={radius}
            y={radius + 5}
            textAnchor="middle"
            fontSize="15"
            fill="#333333"
          >
            {bodyStatus}
          </text>
          
        </svg>
      </Box>
      <Stack spacing={2} py={4} >
        <Card sx={{boxShadow:'none'}}>
          <CardContent>
            <Typography variant="h6" fontWeight="600">
              BMI: {bmi}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Body Mass Index
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{boxShadow:'none'}}>
          <CardContent>
            <Typography variant="h6" fontWeight="600">
              BMR: {bmr === 'N/A' ? bmr : parseInt(bmr)}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Basal Metabolic Rate
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{boxShadow:'none'}}>
          <CardContent>
            {idealWeight.data && idealWeight.data.Devine && (
              <Typography variant="h6" fontWeight="600">
                Ideal Weight: {parseInt(idealWeight.data.Devine)}Kg
              </Typography>
            )}
            {idealWeight.data && idealWeight.data.Miller && idealWeight.data.Hamwi &&(
              <Typography variant="body2" color="textSecondary">
                Ideal Weight range {parseInt(idealWeight.data.Miller)}-{parseInt(idealWeight.data.Hamwi)}Kg
              </Typography>
            )}
          </CardContent>
        </Card>
      </Stack>
      
    </Stack>
    
  );
};

export default BmiVelocimeter;
/**/