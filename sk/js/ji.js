$.fn.extend({
    
})
$(function(){
    //开始JS
    $('.close').click(function(){
        $('.remind').fadeOut(300);
    });
    $('.base_btn ul li').hover(function(){
        $(this).find('.hoverBg').show();
    },function(){
        $(this).find('.hoverBg').hide();
    });
    $('.site_tip ul li').hover(function(){
        $(this).find('.site_con_right_BtnBg').show();
    },function(){
        $(this).find('.site_con_right_BtnBg').hide();
    });
    $('.site_close').click(function(){
        $('.siteSet').hide();
        $('.ji_dataBg').hide();
    });
    $('.showSel').click(function(){
        $('.siteSet').show();
        $('.ji_dataBg').show();
    });
    base.tip($('.site_tip ul li'));
    
})