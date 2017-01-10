$(function(){
    var pageIdList=[];
    var ajaxPackage=function(url,json){
        return $.ajax({
            url:url,
            type:'POST',
            dataType:'json',
            data:json,
        })
    }
    $('.j_con_main_head_open').click(function(){
        ajaxPackage("http://120.25.102.247:8180/wangjian/api/web/webSave",{
            id:"",
            merchentId:"44",
            type:"1",
            typeId:"1"
            
        })
        .done(function(data){
            window.location.href="file:///C:/Users/u1/Desktop/box/sk/site.html";
            sessionStorage.setItem("siteId",data.resultData.id);
            sessionStorage.setItem("pageId",data.resultData.pages.id);
            pageIdList.push(sessionStorage.getItem("pageId"));
            
        })
       .fail(function(data){
            console.log(data);
        })
    });
    //增加站点页面
    $('.site_page_add').click(function(){
        pageIdList[0]=sessionStorage.getItem("pageId");
        var num=$('#Default ul li:last').index()+1;
        ajaxPackage("http://120.25.102.247:8180/wangjian/api/web/webPageSave",{
            webId:sessionStorage.getItem("siteId"),
            number:num.toString(),
            merchentId:"44",
            pageTitle:"第"+num+"页"
            
        })
        .done(function(data){
            pageIdList.push(data.resultData);
        })
       .fail(function(data){
            console.log(data);
        })
    });
    //保存站点页面
    $('#save').click(function(){
        var num=$('#Default ul li.current').index();
        var content=$(".site_page_container").html;
        var title=$('#Default ul li.current').attr("title");
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
        ${content}
        </div>
        </body>
        </html>`;
        pageIdList[0]=sessionStorage.getItem("pageId");
        ajaxPackage("http://120.25.102.247:8180/wangjian/api/web/webPageUrl",{
            webId:sessionStorage.getItem("siteId"),
            id:pageIdList[num],
            pageContent:htmlPage,
            
        })
        .done(function(data){
            console.log(data);            
        })
        .fail(function(data){
            console.log(data);
        })
    })
})