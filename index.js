const accordionItems = document.querySelectorAll('.accordion__item'),
      accordionContents = document.querySelectorAll('.accordion__item-content');

accordionItems.forEach(item => {
    item.children[0].addEventListener('click', () => {
        item.classList.toggle('active');
        item.children[0].classList.toggle('active');
        item.children[1].classList.toggle('active');
    })
})
