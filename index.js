document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to refresh the page

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Store form values in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    // Redirect to display page
    window.location.href = 'display.html';
});
