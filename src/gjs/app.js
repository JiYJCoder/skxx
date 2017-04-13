function homePage()
{

  //000
}


//产品分类
function productCalssFix(){
    //产品分类列表
    function prodectClassFixList(){
        ajaxPackage(url+"wangjian/api/productType/listProduct",{merchantId:"44"})
        .done(function(data){
            console.log(data)
            var list=data.resultData;
            $('.productSortBoxConBox').empty();
            
            if(list !=undefined){
                for (var i =0;i<list.length;i++){
                    $('.productSortBoxConBox').append(`<div class="productSortTitle productSortCon" id="${list[i].id}">
                                                <ul class="clearfix">
                                                    <li class="productSortConNum"><p>${list[i].indexs}</p></li>
                                                    <li class="productSortConTitle"><p>${list[i].typeName}</p></li>
                                                    <li class="productSortConSort">
                                                        <ul class="clearfix">
                                                            <li class="sTop"></li>
                                                            <li class="Top"></li>
                                                            <li class="sBottom"></li>
                                                            <li class="bottom"></li>
                                                        </ul>
                                                    </li>
                                                    <li class="productSortConAddChild">
                                                        <ul class="clearfix">
                                                            <li class="productSortChildAdd">添加子分类</li>
                                                        </ul>
                                                    </li>
                                                    <li class="productSortConEd">
                                                        <div class="productSortConEdGn clearfix">
                                                            <div class="productSortConEdGnXg" id="prdFX">编辑</div>
                                                            <div class="productSortConEdGnDel" id="prdFD">
                                                                删除
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>`);

                    if(list[i].wTypes !=undefined){
                        for(var t=0;t<list[i].wTypes.length;t++){
                            $(".productSortConAddChild ul").eq(i).prepend(`<li class="add" id="${list[i].wTypes[t].id}"><input type="text" maxlength="4" id='prAddInput' value="${list[i].wTypes[t].typeName}"><div class="childChageAdd childChageC"></div>
                                                                <div class="childChage">

                                                                </div>
                                                                <div class="childDel preFlchildel">

                                                                </div>
                                                            </li>`);
                        }
                    }

                }
            }
            $(".productSortConAddChild .add input").css({
                border:"0"
            }).prop('readonly',true);
            $(".productSortConAddChild .add .childChageAdd").hide();
        });
    }
    prodectClassFixList();
    
    //删除分类
    $(document).on('click','#prdFD',function(){
        var id=$(this).parents('.productSortCon').attr('id');
        ajaxPackage(url+"wangjian/api/productType/deleteProduct",{id:id})
        .done(function(data){
            alert("删除分类成功");
            prodectClassFixList();
        })
        .fail(function(){
            alert("删除失败");
        })
    })
    
    //修改主分类名字
    $(document).on('click','#prdFX',function(){
        var id=$(this).parents('.productSortCon').attr('id');
        if($(this).text()=="编辑"){
            $(this).text("保存").parents('.productSortCon').find(".productSortConTitle p").prop("contenteditable","true").focus();
        }else if($(this).text()=="保存"){
            var name=$(this).parents('.productSortCon').find(".productSortConTitle p").text();
            $(this).text("编辑").parents('.productSortCon').find(".productSortConTitle p").prop("contenteditable","false");
            ajaxPackage(url+"wangjian/api/productType/editProduct",{id:id,typeName:name})
            .done(function(data){
                alert("修改成功");
            })
            .fail(function(data){
                alert("修改失败");
            })
        }
    });
    
    //增加主分类
    function addClassify(){
        $('.productClassfix_btnN').click(function(){
            $('.productClassfix_addAlert').show();
            $('#pc_addAlert_input').val("");
        });
        $('#closeProductClassfix_addAlert').click(function(){
            $('.productClassfix_addAlert').hide();
        });
        $('.productClassfix_addAlert_btn').click(function(){
            var name=$('#pc_addAlert_input').val();
            ajaxPackage(url+"wangjian/api/productType/addProduct",{merchantId:"44",typeName:name})
            .done(function(data){
                alert("增加成功");
                $('.productClassfix_addAlert').hide();
                prodectClassFixList();
            })
            .fail(function(data){
                alert("增加失败");
            })
        })
    }
    addClassify();
    
    //分类排序
    function CalssSifySort(btn){
        $(document).on('click',btn,function(){
            var id=$(this).parents('.productSortCon').attr('id');
            if(btn==".sTop"){
                ajaxPackage(url+"wangjian/api/productType/sortProduct",{id:id,type:"1"})
                .done(function(data){
                    prodectClassFixList();
                })
            }else if(btn==".Top"){
                ajaxPackage(url+"wangjian/api/productType/sortProduct",{id:id,type:"3"})
                .done(function(data){
                    console.log(data)
                    prodectClassFixList();
                })
            }else if(btn==".sBottom"){
                ajaxPackage(url+"wangjian/api/productType/sortProduct",{id:id,type:"4"})
                .done(function(data){
                    console.log(data)
                    prodectClassFixList();
                })
            }else if(btn==".bottom"){
                ajaxPackage(url+"wangjian/api/productType/sortProduct",{id:id,type:"2"})
                .done(function(data){
                    console.log(data)
                    prodectClassFixList();
                })
            }
        })
    }
    CalssSifySort(".sTop");
    CalssSifySort(".Top");
    CalssSifySort(".sBottom");
    CalssSifySort(".bottom");
    
    //增加子分类
    $(document).on('click','.childChageAdds',function(){
        var id =$(this).parents('.productSortCon').attr('id');
        var name=$(this).parents('.productSortCon').find('#prAddInput').val();
        ajaxPackage(url+"wangjian/api/productType/addProduct",{merchantId:'44',typeName:name,parentId:id})
        .done(function(data){
            console.log(data);
            alert("增加成功");
            prodectClassFixList();
        });
        $(this).hide();
        $(this).parents('.add').find('.childChage').show();
        $(this).parents('.add').find('.childDel').show();
        $(this).parents('.add').find('#prAddInput').prop('readonly',true).css({
            border:"0"
        });
    });

    
    //修改子分类
    $(document).on('click','.childChageC',function(){
        var id=$(this).parents('.add').attr('id');
        var name=$(this).parents('.add').find('#prAddInput').val();
        ajaxPackage(url+"wangjian/api/productType/editProduct",{id:id,typeName:name})
        .done(function(data){
            alert("修改成功");
        });
        $(this).hide();
        $(this).parents('.add').find('.childChage').show();
        $(this).parents('.add').find('.childDel').show();
        $(this).parents('.add').find('#prAddInput').prop('readonly',true).css({
            border:"0"
        });
    });
    
    //删除子分类
    $(document).on('click','.preFlchildel',function(){
        var id=$(this).parents('.add').attr('id');
        ajaxPackage(url+"wangjian/api/productType/deleteProduct",{id:id})
        .done(function(data){
            alert("删除成功");
            prodectClassFixList();
        });
    });
}

