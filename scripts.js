// JavaScript functionality can be added as needed for form validation, animations, etc.
// Example:
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here (e.g., validation, sending data to a server)
    // For demonstration, we'll just log the form data
    const formData = new FormData(event.target);
    console.log({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    });
});
