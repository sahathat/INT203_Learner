<script setup>
import { computed } from '@vue/reactivity';
defineEmits(['addToCart'])

const props = defineProps({
    productOnCart: {
        type: Object,
        defualt: {}
    }
})

const productOnCart = computed(()=>{
    return {id: props.id, name: props.name, price: props.price, qty: props.qty}
})
</script>
 
<template>
    <button @click="$emit('addToCart',productOnCart.name,productOnCart.price,productOnCart.qty)">Add to Cart</button>
</template>
 
<style>

</style>