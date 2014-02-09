jQuery(document).ready(function($) {
    openPreview();
    roundCorners();
    roundCorners2();
    borderWidth();
    opacity();
    bColor();
    transparent();
    borderColor();
    fontProp1();
    fontColor();
    fontColor2();
    litTitleColor();
    opacityLit();
    bColorLit();
    containerText();
    containerWidth();
    containerLitText();
    containerHeight();
    entranceOpts();
    hoverEffect();
    controls();
    adjustSize();
    dividerLit();
    qPod_Text1();
    containerTitle();
    entranceEffs();
    litDividerColor();
    // shadow_set();
    links_set();

    $LIT = $('.squareLitDemo.shape');
    $BOX = $('.squareDemo.shape.box');

//uploader
    /*************** box ****************/
    var custom_uploader;
    $('#upload_image_button').click(function(e) {
        e.preventDefault();
        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {
            custom_uploader.open();
            return;
        }
        //Extend the wp.media object
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: 'Choose Image',
            button: {
                text: 'Choose Image'
            },
            multiple: false
        });

        //When a file is selected, grab the URL and set it as the text field's value
        custom_uploader.on('select', function() {
            attachment = custom_uploader.state().get('selection').first().toJSON();
            $('#upload_image').val(attachment.url);
            $('#square_preview').css({'background': 'transparent url(' + $('#upload_image').val() + ') left top no-repeat', 'background-size': '100%'});

        });

        //Open the uploader dialog
        custom_uploader.open();

    });

    /***************** lit ****************/
    var custom_uploader2;
    $('#upload_image_button2').click(function(e) {
        e.preventDefault();
        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader2) {
            custom_uploader2.open();
            return;
        }
        //Extend the wp.media object
        custom_uploader2 = wp.media.frames.file_frame = wp.media({
            title: 'Choose Image',
            button: {
                text: 'Choose Image'
            },
            multiple: false
        });

        //When a file is selected, grab the URL and set it as the text field's value
        custom_uploader2.on('select', function() {
            attachment = custom_uploader2.state().get('selection').first().toJSON();
            $('#upload_image2').val(attachment.url);
            $('.squareLitDemo.shape').css({'background': 'transparent url(' + $('#upload_image2').val() + ') left top no-repeat', 'background-size': '100%'});

        });

        //Open the uploader dialog
        custom_uploader2.open();

    });
