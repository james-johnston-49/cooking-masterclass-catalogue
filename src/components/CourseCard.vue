<script setup>
defineProps({
  course: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="course-card">
    <h2>{{ course.title }}</h2>
    <p>Chef: {{ course.chef }}</p>
    <p>Level: {{ course.level }}</p>
    <p>Price: ${{ course.price }}</p>
    <p v-if="course.available">Available</p>
    <p v-else>Sold Out</p>
  </div>
</template>
