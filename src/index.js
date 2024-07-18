import "./css/style.css";
import createHome from "./pages/home.js";
import createContact from "./pages/contact.js";
import createMenu from "./pages/menu.js";

const content = document.getElementById("content");
const homebtn = document.getElementById("homebtn");
const menubtn = document.getElementById("menubtn");
const contactbtn = document.getElementById("contactbtn");

createHome();

homebtn.addEventListener("click", function () {
    content.innerHTML = "";
    createHome();
});

contactbtn.addEventListener("click", function () {
    content.innerHTML = "";
    createContact();
});

menubtn.addEventListener("click", function () {
    content.innerHTML = "";
    createMenu();
})