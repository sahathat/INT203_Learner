<script setup>
// function into function
let area = function square(side) {
  return side * side;
};

// console.log(square(3)) //error
console.log(area(3)); //calling functions

//destructor assignment
let a, b, rest;
[a, b, ...rest] = [1, 3, 4, 5];
console.log(a); //1
console.log(b); //3
console.log(rest); //[4,5]

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); //10
console.log(b); //20
console.log(rest); //{c: 30, d: 40}

// import ref
import { ref, reactive } from "vue";

const profile = ref({ name: "Evan You", creator: "Vue.js" });
console.log(profile.value.name); //Evan You
console.log(profile.value.creator); //Vue.js

const counter = ref(0); //asynchronous value
const isEmpty = ref(false);
const list = ref(["pen", "book", "eraser"]);
console.log(list.value); //Proxy {0: 'pen', 1: 'book', 2: 'eraser'}
console.log(list.value[0]); //pen

const myFriend = ref({ id: 6133, name: "Obama" });
console.log(myFriend.value); //Proxy {id: 6133, name: 'Obama'}
console.log(myFriend.value.name); //Obama

// setTimeout(() => console.log(++counter.value), 2500)
// setInterval(() => console.log(++counter.value), 1000)

const myReport = reactive({ id: 1, desc: "Ha ha loser" });
console.log(myReport);
console.log(myReport.desc);

const mySubjects = reactive(new Set());
mySubjects.add("Programming")
mySubjects.add("Database")
mySubjects.add("Web technology")
mySubjects.add("Operating system")
console.log(mySubjects);
console.log(mySubjects.has("Programming"));

const myReports = reactive(new Map());
myReports.set('a','Good')
myReports.set('b','Normal')
myReports.set('c','bad')
console.log(myReports);
console.log(myReports['a']);
</script>

<template>
  <!--ref-->
  <p>{{ profile.name }}</p>
  <p>{{ profile.creator }}</p>

  <h3>the counter have {{ counter }}</h3>
  <p>Is empty {{ isEmpty }}</p>

  <ul>
    <li v-for="item in list" :key="item">{{ item }}</li>
  </ul>

  <!--reactive-->
  <p>{{myReport}}</p>

  <ul>
      <li v-for="subject in mySubjects" :key="subject">{{subject}}</li>
  </ul>

  <ul>
      <li v-for="report in myReports" :key="report">{{report}}</li>
  </ul>

</template>

<style></style>
