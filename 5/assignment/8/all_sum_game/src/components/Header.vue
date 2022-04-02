<script setup>
defineProps({
  genNum: {
    type: Number,
    default: 15,
  },
});
defineEmits(["check", "reset"]);
</script>

<template>
  <input type="number" v-model="genNum" />
  <button @click="$emit('check')">Check</button>
  <button @click="$emit('reset')">Reset</button>
</template>

<style></style>
