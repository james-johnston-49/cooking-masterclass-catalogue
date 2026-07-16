<script setup>
    import { useStore } from 'vuex'
    import { computed, ref, watch } from 'vue'

    const store = useStore()
    const wishlistCount = computed(() => store.state.wishlistCount)
    const isPulsing = ref(false)

    watch(wishlistCount, () => {
        isPulsing.value = true
        setTimeout(() => {
            isPulsing.value = false
        }, 400)
    })
</script>

<template>

    <header>
        <h1>Cooking Masterclass</h1>
        <p :class="{ pulse: isPulsing }">Wishlist: {{ wishlistCount }}</p>
    </header>
    
</template>

<style scoped>

header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--color-terracotta);
    color: white;

    padding: 1rem 1.5rem;
    border-radius: 12px;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
}

.pulse {
  animation: pulse 0.4s ease;
}

</style>