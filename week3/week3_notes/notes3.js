// FUNCTION: use functions to execute actions, with various parameters, at a given time. Often to isolate bits of code that are connected, related, or need to occur within a specific sequence.
// PARAMETER:
// VALUES: 

// EXAMPLE 1:
    // function logOutGreeting () {
    // console.log('hi');   
    // }
// execute function by using function name:
    // logOutGreeting();

// EXAMPLE 1.2: add parameter to example above to bring input into a function
function logOutGreeting (greeting) {
    console.log(greeting);   
    }
logOutGreeting('Salutations');

// EXAMPLE 2: sequence using declarative function 
function getStuff (ingredient) {
    console.log('get ' + ingredient);
}
getStuff('bread');
getStuff('peanut butter');
getStuff('honey');

//// incoporating loops, old way:
const makeSandwich = function(ingredientArray) {
    for (let i=0; i < ingredientArray.length; i++) {
        console.log('get', ingredientArray[i]);
    }
}
makeSandwich(['bread', 'hummus', 'cucumber']);

//// new way with ES6 functionality, replace 'function' with '=>' must first initialize function name with this method, ie: const makeSandwich2 = ... must precede makeSandwich2(['bread'])

let makeSandwich2 = (ingredientArray) => {
    for (let i=0; i < ingredientArray.length; i++) {
        console.log('get', ingredientArray[i]);
    }
}
makeSandwich2 = (ingredientArray) => {
    console.log(ingredientArray.toString(', '));
}
makeSandwich2(['bread', 'hummus', 'cucumber']);
makeSandwich2(['spinach', 'provolone', 'turkey'])

// generate random number; 'return' 
function makeRand (maxNumber) {
    const output = Math.ceil(Math.random() * maxNumber);
    return output;
}
const randomOutput = makeRand(100);
console.log(randomOutput);

// true/false 
function checkLegality (age) {
    return age >= 21; 
}
console.log(checkLegality(20));

const MiasAge = 30;
if (checkLegality(MiasAge)){
    console.log('She is legal');
}

// const myObject = {
//     x: 200,
//     y: 400,
//     getPosition: function () {
//         console.log('we are ' + this.x + ' from the left and ' + this.y + ' from the top');
//     }
// }
// myObject.getPosition();

// 
const myObject = {
    x: 200,
    y: 400,
    getPosition: () => {
        this.x = 35;
        this.y = 45;
        console.log('we are ' + this.x + ' from the left and ' + this.y + ' from the top');
    }
}
myObject.getPosition();





// LOOPS
// for loop with number: for (variable definition; condition; increment/ what happens to the loop variable each time it runs)
// for (let i = 0; i < 10; i++) {
//     console.log('this is i', i)
// }
// for loop with an array 
const myMovies = ['star wars', 'empire strikes back', 'return of the jedi']
for (let j = 0; j < myMovies.length; j++) {
    console.log('i like', myMovies[j]);
}