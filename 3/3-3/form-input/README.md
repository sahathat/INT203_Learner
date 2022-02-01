# Vue 3 + Vite

## Form input

v-model: can assign data value and retrieve on script.

```vue
<script setup>
import {ref} from 'vue'
let count = ref(1);
let Increment = () => count.value++
</script>

<template>
    <input type='number' v-model="count">
    <p>count: {{count}}</p>
</template>
```