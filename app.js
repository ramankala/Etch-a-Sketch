

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


// function createGrid(){

//     let initialSize = 16;
    
//     for (let i = 0; i < initialSize; i++){
//         for (let j = 0; j < initialSize; j++){
//             let box = document.createElement('div');
//             box.className = "cell";
//             }
//             container.appendChild(box);
//         }
        
        
//     }


// function createNewGrid(pixelSize){

//     container.replaceChildren();

//     // container.style.setProperty("--grid-rows", pixelSize);
//     // container.style.setProperty("--grid-cols", pixelSize);
    

//     for (let i = 0; i < pixelSize * pixelSize; i++){
//         let box = document.createElement('div');
//         box.className = "cell";
//         box.addEventListener('mouseover', function(e){
//             e.target.style.backgroundColor = "black";
//         })

//         container.appendChild(box);
//     }
// }

createGrid(16);

//how to create a new grid in the same total space as before? e.g. 64x64
//look into using css grid instead of flexbox
//Redo this with the container css class as the main one to add properties to
