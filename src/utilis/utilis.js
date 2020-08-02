import { goto } from '@sapper/app';

export const authUser = async (token) => {
  try {
    if (token) {
      goto('/');
    }
  } catch (err) {
    console.log(err);
  }
};
