// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnc3Qc5Py_zLQkd655UqKLz2xPEYodg60",
  authDomain: "e-commerce-react-js-4884e.firebaseapp.com",
  projectId: "e-commerce-react-js-4884e",
  storageBucket: "e-commerce-react-js-4884e.appspot.com",
  messagingSenderId: "27873193439",
  appId: "1:27873193439:web:02a0f5c93057a7aebda86a"
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app