//end uploader

    $('.scratch').on('click', function() {
        location.reload();
//        reset();
//        openPreview();
//        hoverEffect();
//        $('.save_name').val('');
//        $('.centerOuterDiv').addClass('animated fadeIn');
//        setTimeout(function() {
//            $('.centerOuterDiv').removeClass('animated fadeIn');
//        }, 200);
    });

    $('.actionSave').on('click', function() {
        if ($('.save_name').val() == '' || $('.save_name').val().indexOf(' ') >= 0) {
            getModal('error', {'head': 'Invalid Name', 'body': 'Please use a valid name for the item. No spaces allowed'});
        }
        else {
            var entrance = $("#hEffect option:selected").val();
            var trans_1 = '';
            var trans_2 = '';
            var italics_1 = '';
            var italics_2 = '';
            var italics_3 = '';
            var boald_1 = '';
            var boald_2 = '';
            var boald_3 = '';
            if ($('.transparentContainer').hasClass('label-inverse')) {
                trans_1 = 'label-inverse';
            }
            if ($('.transparentLit').hasClass('label-inverse')) {
                trans_2 = 'label-inverse';
            }
            if ($('.italicsContainer').hasClass('label-inverse')) {
                italics_1 = 'label-inverse';
            }
            if ($('.italicsLit').hasClass('label-inverse')) {
                italics_2 = 'label-inverse';
            }
            if ($('.italicsTitle').hasClass('label-inverse')) {
                italics_3 = 'label-inverse';
            }
            if ($('.boldContainer').hasClass('label-inverse')) {
                boald_1 = 'label-inverse';
            }
            if ($('.boldLit').hasClass('label-inverse')) {
                boald_2 = 'label-inverse';
            }
            if ($('.boldTitle').hasClass('label-inverse')) {
                boald_3 = 'label-inverse';
            }
            var data = {
                action: 'SAVE',
                data: {
                    container: {
                        //countainer props
                        c_rc_1: $('.save_RoundCorner_TL').val(),
                        c_rc_2: $('.save_RoundCorner_TR').val(),
                        c_rc_3: $('.save_RoundCorner_BL').val(),
                        c_rc_4: $('.save_RoundCorner_BR').val(),
                        c_bg_c: $('.save_BackgroundColor_1').val(),
                        c_bd_c: $('.save_BorderColor_1').val(),
                        c_ft_c: $('.save_FontColor_1').val(),
                        c_brd: $('.save_BorderWidth_1').val(),
                        c_opc: $('.save_Opacity1').val(),
                        c_wid: $('.save_Width_1').val(),
                        c_hei: $('.save_Height_1').val(),
                        c_txt: $('.save_Text_1').val(),
                        c_txt_l: '',
                        c_txt_r: '',
                        c_txt_t: '',
                        c_txt_d: '',
                        c_txt_fnt_sz: $('.fontSize1').val(),
                        c_txt_spc: $('.fontSpacing1').val(),
                        background_img: $('.save_Image_1').val(),
                        //gen props
                        save_name: $('.save_name').val(),
                        html: $('.box_html').html()

                    },
                    lit: {
                        //lit props
                        l_rc_1: $('.lit_prop.save_RoundCorner_TL').val(),
                        l_rc_2: $('.lit_prop.save_RoundCorner_TR').val(),
                        l_rc_3: $('.lit_prop.save_RoundCorner_BL').val(),
                        l_rc_4: $('.lit_prop.save_RoundCorner_BR').val(),
                        l_bg_c: $('.lit_prop.save_BackgroundColor_1').val(),
                        l_ft_c: $('.lit_prop.save_FontColor_1').val(),
                        l_tl_c: $('.lit_prop.save_TitleColor_1').val(),
                        l_dv_c: $('.lit_prop.save_DividerColor_1').val(),
                        l_dv: $('#litDivider').attr('checked'),
                        l_entr: entrance,
                        l_opc: $('.lit_prop.save_Opacity2').val(),
                        l_titl: $('.lit_prop.title').val(),
                        l_titl_u: '',
                        l_titl_d: '',
                        l_titl_l: '',
                        l_titl_r: '',
                        l_titl_fnt_sz: $('.lit_prop.fontSizeT').val(),
                        l_txt: $('.save_Text_2').val(),
                        l_txt_l: '',
                        l_txt_r: '',
                        l_txt_t: '',
                        l_txt_d: '',
                        l_txt_fnt_sz: $('.fontSize2').val(),
                        l_txt_spc: $('.fontSpacing2').val(),
                        l_titl_lnk: $('.title_l').val(),
                        background_img_2: $('.save_Image_2').val(),
                        trans_1: trans_1,
                        trans_2: trans_2,
                        italics_1: italics_1,
                        italics_2: italics_2,
                        italics_3: italics_3,
                        boald_1: boald_1,
                        boald_2: boald_2,
                        boald_3: boald_3
                    }
                }
            };
            // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
            $.post(ajaxurl, data, function(resp) {
                if (resp.Type == "success") {
                    controls();
                    $('.centerOuterDiv').addClass('animated fadeIn');
                    setTimeout(function() {
                        $('.centerOuterDiv').removeClass('animated fadeIn');
                    }, 200);
                }
                if (resp.Type == 'action') {
                    getModal(resp.Type, {'head': resp.Heading, 'body': resp.Messege, 'action': {'default': resp.Action.def, 'pertinent': resp.Action.pertinent, 'call': 'overwrite', 'pertinent_id': resp.Action.pertinent_id}});
                } else {
                    getModal(resp.Type, {'head': resp.Heading, 'body': resp.Messege});
                }
            });
        }
    });

    function reset() {
        $('.box_html.centerDiv').html('<div id="square_preview" class="squareDemo shape box" style="background-color: rgb(185, 185, 185); border-color: rgb(0, 0, 0); width: 200px; height: 200px;"> <span class="textArea" style="height: 150px; width: 180px;">This is a fully customizable box builder plug-in. Display marketing info, images, text etc... as you wish</span> <div entrance="1" id="square-lit" class="squareLitDemo shape" style="height: 200px; width: 200px; top: 160px;"> <a class="title_2 title_link_out"><h3 class="title">TITLE</h3></a> <hr class="divLit"> <div class="textAreaWrapper"> <span class="textArea" style="height: 150px; width: 180px;"> This is a fully customizable box builder plug-in. Display marketing info, images, text etc... as you wish </span> </div> </div> </div>')
    }

    function menu() {
        $('.edit').on('click', function() {
            var self = this;
            if (typeof this.id != 'undefined') {
                $('.box_html.centerDiv').html('');
                var data = {
                    action: 'GET_BOX',
                    id: self.id.replace('edit_', '')
                };
                // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
                $.post(ajaxurl, data, function(box) {
                    $('.box_html.centerDiv').html('');
                    var html = box[0].box_html.replace(/\\/g, '');
                    $('.box_html.centerDiv').html(html);
                    $('html, body').animate({scrollTop: 0}, 'slow');
                    //preview ready
                    $('.top_side_1 .save_RoundCorner_TL').val(box[0].c_rc_1);
                    $('.top_side_1 .save_RoundCorner_TR').val(box[0].c_rc_2);
                    $('.top_side_1 .save_RoundCorner_BL').val(box[0].c_rc_3);
                    $('.top_side_1 .save_RoundCorner_BR').val(box[0].c_rc_4);
                    $('.top_side_1 .save_BackgroundColor_1').val(box[0].c_bg_c);
                    $('.top_side_1 .save_BorderColor_1').val(box[0].c_bd_c);
                    $('.top_side_1 .save_FontColor_1').val(box[0].c_ft_c);
                    $('.top_side_1 .save_BorderWidth_1').val(box[0].c_brd);
                    $('.top_side_1 .save_Opacity1').val(box[0].c_opc);
                    opacity();
                    $('.top_side_1 .save_Width_1').val(box[0].c_wid);
                    $('.top_side_1 .save_Height_1').val(box[0].c_hei);
                    $('.top_side_1 .save_Text_1').val(box[0].c_txt);
                    $('.top_side_1 .fontSize1').val(box[0].c_txt_fnt_sz);
                    $('.top_side_1 .fontSpacing1').val(box[0].c_txt_spc);
                    //bottom part
                    if (box[0].l_entr != 1) {
                        $('#hEffect option:contains("' + box[0].l_entr + '")').prop('selected', true);
                        $('.entranceOpts > input').attr('disabled', 'disabled');
                    }
                    else {
                        $('#hEffect option:contains("Slide")').prop('selected', true);
                        $('.entranceOpts > input').removeAttr('disabled');
                    }
                    $('.lit_prop.save_RoundCorner_TL').val(box[0].l_rc_1);
                    $('.lit_prop.save_RoundCorner_TR').val(box[0].l_rc_2);
                    $('.lit_prop.save_RoundCorner_BL').val(box[0].l_rc_3);
                    $('.lit_prop.save_RoundCorner_BR').val(box[0].l_rc_4);
                    $('.lit_prop.save_BackgroundColor_1').val(box[0].l_bg_c);
                    $('.lit_prop.save_FontColor_1').val(box[0].l_ft_c);
                    $('.lit_prop.save_TitleColor_1').val(box[0].l_tl_c);
                    $('.lit_prop.save_DividerColor_1').val(box[0].l_dv_c);
                    if (box[0].l_dv == '' || box[0].l_dv == null) {
                        $('#litDivider').removeAttr('checked');
                    } else
                        $('#litDivider').attr('checked', box[0].l_dv);
                    $('.lit_prop.save_Opacity2').val(box[0].l_opc);
                    opacityLit();
                    $('.lit_prop.title.span11').val(box[0].l_titl);
                    $('.lit_prop.fontSizeT').val(box[0].l_titl_fnt_sz);
                    $('.save_Text_2').val(box[0].l_txt);
                    $('.fontSize2').val(box[0].l_txt_fnt_sz);
                    $('.fontSpacing2').val(box[0].l_txt_spc);
                    $('.title_l').val(box[0].l_titl_lnk);
                    $('.transparentContainer').addClass(box[0].trans_1);
                    $('.transparentLit').addClass(box[0].trans_2);
                    $('.italicsContainer').addClass(box[0].italics_1);
                    $('.italicsLit').addClass(box[0].italics_2);
                    $('.italicsTitle').addClass(box[0].italics_3);
                    $('.boldContainer').addClass(box[0].boald_1);
                    $('.boldLit').addClass(box[0].boald_2);
                    $('.boldTitle').addClass(box[0].boald_3);
                    //end preview ready
                    hoverEffect();
                    $LIT = $('.squareLitDemo.shape');
                    $BOX = $('.squareDemo.shape.box');
                    $('.save_name').val(box[0].title);
                });
            }
        });
        $('.remove').on('click', function() {
            getModal('action', {'head': 'Are you sure you want to Delte this?', 'body': 'If you completly delete this, it will also be removed from anywhere it is being used, or you can: <a href="google.com">Delete it but keep it anywhere its being used</a>', action: {'pertinent': 'Completly Delete', 'def': 'Delete but keep in website', 'call': 'comp_delete', 'pertinent_id': this.id.replace('del_', '')}});

        });
    }

    function containerTitle() {
        $('.containerTitle .title').on('change', function() {
            $('#square-lit .title').html($(this).val());
        });
    }

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('#square_preview').css({'background': 'transparent url(' + e.target.result + ') left top no-repeat', 'background-size': '100%'});
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    function qPod_Text1() {
        var U = 0;
        var L = 0;
        var U2 = 0;
        var L2 = 0;
        var U3 = 0;
        var L3 = 0;
        $('.qPod').on('click', function() {
            switch (this.id) {
                case 'qPodU':
                    U = U + 2;
                    $('.shape.squareDemo > .textArea').css('margin-top', -U);
                    break
                case 'qPodL':
                    L = L + 2;
                    $('.shape.squareDemo > .textArea').css('margin-left', -L);
                    break
                case 'qPodR':
                    L = L - 2;
                    $('.shape.squareDemo > .textArea').css('margin-left', -L);
                    break
                case 'qPodD':
                    U = U - 2;
                    $('.shape.squareDemo > .textArea').css('margin-top', -U);
                    break
            }
        });
        $('.qPod2').on('mouseenter', function() {
            topVal = $(".shape.squareLitDemo").css('top');
            $('.shape.squareLitDemo').css('top', '0');
        });
        $('.qPod2').on('mouseleave', function() {
            $('.shape.squareLitDemo').css('top', topVal);
        });
        $('.qPod2').on('click', function() {
            switch (this.id) {
                case 'qPodU':
                    U2 = U2 + 2;
                    $('.shape.squareLitDemo > .textAreaWrapper').css('margin-top', -U2);
                    break
                case 'qPodL':
                    L2 = L2 + 2;
                    $('.shape.squareLitDemo > .textAreaWrapper').css('margin-left', -L2);
                    break
                case 'qPodR':
                    L2 = L2 - 2;
                    $('.shape.squareLitDemo > .textAreaWrapper').css('margin-left', -L2);
                    break
                case 'qPodD':
                    U2 = U2 - 2;
                    $('.shape.squareLitDemo > .textAreaWrapper').css('margin-top', -U2);
                    break
            }
        });
        $('.qPod3').on('click', function() {
            switch (this.id) {
                case 'qPodU':
                    if (U3 <= 0) {
                        U3 = 0;
                    }
                    U3 = U3 - 2;
                    $('.shape.squareLitDemo > a .title').css('padding-top', U3);
                    break
                case 'qPodL':
                    L3 = L3 + 2;
                    $('.shape.squareLitDemo > a .title').css('margin-left', -L3);
                    break
                case 'qPodR':
                    L3 = L3 - 2;
                    $('.shape.squareLitDemo > a .title').css('margin-left', -L3);
                    break
                case 'qPodD':
                    U3 = U3 + 2;
                    $('.shape.squareLitDemo > a .title').css('padding-top', U3);
                    break
            }
        });
    }

    function dividerLit() {
        $('#litDivider').on('change', function() {
            if ($(this).attr('checked')) {
                $('.divLit').removeClass('hidden');
            } else {
                $('.divLit').addClass('hidden');
            }
        });
    }

    function adjustSize() {
        $('.textArea').css('height', $('.shape.squareDemo').height() - 50);
        $('.textArea').css('width', $('.shape.squareDemo').width() - 20);
        if ($(".squareLitDemo").attr("entrance") == 1 || $(".squareLitDemo").attr("entrance") == 2) {
            $('.shape.squareDemo .squareLitDemo').css('height', $('.shape.squareDemo').height());
            $('.shape.squareDemo .squareLitDemo').css('width', $('.shape.squareDemo').width());
        }
        else if ($(".squareLitDemo").attr("entrance") == 3 || $(".squareLitDemo").attr("entrance") == 4) {
            $('.shape.squareDemo .squareLitDemo').css('height', $('.shape.squareDemo').height());
            $('.shape.squareDemo .squareLitDemo').css('width', $('.shape.squareDemo').width());
            $('.shape.squareDemo .squareLitDemo').css('top', '0');
        } else if ($(".squareLitDemo").attr("entrance") == 'effect') {
            $('.shape.squareDemo .squareLitDemo').css('width', $('.shape.squareDemo').width());
            $('.shape.squareDemo .squareLitDemo').css('height', $('.shape.squareDemo').height());
        }
        height_val = $('#square_preview').height();
        width_val = $('#square_preview').width();
        title_val = $('#square_preview h3.title').height();
        $('.squareDemo.shape.box').mouseenter();
        $('.squareDemo.shape.box').mouseleave();
        if ($('.squareDemo.shape.box').width() > 500) {
            $('.main_container').width(1208)
            $('.main_container').width($('.main_container').width() + $('.squareDemo.shape.box').width() - 200 + 'px');
        }
        else {
            $('.main_container').width(1108);
        }
        if ($('.squareDemo.shape.box').height() > 750) {
            $('.historyContainer').css('margin-top', $('.squareDemo.shape.box').height() - 700 + 'px');
        }
        else {
            $('.historyContainer').css('margin-top', '0');
        }



    }
    function openPreview() {
        $('.shape.squareDemo').css('border-radius', $('.save_RoundCorner_1').val() + 'px');
        $('.shape.squareDemo').css('border-width', $('.save_BorderWidth_1').html().replace(' %', '') + '%');
        $('.shape.squareDemo').css('background-color', $('.save_BackgroundColor_1').val());
        $('.shape.squareDemo').css('border-color', $('.save_BorderColor_1').val());
        $('.shape.squareDemo > .textArea').html($('.save_Text_1').val());
        $('.shape.squareDemo').css('width', $('.save_Width_1').val());
        $('.shape.squareDemo').css('height', $('.save_Height_1').val());
        //lit
        $('.shape.squareLitDemo').css('background-color', $('.save_BackgroundColor_2').val());
        $('.shape.squareLitDemo > .textArea').html($('.save_Text_2').val());
    }
    function controls() {

        // $('#get_history').on('click', function() {
        var data = {
            action: 'GET_SAVED_BOXES',
            data: {}
        };
        // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
        $.post(ajaxurl, data, function(boxes) {
            $('.resulst_Boxes').html('');
            $.each(boxes, function(index, box) {
                var html = box.box_html.replace(/\\/g, '');
                var html = html.replace('square', 'square_' + box.id);
                var html = html.replace('shape', 'shape2');
                var html = html.replace('textArea', 'textArea2');
                var html = html.replace('title', 'title2');
                var html = html.replace('squareDemo', 'squareDemo squareDemo_history ');
                var html = html.replace('squareLitDemo', 'squareLitDemo2 squareDemo_history');
                $('.resulst_Boxes').append('<tr><td><button id="del_' + box.id + '" class="btn span12 btn-danger btn-mini remove">Delete</button><button id="edit_' + box.id + '" class="btn btn-warning span12 btn-mini edit">Edit</button></td><td>' + box.title + '</td><td>' + box.date_created + '</td><td class="html_render_' + box.id + '"></td><td>' + box.short_code.replace('test', box.id) + '</td></tr>');
                $('.html_render_' + box.id).html(html);
                //hoverEffect_history(box.entrance_2, box.id);
            });
            hoverEffect_history();
            menu();
        });
        //});
    }
    function hoverEffect() {
        $('#square_preview').unbind("hover");
        $('#square_preview').hover(function() {
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
                if (!$BOX.hasClass('maskImg')) {
                    $BOX.addClass('maskImg');
                }
                $LIT.removeClass('animated ' + $LIT.attr('out')).addClass('animated ' + $LIT.attr('in'));
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
                $LIT.removeClass('animated ' + $LIT.attr('in')).addClass('animated ' + $LIT.attr('out'));
            }
        });
    }
    function hoverEffect_history() {
        $('.squareDemo_history').unbind("hover");
        $('.squareDemo_history').hover(function() {
            if ($(this).find(".squareLitDemo2").attr("entrance") == 1) {
                $(this).find(".squareLitDemo2").animate({top: '0'}, {queue: false, duration: 400});
            }
            else if ($(this).find(".squareLitDemo2").attr("entrance") == 2) {
                $(this).find(".squareLitDemo2").animate({top: '0'}, {queue: false, duration: 400});
            }
            else if ($(this).find(".squareLitDemo2").attr("entrance") == 3) {
                $(this).find(".squareLitDemo2").animate({right: '0'}, {queue: false, duration: 400});
            }
            else if ($(this).find(".squareLitDemo2").attr("entrance") == 4) {
                $(this).find(".squareLitDemo2").animate({right: '0'}, {queue: false, duration: 400});
            }
            ////////////not slide//////////
            else if ($(this).find(".squareLitDemo2").attr("entrance") == 'effect') {
                if (!$(this).find(".squareLitDemo2").hasClass('maskImg')) {
                    $(this).find(".squareLitDemo2").addClass('maskImg');
                }
                $(this).find(".squareLitDemo2").removeClass('animated ' + $(this).find(".squareLitDemo2").attr('out')).addClass('animated ' + $(this).find(".squareLitDemo2").attr('in'));
            }
        }, function() {
            if ($(this).find(".squareLitDemo2").attr("entrance") == 1) {
                $(this).find(".squareLitDemo2").animate({top: height_val - title_val}, {queue: false, duration: 400});
            }
            else if ($(this).find(".squareLitDemo2").attr("entrance") == 2) {
                $(this).find(".squareLitDemo2").animate({top: -(height_val - title_val)}, {queue: false, duration: 400});
            }
            else if ($(this).find(".squareLitDemo2").attr("entrance") == 3) {
                console.log('width_val ', width_val)
                $(this).find(".squareLitDemo2").animate({right: width_val}, {queue: false, duration: 400});
            }
            else if ($(this).find(".squareLitDemo2").attr("entrance") == 4) {
                $(this).find(".squareLitDemo2").animate({right: -width_val}, {queue: false, duration: 400});
            }
            ////////////not slide//////////
            else if ($(this).find(".squareLitDemo2").attr("entrance") == 'effect') {
                $(this).find(".squareLitDemo2").removeClass('animated ' + $(this).find(".squareLitDemo2").attr('in')).addClass('animated ' + $(this).find(".squareLitDemo2").attr('out'));
            }
        });
    }
    function roundCorners() {
        if ($('.rCorners .input-append .displayValue').val() == '')
            $('.rCorners .input-append .displayValue').val(0);
        var corners = $('.rCorners .input-append .displayValue').val();

        var increment = 1;

        $('.rCorners .input-append .displayValue.save_RoundCorner_TL').on('change', function() {
            corners = $(this).val();
            $('.shape.squareDemo').css('border-top-left-radius', corners + 'px');
        });
        $('.rCorners .input-append .displayValue.save_RoundCorner_TR').on('change', function() {
            corners = $(this).val();
            $('.shape.squareDemo').css('border-top-right-radius', corners + 'px');
        });
        $('.rCorners .input-append .displayValue.save_RoundCorner_BR').on('change', function() {
            corners = $(this).val();
            $('.shape.squareDemo').css('border-bottom-right-radius', corners + 'px');
        });
        $('.rCorners .input-append .displayValue.save_RoundCorner_BL').on('change', function() {
            corners = $(this).val();
            $('.shape.squareDemo').css('border-bottom-left-radius', corners + 'px');
        });
    }
    function roundCorners2() {
        if ($('.rCorners2 .input-append .displayValue').val() == '')
            $('.rCorners2 .input-append .displayValue').val(0);
        var corners = $('.rCorners2 .input-append .displayValue').val();

        var increment = 1;

        $('.rCorners2 .input-append .displayValue.save_RoundCorner_TL').on('change', function() {
            corners = $(this).val();
            $('.shape.squareLitDemo').css('border-top-left-radius', corners + 'px');
        });
        $('.rCorners2 .input-append .displayValue.save_RoundCorner_TR').on('change', function() {
            corners = $(this).val();
            $('.shape.squareLitDemo').css('border-top-right-radius', corners + 'px');
        });
        $('.rCorners2 .input-append .displayValue.save_RoundCorner_BR').on('change', function() {
            corners = $(this).val();
            $('.shape.squareLitDemo').css('border-bottom-right-radius', corners + 'px');
        });
        $('.rCorners2 .input-append .displayValue.save_RoundCorner_BL').on('change', function() {
            corners = $(this).val();
            $('.shape.squareLitDemo').css('border-bottom-left-radius', corners + 'px');

        });
    }
    function borderWidth() {
        if ($('.borderWidth .input-append .displayValue').val() == '')
            $('.borderWidth .input-append .displayValue').val(0);
        var corners = $('.borderWidth .input-append .displayValue').val();
        var increment = 1;
        $('.borderWidth_add').on('click', function() {
            if (corners < 100) {
                if (corners > 70) {
                    $('.shape.squareDemo > .textArea').css('margin-top', increment);
                    increment++;
                }
                corners++;
                $('.borderWidth .input-append .displayValue').val(corners);
                $('.shape.squareDemo').css('border-width', corners + 'px');
            }
        });
        $('.borderWidth_less').on('click', function() {
            if (corners > 0) {
                if (corners > 70) {
                    $('.shape.squareDemo > .textArea').css('margin-top', increment);
                    increment--;
                }
                corners--;
                $('.borderWidth .input-append .displayValue').val(corners);
                $('.shape.squareDemo').css('border-width', corners + 'px');
            }
        });
        $('.borderWidth .input-append .displayValue').on('change', function() {
            corners = $(this).val();
            $('.shape.squareDemo').css('border-width', corners + 'px');
        });
    }
    function opacity() {
        var opacity = Number($('.save_Opacity1').val());
        $('.opacity_add').on('click', function() {
            if (opacity < 1) {
                opacity = opacity + 0.1;
                $('.opacity > .badge').html(opacity);
                $('.shape.squareDemo').css('opacity', opacity);
            }
            $('.save_Opacity1').val(opacity);
        });
        $('.opacity_less').on('click', function() {
            if (opacity > 0) {
                opacity = opacity - 0.1;
                $('.opacity > .badge').html(opacity);
                $('.shape.squareDemo').css('opacity', opacity);
            }
            $('.save_Opacity1').val(opacity);
        });
    }
    function bColor() {
        $('.bColor > .resetBtn').on('click', function() {
            $('.shape.squareDemo').css('background-color', '#B9B9B9');
            $('.bColor > .colorInput').val('#B9B9B9');
            $('.transparentContainer').removeClass("label-inverse");
        });
        $('.bColor > .setBtn').on('click', function() {
            $('.transparentContainer').removeClass("label-inverse");
            $('.shape.squareDemo').css('background-color', $('.bColor > .colorInput').val());
        });
    }
    function transparent() {
        $('.transparentContainer').on('click', function() {
            if ($(this).hasClass('label-inverse')) {
                $(this).removeClass("label-inverse");
                $('.shape.squareDemo').css('background-color', '#B9B9B9');
            } else {
                $(this).addClass("label-inverse");
                $('.shape.squareDemo').css('background-color', 'transparent');
            }

        });
        $('.transparentLit').on('click', function() {
            if ($(this).hasClass('label-inverse')) {
                $(this).removeClass("label-inverse");
                $('.shape.squareLitDemo').css('background-color', '#000000');
            } else {
                $(this).addClass("label-inverse");
                $('.shape.squareLitDemo').css('background-color', 'transparent');
            }

        });
    }
    function fontProp1() {
        $('.italicsContainer').on('click', function() {
            if ($(this).hasClass('label-inverse')) {
                $(this).removeClass("label-inverse");
                $('.shape.squareDemo > .textArea').css('font-style', 'initial');
            } else {
                $(this).addClass("label-inverse");
                $('.shape.squareDemo > .textArea').css('font-style', 'italic');
            }

        });
        $('.boldContainer').on('click', function() {
            if ($(this).hasClass('label-inverse')) {
                $(this).removeClass("label-inverse");
                $('.shape.squareDemo > .textArea').css('font-weight', 'initial');
            } else {
                $(this).addClass("label-inverse");
                $('.shape.squareDemo > .textArea').css('font-weight', 'bold');
            }

        });
        $('.boldLit').on('click', function() {
            if ($(this).hasClass('label-inverse')) {
                $(this).removeClass("label-inverse");
                $('.shape.squareLitDemo > .textAreaWrapper > .textArea').css('font-weight', 'initial');
            } else {
                $(this).addClass("label-inverse");
                $('.shape.squareLitDemo > .textAreaWrapper > .textArea').css('font-weight', 'bold');
            }
        });
        $('.italicsLit').on('click', function() {
            if ($(this).hasClass('label-inverse')) {
                $(this).removeClass("label-inverse");
                $('.shape.squareLitDemo > .textAreaWrapper > .textArea').css('font-style', 'initial');
            } else {
                $(this).addClass("label-inverse");
                $('.shape.squareLitDemo > .textAreaWrapper > .textArea').css('font-style', 'italic');
            }
        });
        $('.boldTitle').on('click', function() {
            if ($(this).hasClass('label-inverse')) {
                $(this).removeClass("label-inverse");
                $('.title').css('font-weight', 'initial');
            } else {
                $(this).addClass("label-inverse");
                $('.title').css('font-weight', 'bold');
            }
        });
        $('.italicsTitle').on('click', function() {
            if ($(this).hasClass('label-inverse')) {
                $(this).removeClass("label-inverse");
                $('.title').css('font-style', 'initial');
            } else {
                $(this).addClass("label-inverse");
                $('.title').css('font-style', 'italic');
            }
        });
        $('.fontSize1').on('change', function() {
            $('.shape.squareDemo > .textArea').css('font-size', $(this).val() + 'px');
        });
        $('.fontSpacing1').on('change', function() {
            $('.shape.squareDemo > .textArea').css('line-height', $(this).val() + 'px');
        });
        $('.fontSize2').on('change', function() {
            $('.shape.squareLitDemo > .textAreaWrapper > .textArea').css('font-size', $(this).val() + 'px');
        });
        $('.fontSpacing2').on('change', function() {
            $('.shape.squareLitDemo > .textAreaWrapper > .textArea').css('line-height', $(this).val() + 'px');
        });
        $('.fontSizeT').on('change', function() {
            $('h3.title').css('font-size', $(this).val() + 'px');
        });
    }
    function borderColor() {
        $('.borderColor > .resetBtn').on('click', function() {
            $('.shape.squareDemo').css('border-color', '#5bb75b');
            $('.borderColor > .borderInput').val('#5bb75b');
        });
        $('.borderColor > .setBtn').on('click', function() {
            $('.shape.squareDemo').css('border-color', $('.borderColor >.borderInput').val());
        });
    }
    function fontColor() {
        $('.fontColor > .resetBtn').on('click', function() {
            $('.shape.squareDemo .textArea').css('color', '#000');
            $('.fontColor > .borderInput').val('#000');
        });
        $('.fontColor > .setBtn').on('click', function() {
            $('.shape.squareDemo > .textArea').css('color', $('.fontColor >.borderInput').val());
        });
    }
    function fontColor2() {
        $('.fontColor2 > .resetBtn').on('click', function() {
            $('.shape.squareLitDemo > .textAreaWrapper .textArea').css('color', '#fff');
            $('.fontColor2 > .borderInput').val('#ffffff');
        });
        $('.fontColor2 > .setBtn').on('click', function() {
            $('.shape.squareLitDemo > .textAreaWrapper .textArea').css('color', $('.fontColor2 >.borderInput').val());
        });
    }
    function litTitleColor() {
        $('.litTitleColor > .resetBtn').on('click', function() {
            $('.shape.squareLitDemo > .title').css('color', '#fff');
            $('.litTitleColor > .borderInput').val('#ffffff');
        });
        $('.litTitleColor > .setBtn').on('click', function() {
            $('.shape.squareLitDemo h3.title').css('color', $('.litTitleColor >.borderInput').val());
        });
    }
    function litDividerColor() {
        $('.litDividerColor > .resetBtn').on('click', function() {
            $('.divLit').css('border-color', '#fff');
            $('.litDividerColor > .borderInput').val('#ffffff');
        });
        $('.litDividerColor > .setBtn').on('click', function() {
            $('.divLit').css('border-color', $('.litDividerColor >.borderInput').val());
        });
    }
    function containerText() {
        $('.containerText > .textInput').on('change', function() {
            $('.shape.squareDemo > .textArea').height($('#square_preview').height());
            $('.shape.squareDemo > .textArea').width($('#square_preview').width() - 20);
            $('.shape.squareDemo > .textArea').html($(this).val());
        });
    }
    function containerWidth() {
        $('.widthInput.displayValue.save_Width_1').on('change', function() {
            $('.shape.squareDemo').width($(this).val());
            if ($('.squareDemo.shape.box').width() > 500) {
                $('.main_container').width(1208)
                $('.main_container').width($('.main_container').width() + $('.squareDemo.shape.box').width() - 200 + 'px');
            }
            else {
                $('.main_container').width(1108);
            }
            adjustSize();
        });


    }
    function containerHeight() {
        $('.heighInput.displayValue.save_Height_1').on('change', function() {
            $('.shape.squareDemo').height($(this).val());
            if ($('.squareDemo.shape.box').height() > 750) {
                $('.historyContainer').css('margin-top', $('.squareDemo.shape.box').height() - 700 + 'px');
            }
            else {
                $('.historyContainer').css('margin-top', '0');
            }
            adjustSize();
        });
    }

    /*LIT PROPERTIES*/

    function opacityLit() {
        var opacity = Number($('.save_Opacity2').val());
        $('.opacity_addLit').on('click', function() {
            if (opacity < 1) {
                opacity = opacity + 0.1;
                $('.opacityLit > .badge').html(opacity);
                $('.shape.squareLitDemo').css('opacity', opacity);
                $('.save_Opacity2').val(opacity);
            }
        });
        $('.opacity_lessLit').on('click', function() {
            if (opacity > 0) {
                opacity = opacity - 0.1;
                $('.opacityLit > .badge').html(opacity);
                $('.shape.squareLitDemo').css('opacity', opacity);
                $('.save_Opacity2').val(opacity);
            }
        });
    }
    function bColorLit() {
        $('.bColorLit > .resetBtn').on('click', function() {
            $('.shape.squareLitDemo').css('background-color', '#5bb75b');
            $('.transparentLit').removeClass("label-inverse");
            $('.bColorLit .colorInput').val('#5bb75b');
        });
        $('.bColorLit > .setBtn').on('click', function() {
            $('.transparentLit').removeClass("label-inverse");
            $('.shape.squareLitDemo').css('background-color', $('.bColorLit > .colorInput').val());
        });
    }
    function containerLitText() {
        $('.containerLitText .textInput').on('change', function() {
            $('.shape.squareLitDemo > .textAreaWrapper .textArea').height($('#square_preview').height());
            $('.shape.squareLitDemo > .textAreaWrapper .textArea').width($('#square_preview').width() - 20);
            $('.shape.squareLitDemo > .textAreaWrapper .textArea').html($(this).val());
        });
    }
    function entranceOpts() {
        $('.entranceOpt').on('click', function() {
            switch ($(this)[0].value) {
                case '1':
                    $('.shape.squareLitDemo').css({'top': (height_val - title_val), 'margin-left': '0', 'right': 0, 'transform': 'rotate(0deg)', ' - ms - transform': 'rotate(0deg)', ' - webkit - transform': 'rotate(0deg)', '-webkit-transform-origin': ''});
                    $('.shape.squareLitDemo .textAreaWrapper').css({'padding-right': '14px', 'transform': 'rotate(0deg)', '-ms-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)'})
                    $('.shape.squareLitDemo h3.title').css({'transform': 'rotate(0deg)', '-ms-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)'});
                    $("#square_preview .squareLitDemo").attr("entrance", 1);
                    hoverEffect();
                    break
                case '2':
                    $('.shape.squareLitDemo').css({'top': -(height_val - title_val), 'right': 0, 'transform': 'rotate(-180deg)', '-ms-transform': 'rotate(-180deg)', '-webkit-transform': 'rotate(-180deg)', 'margin-left': '0', '-webkit-transform-origin': ''});
                    $('.shape.squareLitDemo .textAreaWrapper').css({'margin-top': '32px', 'transform': 'rotate(-180deg)', '-ms-transform': 'rotate(-180deg)', '-webkit-transform': 'rotate(-180deg)'});
                    $('.shape.squareLitDemo h3.title').css({'transform': 'rotate(180deg)', '-ms-transform': 'rotate(180deg)', '-webkit-transform': 'rotate(180deg)'});
                    $("#square_preview .squareLitDemo").attr("entrance", 2);
                    hoverEffect();
                    break;
                case '3':
                    $('.shape.squareLitDemo').css({'top': (height_val - title_val), 'margin-left': '0', 'right': 0, 'transform': 'rotate(0deg)', ' - ms - transform': 'rotate(0deg)', ' - webkit - transform': 'rotate(0deg)', '-webkit-transform-origin': ''});
                    $('.shape.squareLitDemo .textAreaWrapper').css({'padding-right': '14px', 'transform': 'rotate(0deg)', '-ms-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)'})
                    $('.shape.squareLitDemo h3.title').css({'transform': 'rotate(0deg)', '-ms-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)'});
                    $("#square_preview .squareLitDemo").attr("entrance", 3);
                    hoverEffect();
                    break
                case '4':
                    $('.shape.squareLitDemo').css({'top': (height_val - title_val), 'margin-left': '0', 'right': 0, 'transform': 'rotate(0deg)', ' - ms - transform': 'rotate(0deg)', ' - webkit - transform': 'rotate(0deg)', '-webkit-transform-origin': ''});
                    $('.shape.squareLitDemo .textAreaWrapper').css({'padding-right': '14px', 'transform': 'rotate(0deg)', '-ms-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)'})
                    $('.shape.squareLitDemo h3.title').css({'transform': 'rotate(0deg)', '-ms-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)'});
                    $("#square_preview .squareLitDemo").attr("entrance", 4);
                    hoverEffect();
                    break
            }
            adjustSize();


        });
    }
    function entranceEffs() {
        $("#hEffect").change(function() {
            if ($('option:selected', this).attr('in') != 'slide') {
                //reset to bottom
                var $radios = $('input:radio[name=entrance]');
                $radios.filter('[value=1]').prop('checked', true);
                $('.shape.squareLitDemo').css({'top': (height_val - title_val), 'margin-left': '0', 'right': 0, 'transform': 'rotate(0deg)', ' - ms - transform': 'rotate(0deg)', ' - webkit - transform': 'rotate(0deg)', '-webkit-transform-origin': ''});
                $('.shape.squareLitDemo .textAreaWrapper').css({'padding-right': '14px', 'transform': 'rotate(0deg)', '-ms-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)'})
                $('.shape.squareLitDemo h3.title').css({'transform': 'rotate(0deg)', '-ms-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)'});
                $("#square_preview .squareLitDemo").attr("entrance", 1);

                $('.entranceOpts > input').attr('disabled', 'disabled');
                $LIT.removeClass('animated flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight lightSpeedIn lightSpeedOut rollIn rollOut tada swing flash wobble pulse');
                $LIT.css({'top': '0'});
                $LIT.attr('entrance', 'effect');
                $LIT.attr('in', $('option:selected', this).attr('in'));
                $LIT.attr('out', $('option:selected', this).attr('out'));
                $LIT.addClass('animated ' + $('option:selected', this).attr('out'));
            }
            else {
                $('.entranceOpts > input').removeAttr('disabled');
                $LIT.removeClass('animated flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight lightSpeedIn lightSpeedOut rollIn rollOut tada swing flash wobble pulse');
                $LIT.attr('entrance', 1);
                $('.squareLitDemo.shape').mouseenter();
                $('.squareLitDemo.shape').mouseleave();
            }
        });
    }

    ///modals
    function getModal(type, content) {
        switch (type) {
            case 'error':
                get_error(content);
                break;
            case 'success':
                get_success(content);
                break;
            case 'action':
                get_action(content);
                break;
        }
    }

    function links_set() {
        $('.out_links .title_l').on('change', function() {
            $('.title_link_out').attr('href', $(this).val());
        });
    }

    function shadow_set() {
        $('.shadow_set .intensity .shadow_less_int').on('click', function() {

        });

        $('.toggle_shadow').on('click', function() {
            if ($(this).hasClass('on')) {
                $('.squareDemo.shape').css('box-shadow', '0px 0px 10px 0px');
                $(this).removeClass('on btn-inverse').addClass('off btn-danger').html('Remove Shadow');
            } else if ($(this).hasClass('off')) {
                $('.squareDemo.shape').css('box-shadow', '0px 0px 0px 0px');
                $(this).removeClass('off btn-danger').addClass('on btn-inverse').html('Add Shadow');
            }
        });
    }

    function do_pertinent(call, it) {
        if (call == 'overwrite') {
            var entrance = $("#hEffect option:selected").val();
            var trans_1 = '';
            var trans_2 = '';
            var italics_1 = '';
            var italics_2 = '';
            var italics_3 = '';
            var boald_1 = '';
            var boald_2 = '';
            var boald_3 = '';
            if ($('.transparentContainer').hasClass('label-inverse')) {
                trans_1 = 'label-inverse';
            }
            if ($('.transparentLit').hasClass('label-inverse')) {
                trans_2 = 'label-inverse';
            }
            if ($('.italicsContainer').hasClass('label-inverse')) {
                italics_1 = 'label-inverse';
            }
            if ($('.italicsLit').hasClass('label-inverse')) {
                italics_2 = 'label-inverse';
            }
            if ($('.italicsTitle').hasClass('label-inverse')) {
                italics_3 = 'label-inverse';
            }
            if ($('.boldContainer').hasClass('label-inverse')) {
                boald_1 = 'label-inverse';
            }
            if ($('.boldLit').hasClass('label-inverse')) {
                boald_2 = 'label-inverse';
            }
            if ($('.boldTitle').hasClass('label-inverse')) {
                boald_3 = 'label-inverse';
            }
            var data = {
                action: 'OVERWRITE_BOX',
                id: it.id,
                data: {
                    container: {
                        //countainer props
                        c_rc_1: $('.save_RoundCorner_TL').val(),
                        c_rc_2: $('.save_RoundCorner_TR').val(),
                        c_rc_3: $('.save_RoundCorner_BL').val(),
                        c_rc_4: $('.save_RoundCorner_BR').val(),
                        c_bg_c: $('.save_BackgroundColor_1').val(),
                        c_bd_c: $('.save_BorderColor_1').val(),
                        c_ft_c: $('.save_FontColor_1').val(),
                        c_brd: $('.save_BorderWidth_1').val(),
                        c_opc: $('.save_Opacity1').val(),
                        c_wid: $('.save_Width_1').val(),
                        c_hei: $('.save_Height_1').val(),
                        c_txt: $('.save_Text_1').val(),
                        c_txt_l: '',
                        c_txt_r: '',
                        c_txt_t: '',
                        c_txt_d: '',
                        c_txt_fnt_sz: $('.fontSize1').val(),
                        c_txt_spc: $('.fontSpacing1').val(),
                        background_img: $('.save_Image_1').val(),
                        //gen props
                        save_name: $('.save_name').val(),
                        html: $('.box_html').html()

                    },
                    lit: {
                        //lit props
                        l_rc_1: $('.lit_prop.save_RoundCorner_TL').val(),
                        l_rc_2: $('.lit_prop.save_RoundCorner_TR').val(),
                        l_rc_3: $('.lit_prop.save_RoundCorner_BL').val(),
                        l_rc_4: $('.lit_prop.save_RoundCorner_BR').val(),
                        l_bg_c: $('.lit_prop.save_BackgroundColor_1').val(),
                        l_ft_c: $('.lit_prop.save_FontColor_1').val(),
                        l_tl_c: $('.lit_prop.save_TitleColor_1').val(),
                        l_dv_c: $('.lit_prop.save_DividerColor_1').val(),
                        l_dv: $('#litDivider').attr('checked'),
                        l_entr: entrance,
                        l_opc: $('.lit_prop.save_Opacity2').val(),
                        l_titl: $('.lit_prop.title').val(),
                        l_titl_u: '',
                        l_titl_d: '',
                        l_titl_l: '',
                        l_titl_r: '',
                        l_titl_fnt_sz: $('.lit_prop.fontSizeT').val(),
                        l_txt: $('.save_Text_2').val(),
                        l_txt_l: '',
                        l_txt_r: '',
                        l_txt_t: '',
                        l_txt_d: '',
                        l_txt_fnt_sz: $('.fontSize2').val(),
                        l_txt_spc: $('.fontSpacing2').val(),
                        l_titl_lnk: $('.title_l').val(),
                        background_img_2: $('.save_Image_2').val(),
                        trans_1: trans_1,
                        trans_2: trans_2,
                        italics_1: italics_1,
                        italics_2: italics_2,
                        italics_3: italics_3,
                        boald_1: boald_1,
                        boald_2: boald_2,
                        boald_3: boald_3
                    }
                }
            };
            $.post(ajaxurl, data, function(resp) {
                if (resp.Type == "success") {
                    controls();
                    $('.centerOuterDiv').addClass('animated fadeIn');
                    setTimeout(function() {
                        $('.centerOuterDiv').removeClass('animated fadeIn')
                    }, 200);
                }
                if (resp.Type == 'action') {
                    getModal(resp.Type, {'head': resp.Heading, 'body': resp.Messege, 'action': {'default': resp.Action.def, 'pertinent': resp.Action.pertinent, 'pertinent_id': resp.Action.pertinent_id}});
                } else {
                    getModal(resp.Type, {'head': resp.Heading, 'body': resp.Messege});
                }
            });
        } else if (call == 'comp_delete') {
            var data = {
                action: 'DELETE_BOX',
                id: it.id
            };
            $.post(ajaxurl, data, function() {
                getModal('success', {'head': 'Sucessfully Deleted', 'body': 'The item has been sucessfully deleted'});
                controls();
            });
        }
    }

    function get_error(content) {
        var head = content.head;
        var body = content.body;
        $('.modals_container').html('<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-header label-important"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button> <h3 id="myModalLabel">' + head + '</h3> </div> <div class="modal-body"> <p>' + body + '</p> </div> <div class="modal-footer"> <button class="btn btn-inverse" data-dismiss="modal" aria-hidden="true">OK</button></div></div>');
        $('#myModal').modal('show');
        $('#myModal').addClass('in');
    }
    function get_success(content) {
        var head = content.head;
        var body = content.body;
        $('.modals_container').html('<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-header label-success"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button> <h3 id="myModalLabel">' + head + '</h3> </div> <div class="modal-body"> <p>' + body + '</p> </div> <div class="modal-footer"> <button class="btn btn-inverse" data-dismiss="modal" aria-hidden="true">OK</button></div></div>');
        $('#myModal').modal('show');
        $('#myModal').addClass('in');
    }
    function get_action(content) {
        var head = content.head;
        var body = content.body;
        $('.modals_container').html('<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-header label-warning"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button> <h3 id="myModalLabel">' + head + '</h3> </div> <div class="modal-body"> <p>' + body + '</p> </div> <div class="modal-footer"> <button class="btn btn-inverse" data-dismiss="modal" aria-hidden="true">Cancel</button><button data-dismiss="modal" aria-hidden="true" id="' + content.action.pertinent_id + '" class="btn btn-warning action_pertinent">' + content.action.pertinent + '</button></div></div>');
        $('#myModal').modal('show');
        $('#myModal').addClass('in');
        $('.action_pertinent').on('click', function() {
            do_pertinent(content.action.call, this);
        });
    }
    $('.help-me').on('click', function() {
        $('html, body').animate({scrollTop: 0}, 'slow');

        $('.modals_container').html('<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false" style="display: block;"> <div class="modal-header label-success"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button> <h3 id="myModalLabel">Help</h3> </div> <div class="modal-body"> <h4>How to use this plug-in:</h4> <div class="row-fluid"> <div class="span12"> <div class="span12"> <div class="span6"> <div class="arrow-left"></div> <p class="pull-left" style="text-align: left; width: 200px; margin-left: 10px;"> TOP-LEFT-CORNER: Menu - save a slide box or create new one from scratch </p> </div> <div class="span6"> <div class="arrow-right"></div> <p class="pull-right" style="text-align: right; width: 200px; margin-right: 10px;"> TOP-RIGHT-CORNER: Properties - All the properties you can set for the slide box </p> </div> </div> <br> <br> <br> <br> <br> <br> <br> <br> <div class="span12"> <div class="span6"> <div class="arrow-left"></div> <p class="pull-left" style="text-align: left; width: 200px; margin-left: 10px;"> MID-LEFT: Preview - Live preview of your slide box </p> </div> <div class="span6"> <p class="pull-right" style="text-align: right; width: 200px; margin-right: 10px;"> BOTTOM: History - All your saved slide boxes </p> <div style="clear: both"></div> <div class="arrow-down"></div> </div> </div> </div> </div> <div class="row-fluid"> <p>Once you have created and saved a slide box, copy the shortcode from the history table and paste it anywhere in your site (<i>page, post or anywhere you can render HTML</i>)</p> </div> </div> <div class="modal-footer"> <button class="btn" data-dismiss="modal">Close</button> </div></div>');
        $('#myModal').modal('show');
        $('#myModal').addClass('in');
    });
    $('.share-box').on('click', function() {
        if ($('.save_name').val() != '') {
            var data = {
                action: 'SHARE_BOX',
                save_name: $('.save_name').val(),
            };
            $.post(ajaxurl, data, function(resp) {
                var href = 'http://www.facebook.com/share.php?u=' + resp.page_url.replace('localhost:8888', 'wpvisualslideboxbuilder.com');
                // $('.lins_menu_wrapper .shareFB').html("<a class='share_fb' href='http://www.facebook.com/share.php?u=" + href + "'>Share</a>");
                window.location.href = href; //causes the browser to refresh and load the requested url
            });
        } else {
            getModal('error', {'head': 'Invalid Name', 'body': 'Must name your slide box before you share it!'});
        }

    });
    $('.why-share').on('click', function() {
        $('.modals_container').html('<div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false" style="display: block;"> <div class="modal-header label-success"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button> <h3 id="myModalLabel">Why Share?</h3> </div> <div class="modal-body"> <p>When you share your slide box you are creating an oportunity for others to visit your site; thus generating potential traffic to your site.</p> </div> <div class="modal-footer"> <button class="btn" data-dismiss="modal">Close</button> </div></div>');
        $('#myModal').modal('show');
        $('#myModal').addClass('in');
    });
});