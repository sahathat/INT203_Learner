<script setup>
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated} from 'vue'
import NumUpdate from './components/NumUpdate.vue';
const num = ref(0)
const step = ref(0)
onMounted(
  ()=>{
  num.value = 1
  alert('on created mounted: ' + (step.value++) + " num = " + (num.value))
  }
) // second output

onBeforeMount(
  ()=>alert('on created before mount: ' + (step.value++) + " num = " + (num.value))
) // first output

onUpdated(()=> 
  alert('on updated: ' + (step.value++) + " num = " + (num.value))
) // 4th output

onBeforeUpdate(
  ()=>{
    num.value = num.value > 4 ? 0 : num.value
    alert('on before update: ' + (step.value++) + " num = " + (num.value))
    }
) // 3nd output

let isShow = ref(true)
let unShow = () => isShow.value = false
</script>

<template>
  <div>
    num: {{ num }}
    <button @click="num++">+</button> <br>
    <NumUpdate :currentNumber="num" v-if="isShow"></NumUpdate>
    <button @click="unShow">Not show current num</button>
  </div>
</template>

<style>
</style>
