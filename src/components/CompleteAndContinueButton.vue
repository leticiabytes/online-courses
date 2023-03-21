<script lang="ts" setup>
	import { useRouter } from 'vue-router';

	const router = useRouter();
	const props = defineProps({
		courseId: {
			type: String,
			required: true,
		},
		lessonId: {
			type: String,
			required: true,
		}
	});

	function completAndContinue() {
		router.push(`/courses/${props.courseId}/lessons/${props.lessonId}`);
	}
</script>

<template>
	<button class="button primary" @click="completAndContinue">
		Complete and continue
	</button>
</template>