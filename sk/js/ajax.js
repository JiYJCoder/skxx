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
                    console.log(data.resultData)
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

    //站点编辑
    function indexSiteEdit(){
        $(document).on("click",".featBig > ul > li.edit",function(){
            var id=$(this).parents("li").attr('id');
            console.log(id)
            if(id!=undefined){
                sessionStorage.setItem("siteId",id);
                ajaxPackage(url+"/wangjian/api/web/webUrlTitleBack",{
                    webId:id,
                })
                .done(function(data){
                    var pageIdList=[];
                    for(var i=0;i<data.resultData.length;i++){
                        pageIdList[i]=data.resultData[i].id;
                    }
                    window.location.href="site.html";
                })
            }
        })
    }
    //复制站点
    function indexWebCopy(){
        $(document).on('click','.featSmall ul li.copy',function(){
            var id=$(this).parents('li').attr('id');
            ajaxPackage(url+"/wangjian/api/web/webCopy",{
                webId:id,
            })
            .done(function(data){
                ajaxTip("复制成功");
                var status=$('.j_con_main_con_condition_statusVal ul li.current').attr('type');
                var day=$('.j_con_main_con_condition_dataVal ul li.current').attr('type');
                var type=$('.j_con_main_con_condition_sortVal ul li.current').attr('type');
                var ind=$('.j_con_main_con_condition_pxVal ul li.current').attr('type');
                console.log(data);
                indexSetList('44',status,day,type,ind);
                ajaxPage({id:'44',
                    status:status,
                    day:day,
                    typeId:type,
                    ind:ind,
                    pageNo:"0",
                    pageSize:"3",},"/wangjian/api/web/webList",indexWebPage);
            });
        });
    };
    //删除站点
    function indexWebDel(){
        $(document).on('click','.featSmall ul li.del',function(){
            var id=$(this).parents('li').attr('id');
            ajaxPackage(url+"/wangjian/api/web/webDelete",{
                id:id,
            })
            .done(function(data){
                ajaxTip("删除成功");
                var status=$('.j_con_main_con_condition_statusVal ul li.current').attr('type');
                var day=$('.j_con_main_con_condition_dataVal ul li.current').attr('type');
                var type=$('.j_con_main_con_condition_sortVal ul li.current').attr('type');
                var ind=$('.j_con_main_con_condition_pxVal ul li.current').attr('type');
                indexSetList('44',status,day,type,ind);
                ajaxPage({id:'44',
                    status:status,
                    day:day,
                    typeId:type,
                    ind:ind,
                    pageNo:"0",
                    pageSize:"3",},"/wangjian/api/web/webList",indexWebPage);
            });
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
    //首页站点预览
    function indexPreview(){
        $(document).on('click','.preview',function(){
            var id ="44";
        })
    }
    //首页搜索
    function indexSerach(){
        $('.searchBtn').click(function(){
            var key=$('.j_con_main_head_search_input >input').val();
            if(key==""){
                ajaxTip("请输入关键字");
            }else{
                ajaxPackage(url+"/wangjian/api/web/webFind",{
                    condition:key,
                    pageNo:"0",
                    pageSize:"3"
                })
                .done(function(data){
                    console.log(data)
                })
            }
            
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
            var box=$('.j_con_main_con_data >ul');
            box.empty();
            if(data.resultData.findList==undefined){
                ajaxTip("没有数据");
            }else{
                var li=$('.j_con_main_con_data >ul >li');
                var list=data.resultData.findList;
                $.each(list,function(i){
                    //设置数据
                      box.append(`<li id='${this.id}'>
                                <div class="pic">
                                    <img src="${this.picture}" alt="" width="210" height="190">
                                </div>
                                <div class="data">
                                    <ul class="clearfix">
                                        <li>${this.sumRead}</li>
                                        <li>${this.sumPer}</li>
                                    </ul>
                                </div>
                                <div class="text">
                                    <p class="title">${this.title}</p>
                                    <p class="des">${this.bewrite}</p>
                                </div>
                                <div class="status">
                                    <img src="" alt="">
                                </div>
                                <div class="feat">
                                    <div class="featSmall">
                                        <ul class="clearfix">
                                            <li data='删除' class="del">
                                                <img src="images/ji_del.png" alt="">
                                            </li>
                                            <li data='复制' class="copy">
                                                <img src="images/ji_copy.png" alt="">
                                                
                                            </li>
                                            <li data='启用' class="switch"><img src="images/ji_qy.png" alt=""></li>
                                        </ul>
                                    </div>
                                    <div class="featBig">
                                        <ul>
                                            <li class='preview'>预览</li>
                                            <li class="datas">数据统计</li>
                                            <li class="edit">编辑</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>`);
                    
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

                });
            }
        })
       .fail(function(data){
            console.log(data);
        });
    }

    //站点列表翻页数据
    function indexWebPage(page){
        var status=$('.j_con_main_con_condition_statusVal ul li.current').attr('type');
        var day=$('.j_con_main_con_condition_dataVal ul li.current').attr('type');
        var type=$('.j_con_main_con_condition_sortVal ul li.current').attr('type');
        var ind=$('.j_con_main_con_condition_pxVal ul li.current').attr('type');
        ajaxPackage(url+"/wangjian/api/web/webList",{
            id:'44',
            status:status,
            day:day,
            typeId:type,
            ind:ind,
            pageNo:page,
            pageSize:"3",
        })
        .done(function(data){
            console.log(data);
            if(data.resultData.findList==undefined){
                ajaxTip("没有数据")
            }else{
                var li=$('.j_con_main_con_data >ul >li');
                var box=$('.j_con_main_con_data >ul');
                box.empty();
                var list=data.resultData.findList;
                $.each(list,function(i){
                    //设置数据
                      box.append(`<li id='${this.id}'>
                                <div class="pic">
                                    <img src="${this.picture}" alt="" width="210" height="190">
                                </div>
                                <div class="data">
                                    <ul class="clearfix">
                                        <li>${this.sumRead}</li>
                                        <li>${this.sumPer}</li>
                                    </ul>
                                </div>
                                <div class="text">
                                    <p class="title">${this.title}</p>
                                    <p class="des">${this.bewrite}</p>
                                </div>
                                <div class="status">
                                    <img src="" alt="">
                                </div>
                                <div class="feat">
                                    <div class="featSmall">
                                        <ul class="clearfix">
                                            <li data='删除' class="del">
                                                <img src="images/ji_del.png" alt="">
                                            </li>
                                            <li data='复制' class="copy">
                                                <img src="images/ji_copy.png" alt="">
                                                
                                            </li>
                                            <li data='启用' class="switch"><img src="images/ji_qy.png" alt=""></li>
                                        </ul>
                                    </div>
                                    <div class="featBig">
                                        <ul>
                                            <li class="preview">预览</li>
                                            <li class="datas">数据统计</li>
                                            <li class="edit">编辑</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>`);
                    
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

                });
            }
        })
       .fail(function(data){
            console.log(data);
        });
    }
    //ajax翻页
    function ajaxPage(data,link,callBack){
        $(document).off("click",".PageNo ul li");
        var li= $('.PageNo > ul > li');
        var sum=1;
        $.ajax({
            url:url+link,
            type:'POST',
            dataType:'json',
            data:data,
            async: false,
            success:function(data){
                if(data.resultData.sum !=undefined){
                    sum=data.resultData.sum;
                }
            }
        })
        //移除按钮
        for (var t=0 ;t<li.size();t++){
           if(!(li.eq(t).hasClass("next")||li.eq(t).hasClass("pre"))){
               li.eq(t).remove();
           }
        }
        
        //生成按钮
        if(sum<=5&&sum>0){
            for(var i=0 ;i<sum;i++){
                $('.next').before("<li>"+(i+1)+"</li>")
            }
        }else if(sum>5){
            for(var i=0 ;i<5;i++){
                $('.next').before("<li>"+(i+1)+"</li>")
            }
        }else if(sum==0){
            $('.next').before("<li>1</li>")
        }
        
        $('.PageNo ul li').eq(1).addClass('current');
        
        $(document).on("click",".PageNo ul li",function(){
            var nowLi=$(".PageNo ul li.current");
            var li=$(".PageNo ul li");
            var nowNum=Number(nowLi.text());
            var nowIndex=nowLi.index();
            var nextNum=Number(nowLi.text());
            var preNum=Number(nowLi.text())-2;
            var selImg=$('.site_ImgListSel ul li img');
            var img=$('#myImg ul li img');
//            $('#myImg ul li').removeClass('current');//删除图片选择
//            $('#myImg ul li i').hide();//删除图片选择
            if($(this).hasClass("pre")){
                if(nowLi.text()=="1"){
                    ajaxTip('已经是第一页');
                }else{
                    if(nowIndex==1){
                        li.eq(5).remove();
                        li.removeClass('current');
                        $('.pre').after("<li class='current'>"+(nowNum-1)+"</li>");
                    }else{
                        li.removeClass('current');
                        li.eq(nowIndex-1).addClass("current");  
                    }
                    callBack(preNum);
                }
            }else if($(this).hasClass("next")){
                if(nowNum==Number(sum)){
                    ajaxTip('已经是最后一页');
                }else{
                    if(nowIndex==5&&nowLi.text()!=sum){
                        li.eq(1).remove();
                        li.removeClass('current');
                        $('.next').before("<li class='current'>"+(nowNum+1)+"</li>");
                    }else{
                        li.removeClass('current');
                        li.eq(nowIndex+1).addClass("current");  
                    }
                    callBack(nextNum)
                    
                }
            }else if(!$(this).hasClass("current")){
                var nowNum=Number($(this).text())-1;
                $(this).addClass('current').siblings().removeClass("current");
                callBack(nowNum.toString());
            }
            //图片选择
//            for(var i=0;i<img.size();i++){
//                for(var j=0;j<selImg.size();j++){
//                    if(img.eq(i).attr('src')==selImg.eq(j).attr('src')){
//                        img.eq(i).parent().addClass('current');
//                        img.eq(i).parent().find('i').show();
//                    }
//                }
//            }
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
            <link href="./mobile/css/component.css" rel="stylesheet" type="text/css"/>
            <script type="text/javascript" src="./mobile/js/jquery-2.1.4.min.js"></script>
            <script type="text/javascript" src="./mobile/js/mobile.js"></script>
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
//                    webId:sessionStorage.getItem("siteId"),
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
    
    //站点图片我的
    function webImgLoad(type,box){
        //返回图片列表
        var id="44";
        ajaxPackage(url+"/wangjian/api/web/pictureList",{
            objId:id,
            type:type,
            pageNo:'0',
            pageSize:"8"
        })
        .done(function(data){
            console.log(data);
            var imgArr=$(box);
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
         })
    }

    //站点图片分页
    function webImgAjaxPage(page){
        var id="44";
        var typeLi=$('.site_imgBoxBtn ul li.current');
        var type='9';
        var box='#myImg ul li img';
        if(typeLi.index()==1){
            type=$('.materialBtn ul li.current').attr('type');
            box='.material ul li img';
        }
        ajaxPackage(url+"/wangjian/api/web/pictureList",{
            objId:id,
            type:type,
            pageNo:page,
            pageSize:"8"
        })
        .done(function(data){
            var imgArr=$(box);
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
         })
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
//            webId:sessionStorage.getItem("siteId"),
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
    //素材库与我的：图片列表加载
    function webImgList(){
        $('.site_imgBoxBtn ul li').click(function(){
            if((!$(this).hasClass("current"))&&$(this).index()==0){
                webImgLoad('9',"#myImg ul li img");
                ajaxPage({
                    objId:"44",
                    type:'9',
                    pageNo:'0',
                    pageSize:"8"
                },"/wangjian/api/web/pictureList",webImgAjaxPage)
            }else if((!$(this).hasClass("current"))&&$(this).index()==1){
                webImgLoad('10',".material ul li img");
                ajaxPage({
                    objId:"44",
                    type:'10',
                    pageNo:'0',
                    pageSize:"8"
                },"/wangjian/api/web/pictureList",webImgAjaxPage)
            }
        });
    }
    //素材库类型加载
    function webGallery(){
        $('.materialBtn ul li').click(function(){
            if(!($(this).hasClass('current'))){
                var type=$(this).attr("type");
                webImgLoad(type);
                ajaxPage({
                    objId:"44",
                    type:type,
                    pageNo:'0',
                    pageSize:"8"
                },"/wangjian/api/web/pictureList",webImgAjaxPage)
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
                console.log(data)
                sessionStorage.setItem("siteSetId",data.resultData.id);
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
