$.fn.extend({
    generate:function(data){
        var box=$('.site_page_container ul');//手机控件盒子
        var cssSetBox=$('.site_pageComponent');//控件设置box
        var csHtml="<div class='chageSize'><div class='chageSizeLeft'><div class='wr size'></div><div class='nw size'></div><div class='sw size'></div></div><div class='chageSizeTop'><div class='nr size'></div><div class='Rotate'></div></div><div class='chageSizeRight'><div class='ne size'></div><div class='er size'></div><div class='es size'></div></div><div class='chageSizebottom'><div class='nr size'></div></div>";//改变大小HTML
        var textHtml="<li><div class='text'><div class='textCon'>双击输入文字</div></div>"+csHtml+"</li>";//字体控件HTML
        var textSetHtml="<div class='site_pageComponent_con' id='Component_con' style='display:block'><div class='component_font_font component_public'><p class='title'>字体</p><ul><li class='clearfix col'><div class='colTitle publicTitle'>颜色</div><div class='colCon clearfix'><ul class='clearfix'><li><div class='colConValShow'></div></li><li><div class='fontCol'><img src='images/site_fontA.png' alt=''></div></li></ul></div></li><li class='clearfix'><div class='colTitle publicTitle'>样式</div><div class='fontStyle'><ul class='clearfix'><li class='fontbold current'>B</li><li class='fontI'><i>i</i></li><li>U</li><li>Tx</li></ul></div></li><li class='clearfix'><div class='colTitle publicTitle'>大小</div><div class='fontSize'><p>12px</p><img src='images/site_chageSize.png' alt='' class='shangla'><img src='images/site_xiala.png' alt='' class='xiala'></div></li></ul></div><div class='component_public'><p class='title'>对齐方式</p><ul class='clearfix font_text_align'><li class='left current'></li><li class='center'></li><li class='right'></li><li class='justify'></li></ul><div class='fontspacing clearfix'><div class='colTitle publicTitle'>行间距</div><div class='fontspacingVal'><span>1</span><img src='images/site_chageSize.png' alt='' class='shangla'><img src='images/site_xiala.png' alt='' class='xiala'></div></div></div><div class='component_public'><p class='title'>插入链接</p><ul><li class='clearfix'><div class='colTitle publicTitle'>地<span class='op'>地址</span>址</div><div class='lineBtn'>测试</div></li><li class='clearfix'><div class='colTitle publicTitle'>打开方式</div><div class='lineBtn lineStyle'><ul><li>在当前窗口打开</li><li>在新窗口打开</li></ul></div></li></ul></div></div><div class='site_pageComponent_con' id='Component_css'><div class='component_public'><p class='title'>位置</p><ul class='fontcssSet clearfix'><li class='clearfix'><span>宽度</span><input type='text'></li><li class='clearfix'><span>高度</span><input type='text'></li><li class='clearfix'><span>X轴</span><input type='text'></li><li class='clearfix'><span>Y轴</span><input type='text'></li></ul></div></div></div>";//字体设置html
        var defaults={//控件默认设置
            type:0,   //控件类型
            position:true,  //移动
            chageSize:true, //改变大小
            chageCss:true,//改变CSS
        };
        var setting=$.extend({},defaults,data);
        //生成html
        function creControlHtml(controlHtml,controlSetHtml){
            box.append(controlHtml);//生成控件html
            cssSetBox.find('.chageComponentSet').remove();//删除控件设置html
            cssSetBox.append(controlSetHtml);
            new Mian(box.find('li:last'));
        };
        //根据类型生成控件
        switch(setting.type){
            case 0://生成文字
                creControlHtml(textHtml,textSetHtml);
                break;
        };
        //控件主函数
        function Mian(control){
            //移动函数
            var flag;//移动开关
            var fls;//大小开关
            var x;//坐标X位置
            var y;//坐标y位置
            var cp;//获取控件位置
            if(setting.position==true){
                function drag(){
                    //记录按下坐标的值
                    control.mousedown(function(e){
                        flag =true;//开移动
                        fls=false;//关放大
                        cp=$(this).position();
                        x=e.pageX;
                        y=e.pageY;
                        return false;
                    })
                    //移动
                    $(document).mousemove(function(e){
                        if(flag){
                          control.css({
                            "left":cp.left+(e.pageX-x),
                            "top":cp.top+(e.pageY-y),
                          })  
                        }
                        return false;
                    }).mouseup(function(){
                        flag=false;//关掉移动
                        return false;
                    })
                }
                drag();
            };
            if(setting.chageSize==true){
                function resize(){
                    
                }
                resize();
            }
        }
    }
})














