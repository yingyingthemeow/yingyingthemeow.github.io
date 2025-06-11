document.addEventListener("DOMContentLoaded", function() {
    let dropdown = document.querySelector(".dropdown");
    let submenu = document.querySelector(".dropdown-menu");
    let hideTimeout;

    // Show dropdown on hover
    dropdown.addEventListener("mouseenter", function() {
        clearTimeout(hideTimeout); // Clear any pending hide action
        let rect = dropdown.getBoundingClientRect();
        submenu.style.top = `${rect.bottom}px`;
        submenu.style.left = `${rect.left}px`;
        submenu.style.display = "block";
    });

    // Hide dropdown with a delay when mouse leaves
    dropdown.addEventListener("mouseleave", function() {
        hideTimeout = setTimeout(() => {
            submenu.style.display = "none";
        }, 1000); // ⏳ Delay increased to 1 second
    });

    // Keep dropdown open when hovering over it
    submenu.addEventListener("mouseenter", function() {
        clearTimeout(hideTimeout); // Prevent hiding while inside submenu
        submenu.style.display = "block";
    });

    submenu.addEventListener("mouseleave", function() {
        hideTimeout = setTimeout(() => {
            submenu.style.display = "none";
        }, 1000); // ⏳ Delay increased to 1 second
    });
});
