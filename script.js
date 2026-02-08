const navmenu = document .querySelector(".nav-menu");
const btnmenu = document .querySelector("#btn-menu");

btnmenu.onclick = (e) => {
    e.preventDefault();
    navmenu.classList.toggle("active");
}
document.addEventListener("click", e => {
    if (!btnmenu.contains(e.target) && !navmenu.contains(e.target)) {
        navmenu.classList.remove("active");
    }
});
