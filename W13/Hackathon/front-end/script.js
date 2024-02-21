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
const rightColor = "background-color:#FCE38A";
const container = document.querySelector(".container");
container.style.transition = "opacity 1s ease"; 

const newContentLeft = document.querySelector(".new-content-left");
const newContentRight = document.querySelector(".new-content-right");
const leftForm = document.querySelector(".left-form");
const RightForm = document.querySelector(".right-form");
const loader = document.querySelector(".loader");
newContentLeft.style.transition = "opacity 1s ease"; 
newContentRight.style.transition = "opacity 1s ease"; 
const finalResults = document.querySelector('.final-results')
finalResults.style.transition = "opacity 1s ease";


onload = () => {
  newContentLeft.style.display = "none";
  newContentLeft.style.opacity = "0";
  newContentRight.style.display = "none";
  newContentRight.style.opacity = "0";
  finalResults.style.display = "none";
  finalResults.style.opacity = "0";
};

document.getElementById("left-btn").addEventListener("click", function () {
  container.style.opacity = "0";
  setTimeout(() => {
    container.style.display = "none";
    newContentLeft.style.display = "flex";
    leftForm.style.display = "flex";
    setTimeout(() => {
      newContentLeft.style.opacity = "1";
      newContentLeft.style.backgroundColor = "#F38181";
    }, 50);
  }, 500);
});

let revertButtonLeft = document.querySelector(".revert-btn-left");

revertButtonLeft.addEventListener("click", function () {
    loader.style.display = "none";

    newContentLeft.style.opacity = "0";
    newContentRight.style.opacity = "0";
    setTimeout(() => {
      newContentLeft.style.display = "none";
      newContentRight.style.display = "none";

      container.style.display = "flex";
      setTimeout(() => {
        container.style.opacity = "1";
      }, 50);
    }, 500);
  });




