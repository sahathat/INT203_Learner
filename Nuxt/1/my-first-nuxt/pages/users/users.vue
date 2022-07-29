<template>
  <div>
    <h1>User Table</h1>
    <table>
      <tr>
        <th>id</th>
        <th>User</th>
      </tr>
      <tr>
        <td>1</td>
        <td>A</td>
      </tr>
      <tr>
        <td>2</td>
        <td>B</td>
      </tr>
      <tr>
        <td>3</td>
        <td>C</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "UserPage",
};
</script>

<style>
table, th, td {
  border: 1px solid;
}
</style>