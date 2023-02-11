import PropTypes from 'prop-types';
import { Backdrop, CircularProgress } from '@mui/material';
import sxStyle from './customBackdrop.style';

const CustomBackdrop = ({ open }) => (
  <Backdrop sx={sxStyle.backdrop} open={open}>
    <CircularProgress color="inherit" />
  </Backdrop>
);

CustomBackdrop.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default CustomBackdrop;
