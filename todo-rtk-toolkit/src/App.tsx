import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import InRtkPage from './pages/InRtkPage.tsx';
import InSlicePage from './pages/InSlicePage.tsx';

const router = createBrowserRouter([
  {
    path: '/inSlice',
    element: <InSlicePage />,
  },
  {
    path: '/inRtk',
    element: <InRtkPage />,
  },
  {
    index: true,
    path: '*',
    element: <Navigate to="/inSlice" />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
