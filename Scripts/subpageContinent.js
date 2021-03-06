(function(window) {

  let IMG_SELECTOR = '[data-target="img-with-animal"]';
  let BIG_IMG_SELECTOR = '[data-target="big-img"]';
  let BIG_IMG_CONTAINER_SELECTOR = '[data-target="big-photo-container"]';
  let CLOSE_BUTTON_SELECTOR = '[data-target="close-button"]';
  let LEFT_ARROW_SELECTOR = '[data-target="left-arrow"]';
  let RIGHT_ARROW_SELECTOR = '[data-target="right-arrow"]';
  let BIG_IMG_FIGCAPTION_SELECTOR = '[data-target="big-photo-caption"]';

  let isTabletOrPc = window.matchMedia("(min-width:768px)");
  let leftArrow = document.querySelector(LEFT_ARROW_SELECTOR);
  let rightArrow = document.querySelector(RIGHT_ARROW_SELECTOR);

  let closeButton = document.querySelector(CLOSE_BUTTON_SELECTOR);
  let bigImgContainer = document.querySelector(BIG_IMG_CONTAINER_SELECTOR);
  let bigImgFigcaption = document.querySelector(BIG_IMG_FIGCAPTION_SELECTOR);
  let bigImg = document.querySelector(BIG_IMG_SELECTOR);
  let imgCollection = document.querySelectorAll(IMG_SELECTOR);
  imgCollection = Array.from(imgCollection);
  let currentImgNr;
  let imgCollectionLastElement = imgCollection.length - 1;

  imgCollection.forEach(function(img, number) {
    img.setAttribute('data-img-nr', number);
    img.addEventListener('click', function() {
      console.log(this.parentNode.nextSibling.nextSibling.nodeValue)
      if (isTabletOrPc.matches) {
        bigImgContainer.classList.add('open');
        bigImg.src = this.src
        currentImgNr = Number(this.getAttribute('data-img-nr'));
        bigImgFigcaption.innerHTML = getFigCaption(this);
      }
    })
  });


  closeButton.addEventListener('click', function() {
    bigImgContainer.classList.remove('open');
  });


  leftArrow.addEventListener('click', function() {
    if (currentImgNr == 0) {
      bigImg.src = imgCollection[imgCollectionLastElement].src;
      currentImgNr = imgCollectionLastElement;
    } else {
      bigImg.src = imgCollection[currentImgNr - 1].src
      currentImgNr = currentImgNr - 1;
    }
    bigImgFigcaption.innerHTML = getFigCaption(imgCollection[currentImgNr]);
  });

  rightArrow.addEventListener('click', function() {
    if (currentImgNr == imgCollectionLastElement) {
      bigImg.src = imgCollection[0].src;
      currentImgNr = 0;
    } else {
      bigImg.src = imgCollection[currentImgNr + 1].src
      currentImgNr = currentImgNr + 1;
    }
    bigImgFigcaption.innerHTML = getFigCaption(imgCollection[currentImgNr]);
  });
  function getFigCaption(node) {
    return node.parentNode.nextSibling.nextSibling.innerHTML;
  }
  window.addEventListener('resize', function() {
    if (bigImgContainer.classList.contains('open') && !isTabletOrPc.matches) {
      bigImgContainer.classList.remove('open');
    }
  });
})(window)
