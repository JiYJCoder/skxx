if(typeof($)=='undefined'){
  alert('您的浏览器无法兼容所作操作，请更换chrome或者火狐浏览器再试!');
}

$(function(){
    base.sel('.j_con_main_con_condition_statusVal ul li');//首页状态选择
    base.sel('.j_con_main_con_condition_sortVal ul li');//首页行业标签选择
    base.sel('.j_con_main_con_condition_pxVal ul li');//首页排序选择
    base.sel('.j_con_main_con_condition_dataVal ul li');//首页时间选择
    base.hover('.j_con_main_con_data ul li','.feat');//首页网站列表功能显隐
    //注销
    base.hover('.j_signin','.j_signin_block')
    base.tab(".ji_dataShow_btn ul li",'.ji_dataShowBox')
    $('.ji_close').click(function(){
        $('.ji_dataBg').hide();
        $('.ji_dataShow').hide();
    });
    $('.featBig .datas').click(function(){
        $('.ji_dataBg').show();
        $('.ji_dataShow').show();
        
    });
    
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
