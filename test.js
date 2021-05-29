const accessToken = "";
const query = `
query{
   user(login: "LindieK") {
    name
    login
    avatarUrl
    bio
    repositories(last: 20, privacy:PUBLIC) {
      edges {
        node {
          name
          updatedAt
          description
          forkCount
          stargazerCount
          licenseInfo{
            name
          }
          issues{
           totalCount 
          }
          pullRequests{
            totalCount
          }
          primaryLanguage{
            color
            name
          }
          isPrivate
        }
      }
    }
  }
}
`;

fetch("https://api.github.com/graphql", {
  method: "POST",
  body: JSON.stringify({ query }),
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
  .then((res) => res.text())
  .then((body) => console.log(body))
  .catch((error) => console.error(error));
