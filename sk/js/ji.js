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
    });
    $('.createBtn_close').click(function(){
        $('.ji_dataBg').hide();
        $('.create').hide();
    });
    $('.createBtns').click(function(){
        $('.ji_dataBg').show();
        $('.create').show();
    });
    //站点页面，作品信息图片上传既显；
    var file=new FileReader();
    var inpitFile=document.getElementById('file');
    var img=document.getElementById('image_preview')
    inpitFile.onchange=function(){
        file.onload=function(){
            img.src=file.result
        }
        file.readAsDataURL(this.files[0]);
    }
    base.tip($('.site_tip ul li'));
//    console.log(decodeURIComponent($('#baseForm').serialize()))
})