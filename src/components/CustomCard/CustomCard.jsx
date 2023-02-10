import PropTypes from 'prop-types';
import { CardContent, CardMedia, Typography } from '@mui/material';
import StyledCard from './customCard.style';

const CustomCard = ({ name, image, activeIndex = null, id }) => (
  <StyledCard activeIndex={activeIndex} id={id}>
    <div className="cardMediaContainer">
      <CardMedia image={image} />
    </div>
    <CardContent>
      <Typography>{name}</Typography>
    </CardContent>
  </StyledCard>
);

CustomCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  activeIndex: PropTypes.string,
};

export default CustomCard;
