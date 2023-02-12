import { createTheme } from '@mui/material/styles';

// custom theme
const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
  palette: {
    success: {
      main: '#59e2d1',
    },
  },
});

export default theme;
