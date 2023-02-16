const items = document.querySelectorAll('.section4 .accordion');
items.forEach(item => {
    const trigger = item.querySelector('.section4-div');
    trigger.addEventListener('click', () => {
        trigger.nextElementSibling.classList.toggle('active');
    });
  
});

function openNewTab() {
    window.open("https://www.amazon.com/s?k=skateboards&crid=15U8GIM9TG9GV&sprefix=skeatboar%2Caps%2C386&ref=nb_sb_ss_ts-doa-p_2_9");
}

function openEbay(){
    window.open("https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=skateboard+&_sacat=0")
}

function gotobuilder() {
    window.location='#section4'
}
function goTohead(){
   window.location='#header-img'
}