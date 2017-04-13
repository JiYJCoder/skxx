
var url ="http://120.25.102.247:8180/";

// var url="http://192.168.0.103:8080/";


function ajax (url,type,json){
  var promise =new Promise(function(resolve,reject){
    $.ajax({
      url: url,
      type: type,
      dataType:"json",
      data:json,
      success:function(data){
        resolve(data);
      },
      error:function(data){
          reject(data);
      }
    })

  })

  return promise;
}
//提示
function ajaxTip(text){
    $('.ajaxImg').hide(300);
    $('.ji_dataBg').hide();
    $('.ajaxTip').fadeIn();
    $('.ajaxTip').text(text);
    setTimeout("$('.ajaxTip').fadeOut()",2000)
}
//ajax封装
var ajaxPackage=function(url,json){
    return $.ajax({
        url:url,
        type:'POST',
        dataType:'json',
        data:json,
    })
}
  //上方导航栏跳转
  $(".homePage_header_list li").eq(0).click(function(event) {
    window.location.href="";
  });

  $(".homePage_header_list li").eq(1).click(function(event) {
    window.location.href="storeList.html";
  });

  $(".homePage_header_list li").eq(2).click(function(event) {
    window.location.href="productCList.html";
  });

  $(".homePage_header_list li").eq(3).click(function(event) {
    window.location.href="editApp.html";
  });

  //产品库左侧li跳转
  $(".productList_content_aside li").eq(0).click(function(){
    window.location.href="productCList.html";
  });
  $(".productList_content_aside li").eq(1).click(function(){
    window.location.href="productClassfix.html";
  });
  $(".productList_content_aside li").eq(2).click(function(){
    window.location.href="productSpec.html";
  });

  //线上分店左侧跳转

  $(".storeHome_aside_list li").eq(0).click(function(){
    window.location.href="storeHome.html";
  });
  $(".storeHome_aside_list li").eq(1).click(function(){
    window.location.href="productGlist.html";
  });
  $(".storeHome_aside_list li").eq(2).click(function(){
      window.location.href="orderMan.html";
  });
  $(".storeHome_aside_list li").eq(3).click(function(){
      window.location.href="storeRedecorated.html";
  });
  $(".storeHome_aside_list li").eq(4).click(function(){
      window.location.href="storeSetup.html";
  });


  //非空判断
  function padgeWhite(params){
      var newParams=$.trim(params)
      if(newParams==""||newParams==undefined||newParams===null){
        console.log(123);
        return false;
      }else{
        return true;
      }
  }

  //url拿值
  function urlPageParam(){
    var string =window.location.search;
    var array = string.split("=");
    return array[1];
  }

  //
function switchOrder (status) {
  var _string="";
  switch (status) {
    case "0":
    _string="全部";
    break;
    case "1":
    _string="未支付";
    break;
    case "2":
    _string="已支付待发货";
    break;
    case "3":
    _string="已发货待收货";
    break;
    case "4":
    _string="已收货";
    break;
    case "5":
    _string="取消订单";
    break;
    case "6":
    _string="订单变更";
    break;
    default:

  }
  return string;
  }
