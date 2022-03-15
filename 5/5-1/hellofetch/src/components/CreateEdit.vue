<script setup>
import {computed} from 'vue'
let props = defineProps({
    currentNote: {
        type: Object,
        default: {}
    }
})
console.log(props.currentNote)

defineEmits(['createNote','updateNote'])
let newNote = computed(()=>{
    return {
        id: props.currentNote.id,
        name: props.currentNote.name
    }
})
</script>
 
<template>
<div>
    <h2>Create Note:</h2>
    Note name: <input type="text" v-model="newNote.name">
    <button @click="$emit('updateNote', newNote)" v-if="newNote.id > 0">
        Save
    </button>
    <button @click="$emit('createNote',newNote.name)" v-else>
        Create
    </button>
</div>
</template>
 
<style>

</style>