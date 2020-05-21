const menutoggle = document.querySelector(".menu-mobile");
const navMobile = document.querySelector(".mobile");

menutoggle.addEventListener("click", () => {
  navMobile.classList.toggle("mobile-show");
});
