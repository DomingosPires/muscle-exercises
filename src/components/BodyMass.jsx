import React, { useState,useEffect } from 'react'
import { bmiData, fetchData } from '../utils/fetchData';
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import BmiVelocimeter from './Bmi';

const BodyMass = () => {

    const [bodyMass, setBodyMass] = useState([]);
    const [gender, setGender] = useState('male');
    const [unit, setUnit] = useState('metric');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const bodyMassCalculate = async (age,weight,height) => {

        const url = `https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&height=${height}&weight=${weight}`;
        const massData = await fetchData(url, bmiData);
    
        setBodyMass(massData);
    };
    

    const handleCalculateClick = () => {
        const ageInput = document.getElementById('age');
        const weightInput = document.getElementById('weight');
        const heightInput = document.getElementById('height');
      
        if (!ageInput.value || !weightInput.value || !heightInput.value) {
          console.log('Please fill in all the required fields');
          return;
        }
        
        bodyMassCalculate(age,weight,height)

        
    };

    useEffect(() => {
        console.log(bodyMass)
    }, [handleCalculateClick]);

    const handleKeyPress = (event) => {
        const charCode = event.key;
        if (isNaN(charCode)) {
          event.preventDefault();
        }
    };

        

    return (
        <Container className='container' m='0 auto' style={{padding:'50px 0px'}}>
            <Typography variant='h3' textAlign='center'>
                Calculate your <span style={{ fontWeight: '600', color: 'var(--heading-color)' }}>BMI</span>
            </Typography>
            <Stack sx={{flexDirection:{sm:'column',lg:'row'}}} display='flex' py='40px' >
                <Stack sx={{width:{sm:'100%',md:'50%'}}}>
                    <Grid container spacing={2} py='30px' alignItems='center'>
                        <Grid item xs={12} md={6}>
                            <FormControl>
                                <FormLabel id='unit'>Unit *</FormLabel>
                                <RadioGroup aria-labelledby="unit" defaultValue="metric" name="unit" style={{flexDirection:'row'}} onChange={(e) => setUnit(e.target.value)}> 
                                    <FormControlLabel value="metric" control={<Radio />} label="Metric" />
                                    <FormControlLabel value="imperial" control={<Radio />} label="Imperial" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl>
                                <FormLabel id='gender'>Gender *</FormLabel>
                                <RadioGroup aria-labelledby="gender" defaultValue="male" name="gender" style={{flexDirection:'row'}} onChange={(e) => setGender(e.target.value)}> 
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="age" label="Age" helperText="Between 0 to 80" variant="standard"  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} required onChange={(e) => setAge(e.target.value)}onKeyPress={handleKeyPress} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="weight" label="Weight" helperText="Between 40kg to 160kg" variant="standard" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} required onChange={(e) => setWeight(e.target.value)} onKeyPress={handleKeyPress}/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="height" label="Height" helperText="Between 130cm to 230cm. " variant="standard" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} required onChange={(e) => setHeight(e.target.value)} onKeyPress={handleKeyPress}/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button variant="contained" onClick={handleCalculateClick}>Calculate</Button>
                        </Grid>
                    </Grid>
                </Stack>
                <Stack sx={{width:{sm:'100%',md:'50%'}}} alignItems='center'>
                    {bodyMass.status_code === 200 ? 
                        <BmiVelocimeter bmi={bodyMass.data.bmi} bodyStatus={bodyMass.data.health}/>
                    : <BmiVelocimeter bmi={0} bodyStatus='Fill data'/>}
                </Stack>
            </Stack>
        </Container>
    )
}

export default BodyMass