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
var fontAlignHtml1=`<div class='component_public'>
            <p class='title'>对齐方式</p>
            <ul class='clearfix font_text_align'>
                <li class='left current'></li>
                <li class='center'></li>
                <li class='right'></li>
                <li class='justify'></li>
            </ul>
        </div>`

//改变大小HTML
var csHtml="<div class='chageSize'><div class='chageSizeLeft'><div class='wr size'></div><div class='nw size'></div><div class='sw size'></div></div><div class='chageSizeTop'><div class='nr size'></div><div class='Rotate'></div></div><div class='chageSizeRight'><div class='ne size'></div><div class='er size'></div><div class='es size'></div></div><div class='chageSizebottom'><div class='sr size'></div></div>";
//字体控件HTML
var textHtml="<li type='0'><div class='text'><div class='textCon textView' bgc='transparent'>双击输入文字</div></div>"+csHtml+"</li>";
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
                          <div class="serchCon textView" bgc="#438eb9">标题标题标</div>
                      </div>
                      <input type="text">
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
              <div class="site_pageComponent_con" style="display:block;">${linkHtml}</div>
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
var btnHtml=`<li type='6'><div class="bottonCon"><div class="botton"><p class="textView" bgc="#438eb9">按钮</p></div></div>${csHtml}</li>`;
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
                  ${fontAlignHtml1}
                  ${boderHtml}
                  ${positionHtml}
              </div>
          </div>`;
//容器
var  CboxHtml=`<li type='7'><div class="Cbox"><div class="CboxShow general"></div></div>${csHtml}</li>`;
//容器设置
var CboxSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;">
                  ${linkHtml}
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
                          <div class="videoImg video" style='pointer-events:none;'><embed src="http://player.youku.com/player.php/sid/XMTQ2Mjk2NDI5Mg==/v.swf" allowfullscreen="true" wmode="opaque" quality="high" height="100%" width="100%" align="middle" allowscriptaccess="always" type="application/x-shockwave-flash"></div>
                      </div>
                      ${csHtml}
                  </li>`;
//视频控件设置
var videoSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;">
                  <div class="videoSet">
                      <p>支持优酷，土豆，腾讯，搜狐等视频</p>
                      <div class="videoSetCon" contenteditable="true" type='video'>http://player.youku.com/player.php/sid/XMTQ2Mjk2NDI5Mg==/v.swf</div>
                  </div>
              </div>
              <div class="site_pageComponent_con">
                  ${positionHtml}
              </div>
          </div>`;
var musicHtml=`<li type='9'>
                      <div class="video">
                          <div class="videoImg music" style='pointer-events:none;'><audio loop="" src="" preload=" "></audio></div>
                      </div>
                      ${csHtml}
                  </li>`
//音乐控件设置
var musicSetHtml=`<div class="panel">
              <div class="site_pageComponent_con" style="display:block;">
                  <div class="videoSet">
                      <p>支持虾米音乐</p>
                      <div class="videoSetCon" contenteditable="true" type='music'></div>
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
                              <input type="text" name="plane" placeholder="请输入座机号码">
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
                  ${fontAlignHtml1}
                  ${boderHtml}
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
        var cssSetBox=$('.site_pageComponent');//控件box
        var controlBtnBox=$('.site_ControlRecordCon >ul');//控件控制按钮
        var box=$('.site_page_container >ul');
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
                    lineHeight:'3em'
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
                    borderRadius:"5px",
                    backgroundColor:"#438eb9",
                    textAlign:"center"
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
                    padding:'10px',
                    backgroundColor:"#fff"
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
//                var map = new BMap.Map("baiduMap");         // 创建地图实例
//                map.addEventListener("click",function(e){
//                    map.clearOverlays();
//                    var point = new BMap.Point(e.point.lng, e.point.lat);
//                    var marker = new BMap.Marker(point);
//                    this.addOverlay(marker); 
//                });
//                var opts = {type: BMAP_NAVIGATION_CONTROL_ZOOM}    
//                map.addControl(new BMap.NavigationControl(opts));
//                map.enableScrollWheelZoom();
//                var myGeo = new BMap.Geocoder();
//                myGeo.getPoint("广州市天河区上社喜洋居", function(point){
//                    if (point) {
//                        map.centerAndZoom(point, 18);
//                        map.clearOverlays();
//                        map.addOverlay(new BMap.Marker(point));
//                    }else{
//                        alert("您选择地址没有解析到结果!");
//                    }
//                });
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
                lineHeight:defaultCssSet.lineHeight||'1em',
                borderWidth:0+"px",
                borderStyle:'solid',
                borderColor:'#ffffff',
                padding:defaultCssSet.padding||"0px",
                borderRadius:"0px",
                backgroundImage:"none",
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
                borderRadius:defaultCssSet.borderRadius||"0px"
            });
            //设置控件面板默认值
            function panelDefaultVal(){
                var ta=defaultCssSet.textAlign;
                //行高
                if(defaultCssSet.lineHeight !=undefined){
                    var lh=defaultCssSet.lineHeight.substring(1,this.length-2);
                }
                //对齐方式
                if(ta=="center"){
                    $('.font_text_align .center').addClass('current').siblings().removeClass('current');
                }else if(ta=='right'){
                    $('.font_text_align .right').addClass('current').siblings().removeClass('current');
                }else if(ta=='justify'){
                    $('.font_text_align .justify').addClass('current').siblings().removeClass('current');
                }
                
                $('.solidColor .ImgchageBgSetColVal').css({
                    backgroundColor:defaultCssSet.backgroundColor
                });
                $('.fontCol img').css({
                    borderBottomColor:defaultCssSet.color
                });
                $('.tbBox p span').text(defaultCssSet.fontSize);
                $('.fontspacingVal span').text(lh);
                $('.fontcssSet li input').eq(0).val(defaultCssSet.width)
                $('.fontcssSet li input').eq(1).val(defaultCssSet.height)
                $('.fontcssSet li input').eq(2).val(defaultCssSet.left)
                $('.fontcssSet li input').eq(3).val(defaultCssSet.top)
            }
            panelDefaultVal()
            new Mian(box.find('>li:last'),controlSetHtmlArr,defaultCssSet);
        };
        
    }
})
//window.onbeforeunload=function(){
//    return '请确定保存好再离开';
//};













