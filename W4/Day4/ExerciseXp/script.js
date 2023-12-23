// 🌟 Exercise 1 : Users
// Instructions
// {/* <div id="container">Users:</div>
/* <ul class="list">
    <li>John</li>
    <li>Pete</li>
</ul>
<ul class="list">
    <li>David</li>
    <li>Sarah</li>
    <li>Dan</li>
</ul> */


// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
// const div = document.querySelector("div")
// console.log(div)

// // Change the name “Pete” to “Richard”.

// let name = document.querySelector("ul li:nth-child(2)")
// name.innerHTML = "Richard"
// // Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
// let sarah = document.querySelector('.list:nth-of-type(2) li:nth-child(2)');
// sarah.remove()


// // Change each first name of the two <ul>'s to your name. (Hint : use a loop)

// let list = document.querySelectorAll("ul")

// for (let i = 0; i < list.length; i++) {
//     let li = list[i].querySelector("li")
//     li.innerHTML = "Tural"
    
// }

// // Bonus - Using Javascript:
// // Add a class called student_list to both of the <ul>'s.

// for (let i = 0; i < list.length; i++) {
//     list[i].classList.add("student_list")
    
// }
// // Add the classes university and attendance to the first <ul>.

// let firstUl = document.querySelector("ul")
// firstUl.classList.add("university", "attendance")

// 🌟 Exercise 2 : Users And Style
// Instructions
/* <div>Users:</div>
<ul>
    <li>John</li>
    <li>Pete</li>
</ul> */


// Add the code above, to your HTML file

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.

// let div = document.querySelector("div")
// div.style.backgroundColor = "lightblue"
// div.style.padding = "10px"

// // Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
// let john = document.querySelector("ul li")
// john.style.display = "none"

// // Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)

// let pete = document.querySelector("ul li:nth-child(2)")
// pete.style.border = "2px solid black"
// // Change the font size of the whole body.

// let body = document.querySelector("body")
// body.style.fontSize = "30px"

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

// let div = document.querySelector("div")
// if (div.style.backgroundColor === "lightblue") {
//     alert("Hello John and Pete")
// }


// 🌟 Exercise 3 : Change The Navbar
// Instructions
{/* <div id="navBar">
    <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">My Friends</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">My Pics</a></li>
    </ul>
</div> */}


// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// let div = document.querySelector("div")
// div.setAttribute("id", "socialNetworkNavigation")

// // We are going to add a new <li> to the <ul>.
// // First, create a new <li> tag (use the createElement method).

// let li = document.createElement("li")

// // Create a new text node with “Logout” as its specified text.

// let text = document.createTextNode("Logout")
// // Append the text node to the newly created list node (<li>).

// li.appendChild(text)
// // Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// let ul = document.querySelector("ul")
// ul.appendChild(li)


// // Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

// let first = ul.firstElementChild
// let last = ul.lastElementChild
// console.log(first.textContent)
// console.log(last.textContent)





// // Exercise 4 : My Book List
// // Instructions
// // Take a look at this link for help.

// // The point of this challenge is to display a list of two books on your browser.

// // In the body of the HTML page, create an empty div:
// // <div class="listBooks"></div>
// // In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// // title,
// // author,
// // image : a url,
// // alreadyRead : which is a boolean (true or false).

// book1 = {
//     title: "Harry Potter",
//     author: "JK Rowlling",
//     image: "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
//     alreadyRead: true
// }

// book2 = {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     image: "https://m.media-amazon.com/images/I/81FPzmB5fgL._AC_UY218_.jpg",
//     alreadyRead: false
// }

// // Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

// let allBooks = [book1, book2];
// // Requirements : All the instructions below need to be coded in the js file:


// // Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// // For each book :
// // You have to display the book’s title and the book’s author.
// // Example: HarryPotter written by JKRolling.
// // The width of the image has to be set to 100px.


// // If the book is already read. Set the color of the book’s details to red.

// let table = document.createElement("table");
// let tr = document.createElement("tr");
// tr.innerHTML = "<th>Title</th><th>Author</th><th>Image</th><th>Read</th>";
// table.appendChild(tr);

// for (let i = 0; i < allBooks.length; i++) {
//     let book = allBooks[i];
//     let tr = document.createElement("tr");
//     tr.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td><img src="${book.image}" width="100px"></td><td>${book.alreadyRead}</td>`;
    
//     table.appendChild(tr);

//     if (book.alreadyRead === true) {
//         tr.style.color = "red";
        
//     }
// }
// table.style.border = "2px solid black";
// table.style.width = "100%";
// table.style.textAlign = "center";
// table.style.fontSize = "20px";
// table.style.fontWeight = "bold";

// let myDiv = document.querySelector(".listBooks");
// myDiv.appendChild(table);