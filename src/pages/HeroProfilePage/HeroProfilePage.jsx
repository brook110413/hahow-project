import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Button, Box, Typography } from '@mui/material';
import {
  getProfile,
  formatProfile,
  updateLoadingStatus,
} from '@/redux/slice/heroProfile';
import sxStyle, { StyledGrid } from './heroProfilePage.style';
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
    dispatch(updateLoadingStatus(true));
    fetch(api, {
      method,
      headers,
      body: JSON.stringify(profile),
    }).then((res) => {
      if (res.ok) {
        dispatch(updateLoadingStatus(false));
      }
    });
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
      <Grid item xs={12} sm={6}>
        <Box display="flex" flexDirection="column" gap={2}>
          {profileFormat.map(({ skill, value }, idx) => (
            <PanelItem
              key={skill}
              skill={skill}
              value={value}
              skillIndex={idx}
            />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} sx={sxStyle.lastValueContainer}>
        <div>
          <Box>剩餘點數: {lastValue}</Box>
          <Button
            onClick={updateProfile}
            disabled={lastValue !== 0}
            sx={sxStyle.button}
          >
            <Typography variant="h6">儲存</Typography>
          </Button>
        </div>
      </Grid>
    </StyledGrid>
  );
};

export default HeroProfilePage;
