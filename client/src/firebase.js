// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8e7b4.firebaseapp.com",
  projectId: "mern-estate-4b301",
  storageBucket: "mern-estate-4b301.appspot.com",
  messagingSenderId: "1068187008017",
  appId: "1:1068187008017:web:f740d57a49ec51c6ecc5b0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "mern-estate-8e7b4.firebaseapp.com",
//   projectId: "mern-estate-8e7b4",
//   storageBucket: "mern-estate-4b301.appspot.com",
//   messagingSenderId: "119744383045",
//   appId: "1:119744383045:web:da75b35b13e152dd41fb2c"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);



// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";

// // Auth project config
// const authConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "mern-estate-8e7b4.firebaseapp.com",
//   projectId: "mern-estate-8e7b4",
//   appId: "1:119744383045:web:da75b35b13e152dd41fb2c"
// };

// // Storage project config
// const storageConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "mern-estate-4b301.firebaseapp.com",
//   projectId: "mern-estate-4b301",
//   storageBucket: "mern-estate-4b301.appspot.com",
//   appId: "1:1068187008017:web:f740d57a49ec51c6ecc5b0"
// };

// // Initialize apps
// const authApp = initializeApp(authConfig, "authApp");
// const storageApp = initializeApp(storageConfig, "storageApp");

// // Use services
// const auth = getAuth(authApp);
// const storage = getStorage(storageApp);