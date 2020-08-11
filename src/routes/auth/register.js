import fetch from 'node-fetch';

const url = 'https://ancient-brushlands-91721.herokuapp.com';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

export async function post(req, res) {
  try {
    const user = req.body;

    const result = await fetch(`${url}/api/user`, {
      method: 'POST',
      headers,
      body: JSON.stringify(user)
    });

    const resData = await result.json();

    if (result.status === 200) {
      req.session.token = resData.token;
      res.end(JSON.stringify({ token: resData.token }));
    } else {
      res.end(JSON.stringify(resData));
    }
  } catch (err) {
    console.log(err, 'error');
    res.end(JSON.stringify(err));
  }
}