const cities = [
  {
    name: "Warville",
    policeStations: [
      { id: 1, address: "123 Warville St", contactNumber: "123-456-7890" },
      { id: 2, address: "456 Warville Ave", contactNumber: "234-567-8901" },
      { id: 3, address: "789 Warville Blvd", contactNumber: "345-678-9012" },
      { id: 4, address: "012 Warville Rd", contactNumber: "456-789-0123" },
      { id: 5, address: "345 Warville Ln", contactNumber: "567-890-1234" },
    ],
    hospitals: [
      { id: 1, address: "678 Warville St", contactNumber: "678-901-2345" },
      { id: 2, address: "901 Warville Ave", contactNumber: "789-012-3456" },
      { id: 3, address: "234 Warville Blvd", contactNumber: "890-123-4567" },
      { id: 4, address: "567 Warville Rd", contactNumber: "901-234-5678" },
      { id: 5, address: "890 Warville Ln", contactNumber: "012-345-6789" },
    ],
  },
  {
    name: "Conflictstown",
    policeStations: [
      {
        id: 1,
        address: "123 Conflicts Town St",
        contactNumber: "123-456-7890",
      },
      {
        id: 2,
        address: "456 Conflicts Town Ave",
        contactNumber: "234-567-8901",
      },
      {
        id: 3,
        address: "789 Conflicts Town Blvd",
        contactNumber: "345-678-9012",
      },
      {
        id: 4,
        address: "012 Conflicts Town Rd",
        contactNumber: "456-789-0123",
      },
      {
        id: 5,
        address: "345 Conflicts Town Ln",
        contactNumber: "567-890-1234",
      },
    ],
    hospitals: [
      {
        id: 1,
        address: "678 Conflicts Town St",
        contactNumber: "678-901-2345",
      },
      {
        id: 2,
        address: "901 Conflicts Town Ave",
        contactNumber: "789-012-3456",
      },
      {
        id: 3,
        address: "234 Conflicts Town Blvd",
        contactNumber: "890-123-4567",
      },
      {
        id: 4,
        address: "567 Conflicts Town Rd",
        contactNumber: "901-234-5678",
      },
      {
        id: 5,
        address: "890 Conflicts Town Ln",
        contactNumber: "012-345-6789",
      },
    ],
  },
  {
    name: "Battlesburg",
    policeStations: [
      { id: 1, address: "123 Battlesburg St", contactNumber: "123-456-7890" },
      { id: 2, address: "456 Battlesburg Ave", contactNumber: "234-567-8901" },
      { id: 3, address: "789 Battlesburg Blvd", contactNumber: "345-678-9012" },
      { id: 4, address: "012 Battlesburg Rd", contactNumber: "456-789-0123" },
      { id: 5, address: "345 Battlesburg Ln", contactNumber: "567-890-1234" },
    ],
    hospitals: [
      { id: 1, address: "678 Battlesburg St", contactNumber: "678-901-2345" },
      { id: 2, address: "901 Battlesburg Ave", contactNumber: "789-012-3456" },
      { id: 3, address: "234 Battlesburg Blvd", contactNumber: "890-123-4567" },
      { id: 4, address: "567 Battlesburg Rd", contactNumber: "901-234-5678" },
      { id: 5, address: "890 Battlesburg Ln", contactNumber: "012-345-6789" },
    ],
  },
  {
    name: "Strifecity",
    policeStations: [
      { id: 1, address: "123 Strife City St", contactNumber: "123-456-7890" },
      { id: 2, address: "456 Strife City Ave", contactNumber: "234-567-8901" },
      { id: 3, address: "789 Strife City Blvd", contactNumber: "345-678-9012" },
      { id: 4, address: "012 Strife City Rd", contactNumber: "456-789-0123" },
      { id: 5, address: "345 Strife City Ln", contactNumber: "567-890-1234" },
    ],
    hospitals: [
      { id: 1, address: "678 Strife City St", contactNumber: "678-901-2345" },
      { id: 2, address: "901 Strife City Ave", contactNumber: "789-012-3456" },
      { id: 3, address: "234 Strife City Blvd", contactNumber: "890-123-4567" },
      { id: 4, address: "567 Strife City Rd", contactNumber: "901-234-5678" },
      { id: 5, address: "890 Strife City Ln", contactNumber: "012-345-6789" },
    ],
  },
  {
    name: "Tumulttown",
    policeStations: [
      { id: 1, address: "123 Clashville St", contactNumber: "123-456-7890" },
      { id: 2, address: "456 Clashville Ave", contactNumber: "234-567-8901" },
      { id: 3, address: "789 Clashville Blvd", contactNumber: "345-678-9012" },
      { id: 4, address: "012 Clashville Rd", contactNumber: "456-789-0123" },
      { id: 5, address: "345 Clashville Ln", contactNumber: "567-890-1234" },
    ],
    hospitals: [
      { id: 1, address: "678 Clashville St", contactNumber: "678-901-2345" },
      { id: 2, address: "901 Clashville Ave", contactNumber: "789-012-3456" },
      { id: 3, address: "234 Clashville Blvd", contactNumber: "890-123-4567" },
      { id: 4, address: "567 Clashville Rd", contactNumber: "901-234-5678" },
      { id: 5, address: "890 Clashville Ln", contactNumber: "012-345-6789" },
    ],
  },
];

const locationIcon = '<i class="fa-solid fa-location-dot"></i>'
const phoneIcon = '<i class="fa-solid fa-phone"></i>'

