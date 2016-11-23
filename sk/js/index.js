if(typeof($)=='undefined'){
  alert('您的浏览器无法兼容所作操作，请更换chrome或者火狐浏览器再试!');
}
$(function(){
    $('.j_signin').hover(function(){
        $('.j_signin_block').fadeIn(200);
    },function(){
        $('.j_signin_block').fadeOut(200);
    });
    $('.j_con_main_con_condition_dataVal input').hover(function(){
        $('.j_con_main_con_condition_dataVal .tip').fadeIn(200);
    },function(){
        $('.j_con_main_con_condition_dataVal .tip').fadeOut(200);
    });
    $('.j_con_main_con_data ul li').hover(function(){
        $(this).find('.feat').fadeIn(300);
    },function(){
        $(this).find('.feat').fadeOut(300);
    })
    base.tip($('.featSmall ul li'));
    
    var data='j';
    

})
