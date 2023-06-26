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
            this.style.backgroundColor="";
        });
    }

}

