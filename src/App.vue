<script setup>
import { onMounted, ref } from 'vue'
import { fetchSuperheroes } from './client/fetchSuperHeroes'
import SuperheroesList from './components/SuperheroesList.vue'
let items = ref([])
const page = ref(1)

onMounted(async () => {
  try {
    const data = await fetchSuperheroes(page)
    items.value = data.results.map((item) => ({ ...item, clicks: 0 }))
  } catch (error) {
    console.error('Error fetching superheroes:', error)
    // Display a modal with the error - will be an improvement
  }
})
</script>

<template>
  <SuperheroesList :items="items" />
</template>

<style scoped>
</style>
