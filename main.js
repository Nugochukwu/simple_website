const toTop = document.querySelector(".to-top");
const headings = document.querySelectorAll(".feature-box");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 20) {
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }

})

window.addEventListener("scroll", () => {
    // Iterate through each heading element
    headings.forEach((box, index) => {
        // Calculate the position of each heading plus 500 pixels
        const boxOffset = box.offsetTop + box.offsetHeight + 1;

        // Check if the scroll position is beyond 500 pixels below the heading
        if (window.pageYOffset < boxOffset) {
            if (!box.classList.contains('active')) {
                // Add 'active' class and staggered 'show' class if not already present
                box.classList.add("active");
                setTimeout(() => {
                    box.classList.add('show');
                }, index * 200); // Delay for staggered animation effect
            }
        } else {
            // Remove the classes when scrolling above the heading
            box.classList.remove("active");
            box.classList.remove('show');
        }
    });
});
