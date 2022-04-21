# Vue 3 + Vite

# State management with pinia (pineapple)

**State management:** การเรียกข้อมูลผ่าน state แบบ global

**State:** ข้อมูลที่เก็บไว้ใน local

**View:** ข้อมูลที่ show ผ่านหน้า page โดยผ่านการ map ของ vue

**Actions:** ข้อมูลเปลี่ยนไป ในกรณีที่ user ทำการ Input เข้ามา

## ทำไมต้องทำ state management

- ในกรณีที่เป็น หลาย view ข้อมูลที่ return จะเป็น global ไม่จำเป็นต้องไปเรียกบ่อยๆ

- เก็บข้อมูลใน client storage โดย action สามารถเรียกเก็บแล้ว state เรียก view อีกทีได้


## ก่อนเริ่ม Project

ควรลง pinia ก่อน

pinia หรือ สับปะรด คือ store library ที่ทำให้ จัดการกับ หน้า component และ page ต่างๆ บนหน้า views ได้ ผ่าน state

```
npm install pinia
```

main.js
```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
createApp(App).use(router).use(createPinia()).mount('#app')
```

## Pinia เริ่มทำงานอย่างไร

เก็บข้อมูลใน store เพื่อทำการ export ออกมา

./stores/counter.js
```js
import { defineStore, acceptHMRUpdate } from "pinia";
import { ref, computed } from "vue";

// ทำการ export ข้อมูลในกรณีที่ข้อมูลกำลังจะ ทำ action ออกมา
export const useCounter = defineStore("counter", () => {
  const count = ref(1);
  const addCounter = () => (count.value += 1);
  const doubleCounter = computed(() => count.value * 2)
  return { count, addCounter , doubleCounter }
});

// ให้ meta.hot ยอมทำการ state update function แบบ global ผ่าน accept
if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
}
```

ในกรณีที่จะโชว์ข้อมูลบนหน้า view

./views/ShowCounter.vue
```vue
<script setup>
import { useCounter } from '../stores/counter';
import { storeToRefs } from 'pinia';

const myCounter = useCounter();

// parameter เปลี่ยนจาก store เป็น ref โดย สามารถเรียก destructure assignment จากค่า myCounter ที่เป็น object ที่มี count และ doubleCount ออกมาได้ ไม่จำเป็นต้องไปเรียก function ออกมา
const { count , doubleCounter } = storeToRefs(myCounter)
</script>

<template>
  <div>
    <h1>Show Counter Page</h1>
    <!-- สามารถ return เป็น ref ได้ตามปกติ -->
    <p>Counter: {{count}}</p>
    <p>Double counter: {{doubleCounter}}</p>
  </div>
</template>
```

ในกรณีที่หน้า views มีการทำ action อะไรบางอย่าง
./views/Home.vue
```vue
<script setup>
import { useCounter } from '../stores/counter';

const myCounter = useCounter();
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <!-- ถ้าหากจะโชว์การนับตัวแปรเข้าไป -->
    <p>Count: {{ myCounter.count }}</p>

    <!-- ถ้าหากข้อมูลของเราสามารถเรียก event ให้ทำการ action ข้อมูลออกมาได้ -->
    <button @click="myCounter.addCounter">+</button>
  </div>
</template>
```