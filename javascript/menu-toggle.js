const menutoggle = document.querySelector(".menu-mobile");
const navMobile = document.querySelector(".mobile");

let show = true;

menutoggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial";
  menutoggle.classList.toggle("x-menu", show);
  navMobile.classList.toggle("mobile-show", show);
  show = !show;
});

navMobile.addEventListener("click", () => {
  document.body.style.overflow = "initial";
  menutoggle.classList.toggle("x-menu", false);
  navMobile.classList.toggle("mobile-show", false);
});
