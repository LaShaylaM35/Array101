let input = require('prompt-sync')();

let task = [];
let timeDuration = [];
let continueProgram="yes";

while (continueProgram == "yes"){

    let taskId = input("Enter task: ");
    //let timeId = parseFloat (input("Enter task Duration: "));
    let timeId = input("Enter duration: ");

    task.push(taskId);
    timeDuration.push(timeId);
    continueProgram = input("Another Task?: ")
    //let report =[];
}

console.table(task);
console.table(timeDuration);
