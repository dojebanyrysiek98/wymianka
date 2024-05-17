const readMoreBtns = document.querySelectorAll('.read-more');
const popupContainers = document.querySelectorAll('.popup-container');
const closeBtns = document.querySelectorAll('.close-btn');

var swipers = []; 

readMoreBtns.forEach((readMoreBtn, index) => {
  readMoreBtn.addEventListener('click', () => {
    popupContainers[index].style.display = 'flex';
   
    swipers[index] = new Swiper(popupContainers[index].querySelector('.swiper-container'), {
      pagination: {
        el: popupContainers[index].querySelector('.swiper-pagination'),
      },
    });
  });
});

closeBtns.forEach((closeBtn, index) => {
  closeBtn.addEventListener('click', () => {
    popupContainers[index].style.display = 'none';
  
    swipers[index].destroy();
  });
});
