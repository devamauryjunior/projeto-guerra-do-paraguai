// -------------------------------------------------------------
const getOpenButtonMenu = document.querySelector('#openMenu');
const getCloseButtonMenu = document.querySelector('#closeMenu');
const nav = document.querySelector('.navigation');
// const brasilLink = document.querySelector('#brasilLink');
const countryLinks = document.querySelectorAll('.ctr-links');
// -------------------------------------------------------------

// definindo botão de fechar o menu como display none
getCloseButtonMenu.style.display = "none";

// -------------------------------------------------------------
getOpenButtonMenu.addEventListener('click', ()=>{
    nav.classList.toggle('active');
    // definindo o sroll do budy como "desativo"
    // 1 das maneiras para tirar o scroll da página
    document.body.style.overflow = "hidden";
    // definindo botão de abrir o menu como display none
    getOpenButtonMenu.style.display = "none";
    // definindo botão de fechar o menu como display block
    getCloseButtonMenu.style.display = "block";
})
// -------------------------------------------------------------

// -------------------------------------------------------------
getCloseButtonMenu.onclick = function() {
    nav.classList.toggle('active');
    // definindo o sroll do budy para scroll, isto é, volta ao normal
    document.body.style.overflow = "scroll";
    // definindo botão de fechar o menu como display none
    getCloseButtonMenu.style.display = "none";
    // definindo botão de abrir o menu como display block
    getOpenButtonMenu.style.display = "block";
}
// -------------------------------------------------------------

countryLinks.forEach(element => {
    element.onclick = ()=>{
        nav.classList.toggle('active');
        document.body.style.overflow = "scroll";
        getCloseButtonMenu.style.display = "none";
        getOpenButtonMenu.style.display = "block";
    }
})

// brasilLink.onclick = ()=>{
//     document.body.style.overflow = "scroll";
//     array.forEach(element => {
//         element.onclick = 
//     });
// }