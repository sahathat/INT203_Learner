<script setup>
import { computed } from '@vue/reactivity';
defineEmits(["create"])
const props = defineProps({
  product: {
    type: Object,
    default: {}
  }
})

const product = computed(() => {return {id: props.id, name: props.name, price: props.price}})
</script>

<template>
  name: <input type="text" v-model="product.name">
  price: <input type="number" v-model="product.price" min="0" step="1000">
  <button @click="$emit('create', product.name, product.price)">Create</button>
</template>

<style></style>
