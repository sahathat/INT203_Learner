<script setup>
import { ref, onBeforeMount } from "vue";
import CreateProduct from "../components/CreateProduct.vue";
import ListProduct from "../components/ListProduct.vue";

const products = ref([]);

const currentProduct = ref({});

const createProduct = async (newProduct, price) => {
  let res = await fetch("http://localhost:5000/product/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ name: newProduct, price: price })
  });
  if (res.status === 201) {
    const addProduct = await res.json();
    products.value.push(addProduct);
    console.log("add successful");
  } else {
    console.log("error by status " + res.status);
  }
};

let getProduct = async () => {
  const res = await fetch("http://localhost:5000/product");
  if (res.status === 200) {
    products.value = await res.json();
    console.log(products.value);
    console.log("select successful");
  } else {
    console.log("error by status " + res.status);
  }
};
onBeforeMount(async () => {
  await getProduct();
});

let removeProduct = async (id) => {
  let res = await fetch("http://localhost:5000/product/" + id, {
    method: "DELETE",
  });
  if (res.status === 200) {
    products.value = products.value.filter((item) => item.id !== id);
    console.log("id " + id + " delete success");
  } else {
    console.log("error by status " + res.status);
  }
};

</script>

<template>
  <div>
    <h1>My Product</h1>
    <CreateProduct
      @create="createProduct"
      :product="currentProduct"
    ></CreateProduct>
  </div>
  <div>
      <ListProduct @delete="removeProduct" :products="products"></ListProduct>
  </div>
</template>

<style></style>
