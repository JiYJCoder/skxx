//控件通用样式
var shadowHtml=`<div class="component_public ImgBoder">
                      <p class="title">阴影</p>
                      <ul>
                          <li class="clearfix">
                              <span>颜色</span>
                              <div class="ImgchageBgSetCol">
                                  <div class="ImgchageBgSetColVal"></div>
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>Y轴</span>
                              <div class="ImgBoderSize">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>X轴</span>
                              <div class="ImgBoderSize">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>模糊</span>
                              <div class="ImgBoderSize">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                      </ul>
                  </div>`;
//背景
var bgHtml=`<div class="component_public ImgchageBg">
                      <p class="title">背景</p>
                      <ul class="clearfix">
                          <li class="current">纯色</li>
                          <li>渐变</li>
                          <li>图片</li>
                          <li>无</li>
                      </ul>
                      <div class="ImgchageBgSet clearfix" style="display:block">
                          <div class="ImgchageBgSetCol">
                              <div class="ImgchageBgSetColVal"></div>
                          </div>
                      </div>
                      <div class="ImgchageBgSet clearfix ImgchageBgSetJb">
                          <div class="ImgchageBgSetCol">
                              <div class="ImgchageBgSetColVal"></div>
                          </div>
                          <div class="ImgchageBgSetCol">
                              <div class="ImgchageBgSetColVal"></div>
                          </div>
                      </div>
                  </div>`;
var boderHtml=`<div class="component_public ImgBoder">
                      <p class="title">边框</p>
                      <ul>
                          <li class="clearfix">
                              <span>边框</span>
                              <div class="ImgchageBgSetCol">
                                  <div class="ImgchageBgSetColVal"></div>
                              </div>
                              <div class="ImgBoderStyle">
                                  <p></p>
                                  <ul>
                                      <li><p></p></li>
                                      <li><p style="border: 1px dotted #a5a5a5;"></p></li>
                                      <li><p style="border: 1px dashed #a5a5a5;"></p></li>
                                  </ul>
                              </div>
                              <div class="ImgBoderSize">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>圆角</span>
                              <div class="ImgBoderSize">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>内距</span>
                              <div class="ImgBoderSize">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                      </ul>
                  </div>`;
var positionHtml=`<div class='component_public'>
                      <p class='title'>位置</p>
                      <ul class='fontcssSet clearfix'>
                          <li class='clearfix'><span>宽度</span><input type='text'></li>
                          <li class='clearfix'><span>高度</span><input type='text'></li>
                          <li class='clearfix'><span>X轴</span><input type='text'></li>
                          <li class='clearfix'><span>Y轴</span><input type='text'></li>
                      </ul>
                  </div>`;
var linkHtml=`<div class="component_public">
                      <p class="title">插入链接</p>
                      <ul>
                          <li class="clearfix">
                              <div class="colTitle publicTitle">地<span class="op">地址</span>址</div>
                              <div class="lineBtn"></div>
                          </li>
                      </ul>
                  </div>`;
var fontHtml=`<div class='component_font_font component_public'>
            <p class='title'>字体</p>
            <ul>
                <li class='clearfix col'>
                    <div class='colTitle publicTitle'>颜色</div>
                    <div class='colCon clearfix'>
                        <ul class='clearfix'>
                            <li><div class='colConValShow'></div></li>
                            <li>
                            <div class='fontCol'><img src='images/site_fontA.png' alt=''></div></li>
                        </ul>
                    </div>
                </li>
                <li class='clearfix'>
                    <div class='colTitle publicTitle'>样式</div>
                    <div class='fontStyle'>
                        <ul class='clearfix'>
                            <li class='fontbold current'>B</li>
                            <li class='fontI'><i>i</i></li>
                            <li>U</li>
                            <li>Tx</li>
                        </ul>
                    </div>
                </li>
                <li class='clearfix'>
                    <div class='colTitle publicTitle'>大小</div>
                    <div class='fontSize'><p>12px</p><img src='images/site_chageSize.png' alt='' class='shangla'><img src='images/site_xiala.png' alt='' class='xiala'>
                    </div>
                </li>
            </ul>
        </div>`;
