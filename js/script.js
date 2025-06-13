$(document).ready(function(){

    let ww = $(window).width();
    
    if(ww<1100){
     mobw();
 
   }else{
     pcw();
   }

function mobw(){
   
   // gsap.from(".sec2 h3", {
   //    scrollTrigger: {
   //      trigger: ".sec2",
   //      start: "-5% 40%",
   //      end:"bottom bottom",
   //      markers: true
   //    },
   //    x: 30,
   //    opacity: 0
   //  });
   // gsap.from(".pfp", {
   //    scrollTrigger: {
   //      trigger: ".sec2",
   //      start: "-5% 30%",
   //      end:"bottom bottom",
   //    },
   //    y: -30,
   //    opacity: 0
   //  });

   // gsap.from(".work-1", {
   //    scrollTrigger: {
   //      trigger: ".sec4",
   //      start: "-5% 30%",
   //      end:"bottom bottom",
   //    //   markers: true
   //    },
   //    x: -30,
   //    opacity: 0
   //  });
   //  gsap.from(".work-2", {
   //    scrollTrigger: {
   //      trigger: ".sec4",
   //      start: "-5% 20%",
   //      end:"bottom bottom",
   //    //   markers: true
   //    },
   //    x: -30,
   //    opacity: 0
   //  });
   //  gsap.from(".work-3", {
   //    scrollTrigger: {
   //      trigger: ".sec4",
   //      start: "-5% 10%",
   //      end:"bottom bottom",
   //    //   markers: true
   //    },
   //    x: -30,
   //    opacity: 0
   //  });
}

   
function pcw(){

    $('section').on('mousemove',function(e){
        //마우스의 X축Y축위치값을 구함
        let posX = e.pageX;
        let posY = e.pageY;

        $('.bg-pattern').css({'top':-(posY/10),'left':-(posX/10)})
    })
    
   $('.sec1').on('mousewheel',function(e,d){
    if(d<0){
       //마우스휠을내렸을때일어나는일
    $(this).animate({'left':'-125%'},1100)
    $(this).children('.sec-wrap').animate({'left':'125%'},1100)
    $(this).children('.fruit').animate({'rotate':'-180deg','right':'100vw'},1100)
    }})

    $('.sec2').on('mousewheel',function(e,d){
        if(d<0){
           //마우스휠을내렸을때일어나는일
        $(this).animate({'left':'-125%'},1100)
        $(this).children('.sec-wrap').animate({'left':'125%'},1100)
        $(this).children('.fruit').animate({'rotate':'-180deg','right':'100vw'},1100)
        }else if(d>0){
           //마우스휠을올렸을때일어나는일
        $(this).siblings('.sec1').animate({'left':0},1000)
        $(this).siblings('.sec1').children('.sec-wrap').animate({'left':'0'},1000)
        $(this).siblings('.sec1').children('.fruit').animate({'rotate':'180deg','right':'-25%'},1000)
    }})
    
    $('.sec3').on('mousewheel',function(e,d){
        if(d<0){
           //마우스휠을내렸을때일어나는일
        $(this).animate({'left':'-125%'},1100)
        $(this).children('.sec-wrap').animate({'left':'125%'},1100)
        $(this).children('.fruit').animate({'rotate':'-180deg','right':'100vw'},1100)
        }else if(d>0){
           //마우스휠을올렸을때일어나는일
        $(this).siblings('.sec2').animate({'left':0},1000)
        $(this).siblings('.sec2').children('.sec-wrap').animate({'left':'0'},1000)
        $(this).siblings('.sec2').children('.fruit').animate({'rotate':'180deg','right':'-25%'},1000)
    }})
    
        
   //  $('.sec4').on('mousewheel',function(e,d){
   //      if(d<0){
   //         //마우스휠을내렸을때일어나는일
   //      $(this).animate({'left':'-100%'},1000)
   //      $(this).children('.sec-wrap').animate({'left':'125%'},1100)
   //      $(this).children('.fruit').animate({'rotate':'-180deg','right':'75vw'},1000)
   //      }else if(d>0){
   //         //마우스휠을올렸을때일어나는일
   //      $(this).siblings('.sec3').animate({'left':0},1000)
   //      $(this).siblings('.sec3').children('.sec-wrap').animate({'left':'0'},1000)
   //      $(this).siblings('.sec3').children('.fruit').animate({'rotate':'180deg','right':'-25%'},1000)
   //  }})

    $('.sec4').on('mousewheel',function(e,d){
        if(d>0){
           //마우스휠을올렸을때일어나는일
        $(this).siblings('.sec3').animate({'left':0},1000)
        $(this).siblings('.sec3').children('.sec-wrap').animate({'left':'0'},1000)
        $(this).siblings('.sec3').children('.fruit').animate({'rotate':'180deg','right':'-25%'},1000)
    }})
// $('section').on('mousewheel',function(e,d){
//     let sibleq = $(this).index()-1
//     if(d<0){
//        //마우스휠을내렸을때일어나는일
//     $(this).animate({'width':0})
//     }else if(d>0){
//        //마우스휠을올렸을때일어나는일
//     $(this).siblings('section').eq(sibleq).animate({'width':'100%'})
//     }})

var swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,
   centeredSlides: true,
   spaceBetween: 30,
   pagination: {
     el: ".swiper-pagination",
     type: "fraction",
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });

 var appendNumber = 4;
 var prependNumber = 1;
 document
   .querySelector(".prepend-2-slides")
   .addEventListener("click", function (e) {
     e.preventDefault();
     swiper.prependSlide([
       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
     ]);
   });
 document
   .querySelector(".prepend-slide")
   .addEventListener("click", function (e) {
     e.preventDefault();
     swiper.prependSlide(
       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
     );
   });
 document
   .querySelector(".append-slide")
   .addEventListener("click", function (e) {
     e.preventDefault();
     swiper.appendSlide(
       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
     );
   });
 document
   .querySelector(".append-2-slides")
   .addEventListener("click", function (e) {
     e.preventDefault();
     swiper.appendSlide([
       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
     ]);
   });
}//피씨끝

   lastWidth = window.innerWidth;
    $(window).resize(function(){
    if(window.innerWidth != lastWidth){
    location.reload();
    scrollTrigger.refresh();
    }
    lastWidth = window.innerWidth;
    });
})