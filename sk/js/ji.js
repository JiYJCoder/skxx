//控件通用样式
var shadowHtml=`<div class="component_public ImgBoder">
                      <p class="title">阴影</p>
                      <ul>
                          <li class="clearfix">
                              <span>颜色</span>
                              <div class="ImgchageBgSetCol shadowCol">
                                  <div class="ImgchageBgSetColVal"></div>
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>Y轴</span>
                              <div class="ImgBoderSize shadowY">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>X轴</span>
                              <div class="ImgBoderSize shadowX">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>模糊</span>
                              <div class="ImgBoderSize shadowRange">
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
                          <li type='1'>纯色</li>
                          <li type='2'>渐变</li>
                          <li type='3' class='galleryBtn bgSel'>图片</li>
                          <li class="current" type='4'>无</li>
                      </ul>
                      <div class="ImgchageBgSet clearfix">
                          <div class="ImgchageBgSetCol solidColor">
                              <div class="ImgchageBgSetColVal"></div>
                          </div>
                      </div>
                      <div class="ImgchageBgSet clearfix ImgchageBgSetJb">
                          <div class="ImgchageBgSetCol gradientHead">
                              <div class="ImgchageBgSetColVal"></div>
                          </div>
                          <div class="ImgchageBgSetCol gradientfoot">
                              <div class="ImgchageBgSetColVal"></div>
                          </div>
                      </div>
                  </div>`;
var boderHtml=`<div class="component_public ImgBoder">
                      <p class="title">边框</p>
                      <ul>
                          <li class="clearfix">
                              <span>边框</span>
                              <div class="ImgchageBgSetCol borderColBtn">
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
                              <div class="ImgBoderSize chageBoderWidth">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>圆角</span>
                              <div class="ImgBoderSize chageFilletWidth">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>内距</span>
                              <div class="ImgBoderSize chagePadding">
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
                              <div class="lineBtn lineSetVal"></div>
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
                            <li class='bgCol'><div class='colConValShow'></div></li>
                            <li>
                            <div class='fontCol'><img src='images/site_fontA.png' alt=''></div></li>
                            <li class='fontDelCol'>DEL</li>
                        </ul>
                    </div>
                </li>
                <li class='clearfix'>
                    <div class='colTitle publicTitle'>样式</div>
                    <div class='fontStyle'>
                        <ul class='clearfix'>
                            <li class='fontbold'>B</li>
                            <li class='fontI'><i>i</i></li>
                            <li class='fontX'>U</li>
                            <li>Tx</li>
                        </ul>
                    </div>
                </li>
                <li class='clearfix'>
                    <div class='colTitle publicTitle'>大小</div>
                    <div class='fontSize tbBox'><p><span>12</span>px</p><img src='images/site_chageSize.png' alt='' class='shangla'><img src='images/site_xiala.png' alt='' class='xiala'>
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
                <div class='fontspacingVal tbBox'>
                    <span>1</span>
                    <img src='images/site_chageSize.png' alt='' class='shangla'>
                    <img src='images/site_xiala.png' alt='' class='xiala'>
                </div>
            </div>
        </div>`;

//改变大小HTML
var csHtml="<div class='chageSize'><div class='chageSizeLeft'><div class='wr size'></div><div class='nw size'></div><div class='sw size'></div></div><div class='chageSizeTop'><div class='nr size'></div><div class='Rotate'></div></div><div class='chageSizeRight'><div class='ne size'></div><div class='er size'></div><div class='es size'></div></div><div class='chageSizebottom'><div class='sr size'></div></div>";
//字体控件HTML
var textHtml="<li type='0'><div class='text'><div class='textCon'>双击输入文字</div></div>"+csHtml+"</li>";
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
var ImgHtml="<li type='1'><div class='Img'><img src='images/site_img.png'></div>"+csHtml+"</li>"
//图片设置html
var ImgSetHtml=`<div class='panel'>
              <div class="site_pageComponent_con" style="display:block">
                  <div class="ImgShow danImg galleryBtn">
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
                              <div class="titleStyleCon titleVal titleSet">
                                  <div class="titleStyleConVal titleStyleSet">
                                      
                                  </div>
                                  <ul class='chageTitleStyle'>
                                      <li type='1'><i></i></li>
                                      <li class="chage" type='2'><i></i></li>
                                  </ul>
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>图标</span>
                              <div class="titleStyleCon titleIconlist titleIconSet">
                                  <div class="titleStyleIcon titleStyleSet">
                                      
                                  </div>
                                  <ul class="clearfix chageIcon">
                                      <li><i></i></li>
                                      <li><i></i></li>
                                      <li><i></i></li>
                                      <li><i></i></li>
                                      <li><i></i></li>
                                      <li><i></i></li>
                                      <li><i></i></li>
                                      <li><i></i></li>
                                      <li><i></i></li>
                                      <li><i></i></li>
                                  </ul>
                              </div>
                          </li>
                      </ul>
                  </div>
                  ${fontHtml}
                  ${fontAlignHtml}
                  ${boderHtml}
                  ${positionHtml}
              </div>
          </div>`;
