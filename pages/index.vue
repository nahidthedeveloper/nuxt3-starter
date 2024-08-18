<script setup lang="js">
definePageMeta({
  middleware: "auth"
})
const {data} = useAuth()
</script>
<template>
  <div class="flex flex-col items-center gap-4">
    <h1 class="text-3xl font-bold">Hello, {{ data.user.name }}</h1>
    <p>Email: {{ data.user.email }}</p>
    <img
        :src="data.user.picture"
        alt="avatar"
        class="relative inline-block h-52 w-52 !rounded-none object-cover object-center"
    />
  </div>
</template>
