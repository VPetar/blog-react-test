// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu8c_0v1HBx4YfSi6wxXz01DzRIaDuzmE",
  authDomain: "blog-test-pannonians.firebaseapp.com",
  projectId: "blog-test-pannonians",
  storageBucket: "blog-test-pannonians.appspot.com",
  messagingSenderId: "532163790100",
  appId: "1:532163790100:web:72d913ad7240bf02d8ee01",
  measurementId: "G-C200NWLZ8D",
};

// Initialize Firebase

const Firebase = (function () {
  let instance;

  function createInstance() {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    return { app, analytics };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

export default Firebase;
