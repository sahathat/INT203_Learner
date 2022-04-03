<script setup>
defineProps({
    cart: {
        type: Array,
        require: true
    }
})

defineEmits(['delete','edit']) 

</script>
 
<template>
    <div>
        <ul v-for="item in cart">
            <li>{{item.name}} - {{ item.price }} - {{ item.qty }}
            <button @click="$emit('delete',item.id)">-</button> </li>
        </ul>
    </div>
</template>
 
<style>

</style>