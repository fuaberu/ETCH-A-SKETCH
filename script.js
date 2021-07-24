//constants
const container = document.querySelector('.container');
const newGridBtn = document.querySelector('#new-grid');
const colorPicker = document.querySelector('.color-picker');
const eraserBtn = document.querySelector('#eraser');
let penColor = 'black';


//choose a colors function
const chooseColor = () => {
    colorPicker.addEventListener('input', () => {
    let color = colorPicker.value; 
    penColor = color;
    }); 
}

//eraser option
eraserBtn.addEventListener('click', () => {
penColor = 'white';
}); 


//ask how many divs need to be created
newGridBtn.addEventListener('click', () => {
    let divNumber = prompt('Enter new size.');
    if (divNumber <= 64 && divNumber > 0 && divNumber !== null && divNumber !== NaN) {
        //clear previous divs
        container.replaceChildren();
        //call the allDivs function
        allDivs (divNumber);
    }   else {
        alert ('Please input a valid number between 1 and 64.')
    }
        
});

const allDivs = (amountOfDivs) => { 
    //put the divs in a grid
    container.style.gridTemplateColumns = `repeat(${amountOfDivs}, 1fr)`;
    //create the all the divs necessary
    for (let i = 0; i < amountOfDivs * amountOfDivs; i++) {
        //create a new div
        const newDiv = document.createElement('div');
        newDiv.classList.add('new-Div'); 
        newDiv.addEventListener('click', (event) => {
            event.target.style.backgroundColor = penColor;
          
    }); 
    //add to the DOM
    container.appendChild(newDiv);
}
    
}





//call the functions
allDivs (16);
