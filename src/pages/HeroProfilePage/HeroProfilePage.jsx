import { useLoaderData } from 'react-router-dom';
import { Paper, Button } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const HeroProfilePage = () => {
  console.log('HeroProfilePage');
  const heroProfileData = useLoaderData();

  return (
    <Paper elevation={3}>
      <div>
        <div>
          <div>{Object.keys(heroProfileData)[0]}</div>
          <div>
            <Button>
              <Add />
            </Button>
            <Button>
              <Remove />
            </Button>
          </div>

          {heroProfileData[Object.keys(heroProfileData)[0]]}
        </div>
      </div>
    </Paper>
  );
};

export default HeroProfilePage;
