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
            <li>{{item.name}} - {{ item.price * item.qty }} - {{ item.qty }}
            <button @click="$emit('edit',item)">edit</button>
            <button @click="$emit('delete',item.id)">-</button> </li>
        </ul>
    </div>
</template>
 
<style>

</style>