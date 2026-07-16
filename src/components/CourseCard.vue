<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const props = defineProps({
  course: {
    type: Object,
    required: true,
  },
});

const isSaved = ref(false)

function saveCourse() {
  if (!props.course.available || isSaved.value) return
  isSaved.value = true
  store.dispatch('saveCourseToWishlist')
}
</script>

<template>

  <div class="course-card" :class="{ 'is-sold-out': !course.available }">
    <img v-if="course.image" :src="course.image" :alt="course.title" class="course-image" />
    <div v-if="!course.available" class="ribbon">Sold Out</div>
    
    <h2>{{ course.title }}</h2>
    <p>Chef: {{ course.chef }}</p>

    <span class="level-badge">{{ course.level }}</span>

    <p>Price: ${{ course.price }}</p>

    <button class="save-btn" @click="saveCourse" :disabled="!course.available || isSaved">
      {{ isSaved ? '✓ Saved' : '+ Save to Wishlist' }}
    </button>

    <p v-if="course.available">Available</p>
  </div>

</template>

<style scoped>

.course-card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;

  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  max-width: 300px;

  background-color: white;
  color: var(--color-dark);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
}

.course-image {
  align-self: stretch;
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
}

.save-btn {
  background-color: var(--color-terracotta);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  align-self: stretch;
}
.save-btn:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
}

h2 {
  color: var(--color-olive);
  font-weight: 700;
  font-size: 1.3rem;
}

.level-badge {
  display: inline-block;
  background-color: var(--color-olive);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
}

.course-card.is-sold-out {
  opacity: 0.75;
}

.ribbon {
  position: absolute;
  top: 14px;
  right: -30px;
  background-color: var(--color-warning);
  color: white;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0.3rem 2.5rem;
  transform: rotate(45deg);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

</style>
