const prompt = require("prompt-sync")();
var numofChild= prompt("Ticket for child:");
var numofAdults=prompt("Ticket for adult:");
var numofSeniors=prompt("Ticket for seniors:");
let total=(numofChild*100)+(numofAdults*150)+(numofSeniors*120)
console.log("The Total ticket price is",total);