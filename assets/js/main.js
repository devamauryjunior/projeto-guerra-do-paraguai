// const a = document.querySelector('.material-symbols-outlined');
// let b = null;
// a.addEventListener('click', function() {
//     a.classList.remove('material-symbols-outlined');
//     a.textContent = 'close';
//     a.classList.add('material-symbols-outlined');
//     b = a;
// });
// console.log(b);

// const container1 = document.querySelector('.container-1');

const getOpenButtonMenu = document.querySelector('#openMenu');
const getCloseButtonMenu = document.querySelector('#closeMenu');
const nav = document.querySelector('.navigation');

getCloseButtonMenu.style.display = "none";
getOpenButtonMenu.addEventListener('click', function(){
    nav.classList.toggle('active');
    document.body.style.overflow = "hidden";
    getOpenButtonMenu.style.display = "none";
    getCloseButtonMenu.style.display = "block";
})

getCloseButtonMenu.onclick = ()=>{
    nav.classList.toggle('active');
    document.body.style.overflow = "scroll";
    getCloseButtonMenu.style.display = "none";
    getOpenButtonMenu.style.display = "block";
}
