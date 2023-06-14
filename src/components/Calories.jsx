import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Calories = ({ calorie }) => {
    const goals = calorie.data.goals;

    console.log(goals)
  
    return (
      <Stack>
        <Box>
          <table id='calories_table'>
            <thead>
              <tr>
                <th>Goal</th>
                <th>Weight change</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                <td>Maintain weight</td>
                <td> -- </td>
                <td>{parseInt(goals["maintain weight"])}</td>
                </tr>
                {Object.entries(goals).map(([goal, data]) => {
                    if (goal === "maintain weight") return null; 
                    return (
                        <tr key={goal}>
                            <td>{goal}</td>
                            <td>{data['loss weight'] || data['gain weight'] || ''}</td>
                            <td>{parseInt(data.calory) || ''}</td>
                        </tr>
                    );
                })}
            </tbody>
          </table>
        </Box>
      </Stack>
    );
  };
  
export default Calories
