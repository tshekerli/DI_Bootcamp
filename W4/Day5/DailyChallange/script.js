userAnswer = parseInt(prompt("How many bottles of beer are on the wall?"));

function bottles(userAnswer){
    let takenNumber = 1
while (userAnswer > 0){
    
    console.log(`${userAnswer} bottles of beer on the wall\n ${userAnswer} bottles of beer\nTake ${takenNumber} down, pass it around`)
    userAnswer-=takenNumber
    takenNumber++

    if(takenNumber>userAnswer){
        console.log("We don't have enough of bottles lol")
    }

}
}

bottles(userAnswer)