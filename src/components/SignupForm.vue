<template>
  <form @submit.prevent="handleSubmit">
    <label>Name</label>
    <input type="text" v-model="name" />
    <label>Email</label>
    <input type="text" v-model="email" />
    <label>Password</label>
    <input type="password" v-model="password" />
    <button>Register</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const handleSubmit = () => {
      console.log(name.value, email.value, password.value);
    };
    return { name, email, password, handleSubmit };
  },
};
</script>

<style></style>
