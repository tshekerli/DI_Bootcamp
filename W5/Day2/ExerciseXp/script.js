// Using a DOM property, retrieve the h1 and console.log it.

const h1 = document.querySelector("h1")
console.log(h1.innerText)

// Using DOM methods, remove the last paragraph in the <article> tag.

let lastPar = document.querySelector("article p:last-child")
lastPar.remove()

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2 = document.querySelector("h2")
function change()
{
h2.style.backgroundColor = "red"
}
h2.addEventListener("click", change)


// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

const h3 = document.querySelector("h3")
function hide(){
    h3.style.display = "none"
}
h3.addEventListener("click", hide)

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let allPar = document.querySelectorAll("p")
let button = document.createElement("button")
button.innerText = "This will bolden your text"
function bolden(){
    for (pars of allPar){
        pars.style.fontWeight = "bold";
    }
}
button.addEventListener("click", bolden)

const article = document.querySelector("article")

article.appendChild(button)

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

let style = document.createElement('style');
style.innerHTML = `
@keyframes fadeOut {
    from {opacity: 1;}
    to {opacity: 0;}
}`;
document.head.appendChild(style);

let secondPar = document.querySelector("article p:nth-of-type(2)");

secondPar.addEventListener("mouseover", function() {
    secondPar.style.animation = "fadeOut 1s";
});

secondPar.addEventListener("mouseout", function() {
    secondPar.style.animation = "";
});
