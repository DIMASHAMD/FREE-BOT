document.addEventListener('DOMContentLoaded', function() {
  // When the login button is clicked
  document.getElementById('loginBtn').addEventListener('click', login);

  // Function to handle login
  function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === 'FREE BOT' && password === 'CHALAH1229') {
      // Hide login box and show session box
      document.getElementById('loginBox').style.display = 'none';
      document.getElementById('sessionBox').style.display = 'block';
    } else {
      // Show error if login fails
      document.getElementById('error').textContent = 'Invalid username or password.';
    }
  }

  // Handle session submission
  document.getElementById('submitSession').addEventListener('click', function(e) {
    e.preventDefault();
    const sessionId = document.getElementById('sessionId').value.trim();
    const name = document.getElementById('name').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();

    if (sessionId && name && whatsapp) {
      alert('Session added successfully!');
      // Reset fields
      document.getElementById('sessionId').value = '';
      document.getElementById('name').value = '';
      document.getElementById('whatsapp').value = '';
    } else {
      alert('Please fill all fields!');
    }
  });

  // Handle session deletion
  document.getElementById('deleteSession').addEventListener('click', function() {
    const sessionIdToDelete = document.getElementById('deleteSessionId').value.trim();
    
    if (sessionIdToDelete) {
      alert(`Session ID ${sessionIdToDelete} deleted successfully!`);
      document.getElementById('deleteSessionId').value = ''; // Reset the input field
    } else {
      alert('Please enter a valid session ID to delete!');
    }
  });
});
