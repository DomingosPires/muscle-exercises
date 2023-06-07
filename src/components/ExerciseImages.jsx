import img_abdominals from '../assets/images/abdominals.png';
import img_biceps from '../assets/images/bicep.png';
import img_calves from '../assets/images/calves.png';
import img_chest from '../assets/images/chest.png';
import img_forearms from '../assets/images/forearm.png';
import img_glutes from '../assets/images/gluteus.png';
import img_hamstrings from '../assets/images/hamstrings.png';
import img_lats from '../assets/images/lats.png';
import img_lowerBack from '../assets/images/lower-back.png';
import img_midBack from '../assets/images/mid-back.png';
import img_obliques from '../assets/images/oblique.png';
import img_quads from '../assets/images/quadriceps.png';
import img_shoulders from '../assets/images/shoulder.png';
import img_traps from '../assets/images/traps.png';
import img_triceps from '../assets/images/tricep.png';

const ExerciseImages = (target) => {
  /*console.log("target")
  console.log(target)*/
  let imageSource;

  switch (target.targetMuscle) {
    case 'Abdominals':
      imageSource = img_abdominals;
      break;
    case 'Biceps':
      imageSource = img_biceps;
      break;
    case 'Calves':
      imageSource = img_calves;
      break;
    case 'Chest':
      imageSource = img_chest;
      break;
    case 'Forearms':
      imageSource = img_forearms;
      break;
    case 'Glutes':
      imageSource = img_glutes;
      break;
    case 'Hamstrings':
      imageSource = img_hamstrings;
      break;
    case 'Lats':
      imageSource = img_lats;
      break;
    case 'Lower back':
      imageSource = img_lowerBack;
      break;
    case 'Mid back':
      imageSource = img_midBack;
      break;
    case 'Obliques':
      imageSource = img_obliques;
      break;
    case 'Quads':
      imageSource = img_quads;
      break;
    case 'Shoulders':
      imageSource = img_shoulders;
      break;
    case 'Traps':
      imageSource = img_traps;
      break;
    case 'Triceps':
      imageSource = img_triceps;
      break;
    default:
      imageSource = 'http://via.placeholder.com/300x400'; // Set a default image source or leave it as an empty string if desired
  }

  return (
    <img alt={target.targetMuscle[0]} src={imageSource} style={{ maxWidth: '250px', backgroundColor:'#d1d1d1', padding:'20px' }}/>
  );
};

export default ExerciseImages;
