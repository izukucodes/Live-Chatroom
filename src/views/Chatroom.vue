<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script>
import { ref, watch } from "@vue/runtime-core";
import Navbar from "../components/Navbar.vue";
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";
export default {
  components: { Navbar },
  setup() {
    const router = useRouter();
    const { user } = getUser();
    watch(user, () => {
      console.log(user);
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style></style>
