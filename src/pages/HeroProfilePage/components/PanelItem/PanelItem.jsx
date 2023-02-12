import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { increment, decrement } from '@/redux/slice/heroProfile';
import sxStyle from './panelItem.style';

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
      <Box sx={sxStyle.container}>{skill.toUpperCase()}</Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button onClick={handleIncrease} disabled={lastValue === 0}>
          <AddIcon />
        </Button>
        <Box sx={sxStyle.currentValue}>{value && value}</Box>
        <Button
          onClick={handleDecrease}
          disabled={profileFormat[skillIndex]?.value === 0}
        >
          <RemoveIcon />
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
