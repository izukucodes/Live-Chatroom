<template>
  <form @submit.prevent="handleSubmit">
    <label>Name</label>
    <input type="text" v-model="name" />
    <label>Email</label>
    <input type="text" v-model="email" />
    <label>Password</label>
    <input type="password" v-model="password" />
    <p class="error">{{ error }}</p>
    <button>Register</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup";
export default {
  setup(props, context) {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const { error, signup } = useSignup();
    const handleSubmit = async () => {
      await signup(name.value, email.value, password.value);
      if (!error.value) {
        name.value = "";
        email.value = "";
        password.value = "";
        context.emit("signup");
      }
    };
    return { name, email, password, handleSubmit, error };
  },
};
</script>

<style></style>
