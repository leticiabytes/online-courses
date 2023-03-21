import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CourseView from '../views/CourseView.vue';
import LessonView from '../views/LessonView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/courses/:courseId',
      name: 'course',
      component: CourseView
    },
    {
      path: '/courses/:courseId/lessons/:lessonId',
      name: 'lesson',
      component: LessonView
    },
  ]
})

export default router
