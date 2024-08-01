const n="remark-directive/remark-directive.mdx",e="blog",t="remark-directive",o=`
import seiko from './figures/seiko.jpg';

<MarkdownImage text="Seiko" src={seiko} />

## Blockquote

:::blockquote{#blockquote.blockquote}

:i[Note]: The material below is from my curated image collection, not the archived URLs.

:::

## Lorem ipsum (main#readme)

:::main{#readme}

Lorem:br ipsum.

::hr{.red}

A :i[lovely] language know as :abbr[HTML]{title="HyperText Markup Language"}.

:::

## All about caption

### Figcaption

[Figure placeholder]

::figcaption[A figcaption]{.class}

### Figcaption & caption

[Figure placeholder]

::caption[A caption]{.class}

**Note:** The \`::caption-any\` syntax seems to work (below).

::caption-any[A caption]{.class}

## Images & Figcaption

:::div{#fig17.cat-hello-world}

{/* Not working */}

{/* ![Seiko](./figures/seiko.jpg) */}

<MarkdownImage title="Seiko" src={seiko} />

Or use from directive: :figcaption[hello]{.fig-caption.with-counter title="title"}

:::

## Tables

:::div{#table99.table-wrapper}

Can't add caption.

| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 1   | Cell 2   |
| Cell 1   | Cell 2   |

:::

# Others

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Table

| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |
`,i={env_prod_ignore:!0,post_type:"blog",pub_date:"2024-07-01",main_title:"remark-directive",description:"Empty",contributions:[],jury:[],instructor:[],team_leader:[],advisor:[],keywords:["remark","directive","test"],softwares:[],authors:[],courseworks:[],editors:[]},a={type:"content",filePath:"D:/izvw/github/astro/mad-jet/src/content/blog/remark-directive/remark-directive.mdx",rawData:void 0};export{a as _internal,o as body,e as collection,i as data,n as id,t as slug};
