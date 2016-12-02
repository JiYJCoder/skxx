$.fn.extend({
    generate:function(data){
        var box=$('.site_page_container ul');//手机控件盒子
        var defaults={//控件默认设置
            type:0,   //控件类型
            position:true,  //移动
            chageSize:true, //改变大小
            chageCss:true,
        };
        var setting=$.extend({},defaults,data);
        switch(setting.type){
            case 0://生成文字
                box.append()
                break;
        }
    }
})
$(function(){
    //过期关闭
    $('.close').click(function(){
        $('.remind').fadeOut(300);
    });
    //控件栏背景
    $('.base_btn ul li').hover(function(){
        $(this).find('.hoverBg').show();
    },function(){
        $(this).find('.hoverBg').hide();
    });
    //功能栏背景
    $('.site_tip ul li').hover(function(){
        $(this).find('.site_con_right_BtnBg').show();
    },function(){
        $(this).find('.site_con_right_BtnBg').hide();
    });
    //站点设置隐藏
    $('.site_close').click(function(){
        $('.siteSet').hide();
        $('.ji_dataBg').hide();
    });
    //站点设置显示
    $('.showSel').click(function(){
        $('.siteSet').show();
        $('.ji_dataBg').show();
    });
    //站点设置品牌等切换
    $(".index input").click(function(e){
        e.stopPropagation();
        $('.sel select').attr('disabled',"disabled").eq($(this).parents('li').index()).attr('disabled',false)
        
    })
    //站点设置TAB
    $('.siteSetConLeftBtn ul li').click(function(){
    		$(this).addClass('current').siblings().removeClass();
    		$(".siteSetConShow").hide().eq($(this).index()).show(); 
    		$(".siteSetbottom_save").hide().eq($(this).index()).show(); 
    //        $(".tab1").eq($(this).index()).show().siblings().hide(); 
    });
    //预览发布关闭
    $('.createBtn_close').click(function(){
        $('.ji_dataBg').hide();
        $('.create').hide();
    });
    //预览发布显示
    $('.createBtns').click(function(){
        $('.ji_dataBg').show();
        $('.create').show();
    });
    //各部门切换TAB
    $('.siteRange_data_con_btn ul li').click(function(){
    		$(this).addClass('current').siblings().removeClass();
    		$(".siteRange_data_con_btn_dataShow").hide().eq($(this).index()).show(); 
    //        $(".tab1").eq($(this).index()).show().siblings().hide(); 
    });
    //部门人员选择后，高度自增加
    $('.siteRange_show ul').hover(function(){
        var hSize=Math.round($('.siteRange_show ul li').size()/6)+2;
        var h=$('.siteRange_show ul li').outerHeight()
        $(this).stop().animate({
            height:hSize*h+"px",
        },300)
      
    },function(){
        $(this).stop().animate({
            height:'21px',
        },300)
    });
    //部门人员关闭
    $('.siteRange_data_cloase').click(function(){
        $('.siteRange_data').hide();
    });
    //部门人员显示
    $('.siteRange_btn').click(function(){
        $('.siteRange_data').show();
    });
    //组件和页面切换
    $('.site_con_leftHead ul li').click(function(){
    		$(this).addClass('current').siblings().removeClass();
    		$(".site_con_leftCon").hide().eq($(this).index()).show(); 
    //        $(".tab1").eq($(this).index()).show().siblings().hide(); 
    });
    //页面设置选择
    $('.site_pageBgiSet >p').click(function(){
        if($(this).hasClass('current')){
            $(this).removeClass("current")
        }else{
            $(this).addClass('current')
        }
    });
    //页面设置出现
    $('#pageSet').click(function(){
        $('.site_pageSet').show();
        $('.ji_dataBg').show();
    });
    //页面设置隐藏
    $('.site_pageSet_close').click(function(){
        $('.site_pageSet').hide();
        $('.ji_dataBg').hide();
    })
    //组件内容与CSS设置TAB
    $('.site_pageComponent_Btn ul li').click(function(){
    		$(this).addClass('current').siblings().removeClass();
    		$(".site_pageComponent_con").hide().eq($(this).index()).show(); 
    //        $(".tab1").eq($(this).index()).show().siblings().hide(); 
    })
    //选择部门等增加和删除数据
    function addData(){
        var dataBox=$('.con li');
        var dataShow=$('.siteRange_show ul');
        for(var i=0;i<=dataBox.size();i++){
            dataBox.eq(i).attr('data',i);
        }
        dataBox.click(function(){
            var num=$(this).attr('data');
            var data=$(this).find('span').text();
            var showDataLi=$('.siteRange_show ul li');
            if($(this).hasClass('current')){
                $(this).removeClass('current');
                for(var t=0;t<=$('.siteRange_show ul li').size();t++){
                    if(showDataLi.eq(t).attr('data')==num){
                        showDataLi.eq(t).remove();
                    }
                }
            }else{
                $(this).addClass('current');
                dataShow.append("<li data="+num+">"+"<img src='images/site_colse.png' width='7' height='7' class='data_close'>"+data+"</li>")
            }
        });
        $(document).on('click','.data_close',function(){
            for(var i=0;i<=dataBox.size();i++){
                if(dataBox.eq(i).attr('data')==$(this).parent('li').attr('data')){
                    dataBox.eq(i).removeClass('current');
                }
            }
            $(this).parent('li').remove();
        })
    }
    addData();
    //自动Tip
    function autoTip(){
        $('.site_page_conFeatures ul li').hover(function(){
            var topNum=$(this).offset().top;
            var data=$(this).attr('data');
            $(this).addClass('current');
            $('.autoTip').css({
                top:topNum-3
            }).text(data).show();
        },function(){
            $('.autoTip').hide();
            $(this).removeClass('current');
        })
    }
    autoTip();
    //增加页面
    function addPage(){
        $('.site_page_add').click(function(){
            var num=$('.site_page_con >ul >li').size()+1;
            var data="<li><p class='top'>"+num+"</p><p class='center'>第"+num+"页</p></li>"
            $('.site_page_con >ul').append(data)
        })
    }
    addPage();
    //站点页面颜色选择
    function colSel(){
        $("#ColSel").siblings().click(function(){
            var data=$(this).attr('data');
            $(this).addClass('current').siblings().removeClass('current');
            $('.valShow input').val(data);
            $('.colshow').css({
                backgroundColor:data
            })
        })
    };
    colSel();
    //站点页面，作品信息图片上传既显；
    function imgfile(){
        var file=new FileReader();
        var inpitFile=document.getElementById('file');
        var img=document.getElementById('image_preview')
        inpitFile.onchange=function(){
            file.onload=function(){
                img.src=file.result
            }
            file.readAsDataURL(this.files[0]);
        }
    }
    base.sel($('.site_PageheadSet_val ul li'))
    base.sel($('#site_zx ul li'))
    base.sel($('#site_hx ul li'))
    base.tip($('.site_tip ul li'));
    imgfile()
//    console.log(decodeURIComponent($('#baseForm').serialize()))
})