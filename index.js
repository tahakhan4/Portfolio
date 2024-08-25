const menuBtn = document.getElementById('menu-icon');
const crossBtn = document.getElementById("cross-icon");

menuBtn.addEventListener("click", () => {
  const navMobile = document.getElementById("nav-links-mobile");
  navMobile.style.display = "block";
});
crossBtn.addEventListener("click", () => {
  const navMobile = document.getElementById("nav-links-mobile");
  navMobile.style.display = "none";
});

