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
const juniper = {
    color: 'black and white',
    spots: 'many',
    favoriteGame: 'frisbee'
}
console.log('my dog is', juniper);
// to add data/properties to object, use "object.newProperty = true;
juniper.bff = 'oki'
// OR use array notation, ie: "object['newer property'] = true;"
juniper['bffl'] = 'hobbes';
console.log(juniper)
// to display single item with dot
console.log('juniper is', juniper.color);
// to display single item with array notation
console.log('junipers real best friend is', juniper['bffl']);
// use toString to concatenate
console.log(juniper.toString())
const dakota = ['big', 'clingy', 'wolf'];
console.log('dakota is a', dakota.toString());
// to delete or remove property
delete juniper.spots;
console.log('juniper without spots', juniper);
// merge two objects
const oki = {
    character: 'cat-like',
    fur: 'long',
    favoriteGame: 'sleeping'
} 
const newDog = Object.assign({}, dakota, oki, juniper);
console.log('new dog', newDog);
// objects in arrays
const dogs = [
    {name: 'oki', fur: 'long', color: 'orange', favoriteGame: 'sleeping'},
    {name: 'hobbes', fur: 'short', color: 'white', favoriteGame: 'eatingToys'},
    {name: 'dakota', fur: 'medium', color: 'black', favoriteGame: 'herding'},
    {name: 'juniper', fur: 'long', color: 'black', favoriteGame: 'cuddling'},
]
console.log('index 1 of dogs color', dogs[2].color);
// random selection within object arrays
const randomIdx = Math.round(Math.random() * (dogs.length - 1))
console.log('my dogs name is ' + dogs[randomIdx].name);
console.log('my favorite dogs fur is ' + dogs[randomIdx].fur + ' and ' + dogs[randomIdx].color + ' and they love ' + dogs[randomIdx].favoriteGame);