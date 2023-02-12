import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';
import store from '@/redux/store';
import router from '@/configs/routers';
import sxStyle from './app.style';
import '@/utils/i18n';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={sxStyle.container}>
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  </Provider>
);

export default App;
