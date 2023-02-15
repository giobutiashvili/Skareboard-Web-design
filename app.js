const items = document.querySelectorAll('.section4 .accordion');

items.forEach(item => {
    const trigger = item.querySelector('.section4-div');
    trigger.addEventListener('click', () => {
        trigger.nextElementSibling.classList.toggle('active');
    });
});