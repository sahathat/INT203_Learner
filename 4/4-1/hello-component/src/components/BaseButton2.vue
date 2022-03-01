<script setup>
const buttonProps = defineProps({
    buttonName:{
        type:String,
        require:true //if require
        // default:"OK" //initial value
    },
}) //default object

defineEmits(['likeMe']) // default event
</script>
 
<template>
    <button class="button-color" @click="$emit('likeMe','Like_ME')">{{ buttonName }}</button>
</template>
 
<style scoped>
.button-color {
    background-color: yellow;
}
</style>