import { Router } from "./router.js";
import axios from "axios";

const routes = [
  {
    path: "/",
    template: "<h1 class='title'>Welcome to my Portfolio</h1>",
  },
  {
    path: "/about",
    template: "<h1 class='title'>About me: Soe Lucas</h1>",
  },
  {
    path: "/contact",
    template:
      "<h1 class='title'>Contact me</h1><p class='prompt'>How are you!</p><img src='https://avatars.githubusercontent.com/u/98495308?s=64' alt='Image'>",
  },
];

const router = new Router(routes);

Router.prototype.loadRoute = function (...urlSegs) {
  const matchedRoute = this._matchUrlToRoute(urlSegs);
  const url = `/${urlSegs.join("/")}`;

  axios
    .get(url)
    .then((response) => {
      const template = response.data;
      const routerOutElem = document.querySelector("[data-router]");
      routerOutElem.innerHTML = template;
    })
    .catch((error) => {
      console.error(error);
    });

  history.pushState({}, "", url);
};
