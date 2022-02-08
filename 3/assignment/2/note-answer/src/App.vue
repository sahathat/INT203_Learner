<script setup>
import { ref, reactive, computed } from "vue";
const notes = reactive([]);

const newNote = ref("");
const addNote = () => {
  notes.push(newNote.value);
  console.log(notes);
};

const keywords = ref('')
const FilterNotes = computed(() => notes.filter((note) => note.toLowerCase().includes(keywords.value.toLowerCase())))

const colorMe = (note) => {
  console.log(note)
}
</script>

<template>
  <div>
    <span v-show="notes.length > 0">
      Filter notes:
      <input type="text"  v-model="keywords"/>
    <ul>
      <li v-for="(note, index) in FilterNotes" :key="index">
        {{ note }} <button @click="colorMe(note)">Color Me</button>
      </li>
    </ul>
    </span>
    New Note:
    <input type="text" v-model="newNote" />
    <button @click="addNote">Add note</button>
  </div>
</template>

<style></style>
