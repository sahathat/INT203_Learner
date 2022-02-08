# Vue 3 + Vite

ในการออกแบบ style ใน composition api (sfc) มี 2 ประเภท คือการออกแบบ class และ style
## Class binding

### Basic class

```vue
<template>
  <!--basic class-->
  <p class="example-text">Test Class</p>
</template>
<style scoped> /*local style (use in this class only)*/
/*example basic class*/
.example-text {
  color: red;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
```

### Class binding with object
```vue
<template>
    <!--class binding object-->
    <p :class="{'success-text' : false, 'underline-text' : true}">This is class unsuccess text</p>
</template>
<style scoped>
.success-text {
  color: green;
}
.underline-text {
  text-decoration: underline ;
}
</style>
```

### Class binding with array

```vue
<script setup>
const errorStyle = 'error-text underline-text' //class array
</script>
<template>
    <!--class attribute with array syntax-->
    <p :class="[errorStyle]">This is class error text</p>
</template>
<style scoped>
.error-text {
  color: red;
  font-style: italic;
}
.underline-text {
  text-decoration: underline ;
}
</style>
```

### Class binding with condition

```vue
<template>
    <!--class attribute with condition-->
    <p :class="false ? 'success-text': [errorStyle]">This is condition class</p>
</template>
<style scoped>
.success-text {
  color: green;
}
.error-text {
  color: red;
  font-style: italic;
}
.underline-text {
  text-decoration: underline ;
}
</style>
```

## Style binding

### Basic style

```vue
<template>
    <!--basic style-->
    <p style="color: green; text-decoration: underline">Test style</p>
</template>
```

### Style binding with object

```vue
<script setup>
const textColor = "red"; //style object
const fontStyle = "italic"; //style object
</script>
<template>
    <!--v-bind style object syntax-->
    <p :style="{ color: textColor, 'font-style': fontStyle }">
      This is style text.
    </p>
</template>
```

### Style binding with condition object

```vue
<template>
    <!--v-bind style object condition-->
    <p :style="isEmpty ? { color: 'red' } : { color: 'green' }">
      This is a style under condition.
    </p>
</template>
```

### Style binding with array

```vue
<script setup>
const successText = "color:green"; //style array
const underlineText = "text-decoration:underline"; //style array
</script>
<template>
<!-- v-bind style (array syntax)-->
    <p :style="[successText, underlineText]">This is array style.</p>
</template>
```

### Style binding with condition array

```vue
<script setup>
const successText = "color:green"; //style array
const warningText = "color:red"; //style array
const underlineText = "text-decoration:underline"; //style array

const hasSuccessText = false; 
</script>
<template>
<!-- v-bind style (array syntax) condition-->
    <p :style="[hasSuccessText ? successText : warningText, underlineText]">
      This is unsuccessful array style.
    </p>
</template>
```