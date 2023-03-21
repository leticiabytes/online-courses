<script lang="ts" setup>
	import { useRoute } from 'vue-router';
	import { vueVimeoPlayer } from 'vue-vimeo-player';
	import CompleteAndContinueButton from '@/components/CompleteAndContinueButton.vue';
	import courses from '../courses';
	
	const route = useRoute();

	const { courseId, lessonId } = route.params;
	const course = courses.find(course => course.id === parseInt(courseId as string));
	const lesson = course?.lessons.find(lesson => lesson.id === parseInt(lessonId as string));

	const currentIndex = course?.lessons.indexOf(lesson);
	const nextIndex = (currentIndex + 1) % (course?.lessons.length ?? 0);
	const nextLessonId = course?.lessons[nextIndex]?.id?.toString();
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
				<CompleteAndContinueButton 
					:courseId="courseId as string"
					:lessonId="nextLessonId as string"
				/>
			</div>
		</div>
</template>