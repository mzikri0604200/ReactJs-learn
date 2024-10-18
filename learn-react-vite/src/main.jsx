import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Board from './pages/TicTacToe.jsx';
import ErrorPage from './pages/404.jsx';

const router = createBrowserRouter([
  {
    path: process.env.PUBLIC_URL + '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/board',
    element: <Board />,
    errorElement: <ErrorPage />,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
