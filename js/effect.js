import {
  menu,
  toggle,
  query,
  formIndex,
  formProfile,
  formProfileMenu,
  page,
  handleDisplay,
  setResult,
} from "./utils.js";

const init = () => {
    toggle.addEventListner("click", (e) => {
    if (menu.className === "toggle-off") {
      menu.className =
        "absolute top-0 right-0 w-4/5 h-screen flex md:hidden flex-col toggle-on bg-gray-2";
    }
    menu.className =
      "absolute top-0 right-0 w-4/5 h-screen flex md:hidden flex-col toggle-off bg-gray-2";
  });
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
    formIndex.addEventListener("submit", (e) => {
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
  if (formProfileMenu) {
    formIndex.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(`.netlify/functions/node-fetch?${query.value}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setResult(json);
          if (json.errors) {
            formProfileMenu.action = "./404.html";
            return;
          }
          formProfileMenu.action = "./profile.html";
        })
        .finally(() => {
          formProfileMenu.submit();
        });
    });
  }
};

export { init };
