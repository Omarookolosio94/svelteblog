import { goto } from '@sapper/app';
import axios from 'axios';

let url = process.env.URL;

export const authUser = async (token) => {
  try {
    if (token) {
      goto('/');
    }
  } catch (err) {
    console.log(err);
  }
};
