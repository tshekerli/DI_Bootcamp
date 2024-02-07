import { personInfo } from './data.js';

const averageAge = (personInfo) => {
    let sum = 0;
    for (let i = 0; i < personInfo.length; i++) {
        sum += personInfo[i].age;
    }
    return sum / personInfo.length;
    }

console.log(averageAge(personInfo));