import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const getUserState = () => {
  return new Promise((res, rej)=> {
    onAuthStateChanged(getAuth(), user => {
      res(Boolean(user))
    });

  })
};

