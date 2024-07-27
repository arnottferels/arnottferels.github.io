const n="2023/voxel-space/voxel-space.mdx",r="models",t="voxel-space",a=`
import fig01 from './figures/voxel-space-01.png';
import fig02 from './figures/voxel-space-02.png';
import fig03 from './figures/voxel-space-03.png';
import fig04 from './figures/voxel-space-04.png';
import fig05 from './figures/voxel-space-05.png';
import fig06 from './figures/voxel-space-06.png';
import fig07 from './figures/voxel-space-07.png';
import fig08 from './figures/voxel-space-08.png';

Inspired by Vessel by Thomas Heatherwick and Heatherwick Studio at [Hudson Yards](https://www.hudsonyardsnewyork.com/discover/vessel), featuring a spiral staircase with 2,500 steps and 80 landings offering city views, with modifications.

In the design exploration, (1) [lines](https://grasshopperdocs.com/components/grasshoppercurve/line.html) are crafted to resemble a helix and then transformed into [polylines](https://grasshopperdocs.com/components/grasshoppercurve/polyLine.html). (2) These polylines are [mirrored](https://grasshopperdocs.com/components/grasshoppertransform/mirror.html), producing four distinct modules. (3) Four unique rotation values are set, offering four potential outcomes. (4) An axis, not perpendicular to the Z-axis, imparts a [twisting](https://grasshopperdocs.com/components/grasshoppertransform/twist.html) dynamic. (5) Using computational techniques, these forms undergo a [Multi Pipe](https://grasshopperdocs.com/components/kangaroo2/multiPipe.html) process and are abstracted to geometries like a Mesh. (6) Each mesh's [bounding box](https://grasshopperdocs.com/components/grasshoppersurface/boundingBox.html) is integrated with [Voxel Grid](https://grasshopperdocs.com/addons/voxeltools.html) and [Voxelate Geometry](https://grasshopperdocs.com/addons/voxeltools.html). (7) Finally, nodes are [projected](https://grasshopperdocs.com/components/grasshoppertransform/project.html) onto a Construction Plane, emerging as support [columns](https://grasshopperdocs.com/components/grasshoppersurface/pipe.html).

# Voxel Space 1

<MarkdownGrid t50>
  <MarkdownImage src={fig01} noPadding />
  <MarkdownImage src={fig02} noPadding />
</MarkdownGrid>

# Voxel Space 2

<MarkdownGrid t50>
  <MarkdownImage src={fig03} noPadding />
  <MarkdownImage src={fig04} noPadding />
</MarkdownGrid>

# Voxel Space 3

<MarkdownGrid t50>
  <MarkdownImage src={fig05} noPadding />
  <MarkdownImage src={fig06} noPadding />
</MarkdownGrid>

# Voxel Space 4

<MarkdownGrid t50>
  <MarkdownImage src={fig07} noPadding />
  <MarkdownImage src={fig08} noPadding />
</MarkdownGrid>
`,i={title:"Voxel Space",post_type:"models",pub_date:"2023-09",hero_img_src:new Proxy({src:"/_astro/voxel-space-01.CkZ_1WC8.png",width:1280,height:1280,format:"png",fsPath:"D:/izvw/github/astro/mad-jet/src/content/models/2023/voxel-space/figures/voxel-space-01.png"},{get(e,o,s){return o==="clone"?structuredClone(e):o==="fsPath"?"D:/izvw/github/astro/mad-jet/src/content/models/2023/voxel-space/figures/voxel-space-01.png":(e[o]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("D:/izvw/github/astro/mad-jet/src/content/models/2023/voxel-space/figures/voxel-space-01.png"),e[o])}}),hero_img_alt:"Voxel Space",keywords:["Algorithmic design","Computational thinking","Design exploration","Generative design","Voxel Space"],softwares:[],authors:[],courseworks:[],editors:[],contributions:[],jury:[],instructor:[],team_leader:[],advisor:[]},p={type:"content",filePath:"D:/izvw/github/astro/mad-jet/src/content/models/2023/voxel-space/voxel-space.mdx",rawData:void 0};export{p as _internal,a as body,r as collection,i as data,n as id,t as slug};
