<script setup>
import {ref} from 'vue'

import DownloadSymbol from './components/DownloadSymbol.vue';
import ListItem from './components/ListItem.vue';

const products = [
  {id: '001', name: 'books'},
  {id: '002', name: 'pen'},
  {id: '003', name: 'mouse'},
  {id: '004', name: 'keyboard'}
]

const fruits = ['Mango','Pineapple']

const currentStatus = ref('None')
</script>

<template>
<div>
  <DownloadSymbol></DownloadSymbol>
  <h1>List Item</h1>
  <ListItem :items="products" itemTopic="PRODUCTS" @confirm="($event)=>currentStatus = $event"></ListItem>
  current status: {{currentStatus}}
  <h1>Fruits</h1>
  <ListItem :items="fruits"></ListItem>
</div>
</template>

<style>

</style>
