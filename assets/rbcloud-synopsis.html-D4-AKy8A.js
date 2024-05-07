import{_ as e,r as s,o,c as l,e as a,w as i,b as n,a as c}from"./app-CZsOxETj.js";const u={},r=n("h1",{id:"rbcloud-synopsis",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rbcloud-synopsis"},[n("span",null,"<rbcloud-synopsis>")])],-1),d=n("p",null,"An abstract Carousel Product Image component.",-1),k=n("h2",{id:"example-usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#example-usage"},[n("span",null,"Example Usage")])],-1),v=c(`<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>synopsis-Synopsis</span>
      <span class="token attr-name">:is-synopsis-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data.show<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:episode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data.episode<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:video-obj</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data.video<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--    &lt;label&gt;Display Text&lt;input--&gt;</span>
    <span class="token comment">&lt;!--      v-model=&quot;data.text&quot;--&gt;</span>
    <span class="token comment">&lt;!--      type=&quot;text&quot;--&gt;</span>
    <span class="token comment">&lt;!--    &gt;&lt;/label&gt;--&gt;</span>

    <span class="token comment">&lt;!--    &lt;label&gt;Display Text&lt;input--&gt;</span>
    <span class="token comment">&lt;!--      v-model.number=&quot;data.width&quot;--&gt;</span>
    <span class="token comment">&lt;!--      type=&quot;range&quot;--&gt;</span>
    <span class="token comment">&lt;!--      min=&quot;100&quot;--&gt;</span>
    <span class="token comment">&lt;!--      max=&quot;1000&quot;--&gt;</span>
    <span class="token comment">&lt;!--    &gt; {{ data.width }} px&lt;/label&gt;--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">import</span> <span class="token constant">VIDEO_URL</span> <span class="token keyword">from</span> <span class="token string">&#39;@/assets/dummy/ch_drama.mp4&#39;</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">episode</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;최강야구&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title_img_path</span><span class="token operator">:</span> <span class="token string">&#39;https://stimage.hanafostv.com:8443/thumbnails/iip/720_480_10/enter/76/MM1000561876/MM1000561876_COTL_20220603162638565_01.png&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sris_poster_filename_h</span><span class="token operator">:</span> <span class="token string">&#39;https://stimage.hanafostv.com:8443/thumbnails/iip/720_480_10//enter/76/MM1000561876/MM1000561876_TVPW_20240411161643028_03.jpg&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">epsd_snss_cts</span><span class="token operator">:</span> <span class="token string">&#39;Win or Nothing. 오직 승리만을 추구하는 사상 최강의 야구팀이 탄생했다. \\r\\n“우리보다 최강인 팀은 절대 없을 겁니다” \\r\\n프로야구팀에 대적할만한 11번째 구단 ‘최강 몬스터즈’와 전국의 야구 강팀이 펼치는 양보 없는 대결! \\r\\n야구에 미친 자들의 모든 걸 건 진짜 승부가 시작된다.&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">actor</span><span class="token operator">:</span> <span class="token string">&#39;김성근, 이광길, 박용택, 정성훈, 이택근 외&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">videoObj</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;loaded&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;url&#39;</span><span class="token operator">:</span> <span class="token constant">VIDEO_URL</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">video</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;loaded&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;url&#39;</span><span class="token operator">:</span> <span class="token constant">VIDEO_URL</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span>
  <span class="token attr-name">scoped</span>
  <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>

  <span class="token property">height</span><span class="token punctuation">:</span> 720px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1080px<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>

  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>

  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>

  <span class="token selector">.synop-background</span> <span class="token punctuation">{</span>

    <span class="token property">height</span><span class="token punctuation">:</span> 720px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1080px<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>

    //<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    //<span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    //<span class="token property">width</span><span class="token punctuation">:</span> 1920px<span class="token punctuation">;</span>
    //<span class="token property">height</span><span class="token punctuation">:</span> 1080px<span class="token punctuation">;</span>
    <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">label</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 1ex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">p:first-line, :not(p) &gt; label:first-line</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><ul><li><code>isSynopsisShow</code> : boolean<br> Synopsis 노출 여부<br> Defaults to false</li><li><code>episode</code> : object<br> Synopsis 상세 정보</li><li><code>videoObj</code> : object<br> Video 상세 정보<br> Defaults to null</li></ul>`,3);function m(b,g){const t=s("synopsis-rbcloud-synopsis-example"),p=s("ClientOnly");return o(),l("div",null,[r,d,k,a(p,null,{default:i(()=>[a(t)]),_:1}),v])}const h=e(u,[["render",m],["__file","rbcloud-synopsis.html.vue"]]),_=JSON.parse('{"path":"/components/synopsis/rbcloud-synopsis.html","title":"<rbcloud-synopsis>","lang":"en-US","frontmatter":{"layout":"Layout"},"headers":[{"level":2,"title":"Example Usage","slug":"example-usage","link":"#example-usage","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]}],"git":{},"filePathRelative":null}');export{h as comp,_ as data};
