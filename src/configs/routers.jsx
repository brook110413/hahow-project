import { createBrowserRouter, Navigate } from 'react-router-dom';
import HeroListPage from '@/pages/HeroListPage';
import NotFoundPage from '@/pages/NotFoundPage';
import HeroProfilePage from '@/pages/HeroProfilePage';

const ROUTES = [
  {
    path: '/',
    element: <Navigate to="/heroes" replace />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/heroes',
    element: <HeroListPage />,
    children: [
      {
        path: ':heroId',
        element: <HeroProfilePage />,
      },
    ],
  },
];

const router = createBrowserRouter(ROUTES);

export default router;
