import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const StyledGrid = styled(Grid)(({ theme }) => ({
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
}));
