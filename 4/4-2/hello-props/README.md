# Vue 3 + Vite

# defineProps
สามารถ เปลี่ยนค่าได้ เมื่อทำใน component

มี 3 รูปแบบ

1. ใช้เป็น initial value ซึ่งไม่สามารถ update ได้เช่น ref()

2. ใช้ในการ update value ที่เป็น component โดยอาศัยการคำนวณ เช่น computed

3. ใช้แทนค่าเข้าไปใน component ได้เลย ก็สามารถ update ค่าได้

ตัวอย่างเช่น

```vue
<script setup>
import {computed, ref} from 'vue'
let props = defineProps({
    yourText: {
        type: String,
        require: true
    },
    yourColor: {
        type: String,
        require: true
    }
})
console.log(props.yourText) //Hello

// props.yourText = "ref" // cannot set yourText in props

let buttonText = ref(props.yourText); // initial value
// buttonText.value = 'Confirm'  // can set value

let updateText = computed(() => props.yourText) // update value
</script>
 
<template>
    <button class="button-color">{{ yourText }}</button>
</template>
 
<style>
.button-color{
    background-color: v-bind(yourColor);
}
</style>
```

App.vue
```vue
<script setup>
import { ref } from 'vue'
import BaseButton from './components/BaseButton.vue';
const bText = ref('type your text here!')
const bColor = ref()
</script>

<template>
  <div>
    <div>Your Text: {{ bText }} <input type="text" v-model="bText"></div>
    <div>Your Color: <input type="color" v-model="bColor"> </div>
    <BaseButton :yourText="bText" :yourColor="bColor"></BaseButton>
    
  </div>
</template>

<style>

</style>
```