// ---------------------------------------nav-bar--------------------------------------
function opennav() {
    document.getElementById("navbar").classList.toggle("end-0");
    document.body.classList.toggle('overflow_hidden');
    document.getElementById("menubtn-icon").classList.toggle("cross");
}
// ===================================DEFINE-SCRIPT-YEAR ==============================
const d = new Date();
document.getElementById("year_change").innerHTML = d.getFullYear();
// =========================================preloader=======================================
setTimeout(() => {
    document.getElementById("preloader").classList.add("opacity_0")
    document.getElementById("preloader").classList.add("pointer_event_none")
    document.body.classList.remove("overflow-hidden")
    window.scrollTo(0, 0);
}, 3000);
// ===============================DEFINE AOS LINK=========================================== */
AOS.init({
    duration: 1000,
    once: true,
});
// ===================================BACK TO TOP========================================
document.addEventListener('DOMContentLoaded', function () {
    var backToTopBtn = document.getElementById('scroll');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
