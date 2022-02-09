/* // selecting elements on the DOM
const target = document.querySelector(".target-div");
console.log("target", target);
target.innerHTML = "Hi, this is the target html";
// creating elements on the DOM
const listParent = document.querySelector("#sub-list-here");
const newUL = document.createElement("ul");
const newLi = document.createElement("li");
newLi.innerHTML = "Wow, this worked!";
newUL.appendChild(newLi);
listParent.appendChild(newUL);

function myClickHandler() {
    console.log("I was clicked");
}

const myButton = document.querySelector("#clickButton");
myButton.addEventListener("click", myClickHandler);
myButton.addEventListener("click", function() {
    console.log("I think this will also fire");
})

const newHeadline = document.createElement("h1");
newHeadline.innerHTML = "Has not been clicked";
newHeadline.addEventListener("click", function() {
    newHeadline.innerHTML = "Has been clicked";
})
document.body.appendChild(newHeadline); */


// detecting clicks on a grid of elements using a loop
/* const myCircle = {
    x: 300,
    y: 400,
    width: 150
} */
const mySquare = {
    x: 300,
    y: 0,
    width: 150,
    height: 150
}
const speed = 3; // the bigger the number, the faster the speed

function setup () {
    createCanvas(800, 800);
}

function draw () {
    background("#ccc");
    mySquare.y += speed;
    fill("#f1f1f1");
    rect(mySquare.x, mySquare.y, mySquare.width, mySquare.height);
}

function mousePressed() {
    // console.log("clicked", mouseX, mouseY);
    // dist four argument : mouseX, mouseY, x, y
/*     const distance = dist(mouseX, mouseY, myCircle.x, myCircle.y); 
    console.log('the distance', distance)
    if(distance <= myCircle.width / 2) {
        myCircle.x = myCircle.x + 100;
        console.log("you clicked it!")
    } */

    // square:
    if(mouseX >= mySquare.x &&
        mouseX <= (mySquare.x + mySquare.width) && 
        mouseY >= mySquare.y && 
        mouseY <= (mySquare.height + mySquare.y)
    ) {
        console.log('hit');
        // noLoop();
        mySquare.x = mySquare.x -100;
    }
}