<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
let { params } = useRoute()

let image = ref("../Canny/" + params.id + ".jpg")

console.log(image.value)
</script>

<template>
    <div>
        <p>Phase: {{params.id}}</p>
        <img :src="image" width="400" height="400"> <br>
        <router-link :to="{ name: 'Main'}">back</router-link>
    </div>
</template>

<style></style>
