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
    function getTime(){
        for(var i=0;i<6;i++){
            date -=600000;
            var hour=new Date(date).getHours().toString();
            var min=new Date(date).getMinutes()
            if(min<10){
                min="0"+min
            }
            var hm=hour+':'+min;
            categories.push(hm);
    //        console.log(categories);
        }
        return categories.reverse();;
    }
    var categories=[];
    var date=new Date().getTime()
  

    
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });
    $('#container').highcharts({
           
            title: {
                text: ''
            },
            xAxis: {
                
                categories: getTime()
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
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                borderWidth: 0
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'UV',
                data: [0,1,2,4,5,6]
            },{
                name: 'PV',
                data: [50,1,2,4,5,30]
            }]
        });
    

})
