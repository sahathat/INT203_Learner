import {createRouter, createWebHistory} from 'vue-router';
import ShowList from '../views/ShowList.vue'

// history
const history = createWebHistory(import.meta.env.BASE_URL)

//สร้าง log เก็บประวัติไปลิงค์ไปลิงค์มาของ router
//รวมถึงข้อมูลที่ไป request เข้าสู่อีก parameter

// routes
const routes = [
    {
        path: '/', // default path โดยทั่วไปจะอยู่ใน localhost:3000
        name: 'ShowList', // ชื่อ route ที่จะลิงค์
        component: ShowList // ชื่อไฟล์ component
    }
]

// router
const router = createRouter({history, routes})
// จำเป็นต้อง export default router ให้ view ไปทำงาน
export default router