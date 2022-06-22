import * as flsFunctions from "./modules/functions.js";
import openMenu from "./modules/openMenu.js";

flsFunctions.isWebp();

window.addEventListener('DOMContentLoaded', () => {
  openMenu('.header-menu__btn', '.header-block__left');
});