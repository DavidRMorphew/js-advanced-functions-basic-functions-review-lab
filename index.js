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

const Calculator = {}