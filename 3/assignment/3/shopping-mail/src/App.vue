<script setup>
import { ref, reactive, computed } from "vue";
let productList = reactive([]);
let addItem = ref("");
let addQty = ref(1);
let Add = () => {
  if (addItem.value.length > 0) {
    let index = productList.findIndex((x) => x.item == addItem.value);
    console.log(index);
    if (index == -1) {
      productList.push({ item: addItem.value, qty: addQty.value, pending: true });
    } else {
      productList[index].qty += addQty.value;
    }
  }
};

let totalPending = computed(() => productList.reduce((total,current)=>total+current.qty,0))

let imgPending = '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"> <g> <rect fill="none" height="24" width="24" /> <path d="M17,12c-2.76,0-5,2.24-5,5s2.24,5,5,5c2.76,0,5-2.24,5-5S19.76,12,17,12z M18.65,19.35l-2.15-2.15V14h1v2.79l1.85,1.85 L18.65,19.35z M18,3h-3.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H6C4.9,3,4,3.9,4,5v15c0,1.1,0.9,2,2,2h6.11 c-0.59-0.57-1.07-1.25-1.42-2H6V5h2v3h8V5h2v5.08c0.71,0.1,1.38,0.31,2,0.6V5C20,3.9,19.1,3,18,3z M12,5c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1c0.55,0,1,0.45,1,1C13,4.55,12.55,5,12,5z"/></g></svg>'

let imgDone = '<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 9l-1.41-1.42L10 14.17l-2.59-2.58L6 13l4 4zm1-6h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"/></svg>'

// let doneText = ref({'text-decoration': 'line-through', color:'grey'})

let doneItem = ref([])

let totalDone = computed(() => doneItem.value.reduce((total,current)=>total+current.qty,0))

// let hasDone = (index) => {
//   if(productList[index].pending) {
//     productList[index].pending = false
//     totalPending.value -= totalDone.value
//   } else {
//     productList[index].pending = true
//   }
// }

let clearItem = () => {
  productList.splice(0)
  doneItem.value.splice(0)
}

</script>

<template>
  <div class="buying-container">
    <!-- form -->
    <h2>Buying Items</h2>
    <p>Add items you want to buy.</p>
    <form class="buying-form" style="line-height: 180%">
      <div class="buying-input-container">
        <input
          type="text"
          v-model="addItem"
          id="item"
          placeholder="e.g. milk"
        />
        <input type="number" v-model="addQty" id="qty" min="0" max="100" />
        <label for="qty"> unit (s)</label>
      </div>
      <button type="button" @click="Add">submit</button>
    </form>
    <!--Buying list -->
    <div class="buying-list-container">
      <h3>Your Buying List</h3>
      <p>
        (Pending:
        <span id="countPendingItems" style="color: red">{{
          totalPending
        }}</span>
        items, Done:<span id="countDoneItems" style="color: red">{{
          totalDone
        }}</span>
        items)
      </p>

      <!--pending list-->
      <div id="buying-list" style="line-height: 180%">
        <div v-for="(item, index) in productList" :key="index">
          <input type="checkbox" :value="item" v-model="doneItem"/>
          <label v-if="item.pending">
            {{ item.item }}, {{ item.qty }} unit : <span v-html="imgPending"></span>
          </label>
          <label v-else >
            <span :style="doneText">
            {{ item.item }}, {{ item.qty }} unit : 
            </span>
            <span v-html="imgDone"></span>
          </label>
        </div>
        {{productList}} <br>
        {{doneItem}}
      </div>

      <!--clear item-->
      <button @click="clearItem">clear items</button>
    </div>
  </div>
</template>

<style></style>
