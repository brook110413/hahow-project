import {
  Outlet,
  useLoaderData,
  useNavigation,
  useParams,
} from 'react-router-dom';
import { Paper, Box } from '@mui/material';
import CustomCard from '@/components/CustomCard';
import sxStyle, { StyledLink } from './heroListPage.style';

const HeroListPage = () => {
  const { heroId } = useParams();
  const heroesListData = useLoaderData();
  const navigation = useNavigation();

  return (
    <Box>
      <Paper sx={sxStyle.container} elevation={3}>
        {heroesListData.map(({ id, name, image }) => (
          <StyledLink key={id} to={`/heroes/${id}`}>
            <CustomCard
              name={name}
              image={image}
              activeIndex={heroId}
              id={id}
            />
          </StyledLink>
        ))}
      </Paper>
      {navigation.state === 'loading' ? <h1>Loading...</h1> : <Outlet />}
    </Box>
  );
};
export default HeroListPage;
