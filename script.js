$(document).ready(function(){
    const bars = document.querySelectorAll('.progress_bar');

    bars.forEach(function(bar) {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage;
        bar.style.width = percentage;
    });

      $('.slider_wrapper').slick({
      arrows : false,
      autoplay: true
    });
    
});
var icon = document.getElementById("icon");
icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "./darkthemeicon/moon.png";
  }
  else{
    icon.src = "./darkthemeicon/sun.png";
  }
}

