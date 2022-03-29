<script setup></script>

<template>
  <div>
    <div>
      <router-link :to="{ name: 'Home' }">Home</router-link>|
      <router-link :to="{ name: 'ShowCounter' }">ShowCounter</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style></style>
