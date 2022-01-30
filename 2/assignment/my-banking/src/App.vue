<script setup>
let accountList = [
  { name: "salary", amount: 10000 },
  { name: "rent", amount: -2500 },
  { name: "parking fee", amount: 0 },
  { name: "car fuel", amount: -600 },
  { name: "salary", amount: 5500 },
];

let showGreen = "p-3 mb-2 alert table table-success text-success";
let showRed = "p-3 mb-2 alert table table-danger text-danger";

function ShowStatus(amount) {
  return amount > 0 ? showGreen : amount < 0 ? showRed : -1;
}

function IsNotZero(amount) {
  return amount != 0 ? true : false;
}

let sum = accountList.reduce(
  (previousTotal, currentValue) => previousTotal + currentValue.amount,
  0
);
</script>

<template>
  <div class="container overflow-hidden">
    <h2>My Account</h2>
    <div class="d-flex p-5 bd-highlight">
      <table class="table table-hover table-sm">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Account</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="account in accountList" :key="index">
            <td
              v-show="IsNotZero(account.amount)"
              :class="ShowStatus(account.amount)"
            >
              {{ account.name }}
            </td>
            <td
              v-show="IsNotZero(account.amount)"
              :class="ShowStatus(account.amount)"
            >
              {{ account.amount }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td scope="col">Net total</td>
            <td scope="col">{{ sum }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<style></style>
