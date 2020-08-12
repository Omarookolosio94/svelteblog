import fetch from 'node-fetch';

const url = 'https://ancient-brushlands-91721.herokuapp.com';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

export async function getProfile(call, token) {
  try {
    return await call(`${url}/api/profile/me`, {
      method: 'GET',
      headers: { ...headers, 'x-auth-token': token }
    });
  } catch (err) {
    return JSON.stringify({ msg: 'Server Error' });
  }
}
