'use strict';

// ハンバーガー	

// ボタン
$(function(){
    $('.btn-trigger').on('click',function(){
        $(this).toggleClass('active');
        return false;
    });
    
});

// 開閉
$(function(){
    $('.btn-trigger').on('click',function(){
        $('#nav').toggleClass('show');
    });
});

$(function(){
    $('.btn-trigger').on('click',function(){
        $('.trans').toggleClass('transparent');
    });
});

$(function(){
    $('.btn-trigger').on('click',function(){
        $('.nav').toggleClass('fix');
    });
});


// Swiper
$(function(){
const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: false,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: {
          slidesPerView: 6.6,
        },
        800: {
            slidesPerView: 3.4,
          },
          900: {
              slidesPerView: 3.7,
            },
            750: {
                slidesPerView: 3.2,
            },
            500: {
                slidesPerView: 2.28,
            },
            400: {
                slidesPerView: 1.75,
              },
          385: {
              slidesPerView: 1.65,
          },
          350: {
              slidesPerView: 1.52,
          },
            
      
      },
    //ここから追加
  spaceBetween: 10,
  slidesPerView: 1.6,
  watchOverflow:false,
  with:224,
  
  });
});

//   タブメニュー
const tabs = $(".Tab");
  const contents = $(".Content");
 
  
  tabs.on("click", function () {
   tabs.removeClass("Tab__isActive");
   contents.removeClass("Content__isActive");
   
   const clickedTab = $(this) ;
   clickedTab.addClass("Tab__isActive");   
   
   const id = "#" + clickedTab.data("id") ;
   $(id).addClass("Content__isActive");
   
   const changeTab = $('.Tab__isActive').siblings();
   
   changeTab.addClass('borderCent');
   clickedTab.removeClass('borderCent');
});


// アコーディオン

const menuItemLabel1 = $(".Menu-Item-Label-1");
menuItemLabel1.on("click",function(){
    $(this).next().children().toggleClass("SubMenu-Item__isActive");
    $('.rotation-1').toggleClass('add');
});
const menuItemLabel2 = $(".Menu-Item-Label-2");
menuItemLabel2.on("click",function(){
    $(this).next().children().toggleClass("SubMenu-Item__isActive");
    $('.rotation-2').toggleClass('add');
});
const menuItemLabel3 = $(".Menu-Item-Label-3");
menuItemLabel3.on("click",function(){
    $(this).next().children().toggleClass("SubMenu-Item__isActive");
    $('.rotation-3').toggleClass('add');
});


// 2つ目のスライダー 
// $(function(){
// const swiper2 = new Swiper('.swiper2', {
//   // Optional parameters
//   loop: false,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
  
//   //ここから追加
// spaceBetween: 1,
// slidesPerView: 7,
// watchOverflow:false,


//     });
// });



