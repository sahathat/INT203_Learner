# Vue 3 + Vite

## Single File Components(SFC)

- ช่วยไปจัดการ การทำ script(js), template(html), style(css) แล้วฝั่ง Vue จัดการ source code เอาเอง

## Rendering
- v-text
ทำหน้าที่ ใส่ text content ใน html จาก expression ที่กำหนดเอาไว้
```vue
    <!-- template -->
    <span v-text="counter"></span> + {{ counter }} = {{ 2 * counter }} <br>
```

- v-html
ทำหน้าที่ ใส่ raw html ใน html จาก expression ที่กำหนดเอาไว้
```vue
    <!-- template -->
    <span v-html="rawHtml"> </span> <!-- DOM.innerHTML -->
    <span> {{rawHtml}} </span> <!-- DOM.TextContent -->
```

- v-bind
สามารถใช้ : แทนกันได้ ใช้ในการตกแต่ง style ของเว็บ
```vue
<script setup>
//script
const greenText = "color:Green" //class style v-bind
</script>

<template>
    <!-- template -->
    <p :style="greenText"></p>
</template>
```

- v-show
เมื่อเอาไปทดสอบกับหน้าเว็ปพบว่า ถ้าพบว่าเงื่อนไขเป็น false จะแสดงค่า display="none" ใน element ที่ติด v-show
```vue
    <!-- template -->
    <span v-show="true">The web are display</span>
```

- v-if
เมื่อเอาไปทดสอบกับหน้าเว็ปพบว่า ถ้าพบว่าเงื่อนไขเป็น false จะซ้อน element และจะแทนที่ด้วย comment แทน
```vue
    <!-- template -->
    <p v-if="score >= 80">A</p>
    <p v-else-if="score>= 70">B</p>
    <p v-else>C</p>
```

- v-for
ทำซ้ำกับ ค่าหลายค่าใน element ซึ่ง สามารถวนซ้ำทั้ง array, array ใน object และ object return เป็น html element อยู่บน console
```vue
<script setup>
let myArrays = (['steak','salad','tom yum', 'fried rice'])
const students = [
  { stdId: 1234, stdName: 'Hataiwan Mekvee' },
  { stdId: 1235, stdName: 'Sarin Weerakun' },
  { stdId: 1236, stdName: 'Supichaya Muennuch' }
]
const myObjects = {type: "phone",item: ["iphone","xiaomi","vivo"]}
</script>
<template>
    <!-- template -->

    <!-- Array -->
    <ul>
        <li v-for="(food,index) in myArrays" :key="index">
            {{index+1}}: {{food}}
        </li>
    </ul>

    <!-- Array in Object -->
    <ul>
        <li v-for="student in students" :key="students.stdId">
            {{ student.stdId }}: {{ student.stdName }}
        </li>
    </ul>

    <!-- Object -->
    <ul>
        <li v-for="(item, objName, index) in myObjects" :key="index">
            #{{ index }} - {{ objName }}: {{ item }}
        </li>
    </ul>
</template>

```

## Recommended Learn

History
- https://en.wikipedia.org/wiki/Vue.js

JavaScript
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

Vue3
- https://v3.vuejs.org/guide/introduction.html
- https://blog.vuejs.org/posts/vue-3.2.html

Vue Composition API
- https://v3.vuejs.org/api/composition-api.html

setup
- https://staging.vuejs.org/

Single File Components <script setup>
- https://v3.vuejs.org/api/sfc-script-setup.html

Vue Devtools
- https://devtools.vuejs.org/guide/installation.html

ViteBuild Tool
- https://vitejs.dev/

Pinia store library for Vue
- https://pinia.vuejs.org/introduction.html

CSS Framework
- https://tailwindcss.com/
- https://getbootstrap.com/

Images
- https://unsplash.com/

Icons
- https://material.io/resources/icons/?style=baseline
- https://iconmonstr.com/iconicfont/

Colors
- https://coolors.co/