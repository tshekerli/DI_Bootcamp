// Instructions

//     Create a form with two fields (name, last name) and a submit button.
//     When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
//     The output should be:

let form = document.getElementById('myForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let firstName = document.getElementById('name').value;
let lastName = document.getElementById('lastname').value;
  let result = document.getElementById('result');
  let obj = {
    name: firstName,
    lastname: lastName,
  };
  result.innerHTML = JSON.stringify(obj);
});
