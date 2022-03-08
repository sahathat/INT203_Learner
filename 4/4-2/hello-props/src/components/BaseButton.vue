<script setup>
import {computed, ref} from 'vue'
let props = defineProps({
    yourText: {
        type: String,
        require: true
    },
    yourColor: {
        type: String,
        require: true
    }
})
console.log(props.yourText) //Hello

// props.yourText = "ref" // cannot set yourText in props

let buttonText = ref(props.yourText); // initial value
// buttonText.value = 'Confirm'  // can set value

let updateText = computed(() => props.yourText) // update value
</script>
 
<template>
    <button class="button-color">{{ yourText }}</button>
</template>
 
<style>
.button-color{
    background-color: v-bind(yourColor);
}
</style>
