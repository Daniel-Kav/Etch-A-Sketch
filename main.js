let container = document.getElementById("container");

//create 16*16 grid squares
for (let i = 0; i < 16 ;i++){
    for( let j=0;j<16;j++ ){
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);

        //add event listeners for mouseenter and mouseleave
        square.addEventListener('mouseenter', function(){
            this.style.backgroundColor="red";
        });
        square.addEventListener('mouseleave',function() {
            this.style.backgroundColor="red";
        });
    }

}

let resetButton = document.getElementById("resetButton");

//add event listener to the reset button
resetButton.addEventListener('click',function(){
    let gridSize = prompt("Enter number of squares per side :");
    gridSize = parseInt(gridSize);

    // validate user input and generate new grid if valid
    if (!isNaN(gridSize)&& gridSize>0 && gridSize <= 100){
        generateGrid(gridSize);
    }else{
        alert("Invalid Input!");
    }

});

//function to generate the grid based on given size
function generateGrid(size){
    let container = document.getElementById("container");

    // remove existing grid
    while (container.firstChild) {
        container.removeChild(container.lastChild);
        }
    

    //calculate square size based on the total width
    let containerWidth = container.offsetWidth;
    let squareSize = Math.floor(containerWidth/size)-2;
    // Create new grid squares
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      var square = document.createElement("div");
      square.classList.add("square");
      square.style.width = squareSize + "px";
      square.style.height = squareSize + "px";
      container.appendChild(square);

       //add event listeners for mouseenter and mouseleave
       square.addEventListener('mouseenter', function(){
        this.style.backgroundColor="red";
    });
    square.addEventListener('mouseleave',function() {
        this.style.backgroundColor="red";
    });
    }
  }

}

// generate the initial grid
generateGrid(16);               
//confine the code one section?