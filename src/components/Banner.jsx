import React from 'react';
import BannerImg from '../assets/images/gymBanner.gif';
import BannerImgMobile from '../assets/images/gymBannerMobile.gif';

const Banner = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <img src={isMobile ? BannerImgMobile : BannerImg} width="100%" alt="Banner" />
  );
};

export default Banner;
