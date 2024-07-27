const i="2023/x-transit-hub/x-transit-hub.mdx",o="projects",s="x-transit-hub",a=`
import abm_superimpose from './figures/x-transit-hub-abm-superimpose.jpg';
import best_solution from './figures/x-transit-hub-best-solution.jpg';
import clustering_method from './figures/x-transit-hub-clustering-method.jpg';
import exploded_axonometric from './figures/x-transit-hub-exploded-axonometric.jpg';
import ls from './figures/x-transit-hub-ls.jpg';
import methodology from './figures/x-transit-hub-methodology.jpg';
import moo_dfc from './figures/x-transit-hub-moo-dfc.jpg';
import moo_graph from './figures/x-transit-hub-moo-graph.jpg';
import moo_process from './figures/x-transit-hub-moo-process.jpg';
import pers from './figures/x-transit-hub-pers.jpg';
import point_map_agent_based from './figures/x-transit-hub-point-map-agent-based.jpg';
import routes_scoring from './figures/x-transit-hub-routes-scoring.jpg';
import routes_taxonomy from './figures/x-transit-hub-routes-taxonomy.jpg';
import section_aa from './figures/x-transit-hub-section-aa.jpg';
import section_bb from './figures/x-transit-hub-section-bb.jpg';
import spa from './figures/x-transit-hub-spa.jpg';

# Contents

# Design

<MarkdownImage text="Perspective" src={pers} noPadding />
<MarkdownImage text="Section A-A" src={section_aa} isInvert />
<MarkdownImage text="Section B-B" src={section_bb} isInvert />
<MarkdownImage text="Exploded axonometric" src={exploded_axonometric} isInvert w50 />

# Methodology

<MarkdownImage text="DML method framework" src={methodology} isInvert />

DML method framework. These are: traffic analysis (1), dynamic crowd modeling (2), the smoothing and simplification of multiple paths (3), multi-objective optimization (4 and 5), and solution clustering and selection (6).

## Data Gathering & Modeling Preparation (Traffic Analysis)

<MarkdownImage text="The taxonomy of routes in Kalideres" src={routes_taxonomy} isInvert />
<MarkdownImage text="Route scoring is based on route segmentation" src={routes_scoring} isInvert />
<MarkdownImage text="Point-map with agents (AR, AT) and targets (T1,T2)" src={point_map_agent_based} isInvert />

In Layer 1, Google Maps Typical Traffic (GMTT) data (6 AM — 10 PM) analyzed congested routes and pedestrian movements. On-ground mapping and digital tools like Rhino, Grasshopper, and Caribou played crucial roles. GMTT data, ranked 1 to 3 for traffic densities, guides Layer 2 in identifying attraction points and key agents.

## Predicting Dynamic Model of Complex System

<MarkdownImage text="Aggregated results from agent-based simulations in Iterations 1, 2, and 3, illustrating crowd movement in the virtual environment" src={abm_superimpose} isInvert w50 />

<MarkdownTable id="table1">
  <MarkdownTableCaption text="Solo Commuting, Solo Walking, Group Touring" />
  <thead>
    <tr>
      <th>Configuration</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Solo Commuting (Iteration 1)</td>
      <td>Designed for students and working professionals, this configuration activates Wandering while deactivating Align Force.</td>
    </tr>
    <tr>
      <td>Solo Walking (Iteration 2)</td>
      <td>Tailored for leisure walkers, this configuration deactivates both Wandering and Align Force.</td>
    </tr>
    <tr>
      <td>Group Touring (Iteration 3)</td>
      <td>Configured for group tours, this setup deactivates Wandering and activates Align Force.</td>
    </tr>
  </tbody>
</MarkdownTable>

In Layer 2, utilizing agent-based simulation, agent configurations for AR, AT, T1, and T2 were derived from insights in Layer 1 through three iterative refinements. Configurations include Solo Commuting (students, professionals), Solo Walking (leisure walkers), and Group Touring (group tours). After 300 steps using tools like Grasshopper and Quelea, agent trajectories were evaluated, revealing patterns. Iteration 1 facilitates smooth navigation, Iteration 2 shows agent clustering in bustling zones, and Iteration 3 sees dense congregation around T1 and T2, indicating congestion hotspots. The simulations provide insights for urban renewal projects and infrastructure enhancements.

## Simplifying the Trails

<MarkdownImage text="Simplifying the Trails" src={ls} isInvert />

<MarkdownYouTube videoId="NKD823bFDhM" text="Simplifying the Trails" />

In Layer 3, data from three Layer 2 iterations is smoothed using Laplacian technique, maintaining even spacing. Modal points undergo iterative modifications, aligning with the 10th iteration and defining mesh space with shortest path algorithm (SPA). Aligned with TOD Standard 3.0 and SDGs 11 for robust transportation infrastructure and urban design.

## Defining the Objectives

<MarkdownImage text="Defining the Objectives: Shortest path algorithm (A-star)" src={spa} isInvert />

<MarkdownYouTube videoId="DrelgFFXo6g" text="Defining the Objectives" />

In Layer 4, SPA and A-star algorithms converge, paving the way for optimization in Layer 5. The computational agility of A-star transforms input lines into a refined foundational mesh using TriRemesh in Kangaroo2. This mesh serves as trails for SPA, with T1 and T2 as terminal markers (nodes).

## Optimizing the Objectives

<MarkdownGrid t50>
  <MarkdownImage text="Diamond Fitness Chart (DFC) traces optimization progress" src={moo_dfc} isInvert />
  <MarkdownImage text="PCP, FVG, SDG, and SDT offer a comprehensive view of generation" src={moo_graph} isInvert />
</MarkdownGrid>
<MarkdownImage text="Optimizing the Objectives" src={moo_process} isInvert />

<MarkdownYouTube videoId="7_Oj2FQFB4A" text="Optimizing the Objectives" />

In Layer 5, EMOO simulation, driven by NSGA-II, aims for advanced outcomes. Fitness Objectives (FO) prioritize average route distances, Voronoi radii area, and total potential Public Space (PS) count, emphasizing uninterrupted mobility, placemaking, and urgency. The study, evaluating 2,500 potential solutions with Wallacei, confirms the method’s effectiveness, setting the stage for the next layer to select the best design guideline through solution clustering techniques.

## Clustering & Selecting the Best Solution

<MarkdownImage text="A method for clustering the set of solutions into the best solution. It is called the Selection Clustering (SC) method" src={clustering_method} isInvert w50 />

In Layer 6, the focus is on detailed clustering of the extensive set of 2,500 solutions using the SC method. The objective is to determine the most pertinent design guidelines. This method unfolds over five phases, collectively termed “solution clustering,” fine-tuned to choose the most suitable solution for the study.

<MarkdownImage text="Best Solution" src={best_solution} isInvert />

Upon reevaluating the chosen solution (Gen47 Idv30), the initial criteria set for all FOs were revisited. Ideally, these criteria should align with the highest standards, particularly when compared to the clusters identified in Layer 6. Achieving the set goals for each FO is crucial. The assessment reveals that all objectives have been met, positioning the selected solution as a leading design guideline for the TH in the first section of this portfolio. Additionally, this solution serves as a blueprint for future planning of PS in the context.

# Finding

In the Dynamic Multi-Layer (DML) methodology, Walkability Model (WM) is employed to track agent movement effectively, distinguishing between primary and secondary movement patterns. This approach, combined with Agent-Based Modeling (ABM), provides valuable insights for designing TH and PS. The use of WM plays a crucial role in understanding the walkable aspects of urban spaces, aiding in the formulation of design guidelines.

# Media

<MarkdownYouTube videoId="1Eei2f9kM_Y" text="3D Walkthrough" />
`,r={title:"X Transit Hub",post_type:"projects",abstract:"This thesis delves into the challenges, methodologies, and solutions associated with the design of a transit hub (TH) in Jakarta that integrates both public transportation and public spaces (PS). A Dynamic Multi-Layer (DML) method addresses these intricate challenges by examining traffic density, simulating pedestrian movements, and optimizing for multiple objectives, such as minimizing distance to PS and reducing the total number of PS. The ultimate solution serves as a blueprint for the TH design, emphasizing human mobility, connectivity, and greenery.",pub_date:"2023-01-25",hero_img_src:new Proxy({src:"/_astro/x-transit-hub-thumbnail.BDRAATwZ.jpg",width:2048,height:2048,format:"jpg",fsPath:"D:/izvw/github/astro/mad-jet/src/content/projects/2023/x-transit-hub/figures/x-transit-hub-thumbnail.jpg"},{get(e,t,n){return t==="clone"?structuredClone(e):t==="fsPath"?"D:/izvw/github/astro/mad-jet/src/content/projects/2023/x-transit-hub/figures/x-transit-hub-thumbnail.jpg":(e[t]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("D:/izvw/github/astro/mad-jet/src/content/projects/2023/x-transit-hub/figures/x-transit-hub-thumbnail.jpg"),e[t])}}),hero_img_alt:"X Transit Hub",keywords:["Urban research","Transit design","Public space","Computation","Design methods","Design optimization"],softwares:["Rhino","Grasshopper","Wallacei","Culebra","Quelea","Anemone","Caribou","Arachne","Kangaroo 2","Twinmotion","Adobe Photoshop","Simplify3D","UltiMaker Cura"],authors:[],courseworks:["Thesis"],editors:[],title_sub:" Walkability Model Using Dynamic Multilayer Method in Transit Hub Design",location:"West Jakarta, Indonesia",classification:"Master’s Thesis",project_details:"Individual work",contributions:[],jury:["M. Donny Koerniawan","Heru W. Poerbo"],instructor:[],team_leader:[],advisor:["Aswin Indraprastha"]},d={type:"content",filePath:"D:/izvw/github/astro/mad-jet/src/content/projects/2023/x-transit-hub/x-transit-hub.mdx",rawData:void 0};export{d as _internal,a as body,o as collection,r as data,i as id,s as slug};
