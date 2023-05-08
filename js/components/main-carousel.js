// 1 Abrir navegador
// 2 Pegar HTML todo
// 3 Fazer o botão existir
// 4 Clicar no botão

// 5 Abrir navegador
// 6 Pegar HTML todo
// 7 Pegar elements
// 8 Mover elements

const buttonRight = document.querySelector(".button-arrow.-right");
const buttonLeft = document.querySelector(".button-arrow.-left");
const elements = document.querySelector(".elements");
let pixels = 100;

buttonRight.addEventListener('click', function() {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px);`;

});

buttonLeft.addEventListener('click', function() {
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px);`;

});