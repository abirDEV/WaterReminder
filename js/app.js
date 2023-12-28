AOS.init({
  duration: 500,
  delay: 300,
});

$('.my-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'<i class="fa-solid fa-angle-left prev"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right next"></i>',
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode:true,
    centerPadding: "0px",



    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
    }
    ]
  });

  let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if(pos > 100){
      scrollProgress.style.display = "grid";
    }
    else{
      scrollProgress.style.display = "none"
    }
  
    scrollProgress.addEventListener("click", () =>{
      document.documentElement.scrollTop = 0;
    });
  
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  
  
  }
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
 
  let nightDay = document.getElementById("night");

  nightDay.addEventListener("click", ()=>{
    window.location.href="night.html";
  });