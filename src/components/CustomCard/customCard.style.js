import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'activeIndex' && prop !== 'id',
})(({ activeIndex, id, theme }) => ({
  width: 200,
  p: 1,
  backgroundColor: activeIndex === id && theme.palette.success.main,
  '& .MuiCardMedia-root': {
    transition: 'transform 0.8s',
    height: 200,
  },
  '& .cardMediaContainer': {
    overflow: 'hidden',
  },
  '&:hover': {
    transition: 'transform 0.8s',
    '& .MuiCardMedia-root': {
      transition: 'transform 0.8s',
      transform: 'scale(1.1)',
    },
  },
}));

export default StyledCard;
