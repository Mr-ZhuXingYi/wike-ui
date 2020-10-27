let defaultHtml=`<tb-jumbotron style="background-image:url(&quot;https://textbus.tanboui.com/static/img/tbus-bg.49d7d956eb051d336e7f788f1b62eeb0.jpg&quot;);background-size:cover;background-position:center center">
    <h1 style="color:rgb(255, 255, 255);font-size:36px">Hello, world!</h1>
    <p style="color:rgb(255, 255, 255)">我是 TextBus 富文本编辑器，等你好久了，</p>
    <p style="color:rgb(255, 255, 255)">快来发挥你的创造力吧！</p>
    </tb-jumbotron>
    <p>你也许在找一个既能开箱即用，又可以自由扩展的富文本编辑器？没错，你现在看到的就是。TextBus 是一个基于组件的编辑器，你可以自由定制你想要的任意组件和效果，而不用关心富文本的底层实现。如果你觉得 TextBus 默认提供的样式还不够非富，你一样可以自己扩展。总之，限制你的不是 TextBus，而是你自己的想象力！</p>
    <p>来看看当前 TextBus 都有什么亮点：</p>
    <ul>
    <li>默认自带了足够<strong style="color:rgb(18, 150, 219)">丰富的工具</strong>，基本能满足大部分用户的需求；<br></li>
    <li>原生支持<strong style="color:rgb(18, 150, 219)">组件化</strong>，可以<strong style="color:rgb(18, 150, 219)">任意定制</strong>自己的组件。默认自带了其它富文本较难实现的可编辑与不可编辑的功能；</li>
    <li>强大的<strong style="color:rgb(18, 150, 219)">表格支持</strong>，你可<strong style="color:rgb(18, 150, 219)">批量操作</strong>单元格，并随意增加、删除表格内容，也可以修改表格的样式风格；</li>
    <li><strong style="color:rgb(18, 150, 219)">实时代码高亮</strong>，其实不用 Markdown，一样可以写一份好的技术文档；</li>
    <li>图片、视频等，自由的<strong style="color:rgb(18, 150, 219)">拖动缩放</strong>，不用再去找插件了；</li>
    <li>丰富的组件库，伸手党也可以创造出不一样的文章。</li>
    </ul>
    <p>说了这么多，赶快运行起来，看一看效果：<br></p><pre lang="Typescript" theme="light"><code><span class="tb-hl-keyword">import</span>&nbsp;{ createEditor }&nbsp;<span class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@tanbo/textbus'</span>;<br><br><span class="tb-hl-keyword">const</span>&nbsp;editor =<span class="tb-hl-function">&nbsp;createEditor</span>(document.<span class="tb-hl-function">getElementById</span>(<span class="tb-hl-string">'editor'</span>));<br>editor.onChange.<span class="tb-hl-function">subscribe</span>(() =&gt; {<br>&nbsp;&nbsp;<span class="tb-hl-keyword">const</span>&nbsp;{contents, styleSheets} = editor.<span class="tb-hl-function">getContents</span>();<br>&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span class="tb-hl-function">log</span>(contents, styleSheets);<br>})<br></code></pre>
    <p><br></p>
    <p>你也许会好奇，TextBus 到底是如何做到这么多功能的，这其实依赖于 TextBus 底层的数据结构，我们来看一个表格，帮助你理解：</p>
    <p><br></p>
    <table class="tb-table">
    <tbody>
            <tr>
                    <td rowspan="3" style="background-color:#e9eaec;text-align:center"><strong style="color:rgb(28, 40, 56)">文字内容</strong><br></td>
    <td colspan="21"><u>你好，我是&nbsp;<em><strong>Tex</strong></em></u><em><strong>tBus</strong>&nbsp;<del>富文本编辑器</del></em><del>!</del><br></td>
    </tr>
    <tr>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236);font-size:14px">0</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236);font-size:14px">1</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236);font-size:14px">2</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236);font-size:14px">3</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236);font-size:14px">4</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236);font-size:14px">5</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236);font-size:14px">6</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236)">7</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236)">8</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236)">9</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236)">10</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236)">11</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236)">12</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236);font-size:14px">13</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236);font-size:14px">14</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236);font-size:14px">15</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236);font-size:14px">16</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236);font-size:14px">17</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236);font-size:14px">18</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236);font-size:14px">19</span><br></td>
    <td style="background-color:#495060;text-align:center;border-color:rgb(28, 40, 56)"><span style="color:rgb(233, 234, 236)">20</span><br></td>
    </tr>
    <tr>
    <td style="text-align:center">你<br></td>
            <td style="text-align:center">好<br></td>
            <td style="text-align:center">，<br></td>
    <td style="text-align:center">我<br></td>
            <td style="text-align:center">是<br></td>
            <td style="text-align:center"><br></td>
            <td style="text-align:center">T<br></td>
            <td style="text-align:center">e<br></td>
            <td style="text-align:center">x<br></td>
            <td style="text-align:center">t<br></td>
            <td style="text-align:center">B<br></td>
            <td style="text-align:center">u<br></td>
            <td style="text-align:center">s<br></td>
            <td style="text-align:center"><br></td>
            <td style="text-align:center">富<br></td>
            <td style="text-align:center">文<br></td>
            <td style="text-align:center">本<br></td>
            <td style="text-align:center">编<br></td>
            <td style="text-align:center">辑<br></td>
            <td style="text-align:center">器<br></td>
            <td style="text-align:center">!<br></td>
    </tr>
    <tr>
    <td style="background-color:#e9eaec;text-align:center"><strong style="color:rgb(28, 40, 56)">加粗</strong><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    </tr>
    <tr>
    <td style="background-color:#e9eaec;text-align:center"><strong style="color:rgb(28, 40, 56)">下划线</strong><br></td>
    <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    </tr>
    <tr>
    <td style="background-color:#e9eaec;text-align:center"><strong style="color:rgb(28, 40, 56)">斜体</strong><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
    <td><br></td>
    </tr>
    <tr>
    <td style="background-color:#e9eaec;text-align:center"><strong style="color:rgb(28, 40, 56)">中划线</strong><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td><br></td>
    <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            <td style="background-color:#bbbec4"><br></td>
            </tr>
            </tbody>
            </table>
            <p><br></p>
            <p>我们再来看看 TextBus 中一些核心的概念：<br></p>
    <tb-word-explain>
    <div class="tb-word-explain-title-group">
    <h3 style="text-align:right" class="tb-word-explain-title"><code>Component</code><br></h3>
    <div style="text-align:right" class="tb-word-explain-subtitle">组件<br></div>
            </div>
            <div class="tb-word-explain-detail">TextBus 的组件和传统 web 开发中的组件其实是差不多的，由一部分相对固定的模板和动态的插槽组成。<br></div>
    </tb-word-explain>
    <tb-word-explain>
    <div class="tb-word-explain-title-group">
    <h3 style="text-align:right" class="tb-word-explain-title"><code>ComponentReader</code><br></h3>
    <div style="text-align:right" class="tb-word-explain-subtitle">组件转换器<br></div>
            </div>
            <div class="tb-word-explain-detail">用于把 DOM 树转换为 TextBus 组件类的转换器。<br></div>
    </tb-word-explain>
    <tb-word-explain>
    <div class="tb-word-explain-title-group">
    <h3 style="text-align:right" class="tb-word-explain-title"><code>Fragment</code><br></h3>
    <div style="text-align:right" class="tb-word-explain-subtitle">可编辑片段</div>
            </div>
            <div class="tb-word-explain-detail">一段可编辑的内容，可以是字符串或组件。同时，Fragment 还保存对应内容的样式。<br></div>
    </tb-word-explain>
    <tb-word-explain>
    <div class="tb-word-explain-title-group">
    <h3 style="text-align:right" class="tb-word-explain-title"><code>FormatMap</code></h3>
    <div style="text-align:right" class="tb-word-explain-subtitle">格式地图<br></div>
            </div>
            <div class="tb-word-explain-detail">Fragment 对应的格式。<br></div>
    </tb-word-explain>
    <tb-word-explain>
    <div class="tb-word-explain-title-group">
    <h3 style="text-align:right" class="tb-word-explain-title"><code>Formatter</code><br></h3>
    <div style="text-align:right" class="tb-word-explain-subtitle">格式化类</div>
            </div>
            <div class="tb-word-explain-detail">在输入时，用于读取 HTML 的样式。在输出时，用于渲染 Fragment 的样式并生成虚拟 DOM。<br></div>
    </tb-word-explain>
    <p>我们操作 TextBus 设置格式，实际上是操作的这些数据。TextBus 会根据这些数据，自动生成最优化的 DOM。如果你还期待更多的功能，我们目前正在开发的有这些：</p>
    <blockquote>
    <tb-todo-list>
    <div class="tb-todo-list-item">
    <div class="tb-todo-list-btn"><span class="tb-todo-list-state tb-todo-list-state-active"></span></div>
    <div class="tb-todo-list-content">时间轴组件</div>
            </div>
            <div class="tb-todo-list-item">
    <div class="tb-todo-list-btn"><span class="tb-todo-list-state"></span></div>
    <div class="tb-todo-list-content">涂鸦板组件</div>
            </div>
            <div class="tb-todo-list-item">
    <div class="tb-todo-list-btn"><span class="tb-todo-list-state"></span></div>
    <div class="tb-todo-list-content">公式编辑器组件</div>
            </div>
            <div class="tb-todo-list-item">
    <div class="tb-todo-list-btn"><span class="tb-todo-list-state"></span></div>
    <div class="tb-todo-list-content">幻灯片组件<br></div>
            </div>
            </tb-todo-list>
            </blockquote>
            <p>你还可以加入我们的官方 QQ 群，和核心开发人员直接提出需求，我们会尽最大努力满足：</p>
    <p style="text-align:center"><img src="https://textbus.tanboui.com/static/img/qq-group.20ce5d73933bb31ff50cbf15cf9e7950.jpg" style="width:252px;height:auto"></p>
            <p>好了，简单的介绍就到这里为止吧，希望你使用愉快！</p>
    <p><br></p>
    <p style="text-align:right">——TextBus 开发团队</p>
    <p style="text-align:right">2020 年 7 月 19 日<br></p>`
export {defaultHtml}