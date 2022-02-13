<script setup>
import { ref } from "vue";
const suggestion = ref(""); //textarea
const favorColor = ref(""); //ratio
const agree = ref(false); //checkbox
const jobs = ref([]); //checkbox multiple
const food = ref(""); //select
const activities = ref([]); //select multiple
</script>

<template>
  <!--textarea-->
  <div class="container">
    suggestion <br />
    <textarea
      v-model="suggestion"
      cols="30"
      rows="10"
      placeholder="type your suggestion here"
    ></textarea>
    <p>{{ suggestion }}</p>
  </div>

  <!--radio-->
  <div>
    <input type="radio" value="RED" v-model="favorColor" />
    <label>Red</label>
    <input type="radio" value="GREEN" v-model="favorColor" />
    <label>Green</label>
    <p>{{ favorColor }}</p>
  </div>

  <!--checkbox-->
  <div>
    <input type="checkbox" v-model="agree" />
    <label>I agree</label>
    <p>{{ agree }}</p>
  </div>

  <!--checkbox with value-->
  <div>
    <input type="checkbox" value="FRONTEND" v-model="jobs" />
    <label>frontend</label>
    <input type="checkbox" value="BACKEND" v-model="jobs" />
    <label>backend</label>
    <input type="checkbox" value="WEEKEND" v-model="jobs" />
    <label>weekend</label>
    <p>{{ jobs }}</p>
  </div>

  <!--select-->
  <div>
    <select v-model="food">
      <option value="PIZZA">Pizza</option>
      <option value="SOUP">Soup</option>
      <option value="PASTA">Pasta</option>
    </select>
    <p>{{ food }}</p>
  </div>

  <!--multiple select-->
  <div>
    <select v-model="activities" multiple>
      <option value="SLEEP">Sleep</option>
      <option value="READING BOOK">Reading Book</option>
      <option value="WATCH MOVIES">Watch Movies</option>
    </select>
    <p>{{ activities }}</p>
  </div>

</template>

<style></style>
