<template>
  <nav v-if="user">
    <div>
      <p>Currently logged in as {{ user.displayName }}</p>
      <p class="email">{{ user.email }}</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout.js";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { error, logout } = useLogout();
    const { user } = getUser();
    const router = useRouter();
    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        console.log("User Logged Out");
      }
      router.push({ name: "Welcome" });
    };
    return { error, handleLogout, user };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
