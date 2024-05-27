import{_ as e,r as s,o as l,c as o,e as a,w as c,b as n,a as i}from"./app-BaKtFpRD.js";const u={},r=n("h1",{id:"rbcloud-block",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rbcloud-block"},[n("span",null,"<rbcloud-block>")])],-1),k=n("p",null,"An abstract Block component.",-1),d=n("h2",{id:"example-usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#example-usage"},[n("span",null,"Example Usage")])],-1),v=i(`<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>block-container<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>home-CarouselBlock</span>
        <span class="token attr-name">:epsd-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data.epsdId<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:poster-path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data.poster<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:transform</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data.transform<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data.height<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data.width<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data.selected<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>height<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">v-model.number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data.height<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>range<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>600<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>width<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">v-model.number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data.width<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>range<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>600<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>Selected<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data.selected<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> image <span class="token keyword">from</span> <span class="token string">&#39;@/assets/image/woman-7109043_1280.jpg&#39;</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">epsdId</span><span class="token operator">:</span> <span class="token string">&#39;MM1000998905&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">poster</span><span class="token operator">:</span> image<span class="token punctuation">,</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">&#39;rotateY(4deg) translateZ(2000px) rotate3d(1, 0, 0, 0deg)&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">720</span><span class="token punctuation">,</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">480</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span>
  <span class="token attr-name">scoped</span>
  <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>

    <span class="token property">height</span><span class="token punctuation">:</span> 640px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1080px<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>

    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>

    <span class="token property">transform-style</span><span class="token punctuation">:</span> preserve-3d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.block-container</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>

  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>

  <span class="token property">width</span><span class="token punctuation">:</span> 496px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 350px<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 999<span class="token punctuation">;</span>

  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>-288px<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">transform-style</span><span class="token punctuation">:</span> preserve-3d<span class="token punctuation">;</span>

  <span class="token selector">.block-poster</span> <span class="token punctuation">{</span>

    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 2px solid black<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    //<span class="token property">width</span><span class="token punctuation">:</span> 480px<span class="token punctuation">;</span>
    //<span class="token property">height</span><span class="token punctuation">:</span> 720px<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 4px 6px -1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">,</span> 0 2px 4px -1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.06<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token selector">&amp;.--focused</span> <span class="token punctuation">{</span>
      <span class="token property">transition</span><span class="token punctuation">:</span> transform 0.5s<span class="token punctuation">;</span>
      <span class="token property">zoom</span><span class="token punctuation">:</span> 1.02<span class="token punctuation">;</span>

      <span class="token property">border</span><span class="token punctuation">:</span> 17px solid #7387ffff<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 80px / 60px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">&amp;.--blur</span> <span class="token punctuation">{</span>
      <span class="token property">transition</span><span class="token punctuation">:</span> transform 0.4s<span class="token punctuation">;</span>
      <span class="token property">opacity</span><span class="token punctuation">:</span> 0.8<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">label</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">input</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 1ex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><ul><li><code>epsdId</code> : string<br> 블록 식벽 키.</li><li><code>posterPath</code> : string<br> 블록 포스터 이미지.</li><li><code>transform</code> : string<br> 블록 포스터 위치 (3d).<br> Defaults to () =&gt; { return &#39;none&#39; }</li><li><code>selected</code> : boolean<br> 블록 포스터 선택 여부<br> Defaults to () =&gt; { return false }</li><li><code>height</code> : number<br> 블록 포스터 높이</li><li><code>width</code> : number<br> 블록 포스터 넓이</li></ul>`,3);function m(b,g){const t=s("home-rbcloud-block-example"),p=s("ClientOnly");return l(),o("div",null,[r,k,d,a(p,null,{default:c(()=>[a(t)]),_:1}),v])}const q=e(u,[["render",m],["__file","rbcloud-block.html.vue"]]),y=JSON.parse('{"path":"/components/home/rbcloud-block.html","title":"<rbcloud-block>","lang":"en-US","frontmatter":{"layout":"Layout"},"headers":[{"level":2,"title":"Example Usage","slug":"example-usage","link":"#example-usage","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]}],"git":{},"filePathRelative":null}');export{q as comp,y as data};
