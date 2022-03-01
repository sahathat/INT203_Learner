# Vue 3 + Vite

# event handle

v-on syntax: can make on click on function (@click)

can make
- @submit.prevent : the submit event will no longer reload the page
- @keyup.enter : key modifier using keyAlias

example:

```vue
<script setup>
import {ref} from 'vue'
let count = ref(1);
let Increment = () => count.value++
</script>

<template>
    <button @click='Increment()'>{{count}}</button>
</template>
```

Can add parameter to event by checking.
```vue
<script setup>
let ThatMe1 = (e,n) => console.log("That me",e,n)
let ThatMe2 = (n,e) => console.log("That me",e,n)
</script>

<template>
    <button @click='ThatMe($event,999)'> click me</button>
</template>
```

Can add parameter to add index into array.
```vue
<script setup>
let array = ref([0,0,0,0,0,0,0,0,0])
let AddNumber = (e) => {
    array.value[e] += 1;
}
</script>

<template>
    <div v-for="item in array">
        <span>
            <button @click='AddNumber($event)'>click me</button>
            {{item}}
        </span> <br>
    </div>
</template>
```

# computed()

return value by pass function.

```vue
<script setup>
import {ref, computed} from 'vue'
let count = ref(1);
let Increment = computed(() => count.value++)
</script>

<template>
    <p>{{count}}</p>
    <p>{{Increment}}</p>
</template>
```