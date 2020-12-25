$(document).ready(function(){


$("#hambarger").click(function(){
   
    $(this).toggleClass("active")
})











  // Responsive html font size

//   onload problem solving
  let iw = window.innerWidth;
  let rootScreenWidth = 1600;
  let rootFontPercentage = 53.35;     
 
  if (iw <= 1366) {
      $('#my_html').attr("style", `font-size:${rootFontPercentage}%`);
      
  }else{
      let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
      $('#my_html').attr("style", `font-size:${currentFontSize}%`);    
  }
      


//   or resizing problem solving

$(window).resize(function(){
    let iw = window.innerWidth;
    let rootScreenWidth = 1600;
    let rootFontPercentage = 53.35;     
   
    if (iw <= 1366) {
        $('#my_html').attr("style", `font-size:${rootFontPercentage}%`);
        
    }else{
        let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
        $('#my_html').attr("style", `font-size:${currentFontSize}%`);    
    }
})


  // Responsive html font size end






































})