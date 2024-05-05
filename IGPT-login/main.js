import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8gjT89SONfI0GTHKjjxNDL98588305KQ",
  authDomain: "igpt-9f808.firebaseapp.com",
  databaseURL: "https://igpt-9f808-default-rtdb.firebaseio.com",
  projectId: "igpt-9f808",
  storageBucket: "igpt-9f808.appspot.com",
  messagingSenderId: "463334922749",
  appId: "1:463334922749:web:0b4001fe6eff37ebed6194",
  measurementId: "G-42PJ6CPPQ0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";

const providerGoogle = new GoogleAuthProvider();
const providerMicrosoft = new OAuthProvider("microsoft.com");
const providerGitHub = new OAuthProvider("github.com");

const googleLogin = document.getElementById("google-btn");
googleLogin.addEventListener("click", () => {
  signInWithPopup(auth, providerGoogle)
    .then((result) => {
      const user = result.user;
      console.log(user);
      window.location.href = "../logged.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage);
    });
});

const microsoftLogin = document.getElementById("microsoft-btn");
microsoftLogin.addEventListener("click", () => {
  signInWithPopup(auth, providerMicrosoft)
    .then((result) => {
      const user = result.user;
      console.log(user);
      window.location.href = "../logged.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage);
    });
});

const githubLogin = document.getElementById("github-btn");
githubLogin.addEventListener("click", () => {
  signInWithPopup(auth, providerGitHub)
    .then((result) => {
      const user = result.user;
      console.log(user);
      window.location.href = "../logged.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage);
    });
});

function togglePassword() {
  var passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

function signIn(provider) {
  if (provider === "Google") {
    googleLogin.click();
  } else if (provider === "Microsoft") {
    microsoftLogin.click();
  } else if (provider === "GitHub") {
    githubLogin.click();
  }
}
