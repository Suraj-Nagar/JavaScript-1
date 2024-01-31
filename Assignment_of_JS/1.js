const prompt = require("prompt-sync")();
var price = prompt('Enter Price:');
var disc = prompt('Enter the Discount:');
var final=price*(disc/100);
console.log("final price of the products is:",final);


