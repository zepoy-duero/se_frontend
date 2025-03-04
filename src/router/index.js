import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "../components/DashBoard.vue";
import ListStudents from "../components/ListStudents.vue";
import CreateStudent from "../components/CreateStudent.vue";
import EditStudent from "../components/EditStudent.vue";
import Grades from "../components/Grades.vue";
import ProgramProspectus from "../components/ProgramProspectus.vue";
import CreateProgramProspectus from "../components/CreateProgramProspectus.vue";
import StudentProspectus from "../components/StudentProspectus.vue";
import Documentation from "../components/Documentation.vue"
import StudentProfile from "@/components/StudentProfile.vue";

const routes = [
  { path: "/", name: "DashBoard", component: DashBoard },
  { path: "/list-students", name: "ListStudents", component: ListStudents },
  { path: "/student-profile/:id", name: "StudentProfile", component: StudentProfile },
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
