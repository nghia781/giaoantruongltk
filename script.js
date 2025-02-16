window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.style.boxShadow = window.scrollY > 50 ? "0px 2px 10px rgba(0, 0, 0, 0.2)" : "none";
});
