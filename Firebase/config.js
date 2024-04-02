import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhEffzjADGMHOCEPwb0f2gmPL3M62w-HQ",
  authDomain: "fitness-ge.firebaseapp.com",
  projectId: "fitness-ge",
  storageBucket: "fitness-ge.appspot.com",
  messagingSenderId: "542059515656",
  appId: "1:542059515656:web:5b4373067cfc56eab866bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
