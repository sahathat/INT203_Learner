<script setup>

</script>
 
<template>
  <div class="top-container">
    <router-link to="/" >Main</router-link> | 
    <router-link to="/Play">Play</router-link>
    <router-view/>
  </div>
</template>
 
<style>
.top-container {
  width: 430px;
}

.router-link-active {
  color: red;
}
</style>