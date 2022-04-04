<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import ListCart from "../components/ListCart.vue";
import UpdateQty from "../components/UpdateQty.vue";

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

let currentCart = ref({});
let hasEdit = ref(false)

let toEditMode = (updatedCart) => {
  currentCart.value = updatedCart
  hasEdit.value = true
  console.log(currentCart.value)
}

let updatedCart = async (editing) => {
  let res = await fetch("http://localhost:5000/cart/" + editing.id, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      qty: editing.qty,
    }),
  });
  if (res.status === 200) {
    const editedCart = await res.json();
    cart.value = cart.value.map((item) =>
      item.id === editedCart.id ? { ...item, qty: editedCart.qty } : item
    );
    console.log(editedCart.id + " has been update");
  } else {
    console.log("error by status " + res.status);
  }
  // set current note is default when updated note.
  currentCart.value = {};
  hasEdit.value = false
};

</script>

<template>
  <UpdateQty @update="updatedCart" :currentCart="currentCart" v-show="hasEdit"></UpdateQty>

  <ListCart @delete="removeCart" :cart="cart" @edit="toEditMode"></ListCart>

  <p><b>Grand total:</b> {{ total }}</p>

  <button @click="buyCart">Buy</button> <button @click="goMain">Back</button>
</template>

<style></style>
