<script setup>
import { onMounted, ref } from 'vue'
import { fetchSuperheroes } from './client/fetchSuperHeroes'
import HeaderTitle from './components/HeaderTitle.vue'
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

function handleClick(clickedSuperhero) {
  const itemToUpdate = items.value.find((item) => item.id === clickedSuperhero.id)
  if (itemToUpdate) {
    itemToUpdate.clicks++
  }
}
</script>

<template>
  <HeaderTitle />
  <SuperheroesList :items="items" @item-clicked="handleClick" />
</template>

<style scoped></style>
