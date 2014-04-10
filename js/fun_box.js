jQuery(document).ready(function(e) {
    e(".squareDemo_production").unbind("hover");
    e(".squareDemo_production").hover(function() {
        e(this).find('.squareLitDemo.shape').css('cursor', 'pointer');
        e(this).find('.squareLitDemo.shape').on('click', function() {
            console.log('ff', e(this).find('.title_link_out').attr('target'))
            if (e(this).find('.title_link_out').attr('target') == 'blank') {
            var win = window.open(e(this).find('.title_link_out').attr('href'), '_blank');
            win.focus();
            }
            else{
            window.location.href = e(this).find('.title_link_out').attr('href');
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
    }, function() {
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