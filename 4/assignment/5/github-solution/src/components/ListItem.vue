<script setup>
let props = defineProps({
    items: {
        type: Array,
        require: true
    },
    itemTopic: {
        type: String,
        default: 'Items'
    }
})

let customEmit = defineEmits(['confirm'])
</script>
 
<template>
<div>
    <ul>
        <li v-for="(item,index) in items" :key="index">
            {{item}}
        </li>
    </ul>
    <button @click="$emit('confirm','USER_CONFIRM')">Confirm</button>
</div>
</template>
 
<style>

</style>