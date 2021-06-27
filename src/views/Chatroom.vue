<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import NewChatForm from "../components/NewChatForm.vue";
import { watch } from "@vue/runtime-core";
import Navbar from "../components/Navbar.vue";
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";
import ChatWindow from "../components/ChatWindow.vue";
export default {
  components: { Navbar, NewChatForm, ChatWindow },
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
