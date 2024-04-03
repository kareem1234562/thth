// Retrieve form values from localStorage
var name = localStorage.getItem('name');
var email = localStorage.getItem('email');

// Display form values on the display page
document.getElementById('displayName').textContent = name;
document.getElementById('displayEmail').textContent = email;
