<script setup>
const buttonProps = defineProps({
    buttonName:{
        type:String,
        require:true //if require
        // default:"OK" //initial value
    },
}) //default object

defineEmits(['clickMe']) // default event
</script>
 
<template>
    <button class="button-color" @click="$emit('clickMe',$event)">{{ buttonName }}</button>
</template>
 
<style scoped>
.button-color {
    background-color: aqua;
}
</style>