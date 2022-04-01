import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const getUserState = async () => {
  let isSingIn = false;
  await onAuthStateChanged(getAuth(), user => {
    isSingIn = Boolean(user);
  });
  return isSingIn;
};