document.querySelector('.left-form').addEventListener('submit', async function(event) { // Add async keyword here
    event.preventDefault();

    var emergencyService = document.querySelector('#emergency-services').value;
    var city = document.querySelector('#city').value;
    var selectedCity = cities.find(c => c.name === city);

    const police = selectedCity.policeStations;
    const hospital = selectedCity.hospitals;

    const Results = document.querySelector('.left-form-results');
    Results.innerHTML = ''; 

    // Enable loader
    const loader = document.querySelector('.loader');
    newContentLeft.style.display = 'none'
    newContentLeft.style.opacity = '0'
    
    document.querySelector('.left-loader-wrapper').style.display = 'flex'
    finalResults.style.display = 'flex'
    finalResults.style.opacity = '1'

    loader.style.display = 'flex';

    // Wait for 2 seconds
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Disable loader
    loader.style.display = 'none';
    document.querySelector('.left-loader-wrapper').style.display = 'none'

    if (emergencyService == 'police'){
        police.forEach((station, index) => {
            let emergencyItem = createEmergencyItem(`${selectedCity.name} Police ${index + 1}`, station.address, station.contactNumber);
            Results.append(emergencyItem);
        });
    } else if (emergencyService == 'hospital') {
        hospital.forEach((hosp, index) => {
            let emergencyItem = createEmergencyItem(`${selectedCity.name} Hospital ${index + 1}`, hosp.address, hosp.contactNumber);
            Results.append(emergencyItem);
        });
    }
});

function createEmergencyItem(name, address, contactNumber) {
    
    let emergencyItem = document.createElement('div');
    emergencyItem.className = 'emergencyItem';

    
    let h3 = document.createElement('h3');
    h3.textContent = name;
    emergencyItem.appendChild(h3);

    
    let addressLine = document.createElement('div');
    addressLine.className = 'addressLine';
    addressLine.innerHTML = `${locationIcon} <p>${address}</p>`;
    emergencyItem.appendChild(addressLine);

    
    let phone = document.createElement('div');
    phone.className = 'phone';
    phone.innerHTML = `${phoneIcon} <p>${contactNumber}</p>`;
    emergencyItem.appendChild(phone);

    return emergencyItem;
}


document.querySelector('.left-form-return-btn').addEventListener('click', function (){

        finalResults.style.display = 'none'
        newContentLeft.style.display = 'flex'
        setTimeout(() => {
                newContentLeft.style.opacity = "1";
            }, 50);
        }, 500);


// Right side

document.getElementById("right-btn").addEventListener("click", function () {
    container.style.opacity = "0";
    setTimeout(() => {
        container.style.display = "none";
        newContentRight.style.display = "flex";
        setTimeout(() => {
            newContentRight.style.opacity = "1";
            newContentRight.style = rightColor;
        }, 50);
    }, 500);
});


let revertButtonRight = document.querySelector(".revert-btn-right");

revertButtonRight.addEventListener("click", function () {
    loader.style.display = "none";

    newContentLeft.style.opacity = "0";
    newContentRight.style.opacity = "0";
    setTimeout(() => {
      newContentLeft.style.display = "none";
      newContentRight.style.display = "none";

      container.style.display = "flex";
      setTimeout(() => {
        container.style.opacity = "1";
      }, 50);
    }, 500);
  });

  let search = document.querySelector('.search');
let submit = document.querySelector('.submit');
let revertBtnRight = document.querySelector('.revert-btn-right');
let searchForm = document.querySelector('.search-form');
let returnSelection = document.querySelector('.return-selection');

search.style.transition = "opacity 1s ease";
submit.style.transition = "opacity 1s ease";
revertBtnRight.style.transition = "opacity 1s ease";
searchForm.style.transition = "opacity 1s ease";
returnSelection.style.transition = "opacity 1s ease";

document.querySelector('.search-btn').addEventListener('click', function () {
    search.style.opacity = '0';
    submit.style.opacity = '0';
    revertBtnRight.style.opacity = '0';
    setTimeout(() => {
        search.style.display = 'none';
        submit.style.display = 'none';
        revertBtnRight.style.display = 'none';

        searchForm.style.display = 'flex';
        setTimeout(() => {
            searchForm.style.opacity = '1';
            returnSelection.style.opacity = '1'
        }, 50);
    }, 500);
    returnSelection.style.display = 'inline-block';
});

document.querySelector('.return-selection').addEventListener('click', function () {
    searchForm.style.opacity = '0';
    returnSelection.style.opacity = '0';
    setTimeout(() => {
        searchForm.style.display = 'none';
        returnSelection.style.display = 'none';

        search.style.display = 'flex';
        submit.style.display = 'flex';
        revertBtnRight.style.display = 'flex';
        setTimeout(() => {
            search.style.opacity = '1';
            submit.style.opacity = '1';
            revertBtnRight.style.opacity = '1';

        }, 50);
    }, 500);
});




