<script setup>
import {ref} from 'vue';

const {signIn} = useAuth();

const username = ref('');
const password = ref('');

const handleSignIn = async () => {
  try {
    await signIn('credentials', {username: username.value, password: password.value});
    alert('Login successful!');
  } catch (error) {
    console.log(error)
  }
};
</script>
<template>
  <div class="">
    <h1>Sign In</h1>
    <form @submit.prevent="handleSignIn">
      <div class="">
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" required/>
      </div>
      <div class="">
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" required/>
      </div>
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</button>
    </form>
  </div>
</template>