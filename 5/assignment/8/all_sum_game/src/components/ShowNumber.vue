<script setup>
import { computed } from "vue";
let props = defineProps({
  numbers: {
    type: Array,
    require: true,
  },
});

const numbers = computed(() => props.numbers);

const isNotBound = (index) => index != 3 && index != 7 && index < 11;

const sumOfDimension = (index, dimension) => {
  var sumValue = 0;
  if (dimension === "x") {
    for (var i = index - 3; i < index; i++) {
      sumValue += numbers.value[i] == "" ? 0 : numbers.value[i];
    }
  } else {
    for (var i = index - 12; i < index; i += 4) {
      sumValue += numbers.value[i] == "" ? 0 : numbers.value[i];
    }
  }
  numbers.value[index] = sumValue;
  return sumValue;
};
</script>

<template>
  <div class="grid-container">
    <!-- show input -->
    <div v-for="(num, index) in numbers" :key="index">
      {{ index }}
      <!-- เป็นกล่องที่กรอกเลขได้ -->
      <span v-if="isNotBound(index)">
        <input class="input-item" type="number" v-model="numbers[index]" />
      </span>
      <!-- เป็นขอบ -->
      <span v-else>
        <input
          disabled
          style="background-color: rgba(241, 195, 110, 0.8)"
          class="input-item"
          type="number"
          :value="sumOfDimension(index, index < 12 ? 'x' : 'y')"
        />
      </span>
    </div>
  </div>
</template>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 80px 80px 80px 80px;
  column-gap: 5px;
  row-gap: 5px;
  background-color: green;
  padding: 10px;
}

.input-item {
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 70%;
}
</style>
