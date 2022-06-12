import firebase from "./../firebase";

export const ref = (url) => {
  return firebase.database().ref(url);
};

export const getToList = (url, setState, loading) => {
  const ref = firebase.database().ref(url);

  ref.on("value", (snap) => {
    const values = snap.val();
    const list = [];
    for (const id in values) {
      list.push({ id, ...values[id] });
    }
    setState(list);
    loading(false);
  });
};

export const updateChild = (url, id, value) => {
  const ref = firebase.database().ref(url).child(id);

  return ref.update(value);
};

export const deleteChild = (url, id) => {
  const ref = firebase.database().ref(url).child(id);

  return ref.remove();
};
