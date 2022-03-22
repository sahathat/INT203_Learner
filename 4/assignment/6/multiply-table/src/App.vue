<script setup>
import { ref } from 'vue';
import ListMultiply from './components/ListMultiply.vue';
import ClearButton from './components/ClearButton.vue';
import MakeTable from './components/MakeTable.vue';

// initial values
let num = ref(2)
let time = ref(12)
let list = ref([])

// event
let makedTable = () => {
  list.value.splice(0)
  for(let i = 1 ; i <= time.value; i++){
    list.value.push(num.value + ' * ' + i + ' = ' + (num.value*i))
  }
  console.log(list.value)
}

let deleteItem = (item) => {
    list.value = list.value.filter(e => e !== item)
}

let clearItem = () => {
  list.value.splice(0)
}
</script>

<template>
<div>
  <b>Number:</b> <input type="number" v-model="num"> <br> <br>
  <b>Time:</b> <input type="number" v-model="time">
  
  <ListMultiply :list="list" @delete="deleteItem"></ListMultiply>
  <MakeTable :number="num" :time="time" @makeTable="makedTable"></MakeTable>
  <ClearButton @clear="clearItem"></ClearButton>
</div>
</template>

<style>
</style>
