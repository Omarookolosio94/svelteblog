import { writable } from 'svelte/store';

let token;
if (process.browser) {
  token = localStorage.getItem('userToken');
}
export const errorMsg = writable(null);
export const userToken = writable(null);
// export const userToken = writable(null);
export const session = writable(token ? JSON.parse(token) : null);

if (process.browser) {
  session.subscribe((value) => {
    if (value) localStorage.setItem('userToken', JSON.stringify(value));
    else localStorage.removeItem('userToken'); // for logout
  });
}
