<script setup>
import { ref } from 'vue'

import ProjectList from './components/ProjectList.vue';
import ConfirmButton from './components/ConfirmButton.vue';

let hasConfirm = ref(false)
let confirmMessage = ref("")

let confirmCheck = (e) => {
  confirmMessage.value = e
  hasConfirm.value = true
};
</script>

<template>
<div>
  <h1>INT203' student projects</h1>
  <ProjectList></ProjectList>
  <ConfirmButton @confirm="confirmCheck($event)"></ConfirmButton>
  <p v-show="hasConfirm">current status: {{confirmMessage}}</p>
</div>


</template>

<style>

</style>
