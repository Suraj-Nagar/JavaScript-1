const prompt = require("prompt-sync")();
let type=prompt("choose type of package,'standard''overnight''express':");
switch(type){
    case "overnight":
        console.log("would be delievered Next day");
        break;
    case "express":
        console.log("might take 1-2 days");
        break;
    case "standard":
        console.log("might takes 3-5 days");
        break;
        default:
            console.log("Invalid choose");
            break;


}