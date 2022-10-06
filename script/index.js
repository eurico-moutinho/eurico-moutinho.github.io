"use strict";
const btna = document.getElementById("aboutme");
const btnp = document.getElementById("projects");
const btnc = document.getElementById("contacts");
const secta = document.getElementById("about");
const sectp = document.getElementById("project");
const sectc = document.getElementById("contact");
const land = document.getElementById("landing");
const btnland = document.getElementById("land");
const nav = document.getElementById("navbar-toggler");
const bar = document.getElementById("navbarNav");

window.onload = () => {
  if (sectp && sectc && secta && land) {
    sectp.style.display = "none";
    sectc.style.display = "none";
    secta.style.display = "none";
    land.style.display = "inline";
    typeWriter();
  }
};

function Size() {
  const box = document.getElementsByClassName("top-marg");
  const title = document.getElementsByClassName("title");
  const img = document.getElementsByClassName("img-port");
  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("mouseover", () => {
      box[i].style.width = "97.36%";
      box[i].style.fontSize = "1.217em";
      title[i].style.fontSize = "2.8em";
      img[i].style.width = "36.5vh";
    });
    box[i].addEventListener("mouseout", () => {
      box[i].style.width = "80%";
      box[i].style.fontSize = "1em";
      title[i].style.fontSize = "2.3em";
      img[i].style.width = "30vh";
    });
  }
}

let i = 0;
let txt = "Welcome to my page";
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

if (btnland) {
  btnland.onclick = () => {
    if (sectp && land) {
      land.style.display = "none";
      sectp.style.display = "inline";
      Size();
    }
  };
}
if (btna) {
  btna.onclick = () => {
    if (sectp && sectc && secta && nav && bar && land) {
      nav.classList.add("collapsed");
      bar.classList.remove("show");
      land.style.display = "none";
      sectp.style.display = "none";
      sectc.style.display = "none";
      secta.style.display = "inline";
    }
  };
}
if (btnp) {
  btnp.onclick = () => {
    if (sectp && sectc && secta && nav && bar && land) {
      nav.classList.add("collapsed");
      bar.classList.remove("show");
      land.style.display = "none";
      secta.style.display = "none";
      sectc.style.display = "none";
      sectp.style.display = "inline";
      Size();
    }
  };
}
if (btnc) {
  btnc.onclick = () => {
    if (sectp && sectc && secta && nav && bar && land) {
      nav.classList.add("collapsed");
      bar.classList.remove("show");
      land.style.display = "none";
      secta.style.display = "none";
      sectp.style.display = "none";
      sectc.style.display = "inline";
    }
  };
}
