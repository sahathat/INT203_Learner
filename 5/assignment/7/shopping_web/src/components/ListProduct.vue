<script setup>
import { useRouter } from "vue-router";
const appRouter = useRouter();

defineProps({
  products: {
    type: Array,
    require: true,
  },
});

defineEmits(["delete", "gotoDetail"]);

let gotoDetail = (item) =>
  appRouter.push({
    name: "ProductDetail",
    params: { id: item.id, name: item.name, price: item.price },
  });
</script>

<template>
  <ul v-for="(item, index) in products" :key="index">
    <li>
      Name: {{ item.name }}, Price: {{ item.price }} <br />
      <button @click="gotoDetail(item)">view detail</button>
      <button @click="$emit('delete', item.id)">-</button>
    </li>
  </ul>
</template>

<style></style>
