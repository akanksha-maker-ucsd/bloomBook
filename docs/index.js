
window.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code here
    const mobileMenuIcon = document.getElementById("mobileMenuIcon");
    const menu = document.getElementById("dropDownMenu");

    if (mobileMenuIcon) {
        mobileMenuIcon.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    
    }

    document.addEventListener("click", function(e) {
        if(!(e.target).is("dropDownMenu")) {
            if(menu.classList == "active") {
                menu.classList.remove("active")

            }
        }
    })

});