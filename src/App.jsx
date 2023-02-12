import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { CssBaseline, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';
import store from '@/redux/store';
import i18n from '@/utils/i18n';
import router from '@/configs/routers';
import sxStyle from './app.style';

const App = () => (
  <Provider store={store} i18n={i18n}>
    <I18nextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container sx={sxStyle.container}>
          <RouterProvider router={router} />
        </Container>
      </ThemeProvider>
    </I18nextProvider>
  </Provider>
);

export default App;
