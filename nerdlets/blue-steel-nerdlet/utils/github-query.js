const fetch = require(`cross-fetch`);
const apiUrl = `https://api.github.com/graphql`;

const query = (
  apiUrl,
  data = {
    query: `query {  viewer { login }}`,
    variables: null
  }
) => {
  return fetch(apiUrl, {
    method: `POST`,
    mode: `cors`,
    cache: `no-cache`,
    headers: {
      "Content-Type": `application/json`,
      Authorization: `token process.env.GITHUB_PERSONAL_TOKEN`
    },
    body: JSON.stringify(data)
  })
    .then(val => val.json())
    .then(f => f);
};

export default query;
