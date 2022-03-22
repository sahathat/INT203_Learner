<script setup>
defineEmits(['delete'])
defineProps({
    list: {
        type: Array,
        require: true
    }
})
</script>
 
<template>
<ul>
    <li v-for="(item, index) in list" :key="index">
        {{item}} <button @click="$emit('delete',item)">-</button>
    </li>
</ul>
</template>
 
<style>

</style>