<template><div><h1 id="markdown-测试" tabindex="-1"><a class="header-anchor" href="#markdown-测试"><span>Markdown 测试</span></a></h1>
<blockquote>
<p>微信公众号排版工具。问题或建议，请公众号留言。<strong><a href="#jump_8">程序员翻身</a></strong></p>
</blockquote>
<p>建议使用 <strong>Chrome</strong> 浏览器，体验最佳效果。</p>
<p>使用微信公众号编辑器有一个十分头疼的问题：粘贴出来的代码，格式错乱，空间小还带行号，而且特别丑。Markdown.com.cn 编辑器能够解决这个问题。</p>
<p>Markdown 是一种轻量级的「标记语言」。</p>
<p>请阅读下方文本熟悉工具使用方法，本文可直接拷贝到微信中预览。</p>
<h2 id="_1-markdown-com-cn-简介" tabindex="-1"><a class="header-anchor" href="#_1-markdown-com-cn-简介"><span>1 Markdown.com.cn 简介</span></a></h2>
<ul>
<li>支持自定义样式的 Markdown 编辑器</li>
<li>支持微信公众号、知乎和稀土掘金</li>
<li>点击右上方对应图标，一键复制到各平台</li>
</ul>
<h2 id="_2-markdown-语法教程" tabindex="-1"><a class="header-anchor" href="#_2-markdown-语法教程"><span>2 Markdown 语法教程</span></a></h2>
<h3 id="_2-1-标题" tabindex="-1"><a class="header-anchor" href="#_2-1-标题"><span>2.1 标题</span></a></h3>
<p>不同数量的<code v-pre>#</code>可以完成不同的标题，如下：</p>
<h1 id="一级标题" tabindex="-1"><a class="header-anchor" href="#一级标题"><span>一级标题</span></a></h1>
<h2 id="二级标题" tabindex="-1"><a class="header-anchor" href="#二级标题"><span>二级标题</span></a></h2>
<h3 id="三级标题" tabindex="-1"><a class="header-anchor" href="#三级标题"><span>三级标题</span></a></h3>
<h3 id="_2-2-字体" tabindex="-1"><a class="header-anchor" href="#_2-2-字体"><span>2.2 字体</span></a></h3>
<p>粗体、斜体、粗体和斜体，删除线，需要在文字前后加不同的标记符号。如下：</p>
<p><strong>这个是粗体</strong></p>
<p><em>这个是斜体</em></p>
<p><strong><em>这个是粗体加斜体</em></strong></p>
<p>~这里想用删除线~~</p>
<p>注：如果想给字体换颜色、字体或者居中显示，需要使用内嵌 HTML 来实现。</p>
<h3 id="_2-3-无序列表" tabindex="-1"><a class="header-anchor" href="#_2-3-无序列表"><span>2.3 无序列表</span></a></h3>
<p>无序列表的使用，在符号<code v-pre>-</code>后加空格使用。如下：</p>
<ul>
<li>无序列表 1</li>
<li>无序列表 2</li>
<li>无序列表 3</li>
</ul>
<p>如果要控制列表的层级，则需要在符号<code v-pre>-</code>前使用空格。如下：</p>
<ul>
<li>无序列表 1</li>
<li>无序列表 2
<ul>
<li>无序列表 2.1</li>
<li>无序列表 2.2</li>
</ul>
</li>
</ul>
<p><strong>由于微信原因，最多支持到二级列表</strong>。</p>
<h3 id="_2-4-有序列表" tabindex="-1"><a class="header-anchor" href="#_2-4-有序列表"><span>2.4 有序列表</span></a></h3>
<p>有序列表的使用，在数字及符号<code v-pre>.</code>后加空格后输入内容，如下：</p>
<ol>
<li>有序列表 1</li>
<li>有序列表 2</li>
<li>有序列表 3</li>
</ol>
<h3 id="_2-5-引用" tabindex="-1"><a class="header-anchor" href="#_2-5-引用"><span>2.5 引用</span></a></h3>
<p>引用的格式是在符号<code v-pre>&gt;</code>后面书写文字。如下：</p>
<blockquote>
<p>读一本好书，就是在和高尚的人谈话。 ——歌德</p>
</blockquote>
<blockquote>
<p>雇用制度对工人不利，但工人根本无力摆脱这个制度。 ——阮一峰</p>
</blockquote>
<h3 id="_2-7-链接" tabindex="-1"><a class="header-anchor" href="#_2-7-链接"><span>2.7 链接</span></a></h3>
<p>微信公众号仅支持公众号文章链接，即域名为<code v-pre>https://mp.weixin.qq.com/</code>的合法链接。使用方法如下所示：</p>
<p>对于该论述，欢迎读者查阅之前发过的文章，<a href="https://mp.weixin.qq.com/s/s5IhxV2ooX3JN_X416nidA" target="_blank" rel="noopener noreferrer">你是《未来世界的幸存者》么？</a>
<a id="jump_8"></a></p>
<h3 id="_2-8-图片" tabindex="-1"><a class="header-anchor" href="#_2-8-图片"><span>2.8 图片</span></a></h3>
<p>插入图片，格式如下：</p>
<p><img src="https://www.nginx.cn/wp-content/uploads/2020/03/qrcode_for_gh_82cf87d482f0_258.jpg" alt="这里写图片描述"></p>
<p>支持 jpg、png、gif、svg 等图片格式，<strong>其中 svg 文件仅可在微信公众平台中使用</strong>，svg 文件示例如下：</p>
<p><img src="https://markdown.com.cn/images/i-am-svg.svg" alt=""></p>
<p>支持图片<strong>拖拽和截图粘贴</strong>到编辑器中。</p>
<p>注：支持图片 <strong><em>拖拽和截图粘贴</em></strong> 到编辑器中，仅支持 https 的图片，图片粘贴到微信时会自动上传微信服务器。</p>
<h3 id="_2-9-分割线" tabindex="-1"><a class="header-anchor" href="#_2-9-分割线"><span>2.9 分割线</span></a></h3>
<p>可以在一行中用三个以上的减号来建立一个分隔线，同时需要在分隔线的上面空一行。如下：</p>
<hr>
<h3 id="_2-10-表格" tabindex="-1"><a class="header-anchor" href="#_2-10-表格"><span>2.10 表格</span></a></h3>
<p>可以使用冒号来定义表格的对齐方式，如下：</p>
<table>
<thead>
<tr>
<th style="text-align:left">姓名</th>
<th style="text-align:center">年龄</th>
<th style="text-align:right">工作</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">小可爱</td>
<td style="text-align:center">18</td>
<td style="text-align:right">吃可爱多</td>
</tr>
<tr>
<td style="text-align:left">小小勇敢</td>
<td style="text-align:center">20</td>
<td style="text-align:right">爬棵勇敢树</td>
</tr>
<tr>
<td style="text-align:left">小小小机智</td>
<td style="text-align:center">22</td>
<td style="text-align:right">看一本机智书</td>
</tr>
</tbody>
</table>
<h2 id="_3-特殊语法" tabindex="-1"><a class="header-anchor" href="#_3-特殊语法"><span>3. 特殊语法</span></a></h2>
<h3 id="_3-1-脚注" tabindex="-1"><a class="header-anchor" href="#_3-1-脚注"><span>3.1 脚注</span></a></h3>
<blockquote>
<p>支持平台：微信公众号、知乎。</p>
</blockquote>
<p>脚注与链接的区别如下所示：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre><code><span class="line">链接：<span class="token url">[<span class="token content">文字</span>](<span class="token url">链接</span>)</span></span>
<span class="line">脚注：[文字](脚注解释 '脚注名字')</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>有人认为在<a href="https://en.wikipedia.org/wiki/Front-end_web_development" title="Front-end web development" target="_blank" rel="noopener noreferrer">大前端时代</a>的背景下，移动端开发（Android、IOS）将逐步退出历史舞台。</p>
<p><a href="%E6%98%AF%E6%8C%87%E6%8E%8C%E6%8F%A1%E5%A4%9A%E7%A7%8D%E6%8A%80%E8%83%BD%EF%BC%8C%E5%B9%B6%E8%83%BD%E5%88%A9%E7%94%A8%E5%A4%9A%E7%A7%8D%E6%8A%80%E8%83%BD%E7%8B%AC%E7%AB%8B%E5%AE%8C%E6%88%90%E4%BA%A7%E5%93%81%E7%9A%84%E4%BA%BA%E3%80%82" title="什么是全栈工程师">全栈工程师</a>在业务开发流程中起到了至关重要的作用。</p>
<p>脚注内容请拉到最下面观看。</p>
<h3 id="_3-2-代码块" tabindex="-1"><a class="header-anchor" href="#_3-2-代码块"><span>3.2 代码块</span></a></h3>
<blockquote>
<p>支持平台：微信代码主题仅支持微信公众号！其他主题无限制。</p>
</blockquote>
<p>如果在一个行内需要引用代码，只要用反引号引起来就好，如下：</p>
<p>Use the <code v-pre>printf()</code> function.</p>
<p>在需要高亮的代码块的前一行及后一行使用三个反引号，同时<strong>第一行反引号后面表示代码块所使用的语言</strong>，如下：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token comment">// FileName: HelloWorld.java</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Java 入口程序，程序从此入口</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello,World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 向控制台打印一条语句</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>支持以下语言种类：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">bash</span>
<span class="line">clojure，cpp，cs，css</span>
<span class="line">dart，dockerfile, diff</span>
<span class="line">erlang</span>
<span class="line">go，gradle，groovy</span>
<span class="line">haskell</span>
<span class="line">java，javascript，json，julia</span>
<span class="line">kotlin</span>
<span class="line">lisp，lua</span>
<span class="line">makefile，markdown，matlab</span>
<span class="line">objectivec</span>
<span class="line">perl，php，python</span>
<span class="line">r，ruby，rust</span>
<span class="line">scala，shell，sql，swift</span>
<span class="line">tex，typescript</span>
<span class="line">verilog，vhdl</span>
<span class="line">xml</span>
<span class="line">yaml</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要更换代码高亮样式，可在上方<strong>代码主题</strong>中挑选。</p>
<p>其中<strong>微信代码主题与微信官方一致</strong>，有以下注意事项：</p>
<ul>
<li>带行号且不换行，代码大小与官方一致</li>
<li>需要在代码块处标志语言，否则无法高亮</li>
<li>粘贴到公众号后，用鼠标点代码块内外一次，完成高亮</li>
</ul>
<p>diff 不能同时和其他语言的高亮同时显示，且需要调整代码主题为微信代码主题以外的代码主题才能看到 diff 效果，使用效果如下:</p>
<div class="language-diff line-numbers-mode" data-highlighter="prismjs" data-ext="diff" data-title="diff"><pre v-pre><code><span class="line"><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> 新增项</span>
<span class="line"></span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> 删除项</span>
<span class="line"></span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>其他主题不带行号，可自定义是否换行，代码大小与当前编辑器一致</strong></p>
<h3 id="_3-3-数学公式" tabindex="-1"><a class="header-anchor" href="#_3-3-数学公式"><span>3.3 数学公式</span></a></h3>
<blockquote>
<p>支持平台：微信公众号、知乎。</p>
</blockquote>
<p>行内公式使用方法，比如这个化学公式：$\ce{Hg^2+ -&gt;[I-] HgI2 -&gt;[I-] [Hg^{II}I4]^2-}$</p>
<p>块公式使用方法如下：</p>
<p>$$H(D_2) = -\left(\frac{2}{4}\log_2 \frac{2}{4} + \frac{2}{4}\log_2 \frac{2}{4}\right) = 1$$</p>
<p>矩阵：</p>
<p>$$
\begin{pmatrix}
1 &amp; a_1 &amp; a_1^2 &amp; \cdots &amp; a_1^n \
1 &amp; a_2 &amp; a_2^2 &amp; \cdots &amp; a_2^n \
\vdots &amp; \vdots &amp; \vdots &amp; \ddots &amp; \vdots \
1 &amp; a_m &amp; a_m^2 &amp; \cdots &amp; a_m^n \
\end{pmatrix}
$$</p>
<p>公式由于微信不支持，目前的解决方案是转成 svg 放到微信中，无需调整，矢量不失真。</p>
<p>目前测试如果公式量过大，在 Chrome 下会存在粘贴后无响应，但是在 Firefox 中始终能够成功。</p>
<h3 id="_3-4-toc" tabindex="-1"><a class="header-anchor" href="#_3-4-toc"><span>3.4 TOC</span></a></h3>
<blockquote>
<p>支持平台：微信公众号、知乎。</p>
</blockquote>
<p>TOC 全称为 Table of Content，列出全部标题。</p>
<p>[TOC]</p>
<p>由于微信只支持到二级列表，本工具仅支持二级标题和三级标题的显示。</p>
<h3 id="_3-5-注音符号" tabindex="-1"><a class="header-anchor" href="#_3-5-注音符号"><span>3.5 注音符号</span></a></h3>
<blockquote>
<p>支持平台：微信公众号。</p>
</blockquote>
<p>支持注音符号，用法如下：</p>
<p>Markdown Nice 这么好用，简直是{喜大普奔|hē hē hē hē}呀！</p>
<h3 id="_3-6-横屏滑动幻灯片" tabindex="-1"><a class="header-anchor" href="#_3-6-横屏滑动幻灯片"><span>3.6 横屏滑动幻灯片</span></a></h3>
<blockquote>
<p>支持平台：微信公众号。</p>
</blockquote>
<p>通过<code v-pre>&lt;![](url),![](url)&gt;</code>这种语法设置横屏滑动滑动片，具体用法如下：</p>
<p>&lt;<img src="https://markdown.com.cn/images/blue.jpg" alt="蓝1">,<img src="https://markdown.com.cn/images/green.jpg" alt="绿2">,<img src="https://markdown.com.cn.jpg" alt="红3">&gt;</p>
<h2 id="_4-其他语法" tabindex="-1"><a class="header-anchor" href="#_4-其他语法"><span>4 其他语法</span></a></h2>
<h3 id="_4-1-html" tabindex="-1"><a class="header-anchor" href="#_4-1-html"><span>4.1 HTML</span></a></h3>
<p>支持原生 HTML 语法，请写内联样式，如下：</p>
<p><span style="display:block;text-align:right;color:orangered;">橙色居右</span>
<span style="display:block;text-align:center;color:orangered;">橙色居中</span></p>
<h3 id="_4-2-uml" tabindex="-1"><a class="header-anchor" href="#_4-2-uml"><span>4.2 UML</span></a></h3>
<p>不支持，推荐使用开源工具<code v-pre>https://draw.io/</code>制作后再导入图片</p>
<h2 id="_5-致谢" tabindex="-1"><a class="header-anchor" href="#_5-致谢"><span>5 致谢</span></a></h2>
<ul>
<li>歌词经理 <a href="https://github.com/lyricat/wechat-format" title="灵感来源" target="_blank" rel="noopener noreferrer">wechat-fromat</a></li>
<li>颜家大少 <a href="http://md.aclickall.com/" title="MdA2All" target="_blank" rel="noopener noreferrer">MD2All</a></li>
</ul>
</div></template>


