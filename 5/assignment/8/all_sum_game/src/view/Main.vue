<script setup>
import { useRouter } from 'vue-router';
const appRouter = useRouter()

const goPlay = () => appRouter.push({ name: 'Play'})
</script>
 
<template>
<h1>All sum by row and side equal</h1>
<button @click="goPlay">Play</button>
</template>
 
<style>

</style>