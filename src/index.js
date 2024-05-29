import "./style.css";
import { home } from "./home";
import { menu } from "./menu";
import { about } from "./about";

const content = document.querySelector(".content");
const buttons = document.querySelectorAll("button");
home();
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("homeBtn")) {
      content.innerHTML = "";
      home();
    } else if (btn.classList.contains("menuBtn")) {
      content.innerHTML = "";
      menu();
    } else if (btn.classList.contains("aboutBtn")) {
      content.innerHTML = "";
      about();
    }
  });
});
