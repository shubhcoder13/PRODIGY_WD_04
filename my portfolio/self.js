// Example JavaScript for contact form submission
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send form data to server (replace with your actual server-side code)
    fetch('/submit-contact-form', {
        method: 'POST',
        body: JSON.stringify({ name, email, message })
    })
    .then(response => {
        // Handle response from server
        if (response.ok) {
            // Display success message
            alert('Message sent successfully!');
            // Clear form fields
            contactForm.reset();
        } else {
            // Display error message
            alert('Error sending message. Please try again later.');
        }
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error);
        alert('Error sending message. Please try again later.');
    });
});