# X Transit Hub

```bibtex
@online{fere_2023_xtra,
  title = {X {Transit} {Hub}},
  author = {Ferels, Arnott},
  url = {https://arnottferels.github.io/work/x-transit-hub/},
  abstract = {This thesis delves into the challenges, methodologies, and solutions associated with the design of a transit hub (TH) in Jakarta that integrates both public transportation and public spaces (PS). A Dynamic Multi-Layer (DML) method addresses these intricate challenges by examining traffic density, simulating pedestrian movements, and optimizing for multiple objectives, such as minimizing distance to PS and reducing the total number of PS. The ultimate solution serves as a blueprint for the TH design, emphasizing human mobility, connectivity, and greenery.},
  date = {2023-01-25},
  keywords = {Urban research,Transit design,Public space,Computation,Design methods,Design optimization},
  language = {en}
}

```

# Design

![Perspective](https://arnottferels.github.io/a/img/1485/hRXv.webp)

_Figure: Perspective_

![Section A-A](https://arnottferels.github.io/a/img/1485/0st3.webp)

_Figure: Section A-A_

![Section B-B](https://arnottferels.github.io/a/img/1485/ptft.webp)

_Figure: Section B-B_

![Exploded axonometric](https://arnottferels.github.io/a/img/1485/s18i.webp)

_Figure: Exploded axonometric_

# Methodology

> [!TIP]
The HTML version of this svg is available [here](https://arnottferels.github.io/work/x-transit-hub/#figx2024).

_Figure: DML method framework_

DML method framework. These are: traffic analysis (1), dynamic crowd modeling (2), the smoothing and simplification of multiple paths (3), multi-objective optimization (4 and 5), and solution clustering and selection (6).

## Data Gathering and Modeling Preparation (Traffic Analysis)

![The taxonomy of routes in Kalideres](https://arnottferels.github.io/a/img/1350/cpXB.webp)

_Figure: The taxonomy of routes in Kalideres_

![Route scoring is based on route segmentation](https://arnottferels.github.io/a/img/1354/iXLR.webp)

_Figure: Route scoring is based on route segmentation_

![Point-map with agents (AR, AT) and targets (T1,T2)](https://arnottferels.github.io/a/img/1350/YDph.webp)

_Figure: Point-map with agents (AR, AT) and targets (T1,T2)_

In Layer 1, Google Maps Typical Traffic (GMTT) data (6 AM to 10 PM) analyzed congested routes and pedestrian movements. On-ground mapping and digital tools like Rhino, Grasshopper, and Caribou played crucial roles. GMTT data, ranked 1 to 3 for traffic densities, guides Layer 2 in identifying attraction points and key agents.

## Predicting Dynamic Model of Complex System

![Aggregated results from agent-based simulations in Iterations 1, 2, and 3, illustrating crowd movement in the virtual environment](https://arnottferels.github.io/a/img/1814/bDRr.webp)

_Figure: Aggregated results from agent-based simulations in Iterations 1, 2, and 3, illustrating crowd movement in the virtual environment_

> [!TIP]
The HTML version of this table is available [here](https://arnottferels.github.io/work/x-transit-hub/#table1).

_Table 1. Solo Commuting, Solo Walking, Group Touring_

| Configuration | Description |
| --- | --- |
| Solo Commuting (Iteration 1) | Designed for students and working professionals, this configuration activates Wandering while deactivating Align Force. |
| Solo Walking (Iteration 2) | Tailored for leisure walkers, this configuration deactivates both Wandering and Align Force. |
| Group Touring (Iteration 3) | Configured for group tours, this setup deactivates Wandering and activates Align Force. |

In Layer 2, utilizing agent-based simulation, agent configurations for AR, AT, T1, and T2 were derived from insights in Layer 1 through three iterative refinements. Configurations include Solo Commuting (students, professionals), Solo Walking (leisure walkers), and Group Touring (group tours). After 300 steps using tools like Grasshopper and Quelea, agent trajectories were evaluated, revealing patterns. Iteration 1 facilitates smooth navigation, Iteration 2 shows agent clustering in bustling zones, and Iteration 3 sees dense congregation around T1 and T2, indicating congestion hotspots. The simulations provide insights for urban renewal projects and infrastructure enhancements.

## Simplifying the Trails

![Simplifying the Trails](https://arnottferels.github.io/a/img/1373/THNv.webp)

_Figure: Simplifying the Trails_

![Simplifying the Trails (https://youtube.com/embed/NKD823bFDhM)](https://img.youtube.com/vi/NKD823bFDhM/sddefault.jpg)

_Video: Simplifying the Trails (https://youtube.com/embed/NKD823bFDhM)_

In Layer 3, data from three Layer 2 iterations is smoothed using Laplacian technique, maintaining even spacing. Modal points undergo iterative modifications, aligning with the 10th iteration and defining mesh space with shortest path algorithm (SPA). Aligned with TOD Standard 3.0 and SDGs 11 for robust transportation infrastructure and urban design.

## Defining the Objectives

![Defining the Objectives: Shortest path algorithm (A-star)](https://arnottferels.github.io/a/img/1372/2QNB.webp)

_Figure: Defining the Objectives: Shortest path algorithm (A-star)_

![Defining the Objectives (https://youtube.com/embed/DrelgFFXo6g)](https://img.youtube.com/vi/DrelgFFXo6g/sddefault.jpg)

_Video: Defining the Objectives (https://youtube.com/embed/DrelgFFXo6g)_

In Layer 4, SPA and A-star algorithms converge, paving the way for optimization in Layer 5. The computational agility of A-star transforms input lines into a refined foundational mesh using TriRemesh in Kangaroo2. This mesh serves as trails for SPA, with T1 and T2 as terminal markers (nodes).

## Optimizing the Objectives

![Diamond Fitness Chart (DFC) traces optimization progress](https://arnottferels.github.io/a/img/754/24Ol.webp)

_Figure: Diamond Fitness Chart (DFC) traces optimization progress_

![PCP, FVG, SDG, and SDT offer a comprehensive view of generation.](https://arnottferels.github.io/a/img/591/QV1u.webp)

_Figure: PCP, FVG, SDG, and SDT offer a comprehensive view of generation._

![Optimizing the Objectives](https://arnottferels.github.io/a/img/1372/nz9Y.webp)

_Figure: Optimizing the Objectives_

![Optimizing the Objectives (https://youtube.com/embed/7_Oj2FQFB4A)](https://img.youtube.com/vi/7_Oj2FQFB4A/sddefault.jpg)

_Video: Optimizing the Objectives (https://youtube.com/embed/7_Oj2FQFB4A)_

In Layer 5, EMOO simulation, driven by NSGA-2, aims for advanced outcomes. Fitness Objectives (FO) prioritize average route distances, Voronoi radii area, and total potential Public Space (PS) count, emphasizing uninterrupted mobility, placemaking, and urgency. The study, evaluating 2,500 potential solutions with Wallacei, confirms the method’s effectiveness, setting the stage for the next layer to select the best design guideline through solution clustering techniques.

## Clustering and Selecting the Best Solution

> [!TIP]
The HTML version of this svg is available [here](https://arnottferels.github.io/work/x-transit-hub/#figx0512).

_Figure: A method for clustering the set of solutions into the best solution. It is called the Selection Clustering (SC) method_

In Layer 6, the focus is on detailed clustering of the extensive set of 2,500 solutions using the SC method. The objective is to determine the most pertinent design guidelines. This method unfolds over five phases, collectively termed “solution clustering,” fine-tuned to choose the most suitable solution for the study.

![Best Solution](https://arnottferels.github.io/a/img/1371/jL3m.webp)

_Figure: Best Solution_

Upon reevaluating the chosen solution (Gen47 Idv30), the initial criteria set for all FOs were revisited. Ideally, these criteria should align with the highest standards, particularly when compared to the clusters identified in Layer 6. Achieving the set goals for each FO is crucial. The assessment reveals that all objectives have been met, positioning the selected solution as a leading design guideline for the TH in the first section of this portfolio. Additionally, this solution serves as a blueprint for future planning of PS in the context.

# Finding

In the Dynamic multi-layer (DML) methodology, Walkability Model (WM) is employed to track agent movement effectively, distinguishing between primary and secondary movement patterns. This approach, combined with Agent-Based Modeling (ABM), provides valuable insights for designing TH and PS. The use of WM plays a crucial role in understanding the walkable aspects of urban spaces, aiding in the formulation of design guidelines.

# Media

![3D Walkthrough (https://youtube.com/embed/1Eei2f9kM_Y)](https://img.youtube.com/vi/1Eei2f9kM_Y/sddefault.jpg)

_Video: 3D Walkthrough (https://youtube.com/embed/1Eei2f9kM_Y)_

