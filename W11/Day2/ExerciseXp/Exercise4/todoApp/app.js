import { TodoList } from "../todoApp/todo.js";

let newlist = new TodoList();
newlist.add({text: "clean the house"});
console.log(newlist.showAll());
newlist.add({text: "buy milk"});
console.log(newlist.showAll());
newlist.add({text: "learn javascript"});
console.log(newlist.showAll());
newlist.remove("buy milk");
console.log(newlist.showAll());