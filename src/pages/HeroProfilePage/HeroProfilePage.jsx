import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
  const { t } = useTranslation();
  const { profile, profileFormat, lastValue } = useSelector(
    (state) => state.heroProfile,
  );

  const updateProfile = () => {
    const api = `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`;
    const fetchData = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    };
    dispatch(updateLoadingStatus(true));
    fetch(api, fetchData).then((res) => {
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
        <Box>
          <Box>
            {t('last_point')}
            {lastValue}
          </Box>
          <Button
            onClick={updateProfile}
            disabled={lastValue !== 0}
            sx={sxStyle.button}
          >
            <Typography variant="h6">{t('save')}</Typography>
          </Button>
        </Box>
      </Grid>
    </StyledGrid>
  );
};

export default HeroProfilePage;
