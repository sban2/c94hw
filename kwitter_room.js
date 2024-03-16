// Initialize Firebase
const firebaseConfig = {
    // Your Firebase configuration
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Get username from localStorage and display it
const username = localStorage.getItem('user');
document.getElementById('usernameDisplay').textContent = `Welcome, ${username}`;

// Function to add a room
function addRoom() {
    const roomName = document.getElementById('roomNameInput').value;

    // Add room to Firebase database
    db.collection('rooms').add({
        name: roomName
    })
    .then(() => {
        console.log('Room added successfully!');
        // Clear the input field
        document.getElementById('roomNameInput').value = '';
    })
    .catch((error) => {
        console.error('Error adding room:', error);
    });
}

// Function to logout
function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}

// Function to display rooms from Firebase
db.collection('rooms').onSnapshot((snapshot) => {
    const roomList = document.getElementById('roomList');
    roomList.innerHTML = ''; // Clear existing rooms

    snapshot.forEach((doc) => {
        const roomName = doc.data().name;
        const roomElement = document.createElement('div');
        roomElement.textContent = roomName;
        roomList.appendChild(roomElement);
    });
});