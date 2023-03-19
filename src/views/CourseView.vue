<script lang="ts" setup>
import { useRoute } from 'vue-router';
import courses from '../courses';

const route = useRoute()
const courseId = route.params.courseId
const course = courses.find(course => course.id === parseInt(courseId as string));

</script>

<template>
  <div class="Course page">
    <header>
      <p>
        <router-link :to="{ name: 'home' }">Back to courses</router-link>
      </p>
      <h1>{{ course?.title }}</h1>
      <p>{{ course?.description }}</p>
    </header>
    
  </div>
</template>