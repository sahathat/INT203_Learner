<script setup>
import { ref } from 'vue';
import {useRoute, useRouter} from 'vue-router'
import AddToCart from '../components/AddToCart.vue'
let { params } = useRoute()

let appRouter = useRouter()

const qty = ref(1)

let goMain = () => appRouter.push({name: 'Home'})

const addToCart = async (newProduct, price) => {
  let res = await fetch("http://localhost:5000/cart/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ name: newProduct, price: price , qty: qty.value})
  });
  if (res.status === 201) {
    console.log("add successful");
    appRouter.push({name: 'ViewCart'})
  } else {
    console.log("error by status " + res.status);
  }
};

</script>
 
<template>
    <h1>Id: {{params.id}}</h1>
    <p>Product: {{params.name}}</p>
    <p>Price: {{params.price * qty}}</p>
    <p>Quantity: <input type="number" v-model="qty" min="0"></p>

    <AddToCart @addToCart="addToCart(params.name,parseInt(params.price), qty)"></AddToCart>

    <button @click="goMain">back</button>
</template>
 
<style>

</style>