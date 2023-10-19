<script setup>
const props = defineProps(['itemProps'])
</script>
<template>
  <v-container>
    <v-card class="mx-auto">
      <v-img
        :src="`${props.itemProps.thumbnail.path}.${props.itemProps.thumbnail.extension}`"
        cover
      />
      <div class="d-flex flex-no-wrap justify-space-between align-center">
        <v-card-title class="wrap-title">
          {{ props.itemProps.name }}
        </v-card-title>
        <v-card-subtitle>
          <v-icon icon="mdi-eye" />
          {{ props.itemProps.clicks }}
        </v-card-subtitle>
      </div>
      <v-card-text v-if="props.itemProps.description">
        {{ props.itemProps.description }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.wrap-title {
  flex: auto;
  white-space: normal;
  word-break: break-word;
}
</style>