let people = [
  { id: 1, name: 'John', lastname: 'Doe', photo: 'https://media.istockphoto.com/id/1310571099/photo/syrian-male-portrait.jpg?s=612x612&w=0&k=20&c=r2MbcEEb01S6zSmdp_TnaVAU124yR_9cDAnKw1WtWWc=', currentLocation: 'Warville', contactInfo: '123-456-7890' },
  { id: 2, name: 'Jane', lastname: 'Doe', photo: 'https://act.refugeecouncil.org.uk/sites/refco/files/styles/full/public/Man%20-%20Eye%20Contact%20%20%28desaturated%29.png?itok=L4UcBckn', currentLocation: 'Conflictstown', contactInfo: '234-567-8901' },
  { id: 3, name: 'Jim', lastname: 'Brown', photo: 'https://media.gettyimages.com/id/1244056900/photo/male-asylum-seekers-as-seen-in-abandoned-old-train-carriages-near-thessaloniki-city-on-their.jpg?s=612x612&w=gi&k=20&c=Ece8bpEK2BHw294lVp0cqdPp73V0yktbnyo8btAv8tQ=', currentLocation: 'Battlesburg', contactInfo: '345-678-9012' },
  { id: 4, name: 'Jill', lastname: 'Smith', photo: 'https://static01.nyt.com/images/2016/12/11/sunday-review/11Cohen-slide-CD4Q/11Cohen-slide-CD4Q-articleLarge-v6.jpg?quality=75&auto=webp&disable=upscale', currentLocation: 'Strifecity', contactInfo: '456-789-0123' },
  { id: 5, name: 'Jack', lastname: 'Johnson', photo: 'https://img.freepik.com/premium-photo/photo-young-black-man-social-media-post-international-day-migration-world-refugee-day-concept_742418-14467.jpg', currentLocation: 'Tumulttown', contactInfo: '567-890-1234' }
];

document.querySelector('.search-form-btn').addEventListener('click', function (event) {
  event.preventDefault();
  let firstName = document.querySelector('#first-name').value;
  let lastName = document.querySelector('#last-name').value;

  let results = people.filter(user => {
      if (firstName && user.name.toLowerCase() === firstName.toLowerCase()) {
          return true;
      }
      if (lastName && user.lastname.toLowerCase() === lastName.toLowerCase()) {
          return true;
      }
      if (!firstName && !lastName) {
          return true;
      }
      return false;
  });

  let resultsContainer = document.querySelector('.search-results'); // replace with the actual container for the results

results.forEach((result, index) => {
    let resultDiv = document.createElement('div');
    resultDiv.className = `result-${index + 1}`;

    let nameH3 = document.createElement('h3');
    nameH3.textContent = `${result.name} ${result.lastname}`;

    let photoImg = document.createElement('img');
    photoImg.src = result.photo;

    let locationP = document.createElement('p');
    locationP.innerHTML = locationIcon+result.currentLocation;

    let contactP = document.createElement('p');
    contactP.innerHTML = phoneIcon+result.contactInfo;

    resultDiv.appendChild(nameH3);
    resultDiv.appendChild(photoImg);
    resultDiv.appendChild(locationP);
    resultDiv.appendChild(contactP);

    resultsContainer.appendChild(resultDiv);
});

let searchForm = document.querySelector('.search-form');
    let searchResultsContainer = document.querySelector('.search-results-container');

    searchForm.style.opacity = '0';

    setTimeout(() => {
        searchForm.style.display = 'none';
        searchResultsContainer.style.display = 'flex';

        setTimeout(() => {
            searchResultsContainer.style.opacity = '1';
        }, 50);
    }, 500);

});

document.querySelector('.back-to-search-btn').addEventListener('clikc', function (){



})