var acc = document.getElementsByClassName("section4-div");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
};


function openEbay(){
    window.open("https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=skateboard+&_sacat=0")
};
function gotobuilder() {
    window.location='#section4'
};
function goTohead(){
   window.location='#header-vid'
};
function openNewTab(){
    window.open("https://www.amazon.com/s?k=skateboard&crid=3M55GEAN3C4ZR&sprefix=skatebopard%2Caps%2C243&ref=nb_sb_ss_ts-doa-p_2_11")
}

const items = document.querySelectorAll('.box-div');
    items.forEach( item => {
        const trigger = item.querySelector('button');
        trigger.addEventListener('click', () => {
        window.open("https://www.google.com/search?q=skateboard&client=firefox-b-d&sxsrf=AJOqlzWQI-DQv1EWXs1JBkBA5zD89hTr4Q:1676613707482&source=lnms&tbm=isch&sa=X&ved=2ahUKEwin2dbj8Jv9AhU7iv0HHcfKAEoQ_AUoAXoECAEQAw&biw=1920&bih=927&dpr=1")
        });
    }
);

    
