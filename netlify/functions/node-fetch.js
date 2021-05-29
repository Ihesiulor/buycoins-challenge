const fetch = require("node-fetch");

const API_ENDPOINT = "https://api.github.com/graphql";

exports.handler = async (event, context) => {
  let graphql = `
    query{
  user(login: "${event.rawQuery}") {
    name
    login
    avatarUrl
    bio
    repositories(first: 20, privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC}) {
      edges {
        node {
          name
          url
          updatedAt
          description
          forkCount
          stargazerCount
          licenseInfo {
            name
          }
          issues {
            totalCount
          }
          pullRequests {
            totalCount
          }
          primaryLanguage {
            color
            name
          }
        }
      }
    }
  }
}
  `;
  return new Promise((resolve, reject) => {
    fetch(API_ENDPOINT, {
      method: "POST",
      body: JSON.stringify({ query: graphql }),
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          // res.status >= 200 && res.status < 300
          return res.json();
        } else {
          resolve({ statusCode: res.status || 500, body: res.statusText });
        }
      })
      .then((data) => {
        const response = {
          statusCode: 200,
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        };
        resolve(response);
      })
      .catch((err) => {
        console.log(err);
        resolve({ statusCode: err.statusCode || 500, body: err.message });
      });
  });
};
