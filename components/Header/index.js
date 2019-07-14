// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >


// Add it to the DOM
const headerContainer = document.querySelector('.header-container');
Header();

function Header() {
    //build elements
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    //assign given classes
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //add given text to elements
    date.textContent = 'SMARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';

    //function, assemble!
    headerContainer.appendChild(header);
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    return header;

};
