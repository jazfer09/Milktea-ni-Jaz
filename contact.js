/* contact.js */
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Message: ' + message);
  
    // Here you can add code to submit the form data via AJAX or any other method
});