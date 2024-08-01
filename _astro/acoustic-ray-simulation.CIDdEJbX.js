const i="2023/acoustic-ray-simulation/acoustic-ray-simulation.mdx",o="projects",e="acoustic-ray-simulation",a=`\r
import distribution_01 from './figures/acoustic-ray-simulation-distribution-01.jpg';\r
import distribution_02 from './figures/acoustic-ray-simulation-distribution-02.jpg';\r
import interior from './figures/acoustic-ray-simulation-interior.jpg';\r
import method from './figures/acoustic-ray-simulation-method.jpg';\r
\r
# Contents\r
\r
# Animation\r
\r
<MarkdownYouTube videoId="-1DhkZLcgt8" text="Animation" />\r
\r
<MarkdownImage text="Method." src={method} isInvert />\r
\r
The creation of auditorium space is defined using an algorithmic modeling approach integrated with the Pachyderm Acoustic Simulation engine for continuous optimization.\r
\r
# Distribution of Sound Particles (Audio)\r
\r
<MarkdownImage text="Distribution of Sound Particles (Audio) (1)." src={distribution_01} isInvert />\r
\r
The diagram depicts the simulation in a 1530-seat auditorium, recording 61,208 Ray Curves (RC) for ATD. Red areas signal more than 10 sound reflections, while blue and yellow indicate 2 and 6 reflections, optimizing sound based on seat positions.\r
\r
<MarkdownImage text="Distribution of Sound Particles (Audio) (2)." src={distribution_02} isInvert />\r
\r
# Animation\r
\r
<MarkdownYouTube videoId="uyrB8jYWXSA" text="Front" />\r
\r
<MarkdownYouTube videoId="nuKRgFvHTII" text="Axonometric" />\r
\r
<MarkdownYouTube videoId="w9u6KCcH3MY" text="Top" />\r
\r
<MarkdownYouTube videoId="ZGoC3yJz7LQ" text="Right" />\r
\r
# Optimizing Sound Absorption\r
\r
<MarkdownTable id="table1">\r
<MarkdownTableCaption text="Acoustic Material Recommendations for Absorption in Auditorium Spaces. Source: Acoustic Projects Study (Acoustic Traffic LLC, 2023)."/>\r
  <thead>\r
    <tr>\r
      <th rowspan={2}>No.</th>\r
      <th rowspan={2}>Element</th>\r
      <th rowspan={2}>Material</th>\r
      <th rowspan={2}>Finishing</th>\r
      <th colspan={9} style="text-align: center">Absorption coef (% energy absorbed)</th>\r
      <th rowspan={2}>Page Ref.</th>\r
    </tr>\r
    <tr>\r
      <th>62.5Hz</th>\r
      <th>125Hz</th>\r
      <th>250Hz</th>\r
      <th>500Hz</th>\r
      <th>1KHz</th>\r
      <th>2KHz</th>\r
      <th>4KHz</th>\r
      <th>8KHz</th>\r
      <th>Flatten All</th>\r
    </tr>\r
  </thead>\r
\r
  <tbody>\r
    <tr>\r
      <td>1</td>\r
      <td>Wall</td>\r
      <td>Rockwool 75mm</td>\r
      <td>Fabric</td>\r
      <td>&#45;</td>\r
      <td>0.3</td>\r
      <td>0.69</td>\r
      <td>0.94</td>\r
      <td>1</td>\r
      <td>1</td>\r
      <td>1</td>\r
      <td>&#45;</td>\r
      <td>0.82</td>\r
      <td>10</td>\r
    </tr>\r
    <tr>\r
      <td>2</td>\r
      <td>Floor</td>\r
      <td>Carpet</td>\r
      <td>Fabric</td>\r
      <td>&#45;</td>\r
      <td>0.1</td>\r
      <td>0.15</td>\r
      <td>0.25</td>\r
      <td>0.3</td>\r
      <td>0.3</td>\r
      <td>0.3</td>\r
      <td>&#45;</td>\r
      <td>0.23</td>\r
      <td>1</td>\r
    </tr>\r
    <tr>\r
      <td>3</td>\r
      <td>Furniture</td>\r
      <td>Chair</td>\r
      <td>Fabric</td>\r
      <td>&#45;</td>\r
      <td>0.33</td>\r
      <td>0.44</td>\r
      <td>0.45</td>\r
      <td>0.45</td>\r
      <td>0.45</td>\r
      <td>0.45</td>\r
      <td>&#45;</td>\r
      <td>0.42</td>\r
      <td>2</td>\r
    </tr>\r
    <tr>\r
      <td>4</td>\r
      <td>Ceiling</td>\r
      <td>Woodwool 50mm</td>\r
      <td>Fabric</td>\r
      <td>&#45;</td>\r
      <td>0.3</td>\r
      <td>0.4</td>\r
      <td>0.5</td>\r
      <td>0.85</td>\r
      <td>0.5</td>\r
      <td>0.65</td>\r
      <td>&#45;</td>\r
      <td>0.53</td>\r
      <td>3</td>\r
    </tr>\r
    <tr>\r
      <td>5</td>\r
      <td>LED screen</td>\r
      <td>&#45;</td>\r
      <td>&#45;</td>\r
      <td>&#45;</td>\r
      <td>&#45;</td>\r
      <td>&#45;</td>\r
      <td>&#45;</td>\r
      <td>&#45;</td>\r
      <td>&#45;</td>\r
      <td>&#45;</td>\r
      <td>&#45;</td>\r
      <td>Undefined</td>\r
      <td>5</td>\r
    </tr>\r
  </tbody>\r
</MarkdownTable>\r
\r
The table outlines acoustic material recommendations for optimizing sound in the auditorium, considering material types, finishes, and absorption coefficients. Selection criteria include sound resonance, durability, and aesthetics. Follow these guidelines for enhanced sound quality and material durability in the auditorium.\r
\r
<MarkdownImage text="Implementation of acoustic materials in the auditorium space." src={interior} w75 noPadding />\r
\r
Acoustic materials in the auditorium are optimized for the best sound absorption. From Rockwool on the walls to carpet on the floor, every element contributes to improving the room’s sound quality.\r
\r
# References\r
\r
1. Acoustic Traffic LLC. (n.d.). Absorption coefficients [dataset]. _https://www.acoustic.ua/st/web_absorption_data_eng.pdf_\r
1. Architects’ Data. (2023). In Wikipedia. _https://en.wikipedia.org/w/index.php?title=Architects%27_Data&oldid=1142529729_\r
1. Kereta Api Indonesia. (2023). In Wikipedia. _https://en.wikipedia.org/w/index.php?title=Kereta_Api_Indonesia&oldid=1183278651_\r
1. Neufert, E., & Neufert, P. (2012). Architects’ Data. John Wiley & Sons.\r
1. Pachyderm Acoustical Simulation. (2014). [Computer software]. _https://www.food4rhino.com/en/app/pachyderm-acoustical-simulation_\r
\r
# Notes\r
\r
[Pachyderm](_https://www.food4rhino.com/en/app/pachyderm-acoustical-simulation_) is an open source collection of numerical and geometrical simulation techniques curated by Open Research in Acoustical Science and Education.\r
`,d={hero_img_src:new Proxy({src:"/_astro/acoustic-ray-simulation-thumbnail.7n9ev4by.jpg",width:2048,height:2048,format:"jpg",fsPath:"D:/izvw/github/astro/mad-jet/src/content/projects/2023/acoustic-ray-simulation/figures/acoustic-ray-simulation-thumbnail.jpg"},{get(n,t,r){return t==="clone"?structuredClone(n):t==="fsPath"?"D:/izvw/github/astro/mad-jet/src/content/projects/2023/acoustic-ray-simulation/figures/acoustic-ray-simulation-thumbnail.jpg":(n[t]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("D:/izvw/github/astro/mad-jet/src/content/projects/2023/acoustic-ray-simulation/figures/acoustic-ray-simulation-thumbnail.jpg"),n[t])}}),post_type:"projects",pub_date:"2023-10",main_title:"Acoustic Ray Simulation",abstract:"This study details the creation of a specialized auditorium model, inspired by Architect’s Data by Neufert. Employing Grasshopper for algorithmic modeling, parameters were refined, emphasizing ray distribution simulation for acoustic analysis via Ray Pachyderm Acoustical Simulation. Data visualization, featuring a heat map, illustrates ray counts at each step for seats. In conclusion, this method offers insights into sound ray behavior in acoustics.",subtitle:"Designing and Evaluating the KAI-MICE Auditorium Design",location:"Bandung, Indonesia",classification:"Professional Work",project_details:"Collaborative work in the National Professional Competition by IAI West Java (Indonesian Institute of Architect West Java)",contributions:["Research","Conceptual design","Acoustic modeling","Analysis","Simulation","Scripting","Visualization"],jury:[],instructor:[],team_leader:[],advisor:[],hero_img_alt:"Acoustic Ray Simulation",keywords:["Computation","Auditorium design","Acoustic design","Design optimization"],softwares:["Rhino","Grasshopper","Pachyderm Acoustic","Twinmotion"],authors:["Arnott Ferels","Robby D. Juliardi","Ekky Maulidin","Ghina Z","Zulafa Azmi"],courseworks:[],editors:[]},s={type:"content",filePath:"D:/izvw/github/astro/mad-jet/src/content/projects/2023/acoustic-ray-simulation/acoustic-ray-simulation.mdx",rawData:void 0};export{s as _internal,a as body,o as collection,d as data,i as id,e as slug};
