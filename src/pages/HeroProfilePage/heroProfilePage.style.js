import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const sxStyle = {
  lastValueContainer: {
    alignSelf: 'end',
  },
  button: {
    width: '150px',
  },
};

export const StyledGrid = styled(Grid)(({ theme }) => ({
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  padding: '10px 0',
  [theme.breakpoints.down('sm')]: {
    gap: '30px',
  },
}));

export default sxStyle;
