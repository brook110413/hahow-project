import { createBrowserRouter, Navigate } from 'react-router-dom';
import HeroListPage from '@/pages/HeroListPage';
import NotFoundPage from '@/pages/NotFoundPage';

const ROUTES = [
  {
    path: '/',
    element: <Navigate to="/heroes" replace />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/heroes',
    element: <HeroListPage />,
  },
];

const router = createBrowserRouter(ROUTES);

export default router;