//分类与规格共同功能
function same(){
    //增加子分类html
    $(document).on('click','.productSortChildAdd',function(){
        $(this).parents(".productSortConAddChild ul").prepend(`<li class="add"><input type="text" maxlength="4" id='prAddInput'><div class="childChageAdd"></div><div class="childChage"></div><div class="childDel"></div></li>`);
        $(this).parents(".productSortConAddChild ul").find("li").eq(0).find('input').focus();
        $(this).parents(".productSortConAddChild ul").find("li").eq(0).find('.childChage,.childDel').hide();
        if($(this).parents().hasClass('productSpcTitle')){
            $('.childChageAdd').addClass('paramAdds');
        }else{
            $('.childChageAdd').addClass('childChageAdds');
        }
    });
    //修改子分类html
    $(document).on('click','.childChage',function(){
        $(this).hide();
        $(this).parents('.add').find('.childChageAdd').show();
        $(this).parents('.add').find('.childDel').hide();
        $(this).parents('.add').find('#prAddInput').prop('readonly',false).focus().css({
            border:"1px solid #dbdbdb"
        });
        
    });
    //取消input边框
    $(document).on('blur','#prAddInput',function(){
        $(this).css({
            border:'0'
        });
    });
}
same();
//产品规格
function productSpec(){
    function prodectClassFixList(){
        ajaxPackage(url+"wangjian/api/productType/productParamValuesCollection",{merchantId:"44"})
        .done(function(data){
            console.log(data)
            var list=data.resultData;
            $('.productSortBoxConBox').empty();
            
            if(list !=undefined){
                for (var i =0;i<list.length;i++){
                    $('.productSortBoxConBox').append(`<div class="productSortTitle productSortCon productSpcTitle">
                        <ul class="clearfix" id="${list[i].wjProductParam.id}">
                            <li class="productSortConNum"><p>${i}</p></li>
                            <li class="productSortConTitle"><p>${list[i].wjProductParam.paramName}</p></li>
                            <li class="productSortConAddChild">
                                <ul class="clearfix">
                                    <li class="productSortChildAdd">添加子分类</li>
                                </ul>
                            </li>
                            <li class="productSortConEd">
                                <div class="productSortConEdGn clearfix">
                                    <div class="productSortConEdGnXg" id="prdGb">编辑</div>
                                    <div class="productSortConEdGnDel" id="prdGd">
                                        删除
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>`);

                    if(list[i].paramValue !=undefined){
                        for(var t=0;t<list[i].paramValue.length;t++){
                            $(".productSortConAddChild ul").eq(i).prepend(`<li class="add" id="${list[i].paramValue[t].id}"><input type="text" maxlength="4" id='prAddInput' value="${list[i].paramValue[t].paramValue}"><div class="childChageAdd paramVue"></div>
                                                                <div class="childChage">

                                                                </div>
                                                                <div class="childDel ParamValueDelete">

                                                                </div>
                                                            </li>`);
                        }
                    }

                }
            }
            $(".productSortConAddChild .add input").css({
                border:"0"
            }).prop('readonly',true);
            $(".productSortConAddChild .add .childChageAdd").hide();
        })
    }
    prodectClassFixList();
    //修改主规格
    $(document).on('click','#prdGb',function(){
        var id=$(this).parents('.productSpcTitle ul').attr("id");
        if($(this).text()=="编辑"){
            $(this).text("保存").parents('.productSortCon').find(".productSortConTitle p").prop("contenteditable","true").focus();
        }else if($(this).text()=="保存"){
            console.log(id)
            var name=$(this).parents('.productSortCon').find(".productSortConTitle p").text();
            $(this).text("编辑").parents('.productSortCon').find(".productSortConTitle p").prop("contenteditable","false");
            ajaxPackage(url+"wangjian/api/productType/productParamUpdate",{merchantId:"44",id:id,paramName:name})
            .done(function(data){
                alert("修改成功");
            })
            .fail(function(data){
                alert("修改失败");
            })
        }
    });
    //删除主规格
    $(document).on('click','#prdGd',function(){
        var userID="44";
        var id=$(this).parents('.productSpcTitle ul').attr("id");
        ajaxPackage(url+"wangjian/api/productType/productParamDelete",{merchantId:userID,id:id})
        .done(function(data){
            alert("删除成功");
            prodectClassFixList();
        })
        .fail(function(data){
            alert("删除失败");
        })
    });
    //弹出主规格增加HTML
    $('.productSpec_btnC').click(function(){
        $('#productSpec_edit').show();
    });
    
    //主规格默认选择
    $("#productSpec_select_box li").click(function(){
        var text=$(this).text();
        $('#productG_alert_select_top_input').val(text);
    });
    
    //主规格增加
    $('.productSpec_aleaSelect_sure').click(function(){
        if($('#productG_alert_select_top_input').val()==""){
            alert("请输入规格名字");
        }
        var name=$('#productG_alert_select_top_input').val();
        var userId="44";
        ajaxPackage(url+"wangjian/api/productType/productParamAdd",{merchantId:userId,paramName:name})
        .done(function(data){
            alert("增加成功");
            $('#productSpec_edit').hide();
            prodectClassFixList();
        })
        .fail(function(data){
            alert("增加失败");
        })
    });
    
    //子规格增加
    $(document).on('click','.paramAdds',function(){
        var id=$(this).parents('.productSpcTitle >ul').attr("id");
        var name=$(this).parents('.productSortCon').find('#prAddInput').val();
        console.log(id)
        ajaxPackage(url+"wangjian/api/productType/productParamValueAdd",{merchantId:'44',paramValue:name,paramId:id})
        .done(function(data){
            console.log(data);
            alert("增加成功");
            prodectClassFixList();
        });
        $(this).hide();
        $(this).parents('.add').find('.childChage').show();
        $(this).parents('.add').find('.childDel').show();
        $(this).parents('.add').find('#prAddInput').prop('readonly',true).css({
            border:"0"
        });
    });
    
    //子规格修改
    $(document).on('click','.paramVue',function(){
        var id=$(this).parents('.productSpcTitle >ul').attr("id");
        var name=$(this).parents('.add').find('#prAddInput').val();
        var childId=$(this).parents('.add').attr('id');
        ajaxPackage(url+"wangjian/api/productType/productParamValueUpdate",{merchantId:"44",paramId:id,paramValue:name,id:childId})
        .done(function(data){
            alert("修改成功");
        });
        $(this).hide();
        $(this).parents('.add').find('.childChage').show();
        $(this).parents('.add').find('.childDel').show();
        $(this).parents('.add').find('#prAddInput').prop('readonly',true).css({
            border:"0"
        });
    });
    
    //子规格删除
    $(document).on('click','.ParamValueDelete',function(){
        var id=$(this).parents('.productSpcTitle >ul').attr("id");
        var childId=$(this).parents('.add').attr('id');
        ajaxPackage(url+"wangjian/api/productType/productParamValueDelete",{merchantId:"44",paramId:id,id:childId})
        .done(function(data){
            alert("删除成功");
            prodectClassFixList();
        });
    });
}

