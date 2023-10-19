<script setup>
import { ref } from 'vue'
import SuperheroeDetails from './SuperheroDetails.vue'
const props = defineProps(['items'])

let selectedItem = ref(null)
function showDetails(item) {
  selectedItem.value = {
    ...item,
    clicks: ++item.clicks
  }
}
</script>

<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-row align="center" justify="center">
          <v-col v-for="(item, index) in props.items" :key="index" cols="10" md="6" lg="4">
            <v-card
              class="d-flex align-center mx-auto card-height"
              dark
              @click="showDetails(item)"
            >
              <v-card-title class="wrap-title">
                {{ item.name }}
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-row align="center" justify="center" v-if="selectedItem">
          <SuperheroeDetails :itemProps="selectedItem" />
        </v-row>
        <v-row align="center" justify="center" v-else>
          <p>Select an item to see details</p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.wrap-title {
  flex: auto;
  white-space: normal;
  word-break: break-word;
}
.card-height{
  height: 10vh;
}
</style>
