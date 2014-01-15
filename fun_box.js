jQuery(document).ready(function($) {
    $('.squareDemo_production').unbind("hover");
    $('.squareDemo_production').hover(function() {
        height_val = $(this).height();
        width_val = $(this).width();
        title_val = $('.squareLitDemo.shape h3.title').height();
        if ($(this).find(".squareLitDemo").attr("entrance") == 1) {
            $(this).find(".squareLitDemo").animate({top: '0'}, {queue: false, duration: 400});
        }
        else if ($(this).find(".squareLitDemo").attr("entrance") == 2) {
            $(this).find(".squareLitDemo").animate({top: '0'}, {queue: false, duration: 400});
        }
        else if ($(this).find(".squareLitDemo").attr("entrance") == 3) {
            $(this).find(".squareLitDemo").animate({right: '0'}, {queue: false, duration: 400});
        }
        else if ($(this).find(".squareLitDemo").attr("entrance") == 4) {
            $(this).find(".squareLitDemo").animate({right: '0'}, {queue: false, duration: 400});
        }
        ////////////not slide//////////
        else if ($(this).find(".squareLitDemo").attr("entrance") == 'effect') {
            if (!$(this).find(".squareDemo_production").hasClass('maskImg')) {
                $(this).find(".squareDemo_production").addClass('maskImg');
            }
            $(this).find(".squareLitDemo").removeClass('animated ' + $(this).find(".squareLitDemo").attr('out')).addClass('animated ' + $(this).find(".squareLitDemo").attr('in'));
        }
    }, function() {
        if ($(this).find(".squareLitDemo").attr("entrance") == 1) {
            $(this).find(".squareLitDemo").animate({top: height_val - title_val}, {queue: false, duration: 400});
        }
        else if ($(this).find(".squareLitDemo").attr("entrance") == 2) {
            $(this).find(".squareLitDemo").animate({top: -(height_val - title_val)}, {queue: false, duration: 400});
        }
        else if ($(this).find(".squareLitDemo").attr("entrance") == 3) {
            $(this).find(".squareLitDemo").animate({right: width_val}, {queue: false, duration: 400});
        }
        else if ($(this).find(".squareLitDemo").attr("entrance") == 4) {
            $(this).find(".squareLitDemo").animate({right: -width_val}, {queue: false, duration: 400});
        }
        ////////////not slide//////////
        else if ($(this).find(".squareLitDemo").attr("entrance") == 'effect') {
            $(this).find(".squareLitDemo").removeClass('animated ' + $(this).find(".squareLitDemo").attr('in')).addClass('animated ' + $(this).find(".squareLitDemo").attr('out'));
        }
    });
});

