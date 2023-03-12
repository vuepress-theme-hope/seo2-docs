import{a2 as r,Y as B,Z as d,a0 as s,a1 as n,_ as a,a4 as i,$ as o,a3 as t,D as l}from"./framework-18e271cf.js";const y={},F=s("code",null,"<head>",-1),g={href:"https://ogp.me/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.w3.org/TR/json-ld-api/",target:"_blank",rel:"noopener noreferrer"},u=t(`<h2 id="开箱即用" tabindex="-1"><a class="header-anchor" href="#开箱即用" aria-hidden="true">#</a> 开箱即用</h2><p>插件开箱即用，在不做任何配置的情况下，会尽可能通过页面内容，提取对应的信息补全 OGP 与 JSON-LD 所需的必要标签。</p><p>默认情况下，插件会读取站点配置、主题配置与页面的 frontmatter 来尽可能自动生成。诸如站点名称，页面标题，页面类型，写作日期，最后更新日期，文章标签均会自动生成。</p><h3 id="默认的-ogp-生成逻辑" tabindex="-1"><a class="header-anchor" href="#默认的-ogp-生成逻辑" aria-hidden="true">#</a> 默认的 OGP 生成逻辑</h3><table><thead><tr><th style="text-align:center;">属性名称</th><th style="text-align:center;">值</th></tr></thead><tbody><tr><td style="text-align:center;"><code>og:url</code></td><td style="text-align:center;"><code>options.hostname</code> + <code>path</code></td></tr><tr><td style="text-align:center;"><code>og:site_name</code></td><td style="text-align:center;"><code>siteConfig.title</code></td></tr><tr><td style="text-align:center;"><code>og:title</code></td><td style="text-align:center;"><code>page.title</code></td></tr><tr><td style="text-align:center;"><code>og:description</code></td><td style="text-align:center;"><code>page.frontmatter.description</code> || 自动生成 (当插件选项中的 <code>autoDescription</code> 为 <code>true</code> 时)</td></tr><tr><td style="text-align:center;"><code>og:type</code></td><td style="text-align:center;"><code>&quot;article&quot;</code></td></tr><tr><td style="text-align:center;"><code>og:image</code></td><td style="text-align:center;"><code>options.hostname</code> + <code>page.frontmatter.image</code> || 页面的第一张图片|| 插件选项的 <code>fallbackImage</code></td></tr><tr><td style="text-align:center;"><code>og:updated_time</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr><tr><td style="text-align:center;"><code>og:locale</code></td><td style="text-align:center;"><code>page.lang</code></td></tr><tr><td style="text-align:center;"><code>og:locale:alternate</code></td><td style="text-align:center;"><code>siteData.locales</code> 包含的其他语言</td></tr><tr><td style="text-align:center;"><code>twitter:card</code></td><td style="text-align:center;"><code>&quot;summary_large_image&quot;</code> (仅在找到图片时)</td></tr><tr><td style="text-align:center;"><code>twitter:image:alt</code></td><td style="text-align:center;"><code>page.title</code> (仅在找到图片时)</td></tr><tr><td style="text-align:center;"><code>article:author</code></td><td style="text-align:center;"><code>page.frontmatter.author</code> || <code>options.author</code></td></tr><tr><td style="text-align:center;"><code>article:tag</code></td><td style="text-align:center;"><code>page.frontmatter.tags</code> || <code>page.frontmatter.tag</code></td></tr><tr><td style="text-align:center;"><code>article:published_time</code></td><td style="text-align:center;"><code>page.frontmatter.date</code> || <code>page.git.createdTime</code></td></tr><tr><td style="text-align:center;"><code>article:modified_time</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr></tbody></table><h3 id="默认的-json-ld-生成逻辑" tabindex="-1"><a class="header-anchor" href="#默认的-json-ld-生成逻辑" aria-hidden="true">#</a> 默认的 JSON-LD 生成逻辑</h3><table><thead><tr><th style="text-align:center;">属性名</th><th style="text-align:center;">值</th></tr></thead><tbody><tr><td style="text-align:center;"><code>@context</code></td><td style="text-align:center;"><code>&quot;https://schema.org&quot;</code></td></tr><tr><td style="text-align:center;"><code>@type</code></td><td style="text-align:center;"><code>&quot;NewsArticle&quot;</code></td></tr><tr><td style="text-align:center;"><code>headline</code></td><td style="text-align:center;"><code>page.title</code></td></tr><tr><td style="text-align:center;"><code>image</code></td><td style="text-align:center;">页面中的图片|| <code>options.hostname</code> + <code>page.frontmatter.image</code></td></tr><tr><td style="text-align:center;"><code>datePublished</code></td><td style="text-align:center;"><code>page.frontmatter.date</code> || <code>page.git.createdTime</code></td></tr><tr><td style="text-align:center;"><code>dateModified</code></td><td style="text-align:center;"><code>page.git.updatedTime</code></td></tr><tr><td style="text-align:center;"><code>author</code></td><td style="text-align:center;"><code>page.frontmatter.author</code> || <code>options.author</code></td></tr></tbody></table><h2 id="直接添加-head-标签" tabindex="-1"><a class="header-anchor" href="#直接添加-head-标签" aria-hidden="true">#</a> 直接添加 head 标签</h2><p>你可以在页面的 frontmatter 中配置 <code>head</code> 选项，自主添加特定标签到页面 <code>&lt;head&gt;</code> 以增强 SEO。</p><p>如:</p><div class="language-markdown" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"><span style="color:#E06C75;">head</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  - - </span><span style="color:#98C379;">meta</span></span>
<span class="line"><span style="color:#ABB2BF;">    - </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">keywords</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">content</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">SEO plugin</span></span>
<span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"></span></code></pre></div><p>会自动注入 <code>&lt;meta name=&quot;keywords&quot; content=&quot;SEO plugin&quot; /&gt;</code>。</p><h2 id="自定义生成过程" tabindex="-1"><a class="header-anchor" href="#自定义生成过程" aria-hidden="true">#</a> 自定义生成过程</h2><p>本插件也支持你完全控制生成逻辑。</p><h3 id="页面类型" tabindex="-1"><a class="header-anchor" href="#页面类型" aria-hidden="true">#</a> 页面类型</h3><p>对于大多数页面，基本只有文章和网页两种类型，所以插件提供了 <code>isArticle</code> 选项让你提供辨别文章的逻辑。</p><p>选项接受一个 <code>(page: Page) =&gt; boolean</code> 格式的函数，默认情况下从 Markdown 文件生成的非主页页面都会被视为文章。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>如果某个网页的确符合图书、音乐之类的“冷门”类型，你可以通过设置下方三个选项处理它们。</p></div><h3 id="ogp" tabindex="-1"><a class="header-anchor" href="#ogp" aria-hidden="true">#</a> OGP</h3><p>你可以使用插件选项的 <code>ogp</code> 传入一个函数来按照你的需要修改默认 OGP 对象并返回。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">ogp</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ExtraPageData</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">extends</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">symbol</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ExtraPageFrontmatter</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">extends</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">symbol</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">unknown</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt; </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ExtraPageFields</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">extends</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">symbol</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&gt;(</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** 插件自动推断的 OGP 对象 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">ogp</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">SeoContent</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** 页面对象 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">page</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">ExtendPage</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">ExtraPageData</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">ExtraPageFrontmatter</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">ExtraPageFields</span><span style="color:#ABB2BF;">&gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** VuePress App */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">app</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">App</span></span>
<span class="line"><span style="color:#ABB2BF;">): </span><span style="color:#E5C07B;">SeoContent</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),h=t(`<p>比如你在使用某个第三方主题，并按照主题要求为每篇文章在 Front Matter 中设置了 <code>banner</code>，那你可以传入这样的 <code>ogp</code>:</p><div class="language-typescript" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">ogp</span><span style="color:#ABB2BF;">: (</span><span style="color:#E06C75;font-style:italic;">ogp</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">page</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> ({</span></span>
<span class="line"><span style="color:#ABB2BF;">    ...</span><span style="color:#E06C75;">ogp</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&quot;og:image&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">page</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">frontmatter</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">banner</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">ogp</span><span style="color:#ABB2BF;">[</span><span style="color:#98C379;">&quot;og:image&quot;</span><span style="color:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#ABB2BF;">  }),</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span></code></pre></div><h3 id="json-ld" tabindex="-1"><a class="header-anchor" href="#json-ld" aria-hidden="true">#</a> JSON-LD</h3><p>同 OGP，你可以使用插件选项的 <code>jsonLd</code> 传入一个函数来按照你的需要修改默认 JSON-LD 对象并返回。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">jsonLd</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ExtraPageData</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">extends</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">symbol</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ExtraPageFrontmatter</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">extends</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">symbol</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">unknown</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt; </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ExtraPageFields</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">extends</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">symbol</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&gt;(</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** 插件自动推断的 JSON-LD 对象 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">jsonLD</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">ArticleJSONLD</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">null</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** 页面对象 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">page</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">ExtendPage</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">ExtraPageData</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">ExtraPageFrontmatter</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">ExtraPageFields</span><span style="color:#ABB2BF;">&gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** VuePress App */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">app</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">App</span></span>
<span class="line"><span style="color:#ABB2BF;">): </span><span style="color:#E5C07B;">ArticleJSONLD</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">null</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请注意插件不会对非文章页生成 JSON-LD，所以函数的首个参数可能为 <code>null</code>。</p></div><h2 id="规范链接" tabindex="-1"><a class="header-anchor" href="#规范链接" aria-hidden="true">#</a> 规范链接</h2><p>如果你将内容部署到不同的站点，或不同 URL 下的相同内容，你可能需要设置 <code>canonical</code> 选项为你的页面提供 “规范链接”。 你可以设置一个字符串，这样它会附加在页面路由链接之前，或者添加一个自定义函数 <code>(page: Page) =&gt; string | 如有必要，null</code> 返回规范链接。</p><div class="hint-container tip"><p class="hint-container-title">例子</p><p>如果你的站点部署在 <code>example.com</code> 的 docs 文件夹下，但同时在下列网址中可用:</p><ul><li><code>http://example.com/docs/xxx</code></li><li><code>https://example.com/docs/xxx</code></li><li><code>http://www.example.com/docs/xxx</code></li><li><code>https://www.example.com/docs/xxx</code> (首选)</li></ul><p>要让搜索引擎结果始终是首选，你可能需要将 <code>canonical</code> 设置为 <code>https://www.example.com/docs/</code>，以便搜索引擎知道首选第四个 URL 作为索引结果。</p></div><h3 id="自定义-head-标签" tabindex="-1"><a class="header-anchor" href="#自定义-head-标签" aria-hidden="true">#</a> 自定义 head 标签</h3><p>有些时候你可能需要符合其他协议或按照其他搜索引擎提供的格式提供对应的 SEO 标签，此时你可以使用 <code>customHead</code> 选项，其类型为:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">customHead</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ExtraPageData</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">extends</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">symbol</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ExtraPageFrontmatter</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">extends</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">symbol</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">unknown</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt; </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">ExtraPageFields</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">extends</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">string</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;"> | </span><span style="color:#E5C07B;">symbol</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">unknown</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Record</span><span style="color:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">never</span></span>
<span class="line"><span style="color:#ABB2BF;">  &gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&gt;(</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">head</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">HeadConfig</span><span style="color:#ABB2BF;">[],</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** 页面对象 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">page</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Page</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">ExtraPageData</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">ExtraPageFrontmatter</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">ExtraPageFields</span><span style="color:#ABB2BF;">&gt;,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** VuePress App */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;font-style:italic;">app</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">App</span></span>
<span class="line"><span style="color:#ABB2BF;">): </span><span style="color:#E5C07B;">void</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你应该直接修改传入的 <code>head</code> 参数。</p><h2 id="seo-介绍" tabindex="-1"><a class="header-anchor" href="#seo-介绍" aria-hidden="true">#</a> SEO 介绍</h2><p>搜索引擎优化 (<strong>S</strong>earch <strong>E</strong>ngine <strong>O</strong>ptimization)，是一种透过了解搜索引擎的运作规则来调整网站，以及提高目的网站在有关搜索引擎内排名的方式。由于不少研究发现，搜索引擎的用户往往只会留意搜索结果最前面的几个条目，所以不少网站都希望透过各种形式来影响搜索引擎的排序，让自己的网站可以有优秀的搜索排名。 所谓“针对搜索引擎作最优化的处理”，是指为了要让网站更容易被搜索引擎接受。搜索引擎会将网站彼此间的内容做一些相关性的资料比对，然后再由浏览器将这些内容以最快速且接近最完整的方式，呈现给搜索者。搜索引擎优化就是通过搜索引擎的规则进行优化，为用户打造更好的用户体验，最终的目的就是做好用户体验。</p><h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>`,16),m={href:"https://ogp.me/",target:"_blank",rel:"noopener noreferrer"},E=s("strong",null,"O",-1),v=s("strong",null,"G",-1),C=s("strong",null,"Pr",-1),b=s("p",null,[n("本插件完美支持该协议，会自动生成符合该协议的 "),s("code",null,"<meta>"),n(" 标签。")],-1),x={href:"https://www.w3.org/TR/json-ld-api/",target:"_blank",rel:"noopener noreferrer"},f=s("p",null,"本插件会为文章类页面生成 NewsArticle 类标签。",-1),_={href:"https://www.w3.org/TR/rdfa-primer/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://schema.org/",target:"_blank",rel:"noopener noreferrer"},k=s("p",null,"结构标记的 Schema 定义站点",-1),w=s("h2",{id:"相关工具",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#相关工具","aria-hidden":"true"},"#"),n(" 相关工具")],-1),P={href:"https://search.google.com/test/rich-results",target:"_blank",rel:"noopener noreferrer"};function R(O,L){const e=l("ExternalLinkIcon"),p=l("RouterLink"),c=l("ProjectLink");return B(),d("div",null,[s("p",null,[n("本插件会通过向网站 "),F,n(" 注入标签，让你的网站完全支持 "),s("a",g,[n("开放内容协议 OGP"),a(e)]),n(" 和 "),s("a",A,[n("JSON-LD 1.1"),a(e)]),n("，以全面增强站点的搜索引擎优化性。")]),i(" more "),u,s("p",null,[n("详细的参数结构详见 "),a(p,{to:"/zh/config.html"},{default:o(()=>[n("配置")]),_:1}),n("。")]),h,s("ul",null,[s("li",null,[s("p",null,[s("a",m,[n("开放内容协议 OGP"),a(e)]),n(" ("),E,n("pen "),v,n("raph "),C,n("otocal)")]),b]),s("li",null,[s("p",null,[s("a",x,[n("JSON-LD 1.1"),a(e)])]),f]),s("li",null,[s("p",null,[s("a",_,[n("RDFa 1.1"),a(e)])]),s("p",null,[n("RDFa 主要标记 HTML 结构。这是插件无法支持的内容，"),a(c,{type:"theme",name:"hope",path:"/zh/"},{default:o(()=>[n("vuepress-theme-hope")]),_:1}),n(" 使用了这一功能通过了谷歌的富媒体结构测试。你可以考虑搭配使用。")])]),s("li",null,[s("p",null,[s("a",D,[n("Schema.Org"),a(e)])]),k])]),w,s("p",null,[n("你可以使用 "),s("a",P,[n("Google 富媒体结构测试工具"),a(e)]),n(" 测试本站点。")])])}const N=r(y,[["render",R],["__file","guide.html.vue"]]);export{N as default};