var fontAlignHtml=`<div class='component_public'>
            <p class='title'>对齐方式</p>
            <ul class='clearfix font_text_align'>
                <li class='left current'></li>
                <li class='center'></li>
                <li class='right'></li>
                <li class='justify'></li>
            </ul>
            <div class='fontspacing clearfix'>
                <div class='colTitle publicTitle'>行间距</div>
                <div class='fontspacingVal'>
                    <span>1</span>
                    <img src='images/site_chageSize.png' alt='' class='shangla'>
                    <img src='images/site_xiala.png' alt='' class='xiala'>
                </div>
            </div>
        </div>`;

//改变大小HTML
var csHtml="<div class='chageSize'><div class='chageSizeLeft'><div class='wr size'></div><div class='nw size'></div><div class='sw size'></div></div><div class='chageSizeTop'><div class='nr size'></div><div class='Rotate'></div></div><div class='chageSizeRight'><div class='ne size'></div><div class='er size'></div><div class='es size'></div></div><div class='chageSizebottom'><div class='sr size'></div></div>";
//字体控件HTML
var textHtml="<li style='left: 25px; top: 190px; transform:rotate(0deg);width:92px;height:36px;' type='0'><div class='text'><div class='textCon'>双击输入文字</div></div>"+csHtml+"</li>";
//字体设置html
var textSetHtml=`<div class='panel'>
    <div class='site_pageComponent_con' style='display:block'>
        ${fontHtml}
        ${fontAlignHtml}
        ${linkHtml}
    </div>
    <div class='site_pageComponent_con' id='Component_css'>
        ${positionHtml}
    </div>
</div>`;

//图片控件HTML
var ImgHtml="<li style='left:100px;top:190px;transform:rotate(0deg);' type='1'><div class='Img'><img src='images/site_img.png'></div>"+csHtml+"</li>"
//图片设置html
var ImgSetHtml=`<div class='panel'>
              <div class="site_pageComponent_con" style="display:block">
                  <div class="ImgShow">
                      <div class="ImgShowTip">
                          <p>更换图片</p>
                      </div>
                  </div>
                  <div class="component_public bgStyle">
                      <p class="title">图片显示模式</p>
                      <ul class="clearfix">
                          <li class="current"><div class="bgStyleShow"></div><p>自适应</p></li>
                          <li><div class="bgStyleShow"></div><p>居中</p></li>
                          <li><div class="bgStyleShow"></div><p>拉伸</p></li>
                          <li><div class="bgStyleShow"></div><p>原图</p></li>
                      </ul>
                  </div>
                  ${linkHtml}
              </div>
              <div class="site_pageComponent_con">
                  ${bgHtml}
                  ${boderHtml}
                  ${positionHtml}
              </div>
          </div>`;
