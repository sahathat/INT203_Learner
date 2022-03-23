<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
let { params } = useRoute()

const appRouter = useRouter()
const goBack = () => appRouter.go(-1)
// Or appRouter.push({ name: 'Home'})

const goProfile = () => appRouter.push({ name: 'Profile' })

const image = ref('../images/' + params.id + '.png')
</script>
 
<template>
<h1>Product Item</h1>
<p>here. Product Id: {{params.id}}, Name: {{this.$route.params.productName}}</p>
<img :src="image" alt="product" width="500"> <br>
<button @click="goBack">Back</button>
<button @click="goProfile">My profile</button>
</template>
 
<style>

</style>