import App from './App';
import ErrorPage from './features/Pages/Error/ErrorPage';
import HomePage from './features/Pages/Home/HomePage';
import ShopPage from './features/Pages/Shop/ShopPage';
import { Navigate } from 'react-router-dom';

export default [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '*', element: <ErrorPage /> },
      { path: '', element: <HomePage /> },
      { path: 'products', element: <ShopPage /> },
      { path: 'blog', element: <Navigate to="/" /> },
      { path: 'about', element: <Navigate to="/" /> },
    ],
  },
];
