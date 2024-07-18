import logopng from "../images/PizzaBirdLogo.png";
import logotext from "../images/PizzaBirdTxt.png";

export default function createLogo(size) {
  const content = document.getElementById("content");

  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logofull");

  const logoImg = new Image();
  logoImg.src = logopng;
  logoImg.classList.add(size+"logo");

  const logoTxt = new Image();
  logoTxt.src = logotext;
  logoTxt.classList.add(size+"logo");

  logoDiv.appendChild(logoImg);
  logoDiv.appendChild(logoTxt);

  content.appendChild(logoDiv);
}
