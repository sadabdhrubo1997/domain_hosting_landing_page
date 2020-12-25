$(document).ready(function () {

    // Responsive html font size

    //   onload problem solving
    let iw = window.innerWidth;
    let rootScreenWidth = 1600;
    let rootFontPercentage = 53.35;

    if (iw <= 1366) {
        $('#my_html').attr("style", `font-size:${rootFontPercentage}%`);

    } else {
        let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
        $('#my_html').attr("style", `font-size:${currentFontSize}%`);
    }



    //   or resizing problem solving

    $(window).resize(function () {
        let iw = window.innerWidth;
        let rootScreenWidth = 1600;
        let rootFontPercentage = 53.35;

        if (iw <= 1366) {
            $('#my_html').attr("style", `font-size:${rootFontPercentage}%`);

        } else {
            let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
            $('#my_html').attr("style", `font-size:${currentFontSize}%`);
        }
    })


    // Responsive html font size end


    // hambarger menu
    $("#hambarger").click(function () {
       $(this).toggleClass("active")
       
    })
    // hambarger menu end



    // plan area toggle


 $(".plan_button1").addClass("active")
    $(".plan_button").click(function(e){
        $(".plan_button").removeClass("active")
        $(this).addClass("active")
      $("#plan_wrapper_").addClass("fade");

      setTimeout(() => {
        $("#plan_wrapper_").removeClass("fade");
    }, 500);
      
    })

    // plan area toggle end










































})