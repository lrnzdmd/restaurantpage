import createLogo from "../modules/logo.js";

export default function createContact() {
  const content = document.getElementById("content");

  createLogo("medium");

  const contactinfo = document.createElement("div");
  contactinfo.classList.add("contactinfo");
  const contactH = document.createElement("h3");
  contactH.textContent = "CONTACT INFORMATION";
  const contactP = document.createElement("p");
  contactP.textContent =
    "Just scream i want PIZZA BIRD into the wind and a certified PIZZA BIRD Employee will fly your way and deliver directly to you.";
  contactinfo.appendChild(contactH);
  contactinfo.appendChild(contactP);
  content.appendChild(contactinfo);
}
