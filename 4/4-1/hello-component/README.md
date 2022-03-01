# Vue 3 + Vite
## Component

คือ กลุ่มก้อนของ element ที่ใช้ในการทำบางสิ่งบางอย่าง กระบวนการเรียก component มี 2 อย่าง
### Global Registration
คือ ไป**ทั่ว** registration

./components/BaseButton.vue
```vue
<template>
    <button class="button-color"></button>
</template>
 
<style scoped>
.button-color {
    background-color: aqua;
}
</style>
```

./main.js
```js
import {createApp} from 'vue'
import MyComponent from './components/BaseButton.vue'

const app = createApp({}).mount(DOM_select)

app.component('BaseBtn',BaseButton) // can make method chaining
```

./App.vue
```vue
<template>
    <BaseBtn>Click me</BaseBtn>
</template>
```

### Local Registration
คือ ไป**ใน** registration

./components/BaseButton.vue
```vue
<script setup>
</script>
 
<template>
    <button class="button-color"></button>
</template>
 
<style scoped>
.button-color {
    background-color: aqua;
}
</style>
```

./App.vue
```vue
<script setup>
import BaseButton from './components/BaseButton.vue 
</script>
<template>
    <BaseButton>Click me</BaseButton>
</template>
```

## DefineProps()

./components/BaseButton.vue
```vue
<script setup>
const buttonProps = defineProps({
    buttonName:{
        type:String
    },
    RequireNumber:{
        type:Number,
        require:true //if require
    },
    OkButton:{
        type:String,
        default:"OK" //initial value
    },
}) //default object
</script>
 
<template>
    <button class="button-color">{{buttonName}}</button>
</template>
 
<style scoped>
.button-color {
    background-color: aqua;
}
</style>
```

./App.vue
```vue
<script setup>
import BaseButton from './components/BaseButton.vue 
</script>
<template>
    <BaseButton button-name="Click me"></BaseButton>
</template>
```

## DefineEmits()

./components/BaseButton1.vue
```vue
<script setup>
const buttonProps = defineProps({
    buttonName:{
        type:String
    },
    RequireNumber:{
        type:Number,
        require:true //if require
    },
    OkButton:{
        type:String,
        default:"OK" //initial value
    },
})

const buttonEmits = defineEmits(['clickMe','testMe','updateMe'])
</script>
 
<template>
    <button class="button-color" @click='$emit('clickMe',$event.statusCode,100,true)'>{{buttonName}}</button>
    <!-- return by emit of parameter-->
    <!-- can get many parameter like destructure assignment -->
    <!-- by default is undefined -->
</template>
 
<style scoped>
.button-color {
    background-color: aqua;
}
</style>
```

./App.vue
```vue
<script setup>
import BaseButton from './components/BaseButton.vue 
let clickMe1 = (e, a, b) => console.log("hello world",e,a,b)
// e = 200
// a = 100
// b = true
</script>
<template>
    <BaseButton1 button-name="Click me" @click-me="clickMe"></BaseButton1>
</template>
```

ถ้าหากเก็บ parameter แตกต่างกัน

./components/BaseButton2.vue
```vue
<script setup>
const buttonProps = defineProps({
    buttonName:{
        type:String
    }
})

const buttonEmits = defineEmits(['clickMe'])
</script>
 
<template>
    <button class="button-color" @click='$emit('clickMe',$event.statusCode,100,true)'>{{buttonName}}</button>
    <!-- return by emit of parameter-->
    <!-- can get many parameter like destructure assignment -->
    <!-- by default is undefined -->
</template>
 
<style scoped>
.button-color {
    background-color: aqua;
}
</style>
```

./App.vue
```vue
<script setup>
import BaseButton from './components/BaseButton.vue 
let clickMe1 = (e, a, b) => console.log("hello world",e,a,b)
// e = 200 by $event => $event.statusCode
// a = Hello
// b = world
</script>
<template>
    <BaseButton2 button-name="Click me" @click-me="clickMe($event,'Hello','world')"></BaseButton2>
</template>
```

โดยสามารถตั้งค่าลักษณะในการเก็บ event ขึ้นมาได้แบบนี้

./components/BaseButton3.vue
```vue
<script setup>
const buttonProps = defineProps({
    buttonName:{
        type:String
    }
})

const buttonEmits = defineEmits(['clickMe'])
</script>
 
<template>
    <button class="button-color" @click='$emit('clickMe',{type: 'Click_Me',statusCode: 200, bubble: true})'>{{buttonName}}</button>
    <!-- return by emit of parameter-->
    <!-- can get many parameter like destructure assignment -->
    <!-- by default is undefined -->
</template>
 
<style scoped>
.button-color {
    background-color: aqua;
}
</style>
```

./App.vue
```vue
<script setup>
import BaseButton from './components/BaseButton.vue 
let clickMe1 = (e, a, b) => console.log("hello world",e,a,b)
// e = {"type": "Update_Me","statusCode": 200,"bubble": true}
// a = undefined
// b = undefined
</script>
<template>
    <BaseButton3 button-name="Click me" @click-me="clickMe"></BaseButton3>
</template>
```