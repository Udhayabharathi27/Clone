// firebase.js - Updated configuration
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider,
  RecaptchaVerifier
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAxKfewXCOYTQ7eHIFgZNzWDztfBqtqItA",
  authDomain: "login-app-61ff7.firebaseapp.com",
  projectId: "login-app-61ff7",
  storageBucket: "login-app-61ff7.firebasestorage.app",
  messagingSenderId: "966295034205", // This is important for phone auth
  appId: "1:966295034205:web:286234a9bac2555741b0b4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Configure auth settings
auth.useDeviceLanguage();
auth.settings.appVerificationDisabledForTesting = false; // Set to true for testing with dummy numbers

export default app;