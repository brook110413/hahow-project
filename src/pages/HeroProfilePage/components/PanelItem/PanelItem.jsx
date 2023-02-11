import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Box } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { increment, decrement } from '@/redux/slice/heroProfile';

const PanelItem = ({ skill, value, skillIndex }) => {
  const dispatch = useDispatch();
  const { profileFormat, lastValue } = useSelector(
    (state) => state.heroProfile,
  );

  const handleIncrease = () => {
    if (lastValue > 0) {
      dispatch(increment(profileFormat[skillIndex]?.skill));
    }
  };

  const handleDecrease = () => {
    if (profileFormat[skillIndex]?.value > 0) {
      dispatch(decrement(profileFormat[skillIndex]?.skill));
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        sx={{
          width: '100px',
        }}
      >
        {skill.toUpperCase()}
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button onClick={handleIncrease} disabled={lastValue === 0}>
          <Add />
        </Button>
        <div>{value && value}</div>
        <Button
          onClick={handleDecrease}
          disabled={profileFormat[skillIndex]?.value === 0}
        >
          <Remove />
        </Button>
      </Box>
    </Box>
  );
};

PanelItem.propTypes = {
  skill: PropTypes.string.isRequired,
  skillIndex: PropTypes.number.isRequired,
  value: PropTypes.number,
};

export default PanelItem;
