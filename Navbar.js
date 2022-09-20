const menu = document.getElementById("menu");
const nav = document.getElementById("navbar");
if(menu) {
    menu.addEventListener("click", ()=>{
        nav.classList.add("active")
    })
}

const close = document.getElementById("close");
// const nav = document.getElementById("navbar");
if(close) {
    close.addEventListener("click", ()=>{
        nav.classList.remove("active")
    })
}