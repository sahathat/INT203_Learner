<script setup>
let buttonEmits = defineEmits(['confirm'])
</script>
 

<template>
<div>
    <button @click="$emit('confirm','USER_CONFIRM')">confirm</button>
</div>
</template>
 
<style>

</style>