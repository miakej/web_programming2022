// select EmptyDiv and assign to variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// take variable and put h1 inside
// create new element
const heading = document.createElement('h1');
heading.innerHTML = 'Llamas love snacks.';
myEmptyDiv.appendChild(heading);

// attach click event listener
heading.addEventListener('click', handleHeadingClick);
function handleHeadingClick() {
    console.log('heading has been clicked');
    // document.body.style.backgroundColor = 'peru';
    // updated to change background to image
    document.body.style.color = 'peru'
    document.body.style.backgroundImage = 'url(https://media.istockphoto.com/vectors/fast-food-and-seafood-vector-seamless-pattern-vector-id826276628?k=20&m=826276628&s=612x612&w=0&h=PYHXMDqMI9oRa2zt214Gu_NJeQFmhHVWlniUtWDwsLU=)'
    document.body.style.fontSize = '10em';
}
// change cursor to pointer when hovered over heading
heading.style.cursor = 'pointer';