import { firebaseService } from '@src/services/firebase.service';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const app = firebaseService.getAppInstance();
const auth = getAuth(app);

const signinWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    provider.addScope('email');
    provider.addScope('profile');
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.log(error);
  }
};

export const authService = {
  signinWithGoogle,
  auth: auth,
  signOut: async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  },
};
