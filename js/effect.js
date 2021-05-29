import {
  menu,
  toggle,
  toggleOff,
  query,
  formIndex,
  formProfile,
  formProfileMenu,
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
    if (toggle||toggleOff) {
      toggle.addEventListener("click", (e) => {
        // e.preventDefault();
        if (menu.style.transform === "translateX(101%)") {
          menu.style.transform="translateX(0%)";
        } else {
          menu.style.transform = "translateX(101%)";
        }
      });
            toggleOff.addEventListener("click", (e) => {
        // e.preventDefault();
        if (menu.style.transform === "translateX(101%)") {
          menu.style.transform="translateX(0%)";
        } else {
          menu.style.transform = "translateX(101%)";
        }
      });
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
  if (formProfileMenu) {
    formProfileMenu.addEventListener("submit", (e) => {
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
