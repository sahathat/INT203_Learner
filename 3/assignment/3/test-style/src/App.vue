<script setup>
let days = [
      { title: 'Monday' },
      { title: 'Tuesday' },
      { title: 'Wednesday' },
      { title: 'Thursday' },
      { title: 'Friday' },
      { title: 'Saturday' },
      { title: 'Sunday' }]
</script>
 
<template>
  <label v-for="day in days" :key="day.title" class="label-checkbox" :class="{ 'checked': day.checked }" :for="day.title.toLowerCase()">
    <input type="checkbox" v-model="day.checked" class="check-day" :id="day.title.toLowerCase()" :value="day.title" />
    {{ day.title }}
  </label>
</template>
 
<style>
</style>
