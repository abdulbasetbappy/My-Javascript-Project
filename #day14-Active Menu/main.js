const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((button) => {
  button.addEventListener("click", () =>
    button.parentElement.classList.toggle("active")
  );
});

// Get all the menu items
const menuItems = document.querySelectorAll('.Menu-items li a');

// Add an event listener to each menu item
menuItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove the active class from all menu items
    menuItems.forEach(item => {
      item.classList.remove('active-items');
    });
    // Add the active class to the clicked menu item
    this.classList.add('active-items');
  });
});






