import React, { useContext } from 'react';
import { Box, Link, Typography } from '@mui/material';
import ExerciseImages from './ExerciseImages';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Arrow from './Arrow';

const HorizontalTargetMenu = (target) => {
  let muscles = target;

  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return <Arrow onClick={scrollPrev} direction="left" />;
  };

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return <Arrow onClick={scrollNext} direction="right" />;
  };

  return (
    <div className="menu-container" style={{ padding: '40px 0px' }}>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {muscles.target.map((item) => (
            <div key={item} className="menu-item">
                <Link underline="hover" style={{ cursor: 'pointer',color:'var(--heading-color)' }}>
                    <ExerciseImages targetMuscle={item} />
                    <Typography variant="h6" textAlign='center' style={{color:'var(--heading-color)'}}>{item}</Typography>
                </Link>
            </div>
            ))}
        </ScrollMenu>
    </div>
  );
};

export default HorizontalTargetMenu;