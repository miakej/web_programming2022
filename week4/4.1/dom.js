// select EmptyDiv and assign to variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// take variable and put h1 inside
// create new element
const heading = document.createElement('h1');
heading.innerHTML = 'I love snacks.';
myEmptyDiv.appendChild(heading);

// attach click event listener
heading.addEventListener('click', handleHeadingClick);
function handleHeadingClick() {
    console.log('heading has been clicked');
    document.body.style.backgroundColor = 'peru';
    document.body.style.fontSize = '5em';
}
// change cursor to pointer when hovered over heading
heading.style.cursor = 'pointer';