//标题控件设置HTML
var titleSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;">
                  <div class="component_public">
                      <p class="title">标题文字内容</p>
                      <ul>
                          <li class="clearfix">
                              <div class="colTitle publicTitle">标<span class="op">地址</span>题</div>
                              <div class="lineBtn searchInput"><input type="text"></div>
                          </li>
                      </ul>
                  </div>
                  ${linkHtml}
              </div>
              <div class="site_pageComponent_con">
                  <div class="component_public titleStyle">
                      <p class="title">标题</p>
                      <ul>
                          <li class="clearfix">
                              <span>标题</span>
                              <div class="titleStyleCon titleVal">
                                  <div class="titleStyleConVal">
                                      
                                  </div>
                                  <ul>
                                      <li><i></i></li>
                                      <li class="chage"><i></i></li>
                                  </ul>
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>图标</span>
                              <div class="titleStyleCon titleIconlist">
                                  <div class="titleStyleIcon">
                                      
                                  </div>
                                  <ul class="clearfix">
                                      <li><img src="images/site_title1.png" alt=""></li>
                                      <li><img src="images/site_title2.png" alt=""></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                  </ul>
                              </div>
                          </li>
                      </ul>
                  </div>
                  ${fontHtml}
                  ${bgHtml}
                  ${fontAlignHtml}
                  ${boderHtml}
                  ${positionHtml}
              </div>
          </div>`;
//标题控件HTML
var titleHtml=`<li style='left:100px;top:190px;transform:rotate(0deg);width:194px;height:36px;' type='2'>
                      
                      <div class="site_serch clearfix">
                          <div class="serchCon">标题标题标</div>
                      </div>
                      ${csHtml}
                  </li>`;
//图集
var atlasSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;">
                  <div class="ImgShow Atlas">
                      <div class="ImgShowTip">
                          <p>更换图片</p>
                      </div>
                  </div>
                  <div class="component_public bgStyle">
                      <p class="title">图片显示模式</p>
                      <ul class="clearfix">
                          <li class="current"><div class="bgStyleShow"></div><p>自适应</p></li>
                          <li><div class="bgStyleShow"></div><p>居中</p></li>
                          <li><div class="bgStyleShow"></div><p>拉伸</p></li>
                          <li><div class="bgStyleShow"></div><p>原图</p></li>
                      </ul>
                  </div>
              </div>
              <div class="site_pageComponent_con">
                  <div class="AtlasStyle">
                      <img src="images/site_AtlasStyle.png" alt="">
                      <div class="AtlasStyleList">
                          <ul>
                              <li><img src="images/site_AtlasStyle.png" alt=""></li>
                              <li><img src="images/site_AtlasStyle1.png" alt=""></li>
                          </ul>
                      </div>
                  </div>
                  <div class="component_public ImgBoder">
                      <p class="title">图片设置</p>
                      <ul>
                          <li class="clearfix">
                              <span>列数</span>
                              <div class="ImgBoderSize">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>间距</span>
                              <div class="ImgBoderSize">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>圆角</span>
                              <div class="ImgBoderSize">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div class="component_public ImgBoder">
                      <p class="title">阴影</p>
                      <ul>
                          <li class="clearfix">
                              <span>颜色</span>
                              <div class="ImgchageBgSetCol">
                                  <div class="ImgchageBgSetColVal"></div>
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>Y轴</span>
                              <div class="ImgBoderSize">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>X轴</span>
                              <div class="ImgBoderSize">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>模糊</span>
                              <div class="ImgBoderSize">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                      </ul>
                  </div>
                  ${positionHtml}
              </div>
          </div>`;
//图集控件
var atlasHtml=`<li style='left:100px;top:190px;transform:rotate(0deg);width:147px;height:130px;' type='3'>
                      <div class="site_CAtlas">
                          <ul class="clearfix">
                              <li><img src="images/site_Atlas.png" alt=""></li>
                              <li><img src="images/site_Atlas.png" alt=""></li>
                              <li><img src="images/site_Atlas.png" alt=""></li>
                              <li><img src="images/site_Atlas.png" alt=""></li>
                              <li><img src="images/site_Atlas.png" alt=""></li>
                              <li><img src="images/site_Atlas.png" alt=""></li>
                              <li><img src="images/site_Atlas.png" alt=""></li>
                              <li><img src="images/site_Atlas.png" alt=""></li>
                              <li><img src="images/site_Atlas.png" alt=""></li>
                          </ul>
                      </div>
                      ${csHtml}
                  </li>`;
