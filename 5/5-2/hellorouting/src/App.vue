<script setup>

</script>

<template>
  <div>
    <div>
      <router-link :to="{ name: 'Home'}">Home</router-link> | 
      <router-link :to="{ name: 'Profile'}">My profile</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
a {
  color: lime;
}
.router-link-active {
  color: green;
}
</style>
