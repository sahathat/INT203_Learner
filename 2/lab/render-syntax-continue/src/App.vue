<script setup>
let imagePath = "../public/favicon.ico"
let rawHTML = "<h1>HelloWorld</h1>"
let count = 0
let name = 'Test'
let amount = 1000
let myArrays = (['steak','salad','tom yum', 'fried rice'])
const students = [
  { stdId: 1234, stdName: 'Hataiwan Mekvee' },
  { stdId: 1235, stdName: 'Sarin Weerakun' },
  { stdId: 1236, stdName: 'Supichaya Muennuch' }
]
const myObjects = {type: "phone",item: ["iphone","xiaomi","vivo"]}
</script>
 
<template>

  <img src="./assets/logo.png"> <!-- image path by assets-->
  <img :src="imagePath" alt="" srcset=""> <!-- image path by public-->

  <p v-text="rawHTML"></p> <!-- DOM.TextContent -->
  <p v-html="rawHTML"></p> <!-- DOM.InnerHTML -->

  <p v-show="count > 0">you have product is {{count}}</p> <!-- display = none when show is false -->
  <p>Enter your name</p>
  <p v-show="!name">my name is {{name}}</p>

  <p v-if="count > 0">you have product is {{count}}</p> <!-- take comment "v-if' on html -->

  <!-- when have <p></p>, end v-if syntax -->

  <p v-else-if="count = 0">you have not product</p> <!-- take comment "v-if' on html -->
  <p v-else>you have negative product</p> <!-- take comment "v-if' on html -->

  <p>Deposit Amount: {{amount}}</p>
  <p v-if="amount<=100">Interest: {{amount*0.05}}</p>
  <p v-else-if="amount>100&&amount<=500">Interest: {{amount*0.1}}</p>
  <p v-else>Interest: {{amount*0.2}}</p>

  <ul>
    <li v-for="item in myArrays" :key="item">{{item}}</li>
  </ul>

  <p>my favorite fruit</p>
  <ul>
    <li v-for="(food,index) in myArrays" :key="index">
    {{index+1}}: {{food}}
    </li>
  </ul>

  <ul>
    <li v-for="student in students" :key="students.stdId">
      {{ student.stdId }}: {{ student.stdName }}
    </li>
  </ul>

  <ul>
    <li v-for="(item, objName, index) in myObjects" :key="index">
      #{{ index }} - {{ objName }}:
      {{ item }}
    </li>
  </ul>

</template>
 
<style>

</style>

