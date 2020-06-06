var pizza = 5.00;
var soda = 1.99;

var creditCard = 122.48;
var cash = 40.00;

var guyFriends = 13;
var girlFriends = 12;

var age = 25;
var myBrothersAge = 23

var firstName = "Pedro";
var lastName = 'Brieno';
var middleInitial = "A.";

var myBrothersFirstName = 'David';
var myBrothersLastName = 'Brieno';
var myBrothersMiddleInitial = 'I.';

console.log ('Hello World!');

console.log (`My new balance is ${cash - [pizza * 3 + soda * 5]} after buying three pizza's and five sodas from Little Caesars`);

console.log (`The number of friends I have made each year is ${[guyFriends + girlFriends] / age}`);

console.log (`My name is ${firstName} ${middleInitial} ${lastName}`);

console.log (`Pizza is ${`$${pizza}`}`);
console.log (`Soda is ${`$${soda}`}`);
console.log (`I have ${`$${creditCard}`} available in my credit card and ${`$${cash}`} in my wallet.`);
console.log (`I have ${guyFriends + girlFriends} friends; ${guyFriends} are guys and ${girlFriends} are gals.`);
console.log (`I am ${age} and my brother is ${myBrothersAge}`)
console.log (`My name is ${firstName} ${middleInitial} ${lastName} and my brother/bestfriend is ${myBrothersFirstName} ${myBrothersMiddleInitial} ${myBrothersLastName}`);