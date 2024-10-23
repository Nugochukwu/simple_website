const toTop = document.querySelector(".to-top");
const headings = document.querySelectorAll(".feature-box");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1) {
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }

})

window.addEventListener("scroll", () => {
    headings.forEach((box, index) => {
        if (window.pageYOffset < 500) {
            box.classList.add("active");
            box.classList.add('show');
        } else {
            box.classList.remove("active");
            box.classList.remove('show');
        }
        
        setTimeout(() => {
            box.classList.add('show');
        }, index * 500); // Add a delay for each heading
    });
});
    