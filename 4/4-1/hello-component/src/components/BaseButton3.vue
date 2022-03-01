<script setup>
const buttonProps = defineProps({
    buttonName:{
        type:String,
        require:true //if require
        // default:"OK" //initial value
    },
}) //default object

defineEmits(['UpdateMe']) // default event
</script>
 
<template>
    <!-- <button class="button-color" @click="$emit('UpdateMe','Update_ME')">{{ buttonName }}</button> -->

    <!-- <button class="button-color" @click="$emit('UpdateMe','Update_ME',200,true)">{{ buttonName }}</button> -->

    <button class="button-color" @click="$emit('UpdateMe',{type: 'Update_Me',statusCode: 200, bubble: true})">{{ buttonName }}</button>
</template>
 
<style scoped>
.button-color {
    background-color: red;
}
</style>