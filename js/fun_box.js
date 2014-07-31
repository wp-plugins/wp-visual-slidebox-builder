jQuery(document).ready(function (e) {
    e('.squareDemo_production .squareLitDemo').removeClass('fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig bounce flash pulse shake swing tada wobble bounceOut zoomOutUp zoomOutRight hinge zoomOutLeft zoomOut rollOut zoomOutDown bounceOutDown rotateOutUpRight rotateOutUpLeft rotateOutDownRight rotateOutDownLeft rotateOut bounceOutLeft lightSpeedOut bounceOutRight bounceOutUp flipOutX flipOutY').addClass('wpvsbb_hide_quick')
    e(".squareDemo_production").unbind("hover");
    e(".squareDemo_production").hover(function () {
        e('.squareDemo_production .squareLitDemo').removeClass('wpvsbb_hide_quick')
        if(e(this).find('.squareLitDemo.shape').find('.title_link_out').attr('href') ==''){
            e(this).find('.squareLitDemo.shape').find('.title_link_out').css('cursor','default');
        }
        e(this).find('.squareLitDemo.shape').css('cursor', 'pointer');
        e(this).find('.squareLitDemo.shape').off('click');
        e(this).find('.squareLitDemo.shape').on('click', function (event) {
            if(e(this).find('.title_link_out').attr('href') ==''){
                e(this).find('.title_link_out').css('cursor','default')
                event.preventDefault();
                event.stopPropagation();
            }
        })
        height_val = e(this).height();
        width_val = e(this).width();
        title_val = e(".squareLitDemo.shape h3.title").height();
        if (e(this).find(".squareLitDemo").attr("entrance") == 1) {
            e(this).find(".squareLitDemo").animate({top: "0"}, {queue: false, duration: 400})
        } else if (e(this).find(".squareLitDemo").attr("entrance") == 2) {
            e(this).find(".squareLitDemo").animate({top: "0"}, {queue: false, duration: 400})
        } else if (e(this).find(".squareLitDemo").attr("entrance") == 3) {
            e(this).find(".squareLitDemo").animate({right: "0"}, {queue: false, duration: 400})
        } else if (e(this).find(".squareLitDemo").attr("entrance") == 4) {
            e(this).find(".squareLitDemo").animate({right: "0"}, {queue: false, duration: 400})
        } else if (e(this).find(".squareLitDemo").attr("entrance") == "effect") {
            if (!e(this).find(".squareDemo_production").hasClass("maskImg")) {
                e(this).find(".squareDemo_production").addClass("maskImg")
            }
            e(this).find(".squareLitDemo").removeClass("animated " + e(this).find(".squareLitDemo").attr("out")).addClass("animated " + e(this).find(".squareLitDemo").attr("in"))
        }
    }, function () {
        if (e(this).find(".squareLitDemo").attr("entrance") == 1) {
            e(this).find(".squareLitDemo").animate({top: height_val - title_val}, {queue: false, duration: 400})
        } else if (e(this).find(".squareLitDemo").attr("entrance") == 2) {
            e(this).find(".squareLitDemo").animate({top: -(height_val - title_val)}, {queue: false, duration: 400})
        } else if (e(this).find(".squareLitDemo").attr("entrance") == 3) {
            e(this).find(".squareLitDemo").animate({right: width_val}, {queue: false, duration: 400})
        } else if (e(this).find(".squareLitDemo").attr("entrance") == 4) {
            e(this).find(".squareLitDemo").animate({right: -width_val}, {queue: false, duration: 400})
        } else if (e(this).find(".squareLitDemo").attr("entrance") == "effect") {
            e(this).find(".squareLitDemo").removeClass("animated " + e(this).find(".squareLitDemo").attr("in")).addClass("animated " + e(this).find(".squareLitDemo").attr("out"))
        }
    });

})