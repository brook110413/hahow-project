import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const sxStyle = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    p: 3,
    gap: '20px',
    mb: 3,
  },
};

export const StyledLink = styled(Link)(() => ({
  textDecoration: 'none',
}));

export default sxStyle;
