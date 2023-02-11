import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';
import store from '@/redux/store';
import router from '@/configs/routers';

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
