const fetch = require('cross-fetch');

const apiUrl = 'https://api.github.com/graphql';

export default function q(
  url = apiUrl,
  data = { query: 'query {  viewer {   login }}', variables: null }
) {
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'token '
    },
    body: JSON.stringify(data)
  })
    .then(val => {
      return val.json();
    })
    .then(f => {
      return f;
    });
}
