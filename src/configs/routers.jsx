import { createBrowserRouter, Navigate } from 'react-router-dom';
import HeroListPage from '@/pages/HeroListPage';
import NotFoundPage from '@/pages/NotFoundPage';
import HeroProfilePage from '@/pages/HeroProfilePage';
import { heroesListLoader, heroProfileLoader } from '@/utils/helper';

const ROUTES = [
  {
    path: '/',
    element: <Navigate to="/heroes" replace />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/heroes',
    element: <HeroListPage />,
    loader: heroesListLoader,
    children: [
      {
        path: ':heroId',
        element: <HeroProfilePage />,
        loader: heroProfileLoader,
      },
    ],
  },
];

const router = createBrowserRouter(ROUTES);

export default router;