//横线控件
var HlineHtml=`<li style="left:100px;top:190px;transform:rotate(0deg);width:190px;height:20px;" type='4'><div class="Hline"><hr></div>${csHtml}</li>`;
//横线控件设置HTML
var HlineSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;"></div>
              <div class="site_pageComponent_con">
                  <div class="component_public ImgBoder">
                      <p class="title">线条</p>
                      <ul>
                          <li class="clearfix">
                              <span>线条</span>
                              <div class="ImgchageBgSetCol">
                                  <div class="ImgchageBgSetColVal"></div>
                              </div>
                              <div class="ImgBoderStyle">
                                  <p></p>
                                  <ul>
                                      <li><p></p></li>
                                      <li><p style="border: 1px dotted #a5a5a5;"></p></li>
                                      <li><p style="border: 1px dashed #a5a5a5;"></p></li>
                                  </ul>
                              </div>
                              <div class="ImgBoderSize">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                      </ul>
                  </div>
                  ${shadowHtml}
                  ${positionHtml}
              </div>
          </div>`;
//竖线控件
var slineHtml=`<li style="left:100px;top:190px;transform:rotate(0deg);width:20px;height:190px;" type='5'><div class="sLine"><hr></div>${csHtml}</li>`;

//按钮控件
var btnHtml=`<li style="left:100px;top:190px;transform:rotate(0deg);width:100px;height:40px;" type='6'><div class="bottonCon"><div class="botton"><p>按钮</p></div></div>${csHtml}</li>`;
//按钮设置
var btnSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;">
                  <div class="component_public">
                      <p class="title">按钮文字</p>
                      <ul>
                          <li class="clearfix">
                              <div class="colTitle publicTitle">文<span class="op">地址</span>字</div>
                              <div class="lineBtn searchInput"><input type="text"></div>
                          </li>
                      </ul>
                  </div>
                  ${linkHtml}
              </div>
              <div class="site_pageComponent_con">
                  <div class="component_public titleStyle">
                      <p class="title">按钮</p>
                      <ul>
                          <li class="clearfix">
                              <span>按钮</span>
                              <div class="titleStyleCon titleVal btnVal">
                                  <div class="titleStyleConVal btnCurrent">
                                      
                                  </div>
                                  <ul>
                                      <li><i></i></li>
                                      <li class="chage"><i></i></li>
                                  </ul>
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>图标</span>
                              <div class="titleStyleCon titleIconlist">
                                  <div class="titleStyleIcon">
                                      
                                  </div>
                                  <ul class="clearfix">
                                      <li><img src="images/site_title1.png" alt=""></li>
                                      <li><img src="images/site_title2.png" alt=""></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                  </ul>
                              </div>
                          </li>
                      </ul>
                  </div>
                  ${fontHtml}
                  ${bgHtml}
                  ${fontAlignHtml}
                  ${boderHtml}
                  ${positionHtml}
              </div>
          </div>`;
//容器
var  CboxHtml=`<li style="left:100px;top:190px;transform:rotate(0deg);width:130px;height:130px;" type='7'><div class="Cbox"><div class="CboxShow"></div></div>${csHtml}</li>`;
//容器设置
var CboxSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;">
                  
              </div>
              <div class="site_pageComponent_con">
                  ${bgHtml}
                  ${boderHtml}
                  ${shadowHtml}
                  ${positionHtml}
              </div>
          </div>`;
//视频
var videoHtml=`<li style="left:100px;top:190px;transform:rotate(0deg);width:80px;height:80px;" type='8'>
                      <div class="video">
                          <div class="videoImg" style='pointer-events:none;'><embed src="http://player.youku.com/player.php/sid/XMTQ2Mjk2NDI5Mg==/v.swf" allowfullscreen="true" wmode="opaque" quality="high" height="100%" width="100%" align="middle" allowscriptaccess="always" type="application/x-shockwave-flash"></div>
                      </div>
                      ${csHtml}
                  </li>`;
//视频控件设置
var videoSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;">
                  <div class="videoSet">
                      <p>支持优酷，土豆，腾讯，搜狐等视频</p>
                      <div class="videoSetCon" contenteditable="true">
                          http://player.youku.com/player.php/sid/XMTQ2Mjk2NDI5Mg==/v.swf
                      </div>
                  </div>
              </div>
              <div class="site_pageComponent_con">
                  ${positionHtml}
              </div>
          </div>`;
