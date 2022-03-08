<script setup>
import { ref } from 'vue'
import BaseButton from './components/BaseButton.vue';
const bText = ref('type your text here!')
const bColor = ref()
</script>

<template>
  <div>
    <div>Your Text: {{ bText }} <input type="text" v-model="bText"></div>
    <div>Your Color: <input type="color" v-model="bColor"> </div>
    <BaseButton :yourText="bText" :yourColor="bColor"></BaseButton>
    
  </div>
</template>

<style>

</style>
