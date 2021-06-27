import { ref } from "vue";
import { projectAuth } from "../firebase/config";
const error = ref(null);

const signup = async (displayName, email, password) => {
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("There's an Error");
    }
    res.user.updateProfile({ displayName });
    console.log(res.user);
    return res;
  } catch (err) {
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
