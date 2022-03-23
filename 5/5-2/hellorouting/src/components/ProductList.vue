<script setup>
import {ref} from 'vue'
const products = ref([
    {id: 1001, productName: 'Mobile phone'},
    {id: 1002, productName: 'PC'},
    {id: 1003, productName: 'Laptop'}
])
</script>
 
<template>
<div>
    <ul>
        <li v-for="(item,index) in products" :key="index">
            <router-link :to="{ name: 'ProductItem', params: { id: item.id, productName: item.productName }}">{{item.id}}</router-link> : {{item.productName}}
        </li>
    </ul>
</div>
</template>
 
<style>

</style>