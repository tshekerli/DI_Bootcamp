// Set up the Project:
//     Create a new directory for the project.
//     Initialize a new Node.js project using npm or yarn (npm init or yarn init).
//     Install necessary dependencies (e.g., Express.js, Handlebars.js) using npm or yarn.

// Create HTML Structure:

//     Design the layout of the web pages using HTML.
//     Use flexbox or CSS grid to divide the screen into two parallel sections.
//     Include a navbar at the top and a footer at the bottom of each section.

// Implement Navigation:

//     Add links or buttons in each section to switch between views.
//     Use JavaScript event listeners to handle click events and trigger transitions.

// Design Forms:

//     Create HTML forms for each functionality (e.g., searching for individuals, submitting requests).
//     Include input fields, dropdown menus, and submit buttons as needed.

// Apply Styling:

//     Use CSS to style the web pages, forms, and navigation elements.
//     Customize colors, fonts, margins, and padding for visual appeal.
//     Consider using CSS animations or transitions for smooth transitions between views.

// Add Client-Side Validation:

//     Implement JavaScript code for client-side form validation.
//     Validate required fields, email addresses, phone numbers, etc.
//     Provide feedback to users for invalid input.

// Handle Form Submission:

//     Write JavaScript code to handle form submission events.
//     Use AJAX or Fetch API to send form data to the server asynchronously.
//     Display success or error messages based on server response.

// Display Results:

//     Fetch and display relevant information from the server.
//     Update the DOM dynamically with retrieved data.
//     Use AJAX or Fetch API for making API calls.

// Test and Debug:

//     Test the web application across different browsers and devices.
//     Use browser developer tools for debugging.
//     Ensure compatibility and responsiveness.

// Optimize for Accessibility:

//     Follow best practices for semantic HTML.
//     Use ARIA attributes for accessibility.
//     Test with screen readers and assistive technologiedocument.getElementById('left-btn').addEventListener('click', function() {

const leftColor = "background-color:#F38181";
const rightColor = 'background-color:#FCE38A';
const container = document.querySelector('.container');
container.style.transition = 'opacity 1s ease'; // Add transition to container

const newContentLeft = document.querySelector('.new-content-left');
const newContentRight = document.querySelector('.new-content-right');
newContentLeft.style.transition = 'opacity 1s ease'; // Add transition to newContent
newContentRight.style.transition = 'opacity 1s ease'; // Add transition to newContent
onload = () => {
    newContentLeft.style.display = 'none';
    newContentLeft.style.opacity = '0';
    newContentRight.style.display = 'none';
    newContentRight.style.opacity = '0';
}

document.getElementById('left-btn').addEventListener('click', function() {
    container.style.opacity = '0';
    setTimeout(() => {
        container.style.display= 'none';
        newContentLeft.style.display = 'flex';
        setTimeout(() => {
            newContentLeft.style.opacity = '1';
            newContentLeft.style.backgroundColor = '#F38181';
        }, 50);
    }, 500);
})

document.getElementById('right-btn').addEventListener('click', function() {
    container.style.opacity = '0';
    setTimeout(() => {
        container.style.display= 'none';
        newContentRight.style.display = 'flex';
        setTimeout(() => {
            newContentRight.style.opacity = '1';
            newContentRight.style.backgroundColor = '#FCE38A';
        }, 50);
    }, 500);
})

let revertButtons = document.querySelectorAll('.revert-btn');

revertButtons.forEach(function(button) {
    button.addEventListener('click', function(){
        newContentLeft.style.opacity = '0';
        newContentRight.style.opacity = '0';
        setTimeout(() => {
            newContentLeft.style.display= 'none';
            newContentRight.style.display= 'none';

            container.style.display='flex';
            setTimeout(() => {
                container.style.opacity = '1';
            }, 50);
        }, 500);
    })
});

const loadingAnimation = `
<style>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<div class="loader"></div>

`

