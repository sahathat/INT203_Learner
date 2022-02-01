<script setup>
import {ref} from 'vue'
const base = ref(2)
const height = ref(2)
const area = ref(0)

const computeArea = () => {
  console.log('compute area working')
  area.value = (1/2) * base.value * height.value
};
</script>
 
<template>
<h1>Input Triangle area</h1>
<p>Base: <input type="number" v-model="base"></p>
<p>Height: <input type="number" v-model="height"> </p>
<button v-on:click="computeArea">Compute Area</button>
<p>Result: {{area}}</p>

<hr>


</template>
 
<style>

</style>