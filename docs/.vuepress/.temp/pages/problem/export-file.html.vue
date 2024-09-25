<template><div><h1 id="js-导出文件" tabindex="-1"><a class="header-anchor" href="#js-导出文件"><span>js 导出文件</span></a></h1>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">exportData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dada</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 要保存的字符串</span></span>
<span class="line">  <span class="token keyword">const</span> stringData <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>dada<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// dada 表示要转换的字符串数据，type 表示要转换的数据格式</span></span>
<span class="line">  <span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>stringData<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'application/json;charset=utf-8'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 根据 blob生成 url链接</span></span>
<span class="line">  <span class="token keyword">const</span> objectURL <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 创建一个 a 标签Tag</span></span>
<span class="line">  <span class="token keyword">const</span> aTag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 设置文件的下载地址</span></span>
<span class="line">  aTag<span class="token punctuation">.</span>href <span class="token operator">=</span> objectURL<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 设置保存后的文件名称</span></span>
<span class="line">  aTag<span class="token punctuation">.</span>download <span class="token operator">=</span> <span class="token string">'xxx.json'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 给 a 标签添加点击事件</span></span>
<span class="line">  aTag<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 释放一个之前已经存在的、通过调用 URL.createObjectURL() 创建的 URL 对象。</span></span>
<span class="line">  <span class="token comment">// 当你结束使用某个 URL 对象之后，应该通过调用这个方法来让浏览器知道不用在内存中继续保留对这个文件的引用了。</span></span>
<span class="line">  <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>objectURL<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="每行代码的含义" tabindex="-1"><a class="header-anchor" href="#每行代码的含义"><span>每行代码的含义</span></a></h2>
<p><strong>1.转换数据为 JSON：</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> stringData <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>JSON.stringify() </code>方法用来将 JavaScript 对象转换成 JSON 字符串。</li>
<li>第二个参数 <code v-pre>null</code> 表示不需要替换函数。</li>
<li>第三个参数 <code v-pre>2</code> 表示缩进两个空格，使输出的 JSON 字符串具有可读性。</li>
</ul>
<p><strong>2.创建 Blob 对象：</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>stringData<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'application/json;charset=utf-8'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>Blob</code> 对象表示一个不可变的、用户级的大量数据块。</li>
<li><code v-pre>new Blob()</code> 构造函数的第一个参数是一个数组，包含要包含在 Blob 中的数据。</li>
<li><code v-pre>type</code> 属性定义了 Blob 的 MIME 类型，这里设置为 <code v-pre>application/json;charset=utf-8</code>，表示这是一个 UTF-8 编码的 JSON 文件。</li>
</ul>
<p><strong>3.创建指向 Blob 的 URL：</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> objectURL <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>URL.createObjectURL()</code> 方法用于创建一个指向 Blob 的 URL。</li>
</ul>
<p><strong>4.创建一个 <code v-pre>&lt;a&gt;</code> 标签：</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> aTag <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>5.给 <code v-pre>&lt;a&gt;</code> 标签添加 <code v-pre>href</code> 属性：</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">aTag<span class="token punctuation">.</span>href <span class="token operator">=</span> objectURL<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>将 Blob 的 URL 设置为 <code v-pre>&lt;a&gt;</code> 标签的 <code v-pre>href</code> 属性</li>
</ul>
<p><strong>6.设置 <code v-pre>&lt;a&gt;</code> 标签的 <code v-pre>download</code> 属性：</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">aTag<span class="token punctuation">.</span>download <span class="token operator">=</span> <span class="token string">'xxx.json'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>download</code> 属性用于指定下载的文件名。</li>
</ul>
<p><strong>7.触发点击事件来下载文件：</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">aTag<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>触发点击事件来下载文件</li>
</ul>
<p><strong>8.释放 Blob 的 URL 占用的内存资源：</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>objectURL<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>URL.revokeObjectURL()</code> 方法释放先前通过 <code v-pre>createObjectURL()</code> 创建的 URL，以便浏览器可以回收 Blob 占用的内存。</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>这段代码的主要功能是将 JavaScript 对象转换为 JSON 字符串，然后创建一个 Blob 对象，并通过创建一个隐藏的 <code v-pre>&lt;a&gt;</code> 标签并模拟点击事件来触发文件下载。这种方法适用于现代浏览器，是一种常见的文件导出技术。</p>
</div></template>


