<script setup>

import {ref} from 'vue'
import IncrementButton from './IncrementButton.vue';
import DecrementButton from './DecrementButton.vue';

let projectList = ref([
  {name: 'umaporn-sup/INT203class', title: 'Bingo Game', score: 0},
  {name: 'students/Sec2_Group1', title: 'Flash Card', score: 0},
  {name: 'students/Sec3_Group2', title: 'Tic Tac Toe', score: 0}
])

let projectProps = defineProps({
  projectList: {
    name: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
    },
    score : {
      type: Number,
      require: true
    }
  }
})

let incrementEvent = (i,e) => {
  i.score += e
}

let decrementEvent = (i,e) => {
  i.score -= e
}
</script>

<template>
<div>
  <ul v-for="(item,index) in projectList" :key="index">
    <li><b>Repository path</b>: {{item.name}}</li> <br>
    <li>
      <b>Project title</b>: {{item.title}} 
      <span> 
        <IncrementButton @increment="incrementEvent(item,$event)"></IncrementButton> 
        <DecrementButton @decrement="decrementEvent(item,$event)"></DecrementButton>
        {{item.score}}
      </span>
    </li>
  </ul>
</div>
</template>

<style scoped>

</style>
