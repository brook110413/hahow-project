import { useLoaderData } from 'react-router-dom';
import { Grid } from '@mui/material';
import { StyledGrid } from './heroProfilePage.style';
import PanelItem from './components/PanelItem';

const HeroProfilePage = () => {
  const heroProfileData = useLoaderData();

  const heroProfileObj = Object.entries(heroProfileData).map(
    ([skill, value]) => ({ skill, value }),
  );

  return (
    <StyledGrid container>
      <Grid item xs={6}>
        {heroProfileObj.map(({ skill, value }) => (
          <PanelItem key={skill} skill={skill} value={value} />
        ))}
      </Grid>
      <Grid item xs={6}>
        123
      </Grid>
    </StyledGrid>
  );
};

export default HeroProfilePage;
