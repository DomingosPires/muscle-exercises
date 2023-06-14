import React, { useState,useEffect } from 'react'
import { bmiData, caloriesData, fetchData } from '../utils/fetchData';
import { Button, Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material';
import BmiVelocimeter from './Bmi';
import Calories from './Calories';

const BodyMass = () => {

    const [bodyMass, setBodyMass] = useState([]);
    const [calorie, setCalorie] = useState([]);
    const [activityLevel, setActivityLevel] = useState('level_3');
    const [gender, setGender] = useState('male');
    const [neck, setNeck] = useState('');
    const [waist, setWaist] = useState('');
    const [hip, setHip] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');


    const bodyMassCalculate = async (age,weight,height) => {

        const url = `https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&height=${height}&weight=${weight}`;
        const massData = await fetchData(url, bmiData);
    
        setBodyMass(massData);
    };

    const caloriesCalculate = async (age,weight,height,gender,activityLevel) => {

        const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&height=${height}&weight=${weight}&gender=${gender}&activitylevel=${activityLevel}`;
        const calorieData = await fetchData(url, caloriesData);
    
        setCalorie(calorieData);
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
        caloriesCalculate(age,weight,height,gender,activityLevel)
    };

    /*useEffect(() => {
        console.log(bodyMass)
        console.log(calorie)
    }, [handleCalculateClick]);*/

    const handleKeyPress = (event) => {
        const charCode = event.key;
        if (isNaN(charCode)) {
          event.preventDefault();
        }
    };

    return (
        <Container className='container' m='0 auto' style={{padding:'50px 0px'}}>
            <Typography variant='h3' textAlign='center'>
                Know your <span style={{ fontWeight: '600', color: 'var(--heading-color)' }}>Body</span>
            </Typography>
            <Stack sx={{flexDirection:{sm:'column',lg:'row'}}} display='flex' py='40px' >
                <Stack sx={{width:{sm:'100%',md:'50%'}}}>
                    <Grid container spacing={2} py='30px' alignItems='center'>
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
                            <FormControl>
                            <InputLabel id="activity_level">Activity level</InputLabel>
                            <Select labelId="activity_level" id="activity_level" value={activityLevel} defaultValue='level_3' label="Activity level" onChange={(e) => setActivityLevel(e.target.value)}>
                                <MenuItem value='level_1'>Sedentary</MenuItem>
                                <MenuItem value='level_2'>Lightly Active</MenuItem>
                                <MenuItem value='level_3'>Moderately Active</MenuItem>
                                <MenuItem value='level_4'>Active</MenuItem>
                                <MenuItem value='level_5'>Very Active</MenuItem>
                                <MenuItem value='level_6'>Extremely Active</MenuItem>
                            </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="age" label="Age" helperText="Between 0 to 80" variant="standard"  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} required onChange={(e) => setAge(e.target.value)} onKeyPress={handleKeyPress} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="weight" label="Weight" helperText="Between 40kg to 160kg" variant="standard" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} required onChange={(e) => setWeight(e.target.value)} onKeyPress={handleKeyPress}/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="height" label="Height" helperText="Between 130cm to 230cm. " variant="standard" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} required onChange={(e) => setHeight(e.target.value)} onKeyPress={handleKeyPress}/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="neck" label="Neck" helperText="Between 130cm to 230cm. " variant="standard" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} required onChange={(e) => setNeck(e.target.value)} onKeyPress={handleKeyPress}/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="waist" label="Waist" helperText="Between 130cm to 230cm. " variant="standard" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} required onChange={(e) => setWaist(e.target.value)} onKeyPress={handleKeyPress}/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="hip" label="Hip" helperText="Between 130cm to 230cm. " variant="standard" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} required onChange={(e) => setHip(e.target.value)} onKeyPress={handleKeyPress}/>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Button variant="contained" onClick={handleCalculateClick}>Calculate</Button>
                        </Grid>
                    </Grid>
                </Stack>
                <Stack sx={{width:{sm:'100%',md:'50%'}}} alignItems='center'>
                    {bodyMass.status_code === 200 && calorie.status_code === 200 ? 
                        <BmiVelocimeter bmr={calorie.data.BMR} bmi={bodyMass.data.bmi} bodyStatus={bodyMass.data.health}/>
                    : <BmiVelocimeter bmi={0} bodyStatus='Fill data'/>}

                    {calorie.status_code === 200 ?
                        <Calories calorie={calorie}/>
                    : 'Service Unavailable'}
                </Stack>
            </Stack>
        </Container>
    )
}

export default BodyMass