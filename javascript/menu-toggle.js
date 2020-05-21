const menutoggle = document.querySelector(".menu-mobile");
const navMobile = document.querySelector(".mobile");
console.log(navMobile);

menutoggle.addEventListener("click", () => {
  menutoggle.classList.toggle("x-menu");
  navMobile.classList.toggle("mobile-show");
});
