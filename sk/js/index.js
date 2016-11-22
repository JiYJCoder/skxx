if(typeof($)=='undefined'){
  alert('您的浏览器无法兼容所作操作，请更换chrome或者火狐浏览器再试!');
}
$(function(){
    $('.j_signin').hover(function(){
        $('.j_signin_block').fadeIn(200);
    },function(){
        $('.j_signin_block').fadeOut(200);
    })





}) 