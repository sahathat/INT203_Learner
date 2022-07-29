<template>
  <div>
    <NuxtLayout name="coreLayout"></NuxtLayout>
    <h1>Form user</h1>
    <form>
      name: <input type="text" />
      <input type="submit" value="insert" />
    </form>
    <!-- nested route -->
    <nuxt-child />
  </div>
</template>

<script>
</script>