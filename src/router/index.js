import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "../components/DashBoard.vue";
import ListStudents from "../components/StudentComponents/ListStudents.vue";
import CreateStudent from "../components/StudentComponents/CreateStudent.vue";
import EditStudent from "../components/StudentComponents/EditStudent.vue";
import Grades from "../components/Grades.vue";
import ProgramProspectus from "../components/ProgramProspectusComponents/ProgramProspectus.vue";
import CreateProgramProspectus from "../components/ProgramProspectusComponents/CreateProgramProspectus.vue";
import StudentProspectus from "../components/StudentComponents/StudentProspectus.vue";
import Documentation from "../components/Documentation.vue";
import StudentProfile from "@/components/StudentComponents/StudentProfile.vue";
import EditProgramProspectus from "@/components/ProgramProspectusComponents/EditProgramProspectus.vue";

const routes = [
  { path: "/", name: "DashBoard", component: DashBoard },
  { path: "/list-students", name: "ListStudents", component: ListStudents },
  {
    path: "/student-profile/:id",
    name: "StudentProfile",
    component: StudentProfile,
  },
  { path: "/create-student", name: "CreateStudent", component: CreateStudent },
  { path: "/edit/:id", name: "EditStudent", component: EditStudent },
  { path: "/grades", name: "Grades", component: Grades },
  {
    path: "/program-prospectus",
    name: "ProgramProspectus",
    component: ProgramProspectus,
  },
  {
    path: "/create-program-prospectus",
    name: "CreateProgramProspectus",
    component: CreateProgramProspectus,
  },
  {
    path: "/edit-program-prospectus/:id",
    name: "EditProgramProspectus",
    component: EditProgramProspectus,
  },
  {
    path: "/student-prospectus",
    name: "StudentProspectus",
    component: StudentProspectus,
  },
  // Add routes for editing and viewing more details
  {
    path: "/documentation",
    name: "Documentation",
    component: Documentation,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
