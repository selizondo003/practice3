

//creating constants
const container = document.querySelector(".container");
const pageX = document.getElementById("x");
const pageY = document.getElementById("y");

//create function for pageX and pageY
function updateDisplay(event){
    pageX.innerHTML = event.pageX;
    pageY.innerHTML = event.pageY;

    //open the JS console to see the output
    console.log(event.pageX, event.pageY);
}

//detect mousemove, mouseenter, mouseleave events and handle them
document.addEventListener("mousemove", updateDisplay);
container.addEventListener("mouseenter", changeColor);
container.addEventListener("mouseleave", resetColor);

function changeColor(event){
    container.style.backgroundColor = "#abc";
}

function resetColor(event){
    container.style.backgroundColor = "pink";
}

var dot = document.getElementById('dot');
document.addEventListener('click', (e) => {
    dot.style.transform = `translateY(${e.clientY - 25}px)`;
    dot.style.transform += `translateX(${e.clientX - 25}px)`;
    dot.style.opacity = 1;
}, false);

dot.addEventListener('click', (e) => {
    dot.style.backgroundColor = "purple";
    dot.style.width = "400px";
    dot.style.height = "300px"
    dot.classList.toggle('expand');
    console.log('clicked');
   

})
     




