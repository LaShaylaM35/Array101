let input = require('prompt-sync')();
let taskName = [];
let taskDuration = [];
let continueLoop;

while (continueLoop != "no") {
    let taskName = input("Enter task Name: ");
    let taskDuration = parseFloat (input("Enter task Duration: "));
    //taskName.push(taskName);
    //taskDuration.push(taskDuration);
    continueLoop = input("Another Task?: ")
}
    let (continueLoop == "yes")
 

//let report = []
//let summary = 0;

//for (let i = 0; i < taskDurationId.length; i = i + 1) {
    //let reportMessage = `Task Duration: ${taskName[i]} ($ ${taskDuration[i]})`;
    //report.push(reportMessage);
    //summary = taskName + taskDuration[i];
//}

console.table(report);

//console.log(`Total task and duration: $${summary}`)