import { useLoaderData } from 'react-router-dom';
import { Paper } from '@mui/material';

const HeroProfilePage = () => {
  console.log('HeroProfilePage');
  const heroProfileData = useLoaderData();

  console.log('heroPeofileData', heroProfileData);

  return <Paper elevation={3}>{heroProfileData.agi}</Paper>;
};

export default HeroProfilePage;
