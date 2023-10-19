<script setup>
import { onMounted, ref } from 'vue'
import { fetchSuperheroes } from './client/fetchSuperHeroes'
import HelloWorld from './components/HelloWorld.vue'
let items = ref([])
const page = ref(1)

onMounted(async () => {
  try {
    const data = await fetchSuperheroes(page)
    console.log(JSON.stringify(data))
    items.value = data.results.map((item) => ({ ...item, clicks: 0 }))

  } catch (error) {
    console.error('Error fetching superheroes:', error)
    // Display a modal with the error - will be an improvement
  }
})
</script>

<template>
  <HelloWorld />
</template>

<style scoped>
</style>
