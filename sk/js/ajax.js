$(function(){
    var ajaxPackage=function(url,json){
        return $.ajax({
            url:url,
            type:'POST',
            dataType:'json',
            data:json,
        })
    }
    //首页创建空白站点
    $('.j_con_main_head_open').click(function(){
        ajaxPackage(url+"/wangjian/api/web/webSave",{
            id:"",
            merchentId:"44",
            type:"1",
            typeId:"1"
            
        })
        .done(function(data){
            var pageIdList=[];
            sessionStorage.setItem("siteId",data.resultData.id);         
            pageIdList.push(data.resultData.pages.id);
            sessionStorage.setItem("pageIdArray",pageIdList);
            window.location.href="file:///C:/Users/u1/Desktop/box/sk/site.html";
        })
       .fail(function(data){
            console.log(data);
        })
    });
    //首页行业标签页面
    ajaxPackage(url+"/wangjian/api/web/webTypeList")
    .done(function(data){
        $.each(data.resultData,function(){
            $('.j_con_main_con_condition_sortVal ul').append("<li>"+this.typeName+"</li>")
        })
    })
   .fail(function(data){
        console.log(data);
    })
    //增加站点页面
    $('.site_page_add').click(function(){
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
    //保存站点页面
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
        var num=$('#Default ul li.current').index();
        $('.ajaxImg').fadeIn(300);
        $('.ji_dataBg').show();
        ajaxPackage(url+"/wangjian/api/web/webPageUrl",{
            webId:sessionStorage.getItem("siteId"),
            id:array[num],
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
    })
    //返回页面内容
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
                    $('.site_page_container ul').append(data.resultData.remarks);
                    $.each($('.site_page_container ul li'),function(){
                        var num=Number($(this).attr("type"));
                        new Mian($(this),setCssHtml(num));                  
                    })
                }
                
            })
            .fail(function(data){
                console.log(data);
            }) 
        }
    });
    //页面加载数据
    function refresh(){
        var array = stringToArray(sessionStorage.getItem("pageIdArray"));
        ajaxPackage(url+"/wangjian/api/web/backPageContent",{
        webId:sessionStorage.getItem("siteId"),
        pageId:array[0],
        })
        .done(function(data){
            if(!(data.resultData==undefined)){
                $('.site_page_container ul').append(data.resultData.remarks);
            }
            $.each($('.site_page_container ul li'),function(){
                var num=Number($(this).attr("type"));
                new Mian($(this),setCssHtml(num));                  
            })
        })
        .fail(function(data){
            console.log(data);
        });
        ajaxPackage(url+"/wangjian/api/web/webUrlTitleBack",{
            webId:sessionStorage.getItem("siteId"),
        })
        .done(function(data){
            $('#Default >ul >li p.center').text(data.resultData[0].pageTitle);
            for (var i=1;i<data.resultData.length;i++){
                $('#Default >ul').append("<li><p class='top'>"+(i+1)+"</p><p class='center'>"+data.resultData[i].pageTitle+"</p><div class='site_page_conFeatures'><ul><li data='删除'></li><li data='复制'></li><li data='设置' class='webPageSet'></li></ul></div></li>")
            }
            console.log(data.resultData);        
        })
        .fail(function(data){
            console.log(data);
        });
    }
    refresh()
    //返回所有页面
    $(document).on("click","#allPage",function(){
        $('.site_linePage ul').children().remove();
        ajaxPackage(url+"/wangjian/api/web/webUrlTitleBack",{
            webId:sessionStorage.getItem("siteId"),
        })
        .done(function(data){
            $.each(data.resultData,function(){
                $('.site_linePage ul').append("<li class='fj' datalineval="+this.pageUrl+"><p>"+this.pageTitle+"<span class='btn'></span></p></li>")
            })
            console.log(data.resultData);        
        })
        .fail(function(data){
            console.log(data);
        })
    });
    
    
})