<script setup>
import {reactive, ref} from 'vue'

let email = ref('')
let role = ref('')

let suggestion = ref('')

let massages = reactive([])
let time = ref(new Date().toLocaleString("th-TH",{day: 'numeric',month: 'long',year: 'numeric', hour: 'numeric', minute: 'numeric'}))

let submit = () => {
  if(email.value !== '' && role.value !== ''){
    massages.unshift({time: time.value,email: email.value, role: role.value, suggestion: suggestion.value})
    console.log(massages)
  }
}

let textPrimary = 'text-primary'
let textDanger = 'text-danger'
let textSuccess = 'text-success'

</script>

<template>
  <div class="container">
    <h2>Contract</h2>
    Email: <input type="email" placeholder="ex demo@emaple.com" v-model="email">
    <div>
      <h3>contract to</h3>
      <input type="radio" id="admin" value="admin" v-model="role">
      <label id="admin">admin</label> <br>
      <input type="radio" id="hr" value="hr" v-model="role">
      <label id="hr">hr</label> <br>
      <input type="radio" id="pr" value="pr" v-model="role">
      <label id="pr">pr</label> 
    </div>
    <h3>suggestion</h3>
    <textarea v-model="suggestion"
      cols="60"
      rows="15"
      placeholder="type your suggestion here"> 
    </textarea> <br>
    <input type="submit" value="submit" @click="submit">
    <hr>
    <h2>In massage log</h2>

    <div v-for="(massage, index) in massages" :key="index">
      <div :class='massage.role == "admin" ? textPrimary : massage.role == "hr" ? textDanger : textSuccess'>
        <span>
        {{massage.time}}  <br>
        <b>{{massage.email}}</b> to <b>{{massage.role}}</b>
        </span>
        <p>{{massage.suggestion}}</p>
      </div>
      <hr>
    </div>
  </div>
</template>

<style>
</style>
