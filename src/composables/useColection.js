import { ref } from "@vue/runtime-dom";
import { projectFirestore } from "../firebase/config";

const useCollection = (collection) => {
  const error = ref(null);

  const addDoc = async (chat) => {
    error.value = null;
    try {
      await projectFirestore.collection(collection).add(chat);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { error, addDoc };
};

export default useCollection;
