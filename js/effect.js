import {
  menu,
  toggle,
  query,
  form,
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
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(`.netlify/functions/node-fetch?${query.value}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);

        //   if (json.errors) {
        //     form.action = "./404.html";
        //     form.submit();
        //   }
        //   form.action = "./profile.html";
        //   setResult(json);
        //   form.submit();
        });
    });
  }
};

export { init };
