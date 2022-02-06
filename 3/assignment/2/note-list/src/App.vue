<script setup>
import {ref,reactive, computed} from "vue"
let noteList = reactive([])
let show = ref(false)
let count = ref(0)
let add = ref("")
let addNote = () => {
  if(add.value !== ""){
    noteList.push({id: ++count.value,name: add.value})
    show.value = true
  }
}

let search= ref("")
let FilterNote = computed(() => noteList.filter(note => note.name.toLowerCase().includes(search.value.toLowerCase())))
</script>

<template>
<div>
  <span v-if="show">Filter Note: <input type="text" v-model="search"></span>
  <ul>
    <li v-for="(note,index) in FilterNote" :key="index">{{note.name}}</li>
  </ul>
  <span>New Note: <input type="text" v-model="add"> <button @click="addNote">Add Note</button></span>
  <!-- <h1>{{add}}</h1>
  <h1>{{noteList}}</h1>
  <h1>{{FilterNote}}</h1> -->
</div>
</template>

<style>
</style>
