# Vue 3 + Vite

## Router
ทำไมต้องทำ routing เพราะว่าเวลาที่ไป request ข้อมูล ยัง server ต้อง set url path ที่จะไปที่ไหน ในกรณีที่ทำหลายเว็ป แบบนี้ อาจจะทำให้เกิดความยุ่งยากถ้าหากเรายังไม่มีการ set router ที่จะไปหา

## Vue Router
้เป็น tool ที่จะทำให้เราไป set router ได้ ในกรณีที่จะกด link เข้าอีกหน้าหนึ่ง โดย อ้างไปที่ url path ที่จะไปถึงอีก component หนึ่ง

## การ Install Vue router
```
npm install vue-router
```

## การ set router
โดยทั่วไปต้อง set ที่ file index.js บน router file

index.js
```js
import {createRouter, createWebHistory} from 'vue-router';
import Profile from '../views/Profile.vue'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'
import Item from '../views/Item.vue'

// history
const history = createWebHistory()

//สร้าง log เก็บประวัติไปลิงค์ไปลิงค์มาของ router
//รวมถึงข้อมูลที่ไป request เข้าสู่อีก parameter

// routes
const routes = [
    {
        path: '/', // default path โดยทั่วไปจะอยู่ใน localhost:3000
        name: 'Home', // ชื่อ route ที่จะลิงค์
        component: Home // ชื่อไฟล์ component
    },
    {
        path: '/profile', // localhost:3000/profile
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/product-item/:id', // นำ id เป็นตัว request ไปให้เรียก component ออกมาจาก router แล้วข้อมูล id ก็จะเก็บบน log web history
        name: 'ProductItem',
        component: Item
    },
    {
        path: '/:catchNotMatchPath(.*)', // กรณีที่หา url path ที่ set ใน router ไม่เจอก็จะโชว์ไปที่ path นี้
        name: 'NotFound',
        component: NotFound
    }
]

// router
const router = createRouter({history, routes})
// จำเป็นต้อง export default router ให้ view ไปทำงาน
export default router
```

## การใช้งาน router

เรียก router เก็บไว้ใน main.js

main.js
```js
import router from './router'

// รูปแบบ router ในการใช้งานมี 2 รูปแบบ

// แบบที่ 1
createApp(App).use(router).mount('#app')

// แบบที่ 2
let app = createApp(App)
app.use(router)
app.mount('#app')
```

แล้วสร้าง views เพื่อเก็บ ไฟล์ component เอาไว้ show component เข้าสู่ router แล้วข้อมูลที่ show ออกมาเป็น asynchoronus ใน App.vue

```vue
<template>
  <div>
    <div>
      <router-link :to="{ name: 'Home'}">Home</router-link> | 
      <router-link :to="{ name: 'Profile'}">My profile</router-link>
      <!-- router ไปเรียกชื่อ router แล้ว router ก็จะไปเรียก component นั้น ออกมาอีกที -->
    </div>
    <div>
      <router-view></router-view>
      <!-- นำ views ไฟล์ ที่เป็น component แสดงผลออกมา -->
    </div>
  </div>
</template>
```

## useRoute vs useRouter

### useRoute
ในกรณีที่เว็ปมีข้อมูลจะไป request param ไปให้กับอีก router หนึ่ง ก็จะใช้ useRoute

ตัวอย่างเช่น

ProductList.vue
```vue
<template>
<div>
    <ul>
        <li v-for="(item,index) in products" :key="index">
            <router-link :to="{ name: 'ProductItem', params: { id: item.id, productName: item.productName }}">{{item.id}}</router-link> : {{item.productName}}
            <!-- ในกรณีเรียกหลาย parameter ถ้า refresh พบว่าข้อมูล บางส่วนจะหายไปเพราะไม่ได้ request มาจาก router -->
        </li>
    </ul>
</div>
</template>
```

ถ้าหาก เราไปกดลิงค์ก็จะต้องไปหา Item.vue
```vue
<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
let { params } = useRoute(); // สร้าง parameter บน route
const image = ref('../images/' + params.id + '.png')
// ให้ parameter ไปทำการเรียก item.id ที่ทำการ request มาแล้ว
</script>
 
<template>
<h1>Product Item</h1>
<p>here. Product Id: {{params.id}}, Name: {{this.$route.params.productName}}</p>
<!-- this.$route.params.productName สามารถเรียก parameter โดยปราศจากการเรียก useRoute-->
<img :src="image" alt="product" width="500"> <br>
</template>
```

### useRouter
ใช้ในการกรณีที่เราจะไปทำอะไรกับ Router เช่นกดลิงค์ไปยังหน้าไหนก็ดีด้วยปุ่ม ก็จะใช้ useRouter

Item.vue
```vue
<script setup>
import { useRouter } from 'vue-router';

const appRouter = useRouter()
const goBack = () => appRouter.go(-1)
// ถอยกลับไป 1 ก้าว ไปยัง url path ก่อนหน้านั้นก็คือ Home.vue

const goFront = () => appRouter.go(1)
// ไปข้างหน้า 1 ก้าว ไปยัง url path ที่เราจะไปทำแล้ว

// Or
const goBack = () => appRouter.push({ name: 'Home'})
// กลับไปหา Home.vue

const goProfile = () => appRouter.push({ name: 'Profile' })
// กลับไปหา Profile.vue
</script>
 
<template>
<h1>Product Item</h1>
<button @click="goBack">Back</button>
<button @click="goProfile">My profile</button>
</template>
```

## .router-link-active vs .router-link-exact-active
เป็น class ใช้ในกรณีที่ router ใน path active อยู่ก็จะทำการ link style เข้าไปใส่ใน route-link ได้เลย

### .router-link-active

จะหา url path ได้ทุกอันที่เกี่ยวข้อง อย่างเช่น

> ถ้าหากเราไป active ที่ /hello ก็มีผลต่อทุก path ที่ต่อจาก /hello/.*

### .router-link-exact-active

จะหาเฉพาะ url path อันเดียวที่ match กับ router เท่านั้น อย่างเช่น

> ถ้าหากเราไป active ที่ /hello จะไม่มีผลต่อทุก path ที่ต่อจาก /hello/.*

ตัวอย่างเช่น
```vue
<style scope>
.router-link-active {
  color: green;
}
</style>
```