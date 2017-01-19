var base=window.Namespace || {};
var url="http://120.25.102.247:8180"
//tip提示
base.tip=function(obj){
    for(var i=0 ;i<obj.size();i++){
        if($(obj[i]).parents().hasClass('site_tip')){
            $(obj[i]).append("<div class='tipShow bg'><p></p></div>");
        }else{
            $(obj[i]).append("<div class='tipShow'><p></p></div>");
        }
        
        $(obj[i]).find('.tipShow p').text($(obj[i]).attr('data'));
        $(obj[i]).hover(function(){
            $(this).find('.tipShow').fadeIn(200)
        },function(){
            $(this).find('.tipShow').fadeOut(200)
        })
    }
}
//选择
base.sel=function(obj){
    $(document).on('click',obj,function(){
        $(this).addClass('current').siblings().removeClass('current');
    })
}
base.close=function (closeBtn,Box,showBtn,bg){
    $(closeBtn).click(function(){
        $(Box).fadeOut(300);
        $(bg).hide();
    });
    $(showBtn).click(function(){
        $(Box).fadeIn(200);
        $(bg).show();
    })
};
base.hover=function(btn,box){
    $(btn).hover(function(){
        $(this).find(box).show();
    },function(){
        $(this).find(box).hide();
    })
}
base.tab=function(btn,box){
    $(btn).click(function(){
        $(this).addClass('current').siblings().removeClass();
        $(box).hide().eq($(this).index()).show(); 
    });
}
function stringToArray(arr){
    var dataStrArr;
    if(arr.indexOf(",")!=-1){
        dataStrArr=arr.split(',');
    }else{
        dataStrArr=[arr];
    }

    return dataStrArr;
}
function ajaxTip(text){
    $('.ajaxImg').hide(300);
    $('.ji_dataBg').hide();
    $('.ajaxTip').fadeIn();
    $('.ajaxTip').text(text);
    setTimeout("$('.ajaxTip').fadeOut()",2000)
}
var ajaxPackage=function(url,json){
    return $.ajax({
        url:url,
        type:'POST',
        dataType:'json',
        data:json,
    })
}