//产品添加页
function newProduct(){
  //获取分类列表
  $(".product_type_hasSelect").click(function(){
    $(".product_type_box").toggle();
    var __length =$(".product_type_box").find("div").length;
    if(__length==0){
      ajax(""+url+"wangjian/api/productType/listProduct","post",{merchantId:"44"})
      .then((data)=>{
        var {resultCode,resultMessage,resultData} =data;
        if(resultCode==0){
          //下来的div集合声明
          var divList="";
          for(var i in resultData){
            var json = resultData[i];
            var {id,typeName} =json;
            divList+=`<div class="product_type_box_list" data=${id}>
            ${typeName}
            </div> `;
          }
          $(".product_type_box").append(divList);
        }
      })
    }
    return false;
  });
  //点击选取分类的值
  $(".product_type_box").delegate('.product_type_box_list', 'click', function(event) {
    //获取点击的值
        var oText = $(this).text();
        var oData = $(this).attr("data");
        $(".product_type_hasSelect").text(oText);
        $(".product_type_hasSelect").attr("data",oData);
        $(".product_type_box").hide();
  });

  //获取产品规格数据
  ajax(""+url+"wangjian/api/productType/productParamValuesCollection","post",{merchantId:"44"})
  .then((data)=>{
    console.log(data)
    var {resultCode,resultMessage,resultData} =data;
    if(resultCode==0){
      var productParameList="";
      //规格数组
      for(var i in resultData){
        var paramValueList="";
        //名字
        var paramName = resultData[i].wjProductParam.paramName;
        var paramValue = resultData[i].paramValue;
        //规格子规格数组
        for(var a in paramValue){
          var {id,paramValue:newParamValue,paramId} = paramValue[a];
          paramValueList+=`<li data=${id} paramId=${paramId}>
                              <div class="productG_table1_select fl"></div>
                              <div class="fl">${newParamValue}</div>
                            <li>`;
        }
        productParameList+=`  <div class="productList_specBox">
            <div class="productList_color clearfix">
              <div class="productList_left_text fl">
                ${paramName}
              </div>
              <div class="productList_color_box fl">
                <ul class="clearfix">
                  ${paramValueList}
                </ul>
              </div>
            </div>
            <div class="productG_content_table_info" style="margin-left:96px;">
              (提示：以上是系统初始化的规格样本，可以在左侧菜单中的“产品规格”处删除新增适合您产品的规格)
            </div>
          </div>`;
        var tableBox = `<li class="productL_content_table1 fl" paramId=${paramId}>${paramName}</li>`;
        $(tableBox).insertBefore('#productL_content_table2');
      }
      $(productParameList).insertBefore('.productL_content_table');
    }
  })

  //保存按钮
  $(".productG_content_saveBtn").click(function(){

    //商家id
    var merchantId="44";

    //产品名称
    var productName =$("#productNameIn").val();

    if($.trim(productName)==""||$.trim(productName)===null){
      alert("产品名称不能为空");
      return;
    }

    var productNumIn=$("#productNumIn").val();

    if($.trim(productNumIn)==""||$.trim(productNumIn)===null){
      alert("产品编号不能为空");
      return;
    }

    //产品分类id
    var typeId=$(".product_type_hasSelect").attr("data");

    if(typeId==undefined){
      alert("请选择产品分类");
      return;
    }



    //产品编号
    var productNo=$("#productNumIn").val();

    if($.trim(productNo)==""||$.trim(productNo)===null){
      alert("产品编号不能为空");
      return;
    }

    //单位重量
    var unit=$("#productKgIn").val();

    if($.trim(unit)==""||$.trim(unit)===null){
      alert("单位重量不能为空");
      return;
    }
    //声明产品json
    var goodInfos=[];



    var liLength=$(".productList_box").find("ul").length;

      if(liLength==0){
        alert("请先生成产品");
      }else{

      for(var i =0;i<liLength;i++){
        var goodInfo={};
        //父亲id
        var paramId1 =$("#productList_id").find(".productL_content_table1").eq(1).attr("paramId");

        //儿子id
        var paramValueId1 =$(".productList_box").find(".productG_content_ul1").eq(i).find(".productL_content_table1").eq(1).attr("paramValueId1");
        //商品状态
        var state="1";
        //商品库存
        var productStock=$(".productList_box").find(".productG_content_ul1").eq(i).find(".productL_content_table2").eq(0).text();
        //最低售价
        var price=$(".productList_box").find(".productG_content_ul1").eq(i).find(".productL_content_table2").eq(1).text();
        //成本价
        var costPrice=$(".productList_box").find(".productG_content_ul1").eq(i).find(".productL_content_table2").eq(2).text();;
        //销售价
        var sellPrice=11;

        //
        var paramId2 =$("#productList_id").find(".productL_content_table1").eq(2).attr("paramId");
        var paramValueId2 = $(".productList_box").find(".productG_content_ul1").eq(i).find(".productL_content_table1").eq(2).attr("paramValueId2");;
        var goodPictureId=$(".productList_box").find(".productG_content_ul1").eq(i).find(".productL_content_upload_btn").attr("productPictureId");
        goodInfo.productId ="";
        goodInfo.sellPrice=sellPrice;
        goodInfo.paramId1=paramId1;
        goodInfo.paramValueId1=paramValueId1;
        goodInfo.paramId2=paramId2;
        goodInfo.paramValueId2=paramValueId2;
        goodInfo.statue=state;
        // productStock=parseInt(productStock);
        goodInfo.productStock=productStock;
        // price=parseInt(price);
        goodInfo.price=price;
        // costPrice=parseInt(costPrice);
        goodInfo.costPrice=costPrice;
        goodInfo.goodPictureId=goodPictureId;
        goodInfos.push(goodInfo);
      }

    }



    //产品图片id
    var productPictureId=$("#productL_img_upload").attr("productPictureId");
    if(productPictureId==undefined){
      alert("请上传产品图片");
      return;
    }
    //海报图片id
    var billId=$("#productL_banner_upload").attr("billId");
    if(billId==undefined){
      alert("请上传海报");
      return;
    }

    var json={};
    json.merchantId=merchantId;
    json.productName=productName;
    json.typeId=typeId;
    json.unit=unit;
    json.goodInfo=JSON.stringify(goodInfos);
    json.productPictureId=productPictureId;
    json.billId=billId;
    json.productNo=productNumIn;

    console.log(JSON.stringify(json));

    ajax(""+url+"wangjian/api/productType/productAdd","post",json)
    .then((data)=>{
      var {resultCode,resultMessage,resultData} =data;
      if(resultCode==0){
        alert("生成产品成功");
        window.location.href="productCList.html";
      }else{
        alert("失败");
      }
    }).catch((data)=>{
      alert(data.responseText);
    })
  });


    //选中的规格
    $(document).delegate('.productG_table1_select', 'click', function(event) {
        $(this).addClass('productG_table1_selectActive');
        //父亲的index
        var oIndex= $(this).parents(".productList_specBox").index();

        //拿到自己的text
        var thisText=$(this).siblings('div').text();
        //拿到自己的id
        var id = $(this).parent("li").attr("data");
        //拿到自己父亲的id
        var paramId =$(this).parent("li").attr("paramId");
        //兄弟div的长度
        var broLength = $(this).parents('.productList_specBox').siblings('.productList_specBox').find(".productG_table1_selectActive").length;

        if(broLength>0){
            // 装选择的type的数组
            var array=[];
            var idArray=[];
            var paramIdArray=[];
            for(var i =0;i<broLength;i++){
            var _$object = $(this).parents('.productList_specBox').siblings('.productList_specBox').find(".productG_table1_selectActive").eq(i);
            //拿到子规格的text
            var oText = _$object.siblings('div').text();
            //拿子规格id
            var sId = _$object.parent("li").attr("data");

            //拿子规格的parameid
            var sParamId = _$object.parent("li").attr("paramId");
            array.push(oText);
            idArray.push(sId);
            paramIdArray.push(sParamId);
            }
          //返回list  array点击另一边的参数列表  thisText当前点击的文本
          var _oList = appendKu(array,thisText,oIndex, id ,paramId ,idArray,paramIdArray);

          $(".productList_box").append(_oList);
        }
    });

    //添加到库存的函数
    function appendKu(array,text,index,myId,myParamID,idArray,paramIdArray){
        //遍历进来的数组
        var list="";
        for(var i in array){
          if(index==2){
            var _String=` <li class="productL_content_table1 fl" paramId1=${myId} paramValueId1=${myParamID}>${text}</li>
                          <li class="productL_content_table1 fl" paramId2=${idArray[i]} paramValueId2=${paramIdArray[i]}>${array[i]}</li>`;
          }else if(index==3){
            // 如果先选上面再选下面
            var _String=` <li class="productL_content_table1 fl" paramId1=${idArray[i]} paramValueId1=${paramIdArray[i]}>${array[i]}</li>
                          <li class="productL_content_table1 fl" paramId2=${myId} paramValueId2=${myParamID}>${text}</li>`;
          }
          var random = Math.random()*1000;
              random =Math.random()*random;
              random =Math.floor(random);
          list+=`  <ul class="clearfix productG_content_ul1">
                   <li class="productL_content_table1 fl">
                     <div class="productG_table_select" style="margin:10px auto;">

                     </div>
                   </li>
                   ${_String}
                   <li class="productL_content_table2 fl" contentEditable="true">

                   </li >
                   <li class="productL_content_table2  fl" contentEditable="true">

                   </li>
                   <li class="productL_content_table2  fl"contentEditable="true">

                   </li>
                   <li class="productL_content_table3  fl">
                        <div class="fl prodect_list_imgS" style="color:blue;margin-left:10px;cursor:point;display:none;">
                            [ IMG ]
                        </div>
                        <div class="fr productL_content_upload_btn" style="margin-top:8px;margin-right:6px;">
                            <input type="file" accept="image/*;capture=camera" id="fileImg${random}" name="file" onchange=tableAjaxImg("fileImg${random}")>
                            <p>
                              上传图片
                            </p>
                        </div>
                   </li>

            </ul>`;
        }
        return list;
    }

}

