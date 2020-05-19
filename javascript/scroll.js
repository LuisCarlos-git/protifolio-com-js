const menuItems = document.querySelectorAll("nav a");

menuItems.forEach((item) => {
    item.addEventListener("click", smoothScroll);
});

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target;
    const id = targetId.getAttribute("href");

    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to - 140,
        behavior: "smooth",
    });
}