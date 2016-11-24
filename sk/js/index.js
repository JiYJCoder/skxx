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
    });
    $('.ji_close').click(function(){
        $('.ji_dataBg').hide();
        $('.ji_dataShow').hide();
    });
    $('.featBig .datas').click(function(){
        $('.ji_dataBg').show();
        $('.ji_dataShow').show();
        
    });
    $('.ji_dataShow_btn ul li').click(function(){
    		$(this).addClass('current').siblings().removeClass();
    		$(".ji_dataShowBox").hide().eq($(this).index()).fadeIn(300); 
    //        $(".tab1").eq($(this).index()).show().siblings().hide(); 
    })
    base.tip($('.featSmall ul li'));
    //数据创建
    $('#container').highcharts({
        title: {
            text:null,
        },
        xAxis: {
            categories: ['11', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: '数量'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'UV',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'PV',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }]
    });
    

})
