import { RouterProvider } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';
import router from '@/configs/routers';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container
      sx={{
        textAlign: 'center',
        marginTop: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <RouterProvider router={router} />
    </Container>
  </ThemeProvider>
);

export default App;
