import FacultyDashboard from "../pages/Faculty/facultyDashboard";
import OfferedCourse from "../pages/Faculty/offeredCourse";

export const facultyPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <FacultyDashboard />,
  },
  {
    name: 'Offered Course',
    path: 'offered-course',
    element: <OfferedCourse />,
  },
];