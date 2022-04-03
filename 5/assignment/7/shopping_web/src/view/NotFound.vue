<script setup>
import { useRouter } from 'vue-router';
const appRouter = useRouter()

const goMain = () => appRouter.push({ name: 'Home'})
</script>
 
<template>
<h1 :style="{ color: 'red' }">
    Error 404: Not Found
</h1>
<button @click="goMain">Back</button>
</template>
 
<style>

</style>