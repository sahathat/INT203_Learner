<script setup>
defineProps({
  message: {
    type: String,
  },
});
</script>

<template>
  <div class="complete-message">
    <!-- show message -->
    {{ message }}
  </div>
</template>

<style>
.complete-message {
  height: 40px;
  font-size: 30px;
  color: rgb(43, 20, 246);
}
</style>
