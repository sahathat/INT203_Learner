<script setup>
import { ref, computed } from 'vue'
const base = ref(2)
const height = ref(2)
const area = computed(() => {
  return (1 / 2) * base.value * height.value
}) //ref function when call back send name
</script>

<template>
  <h1>Area of Triangle</h1>
  <p>Base: {{ base }} <button @click="++base">+</button> <button @click="--base">-</button></p>
  <p>Height: {{ height }} <button @click="++height">+</button> <button @click="--height">-</button></p>
  <p>Result Area: {{ area }}</p>
  <hr>
</template>

<style></style>