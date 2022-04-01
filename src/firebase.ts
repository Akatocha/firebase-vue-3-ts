// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child, onValue } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBRWxcMz59xs23K8sSItAwRH8xS22a_d6w',
  authDomain: 'fir-vue-3-ts.firebaseapp.com',
  databaseURL: 'https://fir-vue-3-ts-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'fir-vue-3-ts',
  storageBucket: 'fir-vue-3-ts.appspot.com',
  messagingSenderId: '131030357633',
  appId: '1:131030357633:web:9a0ff9cbdbce989aa95f80',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export interface User {
  userId: string;
  phone: string;
  email: string;
}



export function setUser(user: User): void {
  set(ref(db, 'users/' + user.userId), {
    phone: user.phone,
    email: user.email,
    userId: user.userId,
  });
}

// function getUserOnChange(userId: number): void {
//   const rawData = ref(db, 'users/' + userId);
//   // update value as websocket
//   onValue(rawData, snapshot => {
//     const data = snapshot.val();
//     // update Value function when DB is update
//   });
// }

// async function getUser(userId: number): Promise<User | null> {
//   try {
//     const dbRef = ref(db);
//     const snapshot = await get(child(dbRef, `users/${userId}`));
//     if (!snapshot.exists()) {
//       console.log('getUser: No data available');
//       return null;
//     } else {
//       const { username, email, age } = snapshot.val();
//       const user: User = { userId, username, email, age };
//       return user;
//     }
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }


