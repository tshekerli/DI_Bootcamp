// Exercise 1 : HTML Form #3
// Instructions

// form

//     Create a form like the form provided above. The form should contain three inputs:
//         name,
//         lastname,
//         submit
//     Send the data to another HTML file and display the sent data to a section tag, using the DOM.



var form = document.getElementById('myForm');
if (form) { // Check if the form exists. It's a must to avoid errors on second page
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;

    // Store the data in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('lastname', lastname);

    // Redirect to the second page
    window.location.href = 'secondPage.html';
  });
}

// Check if the displaySection exists
var displaySection = document.getElementById('displaySection');
if (displaySection) {
  window.onload = function() {
    // Get the data from localStorage
    var name = localStorage.getItem('name');
    var lastname = localStorage.getItem('lastname');

    // Display the data in the section tag
    displaySection.innerText = 'Name: ' + name + ', Last Name: ' + lastname;
  };
}