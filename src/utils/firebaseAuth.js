import { setCookie, deleteCookie } from "./cookie";
import firebase from "./../firebase";

const successNotification = (message = "Success") => {
  console.log(message);
};

export const signUp = (login, email, password) => {
  return new Promise((res, rej) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({ displayName: login });
        setCookie("isAuth", true, 365);
        localStorage.setItem(
          "This User",
          JSON.stringify({
            name: login,
            email: user.email,
          })
        );
        successNotification();
        res("Sucess");
      })
      .catch(({ code, message }) => {
        rej(code, message);
      });
  });
};

export const signIn = (email, password) => {
  return new Promise((res, rej) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        setCookie("isAuth", true, 365);
        localStorage.setItem(
          "This User",
          JSON.stringify({
            name: user.displayName,
            email: user.email,
          })
        );
        successNotification();
        res("Sucess");
      })
      .catch(({ code, message }) => {
        rej(code, message);
      });
  });
};

export const logOut = () => {
  return new Promise((res, rej) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        deleteCookie("isAuth");
        localStorage.removeItem("This User");
        res("LogOut");
      })
      .catch(({ code, message }) => {
        rej(code, message);
      });
  });
};

export const googleSignIn = () => {
  return new Promise((res, rej) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(({ user }) => {
        setCookie("isAuth", true, 365);
        localStorage.setItem(
          "This User",
          JSON.stringify({
            name: user.displayName,
            email: user.email,
            img: user.photoURL,
          })
        );
        successNotification();
        res("Success");
      })
      .catch(({ code, message }) => {
        rej(code, message);
      });
  });
};

export const facebookSignIn = () => {
  return new Promise((res, rej) => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(({ user }) => {
        setCookie("isAuth", true, 365);
        localStorage.setItem(
          "This User",
          JSON.stringify({
            name: user.displayName,
            email: user.email,
          })
        );
        successNotification();
        res("Success");
      })
      .catch(({ code, message }) => {
        rej(code, message);
      });
  });
};

export const resetPassword = (email, text = "Success") => {
  return new Promise((res, rej) => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        successNotification(text);
        res("Success");
      })
      .catch(({ code, message }) => {
        rej(code, message);
      });
  });
};




