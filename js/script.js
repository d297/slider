const left = document.querySelector('.button.left'),
      right = document.querySelector('.button.right'),
      sidebar = document.querySelector('.sidebar'),
      textBlocks = sidebar.querySelector('.sidebar > div'),
      main = document.querySelector('.main'),
      slidesCount = main.querySelectorAll('.main > div').length;

let slideIndex = 0;
sidebar.style.left = `-${(slidesCount - 1) * 100}vw`;

left.addEventListener('click', () => {
    changeSlide('left');
});
right.addEventListener('click', () => {
    changeSlide('right');
});

function changeSlide(btn){
    if(btn === 'right'){
        slideIndex++;
        if(slideIndex === slidesCount){
            slideIndex = 0;
        }
    } else if (btn === 'left') {
        slideIndex--;
        if(slideIndex < 0){
            slideIndex = slidesCount - 1;
        }
    }
    
    sidebar.style.transform =  `translateX(${100 * slideIndex}vw)`;
    main.style.transform = `translateX(-${100 * slideIndex}vw)`;
}
