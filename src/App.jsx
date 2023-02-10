import { RouterProvider } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import router from '@/configs/routers';

const App = () => (
  <>
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
  </>
);

export default App;
