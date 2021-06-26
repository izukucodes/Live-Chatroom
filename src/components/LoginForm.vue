<template>
  <form @submit.prevent="handleSubmit">
    <label>Email</label>
    <input type="text" v-model="email" />
    <label>Password</label>
    <input type="password" v-model="password" />
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const handleSubmit = () => {
      console.log(email.value, password.value);
    };
    return { email, password, handleSubmit };
  },
};
</script>

<style></style>
