import { createRouter, createWebHistory } from 'vue-router';
import ListStudents from '../components/ListStudents.vue';
import CreateStudent from '../components/CreateStudent.vue';

const routes = [
  { path: '/', name: 'ListStudents', component: ListStudents },
  { path: '/create', name: 'CreateStudent', component: CreateStudent },
  // Add routes for editing and viewing more details
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
