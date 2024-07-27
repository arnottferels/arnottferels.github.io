const e="2019/algae/algae.mdx",i="projects",d="algae-bio-façade-system",o=`
import biofacade_system from './figures/algae-bio-facade-system-biofacade-system.jpg';
import facade from './figures/algae-bio-facade-system-facade.jpg';
import features_01 from './figures/algae-bio-facade-system-features-01.jpg';
import features_02 from './figures/algae-bio-facade-system-features-02.jpg';
import features_03 from './figures/algae-bio-facade-system-features-03.jpg';
import features_04 from './figures/algae-bio-facade-system-features-04.jpg';
import method from './figures/algae-bio-facade-system-method.png';
import simulation_01_02 from './figures/algae-bio-facade-system-simulation-01-02.jpg';
import simulation_03_algae from './figures/algae-bio-facade-system-simulation-03-algae.jpg';

# Contents

# Method

<MarkdownImage text="Method" src={biofacade_system} isInvert />

In BSD, Tangerang, Indonesia, Kumulo is preparing a major installation, with construction scheduled from February to April and the exhibition until December 2021. The study focuses on limited natural shade in the hot-humid tropical area, examining shadows’ interaction with the installation and assessing its adaptability. A shadow simulation on June 21, 2021, captures daily patterns, providing insights into impact areas. Preliminary findings guide potential design adjustments for enhanced functionality and aesthetic appeal within Kumulo’s hot-humid tropical context.

# Climate: Responsive Design & Functional Features

<MarkdownGrid t50>
  <MarkdownImage text="Step 1 – The structure’s design follows local climate rules and building codes" src={features_01} isInvert />
  <MarkdownImage text="Step 2 – It adjusts to microclimates, using passive strategies for changes based on sun and wind patterns" src={features_02} isInvert />
  <MarkdownImage text="Step 3 – The building is mainly for offices, with co-working and retail as secondary functions" src={features_03} isInvert />
  <MarkdownImage text="Step 4 – Design details involve placing algae façade modules and other materials" src={features_04} isInvert />
</MarkdownGrid>

# Facade Thermal Mapping & Algae Module Placement Optimization

<MarkdownImage text="Facade Thermal Mapping & Algae Module Placement Optimization" src={facade} isInvert />

In this phase, mapping assessed thermal exposure for each facade section, crucial for simulating OTTV calculations. After determining OTTV values in the first (1) and second (2) simulations, the third simulation (3) identified optimal Algae module placement along solar path lines in Jakarta—specifically in the North, East, and South directions.

# Biofaçade System: How the Façade System Works

<MarkdownImage text="Biofaçade System" src={biofacade_system} isInvert />

When the building is exposed to substantial sunlight, the density of algae increases, creating additional shade and contributing to the maintenance of thermal and visual comfort. In the algae module, three specific types are distinguished: Dark, Standard, and Light. The algae facade facilitates adaptive shading in response to sunlight. As the building receives more sunlight, the algae density grows, providing heightened shading that ensures ongoing thermal and visual comfort.

# Simulation & Optimization

## Simulation 1 & 2

<MarkdownTable id="table1">
  <MarkdownTableCaption>Simulation 1 & 2.</MarkdownTableCaption>
  <thead>
    <tr>
      <th>Simulation</th>
      <th>Total Wall Conduction, Opening Conduction, Radiation through Total Openings (W)</th>
      <th>Total Facade Area (m²)</th>
      <th>OTTV (W/m²)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>646,473.46</td>
      <td>13,121.71</td>
      <td>49.27</td>
    </tr>
    <tr>
      <td>2</td>
      <td>387,014.93</td>
      <td>13,121.71</td>
      <td>29.49</td>
    </tr>
    <tr>
      <td colSpan="4">⋮</td>
    </tr>
    <tr>
      <td>3</td>
      <td>…</td>
      <td>…</td>
      <td>…</td>
    </tr>
  </tbody>
</MarkdownTable>

## Simulation 3: Algae

<MarkdownTable id="table2">
<MarkdownTableCaption>Simulation 3: Algae (Part 1).</MarkdownTableCaption>
  <thead>
    <tr>
      <th>No.</th>
      <th>Material (Opaque)</th>
      <th>U Value (W/m²/K)</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1</td>
      <td>Bio-façade Algae</td>
      <td>1.19</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bio-façade Algae AGC Comercial Low-E Glass 23</td>
      <td>0.23</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Concrete Column</td>
      <td>1.72</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Brick</td>
      <td>2.22</td>
    </tr>
  </tbody>
</MarkdownTable>

<MarkdownTable id="table3">
  <MarkdownTableCaption>Simulation 3: Algae (Part 2).</MarkdownTableCaption>
  <thead>
    <tr>
      <th>No.</th>
      <th>Material (Glass)</th>
      <th>U Value (W/m²/K)</th>
      <th>Ref.</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1</td>
      <td>Sunergy Glass SNFL 6mm</td>
      <td>4.10</td>
      <td>(1)</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bio-façade Algae: Sunergy Clear (SNFL) 6mm + 10mm Air media Algae + Sunergy Clear (SNFL) 6mm</td>
      <td>1.19</td>
      <td>(2)</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Bio-façade Algae AGC Comercial Low-E Glass 23</td>
      <td>0.29</td>
      <td>(1)</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Material combination: No. 2 &amp; 3</td>
      <td>0.23</td>
      <td>(3)</td>
    </tr>
  </tbody>
</MarkdownTable>

<MarkdownTable id="table4">
  <MarkdownTableCaption>Simulation 3: Algae (Part 3).</MarkdownTableCaption>
  <thead>
    <tr>
      <th>No.</th>
      <th>Material (Glass)</th>
      <th>U Value (W/m²/K)</th>
      <th>Ref.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Sunergy Glass SNFL 6mm</td>
      <td>4.10</td>
      <td>(1)</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bio-façade Algae: Sunergy Clear (SNFL) 6mm + 10mm Air media Algae + Sunergy Clear (SNFL) 6mm</td>
      <td>1.19</td>
      <td>(2)</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Bio-façade Algae AGC Comercial Low-E Glass 23</td>
      <td>0.29</td>
      <td>(1)</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Material combination: No. 2 &amp; 3</td>
      <td>0.23</td>
      <td>(3)</td>
    </tr>
  </tbody>
</MarkdownTable>

## References

1. Asahi performance data.
2. U-value for thermal transmittance, SC assumes a 40% reduction from Sunergy Clear SNFL 6mm.
3. U-value for thermal transmittance, SC assumes a 40% combined reduction from No. 2 & 3.

## Media

1. [Competition of Innovation and Architectural Facade Design Ideas by GBCI](/news/2019/05/22/competition-of-innovation-and-architectural-facade-design-ideas-by-gbci/)
`,r={title:"Algae Bio-façade System",post_type:"projects",abstract:"This study introduces a new bio-façade system in Indonesia, bringing innovation to sustainable architecture. The design focuses on mapping, modeling, and simulating the façade. The algae modules, categorized as Dark, Standard, and Light, adjust to sunlight levels, making the building more comfortable. Simulations show a significant reduction in the Overall Thermal Transfer Value (OTTV) to an impressive 35 W/m², setting a benchmark for energy efficiency. The project generates 131,460 kWh annually, reducing 295,346.8 grams of CO2 daily. It stands out as a model in sustainable architecture, demonstrating the potential of biophilic design in urban environments.",pub_date:"2019-04",hero_img_src:new Proxy({src:"/_astro/algae-bio-facade-system-thumbnail.B7UNRvVY.jpg",width:2048,height:2048,format:"jpg",fsPath:"D:/izvw/github/astro/mad-jet/src/content/projects/2019/algae/figures/algae-bio-facade-system-thumbnail.jpg"},{get(a,t,n){return t==="clone"?structuredClone(a):t==="fsPath"?"D:/izvw/github/astro/mad-jet/src/content/projects/2019/algae/figures/algae-bio-facade-system-thumbnail.jpg":(a[t]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("D:/izvw/github/astro/mad-jet/src/content/projects/2019/algae/figures/algae-bio-facade-system-thumbnail.jpg"),a[t])}}),hero_img_alt:"Algae Bio-façade System",keywords:["Façade design","Façade ideas","Optimization"],softwares:["SketchUp","Rhino","Adobe Illustrator","Adobe Photoshop","Microsoft Excel"],authors:["Arnott Ferels","Cathleen Charity","Oliver Kenny"],courseworks:[],editors:[],title_sub:"Innovating Integration for Sustainable Architectural Façade Design",location:"West Jakarta, Indonesia",classification:"Façade Ideas Competition",project_details:"Collaborative work in the Student Competition by Green Building Council Indonesia (GBCI)",contributions:["Analysis","Concept","Façade mapping","Façade modeling"],jury:["Eddy Indarto","Tiyok Prasetyoadi","Ariko Andikabina","Adi Purnomo","Yudianto Sofyan","Vivian Kristiarto"],instructor:[],team_leader:[],advisor:["Yaseri D. Apritasari"]},s={type:"content",filePath:"D:/izvw/github/astro/mad-jet/src/content/projects/2019/algae/algae.mdx",rawData:void 0};export{s as _internal,o as body,i as collection,r as data,e as id,d as slug};
