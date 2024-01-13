// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function (work = 'go to the office') {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(adjective = '*') {
    return function (param1 = 'special') {
        return `You are ${adjective}${param1}${adjective}!`
    }
}