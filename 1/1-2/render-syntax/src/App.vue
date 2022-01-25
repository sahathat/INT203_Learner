<script setup>
const counter = 1 //v-text: variable of text
const greenText = "color:Green" //class style v-bind
const rawHtml = "<h1>Test</h1>" //class v-html by return raw HTML
const score = 80 //condition render 

const myCourses= ([
'Discrete Mathematics for Information Technology',
'Statistics for Information Technology',
'Applied Mathematic for data science',
'Programming Fundamental'
]) // array in v-for

const myObject = {id: 1, name: "test"}

</script>

<template>
  <!-- v-bind -->
  <p :style="greenText">
    <!-- v-text -->
    <span v-text="counter"></span> + {{ counter }} = {{ 2 * counter }} <br>

    <!-- v-html -->
    <span v-html="rawHtml">  </span>
    <span> {{rawHtml}} </span>

    <!-- v-show -->
    <span v-show="true">The web are display</span>

    <!-- v-if v-else -->
    <p v-if="score >= 80">A</p>
    <p v-else-if="score>= 70">B</p>
    <p v-else>C</p>

    <!-- v-for -->
    <ul>
      <li v-for="course in myCourses" :key="course">{{course}}</li>
    </ul>
    <p v-for="(value, name, index) in myObject" :key="myObject.id">
      {{ index }} - {{ name }} : {{ value }}
    </p>
  </p>
</template>

<style></style>
