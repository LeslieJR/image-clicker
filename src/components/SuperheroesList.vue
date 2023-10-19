<script setup>
const props = defineProps(['items'])
</script>

<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-row align="center" justify="center">
          <v-col v-for="(item, index) in props.items" :key="index" cols="10" md="6" lg="4">
            <v-card
              class="d-flex align-center mx-auto"
              dark
              height="100px"
            >
              <v-card-title class="wrap-title">
                {{ item.name }}
              </v-card-title>
            </v-card>
          </v-col>
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
</style>
