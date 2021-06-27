<template>
  <form @submit.prevent="handleSubmit">
    <label>Email</label>
    <input type="text" v-model="email" />
    <label>Password</label>
    <input type="password" v-model="password" />
    <p class="error">{{ error }}</p>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogin from "../composables/useLogin";
export default {
  setup(props, context) {
    const email = ref("");
    const password = ref("");
    const { error, login } = useLogin();
    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        console.log("User Signed In");
        context.emit("login");
      }
    };
    return { email, password, handleSubmit, error };
  },
};
</script>

<style></style>
