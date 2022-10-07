let scrollToTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 150) {
        scrollToTop.classList.add("active");
    }
    else {
        scrollToTop.classList.remove("active");
    }
});