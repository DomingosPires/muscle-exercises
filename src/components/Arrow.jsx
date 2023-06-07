import React from 'react';
import ArrowLeft from '../assets/images/arrow-left.png';
import ArrowRight from '../assets/images/arrow-right.png';

const Arrow = ({ onClick, direction }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className={`arrow ${direction}`} onClick={handleClick}>
      {direction === 'left' ? <img src={ArrowLeft} alt="Left Arrow" style={{maxWidth:'25px'}} /> : <img src={ArrowRight} alt="Right Arrow"style={{maxWidth:'25px'}} />}
    </div>
  );
};

export default Arrow;
