<script setup>
//นำเลข1-9มาใส่ช่องได้ผลบวก15ทุกแนว
//https://www.youtube.com/watch?v=wn7OLfD28io
import { ref } from "vue";
import ShowNumber from "../components/ShowNumber.vue";
import Message from "../components/Message.vue";
import Header from "../components/Header.vue";

import { useRouter } from "vue-router";
const appRouter = useRouter()

const backMain = () => appRouter.push({ name: 'Main'})

const genNum = ref(15);
const message = ref("");
// const nums = ref([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
// const nums = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
const nums = ref([1, 2, 3, 1, 4, 5, 6, 1, 7, 8, 9, 1, 1, 1, 1]);
const numsInput = ref([0, 1, 2, 4, 5, 6, 8, 9, 10])
const numsAnswerIndex = ref([3, 7, 11, 12, 13, 14]);

const isNotBound = (index) => index != 3 && index != 7 && index < 11;

const checkAnswer = () => {
  let isAnswer = numsAnswerIndex.value.every(
    (index) => nums.value[index] === genNum.value
  );
  console.log(isAnswer)
  
  const number = nums.value.filter((num,index) => {
      return isNotBound(index)
  })

  const setNumber = number.filter((num,index) => {
      return number.indexOf(num) === index
  })

  console.log(number)

  console.log(setNumber)

  const isDuplicate = numsInput.value.some(
    (index) => setNumber[index] != number[index]
  );
  console.log(isDuplicate)

  if (isAnswer) {
    message.value = "mission complete";
  } else if(isDuplicate) {
    message.value = "number is duplicate";
  } else {
    message.value = "nooo!!!!"
  }

  appRouter.push({ name: 'Result', params: {message: message.value}})
};

const reset = () => {
  message.value = ""
  genNum.value = 15
  nums.value = [1, 2, 3, 1, 4, 5, 6, 1, 7, 8, 9, 1, 1, 1, 1];
}
</script>

<template>
  <div>
    <div>
      <h1>นำเลข 1-9 มาใส่ช่องได้ผลบวก {{ genNum }} ทุกแนว</h1>
    </div>
    <div class="action-button">
      <Header @check="checkAnswer" @reset="reset" :genNum="genNum"></Header>
    </div>
    
    <ShowNumber :numbers="nums"></ShowNumber>

    <button @click="backMain">Back</button>
</div>
</template>

<style scoped>

.action-button {
  padding: 10px;
  display: flex;
  gap: 5px;
}
</style>