var musicHtml=`<li style="left:100px;top:190px;transform:rotate(0deg);width:80px;height:80px;" type='9'>
                      <div class="video">
                          <div class="videoImg" style='pointer-events:none;'><audio loop="" src="http://mp3.haoduoge.com/music7/233898.mp3" preload=" "></audio></div>
                      </div>
                      ${csHtml}
                  </li>`
//音乐控件设置
var musicSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;">
                  <div class="videoSet">
                      <p>支持虾米音乐</p>
                      <div class="videoSetCon" contenteditable="true">
                          http://mp3.haoduoge.com/music7/233898.mp3
                      </div>
                  </div>
              </div>
              <div class="site_pageComponent_con">
                  ${positionHtml}
              </div>
          </div>`;

//幻灯片
var hdpHtml=`<li style="left:100px;top:190px;transform:rotate(0deg);width:180px;height:100px;" type='10'>
                      <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">Slide 1</div>
                            <div class="swiper-slide">Slide 2</div>
                            <div class="swiper-slide">Slide 3</div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                    ${csHtml}
                  </li>`;
var hdpSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;">
                  <div class="ImgShow Atlas">
                      <div class="ImgShowTip">
                          <p>更换图片</p>
                      </div>
                  </div>
                  <div class="component_public bgStyle">
                      <p class="title">图片显示模式</p>
                      <ul class="clearfix">
                          <li class="current"><div class="bgStyleShow"></div><p>自适应</p></li>
                          <li><div class="bgStyleShow"></div><p>居中</p></li>
                          <li><div class="bgStyleShow"></div><p>拉伸</p></li>
                          <li><div class="bgStyleShow"></div><p>原图</p></li>
                      </ul>
                  </div>
                  <div class="component_public bgStyle">
                      <p class="title">动画效果</p>
                      <ul class="clearfix">
                          <li class="current"><div class="bgStyleShow"></div><p>渐显</p></li>
                          <li><div class="bgStyleShow"></div><p>左滚动</p></li>
                          <li><div class="bgStyleShow"></div><p>3D</p></li>
                      </ul>
                  </div>
                  <div class="component_public slideshow">
                      <p class="title">切换设置</p>
                      <ul>
                          <li class="clearfix">
                              <div class="slideshowTitle">自动运行</div>
                              <section class="slideshowSwitch model-14">
                                  <div class="checkbox">
                                    <input type="checkbox"/>
                                    <label></label>
                                  </div>
                              </section>
                          </li>
                          <li class="clearfix">
                              <div class="slideshowTitle">速<span class="op">速度</span>度</div>
                              <div class="slideshowTk">
                                  <p>500ms</p>
                                  <ul>
                                      <li>500ms</li>
                                      <li>1000ms</li>
                                      <li>1500ms</li>
                                      <li>2000ms</li>
                                  </ul>
                              </div>
                          </li>
                          <li class="clearfix">
                              <div class="slideshowTitle">间<span class="op">间隔</span>隔</div>
                              <div class="slideshowTk">
                                  <p>500ms</p>
                                  <ul>
                                      <li>500ms</li>
                                      <li>1000ms</li>
                                      <li>1500ms</li>
                                      <li>2000ms</li>
                                  </ul>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
              <div class="site_pageComponent_con">
                  <div class="component_public slideshowStyle">
                      <p class="title">导航设置</p>
                      <ul>
                          <li class="clearfix">
                              <div class="slideshowTitle">圆点导航</div>
                              <section class="slideshowSwitch model-14">
                                  <div class="checkbox">
                                    <input type="checkbox"/>
                                    <label></label>
                                  </div>
                              </section>
                          </li>
                          <li class="clearfix">
                              <div class="slideshowTitle">默认颜色</div>
                              <div class="ImgchageBgSetCol">
                                  <div class="ImgchageBgSetColVal"></div>
                              </div>
                          </li>
                          <li class="clearfix">
                              <div class="slideshowTitle">当前颜色</div>
                              <div class="ImgchageBgSetCol">
                                  <div class="ImgchageBgSetColVal"></div>
                              </div>
                          </li>
                          <li class="clearfix">
                              <div class="slideshowTitle">对其方式</div>
                              <div class="slideshowStyleAlign">
                                  <ul class="clearfix">
                                      <li class="current"></li>
                                      <li></li>
                                      <li></li>
                                  </ul>
                              </div>
                          </li>
                          <li class="clearfix">
                              <div class="slideshowTitle">形<span class="op">形状</span>状</div>
                              <div class="slideshowStyleAlign slideshowStyleBtn">
                                  <ul class="clearfix">
                                      <li></li>
                                      <li class="current"></li>
                                  </ul>
                              </div>
                          </li>
                      </ul>
                  </div>
                  ${positionHtml}
              </div>
          </div>`;
