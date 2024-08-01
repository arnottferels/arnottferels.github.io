const t="katex/katex.mdx",e="blog",n="katex",o=`
# Contents

# KaTeX experimental

## with \`\`\`math

\`\`\`math
L = \\frac{1}{2} \\rho v^2 S C_L
\`\`\`

## Inline

Lift($$L$$) can be determined by Lift Coefficient ($$C_L$$) like the following equation.

## Block

$$
L = \\frac{1}{2} \\rho v^2 S C_L
$$

# Test

# Batch 1

1. In Iter₂, 263 solutions from Iter₁ are analyzed based on five FO functions ($\${\\text{FO}}_i$$), each with a specific weight distribution ($$w_{{\\text{FO}}_i}$$) as outlined in <MarkdownCrossRefTable i={3} /> and <MarkdownCrossRefTable i={4} />. The equation for Iter₂ is $\${\\text{Iter}}_2 = \\text{Top}\\left(\\sum_{i=1}^{m}\\frac{{\\text{FO}}_i}{w_{{\\text{FO}}_i}}\\right)$$, resulting in 81 solutions.

2. Iter₃ focuses on the top 20 values for each of the five objective functions, leading to $\${\\text{Iter}}_3 = \\text{Top20}\\left({\\text{Iter}}_2\\right)$$ and the selection of 100 potential solutions, of which 56 are unique.

3. Iter₄ combines data subsets from Iter₂ and Iter₃ to create an integrated set of 181 solutions. Finally, Iter₅ identifies recurring index values as “dominant solution” values from the 181 solutions, resulting in a refined list of 29 solutions using $\${\\text{Iter}}_5 = \\text{Top}\\left(\\text{Dominant Solution}, {\\text{Iter}}_4\\right)$$.

# Batch 1b

In Iter₈, each direction (east, south, and west) is assigned a route orientation (Routes) to measure distances between specific points using coordinates from <MarkdownCrossRefFigure i={17} />. The weighted route orientation ($$W_{\\text{Route}_n}$$) is calculated as $$W_{\\text{Route}_n}=w_n \\times \\text{length of Route}_n$$, where $$w_n$$ represents the weight assigned to Routeₙ. The weight distribution ($\${\\text{Iter}}_8=\\sum_{\\text{direction}}W_{\\text{Route}_{\\text{direction}_1}}$$) for the route orientations is [0.50, 0.20, 0.30] for east, south, and west directions, respectively. The sum of weighted route orientations in <MarkdownCrossRefTable i={6} /> is denoted as $\${\\text{Iter}}_8=\\sum_{\\text{direction}}W_{\\text{Route}_{\\text{direction}_1}}$$. Based on this calculation, the last five solutions with a score of 402 are selected for the subsequent Iteration, Iter₉.

# Batch 2

<th>$\${\\text{Route}}_{\\text{{east}}_1}$$</th>
<th>$\${\\text{Route}}_{\\text{{south}}_1}$$</th>
<th>$\${\\text{Route}}_{\\text{{west}}_1}$$</th>
<th>$$W_{\\text{Route}_{\\text{east}_1}}$$</th>
<th>$$W_{\\text{Route}_{\\text{south}_1}}$$</th>
<th>$$W_{\\text{Route}_{\\text{west}_1}}$$</th>
<th>$\${\\text{Iter}}_8$$</th>

# Batch 3

In Iter₉, southern transit routes (Routes) are optimized using coordinates from <MarkdownCrossRefFigure i={17} />. The south weight distribution ($$w_{\\text {south}_n}$$) for route orientations is [0.50, 0.30, 0.20] for south₁ to south₃ directions respectively. The sum of weighted route orientations in <MarkdownCrossRefTable i={8} /> is denoted as $\${\\text{Iter}_9} = \\sum_{\\text{direction (south)}} W_{\\text{Route}_{\\text{direction (south)}_1}}$$. Solutions Gen46 Idv40 and Gen47 Idv30 with a score of 402 are selected due to their lowest score. <MarkdownCrossRefFigure i={18} /> illustrates one of these solutions meeting the set goals for each FO, serving as a leading design guideline for future TH and PS planning. (Note: Gen46 Idv40 and Gen47 Idv30 refer to the same solution with identical genes and FO values.)

# Batch 4

<th>$\${\\text{Route}}_{\\text{{south}}_1}$$</th>
<th>$\${\\text{Route}}_{\\text{{south}}_2}$$</th>
<th>$\${\\text{Route}}_{\\text{{south}}_3}$$</th>
<th>$$W_{\\text{Route}_{\\text{south}_1}}$$</th>
<th>$$W_{\\text{Route}_{\\text{south}_2}}$$</th>
<th>$$W_{\\text{Route}_{\\text{south}_3}}$$</th>
<th>$\${\\text{Iter}}_9$$</th>
`,i={env_prod_ignore:!0,post_type:"blog",pub_date:"2024-06-30",main_title:"KaTeX",subtitle:"KaTeX",location:"Bandung, Indonesia",contributions:[],jury:[],instructor:[],team_leader:[],advisor:[],keywords:["KaTeX","Remark","Rehype"],softwares:[],authors:[],courseworks:[],editors:[]},s={type:"content",filePath:"D:/izvw/github/astro/mad-jet/src/content/blog/katex/katex.mdx",rawData:void 0};export{s as _internal,o as body,e as collection,i as data,t as id,n as slug};
