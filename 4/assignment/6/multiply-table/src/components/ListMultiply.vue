<script setup>

defineEmits(['makeTable','delete'])
defineProps({
    List: {
        type: Array,
        require: true
    }
})

</script>
 
<template>
<ul>
    <li v-for="(item, index) in List" :key="index">
        {{item}} <button @click="$emit('delete',item)">-</button>
    </li>
</ul>
<button @click="$emit('makeTable')">Ok</button>
</template>
 
<style>

</style>