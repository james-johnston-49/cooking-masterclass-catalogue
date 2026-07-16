<script setup>
import CourseCard from "../components/CourseCard.vue";
import { courses } from "../data/courses.js";
</script>

<template>
  <CourseCard v-for="course in courses" :key="course.id" :course="course" />
</template>
