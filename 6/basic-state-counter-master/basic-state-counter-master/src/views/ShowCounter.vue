<script setup>
import { useCounter } from '../stores/counter';
import { storeToRefs } from 'pinia';
const myCounter = useCounter();
const { count , doubleCounter } = storeToRefs(myCounter)
</script>

<template>
  <div>
    <h1>Show Counter Page</h1>
    <p>Counter: {{count}}</p>
    <p>Double counter: {{doubleCounter}}</p>
  </div>
</template>

<style></style>
