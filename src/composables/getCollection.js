import { ref, watchEffect } from "vue";
import { projectFirestore } from "../firebase/config";

const getColletion = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      console.log("snapshot");
      let results = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      error.value = err.message;
    }
  );

  watchEffect((onInvalidate) => {
    // unsub from prev snapshot
    onInvalidate(() => unsub());
  });

  return { error, documents };
};

export default getColletion;
