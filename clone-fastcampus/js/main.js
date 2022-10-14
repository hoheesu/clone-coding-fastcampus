
/* ==================== ( modal close ) ==================== */
const closeButton = document.querySelector('aside.modal button.close-btn');
const modalBanner = document.querySelector('aside.modal');


closeButton.onclick = function(){
  modalBanner.style.display='none';
}


/* ==================== ( depth hover ) ==================== */
const depth = document.querySelector('header .hd-bot ul.depth1>li:nth-child(1)');
const bgOpa = document.querySelector('.category-hover-back');

depth.addEventListener("mouseover",()=>{
  bgOpa.style.display = 'block';
})
depth.addEventListener("mouseout",()=>{
  bgOpa.style.display = 'none';
})

/* ==================== ( mv-banner pause/play 버튼 클릭 EVENT ) ==================== */
var el = document.querySelector('.swiper .btn-box .swiper-pause');
//.swiper-pause를 를 변수el에 선언
var pauseClick = 0;
// 버튼 클릭숫자 초기화
var bannerEl = document.querySelector('.swiper .btn-box .swiper-pause i')
// i태그 안 클래스명을 변경해 주기 위해서 i를 찾아서 변수 bannerEl 에 선언


el.onclick = function () { // 버튼이 클릭되었을때 ,
  pauseClick += 1; // 클릭이 될때마다 pauseClick값에 1을 더한다.
  console.log(bannerEl.classList)

  if (pauseClick % 2) { // 버튼이 홀수번 만큼 눌리면
    bannerEl.classList.remove('fa-pasue') // i태그 안에 있는 fa-pause클래스를 삭제하고
    bannerEl.classList.add('fa-play') // fa-play를 추가한다.
    swiper.autoplay.stop() // swiper autoplay 를 멈춘다.
  } else { // 버튼이 짝수번째 눌렸다면
    bannerEl.classList.remove('fa-play') // i태그 안에 있는 fa-play클래스를 삭제하고
    bannerEl.classList.add('fa-pause') // fa-pause클래스를 추가한다.
    swiper.autoplay.start() // swiper autoplay를 실행한다.
  }

}

/* ==================== ( header search-box click시 검색창 block ) ==================== */
const searchBox = document.querySelector('header .hd-top-left .search-box input')
const inputFocus = document.querySelector('header .hd-top-left .search-box .input-focus')

searchBox.addEventListener("focus",()=>{
  inputFocus.style.display = 'block';
});
searchBox.addEventListener("blur",()=>{
  inputFocus.style.display = 'none';
});

/* ==================== ( search-box focus li hover ) ==================== */
const historyHover = document.querySelectorAll('header .search-box .input-focus ul.history li a')
const historyHoverBg = document.querySelectorAll('header .search-box .input-focus ul.history li')

for(let i = 0; i < historyHover.length; i++){
  historyHover[i].addEventListener("mouseover",()=>{
    historyHoverBg[i].style.backgroundColor = '#f8f8f8';
  });
  historyHover[i].addEventListener("mouseout",()=>{
    historyHoverBg[i].style.backgroundColor = '#fff';
  });
}
// prod. 노준영 


/* ==================== ( mv-banner Swiper ) ==================== */
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  // loopAdditionalSlides: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

/* ==================== ( section.event ) ==================== */
var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});


/* ==================== ( section.cate1 ) ==================== */
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 16,
  slidesPerGroup: 4,

  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1"
  }
});

/* ==================== ( section.cate2 ) ==================== */
var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 4,
  spaceBetween: 16,
  slidesPerGroup: 4,

  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2"
  }
});
/* ==================== ( section.cate3 ) ==================== */
var swiper4 = new Swiper(".mySwiper4", {
  slidesPerView: 4,
  spaceBetween: 16,
  slidesPerGroup: 4,

  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3"
  }
});
