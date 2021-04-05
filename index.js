// Your code here
const saturdayFun = (activity = "roller-skate") => { 
    return `This Saturday, I want to ${activity}!`;
};

const mondayWork = (work = "go to the office") => {
    return `This Monday, I will ${work}.`
};

const wrapAdjective = (emph = "*") => {
    return function(adj = "special"){
        return `You are ${emph}${adj}${emph}!`
    }
};

const Calculator = { 
    add: (num1, num2) => { return num1 + num2 }, 
    subtract: (num1, num2) => { return num1 - num2 },
    multiply: (num1, num2) => { return num1 * num2 },
    divide: (num1, num2) => { return num1 / num2 }
};

const actionApplyer = (integer, arrayOfFunctions) => {
    if (arrayOfFunctions.length === 0){ 
        return integer;
     } else {
         return arrayOfFunctions.reduce((resultant, element) => { 
                return (resultant = element(resultant))
            }, integer)
     }  
};
