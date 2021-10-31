let menuBtn = document.querySelector("#menu-btn");
let navMenu = document.querySelector("#nav-menu");

menuBtn.addEventListener('click', showMenu);
function showMenu() {
    navMenu.classList.toggle('show-menu')
}

window.addEventListener("scroll", ()=>{
    let nav = document.querySelector("#nav");
    nav.classList.toggle('scroll-nav', window.scrollY>0);
    // console.log(header);
});
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop-50;

        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <=sectionTop+ sectionHeight-20) {
           document.querySelector(".nav-menu a[href*=" +sectionId + "]").parentElement.classList.add("active-btn");

        }else {
            document.querySelector(".nav-menu a[href*=" +sectionId + "]").parentElement.classList.remove("active-btn");
        }
        let li = document.querySelectorAll(".nav-menu li");
        if(li[1].className == "active-btn") {
            li[0].classList.remove("active-btn");
        }else if(li[2].className == "active-btn"){
            li[0].classList.remove("active-btn");
        }else if(li[3].className == "active-btn"){
            li[0].classList.remove("active-btn");
        }else if(li[4].className == "active-btn"){
            li[0].classList.remove("active-btn");
        }else if(li[5].className == "active-btn"){
            li[0].classList.remove("active-btn");
        }else if(li[6].className == "active-btn"){
            li[0].classList.remove("active-btn");
        }else if(li[7].className == "active-btn"){
            li[0].classList.remove("active-btn");
        }else {
            li[0].classList.add("active-btn");
        }
    });
}
window.addEventListener("scroll", scrollActive);
