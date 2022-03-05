<script setup>
let defineEmits = (['increment'])
</script>
 
<template>
    <button @click="$emit('increment',1)">+</button>
</template>
 
<style>

</style>