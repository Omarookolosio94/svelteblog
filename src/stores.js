import { writable } from 'svelte/store';
import { goto } from '@sapper/app';

export const userToken = writable(null); //
export const errorMsg = writable(null);

export const authUser = async () => {
  if (userToken) {
    goto('/');
  }
};
