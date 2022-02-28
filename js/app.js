$(document).ready(function(){
    $('.slider').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        // dots:true, 
    });
  });
function displaytime(){
      var date=new Date()
      var hr=date.getHours()
      var min=date.getMinutes()
      var sec=date.getSeconds() 
      document.getElementById("hr").innerHTML=hr
      document.getElementById("min").innerHTML=min
      document.getElementById("sec").innerHTML=sec
  }
  setInterval(displaytime,10)