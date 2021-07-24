//constants
const container = document.querySelector('.container');
const newGridBtn = document.querySelector('#new-grid');
 

//create a new div
const createDiv = () => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('new-Div'); 
    newDiv.addEventListener('mouseover', () => {
        newDiv.classList.add('hover');
    });
    //add to the DOM
    container.appendChild(newDiv);
}

//give the hover class random colors

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
        createDiv ()
    }
}





//call the functions
allDivs (16);
