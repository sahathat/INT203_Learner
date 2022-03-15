<script setup>
import {defineProps,defineEmits} from 'vue'
defineProps({
  notes: {
    type: Array,
    require: true
  }
})
defineEmits(['deleteNote','editNote'])
</script>

<template>
<div>
  <h2>Note List:</h2>
  <ul>
    <li v-for="(note, index) in notes" :key="index">
      Note Id: {{ note.id }} : {{ note.name }}
      <button @click="$emit('editNote', note)">Edit</button>
      <button @click="$emit('deleteNote', note.id)">Delete</button>
    </li>
  </ul>
</div>
</template>

<style scoped>

</style>
