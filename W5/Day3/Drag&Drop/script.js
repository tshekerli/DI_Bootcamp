function onDragStart4PinkSquare(event){
    console.log("start");
    event.dataTransfer.setData("text/plain", event.target.id);}

function onDragEnd4PinkSquare(event){
        console.log("end");}

function onDrag4PinkSquare(event){
    
}


function onDragOver4OrangeSquare(event){
    console.log("over orange");
    event.preventDefault();
}


function onDrop4OrangeSquare(event){
console.log("drop");
const id = event.dataTransfer.getData("text/plain");

console.log(id);
event.target.appendChild(document.getElementById(id));

}

function draggableContainerOver(event){
    console.log("over orange");
    event.preventDefault();
}

function draggableContainerDrop(event){
    const id = event.dataTransfer.getData("text/plain");

console.log(id);
event.target.appendChild(document.getElementById(id));

}