import { createTheme } from '@mui/material/styles';

// custom theme
// 可在此客製化 theme
const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
  // custom color
  palette: {
    success: {
      main: '#59e2d1',
    },
  },
});

export default theme;
