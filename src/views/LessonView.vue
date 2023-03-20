<script lang="ts" setup>
	import { useRoute } from 'vue-router';
	import { vueVimeoPlayer } from 'vue-vimeo-player';
	import courses from '../courses';
	
	const route = useRoute();

	const { courseId, lessonId } = route.params;
	const course = courses.find(course => course.id === parseInt(courseId as string));
	const lesson = course?.lessons.find(lesson => lesson.id === parseInt(lessonId as string));
</script>

<template>
	<div class="Lesson page">
		<header>
			<p>
				<router-link :to="'/courses/' + course?.id">
					Back to {{  course?.title }}
				</router-link>
			</p>
			<h1>
				{{ lesson?.title }}
			</h1>
		</header>
		<div class="Content">
			<vue-vimeo-player 
				:video-id="lesson?.vimeoId"
				:options="{ responsive: true }"
			/>
		</div>
	</div>
</template>