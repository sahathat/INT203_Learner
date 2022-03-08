<script setup>
import { onBeforeUnmount, onUnmounted } from 'vue'
defineProps({
  currentNumber:{
    type: Number
  }
})

onBeforeUnmount(()=>alert('on before unmount'))
onUnmounted(()=>alert('on unmounted'))

// click to terminate tag with v-if if on before update > on before unmount > on unmount > on updated

</script>
 
<template>
current num: {{ currentNumber }}
</template>
 
<style>

</style>