
window.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code here
    const mobileMenuIcon = document.getElementById("mobileMenuIcon");
    const menu = document.getElementById("dropDownMenu");

    if (mobileMenuIcon) {
        mobileMenuIcon.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    
    }



    const menuLinks = document.querySelectorAll('#dropDownLink');
    menuLinks.forEach((link) => {

        link.addEventListener('click', (e) => {
            e.stopPropagation(); // Stop the click event from propagating

            if (menu.classList.contains("active")) { // Check if the menu has the "active" class
                menu.classList.toggle("active"); // Toggle the "active" class to hide the menu
            }
            
        })
    })




});