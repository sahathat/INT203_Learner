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