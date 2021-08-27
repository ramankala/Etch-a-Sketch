

const container = document.querySelector('#container');

const resetBtn = document.querySelector('#reset');




resetBtn.addEventListener('click', function(){
    let pixelSize = window.prompt('Number of squares per side for the new grid(Max: 100)?');

    createGrid(pixelSize);


});


function createGrid(pixelSize){

    container.replaceChildren();

    container.style.setProperty("--grid-rows", pixelSize);
    container.style.setProperty("--grid-cols", pixelSize);
    
    for (let i = 0; i < pixelSize * pixelSize; i++){
        let box = document.createElement('div');
        box.className = "cell";
        box.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = "black";
        })

        container.appendChild(box);
        
    }
    

    
}




createGrid(16);

