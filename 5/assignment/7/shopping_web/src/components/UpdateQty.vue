<script setup>
import { computed } from "@vue/reactivity";

defineEmits(["update"]);

let props = defineProps({
  currentCart: {
    type: Object,
    defualt: {},
  },
});

let newQtyOnCart = computed(() => {
  return {
    id: props.currentCart.id,
    name: props.currentCart.name,
    price: props.currentCart.price,
    qty: props.currentCart.qty,
  };
});
</script>

<template>
  <p>
    <input type="number" v-model="newQtyOnCart.qty" min="1"/>
    <button @click="$emit('update', newQtyOnCart)">update</button>
  </p>
</template>

<style></style>
