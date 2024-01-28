

const mobile_nav = document.querySelector(".mobile_navbar_btn");
const header = document.querySelector(".main_header");

const toggleNavbar=() => {
    header.classList.toggle("active");
}
mobile_nav.addEventListener('click', () => toggleNavbar());




const hamburgerBtn = document.querySelector(".close-outline");

const navbarLinks = document.querySelectorAll(".navbar_link");

navbarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        header.classList.remove("active");
    });
});