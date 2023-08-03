// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            const headerHeight = document.querySelector("header").offsetHeight;
            const scrollToPosition = targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: scrollToPosition,
                behavior: "smooth",
            });
        });
    });
});


