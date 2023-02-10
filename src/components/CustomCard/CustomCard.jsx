import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import sxStyle from './customCard.style';

const CustomCard = ({ name, image }) => (
  <Card sx={sxStyle.card}>
    <CardMedia sx={sxStyle.cardMedia} image={image} />
    <CardContent>
      <Typography>{name}</Typography>
    </CardContent>
  </Card>
);

CustomCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CustomCard;
