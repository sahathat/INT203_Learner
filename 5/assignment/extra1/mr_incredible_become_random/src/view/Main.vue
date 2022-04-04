<script setup>
import { useRouter } from "vue-router";

let appRouter = useRouter();

let randomTo = (number) => Math.floor(Math.random() * number + 1);

let goToUncanny = () => appRouter.push({ name: "Uncanny", params: { id: randomTo(10) } });

let goToCanny = () => appRouter.push({ name: "Canny", params: { id: randomTo(10) } });

let goToCaretaker = () => appRouter.push({ name: "Caretaker", params: { id: randomTo(6) } });
</script>

<template>
  <h1>Mr. incredible</h1>
  <button @click="goToUncanny">uncanny</button> <button @click="goToCanny">canny</button> <button @click="goToCaretaker">caretaker</button>
</template>

<style></style>
