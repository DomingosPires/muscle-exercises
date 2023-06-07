import React from 'react'
import img_band from '../assets/images/band.jpg'
import img_barbell from '../assets/images/barbell.jpg'
import img_bodyweight from '../assets/images/bodyweight.jpg'
import img_cables from '../assets/images/cables.jpg'
import img_kettlebells from '../assets/images/kettlebells.jpg'
import img_machine from '../assets/images/machine.jpg'
import img_plate from '../assets/images/plate.jpg'
import img_stretches from '../assets/images/stretches.jpg'
import img_trx from '../assets/images/TRX.jpg'
import img_yoga from '../assets/images/yoga.jpg'
import img_dumbbells from '../assets/images/dumbbells.jpg'


const CategoryImages = (category) => {

    let imageSource;

    switch (category.category) {
      case 'Band':
        imageSource = img_band;
        break;
      case 'Barbell':
        imageSource = img_barbell;
        break;
      case 'Bodyweight':
        imageSource = img_bodyweight;
        break;
      case 'Cables':
        imageSource = img_cables;
        break;
      case 'Kettlebells':
        imageSource = img_kettlebells;
        break;
      case 'Machine':
        imageSource = img_machine;
        break;
      case 'Plate':
        imageSource = img_plate;
        break;
      case 'Stretches':
        imageSource = img_stretches;
        break;
      case 'TRX':
        imageSource = img_trx;
        break;
      case 'Yoga':
        imageSource = img_yoga;
        break;
      case 'Dumbbells':
        imageSource = img_dumbbells;
        break;
      default:
        imageSource = 'http://via.placeholder.com/300x400'; 
    }
    
  
    return (
        <img alt={category.category} src={imageSource} style={{ maxWidth: '290px', backgroundColor:'#d1d1d1'}}/>
    );
}

export default CategoryImages