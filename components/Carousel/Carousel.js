/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


const carouselContainer = document.querySelector('.carousel-container').appendChild(Carousel());

//  make the function
function Carousel() {
  //  build elements
  const carouselDiv = document.createElement('div');
  const leftDiv = document.createElement('div');
  const rightDiv = document.createElement('div');
  const firstImg = document.createElement('img');
  const secondImg = document.createElement('img');
  const thirdImg = document.createElement('img');
  const fourthImg = document.createElement('img');

  //  assign classes and get img sources
  carouselDiv.classList.add('carousel');
  leftDiv.classList.add('left-button');
  rightDiv.classList.add('right-button');
  firstImg.src = './assets/carousel/mountains.jpg';
  secondImg.src = './assets/carousel/mountains.jpg';
  thirdImg.src = './assets/carousel/mountains.jpg';
  fourthImg.src = './assets/carousel/mountains.jpg';

  //  add text content
  leftDiv.textContent.add('<');
  rightDiv.textContent.add('>');

  //  assemble!
  carouselDiv.appendChild(leftDiv);
  carouselDiv.appendChild(firstImg);
  carouselDiv.appendChild(secondImg);
  carouselDiv.appendChild(thirdImg);  carouselDiv.appendChild(fourthImg);

  return carouselDiv;

}

