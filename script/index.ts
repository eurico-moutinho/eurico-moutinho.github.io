const btna = document.getElementById('aboutme');
const btnp = document.getElementById('projects');
const btnc = document.getElementById('contacts');
const secta = document.getElementById('about');
const sectp = document.getElementById('project');
const sectc = document.getElementById('contact');

window.onload=()=> {
    if(sectp && sectc && secta){
    sectp.style.display='none';
    sectc.style.display = 'none';
    secta.style.display='inline';}
}

if(btna){
btna.onclick = () => {
    if(sectp && sectc && secta){
    sectp.style.display='none';
    sectc.style.display = 'none';
    secta.style.display='inline';}
}}

if(btnp){
btnp.onclick = () => {
    if(sectp && sectc && secta){
    secta.style.display='none';
    sectc.style.display = 'none';
    sectp.style.display='inline';}
}}

if(btnc){
btnc.onclick = () => {
    if(sectp && sectc && secta){
    secta.style.display='none';
    sectp.style.display='none';
    sectc.style.display = 'inline';}
}}