const prompt = require("prompt-sync")();
let age =prompt("please enter your age:");
if(age>20)
{
    console.log("person is eligible for vote.");

}else{
    console.log("Not eligible for vote.");
}
