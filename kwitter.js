// Function to handle the login form submission
function handleLoginFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    localStorage.setItem('user', username); // Store username in localStorage

    window.location.href = 'kwitter_room.html'; // Redirect to kwitter_room.html
}

// Add event listener to the login form
document.getElementById('loginForm').addEventListener('submit', handleLoginFormSubmit);