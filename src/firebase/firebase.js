import { initializeApp } from 'firebase/app' ;
import { getAuth } from 'firebase/auth' ;
import { fireBaseConfig } from './firebaseConfig' ;
import { getFirestore } from "firebase/firestore";




const app =  initializeApp(fireBaseConfig)
console.log(app);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
export default app;

console.log(auth);