//产品列表
function productCList(){
    $(".productGL_newProduct").click(function(){
    window.location.href="newProduct.html";
    });
    ajaxPackage(url+"wangjian/api/productType/productList",{merchantId:"44",pageNo:"0",pageSize:"4"})
    .done(function(data){
        console.log(data);
    })
    

      
}

//商品

function productGList(){
      (function(){
        var json={};
        var merchantId="44";
        json.merchantId=merchantId;
        var list="";
        //进入页面就要商品管理列表
        ajax(""+url+"wangjian/api/productType/listProduct","post",json)
        .then((data)=>{
            // console.log(JSON.stringify(data));
            //调用获取list回调
            productGListAjaxCallBack(data);
        }).catch((err)=>{
          console.log(err);
        })
      })()


    $(".productG_content_bot_selectTypeBox_circleBox").click(function(){
      $(".productG_type_box").slideToggle();
    });

    $(".productG_type_box").delegate('section', 'click', function(event) {
      var text = $(this).text();
      $(".productG_content_bot_selectTypeBox_Text").text(text);
      $(".productG_type_box").slideUp();
      //查询商品
    });
}

//店铺列表
function storeList(){
    //进来拿店铺列表数据POST /api/store/StoreList
         $('.ajaxImg').show();
         $('.bg').show();
         ajax(""+url+"wangjian/api/store/StoreInfoList","post",{merchantId:"44",pageNo:"0",pageSize:"3"})
         .then((data)=>{
             console.log(data)
             $('.ajaxImg').hide();
             $('.bg').hide();
             var {resultData} =data;
             var list = "";
             if(resultData.responseStoreList.length>=3){
                 $('.storeList_createBox').hide();
             }
             for(var i in resultData.responseStoreList){
                 var {wjStore,headImg,todayOrderNum,todayOrderPrice,passOrderNum,passyOrderPrice} = resultData.responseStoreList[i];
                 var {storeStatus,storeName,storeDesc,id} = wjStore;
                 if(headImg==undefined){
                     headImg="../images/shopICON.png";
                 }
                 if(storeStatus=="1"){
                   var statusBox=`<div class="storeList_update_status clearfix">
                         <p class="storeList_status_dot fl">
                           开启
                         </p>
                         <div class="storeList_update_dot fl">

                         </div>
                   </div>`;
                 }else{
                   var statusBox=`<div class="storeList_update_status clearfix">
                         <p class="storeList_status_dot fl">
                           关闭
                         </p>
                         <div class="storeList_update_dotNot fl">

                         </div>
                   </div>`;
                 }
                 list+=` <section class="storeList_update fl">
                                  ${statusBox}
                                  <div class="storeList_update_header">
                                      <img src="${headImg}"  />

                                  </div>
                                  <p class="storeList_update_imgText">
                                     ${storeName}
                                  </p>
                                  <div class="storeList_four">
                                        <ul class="clearfix storeList_four_list">
                                          <li>
                                              <div class="storeList_mainColor">
                                                  ${todayOrderNum}
                                              </div>
                                              <div class="storeList_order">
                                                  今日订单
                                              </div>
                                          </li>
                                          <li>
                                              <div class="storeList_mainColor">
                                                  ${todayOrderPrice}
                                              </div>
                                              <div class="storeList_order">
                                                  订单金额
                                              </div>
                                          </li>
                                          <li>
                                              <div class="storeList_mainColor">
                                                  ${passOrderNum}
                                              </div>
                                              <div class="storeList_order">
                                                  历史订单
                                              </div>
                                          </li>
                                          <li>
                                              <div class="storeList_mainColor">
                                                  ${passyOrderPrice}
                                              </div>
                                              <div class="storeList_order">
                                                  订单总额
                                              </div>
                                          </li>
                                        </ul>
                                  </div>

                                  <div class="storeList_storeInfo">
                                      ${storeDesc}
                                  </div>
                                  <div class="storeList_list_to" data=${id}>
                                      进入
                                  </div>
                          </section>`;
             }

             $("#storeList_content").append(list);
         })

           //进入店铺
         $(document).delegate(".storeList_list_to","click",function(){
           var id=$(this).attr("data");
           sessionStorage.setItem("storeId",id);

              window.location.href="storeHome.html";
         })

}

