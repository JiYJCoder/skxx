function setCssHtml(type){
    var arr=[];
    switch(type){
        case 0://生成文字
            arr[type]=textSetHtml;
            break;
        case 1:
            arr[type]=ImgSetHtml;
            break;
        case 2:
            arr[type]=titleSetHtml;
            break;
        case 3:
            arr[type]=atlasSetHtml;
            break;
        case 4:
            arr[type]=HlineSetHtml;
            break;
        case 5:
            arr[type]=HlineSetHtml;
            break;
        case 6:
            arr[type]=btnSetHtml;
            break;
        case 7:
            arr[type]=CboxSetHtml;
            break;
        case 8:
            arr[type]=videoSetHtml;
            break;
        case 9:
            arr[type]=musicSetHtml;
            break;
        case 10:
            arr[type]=hdpSetHtml;
            break;
        case 11:
            arr[type]=navSetHtml;
            break;
        case 12:
            arr[type]=navBtnSetHtml;
            break;
        case 13:
            arr[type]=FormSetHtml;
            break;
        case 14:
            arr[type]=mapSetHtml;
            break;
        case 15:
            arr[type]=cmListSetHtml;
            break;
        case 16:
            arr[type]=ewmSetHtml;
            break;
        case 17:
            arr[type]=weixinSetHtml;
            break;
    };
    return arr;
}
function Mian(control,controlSetHtmlArr,defaultCssSet){
        var cssSetBox=$('.site_pageComponent');//控件box
        var controlBtnBox=$('.site_ControlRecordCon >ul');//控件控制按钮
        var box=$('.site_page_container >ul');
        //移动函数
        var flag;//移动开关
        var fls;//大小开关
        var x;//坐标X位置
        var y;//坐标y位置
        var cp;//获取控件位置
        //根据控件类型生成控件控制按钮
        function controlBtn(){
            var controlBtnLi=controlBtnBox.find('li');
            controlBtnLi.click(function(){
                var liNum=Number(box.find('li').eq($(this).index()).attr('type'));
                $(this).addClass('current').siblings().removeClass('current');
                $('.chageSize').hide();
                $('.panel').remove();
                cssSetBox.append(controlSetHtmlArr[liNum]);
                box.find('li').eq($(this).index()).show();
                box.find('li').eq($(this).index()).find('.chageSize').show();
                return false;
            });

            $('.site_ControlRecordTitle ul li').click(function(){
                $('.panel').remove();
                for(var i=0;i<box.find('li').size();i++){
                    if(box.find('li>.chageSize').eq(i).is(':visible')&&$(this).hasClass('control_Sh')){
                        controlBtnBox.find('li').eq(box.find('li').eq(i).index()).removeClass('current');
                        box.find('li').eq(i).hide();
                    }
                    if(box.find('li>.chageSize').eq(i).is(':visible')&&$(this).hasClass('control_Del')){
                        controlBtnBox.find('li').eq(box.find('li').eq(i).index()).remove();
                        box.find('li').eq(i).remove();
                    }

                }
                return false;
            });
        }
        controlBtn();

        //控件选择
        function select(controlSel){
            //恢复面板按钮位置
            $('.site_pageComponent_Btn ul li').eq(0).addClass('current').siblings().removeClass('current');
            var textCon=$(this).find('.textCon');
            controlSel.click(function(){
                var textCon=$(this).find('.textCon');
                var liNum=Number($(this).attr('type'));
                //恢复面板按钮位置
                $('.site_pageComponent_Btn ul li').eq(0).addClass('current').siblings().removeClass('current');
                //判断控件是否不可输入
                 if(!(textCon.attr("contenteditable")=='true')){
                       $(this).parents('li').removeClass('heightIm')
                }
                //文字框控制
                textCon.dblclick(function(){
                    this.focus();
                    $(this).attr('contenteditable','true').addClass('heightIm');
                    $(this).parents('li').addClass('heightIm');
                    return false;
                })

                textCon.blur(function(){
                    var oHeight = $(this).outerHeight();
                    $(this).attr('contenteditable','false');
                    $(this).parents("li").height(oHeight);
                    textCon.height(textCon.height());
                    $(this).removeClass('heightIm');
                    $(this).parents("li").removeClass('heightIm');

                })
                //值回传到控制面板
                function valReturn(){
                    $('.panel').remove();
                    box.find('.chageSize').hide();
                    cssSetBox.append(controlSetHtmlArr[liNum]);
                    var cssVal=controlSel.children().eq(0).attr('style');
                    var valArr=cssVal.split(';');
                    var fonSizeVal=valArr[0].substring(11,valArr[0].length-2);//文字大小值
                    var fw=valArr[1].substring(14);//粗体
                    var fs=valArr[2].substring(13);//斜体
                    var td=valArr[5].substring(18);//下划线
                    var bgc=controlSel.attr('bgc');//字体背景颜色
                    var col=valArr[4].substring(8);//字体颜色
                    var ta=valArr[6].substring(13);//字体对齐方式
                    var lh=valArr[7].substring(13,valArr[7].length-2);//行高
                    var bw=valArr[8].substring(14,valArr[8].length-2);//边宽
                    var br=valArr[12].substring(15,valArr[12].length-2);//圆角
                    var pd=valArr[11].substring(9,valArr[11].length-2);//内距
                    var bs=valArr[9].substring(14);//边样
                    var bc=valArr[10].substring(14);//边色
                    var bGrong=valArr[3].substring(19);//背景颜色
//                        console.log(bgi);
//                        console.log(cssVal);
//                        console.log(valArr);
                    $('.fontSize p span').text(fonSizeVal);//面板字体大小
                    if(fw=='bold'){
                        $('.fontbold').addClass('current');
                    }
                    if(fs=='italic'){
                        $('.fontI').addClass('current');
                    }
                    if(td=='underline'){
                        $('.fontX').addClass('current');
                    }
                    //字体背景颜色
                    $('.colConValShow').css({
                        backgroundColor:bgc
                    })
                    if(col!='rgb(51, 51, 51)'){
                        $('.fontCol img').css({
                            borderBottomColor:col
                        })
                    }
                    //
                    //对齐方式
                    if(ta=='center'){
                        $('.font_text_align .center').addClass('current').siblings().removeClass('current');
                    }else if(ta=='right'){
                        $('.font_text_align .right').addClass('current').siblings().removeClass('current');
                    }else if(ta=='justify'){
                        $('.font_text_align .justify').addClass('current').siblings().removeClass('current');
                    }
                    if(lh!='1'){
                        $('.fontspacingVal span').text(lh);
                    }
                    $('.borderColBtn .ImgchageBgSetColVal').css({
                        backgroundColor:bc
                    });
                    $('.ImgBoderStyle >p').css({
                        borderStyle:bs
                    });
                    $('.chageBoderWidth > input').val(bw);
                    $('.chageFilletWidth > input').val(br);
                    $('.chagePadding > input').val(pd);
                    //设置链接
                    $('.lineSetVal').text(controlSel.attr('linedata'));
                    //设置高度宽度，Top,left
                    $('.fontcssSet li').eq(0).find('input').val(controlSel.width())
                    $('.fontcssSet li').eq(1).find('input').val(controlSel.height())
                    $('.fontcssSet li').eq(2).find('input').val(controlSel.position().left)
                    $('.fontcssSet li').eq(3).find('input').val(controlSel.position().top)
                    //设置图片模式
                    if(controlSel.find('img').hasClass('none')){
                        $('.bgStyle ul li').eq(3).addClass('current').siblings().removeClass()
                    }else if(controlSel.find('img').hasClass('fill')){
                        $('.bgStyle ul li').eq(2).addClass('current').siblings().removeClass()
                    }else if(controlSel.find('img').hasClass('contain')){
                        $('.bgStyle ul li').eq(1).addClass('current').siblings().removeClass()
                    }
                    //背景模式
                    if(controlSel.attr('bg')=='1'){
                        $('.ImgchageBg ul li').eq(0).addClass('current').siblings().removeClass('current');
                        $('.ImgchageBgSet').eq(0).show();
                        $('.solidColor .ImgchageBgSetColVal').css({
                            backgroundColor:bGrong
                        })
                    }else if(controlSel.attr('bg')=='2'){
                        var bgi=valArr[13].split(",");
                        var bgiT=bgi[0].substring(35)+","+bgi[1]+","+bgi[2];
                        var bgiB=bgi[3]+","+bgi[4]+","+bgi[5].substring(0,bgi[5].length-1)
                        $('.ImgchageBg ul li').eq(1).addClass('current').siblings().removeClass('current');
                        $('.ImgchageBgSet').eq(1).show();
                        $('.gradientHead .ImgchageBgSetColVal').css("background-color",bgiT)
                        $('.gradientfoot .ImgchageBgSetColVal').css("background-color",bgiB)
                    }
                    else if(controlSel.attr('bg')=='3'){
                        $('.ImgchageBg ul li').eq(2).addClass('current').siblings().removeClass('current');
                    }
                    //控件类型回传
                    function controlType(setCon,imgUrl,type){
                        var num=null;
                        if(type==1){
                            num=Number(controlSel.attr('controltype'))-1;
                        }else if(type==2){
                            num=Number(controlSel.attr('controlicontype'));
                        }

                        var imgSrc=imgUrl.eq(num).find('i').css('background-image');
                        setCon.css({
                            backgroundImage:imgSrc
                        })
                    }
                    controlType($('.titleStyleConVal'),$('.chageTitleStyle li'),1);
                    controlType($('.titleStyleIcon'),$('.chageIcon li'),2);
                    //阴影回值
                    function shaDowSet(){
                        var shaDowVal=$('.general').css('box-shadow');
                        var shaDowCol=controlSel.find('.general').attr('shadowcol')||"#fff"
                        var shaDowX=controlSel.find('.general').attr('shadowx') || 0;
                        var shaDowY=controlSel.find('.general').attr('shadowy') || 0;
                        var shaDowR=controlSel.find('.general').attr('shadowrange') || 0;
                        $('.shadowCol .ImgchageBgSetColVal').css('background-color',shaDowCol);
                        $('.shadowY input').val(shaDowY);
                        $('.shadowX input').val(shaDowX);
                        $('.shadowRange input').val(shaDowR);
                    }
                    shaDowSet()

                }
                valReturn();
                $(this).find('.chageSize').show();
                //控件控制按钮
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.find('li').eq($(this).index()).addClass('current');
                chageCss($(this));
            return false;
            });
            $('.site_poneBox').click(function(){
                var oHeight = control.height();
                textCon.attr('contenteditable','false');
                textCon.parents("li").height(oHeight);
                textCon.height(textCon.height());
                textCon.removeClass('heightIm');
                textCon.parents("li").removeClass('heightIm');
                $('.chageSize').hide();
            })
        }
        select(control);

        //移动函数

        function drag(){
            //记录按下坐标的值
            var degs=control.css('transform');
            control.mousedown(function(e){
                flag =true;//开移动
                fls=false;//关放大
                cpLeft=Number($(this).css('left').replace('px',''))
                cpTop=Number($(this).css('top').replace('px',''))
                x=e.pageX;
                y=e.pageY;
                $(document).mousemove(function(e){
                    if(flag){
                      control.css({
                        "left":cpLeft+(e.pageX-x),
                        "top":cpTop+(e.pageY-y),
                        "width":control.width(),
                        "height":control.height()
                      })  
                    }
                    return false;
                }).mouseup(function(){
                    $(document).unbind("mousemove");
                    flag=false;//关掉移动
                    return false;
                })
                return false;
            })
            //移动
//                    $(document).bind("mousemove",function(e){
//                        if(flag){
//                          control.css({
//                            "left":cpLeft+(e.pageX-x),
//                            "top":cpTop+(e.pageY-y),
//                            "width":control.width(),
//                            "height":control.height()
//                          })  
//                        }
//                        return false;
//                    }).mouseup(function(){
//                        $(document).unbind("mousemove");
//                        flag=false;//关掉移动
//                        return false;
//                    })

        }
        drag();


        //放大函数

        function resize(target,west,north,east,south,wn,ws,en,es,rotates){
            target.mousedown(function(e){
                flag=false;//关移动
                fls=true;//开放大
                var boxY=box.offset().top;
                var boxX=box.offset().left;
                var _width=control.width();//控件宽度
                var _height=control.height();//控件高度
                var porLeft=control.css('left').replace('px','');//控件相对位置
                var porTop=control.css('top').replace('px','');//控件相对位置
                var por ={};
                por.top=Number(porTop);
                por.left=Number(porLeft);
                var off=control.offset();//控件绝对位置
                var targetX=e.pageX;//目标X位置
                var targetY=e.pageY;//目标Y位置
//                        var ox=off.left+_width/2;//圆心X
//                        var oy=off.top+_height/2;//圆心Y
                var degs=control.css('transform');
                $(document).mousemove(function(e){
                    var e = e || window.event;
                    //西边放大
                    if(fls===true&&west===true){
                        control.css({
                            top:por.top,
                            width:targetX-e.pageX+_width,
                            left:por.left-(targetX-e.pageX),
                            height:_height,
                            transform:degs
                        })
                    }
                     //东边放大
                    if(fls===true&&east===true){
                        control.css({
                            top:por.top,
                            width:e.pageX-targetX+_width,
                            left:por.left,
                            height:_height,
                            transform:degs
                        })
                    }
                    //北边放大
                    if(fls===true&&north===true){
                        control.css({
                            top:por.top-(targetY-e.pageY),
                            width:_width,
                            left:por.left,
                            height:(targetY-e.pageY)+_height,
                            transform:degs
                        })
                    }
                    //南边放大
                    if(fls===true&&south===true){
                        control.css({
                            top:por.top,
                            width:_width,
                            left:por.left,
                            height:(e.pageY-targetY)+_height,
                            transform:degs
                        })
                    }
                    //西北放大
                    if(fls===true&&wn===true){
                        control.css({
                            top:por.top-(targetY-e.pageY),
                            width:targetX-e.pageX+_width,
                            left:por.left-(targetX-e.pageX),
                            height:(targetY-e.pageY)+ _height,
                            transform:degs
                        })
                    }
                    //西南放大
                    if(fls===true&&ws===true){
                        control.css({
                            top:por.top,
                            width:targetX-e.pageX+_width,
                            left:por.left-(targetX-e.pageX),
                            height:(e.pageY-targetY)+_height,
                            transform:degs
                        })
                    }
                    //东北放大
                    if(fls===true&&en===true){
                        control.css({
                            top:por.top-(targetY-e.pageY),
                            width:e.pageX-targetX+_width,
                            left:por.left,
                            height:(targetY-e.pageY)+_height,
                            transform:degs
                        })
                    }
                    //东南放大
                    if(fls===true&&es===true){
                        control.css({
                            top:por.top,
                            width:e.pageX-targetX+_width,
                            left:por.left,
                            height:(e.pageY-targetY)+_height,
                            transform:degs
                        })
                    }
                    //2d旋转
                    if(fls&&rotates){
                        var ox = parseInt(e.pageX) - (por.left+boxX+_width/2);//计算出鼠标相对于画布中心的位置 
                        var oy = parseInt(e.pageY) - (por.top+boxY+_height/2);
                        var to = Math.abs(ox / oy);
                        var angle = Math.atan(to) / (2 * Math.PI) * 360;//鼠标相对于旋转中心的角度  
                        if (ox < 0 && oy < 0) 
                        {
                            angle = -angle;
                        } else if (ox < 0 && oy > 0) 
                        {
                            angle = -(180 - angle)
                        } else if (ox > 0 && oy < 0)  
                        {
                            angle = angle;
                        } else if (ox > 0 && oy > 0) 
                        {
                            angle = 180 - angle;
                        }
                        control.css({
                            top:por.top,
                            width:_width,
                            left:por.left,
                            height:_height,
                            transform:"rotate("+angle+"deg)"
                        })
                    }

                }).mouseup(function(){
                    control.find('.textCon').css({
                        minHeight:control.height()
                    })
                    fls=false;
                    return false
                });
                return false;
            });
        }
        resize(control.find('.wr'),true,false,false,false,false,false,false,false,false);
        resize(control.find('.er'),false,false,true,false,false,false,false,false,false);
        resize(control.find('.nr'),false,true,false,false,false,false,false,false,false);
        resize(control.find('.sr'),false,false,false,true,false,false,false,false,false);
        resize(control.find('.nw'),false,false,false,false,true,false,false,false,false);
        resize(control.find('.sw'),false,false,false,false,false,true,false,false,false);
        resize(control.find('.ne'),false,false,false,false,false,false,true,false,false);
        resize(control.find('.es'),false,false,false,false,false,false,false,true,false);
        resize(control.find('.Rotate'),false,false,false,false,false,false,false,false,true);

        function chageCss(controlSet){
            //字体模块
            $('.fontStyle ul li').click(function(){
                if($(this).hasClass('current')){
                    $(this).removeClass('current');
                }else{
                    $(this).addClass('current');
                }
                //字体变粗
                if($(this).index()==0&&$(this).hasClass('current')){
                    controlSet.children().eq(0).css({
                        fontWeight:'bold'
                    });
                }else if($(this).index()==0&&!$(this).hasClass('current')){
                    controlSet.children().eq(0).css({
                        fontWeight:'normal'
                    })
                }
                //斜体
                if($(this).index()==1&&$(this).hasClass('current')){
                    controlSet.children().eq(0).css({
                        fontStyle:'italic'
                    });
                }else if($(this).index()==1&&!$(this).hasClass('current')){
                    controlSet.children().eq(0).css({
                        fontStyle:'normal'
                    })
                }
                //字体下划线
                if($(this).index()==2&&$(this).hasClass('current')){
                    controlSet.children().eq(0).css({
                        textDecoration:'underline'
                    });
                }else if($(this).index()==2&&!$(this).hasClass('current')){
                    controlSet.children().eq(0).css({
                        textDecoration:'none'
                    });
                }
                //清楚字体样式
                if($(this).index()==3){
                    $('.fontStyle ul li').removeClass('current');
                    controlSet.children().eq(0).css({
                        textDecoration:'none',
                        fontStyle:'normal',
                        fontWeight:'normal',
                    })
                }
            });
            //颜色模块
            //1.背景颜色
            $('.bgCol').colpick({
                onSubmit:function(hsb,hex,rgb,el) {
                    controlSet.attr('bgc','#'+hex);
                    controlSet.find('.textView').css('background-color', '#'+hex);
                    $('.colConValShow').css('background-color', '#'+hex);
                    $(el).colpickHide();
                }
            });
             //2，字体颜色
            $('.fontCol').colpick({
                onSubmit:function(hsb,hex,rgb,el) {
                    controlSet.children().eq(0).css('color', '#'+hex);
                    $('.fontCol img').css('border-bottom-color', '#'+hex);
                    $(el).colpickHide();
                }
            });
            //清除
            $('.fontDelCol').click(function(){
                var bgc=controlSet.find(".textView").attr("bgc");
                controlSet.children().eq(0).find(".textView").css({
                    backgroundColor:bgc
                });
                controlSet.children().eq(0).css({
                    color:defaultCssSet.color||"#333333"
                })
                $('.fontCol img').css('border-bottom-color', '#333333');
                $('.bgCol .colConValShow').css('background-color',bgc );
            })
            //字体大小,行间距
            $('.shangla').click(function(){
                var num=Number($(this).parents('.tbBox').find('span').text())+1;
                if($(this).parents('.fontSize').hasClass('fontSize')){
                    $('.fontSize > p span').text(num);
                    controlSet.children().eq(0).css('font-size',num+'px');
                }else if($(this).parents('.fontspacingVal').hasClass('fontspacingVal')){
                    $('.fontspacingVal span').text(num);
                    controlSet.children().eq(0).css({
                        lineHeight:num+'em'
                    });
                }

            }); 
            $('.xiala').click(function(){
                var num=Number($(this).parents('.tbBox').find('span').text())-1;
                if(num<=0){
                    num=1;
                }
                if($(this).parents('.fontSize').hasClass('fontSize')){
                    controlSet.children().eq(0).css('font-size',num+'px');
                    $('.fontSize > p span').text(num);
                }else if($(this).parents('.fontspacingVal').hasClass('fontspacingVal')){
                    $('.fontspacingVal span').text(num);
                    controlSet.children().eq(0).css({
                        lineHeight:num+'em'
                    });
                }
            });
            //对齐方式
            $('.font_text_align li').click(function(){
                $(this).addClass('current').siblings().removeClass('current');
                if($(this).index()==0){
                     controlSet.children().eq(0).css({
                         textAlign:'left'
                     })
                }else if($(this).index()==1){
                    controlSet.children().eq(0).css({
                         textAlign:'center'
                     })
                }else if($(this).index()==2){
                    controlSet.children().eq(0).css({
                         textAlign:'right'
                     })
                }else if($(this).index()==3){
                    controlSet.children().eq(0).css({
                         textAlign:'justify'
                     })
                }
            });
            //链接获取值
            function getLineVal(){
                //弹出链接框
                $('.lineSetVal').click(function(){
                    $('.siteLine').show();
                    $('.ji_dataBg').show();
                    controlSet.attr('lineData','缺省');
                });
                $('.siteSetbottom_save').click(function(){
                    var lineCurrent=$('.lineVal ul li.current');
                    $(lineCurrent).each(function(){
                        if(!$(this).is(':hidden')){
                            $('.lineBtn').text($(this).attr('datalineVal'));
                            controlSet.attr('lineData',$(this).attr('datalineVal'));
                        }
                    });
                    $('.siteLine').hide();
                    $('.ji_dataBg').hide();
                })
            }
            getLineVal();
            //图库
            function getImgVal(){
                var imgSet=controlSet.find('.Img img');
                var ImgValBox=$('.site_ImgListSel ul li img');
                var selBtn=$('.site_ImgList >ul >li');
                $('.galleryBtn').click(function(){
                    if($(this).hasClass('danImg')){
                        controlImg(true,false,false);
                        $('.site_imgBox').removeClass('bgGaller');
                    }else if($(this).hasClass('Atlas')){
                        controlImg(false,true,false);
                        $('.site_imgBox').removeClass('bgGaller');
                    }else if($(this).hasClass('bgSel')){
                        controlImg(false,false,true);
                        controlSet.attr('bg','3');
                        $('.site_imgBox').addClass('bgGaller');
                    }
                    $('.site_imgBox').show();
                    $('.ji_dataBg').show();
                    ImgValBox.attr('src','');
                    selBtn.removeClass('current');
                    selBtn.find('i').hide();
                });
                function controlImg(single,double,bg){
                    selBtn.bind('click',function(){
                        var imgSrc=$(this).find('img').attr('src');
                        //单图模式
                        if((!$(this).hasClass('current'))&&single){
                            $(this).addClass('current').siblings().removeClass('current');
                            selBtn.find('i').hide();
                            $(this).find('i').show();
                            ImgValBox.eq(0).attr('src',imgSrc);
                        }else if($(this).hasClass('current')&&single){
                            $(this).removeClass('current');
                            $(this).find('i').hide();
                            ImgValBox.eq(0).attr('src','');
                        }
                        //多图模式
                        if((!$(this).hasClass('current'))&&double){
                            $(this).addClass('current');
                            $(this).find('i').show();
                            ImgValBox.each(function(){
                                if($(this).attr('src')==''){
                                    $(this).attr('src',imgSrc);
                                    return false;
                                }
                            })
                        }else if($(this).hasClass('current')&&double){
                            $(this).removeClass('current');
                            $(this).find('i').hide();
                            for(var i=0;i<ImgValBox.size();i++){
                                if(ImgValBox.eq(i).attr('src')==imgSrc){
                                    ImgValBox.eq(i).attr('src','');
                                    return false;
                                }
                            }
                        }
                        //背景图片
                        if((!$(this).hasClass('current'))&&bg){
                            $(this).addClass('current').siblings().removeClass('current');
                            selBtn.find('i').hide();
                            $(this).find('i').show();
                            ImgValBox.eq(0).attr('src',imgSrc);
                        }else if($(this).hasClass('current')&&bg){
                            $(this).removeClass('current');
                            $(this).find('i').hide();
                            ImgValBox.eq(0).attr('src','');
                        }

                    });
                }
                controlImg()
                $('.site_ImgListSave').click(function(){
                    $('.site_imgBox').hide();
                    $('.ji_dataBg').hide();
                    $('.site_ImgList >ul >li').unbind('click');
                    if($(this).parents('.site_imgBox').hasClass('bgGaller')){
                        controlSet.children().eq(0).css({
                            backgroundImage:"url("+ImgValBox.eq(0).attr('src')+")"
                        });
                        controlSet.find(".botton").css({
                            backgroundColor:'transparent',
                        });
                    }else{
                        imgSet.attr('src','images/site_img.png');
                        for(var i=0;i<ImgValBox.size();i++){
                            if(ImgValBox.eq(i).attr('src') !=''){
                               imgSet.eq(i).attr('src',ImgValBox.eq(i).attr('src'))
                            }
                        }   
                    }

                })
            }
            getImgVal();
            //设置宽高XY
            $('.fontcssSet li').find('input').keyup(function(){
                if($(this).parent().index()==0){
                    controlSet.width($(this).val());
                }else if($(this).parent().index()==1){
                    controlSet.height($(this).val());
                }else if($(this).parent().index()==2){
                    controlSet.css({
                        left:$(this).val()+'px'
                    })
                }else if($(this).parent().index()==3){
                    controlSet.css({
                        top:$(this).val()+'px'
                    })
                }
            });
            //图片模式设置
            $('.bgStyle ul li').click(function(){
                $('.Img img').removeClass();
                if($(this).index()==0){
                    controlSet.find("img").css({
                        objectFit:'cover'
                    }).addClass('cover')
                }
                if($(this).index()==1){
                    controlSet.find("img").css({
                        objectFit:'contain'
                    }).addClass('contain')
                }
                if($(this).index()==2){
                    controlSet.find("img").css({
                        objectFit:'fill'
                    }).addClass('fill')
                }
                if($(this).index()==3){
                    controlSet.find("img").css({
                        objectFit:'none'
                    }).addClass('none')
                }
            });
            //设置文字
            function setText(btn, box){
                btn.keyup(function(){
                    box.text($(this).val());
                });
            }
            setText($('.searchInput input'),controlSet.find('.textView'));
            setText($('.searchInput input'),controlSet.find('.botton >p'));
            //下拉选择hover
            function selTitleStyle(setList,setBox){
                setBox.hover(function(){
                    setList.show();
                },function(){   
                    setList.hide();
                });
                setList.find('li').click(function(){
                    var imgSrc=$(this).find('i').css('background-image')
                    setBox.find('.titleStyleSet').css('background-image',imgSrc);
                    setList.hide();
                    if($(this).parent().hasClass('chageTitleStyle')){

                        controlSet.attr('bgc','#a5a5a5');
                        controlSet.attr('controlType','2');
                        if($(this).attr('type')=="2"){
                            if(controlSet.attr('type')=="2"){
                                controlSet.find('.serchCon').css({
                                    backgroundColor:'#a5a5a5',
                                    borderLeft:'3px solid #505050',
                                })
                            }else if(controlSet.attr('type')=="6"){
                                controlSet.find('.bottonCon').css({
                                    backgroundColor:"#ffffff",
                                    backgroundImage:"none"
                                });
                                controlSet.children().eq(0).css({
                                    color:"#333333",
                                });
                                controlSet.find("*").css({
                                    borderRadius:"0px"
                                });
                                controlSet.find('.botton p').text("按钮");
                            }

                        }else if($(this).attr('type')=="1"){
                            controlSet.attr('bgc','#438eb9');
                            controlSet.attr('controlType','1');
                            if(controlSet.attr('type')=="2"){
                                controlSet.find('.serchCon').css({
                                    backgroundColor:'#438eb9',
                                    borderLeft:'none',
                                })
                            }else if(controlSet.attr('type')=="6"){
                                controlSet.find('.bottonCon').css({
                                    backgroundColor:"#438eb9",
                                    backgroundImage:"none"
                                });
                                controlSet.children().css({
                                    color:"#ffffff",
                                });
                                controlSet.find("*").css({
                                    borderRadius:"5px"
                                });
                                controlSet.find('.botton p').text("按钮");
                            }

                        }
                    }else if($(this).parent().hasClass('chageIcon')){
                        var num=$(this).index().toString()
                        controlSet.attr('controlIconType',num);
                        if(controlSet.attr('type')=="2"){
                            controlSet.find('.serchCon').css({
                                backgroundImage:imgSrc
                            })
                        }else if(controlSet.attr('type')=="6"){
                            controlSet.find('.botton').css({
                                backgroundImage:imgSrc
                            });
                            controlSet.find('.botton p').text("");
                        }

                    }

                });
            }
            selTitleStyle($('.titleSet ul'),$('.titleSet'));
            selTitleStyle($('.titleIconSet ul'),$('.titleIconSet'));
            selTitleStyle($('.btnVal ul'),$('.btnVal'));
            selTitleStyle($('.btnlist ul'),$('.btnlist'));
            //背景选择
            $('.ImgchageBg ul li').click(function(){
                $(this).addClass('current').siblings().removeClass('current');
                $(".ImgchageBgSet").hide().eq($(this).index()).show();
                if($(this).attr('type')=='1'){
                    controlSet.attr('bg','1');
                    $('.solidColor').colpick({
                        onSubmit:function(hsb,hex,rgb,el) {
                            controlSet.children().eq(0).css({
                                backgroundColor:"#"+hex,
                                backgroundImage:"none"
                            });
                            $('.solidColor .ImgchageBgSetColVal').css('background-color', '#'+hex);
                            $(el).colpickHide();
                        }
                    });
                }else if($(this).attr('type')=='2'){
                    controlSet.attr('bg','2');
                    $('.gradientHead').colpick({
                        onSubmit:function(hsb,hex,rgb,el) {
                            controlSet.children().eq(0).css('background-color', '#'+hex);
                            $('.gradientHead .ImgchageBgSetColVal').css({
                                backgroundColor:'#'+hex,
                            });
                            $(el).colpickHide();
                        }
                    });
                    $('.gradientfoot').colpick({
                        onSubmit:function(hsb,hex,rgb,el) {
                            var headCol=$('.gradientHead .ImgchageBgSetColVal').css('background-color')
                            controlSet.children().eq(0).css({
                                backgroundImage:"linear-gradient("+headCol+",#"+hex+")",
                                backgroundColor:"transparent",
                            });
                            $('.gradientfoot .ImgchageBgSetColVal').css('background-color', '#'+hex);
                            $(el).colpickHide();
                        }
                    });
                }else if($(this).attr('type')=='4'){
                    controlSet.children().eq(0).css({
                        background:'none'
                    })
                }
            });
            if($('.ImgchageBg ul li.current').attr("type")=="1"){
                $('.solidColor').colpick({
                    onSubmit:function(hsb,hex,rgb,el) {
                        controlSet.children().eq(0).css({
                            backgroundColor:"#"+hex,
                            backgroundImage:"none"
                        });
                        $('.solidColor .ImgchageBgSetColVal').css('background-color', '#'+hex);
                        $(el).colpickHide();
                    }
                });
            }else if($('.ImgchageBg ul li.current').attr('type')=='2'){
                controlSet.attr('bg','2');
                $('.gradientHead').colpick({
                    onSubmit:function(hsb,hex,rgb,el) {
                        controlSet.children().eq(0).css('background-color', '#'+hex);
                        $('.gradientHead .ImgchageBgSetColVal').css({
                            backgroundColor:'#'+hex,
                        });
                        $(el).colpickHide();
                    }
                });
                $('.gradientfoot').colpick({
                    onSubmit:function(hsb,hex,rgb,el) {
                        var headCol=$('.gradientHead .ImgchageBgSetColVal').css('background-color')
                        controlSet.children().eq(0).css({
                            backgroundImage:"linear-gradient("+headCol+",#"+hex+")",
                            backgroundColor:"transparent",
                        });
                        $('.gradientfoot .ImgchageBgSetColVal').css('background-color', '#'+hex);
                        $(el).colpickHide();
                    }
                });
            }
            //边框颜色
            $('.borderColBtn').colpick({
                onSubmit:function(hsb,hex,rgb,el) {
                    controlSet.children().eq(0).css('border-color', '#'+hex);
                    $('.borderColBtn .ImgchageBgSetColVal').css('background-color', '#'+hex);
                    $(el).colpickHide();
                }
            });
            //边框类型
            $('.ImgBoderStyle').hover(function(){
                $('.ImgBoderStyle ul').show();
                $('.ImgBoderStyle ul li').click(function(){
                    if($(this).index()==0){
                        $('.ImgBoderStyle >p').css({
                            borderStyle:'solid'
                        });
                        if(controlSet.attr('type')=="4"){
                            controlSet.find('.general').css({
                                borderBottomStyle:'solid'
                            });
                        }else if(controlSet.attr('type')=="5"){
                            controlSet.find('.general').css({
                                borderLeftStyle:'solid'
                            });
                        }else{
                            controlSet.children().eq(0).css('border-style', 'solid');
                        }
                    }else if($(this).index()==1){
                        $('.ImgBoderStyle >p').css({
                            borderStyle:'dotted'
                        });
                        if(controlSet.attr('type')=="4"){
                            controlSet.find('.general').css({
                                borderBottomStyle:'dotted'
                            });
                        }else if(controlSet.attr('type')=="5"){
                            controlSet.find('.general').css({
                                borderLeftStyle:'dotted'
                            });
                        }else{
                            controlSet.children().eq(0).css('border-style', 'dotted');
                        }
                    }else if($(this).index()==2){
                        $('.ImgBoderStyle >p').css({
                            borderStyle:'dashed'
                        });
                        if(controlSet.attr('type')=="4"){
                            controlSet.find('.general').css({
                                borderBottomStyle:'dashed'
                            });
                        }else if(controlSet.attr('type')=="5"){
                            controlSet.find('.general').css({
                                borderLeftStyle:'dashed'
                            });
                        }else{
                            controlSet.children().eq(0).css('border-style', 'dashed');
                        }
                    }
                    $('.ImgBoderStyle ul').hide();
                })
            },function(){
                $('.ImgBoderStyle ul').hide();
            });
            //关于数字增加的
            function addNum(plus,Less){
                plus.click(function(){
                    var num=Number($(this).parent().find('input').val())+1;
                    var atlasW=controlSet.find('li').width();
                    var atlasH=controlSet.find('li').height();
                    var atlasFW=controlSet.find('ul').width();
                    var atlasFH=controlSet.find('ul').height();
                    var ImgNum=controlSet.find('li').size();
                    var chageNum=Number($('.atlasPadding input').val());
                    var shaDowY=$('.shadowY input').val();
                    var shaDowX=$('.shadowX input').val();
                    var shaDowRange=$('.shadowRange input').val();
                    var shaDowCol=$('.shadowCol .ImgchageBgSetColVal').css('background-color');
                    $(this).parent().find('input').val(num);
                    if($(this).parent().hasClass('chageBoderWidth')){
                        controlSet.children().eq(0).css({
                            borderWidth:num+'px'
                        });
                    }else if($(this).parent().hasClass('chageFilletWidth')){
                        controlSet.find('*').css({
                            borderRadius:num+'px'
                        });
                    }else if($(this).parent().hasClass('chagePadding')){
                        controlSet.children().eq(0).css({
                            padding:num+'px'
                        });
                    }else if($(this).parent().hasClass('atlasPadding')){
                        var column =$('.atlasColumn input').val();
                        console.log((atlasH-num)/atlasFH*100);
                        if(column == 1){
                            controlSet.find('li').css({
                                marginTop:num+'px',
                                marginBottom:0,
                                marginLeft:0,
                                marginRight:0,
//                                    height:(atlasH-8/9)/atlasFH*100+"%"
                            });
                            controlSet.find('li').eq(0).css({
                                marginTop:0,

                            });
                        }
                    }else if($(this).parent().hasClass('atlasColumn')){
                        if(num>3){
                            $(this).parent().find('input').val(3);
                        }
                        if(num==2){
                            controlSet.find('li').width((atlasFW/2-chageNum)/atlasFW*100+"%")
                            controlSet.find('li').height((atlasFH/(Math.ceil(ImgNum/2))-chageNum)/atlasFH*100+"%")

                        }else if(num==3){
                            controlSet.find('li').width((atlasFW/3-chageNum)/atlasFW*100+"%")
                            controlSet.find('li').height((atlasFH/Math.ceil(ImgNum/3)-chageNum)/atlasFH*100+"%")
                        }
                    }else if($(this).parent().hasClass('shadowY')){
                        controlSet.find(".general").css({
                            boxShadow:shaDowX+'px '+num+'px ' +shaDowRange+'px '+shaDowCol
                        }).attr('shadowY',num);

                    }else if($(this).parent().hasClass('shadowX')){
                        controlSet.find(".general").css({
                            boxShadow:num+'px ' + shaDowY+'px ' + shaDowRange+'px '+shaDowCol
                        }).attr('shadowX',num);

                    }else if($(this).parent().hasClass('shadowRange')){
                        controlSet.find(".general").css({
                            boxShadow: shaDowX+'px '+ shaDowY+'px ' + num+'px '+shaDowCol
                        }).attr('shadowRange',num);
                    }else if($(this).parent().hasClass('borderSetWidth')){
                        if(controlSet.attr('type')=='4'){
                            controlSet.find('hr').css({
                                    borderBottomWidth:num+'px'
                            })
                        }else if(controlSet.attr('type')=='5'){
                            controlSet.find('hr').css({
                                    borderLeftWidth:num+'px'
                            })
                        }
                    }

                });
                Less.click(function(){
                    var num=Number($(this).parent().find('input').val())-1;
                    var atlasW=controlSet.find('li').width();
                    var atlasH=controlSet.find('li').height();
                    var atlasFW=controlSet.find('ul').width();
                    var atlasFH=controlSet.find('ul').height();
                    var chageNum=Number($('.atlasPadding input').val());
                    var ImgNum=controlSet.find('li').size();
                    var shaDowY=$('.shadowY input').val();
                    var shaDowX=$('.shadowX input').val();
                    var shaDowRange=$('.shadowRange input').val();
                    var shaDowCol=$('.shadowCol .ImgchageBgSetColVal').css('background-color');
                    $(this).parent().find('input').val(num);
                    if(num<0){
                        if($(this).parent().hasClass('shadowY')||$(this).parent().hasClass('shadowX')){
                            $(this).parent().find('input').val(num);
                        }else{
                            $(this).parent().find('input').val(0);
                        }
                    }
                    if($(this).parent().hasClass('chageBoderWidth')){
                        controlSet.children().eq(0).css({
                            borderWidth:num+'px'//设置边框宽度
                        });
                    }else if($(this).parent().hasClass('chageFilletWidth')){
                        controlSet.find('*').css({
                            borderRadius:num+'px'//设置圆角
                        });
                    }else if($(this).parent().hasClass('chagePadding')){
                        controlSet.children().eq(0).css({
                            padding:num+'px'//设置padding
                        });
                    }else if($(this).parent().hasClass('atlasPadding')&&num>=0){

                    }else if($(this).parent().hasClass('atlasColumn')){
                        if(num<2){
                            $(this).parent().find('input').val(1);
                        }
                        if(num==2){
                            controlSet.find('li').width((atlasFW/2-chageNum)/atlasFW*100+"%")
                            controlSet.find('li').height((atlasFH/(Math.ceil(ImgNum/2))-chageNum)/atlasFH*100+"%")
                        }else if(num==3){
                            controlSet.find('li').width((atlasFW/3-chageNum)/atlasFW*100+"%")
                            controlSet.find('li').height((atlasFH/Math.ceil(ImgNum/3)-chageNum)/atlasFH*100+"%")
                        }else if(num==1){
                            controlSet.find('li').width((atlasFW-chageNum)/atlasFW*100+"%")
                            controlSet.find('li').height((atlasFH/Math.ceil(ImgNum)-chageNum)/atlasFH*100+"%")
                        }
                    }else if($(this).parent().hasClass('shadowY')){
                        controlSet.find(".general").css({
                            boxShadow:shaDowX+'px '+num+'px ' +shaDowRange+'px '+shaDowCol
                        }).attr('shadowY',num);

                    }else if($(this).parent().hasClass('shadowX')){
                        controlSet.find(".general").css({
                            boxShadow:num+'px ' + shaDowY+'px ' + shaDowRange+'px '+shaDowCol
                        }).attr('shadowX',num);

                    }else if($(this).parent().hasClass('shadowRange')){
                        controlSet.find(".general").css({
                            boxShadow: shaDowX+'px '+ shaDowY+'px ' + num+'px '+shaDowCol
                        }).attr('shadowRange',num);
                    }else if($(this).parent().hasClass('borderSetWidth')){
                        if(controlSet.attr('type')=='4'){
                            controlSet.find('hr').css({
                                    borderBottomWidth:num+'px'
                            })
                        }else if(controlSet.attr('type')=='5'){
                            controlSet.find('hr').css({
                                    borderLeftWidth:num+'px'
                            })
                        }
                    }
                });
            }
            addNum($('.ImgBoderSizeS'),$('.ImgBoderSizeXia'));
            //阴影
            $('.shadowCol').colpick({
                onSubmit:function(hsb,hex,rgb,el) {
                    var shaDowY=$('.shadowY input').val();
                    var shaDowX=$('.shadowX input').val();
                    var shaDowRange=$('.shadowRange input').val();
                    controlSet.find('.general').css({
                        boxShadow:shaDowX+'px '+shaDowY+'px '+shaDowRange+'px '+'#'+hex 
                    }).attr('shadowCol','#'+hex);
                    $('.shadowCol .ImgchageBgSetColVal').css('background-color', '#'+hex);
                    $(el).colpickHide();
                }
            });
            //线条
            $('.borderStyle').colpick({
                onSubmit:function(hsb,hex,rgb,el) {

                    controlSet.attr('hrcol','#'+hex);
                    if(controlSet.attr('type')=='4'){
                        controlSet.find('hr').css({
                            borderBottomColor:'#'+hex
                        });
                    }else{
                       controlSet.find('hr').css({
                            borderLeftColor:'#'+hex
                        }); 
                    }
                    $('.borderStyle .ImgchageBgSetColVal').css('background-color', '#'+hex);
                    $(el).colpickHide();
                }
            });
            //获取值
            function setVal(){
                $('.videoSetCon').focus();
            }
            setVal();
        };
        chageCss(control);
    }
