import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6xLj9E89C60OSE2SdUJFBOY-RCPP7TWM",
  authDomain: "data-visualization-632dc.firebaseapp.com",
  projectId: "data-visualization-632dc",
  storageBucket: "data-visualization-632dc.firebasestorage.app",
  messagingSenderId: "384283230024",
  appId: "1:384283230024:web:dadbe302a7c38ecd0f7d7d"
};


 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);