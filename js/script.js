$(document).ready(function(){

   let ww = $(window).width();
   
   if(ww<1000){
    mobw();

  }else{
    pcw();
  }

  function mobw(){

   $('.menu-btn').on('click',function(){
      $('.mo-nav').animate({'margin-left':0})
   })
   $('.mo-nav ul li').on('click',function(){
      $(this).addClass('on').siblings('li').removeClass('on')
   })

   $('.close-btn').on('click',function(){
      $('.mo-nav').animate({'margin-left':'100%'})
   })
   
   // $(window).on('scroll',function(){
   //    $('.h2-jail h2').delay(200).animate({'top':'-480px'},1200)
   //    $('.menu-btn').delay(1100).animate({'height':'35px'},300).children('span').animate({'height':'7px'},300)
   // })

   // $('section').on('mousewheel',function(e,d){
   //    if(d<0){
   //       $('.h2-jail h2').delay(200).animate({'top':'-480px'},1200)
   //       $('.menu-btn').delay(1100).animate({'height':'35px'},300).children('span').animate({'height':'7px'},300)
   //       //위애두줄 내가넣은거 지울거면 위에꺼 주석켜야됨
   //       //마우스휠을내렸을때일어나는일

   //       let nxt = $(this).next().offset().top;
   //       //내가선택한섹션 다음섹션의 top
   //       $('html, body').stop().animate({'scrollTop':nxt});
   //       //html,body를 대상으로 스크롤이 움직이기 nxt변수만큼
         
   //    }else if(d>0){
   //       //마우스휠을올렸을때일어나는일
   //       $('.h2-jail h2').delay(200).animate({'top':'-480px'},1200)
   //       $('.menu-btn').delay(1100).animate({'height':'35px'},300).children('span').animate({'height':'7px'},300)
   //       let prv = $(this).prev().offset().top;
   //       //내가선택한섹션 이전섹션의 top
   //       $('html, body').stop().animate({'scrollTop':prv});
   //       //html,body를 대상으로 스크롤이 움직이기 nxt변수만큼
   //    }
   // })
   $('section').on('mousewheel',function(e,d){
      $('.h2-jail h2').delay(200).animate({'top':'-480px'},1200)
      $('.menu-btn').delay(1100).animate({'height':'35px'},300).children('span').animate({'height':'7px'},300)
   })

      $('.top-btn').on('click',function(){
         $('html, body').animate({'scrollTop':0},700)
     })

     var swiper = new Swiper(".sec4 .mySwiper", {
      spaceBetween: 30,
      slidesPerView : 1,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,

      },
    });

    $('.mo-nav ul>li').on('click',function(){
      let lieq = $(this).index()
      let sectop = $('section').eq(lieq).offset().top;
      $('html, body').stop().animate({'scrollTop':sectop});
      $('.h2-jail h2').animate({'top':'-480px'},1200)
      $('.menu-btn').animate({'height':'35px'},300).children('span').animate({'height':'7px'},300)
      $('.mo-nav').delay(400).animate({'margin-left':'100%'})

    })

  }

  function pcw(){

   // $('.sec0 .map').on('mouseover',function(){
   //    $(this).animate({'top':'0'})
   //    $('.click-txt').animate({'marginTop':'10px','opacity':0},200)
   // }).on('mouseout',function(){
   //     $(this).stop().animate({'top':'-8%'})
   //     $('.click-txt').animate({'marginTop':0,'opacity':1},250)
   //  }).on('click',function(){
   //     $('section').show()
   //     $('.sec0').hide()
   //  })

   function abc(){
      $('.click-txt span').animate({'marginRight':'5px'},500).animate({'marginRight':'15px'},500)
   }
   setInterval(abc,500)



   $('section').on('mousewheel',function(e,d){
      if(d<0){
         //마우스휠을내렸을때일어나는일
         let nxt = $(this).next().offset().top;
         //내가선택한섹션 다음섹션의 top
         $('html, body').stop().animate({'scrollTop':nxt});
         //html,body를 대상으로 스크롤이 움직이기 nxt변수만큼
      }else if(d>0){
         //마우스휠을올렸을때일어나는일
         let prv = $(this).prev().offset().top;
         //내가선택한섹션 이전섹션의 top
         $('html, body').stop().animate({'scrollTop':prv});
         //html,body를 대상으로 스크롤이 움직이기 nxt변수만큼
      }


})

   var swiper = new Swiper(".sec4 .mySwiper", {
         spaceBetween: 0,
         slidesPerView : 3,
         pagination: {
         el: ".swiper-pagination",
         dynamicBullets: true,

         },
      });

$('.top-btn').on('click',function(){
   $('html, body').animate({'scrollTop':0},700)
})

   $('.map>li').on('click',function(){
      let i = $(this).index();
      let b = $('section').eq(i).offset().top;
      //스크롤이 섹션의 offsettop값만큼 움직여야함
      $('html, body').stop().animate({'scrollTop' : b})
      // $(this).addClass('on').siblings('li').removeClass('on')
   })


         
   $(window).on('scroll',function(){
      let scr = $(window).scrollTop();
      let top2 = $('.sec2').offset().top;
      console.log(top2)
      let top3 = $('.sec3').offset().top;
      let top4 = $('.sec4').offset().top;
      let top5 = $('.sec5').offset().top;
      if(0<=scr && top2>scr){$('.map>li').eq(0).addClass('on').siblings().removeClass('on')
          }else if(top2<=scr && top3>scr){$('.map>li').eq(1).addClass('on').siblings().removeClass('on')
          }else if(top3<=scr && top4>scr){$('.map>li').eq(2).addClass('on').siblings().removeClass('on')
          }else if(top4<=scr && top5>scr){$('.map>li').eq(3).addClass('on').siblings().removeClass('on')
          }else{$('.map>li').eq(4).addClass('on').siblings().removeClass('on')
      }
          
  })

  }//이것이피씨끝



  $(window).resize(function(){
   document.location.reload();})
})