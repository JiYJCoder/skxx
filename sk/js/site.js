$(function(){
    base.close('.close','.remind')//关闭过期
    base.close('.site_close','.siteSetShow','.showSel','.ji_dataBg')//站点设置开关
    base.close('.siteLineColse','.siteLine',null,'.ji_dataBg')//链接设置开关
    base.close('.createBtn_close','.create','.createBtns','.ji_dataBg')//预览发布开关
    base.close('.siteRange_data_cloase','.siteRange_data','.siteRange_btn')//预览发布开关
    base.close('.site_pageSet_close','.site_pageSet','#pageSet','.ji_dataBg')//页面设置开关
    base.hover('.base_btn ul li','.hoverBg')//控件栏hover
    base.hover('.site_tip ul li','.site_con_right_BtnBg')//功能栏hover
    base.tab('.siteRange_data_con_btn ul li',".siteRange_data_con_btn_dataShow")//预览发布TAB
    base.tab('.site_con_leftHead ul li',".site_con_leftCon")//组件与页面TAB
    base.tab('.site_pageComponent_Btn ul li',".site_pageComponent_con")//面板TAB
    base.tab('.site_lineCommodityBtn ul li',".site_lineCommodityCon")//链接==》商品TAB
    base.close('.site_imgBox_close','.site_imgBox',null,'.ji_dataBg');//图库
    //站点设置品牌等切换
    $(".index input").click(function(e){
        e.prevenDefault();
        $('.sel select').attr('disabled',"disabled").eq($(this).parents('li').index()).attr('disabled',false)
    })
    //站点设置TAB
    $('.siteSetConLeftBtn ul li').click(function(){
        $(this).addClass('current').siblings().removeClass();
        $(".siteSetTabCon").hide().eq($(this).index()).show(); 
        $(".siteLineTab").hide().eq($(this).index()).show(); 
        $(".saveBtn").hide().eq($(this).index()).show(); 
        $(".siteLineBtn").hide().eq($(this).index()).show(); 
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
    //页面设置选择
    $('.site_pageBgiSet >p').click(function(){
        if($(this).hasClass('current')){
            $(this).removeClass("current")
        }else{
            $(this).addClass('current')
        }
    });
    //链接==》页面
    $('.site_linePage ul li').click(function(e){
        e.stopPropagation();
        $(".site_linePage").find("li").removeClass("current");
        $(this).addClass('current');
    });
    base.sel('.site_lineshop ul li');//链接==》店铺选择
    base.sel('.site_lineCommodityCon ul li');//链接==》商品选择
    base.sel('.site_PageheadSet_val ul li');//页面设置==》头底部选择
    base.sel('.siteLine_Features ul li');//链接==》功能选择
    base.sel('#site_zx ul li');//页面设置==》横向选择
    base.sel('#site_hx ul li');//页面设置==》纵向选择
    base.sel('.bgStyle ul li');//面板背景选择
    base.sel('.materialBtn ul li');//面板背景选择
    base.tip($('.site_tip ul li'));//功能栏Tip
    base.tab('.site_imgBoxBtn ul li','.site_ImgList')//图片素材库
    
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
    imgfile();
    
//    console.log(decodeURIComponent($('#baseForm').serialize()))
})