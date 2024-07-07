import SemesterRegistration from "../pages/Student/SemesterRegistration";
import StudentDashboard from "../pages/Student/StudentDashboard";


export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "semester registration",
    path: "semester-registration",
    element: <SemesterRegistration />,
  },
];
