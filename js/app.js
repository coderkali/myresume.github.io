$(document).ready(function() {
     $('#profile_ripple').ripples({
        resolutions : 512,
        dropRadius : 10
     });


     const bars = document.querySelectorAll('.progress__bar');
     
     bars.forEach(function(bar){
      let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerHTML = percentage + '%';
        bar.style.width= percentage + '%';

     });

      
    const counters= document.querySelectorAll('.counter');


    function runCounter(){
      counters.forEach(function(counter){
         counter.innerText =0;
         let target = +counter.dataset.count;
         let step = target /100;
   
         
         
         let countIt = function(){
            let displayedNumber = +counter.innerText;
            if(displayedNumber < target){
               counter.innerText = Math.ceil(displayedNumber+step);
               setTimeout(countIt ,1);
            }else{
               counter.innerText =target;
            }
         }
         countIt();
       });
    }


    let counterSection = document.querySelector('.counter__section');
    let options ={
       rootMargin : '0px 0px -200px 0px'
    }
    let done =0;
    const sectionObserver = new IntersectionObserver(function(entries){
      if(entries[0].isIntersecting && done!=1){
         done =1;
         runCounter();
      }
    },options)
    sectionObserver.observe(counterSection);


});