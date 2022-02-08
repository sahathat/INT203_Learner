# Vue 3 + Vite

## Example of form input

## Textarea

```vue
<script setup>
import { ref } from "vue";
const suggestion = ref(""); //textarea
</script>
<template>
  <!--textarea-->
  <div>
    suggestion <br/>
    <textarea
      v-model="suggestion"
      cols="30"
      rows="10"
      placeholder="type your suggestion here"
    ></textarea>
    <p>{{ suggestion }}</p>
  </div>
</template>
```

## Ratio

```vue
<script setup>
import { ref } from "vue";
const favorColor = ref(""); //ratio
</script>
<template>
  <!--radio-->
  <div>
    <input type="radio" value="RED" v-model="favorColor" />
    <label>Red</label>
    <input type="radio" value="GREEN" v-model="favorColor" />
    <label>Green</label>
    <p>{{ favorColor }}</p>
  </div>
</template>
```

## Checkbox

```vue
<script setup>
import { ref } from "vue";
const agree = ref(false); //checkbox
const jobs = ref([]); //checkbox multiple
</script>
<template>
  <!--checkbox-->
  <div>
    <input type="checkbox" v-model="agree" />
    <label>I agree</label>
    <p>{{ agree }}</p>
  </div>

  <!--checkbox with value-->
  <div>
    <input type="checkbox" value="FRONTEND" v-model="jobs" />
    <label>frontend</label>
    <input type="checkbox" value="BACKEND" v-model="jobs" />
    <label>backend</label>
    <input type="checkbox" value="WEEKEND" v-model="jobs" />
    <label>weekend</label>
    <p>{{ jobs }}</p>
  </div>
</template>
```

## Select

```vue
<script setup>
import { ref } from "vue";
const food = ref(""); //select
const activities = ref([]); //select multiple
</script>
<template>
  <!--select-->
  <div>
    <select v-model="food">
      <option value="PIZZA">Pizza</option>
      <option value="SOUP">Soup</option>
      <option value="PASTA">Pasta</option>
    </select>
    <p>{{ food }}</p>
  </div>

  <!--multiple select-->
  <div>
    <select v-model="activities" multiple>
      <option value="SLEEP">Sleep</option>
      <option value="READING BOOK">Reading Book</option>
      <option value="WATCH MOVIES">Watch Movies</option>
    </select>
    <p>{{ activities }}</p>
  </div>
</template>
```