const fetch = require("node-fetch");

const API_ENDPOINT = "https://api.github.com/graphql";

export async function handler(event, context) {
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
  let response;
  try {
    response = await fetch(API_ENDPOINT, {
      method: "POST",
      body: JSON.stringify({ query: graphql }),
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });
    // handle response
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response,
    }),
  };
}
