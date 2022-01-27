// ARRAYS

let array1 = ['l', 'm', 'n', 'o']
console.log(array1);

// .push adds to end of array
array1.push('p');

// .pop removes last item (p)
array1.pop(); 

// .unshift adds to start of array
array1.unshift('k')

// .shift removes first item (k)
array1.shift();

// .spice removes specific item in array (index num to begin, quantity to delete, 'insert')
// if wanting to insert in specific place, (index num +1, 0, 'insert')
array1.splice(3, 0, 'ñ');

// .length logs quantity in array
console.log(array1.length);

// 1.1 use "const randomNumber = Math.random();" to generate random number in array - use capital M!
// const randomNumber = Math.random();
// 1.2 use "const randomNumber = Math.random() * (array1.length - 1);" to generate random number within array
// const randomNumber = Math.random() * (array1.length - 1);
// console.log(randomNumber);

// 1.3 use "const randomNumber = Math.round(Math.random() * (array1.length - 1));" to generate round number within array
const randomNumber = Math.round(Math.random() * (array1.length - 1));
// 1.3a: adjust console.log to "console.log(array1[randomNumber]);" to generate random index item within array
console.log(array1[randomNumber])




//OBJECTS