//标题控件HTML
var titleHtml=`<li type='2'>
                      
                      <div class="site_serch clearfix">
                          <div class="serchCon textView">标题标题标</div>
                      </div>
                      ${csHtml}
                  </li>`;
//图集
var atlasSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;">
                  <div class="ImgShow Atlas galleryBtn">
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
                      <div class='titleStyleSet atlasStyleBg'></div>
                      <div class="AtlasStyleList">
                          <ul class='AtlasStyleListUl'>
                              <li><i></i></li>
                              <li><i></i></li>
                          </ul>
                      </div>
                  </div>
                  <div class="component_public ImgBoder">
                      <p class="title">图片设置</p>
                      <ul>
                          <li class="clearfix">
                              <span>列数</span>
                              <div class="ImgBoderSize atlasColumn">
                                  <input type="text" value="3">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>间距</span>
                              <div class="ImgBoderSize atlasPadding">
                                  <input type="text" value="0">
                                  <img src="images/site_xiala.png" alt="" class="ImgBoderSizeXia">
                                  <img src="images/site_chageSize.png" alt="" class="ImgBoderSizeS">
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>圆角</span>
                              <div class="ImgBoderSize chageFilletWidth">
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
//图集控件
var atlasHtml=`<li type='3'>
                      <div class="site_CAtlas Img">
                          <ul class="clearfix">
                              <li class="general"><img src="images/site_Atlas.png" alt=""></li>
                              <li class="general"><img src="images/site_Atlas.png" alt=""></li>
                              <li class="general"><img src="images/site_Atlas.png" alt=""></li>
                              <li class="general"><img src="images/site_Atlas.png" alt=""></li>
                              <li class="general"><img src="images/site_Atlas.png" alt=""></li>
                              <li class="general"><img src="images/site_Atlas.png" alt=""></li>
                              <li class="general"><img src="images/site_Atlas.png" alt=""></li>
                              <li class="general"><img src="images/site_Atlas.png" alt=""></li>
                              <li class="general"><img src="images/site_Atlas.png" alt=""></li>
                          </ul>
                      </div>
                      ${csHtml}
                  </li>`;
