import {
  menu,
  toggle,
  query,
  formIndex,
  formProfile,
  page,
  handleDisplay,
  setResult,
} from "./utils.js";

const init = () => {
  window.addEventListener("load", (e) => {
    e.preventDefault();
    if (page === "/profile.html") {
      handleDisplay();
    }
  });
  if (formIndex) {
    formIndex.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(`.netlify/functions/node-fetch?${query.value}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setResult(json);
          if (json.errors) {
            formIndex.action = "./404.html";
            return;
          }
          formIndex.action = "./profile.html";
        })
        .finally(() => {
          formIndex.submit();
        });
    });
  }

  if (formProfile) {
    formProfile.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(`.netlify/functions/node-fetch?${query.value}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setResult(json);
          if (json.errors) {
            formProfile.action = "./404.html";
            return;
          }
          formProfile.action = "./profile.html";
        })
        .finally(() => {
          formProfile.submit();
        });
    });
  }
};

export { init };
