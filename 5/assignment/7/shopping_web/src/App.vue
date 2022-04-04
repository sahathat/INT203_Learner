<script setup>
import {ref, onBeforeMount} from 'vue'

let cart = ref([])

let getProduct = async () => {
  const res = await fetch("http://localhost:5000/cart");
  if (res.status === 200) {
    cart.value = await res.json();
    console.log("select successful");
  } else {
    console.log("error by status " + res.status);
  }
};
onBeforeMount(async () => {
  await getProduct();
});
</script>
 
<template>
  <div>
    <router-link to="/">Home</router-link> | 
    <router-link to="/mycart">View cart({{ cart.length }})</router-link> | 
    <router-link to="/credit">Credit</router-link>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>
 
<style>
.router-link-active {
  color: red;
}
</style>
