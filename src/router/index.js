import { createRouter, createWebHistory } from 'vue-router';
import ListStudents from '../components/ListStudents.vue';
import CreateStudent from '../components/CreateStudent.vue';
import Grades from '../components/Grades.vue';
import ProgramProspectus from '../components/ProgramProspectus.vue';
import StudentProspectus from '../components/StudentProspectus.vue';

const routes = [
  { path: '/', name: 'ListStudents', component: ListStudents },
  { path: '/create', name: 'CreateStudent', component: CreateStudent },
  { path: '/grades', name: 'Grades', component: Grades },
  { path: '/program-prospectus', name: 'ProgramProspectus', component: ProgramProspectus },
  { path: '/student-prospectus', name: 'StudentProspectus', component: StudentProspectus },
  // Add routes for editing and viewing more details
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
