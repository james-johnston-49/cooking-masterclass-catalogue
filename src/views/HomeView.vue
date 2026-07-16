<script setup>
import CourseCard from "../components/CourseCard.vue";
import { courses } from "../data/courses.js";
import AppHeader from "../components/AppHeader.vue";
</script>

<template>

  <AppHeader />

  <section class="hero">
    <h2>Learn to Cook Like a Pro</h2>
    <p>Browse hands-on classes taught by expert chefs from around the world.</p>
  </section>

  <div class="course-grid">
    <CourseCard v-for="course in courses" :key="course.id" :course="course" />
  </div>

</template>

<style scoped>

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.hero {
  text-align: center;
  padding: 2rem 1rem;
}

.hero h2 {
  font-size: 2rem;
  color: var(--color-terracotta);
  margin-bottom: 0.5rem;
}

.hero p {
  color: var(--color-dark);
  font-size: 1.1rem;
}

</style>