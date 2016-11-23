var base=window.Namespace || {};
//tip提示
base.tip=function(obj){
    for(var i=0 ;i<obj.size();i++){
        $(obj[i]).append("<div class='tipShow'><p></p></div>");
        $(obj[i]).find('.tipShow p').text($(obj[i]).attr('data'));
        $(obj[i]).hover(function(){
            $(this).find('.tipShow').fadeIn(200)
        },function(){
            $(this).find('.tipShow').fadeOut(200)
        })
    }
}
