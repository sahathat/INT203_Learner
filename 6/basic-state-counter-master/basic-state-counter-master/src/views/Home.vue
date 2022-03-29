<script setup>
import { useCounter } from '../stores/counter';

const myCounter = useCounter();
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <p>Count: {{ myCounter.count }}</p>
    <button @click="myCounter.addCounter">+</button>
  </div>
</template>

<style></style>
