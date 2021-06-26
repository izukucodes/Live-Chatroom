<template>
  <div class="welcome container">
    <h1>Welcome</h1>
    <div v-if="showLogin">
      <LoginForm />
      <p>
        Don't have an account ?
        <span @click="showLogin = !showLogin">Register</span>
      </p>
    </div>

    <div v-if="!showLogin">
      <SignupForm />
      <p>
        Already have an account ?
        <span @click="showLogin = !showLogin">Sign In</span>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import LoginForm from "../components/LoginForm.vue";
import SignupForm from "../components/SignupForm.vue";
export default {
  components: { LoginForm, SignupForm },
  setup() {
    const showLogin = ref(false);

    return { showLogin };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0px;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>
