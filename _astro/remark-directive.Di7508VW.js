import{c as n,r as a,m as r,u as l}from"./hoisted.CAr1_Kmd.js";import"./index.CTbVEFV3.js";import"./astro/assets-service.vIrN2Q6E.js";const e=`



















<table><thead><tr><th align="left">Syntax</th><th align="center">Description</th><th align="right">Test Text</th></tr></thead><tbody><tr><td align="left">Header</td><td align="center">Title</td><td align="right">Here’s this</td></tr><tr><td align="left">Paragraph</td><td align="center">Text</td><td align="right">And more</td></tr></tbody></table>
<p>H<del>2</del>O Superscript X^2^</p>
<main id="readme"><p>Lorem<br> ipsum.</p><hr class="red"><p>A <i>lovely</i> language know as <abbr title="HyperText Markup Language">HTML</abbr>.</p></main>
<p>:::div{#fig17.cat-hello-world} <img src="./figures/seiko.jpg" alt="Cat in a box"> </p><figcaption title="title">hello</figcaption><p></p>
<p>:::</p>
<p>:::div{#table99.table-wrapper} Table</p>





















<table><thead><tr><th>Header 1</th><th>Header 2</th></tr></thead><tbody><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 1</td><td>Cell 2</td></tr><tr><td>Cell 1</td><td>Cell 2</td></tr></tbody></table>
<p>:::</p>
<h2 id="autolink-literals" class="anchor-heading">Autolink literals<a class="anchor-link" data-pagefind-ignore="" href="#autolink-literals">#</a></h2>
<p><a href="http://www.example.com">www.example.com</a>, <a href="https://example.com">https://example.com</a>, and <a href="mailto:contact@example.com">contact@example.com</a>.</p>`,i={env_prod_ignore:!0,post_type:"blog",slug:"remark-directive",title:"remark-directive",pub_date:"2024-07-01",description:"Empty",keywords:["remark","directive","test"]},o="D:/izvw/github/astro/mad-jet/src/content/blog/remark-directive/remark-directive.md",d=void 0;function b(){return`
| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |

H~2~O Superscript X^2^

:::main{#readme}

Lorem:br ipsum.

::hr{.red}

A :i[lovely] language know as :abbr[HTML]{title="HyperText Markup Language"}.

:::

:::div{#fig17.cat-hello-world} ![Cat in a box](./figures/seiko.jpg) :figcaption[hello]{title="title"}

:::

:::div{#table99.table-wrapper} :caption[Table]{.table-caption}

| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 1   | Cell 2   |
| Cell 1   | Cell 2   |

:::

## Autolink literals

www.example.com, https://example.com, and contact@example.com.
`}function f(){return e}function x(){return[{depth:2,slug:"autolink-literals",text:"Autolink literals#"}]}const k=n((p,s,c)=>{const{layout:m,...t}=i;return t.file=o,t.url=d,a`${r()}${l(e)}`});export{k as Content,f as compiledContent,k as default,o as file,i as frontmatter,x as getHeadings,b as rawContent,d as url};
