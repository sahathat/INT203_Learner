<script setup>
import { ref, onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
import ListCart from "../components/ListCart.vue";

const appRouter = useRouter();

const cart = ref([]);

let total = ref(0);

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
  total.value = cart.value.reduce((total, current) => total + current.price, 0);
});

let removeCart = async (id) => {
  let res = await fetch("http://localhost:5000/cart/" + id, {
    method: "DELETE",
  });
  if (res.status === 200) {
    cart.value = cart.value.filter((item) => item.id !== id);
    console.log("id " + id + " delete success");
  } else {
    console.log("error by status " + res.status);
  }
};

let buyCart = async () => {
  for (let i = 0; i < cart.value.length; i++) {
    removeCart(cart.value[i].id)
  }

  total.value = 0
};

let goMain = () => appRouter.push({ name: "Home" });
</script>

<template>
  <ListCart @delete="removeCart" :cart="cart"></ListCart>

  <p><b>Grand total:</b> {{ total }}</p>

  <button @click="buyCart">Buy</button> <button @click="goMain">Back</button>
</template>

<style></style>
