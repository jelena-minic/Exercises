sliderClassNames= {
    activeSlide: 'img-slider__slide--active',
    btn: 'img-slider__button',
    slides: 'js-slide',
    nextBtn: 'js-next',
    prevBtn: 'js-prev',
    hiddenBtn: 'img-slider__button--hidden',
    dots: 'js-dot',
    activeSlideDot: 'slider-dots__dot--active'
};


let currentSlide = 0;
let infinite = true;
let slidesArr = document.getElementsByClassName(sliderClassNames.slides);
let nextBtn = document.getElementsByClassName('img-slider__button--right')[0];
let prevBtn = document.getElementsByClassName('img-slider__button--left')[0];
let dotsArr = document.getElementsByClassName(sliderClassNames.dots);
let slideContainer = document.getElementsByClassName('img-slider__slide-container')[0];

hideArrows(currentSlide);

function hideArrows(currentSlide) {
    if (currentSlide === slidesArr.length - 1) {
        nextBtn.style.display = 'none';
        prevBtn.style.display = 'block';
    }
    else if (currentSlide === 0) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    }
    else if(currentSlide > 0 && currentSlide < slidesArr.length-1) {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    }
}

function sliding (currentSlide) {
    [...slidesArr].forEach((slide) => {
        let fullWidth = slidesArr.length * 100;
        let slideLength = fullWidth / slidesArr.length;
        let moveLeft = slideLength * currentSlide;
        slideContainer.style.transform = 'translateX(-' + moveLeft + '%)';
    });
}

function currentDot(n) {
    [...dotsArr].forEach((dot) => {
        dot.classList.remove(sliderClassNames.activeSlideDot);
        
    });
    
    dotsArr[n].classList.add(sliderClassNames.activeSlideDot);
    sliding(n);
}

function incrementSlider(infinite) {
    // current slide, removing class activeSlide to move on to the next slide
    slidesArr[currentSlide].classList.remove(sliderClassNames.activeSlide);
    dotsArr[currentSlide].classList.remove(sliderClassNames.activeSlideDot);

    // if it is the last slide
    if (currentSlide == slidesArr.length - 1) {
        // infinite carousel
        if (infinite) {
            currentSlide = 0;
        } 
    } else {
        currentSlide++;
    }
    
    hideArrows(currentSlide);
    sliding (currentSlide);
    // adding active class
    slidesArr[currentSlide].classList.add(sliderClassNames.activeSlide); 
    dotsArr[currentSlide].classList.add(sliderClassNames.activeSlideDot);   
}

function decrementSlider(infinite) {
    // current slide, removing class activeSlide to move on to the next slide
    slidesArr[currentSlide].classList.remove(sliderClassNames.activeSlide);
    dotsArr[currentSlide].classList.remove(sliderClassNames.activeSlideDot);
    // if it is the first slide
    if (currentSlide === 0) {
        if (infinite) {
            currentSlide = slidesArr.length - 1;
        } 
    } else {
        currentSlide--;
    }

    hideArrows(currentSlide);
    sliding(currentSlide);
    // adding active class
    slidesArr[currentSlide].classList.add(sliderClassNames.activeSlide);
    dotsArr[currentSlide].classList.add(sliderClassNames.activeSlideDot);
}

