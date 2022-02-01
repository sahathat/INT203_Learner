<script setup>
import { reactive, toRef, toRefs } from "vue";

const cube = reactive({ length: 1, width: 2, height: 3 });
const { height, width } = toRefs(cube); //reactive more than 1 values to ref
console.log(height.value);
console.log(width.value);

const length = toRef(cube, "length"); //reactive equal 1 values to ref
console.log(length.value);
length.value = 1000;
height.value = 999;
width.value = 300
console.log(cube);
</script>

<template>
  <p>cube:{{ cube }}</p>
</template>

<style></style>

<style></style>
