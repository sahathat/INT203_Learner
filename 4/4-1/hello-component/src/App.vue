
<script setup>

console.clear()
let testMe1 = () => console.log('test me 1')
let testMe2 = (e) => console.log('test me 2',e)
let testMe3 = (e) => console.log('test me 3',e)
let testMe4 = (e) => console.log('test me 4',e)
let testMe5 = (e,n) => console.log('test me 5',e,n)

let updateMe1 = (e) => console.log('update me 1',e)
let updateMe2 = (e, a, b) => console.log('update me 2',e, a, b)
let updateMe3 = (e) => console.log('update me 2',e)
let updateMe4 = (e, a, b) => console.log('update me 2',e, a, b)

import BaseButton from "./components/BaseButton.vue";
import BaseButton2 from './components/BaseButton2.vue';
import BaseButton3 from './components/BaseButton3.vue';
</script>
 
<template>
  <div>
    <button @click="testMe1">click me</button>
    <button @click="testMe2">click me</button>
    <button @click="testMe3()">click me</button>
    <button @click="testMe4($event)">click me</button>
    <button @click="testMe5($event,999)">click me</button>
    <button @click="testMe5(999,$event)">click me</button> <br> <br>
  </div>
  <div>
    <BaseButton button-name="click me1" @clickMe="testMe1"></BaseButton>
    <BaseButton button-name="click me2" @click-me="testMe2"></BaseButton>
    <BaseButton buttonName="click me3" @clickMe="testMe3()"></BaseButton>
    <BaseButton buttonName="click me4" @click-me="testMe4($event)"></BaseButton>
    <BaseButton buttonName="click me5" @click-me="testMe5($event,999)"></BaseButton>
    <BaseButton buttonName="click me6" @click-me="testMe5(999,$event)"></BaseButton>
  </div>
  <div>
    <BaseButton2 buttonName="Like Me1" @likeMe="testMe1"></BaseButton2>
    <BaseButton2 buttonName="Like Me2" @likeMe="testMe2"></BaseButton2>
    <BaseButton2 buttonName="Like Me3" @likeMe="testMe3()"></BaseButton2>
    <BaseButton2 buttonName="Like Me4" @likeMe="testMe4($event)"></BaseButton2>
    <BaseButton2 buttonName="Like Me5" @likeMe="testMe5($event,true)"></BaseButton2>
    <BaseButton2 buttonName="Like Me6" @likeMe="testMe5(404,$event)"></BaseButton2>
  </div>
  <div>
    <BaseButton3 buttonName="Update Me1" @UpdateMe="updateMe1"></BaseButton3>
    <BaseButton3 buttonName="Update Me2" @UpdateMe="updateMe1()"></BaseButton3>
    <BaseButton3 buttonName="Update Me3" @UpdateMe="updateMe1(e)"></BaseButton3>
    <BaseButton3 buttonName="Update Me4" @UpdateMe="updateMe1($event)"></BaseButton3>

    <BaseButton3 buttonName="Update Me5" @UpdateMe="updateMe2($event,true)"></BaseButton3>
    <BaseButton3 buttonName="Update Me6" @UpdateMe="updateMe2($event,300,true)"></BaseButton3>
    <BaseButton3 buttonName="Update Me7" @UpdateMe="updateMe2()"></BaseButton3>

    <BaseButton3 buttonName="Update Me8" @UpdateMe="updateMe3($event)"></BaseButton3>
    <BaseButton3 buttonName="Update Me9" @UpdateMe="updateMe4($event.statusCode,'Done',500)"></BaseButton3>
    <BaseButton3 buttonName="Update Me10" @UpdateMe="updateMe4([$event.statusCode,'Done',500])"></BaseButton3>
    <BaseButton3 buttonName="Update Me11" @UpdateMe="updateMe4"></BaseButton3>
  </div>
</template>
 
<style>

</style>