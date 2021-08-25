

const container = document.querySelector('#container');


function createGrid(){
    

    for (let i = 0; i < 16; i++){
        let row = document.createElement('div');
        row.className = "row";

        for (let j = 0; j < 16; j++){
            let box = document.createElement('div');
            box.className = "cell";
            box.addEventListener('mouseover', function(){
                box.className = "cell blackBox";

            });
            row.appendChild(box);
        }
        container.appendChild(row);
        
    }

    
}

createGrid();

//how to create a new grid in the same total space as before? e.g. 64x64
//look into using css grid instead of flexbox