//导航
var navHtml=`<li style="left:18px;top:190px;transform:rotate(0deg);width:290px;height:40px;" type='11'>
                      <div class="nav">
                          <div class="navUl clearfix">
                              <div class="navLi">
                                  <p>菜单1</p>
                              </div>
                              <div class="navLi">
                                  <p>菜单2</p>
                              </div>
                              <div class="navLi">
                                  <p>菜单3</p>
                              </div>
                              <div class="navLi">
                                  <p>菜单4</p>
                              </div>
                          </div>
                      </div>
                      ${csHtml}
                  </li>`;
var navSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;">
                  <div class="component_public nav">
                      <p class="title">导航列表</p>
                      <ul>
                          <li>首页</li>
                          <li>首页</li>
                      </ul>
                      <div class="navAdd">
                          添加导航
                      </div>
                  </div>
              </div>
              <div class="site_pageComponent_con">
                  <div class="component_public ImgBoder">
                      <p class="title">导航间隔</p>
                      <ul>
                          <li class="clearfix">
                              <span>间距</span>
                              <div class="ImgBoderSize">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                      </ul>
                  </div>
                  ${fontHtml}
                  ${bgHtml}
                  ${fontAlignHtml}
                  ${boderHtml}
                  <div class="component_public ImgBoder">
                      <p class="title">分割线</p>
                      <ul>
                          <li class="clearfix">
                              <span>分割</span>
                              <div class="ImgchageBgSetCol">
                                  <div class="ImgchageBgSetColVal"></div>
                              </div>
                              <div class="ImgBoderStyle">
                                  <p></p>
                                  <ul>
                                      <li><p></p></li>
                                      <li><p style="border: 1px dotted #a5a5a5;"></p></li>
                                      <li><p style="border: 1px dashed #a5a5a5;"></p></li>
                                  </ul>
                              </div>
                              <div class="ImgBoderSize">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                      </ul>
                  </div>
                  ${shadowHtml}
                  ${positionHtml}
              </div>
          </div>`;
var navBtnHtml=`<li style="left:18px;top:190px;transform:rotate(0deg);width:50px;height:50px;" type='12'>
                      <div class="navBtn">
                          <div class="navBtnIcon">
                              <i class="icon-navBtn1"></i>
                          </div>
                      </div>
                      ${csHtml}
                  </li>`;
var navBtnSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;">
                  <div class="component_public nav">
                      <p class="title">导航列表</p>
                      <ul>
                          <li>首页</li>
                          <li>首页</li>
                      </ul>
                      <div class="navAdd">
                          添加导航
                      </div>
                  </div>
              </div>
              <div class="site_pageComponent_con">
                  <div class="component_public navBtnSet">
                      <p class="title">导航按钮</p>
                      <div class="navBtnStyle clearfix">
                          <div class="navBtnStyleTitle">
                              图标
                          </div>
                          <div class="navBtnStyleList">
                              <i class="icon-navBtn1"></i>
                              <ul class="clearfix">
                                  <li><i class="icon-navBtn1"></i></li>
                                  <li><i class="icon-navBtn2"></i></li>
                                  <li><i class="icon-navBtn3"></i></li>
                                  <li><i class="icon-navBtn4"></i></li>
                                  <li><i class="icon-navBtn4"></i></li>
                                  <li><i class="icon-navBtn4"></i></li>
                              </ul>
                          </div>
                          <div class="navBtnStyleCol">
                              <div class="navBtnStyleColVal">
                                  
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="component_public slideshow">
                      <p class="title">主导航样式</p>
                      <ul>
                          <li class="clearfix">
                              <div class="slideshowTitle">展开方向</div>
                              <section class="slideshowSwitch model-14 model-15">
                                  <div class="checkbox">
                                    <input type="checkbox">
                                    <label></label>
                                  </div>
                              </section>
                          </li>
                          <li class="clearfix">
                              <div class="slideshowTitle">宽<span class="op">宽度</span>度</div>
                              <div class="navBtnStyleIconW">
                                  <input type="text" value="12px">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                                  <img src="images/site_xiala.png" alt="" class="xiala">
                              </div>
                          </li>
                      </ul>
                  </div>
                  ${fontHtml}
                  ${bgHtml}
                  ${fontAlignHtml}
                  <div class="component_public ImgBoder">
                      <p class="title">分割线</p>
                      <ul>
                          <li class="clearfix">
                              <span>分割</span>
                              <div class="ImgchageBgSetCol">
                                  <div class="ImgchageBgSetColVal"></div>
                              </div>
                              <div class="ImgBoderStyle">
                                  <p></p>
                                  <ul>
                                      <li><p></p></li>
                                      <li><p style="border: 1px dotted #a5a5a5;"></p></li>
                                      <li><p style="border: 1px dashed #a5a5a5;"></p></li>
                                  </ul>
                              </div>
                              <div class="ImgBoderSize">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                      </ul>
                  </div>
                  ${boderHtml}
                  ${positionHtml}
              </div>
          </div>`;
