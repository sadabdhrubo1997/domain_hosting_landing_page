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
    $(".plan_details").css({
        'display': 'none'
    })
    $("#domain_hosting_plan").css({
        'display': 'flex'
    })
    $(".plan_button").click(function (e) {
        $(".plan_button").removeClass("active")
        $(this).addClass("active")
        $("#plan_wrapper").addClass("fade");

        setTimeout(() => {
            $("#plan_wrapper").removeClass("fade");
        }, 500);
    })

    $("#domain_hosting_button").click(function () {
        setTimeout(() => {
            $(".plan_details").css({
                'display': 'none'
            })
            $("#domain_hosting_plan").css({
                'display': 'flex'
            })
        }, 250);

    })

    $("#virtual_server_button").click(function (e) {
          setTimeout(() => {
            $(".plan_details").css({
                'display': 'none'
            })
            $("#virtual_server_plan").css({
                'display': 'flex'
            })
        }, 250);
    })

    $("#dedicated_server_button").click(function (e) {
          setTimeout(() => {
            $(".plan_details").css({
                'display': 'none'
            })
            $("#dedicated_server_plan").css({
                'display': 'flex'
            })
        }, 250);
    })

    // plan area toggle end










































})