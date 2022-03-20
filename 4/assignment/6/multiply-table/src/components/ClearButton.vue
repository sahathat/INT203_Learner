<script setup>
defineEmits(['clear'])
</script>
 
<template>
<button @click="$emit('clear')">Clear</button>
</template>
 
<style>

</style>