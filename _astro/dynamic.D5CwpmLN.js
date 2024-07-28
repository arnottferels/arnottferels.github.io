const i="2024/dynamic/dynamic.mdx",r="pub",a="doi/10/1177/14780771241254639",o=`\r
import fig1 from './figures/fig-01.jpg';\r
import fig2 from './figures/fig-02.jpg';\r
import fig3 from './figures/fig-03.png';\r
import fig4 from './figures/fig-04.jpg';\r
import fig5 from './figures/fig-05.jpg';\r
import fig6 from './figures/fig-06.jpg';\r
import fig7 from './figures/fig-07.jpg';\r
import fig8 from './figures/fig-08.jpg';\r
import fig9 from './figures/fig-09.jpg';\r
import fig10 from './figures/fig-10.jpg';\r
import fig11 from './figures/fig-11.jpg';\r
import fig12 from './figures/fig-12.jpg';\r
import fig13 from './figures/fig-13.jpg';\r
import fig14 from './figures/fig-14.jpg';\r
import fig15 from './figures/fig-15.jpg';\r
import fig16 from './figures/fig-16.jpg';\r
import fig17 from './figures/fig-17.jpg';\r
import fig18 from './figures/fig-18.jpg';\r
\r
# Abstract\r
\r
This paper presents a novel approach to optimizing movement in urban areas through a dynamic multi-layer walkability model. This research uncovers new facets of walkability modeling within transit-oriented movement, aligning pedestrian pathways (Routes) with urban architecture, public spaces, and green spaces (Nodes). The dynamic multi-layer (DML) approach involves optimizing both the Nodes and Routes of the transit system using a multi-objective optimization method. This method improves accessibility and connectivity by aggregating the results of agent-based modeling for route simulations and considers multiple criteria, including greenness, distance to transit, and destination accessibility. Experimentation with a case study produced several findings that underscore the value of multi-layered models for transit movement and the power of computational methods in optimizing both Nodes and Routes. This discovery offers valuable insights into the DML process and its potential applications in the field of urban design and architecture.\r
\r
# Keywords\r
\r
Multi-layer; Walkability model; Transit-oriented movement; Optimization method; Agent-based modeling\r
\r
# Contents\r
\r
# Introduction\r
\r
Urban areas globally are confronted with challenges caused by inadequate infrastructure, resulting in decreased physical activity, mainly walking and cycling, and hindering transit connectivity [^1], [^2], [^3], [^4], [^5]. These issues are influenced by many factors, such as high population density and behavioral patterns shaped by urban culture [^6]. The resultant challenges extend to physical structures and have socio-economic implications for cities [^6].\r
\r
In the context of rapid urbanization, there is an urgent need for improved urban and transport planning to address these challenges effectively [^7]. Policymakers and planners play a significant role in promoting human-oriented mobility and environmental interactions, especially in densely populated cities [^8], [^9]. Their interventions are vital in fostering walkability and cycling, directly impacting the sustainability and livability of urban areas [^10]. Strategies like developing integrated transportation hubs with public amenities like green spaces offer cost-effective solutions to mitigate climate change impacts [^7], [^11]. Incorporating walkability principles into urban planning promotes a healthier urban environment by including green spaces and pedestrian-friendly features [^4], [^12], [^13]. Through deep analysis and problem identification using bottom-up modeling approaches [^14], [^15], complex traveler interactions can be simulated to optimize planning and design outcomes. This approach significantly contributes to reducing unnecessary physical activities such as sprawl, congestion, and segregation within cities [^16].\r
\r
To improve the quality of life for urban residents, integrating smart urban development strategies and empirical measurements into urban planning is crucial, especially for long-term planning [^17]. Prioritizing human-centered concepts over vehicle-oriented ones and focusing on environmental sustainability can significantly enhance the city’s effectiveness and livability. This includes prioritizing mass transportation over private vehicles to minimize urban sprawl and congestion, ultimately making cities more compact and livable [^18].\r
\r
In conclusion, implementing sustainable and human-centered approaches is essential for enhancing walkability and cycling infrastructure, improving city livability [^7], and addressing challenges in underdeveloped urban areas. For instance, shifting from car reliance to mass transport is key to achieving compact cities and reducing uncontrolled urban sprawl [^17]. Drawing insights from the mentioned studies, this research aims to experiment with a novel approach to address walkability challenges in underdeveloped urban areas.\r
\r
## Walkability modeling & agent-based modeling and simulation\r
\r
Walkability modeling (WM) involves simulating pedestrian movement in constrained environments, which makes it a valuable tool for understanding real-world situations and enhancing our knowledge of pedestrian behavior [^15]. This method allows for a detailed analysis of programs and patterns, suggesting improvements to existing structures for greater efficiency [^19], [^20]. In the context of urban development, WM primarily focuses on assessing how human behavior impacts physical activity, providing insights that are crucial for urban planning and design [^21]. On the other hand, agent-based modeling is used to simulate the complex nature of walkability and its relationships [^22], [^23], [^24]. Agent-based modeling and simulation (ABMS) provides a deep understanding of existing walking habits that directly affect physical activity in urban contexts [^15], [^25]. By examining agent trails generated by ABMS, we can see how pedestrian pathways (Routes) and city features (Nodes) are interconnected, promoting livability and physical activity while also preparing for future mitigation efforts. This modeling method is particularly essential in developing countries, where factors influencing physical activity need to be considered by city stakeholders [^26]. Integrating ABMS and WM offers significant benefits, including the ability to observe and forecast phenomena [^27]. Computational methods within ABMS provide advantages such as dynamic feedback mechanisms and realistic behavior modeling [^14]. However, challenges arise when translating data, including behavior and ethnographic input [^28], into the ABMS environment [^24], [^29]. Nonetheless, ABMS in WM allows for forecasting in complex scenarios, deepening our understanding of factors influencing human mobility in urban settings [^30], [^31].\r
\r
Recent academic attention has focused on integrating ABMS and WM, particularly in transit-oriented development (TOD), and identifying potential “Nodes” or specific public spaces as key feature [^32], [^33]. Notable studies in this area include Badland et al. (2013), who introduced a web-based tool for evaluating and enhancing neighborhood walkability, emphasizing improvements like pedestrian simulations and considering factors such as residential density and traffic flow [^34]. Herrmann et al. (2017) explored the impact of walkability on walking frequency in neighborhoods, advocating for interventions like reducing parking areas and increasing street-level tree coverage [^35]. Lu (2017) conducted a comprehensive study on walkability modeling, using GIS methods like Map Overlay and Cost Distance Analysis to identify strategies for promoting walking across various dimensions [^36]. Kanchik (2017) examined the health impacts of enhanced walkability modeling, revealing connections between architectural elements, perceived safety, physical activity, and overall well-being [^37]. Additionally, Deng and Zhang (2018) emphasized their research on neighborhood walkability models, providing urban planners with standardized benchmarks derived from a walking speed index and walkability maps [^38], thus facilitating urban improvement strategies [^39].\r
\r
The studies mentioned above aim to improve neighborhood walkability through pedestrian simulations, benchmarking, and promoting walking to understand its impact on factors like walking frequency, physical activity, safety, and well-being, ultimately enhancing residents’ quality of life in cities. Although these studies do not specifically simulate individual or group movements iteratively in ABMS, they lay the groundwork for future research, including our ongoing research, which aims to enhance accessibility and connectivity. Additionally, they provide a theoretical foundation for understanding how ABMS can be used to parameterize route simulations considering multiple criteria such as greenness, distance to transit, safety perceptions, physical activities, health, and destination accessibility. These studies uncover the complex factors that impact walking behaviors, neighborhood walkability, and the interconnectedness of elements like buildings, safety perceptions, physical activities, and health.\r
\r
Furthermore, prior research has highlighted the potential of integrating ABMS into upcoming studies to explore a shared vision [^40], [^41], [^42]. This approach leads to a deeper understanding and supports data-driven decisions as reliable problem-solving methods [^42], which can ultimately enhance walkability and promote healthier living environments [^34]. There is also a growing interest in ABMS within architectural research due to its ability to replicate complex structures and behavioral dynamics [^41], [^43]. However, current ABMS applications mainly focus on understanding agent capabilities and behaviors, analyzing interaction patterns, and simplifying model representations [^44]. As a result, in our study, we will further enhance the ABMS method, especially by using ABM to model walkability and optimize movement in urban areas through a novel method that extensively utilizes pedestrian pathways (Routes) along with urban architecture, public spaces, and green spaces (Nodes). This will uncover new facets of walkability modeling within transit-oriented movement.\r
\r
## Research gap\r
\r
To fill the existing research gap in WM, a new approach is essential. This approach involves analyzing the behavioral patterns of individuals and relevant urban features, translating them into computational data, and establishing customized parameters that align with walkability principles, creating livable cities, promoting health, and integrating transportation systems like TOD [^15], [^19], [^20], [^21], [^32].\r
\r
Utilizing crowdsourcing platforms such as OpenStreetMap (OSM) and Google Maps Typical Traffic [^45], [^46]–[^48]. in conjunction with field walkability observations for ABMS, is crucial for understanding the unique characteristics of each city [^12], [^49], [^50], [^51], [^52], [^53]. By incorporating quantitative data and algorithms, we can enhance the simplified route trails generated by ABMS [^15], [^54], [^55] preparing them for optimization using a multi-objective approach to effectively tackle urban walkability challenges [^56]. To ensure practical applicability, clustering methods are then applied to organize various approaches, algorithms, methods, and related elements iteratively, based on theoretical frameworks and practical contexts within WM. This clustering process aims to define Nodes and Routes effectively when implemented contextually.\r
\r
The approach mentioned above is termed the dynamic multi-layer (DML) method, which integrates algorithms such as Laplacian smoothing for trail refinement [^57], [^58], A-star for finding the shortest path [^59], [^60], [^61], NSGA-2 for evolutionary multi-objective optimization (EMOO) [^62], [^63], and iterative clustering to refine trails and determine optimal solutions into a single, optimal solution. The [Method](#method) section will provide detailed explanations of this DML approach.\r
\r
In summary, implementing this layered strategy in DML within WM can address current limitations, optimize Nodes and Routes for pedestrian-centric urban design, and enhance connectivity in urban communities.\r
\r
The paper is structured as follows: The [Case study](#case-study) section introduces the context in which the DML method is applied to address urban walkability challenges. The [Method](#method) section outlines the formulation and explanation of the DML method, including dependencies between each layer parameter. The [Discussions](#discussions 'Go to: Discussions') section examines the key findings of the DML method and its practical implications. The [Limitations](#limitations 'Go to: Limitations') section identifies potential constraints and opportunities within the study. Finally, the [Conclusion](#conclusion 'Go to: Conclusion') section concludes and emphasizes the significance of the research, highlighting the importance of the DML method and providing implementation recommendations to relevant stakeholders.\r
\r
# Case study\r
\r
In this section, we will elaborate on the rationale for selecting the Kalideres region in Jakarta as the representative application of the DML method, taking into account its unique contextual characteristics [^53].\r
\r
## Urban mobility challenges in Kalideres, Jakarta\r
\r
Jakarta, Indonesia’s capital, grapples with significant urban walkability challenges. Specifically, the city suffers from a lack of pedestrian-friendly infrastructure, exemplified by poorly maintained footbridges that force pedestrians into risky behaviors like jaywalking [^64] A study conducted by Leather et al. at the Asian Development Bank (ADB) using the Global Walkability Index (GWI) revealed low ratings across residential, educational, commercial, and public transport zones, underscoring Jakarta’s substantial deficiencies compared to other Asian cities [^65], [^66].\r
\r
{/* prettier-ignore */}\r
<MarkdownImage id="fig1" src={fig1} w75>Demand for TransJakarta buses in Jakarta, depicting daily passenger statistics of 8,632 on buses, sourced from the Pedestrian Facility Design Guidelines DKI Jakarta 2017–2022 by ITDP [^67].</MarkdownImage>\r
\r
In the context of Kalideres, located in West Jakarta, there is a notable transit volume compared to other regions in Jakarta, as depicted in <MarkdownCrossRefFigure i={1} />. The area also contends with a dense population, inadequate law enforcement, and a disjointed urban transport system between the Kalideres Terminal and Station [^68]. Consequently, Kalideres experiences frequent traffic congestion, prolonged vehicle idling, and the presence of unlicensed informal vendors [^69]. As of June 2022, Kalideres has been officially designated for development into a major transportation hub [^70], aiming to establish seamless connectivity to Tangerang City in the west and serve as a crucial transit point for national routes, including those leading to destinations like Sumatra Island and Bali Island via the Indonesian National Route 1, a segment of the Asian Highway 2 (AH2) [^71]. This development holds potential benefits for achieving the research objectives.\r
\r
{/* prettier-ignore */}\r
<MarkdownImage id="fig2" src={fig2} w75>The satellite view of the Kalideres region highlights a significant traffic bottleneck in the highlighted area, with base satellite imagery sourced from Google Maps [^72]. Details labeled as (a) and (b) are shown in <MarkdownCrossRefFigure i={3} />.</MarkdownImage>\r
\r
<MarkdownCrossRefFigure i={2} /> provides a satellite image showcasing Kalideres, highlighting the density of residential areas (including informal and landed housing), commercial zones (ranging from micro to major enterprises), wetlands (such as paddy fields), and transportation systems (including paratransit, traditional, and rapid transit), as well as industrial zones (ranging from small to large-scale industries) overflowing in this area. Additionally, the central terminal’s location underscores the necessity of a proper transit system to accommodate the rapidly growing population [^32].\r
\r
{/* prettier-ignore */}\r
<MarkdownImage id="fig3" src={fig3} w75>Field walkability observations in front of the Kalideres Terminal highlight several issues: (a1) lack of border separating pedestrian walkways from the Moonkevart river, with unattended urban utilities; (a2) multiuse pedestrian walkway above culverts lacking safety standards [^73]; (a3) narrowed pathways causing potential congestion; (a4 and b1) congestion of large buses due to narrowed lanes; (b3) characteristics of local paratransit (angkot); (b3) presence of informal traders/hawkers due to congestion; (b4) narrowing of pedestrian walkways due to hawkers; (b5) signage at Kalideres Terminal.</MarkdownImage>\r
\r
From a connectivity standpoint, arterial roads face congestion due to the mix of pedestrians, private vehicles, and public transport, leading to bottlenecks. <MarkdownCrossRefFigure i={3} /> illustrates that pedestrian movement is restricted by a car-oriented system implemented in this area, resulting in longer travel distances and durations. This contradicts the principles of walkability advocated by TOD and the sustainable city concept [^32], [^74], [^75]. Therefore, the fundamental need for spacious sidewalks to enhance pedestrian and cyclist movements becomes evident.\r
\r
## Physical activities and green spaces challenges\r
\r
Emergent challenges related to physical activity and green spaces are also evident in Jakarta [^76], [^77]. For instance, 65% of pedestrian overpasses remain underutilized [^65]. Issues such as jaywalking and inadequate urban features at locations like Kalideres Terminal restrict physical activity opportunities and contribute to less stimulating environments, potentially leading to stress and risky behaviors [^78]. To address these challenges, it is recommended to integrate visual attractions along pedestrian pathways (Routes) to enhance the overall experience and promote healthier behaviors [^78]. Additionally, implementing TOD principles in areas like Kalideres and prioritizing urban green open spaces (UGOS) can enhance attractiveness and encourage pedestrian activity.\r
\r
Aligning WM simulations with TOD principles supports the development of UGOS through modeling, indirectly improving transportation efficiency by promoting human-oriented movement and enhancing public health and well-being through increased green spaces [^79], [^80], [^81]. Integrating UGOS with public facilities like commuter rest areas provides socio-economic benefits. As of December 2022, Jakarta had limited public space (PS) and only one transit hub under construction [^82]. Additionally, the UGOS footprint in Jakarta has decreased to 110.45 km² [^83]. Therefore, strategically placing UGOS as public spaces at intervals of 400–800 meters based on TOD principles is necessary to ensure community liveliness and well-being [^73], [^84], [^85].\r
\r
These challenges highlight the importance of further exploring the DML method for WM development. Insights from WM can guide the placement of urban features, particularly public spaces acting as Nodes for rest areas. A comprehensive urban design approach focusing on pedestrian and cycling amenities aligned with TOD principles can help reduce pollution and traffic incidents in the city [^86]. Analyzing junctions, interactions, and crowd dynamics within WM can uncover patterns to inform advanced modeling methods for addressing challenges at critical intersections.\r
\r
# Method\r
\r
## Research framework\r
\r
The dynamic multi-layer (DML) method is conceptually formulated based on the theoretical framework and the preceding case study. This method employs interconnected dynamic strategies operating layer by layer, with dependencies between sub-layers as depicted in <MarkdownCrossRefFigure i={4} />. It’s important to note that while the methods outlined are partially contextualized within the selected experimental case study [^64], [^68], [^69], [^83], [^87], [^88], adjustments may be necessary in different contexts [^53]. Customization according to the project’s nature, context, or established environment will be highlighted in subsequent paragraphs when relevant.\r
\r
The DML method provides a solution for cities aiming to plan and design based on best practices in urban planning and design principles. It integrates planning for UGOS and PS to promote healthy urban environments [^11], [^13], [^80], [^81], [^85], focuses on transit hub (TH) placement according to walkability principles in TOD [^32], [^67], [^73], [^86], and implements physically-oriented linkages between TH and PS with UGOS included for optimized accessibility within TOD radius principles [^73], [^75], [^85], [^89]. In conclusion, this method cohesively integrates multiple approaches to orchestrate an optimal solution (design guideline).\r
\r
<MarkdownImage id="fig4" src={fig4} title="The framework of the dynamic multi-layer (DML) method." isInvert w75 />\r
\r
<MarkdownCrossRefFigure i={4} /> illustrates the six-layer DML approach, with each layer managing distinct input-output data interactions. Subsequent layers build upon insights from previous ones, processing data using predetermined algorithms and parameters. Layers 1 to 4 prioritize walkability data generation, while Layer 5 focuses on simulation and optimization, and Layer 6 manages data clustering based on simulation outcomes. The following overview outlines how the DML addresses the walkability challenge through integrated TH and PS placements, with detailed explanations of each layer’s operation within the selected case study provided in subsequent sections.\r
\r
1. Layer 1: Data gathering & modeling preparation, focuses on understanding the environment and human behavior through detailed data gathering. It establishes a unique context profile and characteristics (UCPC) by considering parameters such as typical traffic [^49], walkability, behavior, negative–positive, and solid–void [^49], [^90].\r
2. Layer 2: Predicting the dynamic model of a complex system, builds upon Layer 1 and predicts human movement behavior within the environment using dynamic modeling techniques to customize the settings of attraction nodes, generating results referred to as human trails and potential composition (HTPC) [^50], [^91].\r
3. Layer 3: Simplifying the trails, aims to simplify the complex HTPC generated in Layer 2 for easier interpretation and analysis. It utilizes the Laplacian smoothing algorithm to refine the trails iteratively [^57], [^58].\r
4. Layers 4 and 5: Defining and optimizing the objectives. Layer 4 sets clear goals for the optimization process in Layer 5 based on a clear understanding of the context and human behavior. It utilizes the A-star algorithm [^59], [^61] for efficient pathfinding [^92], [^93], [^94], [^95] and defines objective parameters related to people, attraction nodes, PS, spatial formation, and TOD principles. Layer 5 focuses on optimizing the objectives formulated in Layer 4 by minimizing values between refined parameters. It aims to identify solution candidates using the NSGA-2 algorithm [^62], [^63].\r
5. Layer 6: Clustering & selecting the best solution, solution candidates undergo clustering and evaluation based on predetermined criteria from Layers 1 to 5. Solutions are considered using various approaches such as Machine-[^96], Algorithm-[^97], Collaborative-[^98], and Context-driven [^53] methods, guiding the implementation of the most suitable solution for the selected context [^99].\r
\r
## Layer 1: Data gathering & modeling preparation\r
\r
<MarkdownImage id="fig5" src={fig5} title="The taxonomy of routes in Kalideres, based on traffic movement in field walkability observations." isInvert w75 />\r
\r
Layer 1 involved analyzing traffic congestion and pedestrian flow using field walkability observations (<MarkdownCrossRefFigure i={3} />). Digital tools like Rhino [^100], Grasshopper [^101], and Caribou [^102] were utilized to map the environment and create a base map (<MarkdownCrossRefFigure i={5} /> ). Observing emergent behaviors, we used crowdsourced data from Google Maps Typical Traffic to track traffic congestion [^47], [^48], [^103], [^104], influencing pedestrian movements collected from 6 a.m. to 10 p.m., as shown in <MarkdownCrossRefFigure i={6} /> (a).\r
\r
<MarkdownImage id="fig6" src={fig6} title="(a) Graphical representations of route segments based on ranking metrics; (b) an ABMS point map with agents (AR, AT) and targets (T1, T2)." isInvert w75 />\r
\r
<MarkdownCrossRefFigure i={6} l="(a)" /> displays Google Maps Typical Traffic data transformed into a ranking schema categorizing traffic densities into three levels: low, moderate, and high. Each route is assigned “Total points” and “Rank” per day per 1-hour timestep, allowing us to identify route segments affected by significant bottlenecks [^48]. This enables ABMS representation of agents and targets in the environment. Concurrently, <MarkdownCrossRefFigure i={6} l="(b)" /> depicts:\r
\r
- T1: Primary target for high-density areas, totaling 16 nodes.\r
- T2: Secondary target for moderately dense regions, totaling 22 nodes.\r
- AT: Transit-centric agent for arrival/departure epicenters, totaling 25 nodes.\r
- AR: Resident-centric agent for nodes from residential areas, totaling 49 nodes.\r
\r
## Layer 2: Predicting the dynamic model of a complex system\r
\r
Layer 2 employs the ABMS framework to predict complex movement patterns. This framework generates representation configurations based on behavior data collected during field walkability observations, creating unique agent configurations for AR, AT, T1, and T2 as informed by Layer 1 insights. Utilizing Grasshopper [^101] and the open-source framework Quelea [^105], the simulation demonstrates the iterative behavioral functionalities of each agent group, as outlined in <MarkdownCrossRefTable i={1} />. To ensure simulation consistency, <MarkdownCrossRefTable i={2} /> summarizes the global settings employed for the ABMS.\r
\r
<MarkdownTable id="table1">\r
  <MarkdownTableCaption title="Per iteration settings (customized) for ABMS." />\r
  <thead>\r
    <tr>\r
      <th rowSpan={2}>Iteration</th>\r
      <th rowSpan={2}>Agent Type</th>\r
      <th rowSpan={2}>Properties</th>\r
      <th colSpan={2}>Setting</th>\r
      <th></th>\r
    </tr>\r
    <tr>\r
      <th>Wandering</th>\r
      <th>Align Force</th>\r
    </tr>\r
  </thead>\r
  <tbody>\r
    <tr>\r
      <td>1</td>\r
      <td>For students and professionals</td>\r
      <td>Activate</td>\r
      <td>Deactivate</td>\r
    </tr>\r
    <tr>\r
      <td>2</td>\r
      <td>Solo Walking</td>\r
      <td>For leisure walkers</td>\r
      <td>Deactivate</td>\r
      <td>Deactivate</td>\r
    </tr>\r
    <tr>\r
      <td>3</td>\r
      <td>Group Touring</td>\r
      <td>For group tours</td>\r
      <td>Deactivate</td>\r
      <td>Activate</td>\r
    </tr>\r
  </tbody>\r
</MarkdownTable>\r
\r
<MarkdownTable id="table2">\r
  <MarkdownTableCaption title="Global settings for ABMS." />\r
  <thead>\r
    <tr>\r
      <th>Setting</th>\r
      <th>Properties</th>\r
      <th>Value</th>\r
    </tr>\r
  </thead>\r
  <tbody>\r
    <tr>\r
      <td>Particle Settings</td>\r
      <td>Lifespan</td>\r
      <td>−1</td>\r
    </tr>\r
    <tr>\r
      <td></td>\r
      <td>Mass</td>\r
      <td>50</td>\r
    </tr>\r
    <tr>\r
      <td></td>\r
      <td>Body size</td>\r
      <td>50</td>\r
    </tr>\r
    <tr>\r
      <td></td>\r
      <td>History length</td>\r
      <td>500</td>\r
    </tr>\r
    <tr>\r
      <td>Agent Settings</td>\r
      <td>Max speed</td>\r
      <td>10</td>\r
    </tr>\r
    <tr>\r
      <td></td>\r
      <td>Threshold</td>\r
      <td>2.5</td>\r
    </tr>\r
    <tr>\r
      <td></td>\r
      <td>Vision radius</td>\r
      <td>50</td>\r
    </tr>\r
    <tr>\r
      <td></td>\r
      <td>Vision angle</td>\r
      <td>360 (degree)</td>\r
    </tr>\r
    <tr>\r
      <td>Emitter Settings</td>\r
      <td>Creation rate</td>\r
      <td>1</td>\r
    </tr>\r
    <tr>\r
      <td></td>\r
      <td>Points (AR)</td>\r
      <td>49</td>\r
    </tr>\r
    <tr>\r
      <td></td>\r
      <td>Points (AT)</td>\r
      <td>25</td>\r
    </tr>\r
    <tr>\r
      <td></td>\r
      <td>Quelea (AR)</td>\r
      <td>10</td>\r
    </tr>\r
    <tr>\r
      <td></td>\r
      <td>Quelea (AT)</td>\r
      <td>40</td>\r
    </tr>\r
    <tr>\r
      <td></td>\r
      <td>Velocity (AR)</td>\r
      <td>0.5, 0.5, 0 (vector)</td>\r
    </tr>\r
    <tr>\r
      <td></td>\r
      <td>Velocity (AT)</td>\r
      <td>2, 2, 0 (vector)</td>\r
    </tr>\r
    <tr>\r
      <td>System (Particle Rules)</td>\r
      <td>Arrived radius (T1)</td>\r
      <td>8</td>\r
    </tr>\r
    <tr>\r
      <td></td>\r
      <td>Arrived radius (T2)</td>\r
      <td>13</td>\r
    </tr>\r
    <tr>\r
      <td>System (Agents Rules)</td>\r
      <td>Vision radius multiplier</td>\r
      <td>0.9</td>\r
    </tr>\r
    <tr>\r
      <td></td>\r
      <td>Min time to collision</td>\r
      <td>9 units</td>\r
    </tr>\r
    <tr>\r
      <td></td>\r
      <td>Potential collision distance</td>\r
      <td>100 units</td>\r
    </tr>\r
  </tbody>\r
</MarkdownTable>\r
\r
<MarkdownImage id="fig7" src={fig7} title="Aggregated results from Iterations 1, 2, and 3." isInvert w75 />\r
\r
After 300 iterative steps per iteration, <MarkdownCrossRefFigure i={7} /> presents superimposed results that unveil patterns across iterations. In Iteration 1, agent navigation exhibits a smoother flow. By Iteration 2, agents cluster in bustling zones, and by Iteration 3, dense congregations emerge around areas such as T1 and T2. These dense areas, particularly those near high-traffic zones, become congestion hotspots due to their population density. The simulations also identify primary axes at road segment intersections, providing insights for urban renewal and infrastructure enhancements aligned with walkability principles.\r
\r
## Layer 3: Simplifying the trails\r
\r
Layer 3 abstracts data from three iterations in Layer 2, synthesized in <MarkdownCrossRefFigure i={7} /> and elaborated in <MarkdownCrossRefFigure i={8} />. The methodology utilizes the Laplacian smoothing technique [^57], [^58], originally developed by Field [^55] and refined by Pryor and Zwierzycki [^106], focusing on average calculations of nearby nodes. Its algorithm includes:\r
\r
1. Maintaining consistent spacing of 25m between nodes along curve trails.\r
2. Identifying uniformly segmented spaces as modifiable modal points.\r
3. Categorizing modal points based on their position: start, end, or intermediate nodes.\r
4. Iteratively adjusting intermediate nodes using a loop method based on their relative positions and average values [^107], simulating magnet-like behavior with the loop algorithm from Anemone [^108].\r
5. Choosing the final outputs, known as smoothed curve trails, to preserve essential data while avoiding excessive refinement.\r
\r
<MarkdownImage id="fig8" src={fig8} title="Iterative curve trail-smoothing stages, with the selected 10th iteration highlighted by a dashed border." isInvert w75 pagefindMeta />\r
\r
<MarkdownCrossRefFigure i={8} /> illustrates the algorithm procedure, particularly spotlighting the 10th iteration for its well-maintained balance between the original trail’s complexity and simplicity. In this stage, the primary trails begin to blend harmoniously with the environment, paving the way for further analysis in the subsequent layer. The next layer concentrates on defining mesh space through the shortest path algorithm (SPA), in line with TOD Standard 3.0 [^73] and Sustainable Development Goal 11 [^109], highlighting urban design enhancement and resilient transportation infrastructure.\r
\r
## Layers 4 and 5: Defining and optimizing the objectives\r
\r
Layers 4 and 5 synergize to optimize solution candidates effectively. Layer 4, depicted in <MarkdownCrossRefFigure i={9} />, illustrates the evolution of simplified trails across six iterations. Its algorithmic steps include:\r
\r
1. Smoothing the simple trails to rationalize geometries for faster calculations.\r
2. Offsetting all curves to create a bounding box for the outer boundary of trails.\r
3. Further simplifying the trails to ensure consistency and computational efficiency.\r
4. Utilizing simplified boundary lines to generate a triangulation mesh for graph preparation for the shortest path algorithm (SPA).\r
5. Transforming the triangulation mesh into a mesh of near-equilateral triangles using the TriRemesh component from Kangaroo2 [^110].\r
6. Simulating the shortest path using the A-star algorithms for SPA, including graphs for the path, start and end points, and employing the shortest path component from Arachne [^111] for simulation.\r
\r
<MarkdownImage id="fig9" src={fig9} title="Iteration process for the shortest path from Layer 3’s trails." isInvert w75 />\r
\r
After iterative refinement, the baseline trails have the potential to evolve into optimal routes, enhancing walkability and aligning with TOD and Sustainability Development Goals principles. These optimized routes play a crucial role in improving physical activities and upgrading public transportation in densely populated areas. As mentioned earlier, the design objectives will focus on promoting the use of PS and integrating them with UGOS, guided by the baseline trails segmented by length. It is noteworthy that in this experiment, the start point functions as the TH, serving as a central coordinate (the intersection), while intermediate and end points serve as PS coordinates, providing resting areas for commuters. Additionally, the function of this objective can be adjusted based on context, while in this study, only the functions TH and PS are utilized.\r
\r
In Layer 5, the primary objective is to conduct an EMOO using NSGA-2 algorithm [^62], [^63] to identify the best solutions in line with walkability principles. The fitness objectives (FO) [^112] detailed in <MarkdownCrossRefTable i={3} />, along with considerations outl ined in <MarkdownCrossRefTable i={4} />, are crucial for determining optimal positions for PS aligned with TH central points and evaluating their compatibility with the environment. Integrated PS with UGOS [^113] can serve as Nodes or places for placemaking, enhancing community interaction and well-being, while Routes act as transit stops for facilitating smooth mobility and efficient transportation systems [^2], [^114], [^115].\r
\r
<MarkdownTable id="table3">\r
  {/* prettier-ignore */}\r
  <MarkdownTableCaption>FO definitions for EMOO (T1 and T2 coordinates shown in <MarkdownCrossRefFigure i={6} />).</MarkdownTableCaption>\r
  <thead>\r
    <tr>\r
      <th>FO</th>\r
      <th>FO Definition</th>\r
      <th>Metric</th>\r
    </tr>\r
  </thead>\r
  <tbody>\r
    <tr>\r
      <td>1</td>\r
      <td>Average PS to T1 route distance</td>\r
      <td>Coordinate to coordinate (m)</td>\r
    </tr>\r
    <tr>\r
      <td>2</td>\r
      <td>Average PS to T2 route distance</td>\r
      <td>Coordinate to coordinate (m)</td>\r
    </tr>\r
    <tr>\r
      <td>3</td>\r
      <td>Average PS to PS route distance</td>\r
      <td>Coordinate to coordinate (m)</td>\r
    </tr>\r
    <tr>\r
      <td>4</td>\r
      <td>Total Voronoi area (500m from PS)</td>\r
      <td>Area of Voronoi radii (m²)</td>\r
    </tr>\r
    <tr>\r
      <td>5</td>\r
      <td>Total PS</td>\r
      <td>Total count (number)</td>\r
    </tr>\r
  </tbody>\r
</MarkdownTable>\r
\r
<MarkdownTable id="table4">\r
  <MarkdownTableCaption title="Main objective considerations for urban in general for each FO. Kalideres contexts are marked with an asterisk (*) (D = Directly considered, M = Mostly considered, I = Indirectly considered)." />\r
  <thead>\r
    <tr>\r
      <th>Objectives</th>\r
      <th>FO1</th>\r
      <th>FO2</th>\r
      <th>FO3</th>\r
      <th>FO4</th>\r
      <th>FO5</th>\r
    </tr>\r
  </thead>\r
  <tbody>\r
    <tr>\r
      <td>Enhancing visual attractions [^78] and walkability principles [^1], [^3]</td>\r
      <td>D</td>\r
      <td>D</td>\r
      <td>D</td>\r
      <td>D</td>\r
      <td>D</td>\r
    </tr>\r
    <tr>\r
      <td>Managing transit volume [^7], reducing vehicle idling, and controlling informal vendors [^69]*</td>\r
      <td>M</td>\r
      <td>M</td>\r
      <td>M</td>\r
      <td>M</td>\r
      <td>D</td>\r
    </tr>\r
    <tr>\r
      <td>Reducing commute times [^18] and lessening cardependence [^17]</td>\r
      <td>D</td>\r
      <td>D</td>\r
      <td>I</td>\r
      <td>I</td>\r
      <td>I</td>\r
    </tr>\r
    <tr>\r
      <td>Utilizing pedestrian infrastructure [^65] and reducing jaywalking [^64]*</td>\r
      <td>D</td>\r
      <td>D</td>\r
      <td>D</td>\r
      <td>M</td>\r
      <td>D</td>\r
    </tr>\r
    <tr>\r
      <td>Enhancing transit connectivity [^1], [^2], [^3], [^4], [^5] and reorganizing facilities [^32]</td>\r
      <td>D</td>\r
      <td>D</td>\r
      <td>D</td>\r
      <td>M</td>\r
      <td>D</td>\r
    </tr>\r
    <tr>\r
      <td>Promoting a healthier city [^4], [^12] and improving physical activity [^1], [^2], [^3], [^4], [^5]</td>\r
      <td>D</td>\r
      <td>D</td>\r
      <td>D</td>\r
      <td>D</td>\r
      <td>D</td>\r
    </tr>\r
    <tr>\r
      <td>Implementing public space as a low-cost local strategy11 and connecting it to TH [^68]</td>\r
      <td>I</td>\r
      <td>I</td>\r
      <td>I</td>\r
      <td>M</td>\r
      <td>D</td>\r
    </tr>\r
  </tbody>\r
</MarkdownTable>\r
\r
The genes [^116] for this simulation are constructed based on distances between potential TH and PS coordinate points, following TOD Standard 3.0 benchmarks [^73]. These distances range from 300m to 500m in 10m intervals. After formulating the FO and genes, the EMOO is executed using customized settings detailed in <MarkdownCrossRefTable i={5} />.\r
\r
<MarkdownTable id="table5">\r
  <MarkdownTableCaption title="Simulation settings for multi-objective optimization in Layer 5." />\r
  <thead>\r
    <tr>\r
      <th>Parameter</th>\r
      <th>Value Property</th>\r
      <th>Value</th>\r
    </tr>\r
  </thead>\r
  <tbody>\r
    <tr>\r
      <td rowSpan="3">Population Settings</td>\r
      <td>Population Size</td>\r
      <td>2,500</td>\r
    </tr>\r
    <tr>\r
      <td>Population Count</td>\r
      <td>50</td>\r
    </tr>\r
    <tr>\r
      <td>Population Size</td>\r
      <td>50</td>\r
    </tr>\r
    <tr>\r
      <td rowSpan="4">Algorithm Parameters</td>\r
      <td>Crossover Probability</td>\r
      <td>0.9</td>\r
    </tr>\r
    <tr>\r
      <td>Mutation Rate</td>\r
      <td>1/n</td>\r
    </tr>\r
    <tr>\r
      <td>Mutation & Crossover Distribution Indices</td>\r
      <td>20</td>\r
    </tr>\r
    <tr>\r
      <td>Random Seed</td>\r
      <td>1</td>\r
    </tr>\r
    <tr>\r
      <td rowSpan="3">Simulation Parameters</td>\r
      <td>No. of Genes (Sliders)</td>\r
      <td>9</td>\r
    </tr>\r
    <tr>\r
      <td>No. of Values (Slider Values)</td>\r
      <td>189</td>\r
    </tr>\r
    <tr>\r
      <td>Max No. of FO</td>\r
      <td>5</td>\r
    </tr>\r
  </tbody>\r
</MarkdownTable>\r
\r
<MarkdownImage id="fig10" src={fig10} title="Representative samples of solutions with Diamond Fitness Charts (DFC) in the top-right corner of each solution." isInvert w75 />\r
\r
Upon simulating with the settings in <MarkdownCrossRefTable i={5} /> (results shown in <MarkdownCrossRefFigure i={10} /> ), the evaluation utilizes Wallacei’s features116, including the Parallel Coordinate Plot (PCP), Standard Deviation Graph (SDG), and Fitness Value Graph (FVG). <MarkdownCrossRefFigure i={11} /> illustrates consistent results:\r
\r
1. Most FO values converge, except for FO5, showing tolerable fluctuations due to minor variations in observed PS numbers, as seen in the PCP and SDG.\r
2. The 3D objective space indicates the Pareto front’s movement toward coordinates (0,0,0) with each simulation generation [^116].\r
3. The EMOO and analysis confirm the effectiveness of the evolutionary method in generating numerous solutions from a vast search space. The simulation’s efficiency is highlighted by a runtime duration of about 23mins and 42s.\r
\r
With this comprehensive data, the next layer will employ solution clustering using ISOA techniques to select the best solution as a design guideline [^99].\r
\r
<MarkdownImage id="fig11" src={fig11} title="Simulation results featuring (a) PCP visualization, (b) Pareto front of 2,500 solutions, and (c) comprehensive graphs illustrating FO1–FO5 across FVG, SDG, and SDT." isInvert w75 />\r
\r
## Layer 6: Clustering & selecting the best solution\r
\r
<MarkdownImage id="fig12" src={fig12} title="Framework of the iterative solution optimization approach (ISOA)." isInvert w75 />\r
\r
Layer 6 compiles the solution candidates output from Layer 5 and iterates them into the best optimal solution using the iterative solution optimization approach (ISOA) as a future design guideline. <MarkdownCrossRefFigure i={12} /> shows how ISOA combines four methods: Machine-, Algorithm-, Collaborative-, and Context-driven. The detailed ISOA formulations are outlined in <MarkdownCrossRefTable i={6} />, highlighting their objectives and flexibility in adapting to various problem contexts. We utilize Machine-driven solutions with Wallacei’s analytical features with customizable parameters, while Algorithm-driven solutions are based on Rhino & Grasshopper and can be adjusted parametrically. Collaborative- and Context-driven solutions are developed in Microsoft Excel as needed.\r
\r
{/* prettier-ignore */}\r
<MarkdownTable id="table6">\r
  {/* prettier-ignore */}\r
  <MarkdownTableCaption>Overview of iterations and objectives for each approach in the ISOA (<MarkdownCrossRefFigure i={12} />).</MarkdownTableCaption>\r
  <thead>\r
    <tr>\r
      <th>Approach</th>\r
      <th>Iteration</th>\r
      <th>Objective</th>\r
      <th>Tools</th>\r
    </tr>\r
  </thead>\r
  <tbody>\r
    <tr>\r
      <td rowspan="2">Machine-driven</td>\r
      <td>Iter₀</td>\r
      <td>Evolutionary simulation in Layer 5 generates solution candidates (<MarkdownCrossRefFigure i={11} />).</td>\r
      <td>Rhino, Grasshopper, Wallacei</td>\r
    </tr>\r
    <tr>\r
      <td>Iter₁</td>\r
      <td>K-means clustering algorithm segments solutions from Iter₀ into five clusters (<MarkdownCrossRefFigure i={13} />).</td>\r
      <td>Rhino, Grasshopper, Wallacei</td>\r
    </tr>\r
    <tr>\r
      <td rowspan="4">Algorithm-driven</td>\r
      <td>Iter₂</td>\r
      <td>Assigns index scores to FO solutions from Iter₁ based on prioritization in the given context (<MarkdownCrossRefFigure i={14} />).</td>\r
      <td>Rhino, Grasshopper</td>\r
    </tr>\r
    <tr>\r
      <td>Iter₃</td>\r
      <td>Highlights the top 20 values for each objective solution from Iter₂ (<MarkdownCrossRefFigure i={14} />).</td>\r
      <td>Rhino, Grasshopper</td>\r
    </tr>\r
    <tr>\r
      <td>Iter₄</td>\r
      <td>Merges data output from Iter₂ and Iter₃ (<MarkdownCrossRefFigure i={14} />).</td>\r
      <td>Rhino, Grasshopper</td>\r
    </tr>\r
    <tr>\r
      <td>Iter₅</td>\r
      <td>Identifies top domination solutions from Iter₄ (<MarkdownCrossRefFigure i={14} />).</td>\r
      <td>Rhino, Grasshopper</td>\r
    </tr>\r
    <tr>\r
      <td>Collaborative-driven</td>\r
      <td>Iter₆</td>\r
      <td>Identifies new visual clusters based on FO recognition from Iter₅ solutions using DF charts (<MarkdownCrossRefFigure i={15} />).</td>\r
      <td>Microsoft Excel</td>\r
    </tr>\r
    <tr>\r
      <td rowspan="3">Context-driven</td>\r
      <td>Iter₇</td>\r
      <td>Select the highest-scored indexed visual cluster from Iter₆ solutions using the same indexing method as Iter₂ (<MarkdownCrossRefFigure i={16} />).</td>\r
      <td>Microsoft Excel</td>\r
    </tr>\r
    <tr>\r
      <td>Iter₈</td>\r
      <td>Customizes indexing based on route length in the first radius of TOD and calculates it for Iter₇ solutions (<MarkdownCrossRefFigure i={17} />).</td>\r
      <td>Microsoft Excel</td>\r
    </tr>\r
    <tr>\r
      <td>Iter₉</td>\r
      <td>Recalculates output from Iter₈ to find a design guide with customized indexing based on route length, aiming to discover the best routes to the main traffic based on potential TOD connectivity, specifically the South Route (<MarkdownCrossRefFigure i={17} /> and <MarkdownCrossRefFigure i={18} />).</td>\r
      <td>Microsoft Excel</td>\r
    </tr>\r
  </tbody>\r
</MarkdownTable>\r
\r
### Machine-driven methods\r
\r
<MarkdownImage id="fig13" src={fig13} title="K-means clustering of all generations." w75 />\r
\r
In this approach, Iter₀ consists of solution candidates from Layer 5, optimized through EMOO, resulting in 2,500 solutions. <MarkdownCrossRefFigure i={13} /> shows Iter₁, where the K-means clustering algorithm is applied to Iter₀, generating five clusters based on solution characteristics, resulting in 263 solutions distributed across these clusters.\r
\r
### Algorithm-driven methods\r
\r
<MarkdownImage id="fig14" src={fig14} title="Algorithm-driven methods formulated in Grasshopper." isInvert />\r
\r
In this approach, the progression through four stages, as referred to in <MarkdownCrossRefFigure i={14} />, is described as follows:\r
\r
1. In Iter₂, 263 solutions from Iter₁ are analyzed based on five FO functions ($\${\\text{FO}}_i$$), each with a specific weight distribution ($$w_{{\\text{FO}}_i}$$) as outlined in <MarkdownCrossRefTable i={3} /> and <MarkdownCrossRefTable i={4} />. The equation for Iter₂ is $\${\\text{Iter}}_2 = \\text{Top}\\left(\\sum_{i=1}^{m}\\frac{{\\text{FO}}_i}{w_{{\\text{FO}}_i}}\\right)$$, resulting in 81 solutions.\r
1. Iter₃ focuses on the top 20 values for each of the five objective functions, leading to $\${\\text{Iter}}_3 = \\text{Top20}\\left({\\text{Iter}}_2\\right)$$ and the selection of 100 potential solutions, of which 56 are unique.\r
1. Iter₄ combines data subsets from Iter₂ and Iter₃ to create an integrated set of 181 solutions. Finally, Iter₅ identifies recurring index values as “dominant solution” values from the 181 solutions, resulting in a refined list of 29 solutions using $\${\\text{Iter}}_5 = \\text{Top}\\left(\\text{Dominant Solution}, {\\text{Iter}}_4\\right)$$.\r
\r
### Collaborative-driven methods\r
\r
<MarkdownImage id="fig15" src={fig15} title="Map legend for PS coordinates and associated variables in Iter₈ and Iter₉." isInvert w75 />\r
\r
In this approach, Iter₆ evaluates the 29 solutions from Iter₅ by visually categorizing them using DFC radar plots to establish clusters. <MarkdownCrossRefFigure i={15} /> illustrates how each solution is grouped based on visual similarities in objective patterns, resulting in the identification of four distinct clusters.\r
\r
### Context-driven methods\r
\r
<MarkdownImage id="fig16" src={fig16} title="Clustering process in Iter₇ based on custom weight formula for each FO." isInvert w75 />\r
\r
In this approach, Iter₇ identifies the dominant cluster from Iter₆. <MarkdownCrossRefFigure i={16} /> demonstrates the application of a customized weight formula for each FO, similar to the customized weighted considerations in Iter₂. The weights assigned to Clusters 1 to 4 are: 240, 190, 160, and 200. An asterisk value after 240 indicates the primary cluster with the highest cumulative sum of weights among all clusters.\r
\r
<MarkdownImage id="fig17" src={fig17} title="Clustering process in Iter₇ based on custom weight formula for each FO." isInvert w75 />\r
\r
In Iter₈, each direction (east, south, and west) is assigned a route orientation (Routes) to measure distances between specific points using coordinates from <MarkdownCrossRefFigure i={17} />. The weighted route orientation ($$W_{\\text{Route}_n}$$) is calculated as $$W_{\\text{Route}_n}=w_n \\times \\text{length of Route}_n$$, where $$w_n$$ represents the weight assigned to Routeₙ. The weight distribution ($\${\\text{Iter}}_8=\\sum_{\\text{direction}}W_{\\text{Route}_{\\text{direction}_1}}$$) for the route orientations is [0.50, 0.20, 0.30] for east, south, and west directions, respectively. The sum of weighted route orientations in <MarkdownCrossRefTable i={6} /> is denoted as $\${\\text{Iter}}_8=\\sum_{\\text{direction}}W_{\\text{Route}_{\\text{direction}_1}}$$. Based on this calculation, the last five solutions with a score of 402 are selected for the subsequent Iteration, Iter₉.\r
\r
<MarkdownTable id="table7">\r
  <MarkdownTableCaption title="Solution index assessment for Iter₈. An asterisk (*) denotes selected solutions with the lowest value."/>\r
  <thead>\r
    <tr>\r
      <th>Gen</th>\r
      <th>Idv</th>\r
      <th>$\${\\text{Route}}_{\\text{{east}}_1}$$</th>\r
      <th>$\${\\text{Route}}_{\\text{{south}}_1}$$</th>\r
      <th>$\${\\text{Route}}_{\\text{{west}}_1}$$</th>\r
      <th>$$W_{\\text{Route}_{\\text{east}_1}}$$</th>\r
      <th>$$W_{\\text{Route}_{\\text{south}_1}}$$</th>\r
      <th>$$W_{\\text{Route}_{\\text{west}_1}}$$</th>\r
      <th>$\${\\text{Iter}}_8$$</th>\r
    </tr>\r
  </thead>\r
  <tbody>\r
    <tr>\r
      <td>17</td>\r
      <td>5</td>\r
      <td>460</td>\r
      <td>440</td>\r
      <td>500</td>\r
      <td>230</td>\r
      <td>88</td>\r
      <td>150</td>\r
      <td>468</td>\r
    </tr>\r
    <tr>\r
      <td>18</td>\r
      <td>4</td>\r
      <td>460</td>\r
      <td>440</td>\r
      <td>500</td>\r
      <td>230</td>\r
      <td>88</td>\r
      <td>150</td>\r
      <td>468</td>\r
    </tr>\r
    <tr>\r
      <td>19</td>\r
      <td>9</td>\r
      <td>440</td>\r
      <td>460</td>\r
      <td>500</td>\r
      <td>220</td>\r
      <td>92</td>\r
      <td>150</td>\r
      <td>462</td>\r
    </tr>\r
    <tr>\r
      <td>19</td>\r
      <td>11</td>\r
      <td>440</td>\r
      <td>460</td>\r
      <td>500</td>\r
      <td>220</td>\r
      <td>92</td>\r
      <td>150</td>\r
      <td>462</td>\r
    </tr>\r
    <tr>\r
      <td>21</td>\r
      <td>12</td>\r
      <td>440</td>\r
      <td>460</td>\r
      <td>500</td>\r
      <td>220</td>\r
      <td>92</td>\r
      <td>150</td>\r
      <td>462</td>\r
    </tr>\r
    <tr>\r
      <td>22</td>\r
      <td>16</td>\r
      <td>440</td>\r
      <td>460</td>\r
      <td>500</td>\r
      <td>220</td>\r
      <td>92</td>\r
      <td>150</td>\r
      <td>462</td>\r
    </tr>\r
    <tr>\r
      <td>23</td>\r
      <td>10</td>\r
      <td>450</td>\r
      <td>460</td>\r
      <td>500</td>\r
      <td>225</td>\r
      <td>92</td>\r
      <td>150</td>\r
      <td>467</td>\r
    </tr>\r
    <tr>\r
      <td>23</td>\r
      <td>14</td>\r
      <td>440</td>\r
      <td>460</td>\r
      <td>500</td>\r
      <td>220</td>\r
      <td>92</td>\r
      <td>150</td>\r
      <td>462</td>\r
    </tr>\r
    <tr>\r
      <td>23</td>\r
      <td>16</td>\r
      <td>440</td>\r
      <td>460</td>\r
      <td>500</td>\r
      <td>220</td>\r
      <td>92</td>\r
      <td>150</td>\r
      <td>462</td>\r
    </tr>\r
    <tr>\r
      <td>24</td>\r
      <td>19</td>\r
      <td>440</td>\r
      <td>460</td>\r
      <td>500</td>\r
      <td>220</td>\r
      <td>92</td>\r
      <td>150</td>\r
      <td>462</td>\r
    </tr>\r
    <tr>\r
      <td>27</td>\r
      <td>34</td>\r
      <td>450</td>\r
      <td>460</td>\r
      <td>500</td>\r
      <td>225</td>\r
      <td>92</td>\r
      <td>150</td>\r
      <td>467</td>\r
    </tr>\r
    <tr>\r
      <td>46</td>\r
      <td>40</td>\r
      <td>410</td>\r
      <td>450</td>\r
      <td>500</td>\r
      <td>205</td>\r
      <td>90</td>\r
      <td>150</td>\r
      <td>445*</td>\r
    </tr>\r
    <tr>\r
      <td>47</td>\r
      <td>0</td>\r
      <td>410</td>\r
      <td>450</td>\r
      <td>500</td>\r
      <td>205</td>\r
      <td>90</td>\r
      <td>150</td>\r
      <td>445*</td>\r
    </tr>\r
    <tr>\r
      <td>47</td>\r
      <td>30</td>\r
      <td>410</td>\r
      <td>450</td>\r
      <td>500</td>\r
      <td>205</td>\r
      <td>90</td>\r
      <td>150</td>\r
      <td>445*</td>\r
    </tr>\r
    <tr>\r
      <td>47</td>\r
      <td>47</td>\r
      <td>410</td>\r
      <td>450</td>\r
      <td>500</td>\r
      <td>205</td>\r
      <td>90</td>\r
      <td>150</td>\r
      <td>445*</td>\r
    </tr>\r
    <tr>\r
      <td>48</td>\r
      <td>7</td>\r
      <td>410</td>\r
      <td>450</td>\r
      <td>500</td>\r
      <td>205</td>\r
      <td>90</td>\r
      <td>150</td>\r
      <td>445*</td>\r
    </tr>\r
  </tbody>\r
</MarkdownTable>\r
\r
In Iter₉, southern transit routes (Routes) are optimized using coordinates from <MarkdownCrossRefFigure i={17} />. The south weight distribution ($$w_{\\text {south}_n}$$) for route orientations is [0.50, 0.30, 0.20] for south₁ to south₃ directions respectively. The sum of weighted route orientations in <MarkdownCrossRefTable i={8} /> is denoted as $\${\\text{Iter}_9} = \\sum_{\\text{direction (south)}} W_{\\text{Route}_{\\text{direction (south)}_1}}$$. Solutions Gen46 Idv40 and Gen47 Idv30 with a score of 402 are selected due to their lowest score. <MarkdownCrossRefFigure i={18} /> illustrates one of these solutions meeting the set goals for each FO, serving as a leading design guideline for future TH and PS planning. (Note: Gen46 Idv40 and Gen47 Idv30 refer to the same solution with identical genes and FO values.)\r
\r
<MarkdownTable id="table8">\r
<MarkdownTableCaption title="Solution index assessment for Iter₉. An asterisk (*) denotes selected solutions with the lowest value."/>\r
<thead>\r
  <tr>\r
    <th>Gen</th>\r
    <th>Idv</th>\r
    <th>$\${\\text{Route}}_{\\text{{south}}_1}$$</th>\r
    <th>$\${\\text{Route}}_{\\text{{south}}_2}$$</th>\r
    <th>$\${\\text{Route}}_{\\text{{south}}_3}$$</th>\r
    <th>$$W_{\\text{Route}_{\\text{south}_1}}$$</th>\r
    <th>$$W_{\\text{Route}_{\\text{south}_2}}$$</th>\r
    <th>$$W_{\\text{Route}_{\\text{south}_3}}$$</th>\r
    <th>$\${\\text{Iter}}_9$$</th>\r
  </tr>\r
</thead>\r
\r
<tbody>\r
  <tr>\r
    <td>46</td>\r
    <td>40</td>\r
    <td>450</td>\r
    <td>350</td>\r
    <td>360</td>\r
    <td>225</td>\r
    <td>70</td>\r
    <td>108</td>\r
    <td>402*</td>\r
  </tr>\r
  <tr>\r
    <td>47</td>\r
    <td>0</td>\r
    <td>450</td>\r
    <td>360</td>\r
    <td>350</td>\r
    <td>225</td>\r
    <td>72</td>\r
    <td>105</td>\r
    <td>403</td>\r
  </tr>\r
  <tr>\r
    <td>47</td>\r
    <td>30</td>\r
    <td>450</td>\r
    <td>350</td>\r
    <td>360</td>\r
    <td>225</td>\r
    <td>70</td>\r
    <td>108</td>\r
    <td>402*</td>\r
  </tr>\r
  <tr>\r
    <td>47</td>\r
    <td>47</td>\r
    <td>450</td>\r
    <td>360</td>\r
    <td>350</td>\r
    <td>225</td>\r
    <td>72</td>\r
    <td>105</td>\r
    <td>403</td>\r
  </tr>\r
  <tr>\r
    <td>48</td>\r
    <td>7</td>\r
    <td>450</td>\r
    <td>360</td>\r
    <td>350</td>\r
    <td>225</td>\r
    <td>72</td>\r
    <td>105</td>\r
    <td>403</td>\r
  </tr>\r
</tbody>\r
</MarkdownTable>\r
\r
<MarkdownImage id="fig18" src={fig18} title="One of the best solutions: Gen47 Idv30" isInvert />\r
\r
# Discussions\r
\r
This study aims to explore the connection between walkability and physical activity in urban settings, focusing on developing a novel walkability model using our proposed DML approach. It emphasizes the importance of improving walkability by optimizing pedestrian pathways referred to as “Routes” and considering TH and PS as “Nodes.” Understanding how the built environment influences physical activity is essential, emphasizing the use of innovative methodologies. The main findings from the DML method experimentation are as follows: First, utilizing the DML method, this study proposes solutions to abstract city problems, especially in rapidly urbanizing areas. This enhances the understanding of factors influencing pedestrian behavior and urban design, contributing to the field of urban and built environment studies. The research utilizes ABMS and field observations, supported by tools like Google Maps Typical Traffic, to provide initial insights into WM. Field walkability observations play a crucial role in predicting and understanding context and characteristics, essential for capturing each city’s unique attributes, as illustrated in <MarkdownCrossRefFigure i={2} /> and <MarkdownCrossRefFigure i={3} />.\r
\r
Second, regarding modeling techniques and optimization, integration is achieved through the DML method, as depicted in <MarkdownCrossRefFigure i={4} />. This method follows a sequential process, starting with Layer 1 for data transition and involving the preparation of maps from crowdsourced data. It progresses through Layers 2 to 4 for modeling the crowds to decide on a formulation of objective definition and extends to Layer 5 for optimization, encompassing most of Layer 6, specifically machine- and algorithm-driven approaches. This integration takes place within a single simulation environment, specifically Grasshopper, as detailed in the [Method](#method) section.\r
\r
However, challenges arise when quantifying data from non-computational sources, especially when converting intangible data from field walkability observations (early phase, <MarkdownCrossRefFigure i={2} /> and <MarkdownCrossRefFigure i={3} />) and defining behavioral settings for ABMS. The process of merging this data into the ABMS environment, mapping out aspects like people, vehicles, and urban features, is crucial for creating a walkability model (WM) with representative numeric quantitative data for simulation, as demonstrated in <MarkdownCrossRefTable i={1} /> and <MarkdownCrossRefTable i={2} />. It requires a sensitive analysis of movement and behavior within the context.\r
\r
Decisions aimed at results, determining when to start, pause, and stop the smoothing processes, are crucial. These decisions should aim to simplify complex trails from ABMS and reveal the major and minor axes emerging from the pre-simplified trails, as illustrated in <MarkdownCrossRefFigure i={7} />. In the final phase, clustering relies on reasonable rationale to accommodate wide, complex, and extensive contextual preferences, resulting in the method not being fully automated. However, this nature allows for customizing the ISOA method shown in <MarkdownCrossRefFigure i={12} />, providing each context with a unique clustering solution.\r
\r
Additionally, EMOO enables users to adjust or iterate on biases and conflicting objective outputs observed during simulation runs, aiding in identifying the most suitable values among conflicting objectives. This is depicted in <MarkdownCrossRefFigure i={11} />, where NSGA-2, in this case, can provide the best 2500 options from approximately 790 billion possibilities within the total search space.\r
\r
Third, understanding the intricate connection between theoretical concepts and practical applications is paramount for developing an improved method for enhancing walkability, addressing existing walking habits, and promoting physical activity in urban contexts, particularly in developing countries. This process is thoroughly outlined in the [Method](#method) section and proves most effective when authors or stakeholders have a comprehensive understanding of it. However, as emphasized in previous studies in the [Introduction](#introduction) and [Case study](#case-study) sections, broad collaboration among relevant stakeholders such as city planners, designers, urban or public-related professionals, and architects is essential. This collaborative effort can significantly enhance the practical application of this method and allocate substantial resources to advance its development. Fourth, methodological integration and implementation are advantageous in this context, without excluding exploration of new possibilities in alternative scenarios. Although the authors have not simulated this method in other contexts, as long as the method and data collection align with theoretical concepts and practical applications tailored to specific contexts (as mentioned in the [Method](#method) section), the DML method and its principles remain highly applicable. It is imperative to address key elements such as connectivity, relevancy, and optimizing transit-oriented movement between Nodes (coordinates) and Routes (agent trails and walking behavior), as illustrated in <MarkdownCrossRefFigure i={7} />. Additionally, customizing parameters is crucial for promoting pedestrian-centric urban design, physical exercise, and connectivity in urban communities, making it adaptable to various contextual characteristics.\r
\r
In summary, this research focuses on WM using the DML method. It emphasizes the importance of understanding the context and characteristics, incorporating ABMS and field walkability observations for behavioral exploration. The study addresses challenges related to data quantification and decision-making, advocating for stakeholder collaboration to enhance practical applications. Furthermore, it highlights methodological integration and adaptability across various contexts, aiming to advance sustainable and livable pedestrian-centric TOD cities. Through comprehensive methodologies and potential collaboration opportunities, the study provides valuable insights into optimizing urban environments for improved walkability and human activity.\r
\r
# Limitations\r
\r
The study primarily focuses on enhancing walkability through refining pedestrian pathways and city features. However, limitations arise during the implementation of the DML method. The main limitations of this experimentation are as follows: First, the generalizability of the DML method is limited to being applied to diverse urban contexts. Which per now DML, including issues such as traffic congestion, walkability challenges, urban development, and the availability of public spaces. It requires tailoring the formulation of FOs in Layer 5, which may need additional adjustments for universal applicability. While engines like Wallacei help urban planners access the method, further adaptation might be necessary. Future research should integrate advanced parameters tailored to specific urban phenomena and involve stakeholders in validating the implementation of the DML method within its context.\r
\r
Second, navigating various software and frameworks associated with the DML method can pose challenges for end-users. Developing an expanded version of the DML method within a single independent software can improve accessibility and streamline workflow, especially for urban software developers. For further enhancements, creating dedicated software or plugins integrated into commonly used platforms like Rhino and Grasshopper is necessary for widespread global availability and a user-friendly experience.\r
\r
Fourth, the algorithms chosen in Layers 2, 3, and 4 are grounded in practical considerations but may not universally apply to urban workflows, particularly in experimental methodologies like this. For instance, 2D ABMS in Layer 2 may not account for cities with intricate 3D features such as flyovers or underground infrastructure. Smoothing algorithms in Layer 3 might necessitate alternative approaches like soft-smoothing or custom considerations not covered here. Similarly, the SPA algorithm in Layer 4 may require further evaluation against alternative algorithms for technical expansion. The authors selected these algorithms based on pertinent studies, indicating that open collaboration between urban and computational researchers is crucial. Moreover, when developing fundamental criteria for algorithm selection, it is valuable to identify those suitable for diverse contexts and exclude those that do not suit.\r
\r
Fifth, the ISOA method in Layer 6, initially designed to choose the optimal solution from 2500 options, might not be suitable for scenarios requiring multiple solutions, a reduced number of candidate solutions, solely clustered solutions, or direct single solutions. Adaptations are necessary to address diverse contexts. Future research should focus on crafting customized ISOA frameworks tailored to specific contextual needs, integrating machine-, algorithm-, collaborative, and context-driven formulations.\r
\r
# Conclusion\r
\r
This study has introduced the innovative DML method and assessed its effectiveness through a real case study. In conclusion, this research has expanded insights into the potential applications of the DML process in urban design and architecture. It emphasizes addressing walkability challenges in urban environments. It also highlights the potential of the DML method in promoting TOD and sustainable livable city concepts, with a specific focus on pedestrian-friendly planning. The findings and implementation strategies presented here align closely with existing literature addressing urban and built environment issues. It is crucial to practically implement the recommendations from this study, especially in cities facing similar challenges. Finally, this research significantly enhances our understanding of walkability and its pivotal role in improving physical activity and livability in urban areas.\r
\r
# Recommendations\r
\r
Further research could explore the applicability of the DML method across diverse urban and cultural contexts, along with its continued development. Moreover, investigating the long-term impacts of improved walkability on public health outcomes could offer valuable insights for urban planners and policymakers. Practical implementation opportunities through the DML method include:\r
\r
- Urban planners and designers can leverage the developed framework for mapping future TH and PS, addressing prevalent urban challenges.\r
- The information generated throughout the DML process (Layers 1 to 6) can assist planners and designers in crafting comprehensive and well-informed designs.\r
- Planners, environmentalists, health advocates, and professionals can utilize early-stage DML processes (Layers 1 and 2) as benchmarks for evaluating future designs and enhancing decision-making.\r
- Researchers and developers can gain insights from pathways uncovered by the DML method, such as those generated by the A-star algorithm and historical paths from ABMS (Layers 2, 3, and 4), providing an understanding of human movement behavior within TH.\r
- Relevant stakeholders can exploit and utilize customization options proposed by the DML method to tailor processes for specific objectives and address various ancillary tasks, leveraging acquired contextual data.\r
\r
# References\r
\r
[^1]: Hadas Y, Ceder A (Avi). Public Transit Network Connectivity: Spatial-Based Performance Indicators. _Transp Res Rec_ 2010; 2143: 1–8.\r
\r
[^2]: Lima F, Brown N, Duarte J. Urban design optimization: generative approaches towards urban fabrics with improved transit accessibility and walkability. In: Proceedings of the 26th CAADRIA Conference, Hong Kong, 29 March–1 April 2021, The Chinese University of Hong Kong and Online, pp. 719–728.\r
\r
[^3]: Dhanani A, Stockton J, Vaughan L. Street Mobility Project: Walkability models, [https://discovery.ucl.ac.uk/id/eprint/1542310/](https://discovery.ucl.ac.uk/id/eprint/1542310/) (2017).\r
\r
[^4]: Saelens BE, Sallis JF, Frank LD. Environmental correlates of walking and cycling: Findings from the transportation, urban design, and planning literatures. _Ann Behav Med_ 2003; 25: 80–91.\r
\r
[^5]: Jabbari M, Fonseca F, Smith G, et al. The pedestrian network concept: A systematic literature review. _J Urban Mobil_ 2023; 3: 100051.\r
\r
[^6]: Jain R. The urban transformation: Issues and challenges. In: Kateja A, Jain R (eds) _Urban Growth and Environmental Issues in India_. Singapore: Springer, pp. 17–34.\r
\r
[^7]: Nieuwenhuijsen MJ. Urban and transport planning pathways to carbon neutral, liveable and healthy cities; A review of the current evidence. _Environ Int_ 2020; 140: 105661.\r
\r
[^8]: Zakianis, Adzania FH, Fauzia S, et al. Sociodemographic and environmental health risk factor of COVID-19 in Jakarta, Indonesia: An ecological study. _One Health_ 2021; 13: 100303.\r
\r
[^9]: Braun LM, Rodriguez DA, Cole-Hunter T, et al. Short-term planning and policy interventions to promote cycling in urban centers: Findings from a commute mode choice analysis in Barcelona, Spain. _Transp Res Part Policy Pract_ 2016; 89: 164–183.\r
\r
[^10]: Alam SM, Markandey K. Consequences of unplanned growth: A case study of metropolitan Hyderabad. In: Thakur RR, Dutt AK, Thakur SK, et al. (eds) _Urban and Regional Planning and Development: 20th Century Forms and 21st Century Transformations_. Cham: Springer International Publishing, pp. 203–219.\r
\r
[^11]: Nero BF, Callo-Concha D, Anning A, et al. Urban green spaces enhance climate change mitigation in cities of the global south: The case of Kumasi, Ghana. _Procedia Eng_ 2017; 198: 69–83.\r
\r
[^12]: Yin L. Assessing walkability in the city of Buffalo: Application of agent-based simulation. _J Urban Plan Dev_ 2013; 139: 166–175.\r
\r
[^13]: Lwin KK, Murayama Y. Modelling of urban green space walkability: Eco-friendly walk score calculator. _Comput Environ Urban Syst_ 2011; 35: 408–420.\r
\r
[^14]: Pinto NN, Tenedório JA, Antunes AP, et al. (eds). _Technologies for urban and spatial planning: Virtual cities and territories_. Hershey, PA, USA: IGI Global.\r
\r
[^15]: An L, Grimm V, Sullivan A, et al. Challenges, tasks, and opportunities in modeling agent-based complex systems. _Ecol Model_ 2021; 457: 109685.\r
\r
[^16]: Kagho GO, Balac M, Axhausen KW. Agent-based models in transport planning: Current state, issues, and expectations. _Procedia Comput Sci_ 2020; 170: 726–732.\r
\r
[^17]: Eloah A, Queiroz N, Coelho L. Parametric Urbanism: Multi-criteria optimization for a sustainable neighborhood in São José dos Campos. In: Gomez P, Brada (eds) _Proceedings of the XXV International Conference of theIbero-American Society of Digital Graphics (SiGraDi 2021)_, Online, 8–12 November 2021, pp. 351–364\r
\r
[^18]: Dutt AK, Mookherjee D, Thakur RR, et al. Regional development and planning: An overview. In: Thakur RR, Dutt AK, Thakur SK, et al. (eds) _Urban and Regional Planning and Development: 20th Century Forms and 21st Century Transformations_. Cham: Springer International Publishing, pp. 23–58.\r
\r
[^19]: Tijana Đ, Tomić N, Tešić D. Walkability and bikeability for sustainable spatial planning in the city of Novi Sad (Serbia). _Sustainability_ 2023; 15: 3785.\r
\r
[^20]: Ghaffarian M, Fallah R, Jacob C. Organic architectural spatial design driven by agent-based crowd simulation. In: Proceedings of the Symposium on Simulation for Architecture and Urban Design. San Diego, CA, USA: Society for Computer Simulation International, 2018, pp. 1–8.\r
\r
[^21]: Zuniga-Teran AA, Orr BJ, Gimblett RH, et al. Designing healthy communities: Testing the walkability model. _Front Archit Res_ 2017; 6: 63–73.\r
\r
[^22]: Baharlou E, Menges A. Toward a behavioral design system: an agent-based approach for polygonal surfaces structures. In: Proceedings of the 35th Annual Conference of the Association for Computer Aided Design in Architecture (ACADIA): _Computational Ecologies: Design in the Anthropocene_, Cincinnati, October 2015, ACADIA, pp. 161–172.\r
\r
[^23]: Yen T-W, Filippov M, Cheong SA. Emergent urban morphologies in an agent-based model of housing. In: Chakrabarti AS, Pichl L, Kaizoji T (eds) _Network Theory and Agent-Based Modeling in Economics and Finance_. Singapore: Springer, pp. 227–246.\r
\r
[^24]: Marwal A, Silva EA. City affordability and residential location choice: A demonstration using agent based model. _Habitat Int_ 2023; 136: 102816.\r
\r
[^25]: Zhu W, Nedovic-Budic Z, Olshansky RB, et al. Agent-based modeling of physical activity behavior and environmental correlations: An introduction and illustration. _J Phys Act_ Health 2013; 10: 309–322.\r
\r
[^26]: Siqueira Reis R, Hino AAF, Ricardo Rech C, et al. Walkability and physical activity: Findings from Curitiba, Brazil. Am _J Prev Med_ 2013; 45: 269–275.\r
\r
[^27]: Abar S, Theodoropoulos GK, Lemarinier P, et al. Agent Based Modelling and Simulation tools: A review of the state-of-art software. _Comput Sci Rev_ 2017; 24: 13–33.\r
\r
[^28]: Yang L, Gilbert N. Getting away from numbers: using qualitative observation for agent-based modeling. _Adv Complex Syst_ 2008; 11: 175–185.\r
\r
[^29]: Hassan S, Pavón J, Antunes L, et al. Injecting data into agent-based simulation. In: Takadama K, Cioffi-Revilla C, Deffuant G (eds) _Simulating Interacting Agents and Social Phenomena_. Tokyo: Springer Japan, 2010, pp. 177–191.\r
\r
[^30]: Manzo G, Matthews T. Potentialities and limitations of agent-based simulations. _Rev Francaise Sociol_ 2014; 55: 653–688.\r
\r
[^31]: Lefebvre-Ropars G, Morency C. Walkability: Which measure to choose, where to measure it, and how? _Transp Res Rec_ 2018; 2672: 139–150.\r
\r
[^32]: Ibraeva A, Correia GH de A, Silva C, et al. Transit-oriented development: A review of research achievements and challenges. _Transp Res Part Policy Pract_ 2020; 132: 110–130.\r
\r
[^33]: Chen L. Agent-based modeling in urban and architectural research: A brief literature review. _Front Archit Res_ 2012; 1: 166–177.\r
\r
[^34]: Badland H, White M, MacAulay G, et al. Using simple agent-based modeling to inform and enhance neighborhood walkability. _Int J Health Geogr_ 2013; 12: 58.\r
\r
[^35]: Herrmann T, Boisjoly G, Ross NA, et al. The missing middle: filling the gap between walkability and observed walking behavior. _Transp Res Rec_ 2017; 2661: 103–110.\r
\r
[^36]: Lu X. The development and deployment of walkability assessment models for built environments. Thesis, Aalto University, [https://aaltodoc.aalto.fi/handle/123456789/28966](https://aaltodoc.aalto.fi/handle/123456789/28966) (2017, accessed 21 June 2023).\r
\r
[^37]: Kanchik M. Geographic information systems analysis of walkability data for the Atlanta Beltline communities. \\_Public Health Capstone Proj. \\_Epub ahead of print 2017. DOI: 10.57709/10501417.\r
\r
[^38]: Franěk M. Environmental factors influencing pedestrian walking speed. _Percept Mot Skills_ 2013; 116: 992–1019.\r
\r
[^39]: Zhang S, Deng N. Simulation & visualization of walkability score. _Data Mining the City_, [https://medium.com/data-mining-the-city/simulation-visualization-of-walkability-score-ef88d5893301](https://medium.com/data-mining-the-city/simulation-visualization-of-walkability-score-ef88d5893301) (2019, accessed 13 October 2023).\r
\r
[^40]: Xiang L, Tan Y, Shen G, et al. Applications of multi-agent systems from the perspective of construction management: A literature review. _Eng Constr Archit Manag_ 2022; 29: 3288–3310.\r
\r
[^41]: González-Méndez M, Olaya C, Fasolino I, et al. Agent-based modeling for urban development planning based on human needs. conceptual basis and model formulation. _Land Use Policy_ 2021; 101: 105110.\r
\r
[^42]: Zhang W, Valencia A, Chang N-B. Synergistic integration between machine learning and agent-based modeling: A multidisciplinary review. _IEEE Trans Neural Netw Learn Syst_ 2023; 34: 2170–2190.\r
\r
[^43]: Shendarkar A, Vasudevan K, Lee S, et al. Crowd simulation for emergency response using BDI agents based on immersive virtual reality. _Simul Model Pract Theory_ 2008; 16: 1415–1429.\r
\r
[^44]: Stieler D, Schwinn T, Leder S, et al. Agent-based modeling and simulation in architecture. _Autom Constr_ 2022; 141: 104426.\r
\r
[^45]: Google Maps Help. Use layers to find places, traffic, terrain, biking & transit, [https://support.google.com/maps/answer/3092439?](https://support.google.com/maps/answer/3092439?) (accessed 6 March 2024).\r
\r
[^46]: Petrovska N, Stevanovic A. Traffic Congestion Analysis Visualisation Tool. In: 2015 IEEE 18th International Conference on Intelligent Transportation Systems. Gran Canaria, Spain: IEEE, pp. 1489–1494.\r
\r
[^47]: Hilpert M, Shearston JA, Cole J, et al. Acquisition and analysis of crowd-sourced traffic data. _arXiv_. Epub ahead of print 25 May 2021. DOI: 10.48550/arXiv.2105.12235.\r
\r
[^48]: Pokorný P. Determining Traffic Levels in Cities Using Google Maps. In: 2017 Fourth International Conference on Mathematics and Computers in Sciences and in Industry (MCSI). 2017, pp. 144–147.\r
\r
[^49]: Kaziyeva D, Stutz P, Wallentin G, et al. Large-scale agent-based simulation model of pedestrian traffic flows. _Comput Environ Urban Syst_ 2023; 105: 102021.\r
\r
[^50]: Yin L. Street level urban design qualities for walkability: Combining 2D and 3D GIS measures. _Comput Environ Urban Syst_ 2017; 64: 288–296.\r
\r
[^51]: Yin L, Wang Z. Measuring visual enclosure for street walkability: Using machine learning algorithms and Google Street View imagery. _Appl Geogr_ 2016; 76: 147–153.\r
\r
[^52]: Duncan DT, Aldstadt J, Whalen J, et al. Validation of Walk Score® for Estimating neighborhood walkability: An analysis of four US metropolitan areas. _Int J Environ Res Public Health_ 2011; 8: 4160–4179.\r
\r
[^53]: Norberg-Schulz C. \\_Genius loci: Towards a phenomenology of architecture. \\_Rizzoli, 1979.\r
\r
[^54]: Noto AP, Saputro DRS. _Classification data mining with Laplacian Smoothing on Naïve Bayes method._ Surakarta, Indonesia, p. 030004.\r
\r
[^55]: Field DA. Laplacian smoothing and Delaunay triangulations. _Commun Appl Numer Methods_ 1988; 4: 709–712.\r
\r
[^56]: Coello Coello CA. Evolutionary multi-objective optimization: a historical view of the field. _IEEE Comput Intell Mag_ 2006; 1: 28–36.\r
\r
[^57]: Huang Z, Ding J, Xiang S. Suspension Footbridge Form-Finding with Laplacian Smoothing Algorithm. _Int J Steel Struct_ 2020; 20: 1989–1995.\r
\r
[^58]: Xiao L, Yang G, Zhao K, et al. Efficient Parallel Algorithms for 3D Laplacian Smoothing on the GPU. _Appl Sci_ 2019; 9: 5437.\r
\r
[^59]: Alieksieiev V. Artificial Locust Swarm Routing Algorithm: : An Approach to Consider both Routing via FRA and Applying RAD. In: 2019 International Conference on Information and Digital Technologies (IDT). Zilina, Slovakia: IEEE, pp. 1–10.\r
\r
[^60]: Mittal D, Turrin M, Tenpierik MJ, et al. framework for multi-agent and acoustic simulation for office design. In: Proceedings of the 12th Annual Symposium on Simulation for Architecture and Urban Design, San Diego, CA, USA, 15–17 April 2021, Society for Computer Simulation International, pp. 9.\r
\r
[^61]: Hart PE, Nilsson NJ, Raphael B. A Formal Basis for the Heuristic Determination of Minimum Cost Paths. _IEEE Trans Syst Sci Cybern_ 1968; 4: 100–107.\r
\r
[^62]: Deb K, Pratap A, Agarwal S, et al. A fast and elitist multiobjective genetic algorithm: NSGA-II. _IEEE Trans Evol Comput_ 2002; 6: 182–197.\r
\r
[^63]: Deb K, Agrawal S, Pratap A, et al. A Fast Elitist Non-dominated Sorting Genetic Algorithm for Multi-objective Optimization: NSGA-II. In: _Parallel Problem Solving from Nature PPSN VI_. Berlin, Heidelberg: Springer, 2000, pp. 849–858.\r
\r
[^64]: Wijaya CA. Tilted, disjointed bridges make life harder for city’s pedestrians. _The Jakarta Post_, [https://www.thejakartapost.com/news/2018/09/08/tilted-disjointed-bridges-make-life-harder-city-s-pedestrians.html](https://www.thejakartapost.com/news/2018/09/08/tilted-disjointed-bridges-make-life-harder-city-s-pedestrians.html) (2018, accessed 1 March 2024).\r
\r
[^65]: Leather J, Fabian H, Gota S, et al. Walkability and pedestrian facilities in Asian cities, [https://www.adb.org/publications/walkability-and-pedestrian-facilities-asian-cities-state-and-issues](https://www.adb.org/publications/walkability-and-pedestrian-facilities-asian-cities-state-and-issues) (2011).\r
\r
[^66]: Krambeck HV. _The global walkability index_. Thesis, Massachusetts Institute of Technology, [https://dspace.mit.edu/handle/1721.1/34409](https://dspace.mit.edu/handle/1721.1/34409) (2006, accessed 1 March 2024).\r
\r
[^67]: Institute for Transportation and Development Policy. _Panduan Desain Fasilitas Pejalan Kaki: DKI Jakarta 2017 – 2022_. _Institute for Transportation and Development Policy_, [https://itdp-indonesia.org/publication/panduan-desain-fasilitas-pejalan-kaki-dki-jakarta-2017-2022/](https://itdp-indonesia.org/publication/panduan-desain-fasilitas-pejalan-kaki-dki-jakarta-2017-2022/) (2020, accessed 22 November 2022).\r
\r
[^68]: Salim HJ. Waspada! Titik-titik rawan kejahatan di Terminal Kalideres. _Liputan6_, 1 August 2013, [https://www.liputan6.com/news/read/655880/](https://www.liputan6.com/news/read/655880/) (1 August 2013, accessed 24 April 2022).\r
\r
[^69]: Winarno FG, Allain A. Street foods in developing countries: lessons from Asia. _Food Nutr Agric_ 1991; 1: 11–18.\r
\r
[^70]: _Pemerintah Daerah Daerah Khusus Ibukota Jakarta. Peraturan Gubernur Daerah Khusus Ibukota Jakarta Nomor 31 Tahun 2022 tentang Rencana Detail Tata Ruang Wilayah Perencanaan Provinsi Daerah Khusus Ibukota Jakarta_. 2022.\r
\r
[^71]: AH2. _Wikipedia_, [https://en.wikipedia.org/w/index.php?title=AH2&oldid=1210543283](https://en.wikipedia.org/w/index.php?title=AH2&oldid=1210543283) (2024, accessed 15 March 2024).\r
\r
[^72]: Google Maps. _Kalideres · Daan Mogot Rd, East Cengkareng, Cengkareng, West Jakarta City, Jakarta_, [https://maps.app.goo.gl/oSMQS8ssWUxBxxSHA](https://maps.app.goo.gl/oSMQS8ssWUxBxxSHA) (2022, accessed 24 May 2022).\r
\r
[^73]: Institute for Transportation and Development Policy. _TOD Standard 3.0. Institute for Transportation and Development Policy_, [https://itdp-indonesia.org/2017/07/tod-standard-3/](https://itdp-indonesia.org/2017/07/tod-standard-3/) (2017, accessed 22 November 2022).\r
\r
[^74]: López Baeza J, Carpio-Pinedo J, Sievert J, et al. Modeling pedestrian flows: Agent-based simulations of pedestrian activity for land use distributions in urban developments. _Sustainability_ 2021; 13: 9268.\r
\r
[^75]: Baobeid A, Koç M, Al-Ghamdi SG. Walkability and its relationships with health, sustainability, and livability: Elements of physical environment and evaluation frameworks. _Front Built Environ_ 2021; 7: 721218.\r
\r
[^76]: World Bank Group. _Jakarta - Urban challenges in a changing climate_. Text/HTML, Washington, D.C.: World Bank Group, [http://documents.worldbank.org/curated/en/132781468039870805/Jakarta-Urban-challenges-in-a-changing-climate](http://documents.worldbank.org/curated/en/132781468039870805/Jakarta-Urban-challenges-in-a-changing-climate) (18 October 2011).\r
\r
[^77]: Roberts M, Gil Sander F, Tiwari S (eds). _Time to ACT: Realizing Indonesia’s urban potential_. Washington, D.C: World Bank, 2019.\r
\r
[^78]: Ferdman A. Walking and its contribution to objective well-being. _J Plan Educ Res_ 2023; 43: 294–304.\r
\r
[^79]: Thompson CW. Urban open space in the 21st century. _Landsc Urban Plan_ 2002; 60: 59–72.\r
\r
[^80]: Lee ACK, Maheswaran R. The health benefits of urban green spaces: a review of the evidence. _J Public Health_ 2011; 33: 212–222.\r
\r
[^81]: Kondo MC, Fluehr JM, McKeon T, et al. Urban green space and its impact on human health. _Int J Environ Res Public Health_ 2018; 15: 445.\r
\r
[^82]: Wardani DA. Build a transport hub in Dukuh Atas, Anies: we hope for a new atmosphere change. _VOI_. October 2021, [https://voi.id/en/news/94220](https://voi.id/en/news/94220) (accessed 13 October 2023).\r
\r
[^83]: Setiowati R, Hasibuan HS, Koestoer RH. Green open space masterplan at Jakarta Capital City, Indonesia for climate change mitigation. _IOP Conf Ser Earth Environ Sci_ 2018; 200: 012042.\r
\r
[^84]: U. S. Green Building Council. LEED v4.1, [https://www.usgbc.org/leed/v41#cities-and-communities](https://www.usgbc.org/leed/v41#cities-and-communities) (2023, accessed 13 October 2023).\r
\r
[^85]: Atiqul Haq SM. Urban green spaces and an integrative approach to sustainable environment. _J Environ Prot_ 2011; 02: 601–608.\r
\r
[^86]: Belzer D, Autler G. _Transit oriented development: moving from rhetoric to reality_. Washington, DC: Brookings Institution Center on Urban and Metropolitan Policy, 2002.\r
\r
[^87]: Taki HM, Maatouk MMH, Ahmadi F. Implementation of the Integrated TOD Spatial Model for Jakarta Metropolitan Region. _KnE Soc Sci_ 2019; 234–246.\r
\r
[^88]: Aryaguna PA, Gaffara GR, Sari DAK, et al. Green open space priority modelling using GIS analysis in West Jakarta. _Indones J Geogr_ 2022; 54: 263–271.\r
\r
[^89]: Zhang Y, Azzali S, Janssen P, et al. Design for walkable neighbourhoods in Singapore using form-based codes. In: _Proceedings of International Forum of Urbanism (IFoU) 2018: Reframing Urban Resilience Implementation: Aligning Sustainability and Resilience_, Barcelona, December 2018, MDPI, p. 5934.\r
\r
[^90]: Singh R. Factors affecting walkability of neighborhoods. _Procedia - Soc Behav Sci_ 2016; 216: 643–654.\r
\r
[^91]: Azizi V, Usman M, Sohn SS, et al. The role of latent representations for design space exploration of floorplans. _SIMULATION_ 2023; 99: 1167–1179.\r
\r
[^92]: Veisi O, Du D, Moradi MA, et al. Designing SafeMap Based on City Infrastructure and Empirical Approach: Modified A-Star Algorithm for Earthquake Navigation Application. In: Proceedings of the 1st ACM SIGSPATIAL International Workshop on Advances in Urban-AI. Hamburg Germany: ACM, pp. 61–70.\r
\r
[^93]: Pasandi L, Hooshmand M, Rahbar M. Modified A\\* Algorithm integrated with ant colony optimization for multi-objective route-finding; case study: Yazd. _Appl Soft Comput_ 2021; 113: 107877.\r
\r
[^94]: Bhatia S. Survey of shortest path algorithms. _Int J Comput Sci Eng_ 2019; 6: 33–39.\r
\r
[^95]: Hong Z, Sun P, Tong X, et al. Improved A-star algorithm for long-distance off-road path planning using terrain data map. _ISPRS Int J Geo-Inf_ 2021; 10: 785.\r
\r
[^96]: Cai D, He X, Han J. Document clustering using locality preserving indexing. _IEEE Trans Knowl Data Eng_ 2005; 17: 1624–1637.\r
\r
[^97]: Chan ETH, Schwanen T, Banister D. Towards a multiple-scenario approach for walkability assessment: An empirical application in Shenzhen, China. _Sustain Cities Soc_ 2021; 71: 102949.\r
\r
[^98]: Ridha E, Nolting L, Praktiknjo A. Complexity profiles: A large-scale review of energy system models in terms of complexity. _Energy Strategy Rev_ 2020; 30: 100515.\r
\r
[^99]: Toussi HE. The application of evolutionary, generative, and hybrid approaches in architecture design optimization. _NEU J Fac Archit NEU-JFA_ 2020; 2: 1–20.\r
\r
[^100]: Robert McNeel & Associates. Rhinoceros 3D, [https://www.rhino3d.com/](https://www.rhino3d.com/) (2022, accessed 22 November 2022).\r
\r
[^101]: Robert McNeel & Associates. Grasshopper, [https://www.grasshopper3d.com/](https://www.grasshopper3d.com/) (2022, accessed 22 November 2022).\r
\r
[^102]: Belesky P. Caribou, [https://caribou.philipbelesky.com/](https://caribou.philipbelesky.com/) (2022, accessed 22 November 2022).\r
\r
[^103]: Ashish. How does google maps know about traffic conditions? _Science ABC_, [https://www.scienceabc.com/innovation/how-does-google-maps-know-about-traffic-conditions.html](https://www.scienceabc.com/innovation/how-does-google-maps-know-about-traffic-conditions.html) (2016, accessed 7 March 2024).\r
\r
[^104]: _The Times of India. How does Google map detect traffic?_ The Times of India, [https://timesofindia.indiatimes.com/etimes/trending/how-does-google-map-detect-traffic/photostory/107174551.cms](https://timesofindia.indiatimes.com/etimes/trending/how-does-google-map-detect-traffic/photostory/107174551.cms) (2024, accessed 7 March 2024).\r
\r
[^105]: Fischer A. _Quelea - agent-based design for Grasshopper_. Food4Rhino, [https://www.food4rhino.com/en/app/quelea-agent-based-design-grasshopper](https://www.food4rhino.com/en/app/quelea-agent-based-design-grasshopper) (2015, accessed 22 November 2022).\r
\r
[^106]: Pryor M. _Bundling/wooly paths_. Grasshopper, [https://www.grasshopper3d.com/forum/topics/bundling-wooly-paths?commentId=2985220%3AComment%3A1739714](https://www.grasshopper3d.com/forum/topics/bundling-wooly-paths?commentId=2985220%3AComment%3A1739714) (2017, accessed 9 October 2023).\r
\r
[^107]: Preim B, Botha C. Chapter 6 - Surface rendering. In: Preim B, Botha C (eds). _Visual Computing for Medicine_. 2nd ed. Boston: Morgan Kaufmann, 2014, pp. 229–267.\r
\r
[^108]: Zwierzycki M. Anemone, [https://www.food4rhino.com/en/app/anemone](https://www.food4rhino.com/en/app/anemone) (2013, accessed 1 November 2023).\r
\r
[^109]: UN Sustainable Development Goals. The Sustainable Development Goals Report 2022, [https://unstats.un.org/sdgs/report/2022/Goal-11/](https://unstats.un.org/sdgs/report/2022/Goal-11/) (2022, accessed 22 November 2022).\r
\r
[^110]: Piker D. Kangaroo Physics, [https://www.food4rhino.com/en/app/kangaroo-physics](https://www.food4rhino.com/en/app/kangaroo-physics) (2010, accessed 22 November 2022).\r
\r
[^111]: Cryptid. Arachne, [https://www.food4rhino.com/en/app/arachne](https://www.food4rhino.com/en/app/arachne) (2022, accessed 22 November 2022).\r
\r
[^112]: Makki M, Farzaneh A, Navarro D. _The evolutionary adaptation of urban tissues through computational analysis_. Vienna, Austria, pp. 563–571.\r
\r
[^113]: Andersson C. Public space and the new urban agenda. _J Public Space_ 2016; 1: 5–10.\r
\r
[^114]: Elshater AM, Ibraheem F. From typology concept to smart transportation hub. _Procedia - Soc Behav Sci_ 2014; 153: 531–541.\r
\r
[^115]: Asian Development Bank. _Improving interchanges: Introducing best practices on multimodal interchange hub development in the People’s Republic of China_. Mandaluyong City, Philippines: Asian Development Bank, [https://www.adb.org/publications/improving-interchanges-multimodal-interchange-hub-development-prc](https://www.adb.org/publications/improving-interchanges-multimodal-interchange-hub-development-prc) (2015).\r
\r
[^116]: Makki M, Showkatbakhsh M, Song Y. _Wallacei Primer 2.0_, Wallacei. [https://www.wallacei.com](https://www.wallacei.com) (2019, accessed 22 May 2022).\r
`,s={title:"Dynamic multi-layer walkability model for transit-oriented movement: Nodes and Routes optimization method",post_type:"pub",abstract:"This paper presents a novel approach to optimizing movement in urban areas through a dynamic multi-layer walkability model. This research uncovers new facets of walkability modeling within transit-oriented movement, aligning pedestrian pathways (Routes) with urban architecture, public spaces, and green spaces (Nodes). The dynamic multi-layer (DML) approach involves optimizing both the Nodes and Routes of the transit system using a multi-objective optimization method. This method improves accessibility and connectivity by aggregating the results of agent-based modeling for route simulations and considers multiple criteria, including greenness, distance to transit, and destination accessibility. Experimentation with a case study produced several findings that underscore the value of multi-layered models for transit movement and the power of computational methods in optimizing both Nodes and Routes. This discovery offers valuable insights into the DML process and its potential applications in the field of urban design and architecture.",pub_date:"2024-05-18",hero_img_src:new Proxy({src:"/_astro/fig-08.Dw35Uqhs.jpg",width:2884,height:3415,format:"jpg",fsPath:"D:/izvw/github/astro/mad-jet/src/content/pub/2024/dynamic/figures/fig-08.jpg"},{get(t,e,n){return e==="clone"?structuredClone(t):e==="fsPath"?"D:/izvw/github/astro/mad-jet/src/content/pub/2024/dynamic/figures/fig-08.jpg":(t[e]!==void 0&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("D:/izvw/github/astro/mad-jet/src/content/pub/2024/dynamic/figures/fig-08.jpg"),t[e])}}),hero_img_alt:"Dynamic multi-layer walkability model for transit-oriented movement: Nodes and Routes optimization method",keywords:["Multi-layer","Walkability model","Transit-oriented movement","Optimization method","Agent-based modeling"],softwares:[],authors:["Arnott Ferels","Aswin Indraprastha"],courseworks:[],editors:[],contributions:[],jury:[],instructor:[],team_leader:[],advisor:[],doi:"10.1177/14780771241254639",issn:"1478-0771",url:"https://doi.org/10.1177/14780771241254639",journal:"International Journal of Architectural Computing",journal_abbrev:"Int. J. Archit. Comput.",language:"en",entry_type:"article",entry_value:"ferels_dynamic_2024",publisher:"SAGE Publications",note:"Publisher: SAGE Publications",firstpage:"0",lastpage:"0",copyright:"Ⓒ The Author(s) 2024.",cite_article:"Ferels A, Indraprastha A. Dynamic multi-layer walkability model for transit-oriented movement: Nodes and Routes optimization method. International Journal of Architectural Computing. 2024;0(0). doi:10.1177/14780771241254639",bibtex:"/assets/bib/ferels_dynamic_2024.bib"},d={type:"content",filePath:"D:/izvw/github/astro/mad-jet/src/content/pub/2024/dynamic/dynamic.mdx",rawData:void 0};export{d as _internal,o as body,r as collection,s as data,i as id,a as slug};
