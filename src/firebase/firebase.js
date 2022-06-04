import { initializeApp } from 'firebase/app' ;
import { getAuth } from 'firebase/auth' ;
import { fireBaseConfig } from './firebaseConfig' ;
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";




const app =  initializeApp(fireBaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const storageRef = ref(storage);
export default app;

