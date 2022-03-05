<script setup>
let defineEmits = defineEmits(['decrement'])
</script>
 
<template>
    <button @click="$emit('decrement',1)">-</button>
</template>
 
<style>

</style>