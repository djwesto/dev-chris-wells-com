const menuButton = document.getElementById("menuButton");
const menuItems = document.getElementById("menuItems");

// Function to show the menu
function showMenu() {
    menuItems.style.display = "flex";
    menuItems.style.opacity = "1";
}

// Function to hide the menu
function hideMenu() {
    menuItems.style.opacity = "0";
    setTimeout(() => menuItems.style.display = "none", 300); // Wait for the transition to complete
}

menuButton.addEventListener("click", function() {
    if (menuItems.style.display === "none" || menuItems.style.display === "") {
        showMenu();
    } else {
        hideMenu();
    }
});

// Add event listener for each menu item
const menuItemLinks = menuItems.querySelectorAll("a");
menuItemLinks.forEach(link => {
    link.addEventListener("click", function() {
        // On mobile, hide the menu after a menu item is clicked
        if (window.innerWidth <= 768) {
            hideMenu();
        }
    });
});