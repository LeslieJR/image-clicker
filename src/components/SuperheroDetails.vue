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
      <v-card-title class="wrap-title">
        {{ props.itemProps.name }}
      </v-card-title>
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
