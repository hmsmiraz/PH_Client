import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { routeGenerator } from '../utils/routesGenerator';
import { adminPaths } from './admin.routes';
import { facultyPaths } from './faculty.routes';
import { studentPaths } from './student.routes';
import Login from '../pages/Login';
import Register from '../pages/Register';
import About from '../pages/About';
import Contact from '../pages/Contact';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin',
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  {
    path: '/faculty',
    element: <App />,
    children: routeGenerator(facultyPaths),
  },
  {
    path: '/student',
    element: <App />,
    children: routeGenerator(studentPaths),
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;