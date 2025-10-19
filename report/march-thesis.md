# Walkability model using dynamic multi-layer method in transit hub design in West Jakarta

```bibtex
@online{fere_2023_walk,
  title = {Walkability model using dynamic multi-layer method in transit hub design in {West} {Jakarta}},
  author = {Ferels, Arnott},
  publisher = {{School of Architecture, Planning and Policy Development, Institut Teknologi Bandung}},
  url = {https://arnottferels.github.io/report/march-thesis/},
  abstract = {
    The DKI Jakarta Provincial Government aims to realize a sustainable transportation system in Jakarta, as evidenced by its receipt of the Sustainable Transportation Award 2021 from ITDP. However, over time, Jakarta must enhance its transportation services, particularly in West Jakarta, which serves as an international gateway due to its direct connection to Soekarno-Hatta International Airport, as well as its strategic toll roads and inter-provincial routes, and urban transport facilities such as BRT (TransJakarta), KRL, and MRT. For Jakarta, improving transportation services is critical because inadequate planning could lead to new issues within the urban system, such as congestion, air pollution, and crime. Therefore, the design of an integrated transit hub (TH) connected with public transportation and public spaces (PS) can support SDG Goal 11 and align with government objectives.

    This thesis will explore issues, methods, and solutions to identify critical issues and their impact on the area and site. The dynamic multi-layer (DML) method is employed to address complex problems in the case study, focusing on human movement issues. Each layer utilizes different methods, including: (1) distillation and sub-set data to filter traffic density data for model abstraction; (2) agent-based modeling (ABM) for dynamic human movement modeling; (3) Laplacian smoothing to simplify movement patterns resulting from ABM simulations; (4) shortest path searching using the A-star (SPA+A*) algorithm to generate values on routes with individual costs and speed in simulations on layer 5; (5) multi-objective optimization (MOO) with objectives including: (a) minimizing the average distance between public space coordinates and each primary activity point (T1); (b) minimizing the average distance between PS coordinates and each secondary activity point (T2); (c) minimizing the average distance between PS coordinates and other PS coordinates; (d) minimizing the total area of combined Voronoi radii per 500m from each PS coordinate; and (e) minimizing the total number of PS; and (6) data clustering for decision-making in selecting the most appropriate solution alternatives.

    The best solution will then guide the design of TH and PS, including circulation design based on the axis created from SPA+A* route trends and agent characteristics from ABM simulations, as well as the placement of PS based on clustering results from MOO simulations. Guided by the chosen principles, architectural design can accommodate the design aspects, such as mode transfer, pedestrian circulation, platform integration with PS, and supporting functions. The core design concepts are human movement, connectivity, and green space. The design is expected to address the complex issues outlined above and improve the quality of life for local residents.
  },
  date = {2023-01-27},
  keywords = {dynamic multi-layer method,agent-based modeling,shortest path algorithm A-star,Laplacian smoothing,evolutionary multi-objective optimization,data clustering,transit hub,public space},
  language = {en}
}

```

# Abstract

The DKI Jakarta Provincial Government aims to realize a sustainable transportation system in Jakarta, as evidenced by its receipt of the Sustainable Transportation Award 2021 from ITDP. However, over time, Jakarta must enhance its transportation services, particularly in West Jakarta, which serves as an international gateway due to its direct connection to Soekarno-Hatta International Airport, as well as its strategic toll roads and inter-provincial routes, and urban transport facilities such as BRT (TransJakarta), KRL, and MRT. For Jakarta, improving transportation services is critical because inadequate planning could lead to new issues within the urban system, such as congestion, air pollution, and crime. Therefore, the design of an integrated transit hub (TH) connected with public transportation and public spaces (PS) can support SDG Goal 11 and align with government objectives.

This thesis will explore issues, methods, and solutions to identify critical issues and their impact on the area and site. The dynamic multi-layer (DML) method is employed to address complex problems in the case study, focusing on human movement issues. Each layer utilizes different methods, including: (1) distillation and sub-set data to filter traffic density data for model abstraction; (2) agent-based modeling (ABM) for dynamic human movement modeling; (3) Laplacian smoothing to simplify movement patterns resulting from ABM simulations; (4) shortest path searching using the A-star (SPA+A*) algorithm to generate values on routes with individual costs and speed in simulations on layer 5; (5) multi-objective optimization (MOO) with objectives including: (a) minimizing the average distance between public space coordinates and each primary activity point (T1); (b) minimizing the average distance between PS coordinates and each secondary activity point (T2); (c) minimizing the average distance between PS coordinates and other PS coordinates; (d) minimizing the total area of combined Voronoi radii per 500m from each PS coordinate; and (e) minimizing the total number of PS; and (6) data clustering for decision-making in selecting the most appropriate solution alternatives.

The best solution will then guide the design of TH and PS, including circulation design based on the axis created from SPA+A* route trends and agent characteristics from ABM simulations, as well as the placement of PS based on clustering results from MOO simulations. Guided by the chosen principles, architectural design can accommodate the design aspects, such as mode transfer, pedestrian circulation, platform integration with PS, and supporting functions. The core design concepts are human movement, connectivity, and green space. The design is expected to address the complex issues outlined above and improve the quality of life for local residents.

# Keywords

dynamic multi-layer method; agent-based modeling; shortest path algorithm A-star; Laplacian smoothing; evolutionary multi-objective optimization; data clustering; transit hub; public space

---

# Information

