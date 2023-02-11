import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Button, Box } from '@mui/material';
import { getProfile, formatProfile } from '@/redux/slice/heroProfile';
import { StyledGrid } from './heroProfilePage.style';
import PanelItem from './components/PanelItem';

const HeroProfilePage = () => {
  const loaderData = useLoaderData();
  const { heroId } = useParams();
  const dispatch = useDispatch();
  const { profile, profileFormat, lastValue } = useSelector(
    (state) => state.heroProfile,
  );

  const updateProfile = () => {
    const api = `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`;
    const method = 'PATCH';
    const headers = {
      'Content-Type': 'application/json',
    };
    fetch(api, {
      method,
      headers,
      body: JSON.stringify(profile),
    }).then((res) => console.log('res', res));
  };

  useEffect(() => {
    dispatch(getProfile(loaderData));
  }, []);

  useEffect(() => {
    if (Object.keys(profile).length !== 0) {
      dispatch(formatProfile(profile));
    }
  }, [profile]);

  return (
    <StyledGrid container>
      <Grid item xs={6}>
        {profileFormat.map(({ skill, value }, idx) => (
          <PanelItem key={skill} skill={skill} value={value} skillIndex={idx} />
        ))}
      </Grid>
      <Grid item xs={6}>
        <Box>剩餘點數: {lastValue}</Box>
        <Button onClick={updateProfile} disabled={lastValue !== 0}>
          儲存
        </Button>
      </Grid>
    </StyledGrid>
  );
};

export default HeroProfilePage;
