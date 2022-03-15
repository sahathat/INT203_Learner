<script setup>
import {onBeforeMount, ref} from 'vue'
import NoteList from './components/NoteList.vue'
import CreateEdit from './components/CreateEdit.vue';
const notes = ref([])

// POST (C) , status 201 created
let createdNote = async (newNote) => {
  let res = await fetch("http://localhost:5000/notes/", {
    method: 'POST',
    headers: {
      "content-type" : "application/json"
    },
    body: JSON.stringify({name: newNote})
  })
  if(res.status === 201){
    const addNote = await res.json();
    notes.value.push(addNote)
    console.log("add successful")
  } else {
    console.log("error by status " + res.status)
  }
}

// GET (R) , status 200 OK
let getNotes = async () => {
  const res = await fetch("http://localhost:5000/notes") 
  if(res.status === 200) {
    notes.value = await res.json()
    console.log("select successful")
  } else {
    console.log("error by status " + res.status)
  }
}
onBeforeMount(async () => {
  await getNotes()
})

// PUT (U) , status 200 OK
const editingNote = ref({})

let toEditMode = (updatedNote) => {
  editingNote.value = updatedNote
  console.log(editingNote.value)
}

let updatedNote = async (editingNote) => {
  let res = await fetch("http://localhost:5000/notes/" + editingNote.id ,{
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      name: editingNote.name
    })
  })
  if(res.status === 200) {
    const editedNote = await res.json()
    notes.value = notes.value.map((note)=>
      note.id === editedNote.id
      ? {...note, name: editedNote.name}
      : note
    )
    console.log(editedNote)
  } else {
    console.log("error by status " + res.status)
  }
}


// DELETE (D) , status 200 OK
let removedNote = async (id) => {
  let res = await fetch("http://localhost:5000/notes/" + id, {
    method: 'DELETE'
  })
  if(res.status === 200) {
    notes.value = notes.value.filter((note)=>note.id !== id)
    console.log("id "+ id + " delete success")
  } else {
    console.log("error by status " + res.status)
  }
}
</script>
 
<template>
  <h1>Hello note by fetch api</h1>
  <div>
    <CreateEdit @createNote="createdNote" :currentNote="editingNote" @updateNote="updatedNote"></CreateEdit>
    <NoteList :notes="notes" @deleteNote="removedNote" @editNote="toEditMode"></NoteList>
  </div>
</template>
 
<style>

</style>