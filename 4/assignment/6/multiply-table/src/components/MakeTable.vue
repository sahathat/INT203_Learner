<script setup>
defineEmits(['makeTable'])
let props = defineProps({
    number: {
        type: Number,
        require: true
    },
    time: {
        type: Number,
        require: true
    }
})
</script>
 
<template>
<button @click="$emit('makeTable')">Ok</button>
</template>
 
<style>

</style>