function funn(ev){
    alert("asd");
}
var slider__items = document.querySelectorAll('.slider__item');
var back_limk;
var team__links;
for(let item of slider__items) {
   item.onmouseover = function(event){
       back_limk = event.currentTarget.querySelector('.back__link');
       team__links = event.currentTarget.querySelector('.team__links');
       
       back_limk.style.background="rgba(0, 0, 0, .8)";
       back_limk.style.transitionDuration="0.5s";
       

       team__links.style.visibility="visible";
       team__links.style.transitionDuration="0.3s";
       team__links.style.marginBottom="85px";
    };
   item.onmouseout = function(event){
    team__links.style.marginBottom="55px";
    team__links.style.visibility="hidden";
    
    back_limk.style.background="none";
};
}
