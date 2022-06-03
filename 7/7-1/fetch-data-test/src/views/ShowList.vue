<script setup>
import { ref,onBeforeMount } from 'vue';
let List = ref([])

let getList = async () => {
  const res = await fetch(import.meta.env.BASE_URL + "api/events");
  if (res.status === 200) {
    List.value = await res.json();
    console.log(List)
    console.log("select successful");
  } else {
    console.log("error by status " + res.status);
  }
};
onBeforeMount(async () => {
  await getList();
});
</script>
 
<template>
<div>
  <ul v-for="(item,index) in List" :key="index">
    <li>{{item}}</li>
  </ul>
</div>
</template>
 
<style>

</style>