//横线控件
var HlineHtml=`<li type='4'><div class="Hline"><hr class="general"></div>${csHtml}</li>`;
//横线控件设置HTML
var HlineSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;"></div>
              <div class="site_pageComponent_con">
                  <div class="component_public ImgBoder">
                      <p class="title">线条</p>
                      <ul>
                          <li class="clearfix">
                              <span>线条</span>
                              <div class="ImgchageBgSetCol borderStyle">
                                  <div class="ImgchageBgSetColVal"></div>
                              </div>
                              <div class="ImgBoderStyle borderSetStyle">
                                  <p></p>
                                  <ul>
                                      <li><p></p></li>
                                      <li><p style="border: 1px dotted #a5a5a5;"></p></li>
                                      <li><p style="border: 1px dashed #a5a5a5;"></p></li>
                                  </ul>
                              </div>
                              <div class="ImgBoderSize borderSetWidth">
                                  <input type="text" value="1">
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
var slineHtml=`<li type='5'><div class="sLine"><hr class="general"></div>${csHtml}</li>`;
//按钮控件
var btnHtml=`<li type='6'><div class="bottonCon"><div class="botton"><p>按钮</p></div></div>${csHtml}</li>`;
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
                              <div class="titleStyleCon btnVal">
                                  <div class="titleStyleConVal btnCurrent titleStyleSet">
                                      
                                  </div>
                                  <ul class="chageTitleStyle">
                                      <li type="1"><i></i></li>
                                      <li class="chage" type="2"><i></i></li>
                                  </ul>
                              </div>
                          </li>
                          <li class="clearfix">
                              <span>图标</span>
                              <div class="titleStyleCon titleIconlist btnlist">
                                  <div class="titleStyleIcon titleStyleSet">
                                      
                                  </div>
                                  <ul class="clearfix chageIcon">
                                      <li><i></i></li>
                                      <li><i></i></li>
                                      <li><i></i></li>
                                      <li><i></i></li>
                                      <li><i></i></li>
                                      <li><i></i></li>
                                      <li><i></i></li>
                                      <li><i></i></li>
                                      <li><i></i></li>
                                      <li><i></i></li>
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
var  CboxHtml=`<li type='7'><div class="Cbox"><div class="CboxShow general"></div></div>${csHtml}</li>`;
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
var videoHtml=`<li type='8'>
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
var musicHtml=`<li type='9'>
                      <div class="video">
                          <div class="videoImg" style='pointer-events:none;'><audio loop="" src="" preload=" "></audio></div>
                      </div>
                      ${csHtml}
                  </li>`
//音乐控件设置
var musicSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;">
                  <div class="videoSet">
                      <p>支持虾米音乐</p>
                      <div class="videoSetCon" contenteditable="true">
                          
                      </div>
                  </div>
              </div>
              <div class="site_pageComponent_con">
                  ${positionHtml}
              </div>
          </div>`;

//轮播图
var hdpHtml=`<li type='10'>
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
var navHtml=`<li type='11'>
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
//导航按钮
var navBtnHtml=`<li type='12'>
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
//联系我们
var FormHtml=`<li type='13'>
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
var FormSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;">
                  <div class="component_public formSet">
                      <p class="title">文字</p>
                      <div class="formSetVal clearfix">
                          <p>按钮</p>
                          <input type="text" placeholder="提交">
                      </div>
                      <div class="formSetVal clearfix">
                          <p>表单1</p>
                          <input type="text" placeholder="姓名">
                      </div>
                      <div class="formSetVal clearfix">
                          <p>表单2</p>
                          <input type="text" placeholder="手机号码">
                      </div>
                      <div class="formSetVal clearfix">
                          <p>表单3</p>
                          <input type="text" placeholder="公司名称">
                      </div>
                      <div class="formSetVal clearfix">
                          <p>表单4</p>
                          <input type="text" placeholder="座机号码">
                      </div>
                      <div class="formSetVal clearfix sex">
                          <p>表单5</p>
                          <input type="text" placeholder="性别">
                          <input type="text" placeholder="男">
                          <input type="text" placeholder="女">
                      </div>
                      <div class="formSetVal clearfix">
                          <p>表单6</p>
                          <input type="text" placeholder="备注">
                      </div>
                  </div>
              </div>
              <div class="site_pageComponent_con">
                  ${fontHtml}
                  ${bgHtml}
                  ${fontAlignHtml}
                  ${boderHtml}
                  ${positionHtml}
              </div>
          </div>`;
//地图
var mapHtml=`<li type='14'>
                      <div class="map" id="baiduMap">
                          
                      </div>
                      ${csHtml}
                  </li>`;
var mapSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;">
                  <div class="component_public mapSet">
                      <p class="title">
                          地址定位
                      </p>
                      <div class="mapSet">
                          <input type="text" class="val">
                          <input type="button" class="btn btnActive" value="搜索">
                      </div>
                  </div>
              </div>
              <div class="site_pageComponent_con">
                  ${positionHtml}
              </div>
          </div>`;
//商品列表
var cmListHtml=`<li type='15'>
                      <div class="commodityList">
                          <div class="commodityListCon">
                              <div class="commodityListConShow clearfix">
                                  <div class="commodityListConShowImg">
                                      
                                  </div>
                                  <div class="commodityListConShowText">
                                      <p class="commodityTitle">标题</p>
                                      <p class="commoditPrice">价格</p>
                                  </div>
                              </div>
                              <div class="commodityListConShow clearfix">
                                  <div class="commodityListConShowImg">
                                      
                                  </div>
                                  <div class="commodityListConShowText">
                                      <p class="commodityTitle">标题</p>
                                      <p class="commoditPrice">价格</p>
                                  </div>
                              </div>
                              <div class="commodityListConShow clearfix">
                                  <div class="commodityListConShowImg">
                                      
                                  </div>
                                  <div class="commodityListConShowText">
                                      <p class="commodityTitle">标题</p>
                                      <p class="commoditPrice">价格</p>
                                  </div>
                              </div>
                              <p class="commodityLoad">查看更多</p>
                          </div>
                      </div>
                      ${csHtml}
                  </li>`;
var cmListSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;">
                  <div class="component_public">
                      <p class="title">列表内容</p>
                      <div class="commoditySet clearfix">
                          <div class="commoditySetTitle">
                              选择店铺
                          </div>
                          <div class="commoditySetCon">
                              <p>苏州分店</p>
                              <ul>
                                  <li>苏州分店</li>
                                  <li>麻痹分店</li>
                                  <li>傻逼分店</li>
                                  <li>苏州分店</li>
                              </ul>
                          </div>
                          <div class="commoditySetCon">
                              <p>全部分类</p>
                              <ul>
                                  <li>苏州分店</li>
                                  <li>麻痹分店</li>
                                  <li>傻逼分店</li>
                                  <li>苏州分店</li>
                              </ul>
                          </div>
                      </div>
                      <div class="commoditySet clearfix">
                          <div class="commoditySetTitle">
                              每页显示数量
                          </div>
                          <div class="commoditySetCon">
                              <p>不限</p>
                              <ul>
                                  <li>3</li>
                                  <li>6</li>
                                  <li>9</li>
                                  <li>不限</li>
                              </ul>
                          </div>
                      </div>
                      <div class="commoditySet clearfix">
                          <div class="commoditySetTitle">
                              排序
                          </div>
                          <div class="commoditySetCon commoditySort">
                              <p>按发布时间</p>
                              <ul>
                                  <li>按销售量</li>
                                  <li>6</li>
                                  <li>9</li>
                                  <li>不限</li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <a href="" class="conmmodityA">点击进入店铺管理后台</a>
              </div>
              <div class="site_pageComponent_con">
                  <div class="component_public commStyle">
                      <p class="title">排列方式</p>
                      <ul class="clearfix">
                          <li class="current"></li>
                          <li></li>
                          <li></li>
                          <li></li>
                      </ul>
                  </div>
              </div>
          </div>`;
//二维码
var ewmHtml=`<li type='16'>
                      <div class="ewm">
                          <img src="images/erweima.png" alt="">
                      </div>
                      ${csHtml}
                  </li>`;
var ewmSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;">
                  <div class="component_public">
                      <p class="title">二维码链接</p>
                      <div class="ermVal clearfix">
                          <p>指定网址</p>
                          <input type="text">
                      </div>
                  </div>
              </div>
              <div class="site_pageComponent_con">
                  
              </div>
          </div>`;
//公众号
var weixinHtml=`<li type='17'>
                      <div class="ewm weixin">
                          <img src="images/weixin.png" alt="">
                      </div>
                      ${csHtml}
                  </li>`;
var weixinSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;">
                  <div class="component_public">
                      <p class="title">公众号</p>
                      <div class="weixinSetTx clearfix">
                          <div class="weixinSetTxtitle">
                              <p>头<span class="op">头像</span>像</p>
                          </div>
                          <div class="weixinSetTxImg">
                              <img src="" alt="">
                          </div>
                      </div>
                      <div class="weixinSetTip clearfix">
                          <div class="weixinSetTipTitle">
                              文字提示
                          </div>
                          <input type="text">
                      </div>
                      <div class="weixinSetTip clearfix">
                          <div class="weixinSetTipTitle">
                              关注方式
                          </div>
                          <div class="weixinSetWay">
                              <input type="radio" name="way" value="引导图文"  checked>&nbsp;引导图文
                              <input type="radio" name="way" value="扫描二维码">&nbsp;扫描二维码
                          </div>
                      </div>
                      <div class="weixinSetTip clearfix">
                          <div class="weixinSetTipTitle">
                              关注链接
                          </div>
                          <input type="text">
                      </div>
                  </div>
                  <div class="component_public">
                       <p class="title">展示设置</p>
                       <ul class="weixinSetShow">
                           <li><input type="radio" checked>&nbsp;推迟时间<input type="number" value="5" class="number">&nbsp;&nbsp;秒<p>页面打开以上时间后，组件开始显示，不勾选表示立即显示。</p></li>
                           <li><input type="radio" checked>&nbsp;持续时间<input type="number" value="5" class="number">&nbsp;&nbsp;秒<p>组件展示的持续时间，不勾选表示永久展示。</p></li>
                       </ul>
                  </div>
              </div>
              <div class="site_pageComponent_con">
                  ${positionHtml}
              </div>
          </div>`;
var imgBox=`<div class="site_imgBox">
        <div class="site_imgBoxTitle">
            <p>图库</p>
            <img src="images/site_close.png" alt="" class="site_imgBox_close">
        </div>
        <div class="site_imgBoxBtn">
            <ul class="clearfix">
                <li class="current">我的图片</li>
                <li>素材库</li>
            </ul>
            <div class="site_imgUpload">
                上传资源
                <input type="file">
            </div>
        </div>
        <div class="site_ImgList" style="display:block">
            <ul class="clearfix">
                <li><img src="images/site_AtlasStyle1.png" alt="" width="187" height="138"><i></i></li>
                <li><img src="images/defaultImg.png" alt="" width="187" height="138"><i></i></li>
                <li><img src="images/defaultImg.png" alt="" width="187" height="138"><i></i></li>
                <li><img src="images/defaultImg.png" alt="" width="187" height="138"><i></i></li>
                <li><img src="images/defaultImg.png" alt="" width="187" height="138"><i></i></li>
                <li><img src="images/defaultImg.png" alt="" width="187" height="138"><i></i></li>
                <li><img src="images/defaultImg.png" alt="" width="187" height="138"><i></i></li>
                <li><img src="images/defaultImg.png" alt="" width="187" height="138"><i></i></li>
            </ul>
        </div>
        <div class="site_ImgList material">
            <div class="materialBtn">
                <ul class="clearfix">
                    <li class="current">全部</li>
                    <li>风景</li>
                    <li>人物</li>
                    <li>卡通</li>
                    <li>影视</li>
                    <li>游戏</li>
                    <li>品牌</li>
                    <li>其他</li>
                </ul>
                <div class="imgSearch">
                    <img src="images/searchIcon.png" alt="" class="searchIcon">
                    <input type="text">
                </div>
            </div>
            <ul class="clearfix">
                <li><img src="images/defaultImg.png" alt="" width="187" height="138"><i></i></li>
                <li><img src="images/defaultImg.png" alt="" width="187" height="138"><i></i></li>
                <li><img src="images/defaultImg.png" alt="" width="187" height="138"><i></i></li>
                <li><img src="images/defaultImg.png" alt="" width="187" height="138"><i></i></li>
                <li><img src="images/defaultImg.png" alt="" width="187" height="138"><i></i></li>
                <li><img src="images/defaultImg.png" alt="" width="187" height="138"><i></i></li>
                <li><img src="images/defaultImg.png" alt="" width="187" height="138"><i></i></li>
                <li><img src="images/defaultImg.png" alt="" width="187" height="138"><i></i></li>
            </ul>
        </div>
        <div class="site_ImgListSel">
            <ul class="clearfix">
                <li><img src="" alt="" width="76" height="56"></li>
                <li><img src="" alt="" width="76" height="56"></li>
                <li><img src="" alt="" width="76" height="56"></li>
                <li><img src="" alt="" width="76" height="56"></li>
                <li><img src="" alt="" width="76" height="56"></li>
                <li><img src="" alt="" width="76" height="56"></li>
                <li><img src="" alt="" width="76" height="56"></li>
                <li><img src="" alt="" width="76" height="56"></li>
                <li><img src="" alt="" width="76" height="56"></li>
            </ul>
        </div>
        <div class="site_ImgListBtn">
            <div class="site_ImgListSave">确定</div>
        </div>
    </div>`
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
            chageCssBtn:true,//改变CSS
        };
        var setting=$.extend({},defaults,data);
        //根据类型生成控件
        switch(setting.type){
            case 0://生成文字
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>文本框</li>");
                creControlHtml(textHtml,textSetHtml,{
                    width:'92',
                    height:'36',
                    left:'110',
                    top:'190',
                });
                break;
            case 1:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>图片</li>");
                creControlHtml(ImgHtml,ImgSetHtml,{
                    width:'92',
                    height:'80',
                    left:'100',
                    top:'190',
                });
                break;
            case 2:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>标题</li>");
                creControlHtml(titleHtml,titleSetHtml,{
                    width:'194',
                    height:'36',
                    left:'64',
                    top:'172',
                    color:'#ffffff',
                    lineHeight:'3'
                });
                break;
            case 3:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>图集</li>");
                creControlHtml(atlasHtml,atlasSetHtml,{
                    width:'147',
                    height:'130',
                    left:'88',
                    top:'99',
                    padding:'5px'
                });
                break;
            case 4:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>横线</li>");
                creControlHtml(HlineHtml,HlineSetHtml,{
                    width:'190',
                    height:'20',
                    left:'68',
                    top:'188',
                });
                break;
            case 5:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>竖线</li>");
                creControlHtml(slineHtml,HlineSetHtml,{
                    width:'20',
                    height:'190',
                    left:'146',
                    top:'190',
                });
                break;
            case 6:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>按钮</li>");
                creControlHtml(btnHtml,btnSetHtml,{
                    width:'100',
                    height:'40',
                    left:'100',
                    top:'190',
                    color:"#ffffff",
                    borderRadius:"5",
                    backgroundColor:"#438eb9"
                });
                break;
            case 7:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>容器</li>");
                creControlHtml(CboxHtml,CboxSetHtml,{
                    width:'130',
                    height:'130',
                    left:'100',
                    top:'190',
                    padding:'5px'
                });
                break;
            case 8:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>视频</li>");
                creControlHtml(videoHtml,videoSetHtml,{
                    width:'80',
                    height:'80',
                    left:'100',
                    top:'190',
                });
                break;
            case 9:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>音乐</li>");
                creControlHtml(musicHtml,musicSetHtml,{
                    width:'80',
                    height:'80',
                    left:'100',
                    top:'190',
                });
                break;
            case 10:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>轮播图</li>");
                creControlHtml(hdpHtml,hdpSetHtml,{
                    width:'180',
                    height:'130',
                    left:'75',
                    top:'174',
                    padding:'5px'
                });
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
                creControlHtml(navHtml,navSetHtml,{
                    width:'290',
                    height:'40',
                    left:'15',
                    top:'0',
                });
                break;
            case 12:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>导航按钮</li>");
                creControlHtml(navBtnHtml,navBtnSetHtml,{
                    width:'50',
                    height:'50',
                    left:'100',
                    top:'190',
                });
                break;
            case 13:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>联系我们</li>");
                creControlHtml(FormHtml,FormSetHtml,{
                    width:'280',
                    height:'340',
                    left:'23',
                    top:'220',
                    padding:'10px'
                });
                break;
            case 14:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>地图</li>");
                creControlHtml(mapHtml,mapSetHtml,{
                    width:'170',
                    height:'135',
                    left:'100',
                    top:'190',
                    transform:'rotate(0deg)',
                });
                var map = new BMap.Map("baiduMap");         // 创建地图实例
//                map.addEventListener("click",function(e){
//                    map.clearOverlays();
//                    var point = new BMap.Point(e.point.lng, e.point.lat);
//                    var marker = new BMap.Marker(point);
//                    this.addOverlay(marker); 
//                });
//                var opts = {type: BMAP_NAVIGATION_CONTROL_ZOOM}    
//                map.addControl(new BMap.NavigationControl(opts));
                map.enableScrollWheelZoom();
                var myGeo = new BMap.Geocoder();
                myGeo.getPoint("广州市天河区上社喜洋居", function(point){
                    if (point) {
                        map.centerAndZoom(point, 18);
                        map.clearOverlays();
                        map.addOverlay(new BMap.Marker(point));
                    }else{
                        alert("您选择地址没有解析到结果!");
                    }
                });
                break;
            case 15:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>商品列表</li>");
                creControlHtml(cmListHtml,cmListSetHtml,{
                    width:'297',
                    height:'270',
                    left:'12',
                    top:'270',
                    padding:'5px'
                });
                break;
            case 16:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>二维码</li>");
                creControlHtml(ewmHtml,ewmSetHtml,{
                    width:'70',
                    height:'70',
                    left:'100',
                    top:'190',
                    padding:'5px'
                });
                break;
            case 17:
                controlBtnBox.find('li').removeClass('current');
                controlBtnBox.append("<li class='current'>公众号</li>");
                creControlHtml(weixinHtml,weixinSetHtml,{
                    width:'70',
                    height:'70',
                    left:'100',
                    top:'190',
                    padding:'5px'
                });
                break;
        };
        //生成html
        function creControlHtml(controlHtml,controlSetHtml,defaultCssSet){
            controlSetHtmlArr[setting.type]=controlSetHtml;
            box.find('.chageSize').hide();//隐藏旧控件控制html
            cssSetBox.find('.panel').remove();//删除旧控件设置html
            cssSetBox.append(controlSetHtml);//生成新控件设置html
            box.append(controlHtml);//生成新控件html
            //设置控件默认值
            box.find('>li:last').children().eq(0).css({
                fontSize:defaultCssSet.fontSize||'12px',
                fontWeight:defaultCssSet.fontWeight || 'normal',
                fontStyle:defaultCssSet.fontStyle || 'normal',
                backgroundColor:defaultCssSet.backgroundColor || 'transparent',
                color:defaultCssSet.color || '#333333',
                textDecoration:defaultCssSet.textDecoration || 'none',
                textAlign:defaultCssSet.textAlign || 'left',
                lineHeight:defaultCssSet.lineHeight||'1',
                borderWidth:0+"px",
                borderStyle:'solid',
                borderColor:'#ffffff',
                padding:defaultCssSet.padding||"0px",
            });
            box.find('>li:last').css({
                width:defaultCssSet.width+'px' || false,
                height:defaultCssSet.height+'px' || false,
                left:defaultCssSet.left+'px' || false,
                top:defaultCssSet.top+'px' || false,
                transform:defaultCssSet.transform || 'rotate(0deg)',
            });
            box.find('>li:last').find('.general').css({
                boxShadow:"#ffffff 0 0 0"
            });
            box.find('>li:last').find('*').css({
                borderRadius:defaultCssSet.borderRadius+"px"||"0px"
            });
            //设置控件面板默认值
            function panelDefaultVal(){
                $('.bgCol .colConValShow').css({
                    backgroundColor:defaultCssSet.backgroundColor
                });
                $('.fontCol img').css({
                    borderBottomColor:defaultCssSet.color
                });
                $('.tbBox p span').text(defaultCssSet.fontSize);
                $('.font_text_align li.left').addClass('current');
                $('.fontspacingVal span').text(defaultCssSet.lineHeight);
                $('.fontcssSet li input').eq(0).val(defaultCssSet.width)
                $('.fontcssSet li input').eq(1).val(defaultCssSet.height)
                $('.fontcssSet li input').eq(2).val(defaultCssSet.left)
                $('.fontcssSet li input').eq(3).val(defaultCssSet.top)
            }
            panelDefaultVal()
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
                        var bgc=controlSel.attr('bgc');//背景颜色
                        var col=valArr[4].substring(8);//字体颜色
                        var ta=valArr[6].substring(13);//字体对齐方式
                        var lh=valArr[7].substring(13);//行高
                        var bw=valArr[8].substring(14,valArr[8].length-2);//边宽
                        var br=valArr[12].substring(15,valArr[12].length-2);//圆角
                        var pd=valArr[11].substring(9,valArr[11].length-2);//内距
                        var bs=valArr[9].substring(14);//边样
                        var bc=valArr[10].substring(14);//边色
                        console.log(br);
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
                        //背景颜色
                        $('.colConValShow').css({
                            backgroundColor:bgc
                        })
                        if(col!='rgb(51, 51, 51)'){
                            $('.fontCol img').css({
                                borderBottomColor:col
                            })
                        }
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
                        $('.ImgchageBgSetColVal').css({
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
                        }else if(controlSel.attr('bg')=='2'){
                            $('.ImgchageBg ul li').eq(1).addClass('current').siblings().removeClass('current');
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
                    controlSet.children().eq(0).css({
                        color:'#333333',
                        backgroundColor:'transparent'
                    });
                    $('.fontCol img').css('border-bottom-color', '#333333');
                    $('.colConValShow').css('background-color', 'transparent');
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
                                    controlSet.find('.botton').css({
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
                                    controlSet.find('.botton').css({
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
                //按钮
                
            };
            chageCss(control);
        }
    }
})
//window.onbeforeunload=function(){
//    return '请确定保存好再离开';
//} ;













