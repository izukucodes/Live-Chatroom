<template>
  <form>
    <textarea
      v-model="message"
      placeholder="Type a message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import getUser from "../composables/getUser";
import { timeStamp } from "../firebase/config";
import useCollection from "../composables/useColection";

export default {
  setup() {
    const message = ref("");
    const { user } = getUser();
    const { error, addDoc } = useCollection("messages");
    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timeStamp(),
      };
      // console.log(chat);
      await addDoc(chat);

      if (!error.value) {
        message.value = "";
      }
    };
    return { message, handleSubmit };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
.error {
  text-align: center;
  color: #ff2a58;
  font-size: 12px;
  padding: 10px 0;
}
</style>
