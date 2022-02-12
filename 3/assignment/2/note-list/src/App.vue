<script setup>
import {ref, computed} from "vue"
let noteList = ref([])
let show = ref(false)
let count = ref(0)

let add = ref("")
let addNote = () => {
  if(add.value !== ""){
    noteList.value.push({id: ++count.value,name: add.value})
    show.value = true
  }
}

let search= ref("")
let FilterNote = computed(() => noteList.value.filter(note => note.name.toLowerCase().includes(search.value.toLowerCase())))

let SortNote = computed(() => noteList.value.sort((a,b)=>a.name>b.name?1:a.name<b.name?-1:0))
let status = ref("sort by A-Z")
let sortList = () => {
  if(status.value == "sort by A-Z"){
    FilterNote.value = SortNote.value;
    status.value = "sort by Z-A"
  }else if(status.value == "sort by Z-A") {
    FilterNote.value = SortNote.value.reverse();
    status.value = "sort by A-Z"
  }
}
</script>

<template>
<div>
  <span v-show="show">Filter Note: <input type="text" v-model="search"> <button @click="sortList">{{status}}</button></span>
  <ul>
    <li v-for="(note,index) in FilterNote" :key="index">{{note.name}}</li>
  </ul>
  <span>New Note: <input type="text" v-model="add"> <button @click="addNote">Add Note</button></span>
  <h1>{{FilterNote}}</h1>
</div>
</template>

<style>
</style>