//表单
var FormHtml=`<li style="top: 50%;left: 50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);" type='13'>
                      <div class="form">
                          <form action="">
                              <p>姓名</p>
                              <input type="text" name="user" placeholder="请输入姓名">
                              <p>手机号码</p>
                              <input type="text" name="phone" placeholder="请输入正确的手机号码">
                              <p>公司名称</p>
                              <input type="text" name="company" placeholder="请输入公司名称">
                              <p>座机号码</p>
                              <input type="text" name="Plane" placeholder="请输入座机号码">
                              <span>性别</span>
                              <label><input name="sex" type="radio" value="" checked>男</label> 
                              <label><input name="sex" type="radio" value="">女</label>
                              <p class="formTip">备注</p>
                              <input type="text" name="tip">
                              <input type='submit' name="submit" value="提交">
                          </form>
                      </div>
                  </li>`;
var controlSetHtmlArr=[];//控件面板html数组
$.fn.extend({
    generate:function(data){
        var box=$('.site_page_container >ul');//手机控件盒子
        var cssSetBox=$('.site_pageComponent');//控件box
        var controlBtnBox=$('.site_ControlRecordCon >ul');//控件控制按钮
        var defaults={//控件默认设置
            type:0,   //控件类型
            position:true,  //移动
            chageSize:true, //改变大小
            chageCss:true,//改变CSS
        };
        var setting=$.extend({},defaults,data);
        //根据类型生成控件
        switch(setting.type){
            case 0://生成文字
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>文本框</li>");
                creControlHtml(textHtml,textSetHtml);
                break;
            case 1:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>图片</li>");
                creControlHtml(ImgHtml,ImgSetHtml);
                break;
            case 2:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>标题</li>");
                creControlHtml(titleHtml,titleSetHtml);
                break;
            case 3:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>图集</li>");
                creControlHtml(atlasHtml,atlasSetHtml);
                break;
            case 4:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>横线</li>");
                creControlHtml(HlineHtml,HlineSetHtml);
                break;
            case 5:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>竖线</li>");
                creControlHtml(slineHtml,HlineSetHtml);
                break;
            case 6:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>按钮</li>");
                creControlHtml(btnHtml,btnSetHtml);
                break;
            case 7:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>容器</li>");
                creControlHtml(CboxHtml,CboxSetHtml);
                break;
            case 8:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>视频</li>");
                creControlHtml(videoHtml,videoSetHtml);
                break;
            case 9:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>音乐</li>");
                creControlHtml(musicHtml,musicSetHtml);
                break;
            case 10:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>轮播图</li>");
                creControlHtml(hdpHtml,hdpSetHtml);
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationType : 'progress',
                    paginationClickable: true,
                    autoplay:500,
                    span:500,
                    loop : true,
                    effect :'cube',
                    observer:true,
                    observeParents:true,
                });
                break;
            case 11:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>导航</li>");
                creControlHtml(navHtml,navSetHtml);
                break;
            case 12:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>导航按钮</li>");
                creControlHtml(navBtnHtml,navBtnSetHtml);
                break;
            case 13:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>联系我们</li>");
                creControlHtml(FormHtml,btnSetHtml);
                break;
            case 14:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>地图</li>");
                creControlHtml(btnHtml,btnSetHtml);
                break;
            case 15:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>商品列表</li>");
                creControlHtml(btnHtml,btnSetHtml);
                break;
            case 16:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>二维码</li>");
                creControlHtml(btnHtml,btnSetHtml);
                break;
            case 17:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>公众号</li>");
                creControlHtml(btnHtml,btnSetHtml);
                break;
        };
        //生成html
        function creControlHtml(controlHtml,controlSetHtml){
            controlSetHtmlArr[setting.type]=controlSetHtml;
            box.find('.chageSize').hide();//隐藏旧控件控制html
            cssSetBox.find('.panel').remove();//删除旧控件设置html
            cssSetBox.append(controlSetHtml);//生成新控件设置html
            box.append(controlHtml);//生成新控件html
            new Mian(box.find('>li:last'),controlSetHtmlArr);
        };
        
        //控件主函数
        function Mian(control,controlSetHtmlArr){
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
            function select(control){
                //取消全选的时候 取消选择控件
                control.click(function(){
                    console.log(1);
                    var textCon=$(this).find('.textCon');
                    var liNum=Number($(this).attr('type'));
                    
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
                    
                    $('.panel').remove();
                    box.find('.chageSize').hide();
                    cssSetBox.append(controlSetHtmlArr[liNum]);
                    $(this).find('.chageSize').show();
                    //控件控制按钮
                    controlBtnBox.find('li').removeClass('current');
                    controlBtnBox.find('li').eq($(this).index()).addClass('current');
                    chageCss($(this));
                    $(document).click(function(){
                        var oHeight = control.height();
                        textCon.attr('contenteditable','false');
                        textCon.parents("li").height(oHeight);
                        textCon.height(textCon.height());
                        textCon.removeClass('heightIm');
                        textCon.parents("li").removeClass('heightIm');
                        $('.chageSize').hide();
                    })
                
                return false;
                });
            }
            select(control);
            
            //移动函数
            if(setting.position==true){
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
                        return false;
                    })
                    //移动
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
                        flag=false;//关掉移动
                        return false;
                    })
                }
                drag();
            };
            
            //放大函数
            if(setting.chageSize==true){
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
            }
            function chageCss(control){
                
            }
            chageCss(control);
        }
    }
})
//window.onbeforeunload=function(){
//    return '请确定保存好再离开';
//} ;













