import { Outlet, useLoaderData } from 'react-router-dom';
import { Paper, Box } from '@mui/material';
import CustomCard from '@/components/CustomCard';
import sxStyle, { StyledLink } from './heroListPage.style';

const HeroListPage = () => {
  console.log('HeroListPage');
  const heroesListData = useLoaderData();

  return (
    <Box>
      <Paper sx={sxStyle.container} elevation={3}>
        {heroesListData.map(({ id, name, image }) => (
          <StyledLink key={id} to={`/heroes/${id}`}>
            <CustomCard name={name} image={image} />
          </StyledLink>
        ))}
      </Paper>
      <Outlet />
    </Box>
  );
};
export default HeroListPage;
