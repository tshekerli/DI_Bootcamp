
// Instructions

// Using this object :



// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

//     Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.


let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
}




//     Create another arrow function named cloneGroceries.
//         In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
//             Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
//         In the function, create a variable named shopping that is equal to the groceries variable.
//             Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
//             Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

//     Invoke the cloneGroceries function.


const cloneGroceries = () => {
    let user = client;
    client = "David";
    console.log(user); // Outputs "John", because primitives are passed by value

    let shopping = {...groceries};
    shopping.totalPrice = "30$";
    console.log(groceries.totalPrice); // Outputs "20$", because objects are copied by value using spread operator

    shopping.other.paid = false;
    console.log(groceries.other.paid); // Outputs "false", because objects inside the main object are copied by reference
}

cloneGroceries();