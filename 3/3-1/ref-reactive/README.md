# Vue 3 + Vite

## Reactivity object

ref(): **can hold any value type.** (can make asynchronous update value on template)

example:

```vue
<script setup>
import {ref} from 'vue'
let count = ref(1)
setTimeout(() => console.log(++count.value), 2500)
// return value of ref when update real time into browser.

let greeting = ref(['Hello','Hi','Hey'])
console.log(greeting.value[0]) //Hello

let myProduct = ref([{id:1,name:'coke'},{id:2,name:'fanta'},{id:3,name:'pepsi'}])
console.log(myProduct.value[0].name) //fanta
</script>

<template>
<h1>This count is {{count}}</h1>

<ul>
    <li v-for='(say,index) in greeting' :key='index'>{{say}}</li>
    <li v-for='(item,index) in myProduct' :key='index'>{{item}}</li>
</ul>
</template>
```

reactive(): **can hold reference (such as array, object, collection(set, map)) type.** (can make asynchronous update value on template **by without value on script**)

example:

```vue
<script setup>
import {ref,reactive} from 'vue'
let count = ref(1)
setTimeout(() => console.log(++count.value), 2500)
// return value of ref when update real time into browser.

let greeting = reactive(['Hello','Hi','Hey'])
console.log(greeting[0]) //Hello
// return without value
// Output can update normally by change some properties

let myProduct = reactive([{id:1,name:'coke'},{id:2,name:'fanta'},{id:3,name:'pepsi'}])
console.log(myProduct[0].name) //fanta
</script>

<template>
<h1>This count is {{count}}</h1>

<ul>
    <li v-for='(say,index) in greeting' :key='index'>{{say}}</li>
    <li v-for='(item,index) in myProduct' :key='index'>{{item}}</li>
</ul>
</template>
```

## Reactive to Ref object

toRef(): change reactive to ref by declare 1 variable (a=1)
toRefs(): change reactive to ref by declare destructure variable ({a,b}={1,2})

example:

```vue
<script setup>
import { ref, reactive, toRef, toRefs} from 'vue'
const cube = reactive({length:10,width:20,height:33})

const length = toRef(cube, 'length') //reactive(length) to ref
console.log(length.value)
console.log(cube.width)

const {width, height} = toRefs(cube) //reactive(width,height) to refs
console.log(width.value)
console.log(height.value)
</script>

<template>
    <p>{{length}}</p>
    <p>{{width}}</p>
    <p>{{height}}</p>
</template>
```