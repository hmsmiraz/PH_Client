import SemesterRegistration from "../pages/Student/semesterRegistration";
import StudentDashboard from "../pages/Student/studentDashboard";

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
