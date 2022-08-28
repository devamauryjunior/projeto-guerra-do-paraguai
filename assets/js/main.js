const getOpenButtonMenu = document.querySelector('#openMenu');
const getCloseButtonMenu = document.querySelector('#closeMenu');
const nav = document.querySelector('.navigation');
const countryLinks = document.querySelectorAll('.ctr-links');
const buttonUpPage = document.querySelector('#upPage');
let headerUp = document.querySelector('#header');

// definindo botão de fechar o menu como display none
getCloseButtonMenu.style.display = "none";


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

getCloseButtonMenu.onclick = function() {
    nav.classList.toggle('active');
    // definindo o sroll do budy para scroll, isto é, volta ao normal
    document.body.style.overflow = "scroll";
    // definindo botão de fechar o menu como display none
    getCloseButtonMenu.style.display = "none";
    // definindo botão de abrir o menu como display block
    getOpenButtonMenu.style.display = "block";
}

countryLinks.forEach(element => {
    element.onclick = ()=>{
        nav.classList.toggle('active');
        document.body.style.overflow = "scroll";
        getCloseButtonMenu.style.display = "none";
        getOpenButtonMenu.style.display = "block";
    }
})

buttonUpPage.onclick = ()=>{
    let headerTop = headerUp.offsetTop;
    let headerHeight = headerUp.offsetHeight;
    // console.log(headerTop, headerHeight);
    // window.scrollTo(headerHeight, headerTop); 
    // scrollTo() EFETIVAMENTE IGUAL a scroll()
    // As duas servem para levar em determinado local do documento, passando valores (x,y)
    // x - eixo horizontal (deitado) __
    // y - eixo vertical (em pé) |
    // scrool() sua diferença, exemplo:
    window.scroll({
        top: headerTop,
        left: headerHeight,
        behavior: 'smooth'
    });      
}