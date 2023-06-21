import { Tabs, Tab, Typography, Box, Container, Stack, Grid, Card, CardContent } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { bodyMassData, fetchData } from '../utils/fetchData';

const Activities = () => {
    
    const [selectedLevel, setSelectedLevel] = useState('1');
    const [activities, setActivities] = useState([]);
    
    useEffect(() => {
        const activitiesIntensity = async () => {
            const intensityLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const activitiesData = [];
        
            for (const level of intensityLevels) {
            const url = `https://fitness-calculator.p.rapidapi.com/activities?intensitylevel=${level}`;
            const activitiesLevelData = await fetchData(url, bodyMassData);
            //console.log(activitiesLevelData.data);
            activitiesData.push(activitiesLevelData.data);
            }
        
            setActivities(activitiesData);
        };

        activitiesIntensity();

    }, []);

    const handleChange = (event, newValue) => {
        setSelectedLevel(newValue);
    };
  
    return (
        <Container className='container' m='0 auto'>
            <Typography variant='h3' textAlign='center'>
                Exercises by <span style={{ fontWeight: '600', color: 'var(--heading-color)' }}>Intensity</span>
            </Typography>
            <Stack sx={{ width: '100%' }} alignItems='center'>
                <Tabs value={selectedLevel} onChange={handleChange} aria-label="Intensity Levels">
                    {activities.map((levelData, index) => (
                        <Tab key={index} label={`Level ${index + 1}`} />
                    ))}
                </Tabs>
                <Box p={2}>
                    <Grid container spacing={2}>
                        {activities[selectedLevel].map((activity, activityIndex) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={activityIndex}>
                            <Card sx={{boxShadow:'none'}}>
                                <CardContent>
                                    <Typography variant="body1" fontWeight="600">{activity.description}</Typography>
                                    <Typography variant="body2" color="textSecondary"> {activity.activity} </Typography>
                                </CardContent>
                            </Card>
                            
                        </Grid>
                        ))}
                    </Grid>
                </Box>
            </Stack>
      </Container>
    );
  };
  

export default Activities

