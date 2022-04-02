<script setup>
import Message from '../components/Message.vue';
import { useRouter,useRoute } from 'vue-router';
let { params } = useRoute()
const appRouter = useRouter()

const goMain = () => appRouter.push({ name: 'Main'})
</script>
 
<template>
    <Message :message="params.message"></Message>
    <button @click="goMain">Back</button>
</template>
 
<style>

</style>