//新建店铺
function createStore(){

  //更改状态
  $(".radio_dot").click(function(){
    $(this).addClass("radio_dotActive");
    $(this).parent().siblings('.radio_open').find(".radio_dot").removeClass('radio_dotActive');
  });
  //获取省份接口
  $("#provinceCircle").click(function(){
      $("#provinceBox").toggle();
      //如果请求过就不需要再请求了
      if($("#provinceBox section").length==0){
        ajax(""+url+"wangjian/api/wjArea/provincial","post",{})
        .then((data)=>{
          var {resultCode,resultMessage,resultData} =data;
          var list="";
          if(resultCode==0){
            for(var i in resultData){
              var {id,provincialName} = resultData[i];
              list+=`<section data=${id}>${provincialName}</section>`;
            }
          }
          $("#provinceBox").append(list);
        })
      }
//      ajaxPackage(url+"wangjian/api/wjArea/provincial")
  });
  //点击省份信息
  $("#provinceBox").on('click', 'section', function(event) {
      var text = $(this).text();
      var data =$(this).attr("data");
      $(".productG_content_pro").text(text);
      $(".productG_content_pro").attr("data",data);
  });
  
  //获取城市接口
  $(".productG_content_city").click(function(){
      $("#cityBox").toggle();
      var id=$(".productG_content_pro").attr("data");

      if(id==undefined){

      }else{

        $("#cityBox").empty();
        ajax(""+url+"wangjian/api/wjArea/findCity","post",{id:id})
        .then((data)=>{
          var {resultCode,resultMessage,resultData} =data;
          var list="";
          if(resultCode==0){
            for(var i in resultData){
              var {id,cityName} = resultData[i];
              list+=`<section data=${id}>${cityName}</section>`;
            }
          }

          $("#cityBox").append(list);
        })
      }
  });

  //点击省份信息
  $("#cityBox").delegate('section', 'click', function(event) {
      var text = $(this).text();
      var data =$(this).attr("data");
      $(".productG_content_city").text(text);
      $(".productG_content_city").attr("data",data);
      $("#cityBox").hide();
  });


  //获取城市区域接口
  $(".productG_content_area").click(function(){
      $("#areaBox").toggle();
      var id=$(".productG_content_city").attr("data");

      if(id==undefined){

      }else{
        $("#areaBox").empty();
        ajax(""+url+"wangjian/api/wjArea/findDistrict","post",{id:id})
        .then((data)=>{
          var {resultCode,resultMessage,resultData} =data;
          var list="";
          if(resultCode==0){
            for(var i in resultData){
              var {id,districtName} = resultData[i];
              list+=`<section data=${id}>${districtName}</section>`;
            }
          }

          $("#areaBox").append(list);
        })
      }
  });

  //区域点击
  $("#areaBox").delegate('section', 'click', function(event) {
      var text = $(this).text();
      var data =$(this).attr("data");
      $(".productG_content_area").text(text);
      $(".productG_content_area").attr("data",data);
      $("#areaBox").hide();
  });


  //创建店铺接口
  $(".create_btn").click(function(){

    var longitude=$("#jingdu").val();
    var latitude =$("#weidu").val();

    if(!padgeWhite(longitude)){
      alert("请获取店铺地址");
      return;
    }
    //省id
    var provinceId =$(".productG_content_pro").attr("data");

    //市id
    var cityId =$(".productG_content_city").attr("data");
    //区id
    var districtId =$(".productG_content_area").attr("data");

    if(!padgeWhite(provinceId)){
      alert("请选择省份");
      return;
    }
    if(!padgeWhite(cityId)){
      alert("请选择城市");
      return;
    }
    if(!padgeWhite(districtId)){
      alert("请选择地区");
      return;
    }

    //店铺名字
    var storeName=$("#storeName").val();
    if(!padgeWhite(storeName)){
      alert("请输入店铺名字");
      return;
    }

    //店铺描述
    var storeDesc=$("#storeDesc").val();
    if(!padgeWhite(storeDesc)){
      alert("请输入店铺描述");
      return;
    }
    //店铺地址
    var address =$("#address").val();
    if(!padgeWhite(address)){
      alert("请输入店铺地址");
      return;
    }



    var storeStatus =$(".radio_dotActive").attr("data");

    var auth="0";

    var merchantId="44";

    var mainStore="1";

    //ajax参数拼接
    var json = {provinceId,cityId,districtId,storeName,storeDesc,address,longitude,latitude,storeStatus,auth,merchantId,mainStore};
      ajax(""+url+"wangjian/api/store/StoreAdd","post",json)
      .then((data)=>{
        var {resultCode,resultMessage,resultData} =data;

        if(resultCode==0){
          alert("新增店铺成功");
          window.location.href="storeHome.html";
        }
      })
  });
}
//
function storeHome(){
    var storeId = sessionStorage.getItem("storeId");

}
//店铺装修
function storeRedecorated(){

  //更改状态
  $(".productG_selectDot").click(function(){
    $(this).addClass("radio_dotActive");
    $(this).parent().siblings('div').find(".productG_selectDot").removeClass('radio_dotActive');
  });
  //上方基本跟店铺设置切换
  $("#storeRedecorated_list li").click(function(){
    var index =$(this).index();
    $(this).addClass('liActive_fff').siblings('').removeClass('liActive_fff');
    $(".storeRedecorated_index").eq(index).show().siblings('section').hide();
  });

  //封面样式选择
  $(".storeR_headerRight li").click(function(){
    $(this).find("div").addClass('coverActive');
    $(this).find("p").addClass('coverLite');
    $(this).siblings().find('div').removeClass('coverActive');
    $(this).siblings().find('p').removeClass('coverLite');
  });

  //店铺首页店铺公告切换
  $(".storeRede_type_img").click(function(){
    $(this).addClass('storeRede_type_imgActive');
    $(this).parent("li").addClass('coverLite').siblings('li').removeClass('coverLite');
    $(".storeRede_type_img2").removeClass('storeRede_type_img2Active');
    $(".storeRede_type_img3").removeClass('storeRede_type_img3Active');
    $(".storeRede_type_img4").removeClass('storeRede_type_img4Active');
  });


  $(".storeRede_type_img2").click(function(){
    $(this).addClass('storeRede_type_img2Active');
    $(this).parent("li").addClass('coverLite').siblings('li').removeClass('coverLite');
    $(".storeRede_type_img").removeClass('storeRede_type_imgActive');
    $(".storeRede_type_img3").removeClass('storeRede_type_img3Active');
    $(".storeRede_type_img4").removeClass('storeRede_type_img4Active');
  });

  $(".storeRede_type_img3").click(function(){
    $(this).addClass('storeRede_type_img3Active');
    $(this).parent("li").addClass('coverLite').siblings('li').removeClass('coverLite');
    $(".storeRede_type_img2").removeClass('storeRede_type_img2Active');
    $(".storeRede_type_img").removeClass('storeRede_type_imgActive');
    $(".storeRede_type_img4").removeClass('storeRede_type_img4Active');
  });

  $(".storeRede_type_img4").click(function(){
    $(this).addClass('storeRede_type_img4Active');
    $(this).parent("li").addClass('coverLite').siblings('li').removeClass('coverLite');
    $(".storeRede_type_img2").removeClass('storeRede_type_img2Active');
    $(".storeRede_type_img3").removeClass('storeRede_type_img3Active');
    $(".storeRede_type_img").removeClass('storeRede_type_imgActive');
  });

  //店铺列表切换
  $(".storeRede_storelist_img").click(function(){
    $(this).addClass('storeRede_storelist_imgActive');
    $(this).parent("li").addClass('coverLite').siblings('li').removeClass('coverLite');
    $(".storeRede_storelist_img2").removeClass('storeRede_storelist_img2Active');
    $(".storeRede_storelist_img3").removeClass('storeRede_storelist_img3Active');

  });
  $(".storeRede_storelist_img2").click(function(){
    $(this).addClass('storeRede_storelist_img2Active');
    $(this).parent("li").addClass('coverLite').siblings('li').removeClass('coverLite');
    $(".storeRede_storelist_img").removeClass('storeRede_storelist_imgActive');
    $(".storeRede_storelist_img3").removeClass('storeRede_storelist_img3Active');

  });
  $(".storeRede_storelist_img3").click(function(){
    $(this).addClass('storeRede_storelist_img3Active');
    $(this).parent("li").addClass('coverLite').siblings('li').removeClass('coverLite');
    $(".storeRede_storelist_img2").removeClass('storeRede_storelist_img2Active');
    $(".storeRede_storelist_img").removeClass('storeRede_storelist_imgActive');

  });

    //点击保存发布
    $(".saveStoreGBtn").click(function(){
        var storeId="105aec47cbd1403c89775ea42718eea1";
        var storeHead=$("#storeR_headerImg").attr("data");
        var storeCover=$("#storeR_pageImg").attr("data");
        var coverStyle = $(".coverActive").attr("data");
        var noticeStatus=$(".radio_dotActive").eq(0).attr("data");
        var noticeStyle=$(".storeRede_type_imgActive").attr("data");
        var storeListStyle=$(".storeRede_storelist_imgActive").attr("data");
        var bottomNavStatus=$(".radio_dotActive").eq(1).attr("data");
        //获取参数
        var json ={storeId,storeHead,storeCover,coverStyle,noticeStatus,noticeStyle,storeListStyle,bottomNavStatus};
        ajax(""+url+"wangjian/api/store/StoreStyleEdit","post",json)
        .then((data)=>{
            if(data.resultCode){
                alert("成功装修店铺");
            }
        }).catch((data)=>{
             console.log(data);
        })
    })




}

//店铺设置
function storeSetuo(){
  //上方基本跟店铺设置切换
  $("#storeRedecorated_list li").click(function(){
    var index =$(this).index();
    $(this).addClass('liActive_fff').siblings('').removeClass('liActive_fff');
    $(".storeSetup_index").eq(index).show().siblings('section').hide();
  });

}

//订单管理
function orderMan(){
  //POST /api/order/orderUser
    var storeId = sessionStorage.getItem("storeId");

    var userId="1f2ff190acd54ff79ae986e1a6e4602b";
    var status="0";
    var pageNo=0;
    var pageSize=10;
    var json ={userId,status,pageNo,pageSize};
    //switchOrder
  ajax(""+url+"wangjian/api/order/orderUser","post",json)
  .then((data)=>{
    for(var i in data){
      var {id,} = data[i];
    }

  }).catch((data)=>{

  })
}
