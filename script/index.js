"use strict";
const btna = document.getElementById('aboutme');
const btnp = document.getElementById('projects');
const btnc = document.getElementById('contacts');
const secta = document.getElementById('about');
const sectp = document.getElementById('project');
const sectc = document.getElementById('contact');
const land = document.getElementById('landing');
const btnland = document.getElementById('land');
const nav = document.getElementById('navbar-toggler');
const bar = document.getElementById('navbarNav');
window.onload = () => {
    if (sectp && sectc && secta && land) {
        sectp.style.display = 'none';
        sectc.style.display = 'none';
        secta.style.display = 'none';
        land.style.display = 'inline';
    }
};
if (btnland) {
    btnland.onclick = () => {
        if (sectp && land) {
            land.style.display = 'none';
            sectp.style.display = 'inline';
        }
    };
}
if (btna) {
    btna.onclick = () => {
        if (sectp && sectc && secta && nav && bar && land) {
            nav.classList.add('collapsed');
            bar.classList.remove('show');
            land.style.display = 'none';
            sectp.style.display = 'none';
            sectc.style.display = 'none';
            secta.style.display = 'inline';
        }
    };
}
if (btnp) {
    btnp.onclick = () => {
        if (sectp && sectc && secta && nav && bar && land) {
            nav.classList.add('collapsed');
            bar.classList.remove('show');
            land.style.display = 'none';
            secta.style.display = 'none';
            sectc.style.display = 'none';
            sectp.style.display = 'inline';
        }
    };
}
if (btnc) {
    btnc.onclick = () => {
        if (sectp && sectc && secta && nav && bar && land) {
            nav.classList.add('collapsed');
            bar.classList.remove('show');
            land.style.display = 'none';
            secta.style.display = 'none';
            sectp.style.display = 'none';
            sectc.style.display = 'inline';
        }
    };
}
