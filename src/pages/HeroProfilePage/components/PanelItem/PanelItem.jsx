import PropTypes from 'prop-types';
import { Button, Box } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const PanelItem = ({ skill, value }) => (
  <Box display="flex" justifyContent="center" alignItems="center">
    <Box
      sx={{
        width: '100px',
      }}
    >
      {skill.toUpperCase()}
    </Box>
    <Box display="flex" justifyContent="center" alignItems="center">
      <Button>
        <Add />
      </Button>
      <div>{value}</div>
      <Button>
        <Remove />
      </Button>
    </Box>
  </Box>
);

PanelItem.propTypes = {
  skill: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default PanelItem;
