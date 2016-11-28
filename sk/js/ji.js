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
    $(".index input").click(function(e){
        e.stopPropagation();
        $('.sel select').attr('disabled',"disabled").eq($(this).parents('li').index()).attr('disabled',false)
        
    })
    $('.siteSetConLeftBtn ul li').click(function(){
    		$(this).addClass('current').siblings().removeClass();
    		$(".siteSetConShow").hide().eq($(this).index()).show(); 
    		$(".siteSetbottom_save").hide().eq($(this).index()).show(); 
    //        $(".tab1").eq($(this).index()).show().siblings().hide(); 
    })
    base.tip($('.site_tip ul li'));
//    console.log(decodeURIComponent($('#baseForm').serialize()))
})