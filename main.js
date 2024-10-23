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
    // Iterate through each heading element
    headings.forEach((box, index) => {
        // Calculate the position of each heading plus 100 pixels
        const boxOffset = box.offsetTop + box.offsetHeight + 800;

        // Check if the scroll position is beyond 100 pixels below the heading
        if (window.pageYOffset > boxOffset) {
            // Add 'active' and 'show' classes with a delay for each heading
            box.classList.add("active");
            box.classList.add('show');
            
        } else {
            // Remove the classes when scrolling above the heading
            box.classList.remove("active");
            box.classList.remove('show');
        }
        setTimeout(() => {
            box.classList.add('show');
        }, index * 200); // Delay for staggered animation effect
    });
});