-   View the full-text version on ITB’s repository: [Full text](https://digilib.itb.ac.id/gdl/view/71142).

# 1. Introduction

## 1.1. Background

The Jakarta Provincial Government is committed to building a sustainable transportation system. TransJakarta services continue to expand, and the integration of JakLingko improves transportation quality in Jakarta. The Sustainable Transportation Award (STA) 2021 from the Institute for Transportation and Development Policy (ITDP) affirms this achievement. Jakarta became one of the first cities in Southeast Asia to receive this award, surpassing other major cities (ITDP, 2021 [^itdp/2021]; Prambors, 2020 [^prambors/2020]).

On the other hand, architects also play a role in supporting this vision through concepts and designs that strengthen the development of an integrated transportation system. The author sees potential in developing the KBT area in West Jakarta, which lies on a major land transportation route, serving both public and private transport. This area is crossed by Jl. Daan Mogot, a main arterial road parallel to the Mokervart River (see the blue legend in [Figure 1.2](#fig1.2) and [Figure 1.3](#fig1.3)), and is equipped with various supporting facilities as listed in [Table 1.1](#table1.1).

To address the challenges in developing this area, this thesis employs the _dynamic multi-layer (DML)_ experimental method, which analyzes multiple aspects simultaneously. This method is expected to resolve complex site issues, particularly in enhancing _walkability_ along Jl. Daan Mogot and Terminal Kalideres, two areas with significant potential for future development.

<a name="fig1.2"></a>

![Site context on the zoning map of Kalideres Subdistrict (Source: Appendix III-1 DKI Jakarta Regional Regulation 1/2014 RDTR-PZ, Figure 17-A Zoning Map of Kalideres Subdistrict, West Jakarta City).](https://arnottferels.github.io/a/img/1920/ANx5.webp)

_Figure 1.2. Site context on the zoning map of Kalideres Subdistrict (Source: Appendix III-1 DKI Jakarta Regional Regulation 1/2014 RDTR-PZ, Figure 17-A Zoning Map of Kalideres Subdistrict, West Jakarta City)._

<a name="fig1.3"></a>

![A satellite view of the Kalideres area shows significant congestion points in the highlighted area. The satellite image is sourced from Google Maps (Google Maps, 2022a). Details marked as (a) and (b) are shown in Figure 1.4.](https://arnottferels.github.io/a/img/1800/MDDx.webp)

_Figure 1.3. A satellite view of the Kalideres area shows significant congestion points in the highlighted area. The satellite image is sourced from Google Maps (Google Maps, 2022a [^google-maps/2022a]). Details marked as (a) and (b) are shown in Figure 1.4._

<a name="fig1.4"></a>

![Observations of the area around Kalideres Terminal show several problems: (a1) no barrier between the sidewalk and the Mokervart River, with neglected city utilities; (a2) sidewalks above a culvert used for multiple functions without safety standards (ITDP, 2021); (a3) narrowing pedestrian pathways that could lead to congestion; (a4 and b1) congestion caused by large buses stuck in narrow lanes; (b2) characteristics of public transportation (angkot); (b3) the presence of street vendors due to congestion; (b4) narrowing of pedestrian paths due to street vendors; (b5) road signs at Kalideres Terminal.](https://arnottferels.github.io/a/img/1080/DZLn.webp)

_Figure 1.4. Observations of the area around Kalideres Terminal show several problems: (a1) no barrier between the sidewalk and the Mokervart River, with neglected city utilities; (a2) sidewalks above a culvert used for multiple functions without safety standards (ITDP, 2021 [^itdp/2021]); (a3) narrowing pedestrian pathways that could lead to congestion; (a4 and b1) congestion caused by large buses stuck in narrow lanes; (b2) characteristics of public transportation (angkot); (b3) the presence of street vendors due to congestion; (b4) narrowing of pedestrian paths due to street vendors; (b5) road signs at Kalideres Terminal._

<a name="table1.1"></a>

> [!TIP]
The HTML version of this table is available [here](https://arnottferels.github.io/report/march-thesis/#table1.1).

_Table 1.1. Facilities in the KBT area. (*) to Kalideres Electric Railway Station, (**) to Soekarno-Hatta Airport (CGK) Railway Station._

| Facility | Location | Distance/Time |
| --- | --- | --- |
| BRT TransJakarta (Corridor 3) | Kalideres TJ Stop | 0 m |
| Pesakih TJ Stop | 1 km |
| Long-Distance Buses and City Transportation (JakLingko) | - | - |
| KRL and Airport Train | Kalideres KRL Station | 1.1 km |
| Batu Ceper Airport Train Station | - |
| 8 minutes* |
| 11 minutes** |
| Central Business District (CBD) Area | Daan Mogot Baru CBD | 850 m |

## 1.2. Case study

This case study identifies several issues grouped into [Architectural issues](#121-architectural-issues) and [Jakarta City issues](#122-jakarta-city-issues), which will be discussed further in this section.

### 1.2.1. Architectural issues

Here are the architectural issues identified, consisting of one main issue and three sub-issues in this case study.

#### 1.2.1.1. Main issue: Facilities at KBT

The facilities at KBT are quantitatively sufficient, but they have not functioned synergistically to reach their full potential. The existing facilities include intercity services (AKAP bus stops), local services (TransJakarta stops, angkot stops, city bus stops), other supporting transportation modes (stationary and online ojek), as well as facilities for private vehicles such as drop-off areas and park and ride, and other supporting facilities like food courts (see [Figure 1.5](#fig1.5)). With these facilities, KBT is classified as a Type A terminal in Jakarta, as per Article 24, paragraph (2) of the Ministry of Transportation Regulation PM 24/2021 on Road Transport Terminal Management.

However, qualitatively, this terminal still has many shortcomings. One of the main issues is the suboptimal layout of the facilities, where the proximity of different service areas causes overlapping activities, reducing comfort and efficiency (see [Figure 1.5](#fig1.5)). This deficiency contributes to various issues, such as increased potential for crime, disorderly passenger behavior, and insufficient public transportation facilities needed by the community.

<a name="fig1.5"></a>

![Facilities at KBT (Okezone, 2021). (1) City angkot; (2) City buses; (3) Stationary ojek; (4) Private vehicles; (5) TransJakarta stop; (6) Street vendors (PKL); (7) Online ojek.](https://arnottferels.github.io/a/img/1920/aFJf.webp)

_Figure 1.5. Facilities at KBT (Okezone, 2021 [^okezone/2021]). (1) City angkot; (2) City buses; (3) Stationary ojek; (4) Private vehicles; (5) TransJakarta stop; (6) Street vendors (PKL); (7) Online ojek._

#### 1.2.1.2. Sub-issue: Crime risk

The lack of facilities at KBT has led to a sub-issue, one of which is the high vulnerability to crime, including street gang activities. According to information from Kalideres Police Chief, Kompol Danu Wiyata, there are eight crime-prone areas, such as hypnotism, drugging, and pickpocketing. These areas include rest areas, ticket counters, departure waiting areas, parking areas, city terminal areas, entry and exit routes, eating areas, and around traffic lights to Kalideres Police Station.

#### 1.2.1.3. Sub-issue: Passenger behavior

The lack of facilities at KBT also impacts the disorderly behavior of passengers (see [Figure 1.6](#fig1.6)). Although the facilities are quite complete, the terminal design has not fully met user expectations. This is reflected in the pyramid graph of habitability by Vischer ([Figure 1.7](#fig1.7)), which shows the lack of indicators for a sense of belonging, ownership, and control over the environment (Zhang et al., 2022 [^zhang-etal/2022]).

<a name="fig1.6"></a>

![The atmosphere showing passenger behavior at KBT (Lingga, 2021; Sugiharto, 2018).](https://arnottferels.github.io/a/img/1920/R7c7.webp)

_Figure 1.6. The atmosphere showing passenger behavior at KBT (Lingga, 2021 [^lingga/2021]; Sugiharto, 2018 [^sugiharto/2018])._

<a name="fig1.7"></a>

![Habitability pyramid graph (Vischer, 2007).](https://arnottferels.github.io/a/img/1920/lHdL.webp)

_Figure 1.7. Habitability pyramid graph (Vischer, 2007 [^vischer/2007])._

#### 1.2.1.4. Sub-issue: Public demand for transport facilities

Previous research shows that if public transportation usage increases from 10% to 20% of total trips, traffic accidents could decrease by up to 15% (Sustainable Mobility for All, 2017 [^sustainable-mobility-for-all/2017]). The 2020-2024 National Medium-Term Development Plan (RPJMN) emphasizes the importance of developing and improving public transportation facilities, which has already begun. However, many parties argue that its implementation is still not effective. The government has made efforts to integrate the transportation system through the cashless society program (such as JakLingko, electric buses, and the Intelligent Transport System), offering the public alternatives to private vehicles to reduce congestion.

Minister of Transportation Budi Karya Sumadi, at the National Economic and Industry Committee (KEIN) event on February 22, 2017, emphasized that intermodal continuity across Indonesia is crucial for supporting the stability of the community’s economy. For example, the development of the Bus Rapid Transit (BRT) system in Yogyakarta and Jakarta, as well as Ro-Ro ships (land-sea distribution), shows the government’s efforts to improve intermodal connectivity. Without good integration, public interest in public transportation will remain low, and private vehicles will continue to be the primary choice (Kemenhub, 2017 [^kemenhub/2017]; Kemenhub, 2021 [^kemenhub/2021]).

Sustainable transportation is also a solution to reduce congestion, improve public transportation safety, and support the use of low-emission fuels (Richardson et al., 2000 [^richardson-etal/2000]).

### 1.2.2. Jakarta City issues

On the other hand, there are issues related to Jakarta city, covering two main issues and three sub-issues in this case study.

#### 1.2.2.1. Main issue: Need for a TH

Although Jakarta has various transportation modes, as of 2021, the city still lacks a TH. The lack of integration between transportation systems creates challenges, as seen in the Dukuh Atas area. Previously, this area was not integrated, but it has now become an intermodal hub connecting the MRT, LRT, TransJakarta, KRL, Airport Railway, and online ojek (Kompas, 2021b [^kompas/2021b]). Additionally, this area also provides a space for community interaction (third place) (see [Figure 1.8](#fig1.8)).

The Serambi Temu Dukuh Atas pedestrian bridge (JPM), designed by Urban+ consultants, adopts the transit-oriented development (TOD) concept. This bridge can accommodate up to 9,000 people, is earthquake-resistant, and was designed without support structures over the West Flood Canal. The PB connects Sudirman KRL Station with Dukuh Atas LRT, while reducing parking areas around the area (Farozy, 2021 [^farozy/2021]; Kompas, 2021a [^kompas/2021a]; Kompas, 2021c [^kompas/2021c]; Okta, 2021 [^okta/2021]).

The PB also carries the concept of intermodal connectivity, city identity, urban experience, and inclusive public spaces. This area is equipped with commercial centers supporting various community activities, as shown in the feature diagram ([Figure 1.9](#fig1.9)). This project has full support from the DKI Jakarta Provincial Government and the Indonesian Institute of Architects (IAI) Jakarta (Putri, 2018 [^putri/2018]).

Based on this, the need for a TH in Jakarta is clear. Therefore, a TH must be designed with a focus on accessibility and walkability and must receive full support from all stakeholders. This is needed to encourage a paradigm shift towards more human-centered design rather than car-centered design (Kompas, 2021b [^kompas/2021b]).

<a name="fig1.8"></a>

![Concept design of the Serambi Temu pedestrian bridge (PB) in the day and night (MITJ, 2021b).](https://arnottferels.github.io/a/img/1920/ZFRD.webp)

_Figure 1.8. Concept design of the Serambi Temu pedestrian bridge (PB) in the day and night (MITJ, 2021b [^mitj/2021b])._

<a name="fig1.9"></a>

![Location plan, connectivity, and features of the Serambi Temu Dukuh Atas pedestrian bridge (JPM) (MITJ, 2021a; MITJ, 2021c).](https://arnottferels.github.io/a/img/1920/Dt5E.webp)

_Figure 1.9. Location plan, connectivity, and features of the Serambi Temu Dukuh Atas pedestrian bridge (JPM) (MITJ, 2021a [^mitj/2021a]; MITJ, 2021c [^mitj/2021c])._

#### 1.2.2.2. Main issue: Need for PS (GOS)

Jakarta still lags behind in providing PS and green open spaces (GOS), despite their importance for the city. According to Law No. 26/2007 on Spatial Planning, at least 30% of urban areas must be designated as GOS (20% public and 10% private).

The DKI Jakarta Provincial Government targets 16% public GOS by 2030. GOS plays a crucial role in improving social and environmental impact (Desyani, 2013 [^desyani/2013]; Ekaputra and Sudarwani, 2013 [^ekaputra-and-sudarwani/2013]; Fitri and Kusuma, 2017 [^fitri-and-kusuma/2017]). This target aligns with Sustainable Development Goal (SDG) 11.2, which aims to create a safe, comfortable, and sustainable transportation system (UN, 2021a [^un/2021a]).

However, the lack of PS and GOS is evident, such as at the National Monument (Monas), Jakarta’s city icon, which is unfriendly to visitors. Monas is enclosed, poorly maintained, and has a gate-and-wall concept. As a result, people prefer malls over PS or GOS. Prof. Calderia argued, “A city designed with walls or fences will destroy the sustainability of the city itself” (Juda, 2016 [^juda/2016]).

#### 1.2.2.3. Sub-issue: Traffic congestion

Many countries try to reduce congestion and carbon emissions from motor vehicles (Le and Trinh, 2016 [^le-and-trinh/2016]). In Jakarta, traffic congestion is a major issue, mainly due to the lack of public transportation facilities. Although public transportation is still limited, there is some good news. Danang Parikesit, Chairperson of MTI, mentioned, “Based on MTI data, public transportation usage in Jakarta dropped from 40% to 14% in the last 10 years” (Fathiyah, 2013 [^fathiyah/2013]). This decline has worsened congestion, as more people switch to private vehicles, especially motorcycles, which are considered faster.

![Traffic congestion (Antara, 2022; Noviansyah, 2013).](https://arnottferels.github.io/a/img/1920/H9Ut.webp)

_Figure 1.10. Traffic congestion (Antara, 2022 [^antara/2022]; Noviansyah, 2013 [^noviansyah/2013])._

#### 1.2.2.4. Sub-issue: Rising traffic violations

Traffic violations in Jakarta continue to rise, mainly due to the city’s dependence on private vehicles that dominate road space. As the capital city, Jakarta faces various challenges, including an increasing population and activities, such as students and workers, which worsen traffic congestion and traffic violations (Le and Trinh, 2016 [^le-and-trinh/2016]).

![Traffic violations in Jakarta (Fathahilah, 2020; Manggala, 2018).](https://arnottferels.github.io/a/img/1920/66q9.webp)

_Figure 1.11. Traffic violations in Jakarta (Fathahilah, 2020 [^fathahilah/2020]; Manggala, 2018 [^manggala/2018])._

#### 1.2.2.5. Sub-issue: Need for accessible entertainment destinations

The trend of mall development in Jakarta emerged as a response to the lack of social and economic space in PS. Atmawidjaja stated, “The abundance of malls is a clear sign that the city is sick.” The limited PS makes it difficult to meet the city’s social and environmental needs. In 2019, Jakarta had over 200 malls, a sharp increase from 75 malls in 2012. This means around 125 malls were built in just seven years (Mega, 2019b [^mega/2019b]; Nediari, 2013 [^nediari/2013]).

![From left to right: Malls in Jakarta (Mega, 2019a) and the atmosphere inside the PIM 2 Mall atrium (Kontan, 2019).](https://arnottferels.github.io/a/img/1920/Tzzr.webp)

_Figure 1.12. From left to right: Malls in Jakarta (Mega, 2019a [^mega/2019a]) and the atmosphere inside the PIM 2 Mall atrium (Kontan, 2019 [^kontan/2019])._

### 1.2.3. Summary of case study findings

From the various issues explained, it can be concluded that urban problems arise due to suboptimal planning of public transportation and PS. The main issue in this study is the low walkability in the area. Therefore, an integrated TH design, connected to public transportation and PS, is needed to support the achievement of SDG goal 11 (UN, 2021b [^un/2021b]) and the vision of the government and DKI Jakarta Provincial Government, as outlined in Law 26/2007 and PERGUB 63/2020 (see [Table 1.2](#table1.2) for issue conclusion diagram).

<a name="table1.2"></a>

> [!TIP]
The HTML version of this table is available [here](https://arnottferels.github.io/report/march-thesis/#table1.2).

_Table 1.2. Summary of issues_

| Category | Issue |
| --- | --- |
| Main issues | Human movement - walkability |
| Integration of public transportation systems is still not optimal |
| Lack of PS in urban areas |
| Emerging impacts | Lack of awareness about public transportation |
| Bad habits of public transport passengers |
| Increase in private transportation usage |
| Increased traffic congestion and traffic violations |
| Security risks in public transportation |
| Urgency | Reform of public transportation systems |
| Need for more integrated public transportation |
| Integrated public transportation is being developed |
| Reform of PS |
| Malls becoming the main entertainment destinations |
| Availability of PS and GOS is still limited |
| Many PS are gated |

## 1.3. Problem statement and design objectives

Based on the background and issues outlined, the author has formulated the following problem statement and design objectives:

### 1.3.1. Problem definition

1.  How can an area be designed to prioritize _walkability_, integrate public transportation systems, and provide PS?
2.  How can a model be developed to integrate transportation modes, address the identified issues, and consider the context of this case study?
3.  How should a TH and PS be designed based on the findings from the previous two points?

### 1.3.2. Design objectives

1.  To create a design that emphasizes _walkability_, integrates public transportation systems, and ensures the availability of PS.
2.  To develop a model that effectively integrates transportation modes, addresses the identified issues, and is relevant to the context of the case study.
3.  To design a TH and PS based on the analysis conducted in the previous steps.

## 1.4. Scope of study

1.  The design location is situated in West Jakarta, DKI Jakarta.
2.  The goal of the design is to identify the main challenges and key factors of the site.
3.  The boundaries of the site are defined as shown in [Figure 1.13](#fig1.13).

> [!TIP]
The HTML version of this table is available [here](https://arnottferels.github.io/report/march-thesis/#table1.3).

_Table 1.3. Site boundaries_

| About | Details |
| --- | --- |
| Location data | Near Kalideres Bus Terminal |
| Address | Jl. Daan Mogot, RT.4/RW.1, Kalideres, Kec. Kalideres, West Jakarta, Special Capital Region of Jakarta 11840 |
| Coordinates | -6.156203, 106.707424 |
| Planning area size | ±157,989 m2 |
| Map | Map: (1) Kalideres Terminal Area; (2) Design Area; (3) Daan Mogot Arterial Road; (4) Mokervart River. |

## 1.5. Research approach

The research process for this thesis is structured as follows:

1.  Gathering and reviewing relevant theories, case studies, typologies, and regulations. Identifying the issues present at the site in the architectural and urban context of Jakarta.
2.  Analyzing the design-related challenges concerning the area, city, and architecture.
3.  Defining the design method, establishing the method structure, and determining the necessary input-output parameters and data.
4.  Applying the dynamic multi-layer (DML) design method through six layers.
5.  Developing concepts and ideas that take into account the environmental, climatic, and social factors.
6.  Creating an architectural schematic design based on the analysis from the previous stages.
7.  Concluding the design outcomes.

## 1.6. Contribution and novelty value

The design of the TH using the dynamic multi-layer (DML) approach, which is human- and environment-centered, is expected to bring the following contributions:

-   **Design process**: The architectural design method is developed using a measurable, practical, and efficient dynamic multi-layer (DML) approach.
-   **Socio-cultural impact**: The TH design offers an opportunity for the community to gain a better understanding of the essence of integrated public transportation.
-   **City typology**: This design contributes to shaping the urban landscape and improving the connectivity of Jakarta through better transit hubs.

## 1.7. Thesis structure

> [!TIP]
The HTML version of this table is available [here](https://arnottferels.github.io/report/march-thesis/#table1.4).

_Table 1.4. Thesis structure_

| No | Section | Content |
| --- | --- | --- |
| 1 | Introduction | Background, case study, problem statement and design objectives, scope of study, research approach, contribution and novelty value, thesis structure |
| 2 | Literature review | Approach theory, typology theory, supporting theory, case studies, precedents, regulations, literature review conclusions |
| 3 | Design method | Design method, explanation of the dynamic multi-layer design method |
| 4 | Analysis and simulation | Area, context, and site analysis and simulation process using the dynamic multi-layer design method |
| 5 | Design | Architectural schematic design |
| 6 | Conclusion | Conclusions, recommendations |

# 2. Literature review

_This section will be available soon. In the meantime, view the Indonesian version: [Literature review](https://arnottferels.github.io/report/mars-tesis/#tinjauan-pustaka)._

# 3. Design method

## 3. Design method

[Table 3.1](#table3.1) presents the stages of the design method employed in the development of the TH project.

<a name="table3.1"></a>

> [!TIP]
The HTML version of this table is available [here](https://arnottferels.github.io/report/march-thesis/#table3.1).

_Table 3.1. Design method stages._

| No. | Stage | Description |
| --- | --- | --- |
| 1 | Enrichment | Reviewing theories, case studies, precedents, regulations, and typologies as a foundation for understanding design issues. |
| 2 | Understanding of design issues | Analyzing relevant issues in relation to the project context and site. |
| 3 | Definition of design method | Establishing the design approach and parameters for Objective, Constraints, and Generation in the design process. |
| 4 | Implementation of the dynamic multi-layer method | Applying the dynamic multi-layer design method. See details in Chapter 3.2. |
| 5 | Concept and design ideas | Developing a concept based on issue analysis, design strategies, and the output of the dynamic multi-layer method. |
| 6 | Design development | Refining the design based on the output from stage 4 and the concept and ideas from stage 5. |
| 7 | Design conclusion | Formulating a conclusion that addresses the identified design problems. |

## 3.2. Explanation of the DML design method

[Figure 3.1](#fig3.1) illustrates the DML design method diagram, from the first to the sixth layer, along with the objectives and output of each layer:

<a name="fig3.1"></a>

![The DML design method. The DML process consists of several steps: (1) data collection and geometric model preparation, (2) dynamic system prediction of a complex system using the ABM method, (3) simplification of movement patterns via LS, (4) objective formulation and algorithm preparation using the SPA+A* method, (5) multi-objective optimization using MOO, and (6) clustering of results to determine the optimal solution.](https://arnottferels.github.io/a/img/1536/W3kb.webp)

_Figure 3.1. The DML design method. The DML process consists of several steps: (1) data collection and geometric model preparation, (2) dynamic system prediction of a complex system using the ABM method, (3) simplification of movement patterns via LS, (4) objective formulation and algorithm preparation using the SPA+A* method, (5) multi-objective optimization using MOO, and (6) clustering of results to determine the optimal solution._

Technically, the DML design approach is further explained in [Table 3.2](#table3.2), as follows:

<a name="table3.2"></a>

> [!TIP]
The HTML version of this table is available [here](https://arnottferels.github.io/report/march-thesis/#table3.2).

_Table 3.2. Stages of the DML method._

| Layer | Input | Method |
| --- | --- | --- |
| 1 | Typical traffic data | Collecting representative data from Google Maps Typical Traffic (GMTT) and field observation.Analyzing movement patterns and congestion through data distillation and subsetting representative routes. |
| 2 | Output of Layer 1 | Translating data from Layer 1.Representing it in a set of conditions using ABM for dynamic site modeling. |
| 3 | Output of Layer 2 | Aggregating data from Layer 2 using LS, repeated 35 times. |
| 4 | Output of Layer 3 | Mapping shortest path settings using the SPA+A* method from the centroid of Layer 3 data. |
| 5 | Output of Layer 4 | Simulating and optimizing solutions based on five objectives (two primary, three secondary).Applying nine distance criteria between PS points and the TH using an evolutionary algorithm and NSGA-2. |

# 4. Analysis and simulation

_This section will be available soon. In the meantime, view the Indonesian version: [Analysis and simulation](https://arnottferels.github.io/report/mars-tesis/#analisis-and-simulasi)._

# 5. Design

## 5.1. Context and design concept

Based on the analysis and simulations presented in [Chapter 4](#analysis-and-simulation) (summary illustration: [Figure 5.1](#fig5.1)), the design of the TH and PS is based on the results of `Gen47, Idv30`. Thus, the recommended locations for the PS can be mapped. In accordance with the principles of TOD ([Figure 5.2](#fig5.2)), particularly the aspect of walkability, the connectivity between terminals and stations, as well as the accessibility from residential areas to terminals and stations, can be improved.

<a name="fig5.1"></a>

![Axonometric diagram of movement patterns based on the results of ABM, SPA+A*, and MOO simulations.](https://arnottferels.github.io/a/img/1814/bDRr.webp)

_Figure 5.1. Axonometric diagram of movement patterns based on the results of ABM, SPA+A*, and MOO simulations._

<a name="fig5.2"></a>

![Context of PS coordinate placement, the PS center as a TH, and its radius coverage; TH building blocks, PS points, surrounding building functions, and their radius coverage.](https://arnottferels.github.io/a/img/1371/jL3m.webp)

_Figure 5.2. Context of PS coordinate placement, the PS center as a TH, and its radius coverage; TH building blocks, PS points, surrounding building functions, and their radius coverage._

In [Figure 5.2](#fig5.2) (blue in the center), the building mass is placed at the core of the area, directly above National Road Jl. Daan Mogot. Its form is developed from the previous simulation patterns, ensuring that user movement within the design is both comfortable and efficient.

![Site plan showing the design pattern of platforms, TH buildings, entrances, green spaces, and their context. (a) Section A-A (see: Figure 5.4); (b) Section B-B (see: Figure 5.4).](https://arnottferels.github.io/a/img/1920/cLtF.webp)

_Figure 5.3. Site plan showing the design pattern of platforms, TH buildings, entrances, green spaces, and their context. (a) Section A-A (see: Figure 5.4); (b) Section B-B (see: Figure 5.4)._

<a name="fig5.4"></a>

![Section A-A](https://arnottferels.github.io/a/img/1485/0st3.webp)

_Figure 5.4. Section A-A_

![Section B-B](https://arnottferels.github.io/a/img/1485/ptft.webp)

_Figure 5.5. Section B-B_

Conceptually, each side of the platform entrance is equipped with a ramp to ensure accessibility for persons with disabilities. The main circulation area is covered with a roof for shade. The central green space is located at the core of the platform with a void in its center. Along the north-south axis (see: [Figure 5.4](#fig5.4) and [Figure 5.6](#fig5.6)), there is a semi-public building with a larger shading system compared to the platform.

<a name="fig5.6"></a>

![Visualization of the morning and night ambiance of the semi-public building on the north-south axis, featuring a larger shading system than the platform.](https://arnottferels.github.io/a/img/1920/Tj9S.webp)

_Figure 5.6. Visualization of the morning and night ambiance of the semi-public building on the north-south axis, featuring a larger shading system than the platform._

![Visualization of the entrance gate from various directions: east (toward Jakarta), west (toward Tangerang), south (toward the station/market), and north (toward the terminal).](https://arnottferels.github.io/a/img/1920/MDtd.webp)

_Figure 5.7. Visualization of the entrance gate from various directions: east (toward Jakarta), west (toward Tangerang), south (toward the station/market), and north (toward the terminal)._

## 5.2. Main zones and key features in the design

<a name="fig5.8"></a>

![Axonometric diagram of movement patterns, context, and its implementation in the TH design. (1) Trees and vegetation, (2) green space, (3) ramp, (4) entrance gate.](https://arnottferels.github.io/a/img/1920/HZPV.webp)

_Figure 5.8. Axonometric diagram of movement patterns, context, and its implementation in the TH design. (1) Trees and vegetation, (2) green space, (3) ramp, (4) entrance gate._

The main zone in the TH is divided into two parts (see: [Figure 5.8](#fig5.8)).

The platform functions as a public zone accessible to all users. Meanwhile, the tower is functionally divided: the ground and first floors serve as public zones, while the second, third, and fourth floors are designated as semi-public zones.

The green space feature is positioned at the center of each platform side, creating a more attractive space for users and the surrounding environment. Additionally, this design contributes to the increase of GOS in Jakarta ([Figure 5.9](#fig5.9)).

<a name="fig5.9"></a>

![Visualization of the morning and night ambiance in the green space on the platform.](https://arnottferels.github.io/a/img/1920/ndfx.webp)

_Figure 5.9. Visualization of the morning and night ambiance in the green space on the platform._

## 5.3. Space program, features, and accessibility in the design

<a name="fig5.10"></a>

![Axonometric diagram of the zones, space program, features, and accessibility in the design of the TH.](https://arnottferels.github.io/a/img/1485/s18i.webp)

_Figure 5.10. Axonometric diagram of the zones, space program, features, and accessibility in the design of the TH._

The platform includes several key functions: information center, area for MSME, viewing deck, green space, bridge, and other supporting services. The tower includes service areas, operations, management, restaurant, hotel, multiuse spaces, and additional facilities. Visualizations can be seen in [Figure 5.11](#fig5.11) to [Figure 5.17](#fig5.17).

<a name="fig5.11"></a>

![Sequence from left to right: Visualization of the TJ bus stop on the east, south, west sides, and the circulation area.](https://arnottferels.github.io/a/img/1920/Czpt.webp)

_Figure 5.11. Sequence from left to right: Visualization of the TJ bus stop on the east, south, west sides, and the circulation area._

![Sequence from left to right: Visualization of the entrance gate from the east (Jakarta), west (Tangerang), south (station/market), and north (terminal).](https://arnottferels.github.io/a/img/1920/cBLL.webp)

_Figure 5.12. Sequence from left to right: Visualization of the entrance gate from the east (Jakarta), west (Tangerang), south (station/market), and north (terminal)._

![Visualization of the TJ bus stop and circulation connections from various sides.](https://arnottferels.github.io/a/img/1920/QLr3.webp)

_Figure 5.13. Visualization of the TJ bus stop and circulation connections from various sides._

![Sequence from left to right: Visualization of the circulation transition from the first floor of the platform to/from the tower toward the terminal, and the view from the stairs.](https://arnottferels.github.io/a/img/1920/cpNF.webp)

_Figure 5.14. Sequence from left to right: Visualization of the circulation transition from the first floor of the platform to/from the tower toward the terminal, and the view from the stairs._

![Visualization of the bridge feature connecting the east and west platforms.](https://arnottferels.github.io/a/img/1921/BfTj.webp)

_Figure 5.15. Visualization of the bridge feature connecting the east and west platforms._

![Visualization of the central area used for MSME, information center, and temporary events.](https://arnottferels.github.io/a/img/1920/x5kn.webp)

_Figure 5.16. Visualization of the central area used for MSME, information center, and temporary events._

<a name="fig5.17"></a>

![Visualization of the viewing deck and its appearance from the roadway.](https://arnottferels.github.io/a/img/1920/WVrd.webp)

_Figure 5.17. Visualization of the viewing deck and its appearance from the roadway._

## 5.4. Sequential design sections

The perspective sections illustrate the design from east to west (`X1`–`X7`) and south to north (`Y1`–`Y7`). See [Figure 5.18](#fig5.18) and [Figure 5.19](#fig5.19).

<a name="fig5.18"></a>

![Sequence from top to bottom: Perspective section X1–X7, showing the atmosphere in the public and semi-public zones, including green space and MSME.](https://arnottferels.github.io/a/img/1920/A1Eb.webp)

_Figure 5.18. Sequence from top to bottom: Perspective section X1–X7, showing the atmosphere in the public and semi-public zones, including green space and MSME._

<a name="fig5.19"></a>

![Sequence from top to bottom: Perspective section Y1–Y7, illustrating activities from the public to semi-public zones within the building.](https://arnottferels.github.io/a/img/1920/DfhJ.webp)

_Figure 5.19. Sequence from top to bottom: Perspective section Y1–Y7, illustrating activities from the public to semi-public zones within the building._

## 5.5. Green concept

The green concept is applied through the water collection system in the roof and platform floor gutters to irrigate plants in the green space. Energy efficiency is achieved through vertical openings (windows) and horizontal openings (skylights, voids). The use of prefabricated materials enhances construction efficiency and spatial comfort (see [Figure 5.10](#fig5.10)).

## 5.6. Structure and materials

The main materials used (see [Figure 5.10](#fig5.10)):

1.  **Roof** – Prefabricated tempered glass with a long-span steel structure.
2.  **Facade** – Fiberglass Reinforced Plastic (GRP) panels with a Glass Fiber Reinforced Polymer (GFRP) structure.
3.  **Floor** – Reinforced concrete with an epoxy coating finish.
4.  **Platform floor structure** – Reinforced concrete with a waffle slab system.
5.  **Non-platform floor structure** – Reinforced concrete, with the green space area using a minimum thickness of 1 meter.

## 5.7. Architectural drawings

View online: https://arnottferels.github.io/a/pdf/d3aB.pdf

> [!TIP]
The HTML version of this table is available [here](https://arnottferels.github.io/report/march-thesis/#table5.1).

_Table 5.1. Architectural drawings_

| No. | Drawing | Scale |
| --- | --- | --- |
| 1 | Context | 1:12500 (A3) |
| 2 | Block Plan | 1:6250 (A3) |
| 3 | Site Plan | 1:1250 (A3) |
| 4 | Ground Floor Plan | 1:1250 (A3) |
| 5 | First Floor Plan | 1:1,250 (A3) |
| 6 | Second, Third, and Fourth Floor Plans | 1:1,250 (A3) |
| 7 | Elevations: South, East, West, and North | 1:1250 (A3) |
| 8 | Sections A-A and B-B | 1:1250 (A3) |
| 9 | Detail Section C-C | 1:200 (A3) |
| 10 | Axonometric: Movement patterns, public space points, and context | NTS |
| 11 | Axonometric: Movement patterns and context related to design | NTS |
| 12 | Axonometric: Structure and materials | NTS |
| 13 | Axonometric: Zones, space program, features, and accessibility | NTS |
| 14 | Axonometric: Green concept | NTS |
| 15 | Perspective Sections Y1 and Y2 | NTS |
| 16 | Perspective Sections Y3, Y4, Y5, Y6, and Y7 | NTS |
| 17 | Perspective Sections X1 and X2 | NTS |
| 18 | Perspective Sections X3 and X4 | NTS |
| 19 | Perspective Sections X5, X6, and X7 | NTS |
| 20 | 3D Visualization | NTS |
| 21 | 3D Visualization | NTS |
| 22 | 3D Visualization | NTS |

# 6. Conclusion

## 6. Conclusion

The DML method facilitates the creation of pedestrian-friendly areas, integrated with public transportation, and designed with an optimal layout of PS based on walkability criteria. Through its dynamic approach, DML allows for the analysis of phenomena, simulations, and the selection of optimal solutions. This method synthesizes various transportation issues and case study contexts, establishing it as a comprehensive design guideline. The results of these analyses can further serve as a foundation for the design of TH and PS.

## 6.2. Recommendations

1.  **For designers and architects** – The DML method can be applied and developed in accordance with the specific requirements of a project or case study.
2.  **For researchers and developers** – There is potential for further development of the DML method to enhance its capacity to support walkability-based design, human mobility, and the integration of transportation systems.
3.  **For governmental bodies** – The DML method may be utilized to identify strategic nodes, such as public space locations, and to connect urban areas on a broader scale, ultimately improving the quality of life for the population.
4.  **For the community** – Public involvement in the design process is crucial; the community can contribute by providing feedback to the government, designers, or architects to ensure that spatial planning aligns with local social and cultural needs.

# A. Appendix

See: _[Appendix](https://arnottferels.github.io/report/march-thesis/appendix/)._

# References

[^antara/2022]: Antara (2022): Kemacetan di DKI Jakarta, VOI, Jakarta, retrieved on 27 April 2022, from the website: [https://voi.id/bernas/135620/kemacetan-dki-jakarta-menurun-kini-peringkat-46-kota-termacet-di-dunia-ini-salah-satu-faktornya](https://voi.id/bernas/135620/kemacetan-dki-jakarta-menurun-kini-peringkat-46-kota-termacet-di-dunia-ini-salah-satu-faktornya).
[^desyani/2013]: Desyani, A. (12 Desember 2013): Ahok Optimistis Target Ruang Hijau Tercapai, Tempo.Co, retrieved on 27 April 2022from the website: [https://metro.tempo.co/read/536852/ahok](https://metro.tempo.co/read/536852/ahok).
[^ekaputra-and-sudarwani/2013]: Ekaputra, Y. D., and Sudarwani, M. M. (2013): Implikasi Program Pengembangan Kota Hijau (P2KH) Terhadap Pemenuhan Luasan Ruang Terbuka Hijau (RTH) Perkotaan, Prosiding SNST Fakultas Teknik, retrieved on 27 April 2022from the website: [https://publikasiilmiah.unwahas.ac.id/index.php/PROSIDING_SNST_FT/article/view/717](https://publikasiilmiah.unwahas.ac.id/index.php/PROSIDING_SNST_FT/article/view/717), 1(1).
[^farozy/2021]: Farozy, I. H. (3 September 2021): Beginilah Rancang Bangun Jembatan Pemadu Moda Dukuh Atas, retrieved on 24 April 2022, from the website: redigest.web.id/2021/09/beginilah.
[^fathahilah/2020]: Fathahilah, B. (2020): Pengendara Motor Menerobos Trotoar Pejalan Kaki, Media Indonesia, Jakarta, retrieved on 27 April 2022, from the website: [https://mediaindonesia.com/megapolitan/328182/ini-15-pelanggaran-lalu-lintas-yang-akan-ditilang](https://mediaindonesia.com/megapolitan/328182/ini-15-pelanggaran-lalu-lintas-yang-akan-ditilang).
[^fathiyah/2013]: Fathiyah, A. (16 Juni 2013): Ini Alasan Jakarta Semakin Macet, retrieved on 27 April 2022, from the website: [https://metro.tempo.co/read/488595/ini-alasan-jakarta-semakin-macet](https://metro.tempo.co/read/488595/ini-alasan-jakarta-semakin-macet).
[^fitri-and-kusuma/2017]: Fitri, U. A., and Kusuma, R. P. (2017): Analisis Kebijakan Pemerintah Provinsi DKI Jakarta dalam Membangun Ruang Publik Terpadu Ramah Anak (RPTRA) Kaitannya Berdasarkan Kerangka SDGs Poin 11, Balcony, 1(1), 77–89.
[^google-maps/2022a]: Google Maps (2022a): Kalideres, Kec. Kalideres, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta, retrieved on 24 Mei 2022, from the website: [https://goo.gl/maps/tzL58PBChagmGxzo6](https://goo.gl/maps/tzL58PBChagmGxzo6).
[^itdp/2021]: ITDP (24 Februari 2021): Jakarta, Indonesia to Receive the 2021 Sustainable Transport Award, retrieved on 23 April 2022, from the website: [https://www.itdp.org/press-release/jakarta](https://www.itdp.org/press-release/jakarta).
[^juda/2016]: Juda, D. (2 Januari 2016): More open space in Jakarta, please!!, retrieved on 27 April 2022from the website: [https://www.thejakartapost.com/news/2016/01/02/more-open-space-jakarta-please.html](https://www.thejakartapost.com/news/2016/01/02/more-open-space-jakarta-please.html).
[^kemenhub/2021]: Kemenhub (15 Juni 2021): Menuju Transportasi Perkotaan yang Ramah dan Nyaman, retrieved on 24 April 2022, from the website: [http://dephub.go.id/post/read/menuju-transportasi-perkotaan-yang-ramah-dan-nyaman](http://dephub.go.id/post/read/menuju-transportasi-perkotaan-yang-ramah-dan-nyaman).
[^kemenhub/2017]: Kemenhub (22 Februari 2017): Menhub : Transportasi Sudah Menjadi Kebutuhan Dasar Masyarakat, retrieved on 24 April 2022, from the website: [http://dephub.go.id/post/read/menhub-transportasi-sudah-menjadi-kebutuhan-dasar-masyarakat](http://dephub.go.id/post/read/menhub-transportasi-sudah-menjadi-kebutuhan-dasar-masyarakat).
[^kompas/2021c]: Kompas (14 Oktober 2021c): “Transport Hub” Dukuh Atas Resmi Dicanangkan, seperti Apa Fungsinya?, retrieved on 24 April 2022from the website: [https://megapolitan.kompas.com/read/2021/10/14/08065581/transport](https://megapolitan.kompas.com/read/2021/10/14/08065581/transport).
[^kompas/2021a]: Kompas (28 September 2021a): Desain JPM Dukuh Atas, Ramah Pejalan Kaki dan Pesepeda, retrieved on 24 April 2022from the website: [https://www.kompas.com/properti/read/2021/09/29/060000421/desain-jpm-dukuh-atas-ramah-pejalan-kaki-dan-pesepeda](https://www.kompas.com/properti/read/2021/09/29/060000421/desain-jpm-dukuh-atas-ramah-pejalan-kaki-dan-pesepeda).
[^kompas/2021b]: Kompas (30 September 2021b): 8 Oktober, Transport Hub Pertama di Indonesia Mulai Dibangun, retrieved on 24 April 2022from the website: [https://www.kompas.com/properti/read/2021/09/30/170616521/8](https://www.kompas.com/properti/read/2021/09/30/170616521/8).
[^kontan/2019]: Kontan (2019): Atraksi flying trapeze di Pondok Indah Mall 2, Jakarta, Kontan, Jakarta, retrieved on 27 April 2022, from the website: [https://industri.kontan.co.id/news/pondok-indah-mall-pim-kunjungan-periode-natal-dan-tahun-baru-akan-naik-20](https://industri.kontan.co.id/news/pondok-indah-mall-pim-kunjungan-periode-natal-dan-tahun-baru-akan-naik-20).
[^le-and-trinh/2016]: Le, T. P. L., and Trinh, T. A. (2016): Encouraging Public Transport Use to Reduce Traffic Congestion and Air Pollutant: A Case Study of Ho Chi Minh City, Vietnam, Procedia Engineering, 142, 236–243. [https://doi.org/10.1016/j.proeng.2016.02.037](https://doi.org/10.1016/j.proeng.2016.02.037)
[^lingga/2021]: Lingga, R. A. (2021): Bus Sinar Jaya di Terminal Kalideres, Antara, Jakarta, retrieved from the website: [https://kabar24.bisnis.com/read/20210503/15/1389537/jelang](https://kabar24.bisnis.com/read/20210503/15/1389537/jelang).
[^manggala/2018]: Manggala, A. (2018): Sejumlah pengendara sepeda motor melawan arus lalu ketika melintasi Jalan Ciledug Raya, Jakarta, Liputan6, Jakarta, retrieved on 27 April 2022, from the website: [https://www.liputan6.com/otomotif/read/3657076/tekan](https://www.liputan6.com/otomotif/read/3657076/tekan).
[^mega/2019a]: Mega, R. (2019a): Jakarta, city with the largest number of malls, Local Guides Connect, retrieved on 27 April 2022, from the website: [https://www.localguidesconnect.com/t5/General-Discussion/Jakarta-city-with-the-largest-number-of-malls/td-p/2026606](https://www.localguidesconnect.com/t5/General-Discussion/Jakarta-city-with-the-largest-number-of-malls/td-p/2026606).
[^mega/2019b]: Mega, R. (22 Oktober 2019b): Jakarta, city with the largest number of malls, retrieved on 27 April 2022, from the website: [https://www.localguidesconnect.com/t5/General-Discussion/Jakarta-city-with-the-largest-number-of-malls/td-p/2026606](https://www.localguidesconnect.com/t5/General-Discussion/Jakarta-city-with-the-largest-number-of-malls/td-p/2026606).
[^mitj/2021a]: MITJ (2021a): Fitur Desain JPM Dukuh Atas, MITJ, Jakarta, retrieved from the website: [https://redigest.web.id/2021/09/beginilah](https://redigest.web.id/2021/09/beginilah).
[^mitj/2021b]: MITJ (2021b): Ilustrasi Jembatan Pemadu Moda (JPM) Dukuh Atas, MITJ, Jakarta, retrieved from the website: [https://redigest.web.id/2021/09/beginilah](https://redigest.web.id/2021/09/beginilah).
[^mitj/2021c]: MITJ (2021c): Site Map JPM Dukuh Atas, MITJ, Jakarta, retrieved from the website: [https://redigest.web.id/2021/09/beginilah](https://redigest.web.id/2021/09/beginilah).
[^nediari/2013]: Nediari, A. (2013): Fenomena Mal bagi Masyarakat Urban di Jakarta, Humaniora, 4(1), 183. [https://doi.org/10.21512/humaniora.v4i1.3428](https://doi.org/10.21512/humaniora.v4i1.3428)
[^noviansyah/2013]: Noviansyah, A. (2013): Ilustrasi kemacetan lalu lintas, Tempo, Jakarta, retrieved on 27 April 2022, from the website: [https://metro.tempo.co/read/488595/ini-alasan-jakarta-semakin-macet](https://metro.tempo.co/read/488595/ini-alasan-jakarta-semakin-macet).
[^okezone/2021]: Okezone (2021): Terminal Kalideres, Okezone, Jakarta, retrieved on 23 April 2022, from the website: [https://megapolitan.okezone.com/read/2021/04/10/338/2392328/](https://megapolitan.okezone.com/read/2021/04/10/338/2392328/).
[^okta/2021]: Okta, M. (6 September 2021): Jembatan Penyeberangan Multi Guna “Serambi Temu” Koneksikan Beragam Moda Transportasi, retrieved on 24 April 2022, from the website: [https://www.kabarpenumpang.com/jembatan-penyeberangan-multi-guna-serambi-temu-koneksikan-beragam-moda-transportasi/](https://www.kabarpenumpang.com/jembatan-penyeberangan-multi-guna-serambi-temu-koneksikan-beragam-moda-transportasi/).
[^prambors/2020]: Prambors (2 November 2020): Jakarta Terpilih sebagai Kota Terbaik di Dunia Versi Sustainable Transport Award (STA) 2021, retrieved on 23 April 2022, from the website: [https://www.pramborsfm.com/news/jakarta-terpilih-sebagai-kota-terbaik-di-dunia-versi-sustainable-transport-award-sta-2021](https://www.pramborsfm.com/news/jakarta-terpilih-sebagai-kota-terbaik-di-dunia-versi-sustainable-transport-award-sta-2021).
[^putri/2018]: Putri, I. C. (28 September 2018): Malam Penghargaan Sayembara Transport Hub di Kawasan Dukuh Atas | IAI Jakarta, retrieved on 26 April 2022, from the website: [https://iai-jakarta.org/pustaka/lihat/malam-penghargaan-sayembara-transport-hub-di-kawasan-dukuh-atas](https://iai-jakarta.org/pustaka/lihat/malam-penghargaan-sayembara-transport-hub-di-kawasan-dukuh-atas).
[^richardson-etal/2000]: Richardson, H. W., Bae, C.-H. C., and Baxamusa, M. (2000): Compact Cities in Developing Countries: Assessment and Implications dalam Compact Cities, Routledge, retrieved from the website: [https://www.taylorfrancis.com/chapters/edit/10.4324/9780203478622-7/compact-cities-developing-countries-assessment-implications-harry-richardson-chang-hee-christine-bae-murtaza-baxamusa](https://www.taylorfrancis.com/chapters/edit/10.4324/9780203478622-7/compact-cities-developing-countries-assessment-implications-harry-richardson-chang-hee-christine-bae-murtaza-baxamusa).
[^sugiharto/2018]: Sugiharto, B. A. (2018): Ilustrasi, CNNIndonesia, Jakarta, retrieved from the website: [https://www.cnnindonesia.com/nasional/20180617155634-20-306816/puncak](https://www.cnnindonesia.com/nasional/20180617155634-20-306816/puncak).
[^sustainable-mobility-for-all/2017]: Sustainable Mobility for All (2017): Global Mobility Report 2017: Tracking Sector Performance, retrieved on 26 April 2022, from the website: [http://hdl.handle.net/10986/28542](http://hdl.handle.net/10986/28542).
[^un/2021a]: UN (2021a): Goal 11 Department of Economic and Social Affairs, retrieved on 27 April 2022, from the website: [https://sdgs.un.org/goals/goal11](https://sdgs.un.org/goals/goal11).
[^un/2021b]: UN (2021b): Goal 11 Infographic, UN, New York, retrieved from the website: [https://unstats.un.org/sdgs/report/2021/](https://unstats.un.org/sdgs/report/2021/).
[^vischer/2007]: Vischer, J. C. (2007): The effects of the physical environment on job performance: towards a theoretical model of workspace stress, Stress and Health, 23(3), 175–184. [https://doi.org/10.1002/smi.1134](https://doi.org/10.1002/smi.1134)
[^zhang-etal/2022]: Zhang, Y., Xiao, B., Al-Hussein, M., and Li, X. (2022): Prediction of human restorative experience for human-centered residential architecture design: A non-immersive VR–DOE-based machine learning method, Automation in Construction, 136, 104189. [https://doi.org/10.1016/j.autcon.2022.104189](https://doi.org/10.1016/j.autcon.2022.104189)

