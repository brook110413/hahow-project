import {
  Outlet,
  useLoaderData,
  useNavigation,
  useParams,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CustomCard from '@/components/CustomCard';
import CustomBackdrop from '@/components/CustomBackdrop';
import sxStyle, { StyledLink } from './heroListPage.style';

const HeroListPage = () => {
  const { heroId } = useParams();
  const heroesListData = useLoaderData();
  const navigation = useNavigation();
  const { isLoading } = useSelector((state) => state.heroProfile);

  return (
    <Box>
      <CustomBackdrop open={isLoading} />
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
