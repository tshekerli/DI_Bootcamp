
const leftColor = "background-color:#F38181";
const rightColor = "background-color:#FCE38A";
let container = document.querySelector('.container');

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
  { id: 1, name: 'John', lastname: 'Doe', photo: 'https://media.istockphoto.com/id/1310571099/photo/syrian-male-portrait.jpg?s=612x612&w=0&k=20&c=r2MbcEEb01S6zSmdp_TnaVAU124yR_9cDAnKw1WtWWc=', currentLocation: 'Warville', contactInfo: '123-456-7890' },{ id: 1, name: 'John', lastname: 'Doe', photo: 'https://media.istockphoto.com/id/1310571099/photo/syrian-male-portrait.jpg?s=612x612&w=0&k=20&c=r2MbcEEb01S6zSmdp_TnaVAU124yR_9cDAnKw1WtWWc=', currentLocation: 'Warville', contactInfo: '123-456-7890' },
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
      if (firstName && lastName) {
          return user.name.toLowerCase() === firstName.toLowerCase() && user.lastname.toLowerCase() === lastName.toLowerCase();
      } else if (firstName) {
          return user.name.toLowerCase() === firstName.toLowerCase();
      } else if (lastName) {
          return user.lastname.toLowerCase() === lastName.toLowerCase();
      } else {
          return true;
      }
  });

  let resultsContainer = document.querySelector('.search-results');

  if (results.length === 0) {
      let resultDiv = document.createElement('div');
      let noResultsH3 = document.createElement('h3');
      noResultsH3.textContent = 'We are sorry, that name is not in our database';
      resultDiv.appendChild(noResultsH3);
      resultsContainer.appendChild(resultDiv);

  } else {
    results.forEach((result, index) => {
      let resultDiv = document.createElement('div');
      resultDiv.className = `result-${index + 1}`;
  
      if (result.name && result.lastname) {
          let nameH3 = document.createElement('h3');
          nameH3.textContent = `${result.name} ${result.lastname}`;
          resultDiv.appendChild(nameH3);
      }
  
      if (result.photo) {
          let photoImg = document.createElement('img');
          photoImg.src = result.photo;
          resultDiv.appendChild(photoImg);
      }
  
      if (result.currentLocation) {
          let locationP = document.createElement('p');
          locationP.innerHTML = locationIcon + result.currentLocation;
          resultDiv.appendChild(locationP);
      }
  
      if (result.contactInfo) {
          let contactP = document.createElement('p');
          contactP.innerHTML = phoneIcon + result.contactInfo;
          resultDiv.appendChild(contactP);
      }
  
      resultsContainer.appendChild(resultDiv);
  });
  }

  let searchForm = document.querySelector('.search-form');
  let searchResultsContainer = document.querySelector('.search-results-container');

  searchForm.style.display = 'none';
  
  let loader = document.querySelector('.right-loader-wrapper');
  loader.style.display = 'flex';
  loader.style.opacity = '1';

  setTimeout(() => {
      loader.style.opacity = '0';

      setTimeout(() => {
          loader.style.display = 'none';
          searchResultsContainer.style.display = 'flex';

          setTimeout(() => {
              searchResultsContainer.style.opacity = '1';
          }, 50);
      }, 500);
  }, 500);
});


document.querySelector('.back-to-search-btn').addEventListener('click', function (event) {
  event.preventDefault();

  let searchForm = document.querySelector('.search-form');
  let searchResultsContainer = document.querySelector('.search-results-container');
  let searchResults = document.querySelector('.search-results');

  searchResultsContainer.style.opacity = '0';

  setTimeout(() => {
      searchResultsContainer.style.display = 'none';
      searchForm.style.display = 'flex';

      
      while (searchResults.firstChild) {
          searchResults.removeChild(searchResults.firstChild);
      }

      setTimeout(() => {
          searchForm.style.opacity = '1';
      }, 50);
  }, 500);
});

document.querySelector('.submit-btn').addEventListener('click', function(){

document.querySelector('.submit').style.display = 'none'
document.querySelector('.search').style.display = 'none'
document.querySelector('.revert-btn-right').style.display = 'none'
document.querySelector('.submit-individual').style.display = 'grid'

})

document.querySelector('.return-to-selection-btn').addEventListener('click', function() {
  
  document.querySelector('.submit').style.display = 'flex'
  document.querySelector('.search').style.display = 'flex'
  document.querySelector('.revert-btn-right').style.display = 'flex'
  document.querySelector('.submit-individual').style.display = 'none'

})


let users = []; 

document.querySelector('.submit-individual-btn').addEventListener('click', function (event) {
  event.preventDefault();

  let firstName = document.querySelector('#first-name-1').value;
  let lastName = document.querySelector('#last-name-1').value;
  let currentLocation = document.querySelector('#current-location-1').value;
  let contactNumber = document.querySelector('#contact-number-1').value;

  let user = {
      firstName: firstName,
      lastName: lastName,
      currentLocation: currentLocation,
      contactNumber: contactNumber
  };

  users.push(user);

  document.querySelector('.submit-individual').style.display = 'none';
 
  let loader = document.querySelector('.right-loader-wrapper');
  loader.style.display = 'flex';

  setTimeout(function() {
      loader.style.display = 'none';
      document.querySelector('.form-submitted').style.display = 'flex';
  }, 1000);
});

let homeLinks = document.querySelectorAll('.home');

homeLinks.forEach(function(homeLink) {
    homeLink.addEventListener('click', function() {
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
});

let navEmergencyLinks = document.querySelectorAll('.nav-emergency');

navEmergencyLinks.forEach(function(navEmergencyLink) {
    navEmergencyLink.addEventListener('click', function() {
        container.style.opacity = "0";
        setTimeout(() => {
            container.style.display = "none";
            newContentLeft.style.display = "flex";
            leftForm.style.display = "flex";
            newContentRight.style.opacity = "0";
            newContentRight.style.display = "none";
            
            setTimeout(() => {
                newContentLeft.style.opacity = "1";
                newContentLeft.style.backgroundColor = "#F38181";
            }, 500);
        }, 800);
    });
});

let navRestoreLinks = document.querySelectorAll('.nav-restore');

navRestoreLinks.forEach(function(navRestoreLink) {
    navRestoreLink.addEventListener('click', function() {
        container.style.opacity = "0";
        document.querySelector('.form-submitted').style.display='none'

        setTimeout(() => {
            container.style.display = "none";
            
            newContentLeft.style.opacity = "0";
            newContentRight.style.display = "flex";
            
            setTimeout(() => {
                newContentLeft.style.display = "none"; 
                newContentRight.style.opacity = "1";
                RightForm.style.display = 'flex'
                RightForm.style.opacity = '1'
                document.querySelector('.combine').style.display = 'flex'
                newContentRight.style = rightColor;
            }, 500);
        }, 800);
    });
});
