new WOW().init({offset:500});

window.addEventListener("load", (event) => {
//Show desc in sectin main feature
const mediaQueryDesktop = window.matchMedia("(min-width: 1410px)");
const body = document.querySelector("body");
const head = document.querySelector(".header");
const descFeature = document.querySelectorAll('.main-feature .card-desc');
const mainF = document.querySelector(".main-feature");
// console.log(descFeature);
window.addEventListener("resize", () => {
  if (mediaQueryDesktop.matches) {
    body.classList.remove("no-scroll");
	if(mainF){ mainF.classList.remove("after"); }
    if (descFeature) {
      descFeature.forEach(element => {
        if(element.classList.contains("active")){
          head.classList.remove("after");
        }
      });
    }
  } else {
    if (descFeature) {
      descFeature.forEach(element => {
        if(element.classList.contains("active")){
          mainF.classList.add("after");
        }
      });
    }
  }
});

function hideBoxDesc(descFeature){
  descFeature.classList.remove('active');
  fakeBtn.remove();
  body.classList.remove("no-scroll");
  head.classList.remove("after");
}

function showBoxDesc(descFeature){
  // console.log(descFeature)
  const fakeBtn = document.getElementById("fakeBtn");
  if (!fakeBtn) {
    const after = document.createElement("button");
    after.setAttribute("id", "fakeBtn");
    after.style.cssText =
      " position: absolute; display: block; opacity:0; height:100%; width:100vw; z-index:90; top:0; right:0;";
    after.setAttribute("type", "button");
    const mainFeature = document.querySelector(".main-feature-container-cards")
    mainFeature.appendChild(after);
    after.addEventListener("click", (e) => {
      e.preventDefault();
      hideBoxDesc(descFeature);
    });
  }

  if (descFeature.classList.contains("active")) {
    hideBoxDesc();
  } else {
    if ( window.screen.width < 992 ) { body.classList.add("no-scroll"); }
    head.classList.add("after");
    descFeature.classList.add("active");
  }
}


const featureBoxAll = document.querySelectorAll(".main-feature-container-cards");
featureBoxAll && featureBoxAll.forEach((box) => {
  const btnFeature = box.querySelector(".main-feature-box .card-title");
  const descFeature = box.querySelector(".main-feature-card .card-desc");
  const btnCloseDescFeature = box.querySelector(".main-feature-card .card-desc .btn-close-card");
  
 btnFeature && btnFeature.addEventListener('click', () => {
  showBoxDesc(descFeature);
 })
 btnCloseDescFeature && btnCloseDescFeature.addEventListener('click', () => {
  hideBoxDesc(descFeature);
 })
});

//Show more text in section main believe

function btnBelieveMoreDesc(btnBelieve, believeText){
    const showMore = btnBelieve.querySelector('.btn-believe .show-more');
    const hideMore = btnBelieve.querySelector('.btn-believe .hide-more');

    believeText.classList.toggle("show");
    if(believeText.classList.contains("show")){
        showMore.style.display = "none";
        hideMore.style.display = "block";
    } else {
        showMore.style.display ="block";
        hideMore.style.display = "none";
    }
}
const believeBoxAll = document.querySelectorAll(".box-believe-desc");
believeBoxAll.forEach((desc) => {
    const btnBelieve = desc.querySelector(".btn-believe");
    const believeText = desc.querySelector(".box-believe-desc p");

    btnBelieve && btnBelieve.addEventListener('click', () => {
        btnBelieveMoreDesc(btnBelieve, believeText);
         }) 
    });


//swiper case study
var swiper = new Swiper(".myCaseStudy", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    effect: 'fade',

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  swiper.on('slideChangeTransitionStart', function () {
    document.querySelector('.myCaseStudy').classList.add('live-animation');
  });

  swiper.on('slideChangeTransitionEnd', function () {
    document.querySelector('.myCaseStudy').classList.remove('live-animation')
  });



//swipers post


let category = {
  centerSlides: false,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
  },
   breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween:5,
    },
    640: {
      slidesPerView: 4,
      spaceBetween:5,
      loop: false,
      grabCursor: false,
      noSwiping: true,
      draggable: false,
    },
    992: {
      slidesPerView:4, 
    }
  },
}

var swiperCategory = new Swiper(".myCategory", category); 

let posts = {
  centerSlides: false,
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween:5,
    },
    640: {
      slidesPerView: 2.2,
      spaceBetween:2,
    },
    992: {
      
      slidesPerView: 3,
      spaceBetween: 64,
      loop: false,
      noSwiping: true,
      grabCursor: false
    },
    1600:{
      slidesPerView: 4,
    }
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true,
  },
}

var swiperPost = new Swiper(".myPosts", posts); 

// btn filter category in posts'


const btnCat = document.querySelectorAll(".btn-category");
const postscard = document.querySelectorAll(".swiper-slide-post");
btnCat.forEach(btn => {
  btn.addEventListener('click', ()=>{
    // console.log(btn.dataset.cat);
    filterPost(btn.dataset.cat);
    btn.classList.add('active');
  });
});
function filterPost(catId){
  btnCat.forEach(item => {
    item.classList.remove('active');
  } );
  if(catId==='all'){
    postscard.forEach(post => {
      post.style.display = "flex";
    });
  }else{
    postscard.forEach(post => {
      const catsArr = post.dataset.cats.split(",");
  
      if(catsArr.includes(catId)){
        post.style.display = "flex";
        
      }else {
        post.style.display = "none";
      }
    });
  }
}

// Animation to text in main

function showText () {
  const itemClass   = 'text-head';
  const activeClass = 'text-show';
  const wait = 5000; //  seconds
  
  function toggleActive (element, index, maxIndex) {
    setTimeout(function(){
      element.classList.add(activeClass);
      setTimeout(function(){
        element.classList.remove(activeClass);
        if (index == maxIndex) {
          runLoop();
        }
      }, wait);
    }, wait * index);  
  }

  function runLoop () {
    const allItems = document.getElementsByClassName(itemClass);
 
    for (let index = 0; index < allItems.length; index++) {
      const element = allItems[index];
      toggleActive(element, index, allItems.length - 1);
    }
  }
  
  runLoop();
}
setTimeout (showText, 1000);
// window.addEventListener('load', () => setTimeout (showText,3000));


window.addEventListener('scroll', function(){
  let value = window.scrollY;
  imgProducts = value * 0.25 + 'px';
})

});