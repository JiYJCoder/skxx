    //首页创建空白站点
    function indexCreate(){
        $('.j_con_main_head_open').click(function(){
            ajaxPackage(url+"/wangjian/api/web/webSave",{
                id:"",
                merchentId:"44",
                type:"1",
                typeId:"1"

            })
            .done(function(data){
                sessionStorage.setItem("siteId",data.resultData.id);         
                ajaxPackage(url+"/wangjian/api/web/webPageSave",{
                    webId:sessionStorage.getItem("siteId"),
                    number:"1",
                    merchentId:"44",
                    pageTitle:"首页",

                })
                .done(function(data){
                    console.log(data)
                    var pageIdList=[];
                    pageIdList.push(data.resultData);
                    sessionStorage.setItem("pageIdArray",pageIdList);
                    window.location.href="site.html";
                })
               .fail(function(data){
                    console.log(data);
                })
            })
           .fail(function(data){
                console.log(data);
            })
        });
    }
    //首页行业标签页面
    function indexIndustry(callBack){
        ajaxPackage(url+"/wangjian/api/web/webTypeList")
        .done(function(data){
            callBack(data)
        })
       .fail(function(data){
            console.log(data);
        })
    }

    //首页站点列表
    function indexSetList(id,status,day,type,ind){
        ajaxPackage(url+"/wangjian/api/web/webList",{
            id:id,
            status:status,
            day:day,
            typeId:type,
            ind:ind,
            pageNo:"0",
            pageSize:"3",
        })
        .done(function(data){
            console.log(data);
            if(data.resultData.findList==undefined){
                alert('没有数据')
            }else{
                var li=$('.j_con_main_con_data >ul >li');
                var list=data.resultData.findList;
                $.each(list,function(i){
                    
                    //设置数据
                    li.eq(i).find('.pic img').attr('src',this.picture);
                    li.eq(i).find('.data ul li').eq(0).text(this.sumRead);
                    li.eq(i).find('.data ul li').eq(1).text(this.sumPer);
                    li.eq(i).find('.text .title').text(this.title);
                    li.eq(i).find('.text .des').text(this.bewrite);
                    li.eq(i).find('.featSmall ul li').eq(2).attr('data','停用');
                    li.eq(i).find('.featSmall ul li').eq(2).find('img').attr('src','images/siteline2current.png');
                    
                    //站点状态
                    if(this.status=='0'){
                        li.eq(i).find('.status img').attr('src','images/ji_caogao.png')
                    }else if(this.status=='1'){
                        li.eq(i).find('.status img').attr('src','');
                    }else if(this.status=='2'){
                        li.eq(i).find('.status img').attr('src','images/ji_stop.png');
                        li.eq(i).find('.featSmall ul li').eq(2).attr('data','启用')
                        li.eq(i).find('.featSmall ul li').eq(2).find('img').attr('src','images/ji_qy.png')
                    }else if(this.status=='3'){
                        li.eq(i).find('.status img').attr('src','images/ji_xiugai.png');
                    }

                })
            }
            base.tip($('.featSmall ul li'));
        })
       .fail(function(data){
            console.log(data);
        })
    }

    //增加站点页面
    function webAddPage(){
        $('.site_page_add').click(function(){
            var num=$('.site_page_con >ul >li').size()+1;
            var data="<li><p class='top'>"+num+"</p><p class='center'>第"+num+"页</p><div class='site_page_conFeatures'><ul><li data='删除'></li><li data='复制'></li><li data='设置' class='webPageSet'></li></ul></div></li>"
            $('.site_page_con >ul').append(data);
            var title=$('#Default >ul >li:last p.center').text();
            var num=$('#Default >ul >li').size();
            ajaxPackage(url+"/wangjian/api/web/webPageSave",{
                webId:sessionStorage.getItem("siteId"),
                number:num.toString(),
                merchentId:"44",
                pageTitle:title,

            })
            .done(function(data){
                var array = stringToArray(sessionStorage.getItem("pageIdArray"));
                array.push(data.resultData);
                sessionStorage.setItem("pageIdArray",array);
            })
           .fail(function(data){
                console.log(data);
            })
        });
    }
    //保存站点页面
    function webSavePage(){
        $('#save').click(function(){
            var num=$('#Default ul li.current').index();
            var content=$(".site_page_container ul").html();
            var title=$('#Default ul li.current p.center').text();
            var seo=$('#Default ul li.current').attr("seo");
            var des=$('#Default ul li.current').attr("description");
            var htmlPage=`<!doctype html>
            <html>
            <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="format-detection" content="telephone=no, email=no" />
            <meta name="keywords" content=${seo} />
            <meta name="description" content=${des} />
            <title>${title}</title>
            <link href="css/component.css" rel="stylesheet" type="text/css"/>
            <script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
            </head>
            <body>
            <div class='content'>
            <ul>
            ${content}
            </ul>
            </div>
            </body>
            </html>`;
            var array = stringToArray(sessionStorage.getItem("pageIdArray"));
            var index=$('#Default ul li.current').index()
            var num=$('#Default ul li.current').index()+1;
            $('.ajaxImg').fadeIn(300);
            $('.ji_dataBg').show();
            ajaxPackage(url+"/wangjian/api/web/webPageUrl",{
                webId:sessionStorage.getItem("siteId"),
                id:array[index],
                pageContent:htmlPage,
                remark:content,
                merchentId:"44",
                number:num.toString(),
            })
            .done(function(data){
                ajaxTip("保存成功");
                console.log(data);
            })
            .fail(function(data){
                ajaxTip("保存失败");
                console.log(data);
            })
        });
    }
    //返回页面内容
    function webReturnPage(){
        $(document).on("click","#Default ul li",function(){
            var array = stringToArray(sessionStorage.getItem("pageIdArray"));
            var box=$(".site_page_container ul")
            var num=$(this).index();
            if($(this).hasClass('current')){
                return false;
            }else{
                $(this).addClass('current').siblings().removeClass('current');
                $('.site_ControlRecordCon ul').children().remove();
                box.children().remove();
                ajaxPackage(url+"/wangjian/api/web/backPageContent",{
                    webId:sessionStorage.getItem("siteId"),
                    pageId:array[num],
                })
                .done(function(data){
                    if(!(data.resultData==undefined)){
                        $('.site_page_container >ul').append(data.resultData.remarks);
                        var li=$('.site_page_container >ul >li');
                        $(li).each(function(index){
                            var num=Number($(this).attr("type"));
                            new Mian($(this),setCssHtml(num));
                            if($(this).find('.chageSize').is(":hidden")){
                                $('.site_ControlRecordCon ul li').eq(index).removeClass('current');
                            }
                        });
                        
                    }
                })
                .fail(function(data){
                    console.log(data);
                }) 
            }
        });
    }
    //创建第一页
    function webload(){
        var array = stringToArray(sessionStorage.getItem("pageIdArray"));
        //返回页面数量，并创建视图
        ajaxPackage(url+"/wangjian/api/web/webUrlTitleBack",{
            webId:sessionStorage.getItem("siteId"),
        })
        .done(function(data){
            console.log(data)
            $('#Default >ul >li p.center').text(data.resultData[0].pageTitle);
            for (var i=0;i<data.resultData.length;i++){
                $('#Default >ul').append("<li><p class='top'>"+(i+1)+"</p><p class='center'>"+data.resultData[i].pageTitle+"</p><div class='site_page_conFeatures'><ul><li data='删除'></li><li data='复制'></li><li data='设置' class='webPageSet'></li></ul></div></li>")
            }
            $('#Default >ul>li').eq(0).addClass('current');
        })
        .fail(function(data){
            console.log(data);
        });
        //返回第一页内容
        ajaxPackage(url+"/wangjian/api/web/backPageContent",{
            webId:sessionStorage.getItem("siteId"),
            pageId:array[0],
        })
        .done(function(data){
            if(!(data.resultData==undefined)){
                $('.site_page_container ul').append(data.resultData.remarks);
            }
            var li=$('.site_page_container >ul >li');
            $(li).each(function(index){
                var num=Number($(this).attr("type"));
                new Mian($(this),setCssHtml(num)); 
                if($(this).find('.chageSize').is(":hidden")){
                    $('.site_ControlRecordCon ul li').eq(index).removeClass('current');
                }
            });
        })
        .fail(function(data){
            console.log(data);
        });
        //返回图片列表
        ajaxPackage(url+"/wangjian/api/web/pictureList",{
            objId:"44",
            type:"9",
            pageNo:"0",
            pageSize:"8"
        })
        .done(function(data){
            var imgArr=$("#myImg ul li img");
            var srcVal=data.resultData.list || new Array(8);
            var num=Number(data.resultData.sum);
            sessionStorage.setItem("ImgPageSize",num);
            if(data.resultData.list==null){
                $.each(srcVal,function(i){
                    imgArr.eq(i).prop('src','images/defaultImg.png')
                });
            }else{
                $.each(srcVal,function(i){
                    imgArr.eq(i).prop('src',this.picUrl)
                });
            }
            if(num<=5){
                for(var i=0 ;i<num;i++){
                    $('.next').before("<li>"+(i+1)+"</li>")
                }
            }else if(num>5){
                for(var i=0 ;i<5;i++){
                    $('.next').before("<li>"+(i+1)+"</li>")
                }
            }
            $('.PageNo ul li').eq(1).addClass('current');
         })
        .fail(function(data){
            console.log(data);
        });
    }
    //插入链接：返回所有页面
    function webReturnAllPage1(){
        $(document).on("click","#allPage",function(){
            $('.site_linePage ul').children().remove();
            ajaxPackage(url+"/wangjian/api/web/webUrlTitleBack",{
                webId:sessionStorage.getItem("siteId"),
            })
            .done(function(data){
                console.log(data)
                $.each(data.resultData,function(){
                    $('.site_linePage ul').append("<li class='fj' datalineval="+this.pageUrl+"><p>"+this.pageTitle+"<span class='btn'></span></p></li>")
                })
            })
            .fail(function(data){
                console.log(data);
            })
        });
    }
    //全局站点设置：返回所有页面
    function webReturnAllPage(){
        $('.showSel').click(function(){
            ajaxPackage(url+"/wangjian/api/web/webUrlTitleBack",{
                webId:sessionStorage.getItem("siteId"),
            })
            .done(function(data){
                $("select[name='indexSel']").children().remove();
                $.each(data.resultData,function(){
                    $("select[name='indexSel']").append("<option value='"+this.id+"'>"+this.pageTitle+"</option>")
                })
            })
            .fail(function(data){
                console.log(data);
            })
        })
    }    
    //站点页面设置
    function WebPageSet(){
        $('.site_pageSetBottomBtn').click(function(){
            var titleVal=$('.site_pageSetConRight > input').val();
            var pageBgCol=$(".valShow > input").val();
            var pageSeo=$(".site_pageSeo_val >input").val();
            var description=$('#description').val();
            var num=$("#Default ul li.current").index();
            var array = stringToArray(sessionStorage.getItem("pageIdArray"));
            $('.ajaxImg').fadeIn(300);
            $('.ji_dataBg').hide();
            ajaxPackage(url+"/wangjian/api/web/webPageSave",{
                webId:sessionStorage.getItem("siteId"),
                id:array[num],
                number:(num+1).toString(),
                pageTitle:titleVal,
                merchentId:"44"
            })
            .done(function(data){
                ajaxTip("设置成功");        
            })
            .fail(function(data){
                ajaxTip("设置失败");
                console.log(data);
            })
            if(pageBgCol==""){
                $('.site_page_container ul').css("background-color","transparent");
            }else{
                $('.site_page_container ul').css("background-color",pageBgCol);
            }
            $('#Default ul li.current p.center').text(titleVal);
            $('#Default ul li.current').attr("seo",pageSeo);
            $('#Default ul li.current').attr("description",description);
            $('.site_pageSet').hide();
            $('.ji_dataBg').hide();
        })
    }
    //翻页
    function pageClick(){
        $(document).on("click",".PageNo ul li",function(){
            var nowLi=$(".PageNo ul li.current");
            var li=$(".PageNo ul li");
            var nowNum=Number(nowLi.text());
            var nowIndex=nowLi.index();
            var nextNum=Number(nowLi.text());
            var preNum=Number(nowLi.text())-2;
            var sum=sessionStorage.getItem("ImgPageSize");
            var selImg=$('.site_ImgListSel ul li img');
            var img=$('#myImg ul li img')
            if($(this).hasClass("pre")){
                if(nowIndex==1&&nowLi.text()=="1"){
                    alert("已经是第一页");
                }else{
                    if(nowIndex==1){
                        li.eq(5).remove();
                        li.removeClass('current');
                        $('.pre').after("<li class='current'>"+(nowNum-1)+"</li>");
                    }else{
                        li.removeClass('current');
                        li.eq(nowIndex-1).addClass("current");  
                    }
                    ajaxPackage(url+"/wangjian/api/web/pictureList",{
                        objId:"44",
                        type:"9",
                        pageNo:preNum,
                        pageSize:"8",
                    })
                    .done(function(data){
                        var imgArr=$("#myImg ul li img");
                        var srcVal=data.resultData.list || new Array(8);
                        if(data.resultData.list==null){
                            $.each(srcVal,function(i){
                                imgArr.eq(i).prop('src','images/defaultImg.png')
                            });
                        }else{
                            $.each(srcVal,function(i){
                                imgArr.eq(i).prop('src',this.picUrl)
                            });
                        }
                        //图片选择
                        for(var i=0;i<img.size();i++){
                            for(var j=0;j<selImg.size();j++){
                                if(img.eq(i).attr('src')==selImg.eq(j).attr('src')){
                                    img.eq(i).parent().addClass('current');
                                    img.eq(i).parent().find('i').show();
                                }
                            }
                        }
                     })
                    .fail(function(data){
                        console.log(data);
                    });
                }
            }else if($(this).hasClass("next")){
                if(nowLi.text()==sum){
                    alert("已经是最后一页")
                }else{
                    if(nowIndex==5&&nowLi.text()!=sum){
                        li.eq(1).remove();
                        li.removeClass('current');
                        $('.next').before("<li class='current'>"+(nowNum+1)+"</li>");
                    }else{
                        li.removeClass('current');
                        li.eq(nowIndex+1).addClass("current");  
                    }
                    $('.site_ImgList ul li').removeClass('current');
                    ajaxPackage(url+"/wangjian/api/web/pictureList",{
                        objId:"44",
                        type:"9",
                        pageNo:nextNum,
                        pageSize:"8",
                    })
                    .done(function(data){
                        var imgArr=$("#myImg ul li img");
                        var srcVal=data.resultData.list||new Array(8);
                        if(data.resultData.list==null){
                            $.each(srcVal,function(i){
                                imgArr.eq(i).prop('src','images/defaultImg.png')
                            });
                        }else{
                            $.each(srcVal,function(i){
                                imgArr.eq(i).prop('src',this.picUrl)
                            });
                        }
                     })
                    .fail(function(data){
                        console.log(data);
                    });
                }
            }else if(!$(this).hasClass("current")){
                var nowNum=Number($(this).text())-1;
                $(this).addClass('current').siblings().removeClass("current");
                $('.site_ImgList ul li').removeClass('current');
                ajaxPackage(url+"/wangjian/api/web/pictureList",{
                    objId:"44",
                    type:"9",
                    pageNo:nowNum.toString(),
                    pageSize:"8",
                })
                .done(function(data){
                    var imgArr=$("#myImg ul li img");
                    var srcVal=data.resultData.list||new Array(8);
                    if(data.resultData.list==null){
                        $.each(srcVal,function(i){
                            imgArr.eq(i).prop('src','images/defaultImg.png')
                        });
                    }else{
                        $.each(srcVal,function(i){
                            imgArr.eq(i).prop('src',this.picUrl)
                        });
                    }
                    selImg.each(function(a){
                        var that=$(this);
                        img.each(function(b){
                            if($(this).attr('src')==that.attr('src')){
                                $(this).parent().addClass('current');
                                $(this).parent().find('i').show();
                            }else{
                                $(this).parent().removeClass('current');
                                $(this).parent().find('i').hide();
                            }
                        })
                    });
                 })
                .fail(function(data){
                    console.log(data);
                });
            }
        })
        
    }
    //素材库与我的：图片列表加载
    function webImgList(){
        $('.site_imgBoxBtn ul li').click(function(){
            if((!$(this).hasClass("current"))&&$(this).index()==0){
                ajaxPackage(url+"/wangjian/api/web/pictureList",{
                    objId:"44",
                    type:"9",
                    pageNo:0,
                    pageSize:"8",
                })
                .done(function(data){
                    var num =data.resultData.sum;
                    sessionStorage.setItem("ImgPageSize",num);
                    var imgArr=$("#myImg ul li img");
                    var srcVal=data.resultData.list||new Array(8);
                    var num=Number(data.resultData.sum);
                    if(data.resultData.list==null){
                        $.each(srcVal,function(i){
                            imgArr.eq(i).prop('src','images/defaultImg.png')
                        });
                    }else{
                        $.each(srcVal,function(i){
                            imgArr.eq(i).prop('src',this.picUrl)
                        });
                    }
                    var box= $('.PageNo > ul > li');
                    for (var t=0 ;t<box.size();t++){
                       if(!(box.eq(t).hasClass("next")||box.eq(t).hasClass("pre"))){
                           box.eq(t).remove();
                       }
                    }
                    if(num<=5&&num>0){
                        for(var i=0 ;i<num;i++){
                            $('.next').before("<li>"+(i+1)+"</li>")
                        }
                    }else if(num>5){
                        for(var i=0 ;i<5;i++){
                            $('.next').before("<li>"+(i+1)+"</li>")
                        }
                    }else if(num==0){
                        $('.next').before("<li>1</li>")
                    }
                    $('.PageNo ul li').eq(1).addClass('current');
                 })
                .fail(function(data){
                    console.log(data);
                });
            }else if((!$(this).hasClass("current"))&&$(this).index()==1){
                ajaxPackage(url+"/wangjian/api/web/pictureList",{
                    objId:"44",
                    type:"10",
                    pageNo:0,
                    pageSize:"8",
                })
                .done(function(data){
                    var num =data.resultData.sum;
                    sessionStorage.setItem("ImgPageSize",num);
                    var imgArr=$(".material ul li img");
                    var num=Number(data.resultData.sum);
                    var srcVal=data.resultData.list||new Array(8);
                    if(data.resultData.list==null){
                        $.each(srcVal,function(i){
                            imgArr.eq(i).prop('src','images/defaultImg.png')
                        });
                    }else{
                        $.each(srcVal,function(i){
                            imgArr.eq(i).prop('src',this.picUrl)
                        });
                    }
                    var box= $('.PageNo > ul > li');
                    for (var t=0 ;t<box.size();t++){
                       if(!(box.eq(t).hasClass("next")||box.eq(t).hasClass("pre"))){
                           box.eq(t).remove();
                       }
                    }
                    if(num<=5&&num>0){
                        for(var i=0 ;i<num;i++){
                            $('.next').before("<li>"+(i+1)+"</li>")
                        }
                    }else if(num>5){
                        for(var i=0 ;i<5;i++){
                            $('.next').before("<li>"+(i+1)+"</li>")
                        }
                    }else if(num==0){
                        console.log(1);
                        $('.next').before("<li>1</li>")
                    }
                    $('.PageNo ul li').eq(1).addClass('current');
                 })
                .fail(function(data){
                    console.log(data);
                });
            }
        });
    }
    
    
    //素材库类型加载
    function webGallery(){
        $('.materialBtn ul li').click(function(){
            if(!($(this).hasClass('current'))){
                var type=$(this).attr("type")
                ajaxPackage(url+"/wangjian/api/web/pictureList",{
                    objId:"44",
                    type:type,
                    pageNo:0,
                    pageSize:"8",
                })
                .done(function(data){
                    var num =data.resultData.sum;
                    sessionStorage.setItem("ImgPageSize",num);
                    var imgArr=$(".material ul li img");
                    var srcVal=data.resultData.list|| new Array(8);
                    if(data.resultData.list==null){
                        $.each(srcVal,function(i){
                            imgArr.eq(i).prop('src','images/defaultImg.png')
                        });
                    }else{
                        $.each(srcVal,function(i){
                            imgArr.eq(i).prop('src',this.picUrl)
                        });
                    }
                    var num=Number(data.resultData.sum);
                    var box= $('.PageNo > ul > li');
                    for (var t=0 ;t<box.size();t++){
                       if(!(box.eq(t).hasClass("next")||box.eq(t).hasClass("pre"))){
                           box.eq(t).remove();
                       }
                    }
                    if(num<=5&&num>0){
                        for(var i=0 ;i<num;i++){
                            $('.next').before("<li>"+(i+1)+"</li>")
                        }
                    }else if(num>5){
                        for(var i=0 ;i<5;i++){
                            $('.next').before("<li>"+(i+1)+"</li>")
                        }
                    }else if(num==0){
                        $('.next').before("<li>1</li>")
                    }
                    $('.PageNo ul li').eq(1).addClass('current');
                })
                .fail(function(data){

                })
            }
        });
        //图片搜索
        $('.searchIcon').click(function(){
            var name=$('.imgSearch >input').val();
            ajaxPackage(url+"/wangjian/api/web/pictureFindByName",{
                objId:"44",
                name:name,
                pageNo:0,
                pageSize:"8",
            })
            .done(function(data){
                var val=data.resultData|| new Array(8);
                var imgArr=$(".material ul li img");
                console.log(data);
                if(data.resultData==null){
                    $.each(val,function(i){
                        imgArr.eq(i).prop('src','images/defaultImg.png')
                    });
                }else{
                    $.each(val,function(i){
                        imgArr.eq(i).prop('src',val[i].picUrl)
                    });
                }
            })
        });
    }
    //全局站点设置
    function webSet(){ 
        $('.saveBtn').click(function(){
            var name=$('.baseSetTitle .baseInput1').val();
            var doMain=$('.baseSetTitle .baseInput2').val();
            var lang=$('.baseSetLang label').val();
            var logoImg=$('.baseSetLogo .showBox img').attr('src');
            var DdoMain=$('#domainVal').val();
            var indexId=$('.baseSetIndexShow ul li.current .sel select').val();
            ajaxPackage(url+"/wangjian/api/web/webSet",{
                webId:sessionStorage.getItem("siteId"),
                siteName:name,
                siteDomain:doMain,
                languageId:lang,
                logo:logoImg,
                siteSubDomain:DdoMain,
                homepageId:indexId,
            })
            .done(function(data){
                ajaxTip("保存成功");
                sessionStorage.setItem("siteSetId",data.resultData);
            })
        });
    }
    //站点发布
    function webRelease(){
        $('.createBtn').click(function(){
            var title=$('.createConSetInfon_right .title').val();
            var des=$('.createConSetInfon_right .ms').val();
            var type=$('.siteTypeInfo ul li.current').attr('type');
            var imgUrl=$('#image_preview').attr("src");
            if(sessionStorage.getItem("siteSetId")==null){
                ajaxTip("请设置站点域名");
            }else{
                ajaxPackage(url+"/wangjian/api/web/webSave",{
                    id:sessionStorage.getItem("siteId"),
                    merchentId:"44",
                    type:"2",
                    webSetId:sessionStorage.getItem("siteSetId"),
                    typeId:type,
                    title:title,
                    bewrite:des,
                    picture:imgUrl,

                })
                .done(function(data){
                    ajaxTip("发布成功");
                    $('.create').hide();
                    console.log(data)
                })
            }
             
        })
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
