import { initializeApp, FirebaseApp } from 'firebase/app';

const env = import.meta.env;

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
  measurementId: env.VITE_FIREBASE_MEASUREMENT_ID,
};

let app: FirebaseApp;

const init = () => {
  if (!app) {
    app = initializeApp(firebaseConfig);
  }
};

const getAppInstance = () => {
  if (!app) {
    init();
  }
  return app;
};

export const firebaseService = {
  init,
  getAppInstance,
};
