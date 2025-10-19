# Enhancing low-cost apartment performance: A comparative study on passive design implementation

```bibtex
@article{laraetal_2025_enha,
  title = {Enhancing low-cost apartment performance: A comparative study on passive design implementation},
  shorttitle = {Enhancing low-cost apartment performance},
  author = {Larasati, Dewi and Asawa, Takeshi and Ferels, Arnott and Aisha, Heidi and Hanifah, Yulita},
  publisher = {{INSIGHT: Indonesian Society for Knowledge and Human Development}},
  volume = 14,
  number = 4,
  pages = 10,
  doi = {10.18517/ijaseit.15.3.20462},
  isbn = {2088-5334},
  url = {https://doi.org/10.18517/ijaseit.15.3.20462},
  abstract = {The national infrastructure program, designed to improve connectivity between urban centers and surrounding regions, has significantly increased apartment construction, particularly in transit-oriented development (TOD) zones. However, this expansion raises concerns over energy consumption and carbon emissions throughout the building\textquoteright{}s life cycle. This study evaluates the green performance of an environmentally sustainable apartment prototype that incorporates passive design strategies to reduce cooling energy demand. The study employs various performance tools, including OTTV calculations for EDGE buildings, OpenStudio, and Sefaira, to assess the prototype\textquoteright{}s effectiveness in reducing cooling load, improving thermal efficiency, lowering OTTV, enhancing energy efficiency, and reducing carbon emissions. The prototype outperforms nearby standard public housing units, achieving a 34\% reduction in OTTV, a 4\% improvement in energy efficiency, a 17.6\% decrease in annual energy use intensity (EUI) (81.4 kWh/m2/year vs. 98.8 kWh/m2/year), and a 20\% reduction in cooling energy consumption. Additionally, field measurements show a temperature difference of 7 to 9\textdegree{}C between indoor and outdoor environments during daylight hours. These results suggest that the prototype can be a benchmark for low-emission, energy-efficient apartment models in Indonesia. Future research should explore the long-term performance of passive design, the cost-effectiveness of low-cost housing, real-time data collection via IoT integration, and studies on occupant behavior and satisfaction.},
  journaltitle = {International Journal on Advanced Science, Engineering and Information Technology},
  shortjournal = {Int. J. Adv. Sci. Eng. Inf. Technol.},
  date = {2025-06-06},
  keywords = {Apartment,Carbon emission,Cooling load,Decarbonisation,Green building,Low energy,Urban housing},
  language = {en},
  pagetotal = 10
}

```

# Abstract

The national infrastructure program, designed to improve connectivity between urban centers and surrounding regions, has significantly increased apartment construction, particularly in transit-oriented development (TOD) zones. However, this expansion raises concerns over energy consumption and carbon emissions throughout the building’s life cycle. This study evaluates the green performance of an environmentally sustainable apartment prototype that incorporates passive design strategies to reduce cooling energy demand. The study employs various performance tools, including OTTV calculations for EDGE buildings, OpenStudio, and Sefaira, to assess the prototype’s effectiveness in reducing cooling load, improving thermal efficiency, lowering OTTV, enhancing energy efficiency, and reducing carbon emissions. The prototype outperforms nearby standard public housing units, achieving a 34% reduction in OTTV, a 4% improvement in energy efficiency, a 17.6% decrease in annual energy use intensity (EUI) (81.4 kWh/m2/year vs. 98.8 kWh/m2/year), and a 20% reduction in cooling energy consumption. Additionally, field measurements show a temperature difference of 7 to 9°C between indoor and outdoor environments during daylight hours. These results suggest that the prototype can be a benchmark for low-emission, energy-efficient apartment models in Indonesia. Future research should explore the long-term performance of passive design, the cost-effectiveness of low-cost housing, real-time data collection via IoT integration, and studies on occupant behavior and satisfaction.

# Keywords

Apartment; Carbon emission; Cooling load; Decarbonisation; Green building; Low energy; Urban housing

---

# 1. Introduction

Urbanization is increasing rapidly, with 60% growth expected by 2030 [^1], [^2], [^3]. The global urban population grew from 30% in 1950 to 56% in 2020 and is projected to surpass 68% by 2050 [^4]. According to World Population Prospects (2019) [^4] by the United Nations Population Division, nine countries, including India, Indonesia, and Nigeria, will account for most of the global population growth during this time. This trend could have a significant impact on urban development [^4]. This growth has caused a shortage of urban housing, leading to strategies like Transit Oriented Development (TOD) zones to improve city connectivity [^5], [^6], [^7].

To address housing shortages, Indonesia launched the National One Million House Program in 2015 [^8], [^9]. Between 2018 and 2021, homeownership rose from 57.9 million to 62.9 million. However, a significant backlog of 11.4 million units persisted in 2017, with Jakarta recording the lowest homeownership rate at 48.33%, compared to the national average of 79.61%. Most newly constructed units targeted low-income urban residents and were categorized as low-cost housing [^8], [^10]. By 2019, the backlog had decreased to 6.8 million units [^11]. To further address housing needs, the Indonesian government increased its annual housing construction target to 3 million units by 2024, reflecting its commitment to accelerating housing provision [^12].

Despite this progress, the rapid growth of apartment construction has raised concerns about escalating energy consumption. The UN Environment Program predicts a 30% increase in CO2 emissions and a 40% rise in energy use due to building construction [^13]. Previous research highlights the significant role Southeast Asian nations, particularly Indonesia, play in the global rise in electricity usage [^14], [^15]. Indonesia is among the top ten CO2 emitters [^14], [^15] and has steadily increased energy consumption [^16]. This increase was recorded at 0.99%, reaching 939.100 million Barrels of Oil Equivalent (BOE) in 2021, down from 1.23 billion BOE in 2017. These trends align with Indonesia’s commitment at COP 21 UNFCCC to reduce national emissions by 29% through its Nationally Determined Contributions (NDCs) by 2030 [^17], [^18], [^19], [^20].

The household sector [^21], [^22], [^23], Indonesia’s third-largest energy consumer [^16], drives significant demand, mainly due to increased air conditioning use [^16]. Globally, households contribute 72% of greenhouse gas emissions [^24], [^25], [^26], highlighting the need for energy-efficient designs [^27], [^28], [^29], [^30]. In Indonesia, this sector is a key focus for reducing energy consumption under government policies [^31], [^32], [^33].

This study evaluates the performance of a low-energy apartment prototype (Prototype Apartment) and compares it with that of the National Standard Low-Cost Apartment constructed in Tegal City. Using the EDGE Building [^34], [^35], OpenStudio [^36], [^37], and Sefaira [^38], [^39], [^40] the analysis assesses key metrics, including cooling load, Overall Thermal Transfer Value (OTTV) [^41], [^42], [^43], energy efficiency, and carbon emissions [^44], [^45].

The primary objective of this study is to evaluate the performance of the low-energy apartment prototype, specifically in terms of its ability to reduce energy consumption through the application of passive design strategies. The analysis aims to assess the prototype’s effectiveness in meeting key performance indicators, such as cooling energy demand, thermal efficiency, OTTV, energy efficiency, and carbon emissions. By comparing the prototype’s performance with standard housing units, the study seeks to highlight the tangible benefits of adopting energy-efficient designs.

In addition, the study aims to encourage architects, urban planners, and building designers to integrate passive design strategies into housing projects. Passive design focuses on optimizing natural environmental factors—such as sunlight, ventilation, and shading—to reduce reliance on artificial cooling or heating systems. This approach not only addresses the growing energy demands in urban areas but also aligns with global sustainability goals, particularly in reducing carbon emissions.

# 2. Materials and method

## 2.1. Method

## 2.2. Design passive strategy implementation on low-energy apartment

The application of passive design in buildings helps save energy, reduce cooling demands, and lower carbon emissions [^46], [^47], [^48], [^49], [^50], [^51]. In tropical climates, it reduces heat buildup by ensuring proper orientation [^47], [^48], [^49], [^50], adding wall and window shading, optimizing the Window-to-Wall Ratio (WWR) [^52], [^53], [^54], improving natural ventilation [^55], [^56], selecting suitable glazing and materials [^52], [^53], [^54], and using wall and roof insulation [^57], [^58], [^59].

[Table 1](#table1) presents a comprehensive overview of various passive design strategies and their impact on building energy performance. It provides details on implementation methods and their effects on cooling loads and energy efficiency, serving as a reference for this research.

<a name="table1"></a>

> [!TIP]
The HTML version of this table is available [here](https://arnottferels.github.io/research/enhancing-low-cost-apartment-performance/#table1).

_Table 1. The various alternative of passive design strategy._

| Design Strategy | Implementation and Impact |
| --- | --- |
| Appropriate Building Orientation [^47], [^48], [^49], [^50] | See also Figure 4b.Impact: Optimizing orientation with most surfaces facing North–South reduces cooling loads by 8% to 11%. |
| Optimum WWR [^52], [^53], [^54] | For implementation, see row 1 and Figure 4b.Impact: Optimize WWR at 24% with horizontal overhangs, ensuring balanced radiation on both sides. WWR should not exceed 40%. |
| Opening for Natural Ventilation [^55], [^56] | For implementation, see Figure 2a and Figure 2b.Impact: Cross ventilation and proper building layout improve cooling efficiency. Natural cross-ventilation effectiveness depends on windows, wind fins, and suitable shading. This approach can reduce cooling load by up to 19%. |
| Glazing [^52], [^53], [^54] | See also Figure 1c.Impact: Double Low-E glass is superior for blocking heat and allowing light, resulting in energy savings up to 35.2%. |
| Shading Device | See also Figure 1c.Impact: Horizontal shading devices of 0.3m, 0.6m, and 0.9m reduce cooling loads by 3%, 7%, and 10% on the East facade, and 3%, 6%, and 9% on the West facade, respectively. |
| Insulation and Color of Walls and Roof [^57], [^58], [^59] | See also Figure 2c.Impact: Insulating external walls and roofs maintain stable temperatures. Using bright colors and reflective paint reduces heat buildup and reflects solar radiation. A low dividing wall along the roof and a roof slope of at least 30° protect from radiation and rain. |

The Prototype Apartment incorporates several critical design considerations. The identification process revealed key aspects influencing energy efficiency, including building orientation, thermal insulation, natural ventilation strategies, daylight optimization, and integrating renewable energy sources. These considerations, as detailed below [^60], serve as fundamental principles in shaping the prototype’s overall sustainability and performance:

1.  _Orientation Analysis_: The building’s orientation was determined by analyzing solar paths and wind directions based on climate data from 2007 to 2019. This analysis identified 22.5° North-East as the optimal orientation for maximizing natural ventilation and minimizing solar heat gain.
2.  _Building Mass Simulation_: To assess wind movement within and around the structure, simulations of the building mass were conducted. These simulations informed the voids’ design, shape, position, and size to enhance natural airflow and overall ventilation efficiency.
3.  _Typology Study_: A detailed typology study was conducted to inform key design decisions based on an analysis of existing apartment buildings. This included determining the configuration of the building mass, the placement of cores, the positioning of bathrooms, the size of units, and other critical architectural elements.
4.  _Investigation of Passive Design Components_: Several passive design elements were explored, including the strategic placement of openings (such as doors and windows), the use of shading devices, the incorporation of insulation, optimization of the WWR, and wind fin installation. These components were integrated to enhance thermal comfort and reduce energy consumption.

[Figure 1](#fig1) and [Figure 2](#fig2) provide visual representations of the design considerations and the outcomes derived from the case study of the low-energy Prototype Apartment. These figures highlight the implementation of passive design strategies and their contribution to the building’s overall energy performance.

<a name="fig1"></a>

![Prototype Apartment: (a) Perspective from the main entrance; (b) Aerial view; (c) Passive design components in the façade; (d) Unit layout (Source: The Authors).](https://arnottferels.github.io/a/img/1920/F3OL.webp)

_Figure 1. Prototype Apartment: (a) Perspective from the main entrance; (b) Aerial view; (c) Passive design components in the façade; (d) Unit layout (Source: The Authors)._

<a name="fig2"></a>

![Prototype Apartment: (a) Adjustable wind fin element in the void design for optimal cross-ventilation [60]; (b) 1:1 dimensions of the adjustable wind fin model.](https://arnottferels.github.io/a/img/1920/wHhv.webp)

_Figure 2. Prototype Apartment: (a) Adjustable wind fin element in the void design for optimal cross-ventilation [^60]; (b) 1:1 dimensions of the adjustable wind fin model._

## 2.3. Methodology

This study conducts a comparative analysis of two apartment buildings as case studies: the Prototype Apartment and National Standard Low-Cost Apartment constructed in Tegal City. The details of the location are illustrated in [Figure 3](#fig3) and [Figure 4](#fig4). Both cases are situated in Jl. Lingkar Utara, Tegalsari, Tegal City, Central Java [^61].

<a name="fig3"></a>

![Prototype Standard Apartment (Source: Authors).](https://arnottferels.github.io/a/img/1921/sHrX.webp)

_Figure 3. Prototype Standard Apartment (Source: Authors)._

<a name="fig4"></a>

![Case Study Location: (a) Standard Apartment, (b) Prototype Apartment [61], with building orientation based on wind direction analysis.](https://arnottferels.github.io/a/img/1921/xrrL.webp)

_Figure 4. Case Study Location: (a) Standard Apartment, (b) Prototype Apartment [^61], with building orientation based on wind direction analysis._

The two case study buildings will be evaluated through a comparative analysis using various applications and calculations based on the passive design components inherent in the buildings’ existing conditions. This analytical approach employs a comparative method of simulation results, utilizing four distinct methodologies:

1.  Building energy calculations using the EDGE Building application [^34]: This application computes utility savings and reduced carbon footprint of green buildings compared to a base case, showcasing cost-effective and energy-efficient strategies.
2.  Cooling energy calculations using the OpenStudio application: OpenStudio is a plug-in for creating, managing, and simulating building geometry. It offers comprehensive features for model creation, simulation execution, climate control, thermal zone sharing, weather data input, and HVAC system control. Results are presented in a viewer for easy traceability, planning, and comparison, particularly regarding cooling load.
3.  Simulation of building OTTV calculations: By Regulation of the Minister of Public Works and Public Housing No. 02/PRT/M/2015 on Green Buildings [^62], this methodology ensures that the maximum allowable values for RTTV and OTTV are 35 W/m2.
4.  Simulation of building natural lighting using Sefaira software [^38]: Developed by Trimble, Sefaira enables rapid energy simulation with precise results and an intuitive visual interface. This project uses Sefaira to simulate natural lighting for each case study. A simplified 3D model is created using SketchUp [^63] and simulated with the Sefaira for SketchUp plugin. Two distinct models represent each case study.
5.  Field observation: This includes indoor and outdoor dry air temperature measurements to ensure the efficacy of cooling load reduction measures. The obtained data is carefully analyzed and compared against simulation results and field data measurements.

Field observations evaluated indoor thermal comfort conditions under varying wind fin configurations. Measurements were carried out at five designated points during the hottest time of the day, with different wind fin positions. To ensure reliability, the measurements were repeated twice under clear weather conditions for verification purposes. The instruments used for the assessment included thermometers, hygrometers, and anemometers, each serving a specific function: thermometers measured air temperature, hygrometers recorded humidity levels, and anemometers gauged wind speed. These tools provided the data necessary to calculate the Physiological Equivalent Temperature (PET), a widely used thermal index that evaluates heat balance and thermal comfort conditions.

The study examined the performance of wind fins in five distinct configurations: W1 (completely closed), W2 (opened to 45 cm), W3 (opened to 90 cm), W4 (opened to 135 cm), and W5 (fully open). These configurations allowed for a comprehensive analysis of how different wind fin positions impact indoor thermal comfort. [Figure 5a](#fig5) and [Figure 5b](#fig5) illustrate the wind fin configurations used in the study.

<a name="fig5"></a>

![Wind fin configurations: (a) fully open wind fin condition (W5) and (b) fully closed wind fin condition (Source: The Authors).](https://arnottferels.github.io/a/img/1920/uFjb.webp)

_Figure 5. Wind fin configurations: (a) fully open wind fin condition (W5) and (b) fully closed wind fin condition (Source: The Authors)._

[Figure 6](#fig6) presents the overall research framework, outlining the systematic approach used in this study. It illustrates the key stages of the research process, including data collection, analysis methods, and highlights the relationship between theoretical foundations, field observations, and simulation.

<a name="fig6"></a>

> [!TIP]
The HTML version of this svg is available [here](https://arnottferels.github.io/research/enhancing-low-cost-apartment-performance/#fig6).

_Figure 6. Research framework (Source: The Authors)._

# 3. Results and discussion

## 3.1. Tegal city climate conditions: Case study location

This case study, conducted in Tegal City on the north coast of Java Island, evaluates the energy performance of two similarly oriented buildings within a humid tropical climate. The analysis focuses on the impact of energy-efficient planning on energy loads, utilizing simulation data to assess thermal sensations and comfort levels. According to [Figure 7](#fig7), thermal sensations in Tegal are predominantly classified as “very uncomfortable” or “uncomfortable” during daylight hours, as defined by the ASHRAE thermal sensation and comfort scale (refer to [Table 2](#table2)). Achieving optimal thermal comfort during the day is particularly challenging due to high temperatures, with acceptable comfort levels generally occurring between 6 PM and 8 AM.

<a name="table2"></a>

> [!TIP]
The HTML version of this table is available [here](https://arnottferels.github.io/research/enhancing-low-cost-apartment-performance/#table2).

_Table 2. ASHRAE thermal sensation and comfort scale [^64]._

| Vote | Thermal Sensation | Comfort Sensation | Zone of Thermal Effect |
| --- | --- | --- | --- |
| (a) | (b) | (c) | (d) | (e) |
|  | 9 | Very hot | Very uncomfortable | Non-compensable heat |
| +3 | 8 | Hot | Uncomfortable |  |
| +2 | 7 | Warm | Slightly uncomfortable | Sweat evaporation |
| +1 | 6 | Slightly warm |  | Compensable |
| 0 | 5 | Neutral | Comfortable | Vasomotor compensable |
| -1 | 4 | Slightly cool |  |  |
| -2 | 3 | Cool | Slightly uncomfortable | Shivering compensable |
| -3 | 2 | Cold |  |  |
|  | 1 | Very cold | Uncomfortable | Non-compensable cold |

<a name="fig7"></a>

![The climate condition of a case study based on climate-based energy (CBE) simulation [64].](https://arnottferels.github.io/a/img/1920/hbrf.webp)

_Figure 7. The climate condition of a case study based on climate-based energy (CBE) simulation [^64]._

[Table 3](#table3) provides an overview of PET conditions in Tegal City, revealing significant thermal discomfort during the daytime. PET values rise from “Cool” at 6 AM (20.2°C) to “Slightly warm” at 8 AM (32.8°C), becoming “Very hot” by 10 AM (42.1°C), peaking at 12 PM (45.4°C), and remaining “very hot” at 2 PM (45.2°C). Conditions only improve to “warm” by 4 PM (37.9°C) and gradually cool to “Slightly cool” from 6 PM (24.5°C) onward, reaching 23°C by 10 PM.

<a name="table3"></a>

> [!TIP]
The HTML version of this table is available [here](https://arnottferels.github.io/research/enhancing-low-cost-apartment-performance/#table3).

_Table 3. PET conditions in Tegal City [^64]._

| Time (hour) | PET (°C) | Thermal Sensation |
| --- | --- | --- |
| 6:00 | 20.2 | Cool |
| 8:00 | 32.8 | Slightly warm |
| 10:00 | 42.1 | Very hot |
| 12:00 | 45.4 | Very hot |
| 14:00 | 45.2 | Very hot |
| 16:00 | 37.9 | Warm |
| 18:00 | 24.5 | Slightly cool |
| 20:00 | 23.5 | Slightly cool |
| 22:00 | 23.0 | Slightly cool |

The sustained “Very hot” PET levels during daylight hours lead to significant thermal discomfort, far exceeding the comfort range defined by ASHRAE standards. These conditions make it extremely challenging to achieve acceptable thermal comfort without using controlled air conditioning, resulting in high energy consumption for cooling. To address these issues, it is essential for building design to incorporate passive design strategies that reduce cooling energy loads. These strategies could include optimizing building orientation, implementing effective shading, enhancing natural ventilation, and improving insulation to mitigate extreme heat and improve overall indoor thermal comfort.

## 3.2. EDGE building simulation result

The EDGE simulation results for the Prototype Apartment and Standard Apartment demonstrate significant differences in energy consumption and carbon emissions, emphasizing the importance of integrating energy-efficient design strategies ([Table 4](#table4) and [Table 5](#table5)). According to the Indonesian National Standard (SNI 6389:2011) [^65], [^66] , residential buildings must limit energy use to a maximum of 240 kWh/m2/year. The Prototype Apartment, with an annual energy consumption of 70 kWh/m2/year, performs exceptionally well, consuming only 29% of the allowable energy under the SNI standard. In contrast, the Standard Apartment consumes 97.74 kWh/m2/year, which, while compliant with SNI, is 39.6% higher than the Prototype Apartment’s energy use. Similarly, in terms of carbon emissions, the Prototype Apartment produces 32.61 tCO2/year, significantly lower than the Standard Apartment’s 137.95 tCO2/year, representing a 76% reduction in emissions.

<a name="table4"></a>

> [!TIP]
The HTML version of this table is available [here](https://arnottferels.github.io/research/enhancing-low-cost-apartment-performance/#table4).

_Table 4. EDGE building simulation result (Prototype Apartment)._

| Prototype Apartment | Total |
| --- | --- |
| Unit Area (m2) | 43.2 |
| Bedroom | 2 |
| Floor Number | 4 |
| Occupancy | 5 |
| Implementation | Description |
| Reduced WWR | 10.35% |
| External Shading Device | AASF 0.45 |
| Wall Insulation | U-Value 0.22 |
| Natural Ventilation | Implemented |
| Category | Calculation |
| Final Energy Use | 254.15 kWh/month/unit |
| Energy Use Total | 3,049.80 kWh/month |
| Use per m2 (monthly) | 5.88 kWh/month/m2 |
| Energy Use per m2 (annual) | 70 kWh/year/m2 |
| Energy Saving | 11.77% |
| Carbon Emission | 32.61 tCO2/year |

<a name="table5"></a>

> [!TIP]
The HTML version of this table is available [here](https://arnottferels.github.io/research/enhancing-low-cost-apartment-performance/#table5).

_Table 5. EDGE building simulation result (Standard Apartment)._

| Standard Apartment | Total |
| --- | --- |
| Unit Area (m2) | 45 or 36 |
| Bedroom | 2 |
| Floor Number | 3 |
| Occupancy | 5 |
| Implementation | Description |
| Reduced WWR | 17.40% |
| External Shading Device | AASF 0.38 |
| Wall Insulation | - |
| Natural Ventilation | Implemented |
| Category | Calculation |
| Final Energy Use | 293.23 kWh/month/unit |
| Energy Use Total | 12,902.12 kWh/month |
| Energy Use per m2 (monthly) | 8.14 kWh/month/m2 |
| Energy Use per m2 (annual) | 97.74 kWh/year/m2 |
| Energy Saving | 4.85% |
| Carbon Emission | 137.95 tCO2/year |

This reduction aligns with Indonesia’s commitment under the Paris Agreement to reduce greenhouse gas emissions by 29% by 2030 under a business-as-usual scenario or up to 41% with international support. The Prototype Apartment achieves these results through the integration of passive design elements such as optimized shading devices, reduced WWR, and wall insulation, which not only reduce energy loads but also minimize reliance on active cooling systems. These findings highlight the critical role of energy-efficient and passive design strategies in meeting Indonesia’s energy conservation and emission reduction targets, offering a scalable model for sustainable residential construction in tropical climates.

## 3.3. OpenStudio simulation result (EUI and cooling load)

OpenStudio simulations were conducted to evaluate the energy performance of the Prototype and Standard Apartments, focusing on Energy Use Intensity (EUI) and cooling energy load per square meter under air-conditioned conditions ([Table 6](#table6)). The results reveal that the Prototype Apartment demonstrates significantly better energy efficiency than the Standard Apartment. The Prototype Apartment records an EUI of 81.4 kWh/m2/year, indicating its superior performance relative to the Standard Apartment, which has a higher EUI of 98.8 kWh/m2/year. This translates to the Prototype Apartment being approximately 1.2 times more efficient in terms of overall energy use intensity, as shown in [Table 6](#table6).

Cooling energy load, a critical component of energy consumption in tropical climates, further highlights the advantages of the Prototype Apartment. With a cooling energy load of 66.1 kWh/m2/year, the Prototype Apartment achieves an 81% reduction from the baseline. In contrast, the Standard Apartment has a higher cooling energy load of 83.0 kWh/m2/year, reflecting an 84% reduction relative to its baseline. When comparing the two designs, the Prototype Apartment’s cooling energy load is approximately 1.25 times lower than that of the Standard Apartment, showcasing its enhanced capacity to manage thermal loads and reduce reliance on air conditioning.

<a name="table6"></a>

> [!TIP]
The HTML version of this table is available [here](https://arnottferels.github.io/research/enhancing-low-cost-apartment-performance/#table6).

_Table 6. Energy performance comparison between Prototype and Standard Apartments._

| Indicator (kWh/m2/year) | Prototype Apartment | Standard Apartment | Comparison Ratio |
| --- | --- | --- | --- |
| EUI | 81.4 | 98.8 | 1:1.21 |
| Cooling Energy | 66.1 | 83 | 1:1.25 |

## 3.4. OTTV calculation result

An OTTV assessment was conducted to evaluate the design performance of the Prototype and Standard Apartments to measure the effectiveness of the building facades in managing cooling loads, particularly under air-conditioned conditions. This assessment aligns with the Minister of Public Works and Public Housing Regulation No. 02/PRT/M/2015 on Green Buildings, which mandates a maximum allowable OTTV value of 35 W/m2 for residential buildings. Both apartments successfully comply with this regulation, demonstrating their adherence to Indonesia’s green building standards.

As shown in [Figure 8](#fig8), the Prototype Apartment outperforms the Standard Apartment in managing thermal loads, achieving an average OTTV value of 12.09 W/m2, significantly lower than the Standard Apartment’s 15.32 W/m2. This improved performance reflects the effectiveness of passive design strategies, such as reduced WWR, optimized shading devices, and better insulation. The East and West facades, which experience the highest solar radiation exposure during the day, highlight the most significant differences between the two buildings. The Prototype Apartment achieves OTTV values below 5 W/m2 on these facades—less than half of the Standard Apartment’s values of 10.68 W/m2 and 11.03 W/m2, respectively. This reduction underscores the Prototype Apartment’s enhanced ability to mitigate heat gain in areas exposed to intense radiation.

Both apartments maintain OTTV values within the regulatory limits for the North and South facades. The Prototype Apartment performs better on the North facade, with an OTTV of 21.15 W/m2 compared to 22.03 W/m2 for the Standard Apartment. However, on the South facade, the Prototype Apartment records a slightly higher OTTV of 18.00 W/m2, compared to 17.54 W/m2 for the Standard Apartment. Despite this minor variation, the Prototype Apartment exhibits significantly lower OTTV values on the East and West facades, with reductions exceeding 50%, underscoring the effectiveness of passive design strategies in minimizing heat gain.

Overall, the Prototype Apartment demonstrates superior thermal performance by effectively reducing cooling loads, aligning with SNI 6389:2011 on building energy conservation. Its optimized OTTV values establish it as a model for energy-efficient residential design in Indonesia’s tropical climate. However, further refinement, particularly on the South facade, could enhance its thermal efficiency.

<a name="fig8"></a>

> [!TIP]
The HTML version of this svg is available [here](https://arnottferels.github.io/research/enhancing-low-cost-apartment-performance/#fig8).

_Figure 8. OTTV calculation result (W/m2)._

## 3.5. Sefaira daylighting simulation result

The Sefaira daylighting simulation results, as shown in [Figure 9](#fig9) and [Table 7](#table7), highlight the differences in natural light distribution between the Prototype Apartment and the Standard Apartment. The Prototype Apartment demonstrates better daylighting performance, with 43% of its spaces receiving natural light levels above 300 lux, compared to only 37% in the Standard Apartment. This improved performance is attributed to the Prototype’s design features, including incorporating voids and skylight glass roofs, which enhance natural light penetration, particularly in corridors. Despite this advantage, both apartments still face challenges with underlit spaces. The results indicate that 57% of the Prototype Apartment and 63% of the Standard Apartment have areas where natural light falls below 300 lux. These underlit areas necessitate the use of artificial lighting to meet adequate illumination requirements, potentially increasing energy consumption for lighting during daytime hours.

<a name="table7"></a>

> [!TIP]
The HTML version of this table is available [here](https://arnottferels.github.io/research/enhancing-low-cost-apartment-performance/#table7).

_Table 7. Sefaira daylighting simulation results for Prototype and Standard Apartment._

|  | Prototype Apartment | Standard Apartment |
| --- | --- | --- |
| < 300 Lux | 57% | 63% |
| > 300 Lux | 43% | 37% |

[Figure 9](#fig9) further illustrates the spatial distribution of daylighting in both buildings, with the Prototype Apartment showing a more even distribution of well-lit areas (300–800+ lux). In comparison, the Standard Apartment displays a greater concentration of underlit spaces (<300 lux). The Prototype Apartment also has a higher percentage of overlit spaces (23%) than the Standard Apartment (15%), which may require shading strategies to balance excessive light levels and reduce glare. The Prototype Apartment’s improved daylighting performance demonstrates its potential for greater energy efficiency and enhanced occupant comfort, aligning sustainability objectives and green building standards.

<a name="fig9"></a>

![Sefaira simulation result for Prototype and Standard Apartments.](https://arnottferels.github.io/a/img/1921/P926.webp)

_Figure 9. Sefaira simulation result for Prototype and Standard Apartments._

Enhancing the quality of natural lighting through passive design can be achieved by employing reflective daylighting techniques. Key strategies include the incorporation of light shelves and the application of reflective colors and materials on building facade openings [^67], [^68], [^69].

## 3.6. Comparative analysis result

The simulation results from various applications conclusively demonstrate that the Prototype Apartment outperforms the Standard Apartment regarding energy efficiency and thermal performance. The analysis highlights significant improvements across multiple metrics, including OTTV, energy consumption, cooling energy load, and daylighting performance, which collectively underscore the Prototype Apartment’s superior design. [Table 8](#table8) provides a comprehensive summary of the comparative results.

The OTTV calculation reveals that the Prototype Apartment achieves an average OTTV value of 11.8 W/m2, significantly lower than the Standard Apartment’s 18.1 W/m2. Both values comply with the maximum allowable OTTV limit of 35 W/m2, as regulated by the Regulation of the Minister of Public Works and Public Housing No. 02/PRT/M/2015 on Green Buildings. The Prototype Apartment’s lower OTTV value highlights its superior ability to manage thermal loads and reduce heat transfer into the building, particularly in areas with high solar radiation.

<a name="table8"></a>

> [!TIP]
The HTML version of this table is available [here](https://arnottferels.github.io/research/enhancing-low-cost-apartment-performance/#table8).

_Table 8. Summary of average performance metrics comparison between the Prototype Apartment and the Standard Apartment. Note: (*) The maximum value according to the Ministerial Regulations (PUPR) is 35 kWh/m2/year. (**) UK Green building lower than 75 kWh/m2/year._

| Simulation Method | Prototype Apartment | Standard Apartment |
| --- | --- | --- |
| OTTV Calculation Result* | 11.8 W/m2 | 18.1 W/m2 |
| Energy Use Building (EDGE Building)** | 70 kWh/m2/year | 97.74 kWh/m2/year |
| Energy Efficiency from Passive Design (EDGE) | 11% | 4.85% |
| Energy Use Intensity (OpenStudio) | 81.4 kWh/m2/year | 98.8 kWh/m2/year |
| Cooling Energy (OpenStudio) | 66.1 kWh/m2/year | 83 kWh/m2/year |

Regarding energy use, the Prototype Apartment complies with energy conservation standards outlined in SNI 6389:2011, which sets an allowable energy consumption threshold for residential buildings at 240 kWh/m2/year. The Prototype Apartment consumes only 70 kWh/m2/year, far below the SNI limit, while the Standard Apartment records a higher consumption of 97.74 kWh/m2/year. Additionally, the Prototype Apartment achieves an 11% improvement in energy efficiency due to its passive design strategies, compared to only 4.85% for the Standard Apartment. OpenStudio simulations further validate these findings, showing that the Prototype Apartment achieves a lower EUI of 81.4 kWh/m2/year compared to 98.8 kWh/m2/year for the Standard Apartment. Similarly, the cooling energy load of the Prototype Apartment is 66.1 kWh/m2/year, significantly lower than the Standard Apartment’s 83 kWh/m2/year, emphasizing the effectiveness of passive design elements in minimizing air conditioning demand.

These results affirm that the Prototype Apartment exceeds the requirements of Indonesian regulations, including SNI 6389:2011 and Regulation of the Minister of Public Works and Public Housing No. 02/PRT/M/2015 on Green Buildings, for energy conservation and green building practices. By integrating optimized OTTV values, reduced cooling loads, and enhanced natural lighting, the Prototype Apartment serves as a model for sustainable and energy-efficient residential construction in Indonesia’s tropical climate.

## 3.7. Field measurement result (based on wind fin position)

Field observations were conducted to evaluate indoor thermal comfort conditions under varying wind fin configurations and with open apartment unit doors. Measurements were taken at five designated points during the hottest times of the day, with wind fins positioned in five configurations: W1 (completely closed), W2 (opened to 45 cm), W3 (opened to 90 cm), W4 (opened to 135 cm), and W5 (fully open). Thermometers, hygrometers, and anemometers were used to measure air temperature, humidity, and wind speed. Outdoor measurements were conducted in areas directly exposed to sunlight without any shading, while indoor measurements were carried out in the main living spaces of four apartment units located on the 2nd and 3rd floors. Specifically, two measurement points were in the loft areas (General Loft and Loft Default), and two points were located in the 2-Bedroom (2BR) areas (General 2BR and 2BR Default). The measurements were repeated twice under clear weather conditions to ensure reliability, and the collected data were used to calculate the PET.

[Table 9](#table9) presents the results of these observations, showing significant differences in indoor and outdoor temperatures, ranging from 7°C to 9°C, depending on the wind configuration and the condition of the open apartment doors. The average indoor temperature across all configurations was 29.75°C, while the outdoor temperature, measured in direct sunlight, averaged 37.40°C, resulting in a temperature difference of 7.65°C. This deviation significantly exceeds the anticipated threshold of 3°C, indicating the combined effectiveness of wind fins and open apartment doors in enhancing airflow and reducing indoor temperatures, even under extreme outdoor conditions.

<a name="table9"></a>

> [!TIP]
The HTML version of this table is available [here](https://arnottferels.github.io/research/enhancing-low-cost-apartment-performance/#table9).

_Table 9. Sefaira daylighting simulation results for prototype and standard apartment._

| Wind Fin Position | General Loft (West-South) | Loft Default (East-South) | General 2BR (East-North) | 2BR Default (West-North) | Average Indoor Temperature | Average Outdoor Temperature | Deviation of Indoor and Outdoor |
| --- | --- | --- | --- | --- | --- | --- | --- |
| W1 | 30.50 | 30.00 | 29.50 | 30.00 | 30.00 | 39.00 | 9.00 |
| W2 | 30.50 | 30.00 | 29.50 | 30.00 | 30.00 | 37.00 | 7.00 |
| W3 | 30.50 | 30.00 | 29.00 | 29.50 | 29.75 | 38.00 | 8.25 |
| W4 | 30.00 | 29.50 | 29.50 | 29.00 | 29.50 | 38.00 | 8.50 |
| W5 | 30.00 | 29.50 | 29.50 | 29.00 | 29.50 | 37.00 | 7.50 |
| Average | 30.30 | 29.80 | 29.40 | 29.50 | 29.75 | 37.40 | 7.65 |

The open apartment doors further amplified the impact of wind fins by allowing greater cross-ventilation within the units. This condition improved air circulation, particularly in the loft and 2-bedroom areas, enabling the wind fins to more effectively dissipate heat. For instance, in the W5 (fully open) configuration with apartment doors open, the temperature difference reached 7.5°C, while in the W1 (wholly closed) configuration, the difference was highest at 9°C, suggesting the role of airflow restriction.

However, it is essential to note that the wind fins and open doors do not solely influence these temperature reductions but are the cumulative result of the Prototype Apartment’s holistic passive design strategies. These strategies include reduced WWR, effective shading devices, optimized building orientation, and insulation. Together, these features minimize solar heat gain, stabilize indoor temperatures, and enhance ventilation. Shading devices and reduced WWR prevent excessive solar radiation from entering the building, while insulation reduces heat transfer through the building envelope. Combined with wind fins and open doors, these strategies create a synergistic system that significantly improves thermal comfort.

The findings demonstrate that the Prototype Apartment consistently maintains indoor temperatures below the designated target of 30°C, even during the hottest times of the day. The combination of open apartment doors and passive design features provides a robust solution for achieving thermal comfort in tropical climates. This performance positions the Prototype Apartment as a benchmark for energy-efficient residential buildings in Indonesia, emphasizing the importance of integrated design solutions to minimize reliance on active cooling systems and enhance sustainability.

# 4. Conclusion

A comparison of two low-cost apartment buildings in Tegal City reveals significant performance differences between the Prototype Apartment, which incorporates passive design principles, and the Standard Apartment, which does not. Both buildings meet regulatory performance criteria, but the Prototype Apartment achieves a 34% lower OTTV, a 4% improvement in energy efficiency (EDGE), and consumes 17.6% less annual EUI at 81.4 kWh/m2/year compared to 98.8 kWh/m2/year for the Standard Apartment (OpenStudio). Cooling energy consumption is also 20% lower in the Prototype Apartment, highlighting its superior ability to manage thermal loads.

Additionally, field measurements also indicate that indoor temperatures in the Prototype Apartment are consistently 7–9°C lower than outdoor temperatures, staying below the 30°C comfort target. This is achieved through a combination of passive strategies, including optimized WWR, shading devices, insulation, and wind fins. These findings emphasize the value of passive design in improving energy efficiency and thermal comfort, offering a scalable model for sustainable and energy-efficient residential housing in Indonesia’s tropical climate.

These findings highlight the transformative potential of incorporating passive design strategies in low-cost vertical residential buildings. The significant improvements in energy efficiency, thermal comfort, and overall building performance demonstrated by the Prototype Apartment underscore the need to prioritize such strategies in future residential developments.

Refining these passive design principles can help establish a robust framework for promoting energy-efficient, sustainable, and climate-resilient housing in Indonesia, aligning with national energy conservation goals and global sustainability initiatives. Future research should explore the long-term performance of passive design strategies under varying climatic conditions and seasonal changes to assess their adaptability and efficiency year-round. Economic analyses are also recommended to evaluate the cost-effectiveness of implementing passive designs in low-cost housing projects, encouraging broader adoption. Integrating advanced simulation tools and IoT-based monitoring systems could further enhance real-time data collection on energy usage and thermal performance, enabling precise optimization of design strategies. Additionally, studies focusing on occupant behavior and satisfaction would provide valuable insights into the practical application and user acceptance of passive design in residential buildings, ensuring its feasibility and success in real-world contexts.

# Acknowledgment

The entire research team thanks the Department of Housing and Settlement of Tegal City for granting permission to collect data for this case study. We also extend our heartfelt appreciation to all parties involved in constructing the Prototype Apartment, including Hiroshima University, the Ministry of Public Works and Public Housing (Kementerian PUPR), Nichias Corporation, and LAPI ITB. Some of the information utilized in this study was derived from previous research published by the development team of the Prototype Apartment, as referenced in the citations. This research was funded by internal funds from the Building Technology Research Group at Institut Teknologi Bandung (Grant number: Riset Unggulan ITB No. 841/IT1.B07.1/TA.00/2025).

# References

[^1]: M. Chen, Y. Zhou, X. Huang, and C. Ye, “The Integration of New-Type Urbanization and Rural Revitalization Strategies in China: Origin, Reality and Future Trends,” Land (Basel), vol. 10, no. 2, p. 207, Feb. 2021, doi: 10.3390/land10020207.
[^2]: N. D. Adharina and D. Rukmana, “The growth of megacities in the Global South: a review of the available data on trends and patterns,” Int Plan Stud, Oct. 2024, doi: 10.1080/13563475.2024.2433645.
[^3]: E. A. MacAfee, A. J. Löhr, and C. A. Elizabeth MacAfee, “Multi-scalar interactions between mismanaged plastic waste and urban flooding in an era of climate change and rapid urbanization,” Wiley Interdisciplinary Reviews: Water, vol. 11, no. 2, p. e1708, Mar. 2024, doi: 10.1002/WAT2.1708.
[^4]: D. Gu, K. Andreev, and M. E. Dupre, “Major Trends in Population Growth Around the World,” China CDC Wkly, vol. 3, no. 28, p. 604, 2021, doi: 10.46234/CCDCW2021.160.
[^5]: U. Railway Projects et al., “Equity impacts of the built environment in urban rail transit station areas from a transit-oriented development perspective: a systematic review,” Environ Res Commun, vol. 5, no. 9, p. 092001, Sep. 2023, doi: 10.1088/2515-7620/ACF8B2.
[^6]: Z. Xia, W. Feng, H. Cao, and Y. Zhang, “Understanding the Influence of Built Environment Indicators on Transit-Oriented Development Performance According to the Literature from 2000 to 2023,” Sustainability 2024, Vol. 16, Page 9165, vol. 16, no. 21, p. 9165, Oct. 2024, doi: 10.3390/SU16219165.
[^7]: L. Ali et al., “Dynamics of Transit Oriented Development, Role of Greenhouse Gases and Urban Environment: A Study for Management and Policy,” Sustainability 2021, Vol. 13, Page 2536, vol. 13, no. 5, p. 2536, Feb. 2021, doi: 10.3390/SU13052536.
[^8]: C. Silver, “Rapid Urbanization: The Challenges and Opportunities for Planning in Indonesian Cities,” in The Indonesian Economy and the Surrounding Regions in the 21st Century: Essays in Honor of Iwan Jaya Azis, B. P. Resosudarmo and Y. Mansury, Eds., Singapore: Springer Nature, 2024, pp. 35–48. doi: 10.1007/978-981-97-0122-3_3.
[^9]: L. G. Perdamaian and Z. Zhai, “Status of Livability in Indonesian Affordable Housing,” Architecture 2024, Vol. 4, Pages 281-302, vol. 4, no. 2, pp. 281–302, May 2024, doi: 10.3390/ARCHITECTURE4020017.
[^10]: R. Q. Nisa’, E. Umilia, D. Rahmawati, and D. A. A. Samsura, “How do Public Policies impact Housing Provision? An empirical study of housing in Surabaya, Indonesia,” IOP Conf Ser Earth Environ Sci, vol. 1186, no. 1, p. 12012, May 2023, doi: 10.1088/1755-1315/1186/1/012012.
[^11]: W. Widyarko, N. Nugroho, and D. Susanto, “Natural Fiber Waste from Palm Oil Tree: An Overview of Potential Usage for Indonesia’s Affordable House Building Materials,” Journal of Architectural Research and Design Studies, vol. 5, no. 1, pp. 23–31, Apr. 2021, doi: 10.20885/JARS.VOL5.ISS1.ART3.
[^12]: A. Halimatussadiah, F. R. Moeis, and M. Adriansyah, “Financing Infrastructure for Climate-Change Adaptation in Developing East Asia,” Jakarta, 2023. Accessed: Jan. 29, 2025. [Online]. Available: [https://www.eria.org/uploads/media/Research-Project-Report/RPR-2023-05/07_Chapter-3-Indonesia..pdf](https://www.eria.org/uploads/media/Research-Project-Report/RPR-2023-05/07_Chapter-3-Indonesia..pdf)
[^13]: United Nations Environment Programme, “2021 Global Status Report for Buildings and Construction: Towards a Zero-Emission, Efficient and Resilient Buildings and Construction Sector,” Nairobi, 2020. [Online]. Available: [https://globalabc.org/sites/default/files/2021-10/GABC_Buildings-GSR-2021_BOOK.pdf](https://globalabc.org/sites/default/files/2021-10/GABC_Buildings-GSR-2021_BOOK.pdf)
[^14]: Sarjiya, L. M. Putranto, Tumiran, R. F. S. Budi, D. Novitasari, and Deendarlianto, “Generation expansion planning with a renewable energy target and interconnection option: A case study of the Sulawesi region, Indonesia,” Renewable and Sustainable Energy Reviews, vol. 183, p. 113489, Sep. 2023, doi: 10.1016/J.RSER.2023.113489.
[^15]: Y. W. Huang, N. Kittner, and D. M. Kammen, “ASEAN grid flexibility: Preparedness for grid integration of renewable energy,” Energy Policy, vol. 128, pp. 711–726, May 2019, doi: 10.1016/J.ENPOL.2019.01.025.
[^16]: N. A. Pambudi et al., “Renewable Energy in Indonesia: Current Status, Potential, and Future Development,” Sustainability, vol. 15, no. 3, p. 2342, Jan. 2023, doi: 10.3390/su15032342.
[^17]: C. Dockendorff, S. Fuss, R. Agra, V. Guye, D. Herrera, and F. Kraxner, “Committed to restoring tropical forests: an overview of Brazil’s and Indonesia’s restoration targets and policies,” Environmental Research Letters, vol. 17, no. 9, p. 093002, Sep. 2022, doi: 10.1088/1748-9326/AC8AB2.
[^18]: T. M. Basuki et al., “Improvement of Integrated Watershed Management in Indonesia for Mitigation and Adaptation to Climate Change: A Review,” Sustainability 2022, Vol. 14, Page 9997, vol. 14, no. 16, p. 9997, Aug. 2022, doi: 10.3390/SU14169997.
[^19]: H. Gunawan et al., “Forest land redistribution and its relevance to biodiversity conservation and climate change issues in Indonesia,” Forest Sci Technol, vol. 20, no. 2, pp. 213–228, 2024, doi: 10.1080/21580103.2024.2347902.
[^20]: L. Govindarajan, M. F. Bin Mohideen Batcha, and M. K. Bin Abdullah, “Solar energy policies in southeast Asia towards low carbon emission: A review,” Heliyon, vol. 9, no. 3, p. e14294, Mar. 2023, doi: 10.1016/j.heliyon.2023.e14294.
[^21]: Y. H. Chen, Y. Z. Li, H. Jiang, and Z. Huang, “Research on household energy demand patterns, data acquisition and influencing factors: A review,” Sustain Cities Soc, vol. 99, p. 104916, Dec. 2023, doi: 10.1016/J.SCS.2023.104916.
[^22]: T. Wang, Q. Zhao, W. Gao, and X. He, “Research on energy consumption in household sector: a comprehensive review based on bibliometric analysis,” Front Energy Res, vol. 11, p. 1209290, Jan. 2023, doi: 10.3389/FENRG.2023.1209290/BIBTEX.
[^23]: Y. Chen, Y. Chen, K. Chen, and M. Liu, “Research Progress and Hotspot Analysis of Residential Carbon Emissions Based on CiteSpace Software,” Int J Environ Res Public Health, vol. 20, no. 3, p. 1706, Jan. 2023, doi: 10.3390/ijerph20031706.
[^24]: J. Zeng, J. Qu, H. Ma, and X. Gou, “Characteristics and Trends of household carbon emissions research from 1993 to 2019: A bibliometric analysis and its implications,” J Clean Prod, vol. 295, p. 126468, May 2021, doi: 10.1016/J.JCLEPRO.2021.126468.
[^25]: T. Wang, B. Shen, C. Han Springer, and J. Hou, “What prevents us from taking low-carbon actions? A comprehensive review of influencing factors affecting low-carbon behaviors,” Energy Res Soc Sci, vol. 71, p. 101844, Jan. 2021, doi: 10.1016/J.ERSS.2020.101844.
[^26]: M. Du et al., “The China Carbon Watch (CCW) system: A rapid accounting of household carbon emissions in China at the provincial level,” Renewable and Sustainable Energy Reviews, vol. 155, p. 111825, Mar. 2022, doi: 10.1016/J.RSER.2021.111825.
[^27]: R. A. Almasri, N. H. Abu-Hamdeh, and N. Al-Tamimi, “A state-of-the-art review of energy-efficient and renewable energy systems in higher education facilities,” Front Energy Res, vol. 11, p. 1344216, Jan. 2023, doi: 10.3389/FENRG.2023.1344216/BIBTEX.
[^28]: J. Gardner, S. Lee, K. Han Kim, S. Oh, N. Papadakis, and D. Al Katsaprakakis, “A Review of Energy Efficiency Interventions in Public Buildings,” Energies 2023, Vol. 16, Page 6329, vol. 16, no. 17, p. 6329, Aug. 2023, doi: 10.3390/EN16176329.
[^29]: M. Farghali et al., “Strategies to save energy in the context of the energy crisis: a review,” Environmental Chemistry Letters 2023 21:4, vol. 21, no. 4, Mar. 2023, doi: 10.1007/S10311-023-01591-5.
[^30]: S. Esfandi, S. Tayebi, J. Byrne, J. Taminiau, G. Giyahchi, and S. A. Alavi, “Smart Cities and Urban Energy Planning: An Advanced Review of Promises and Challenges,” Smart Cities 2024, Vol. 7, Pages 414-444, vol. 7, no. 1, pp. 414–444, Jan. 2024, doi: 10.3390/SMARTCITIES7010016.
[^31]: A. Raihan, “An overview of the energy segment of Indonesia: present situation, prospects, and forthcoming advancements in renewable energy technology,” Journal of Technology Innovations and Energy, vol. 2, no. 3, pp. 37–63, Sep. 2023, doi: 10.56556/jtie.v2i3.599.
[^32]: S. Yana, M. Nizar, Irhamni, and D. Mulyati, “Biomass waste as a renewable energy in developing bio-based economies in Indonesia: A review,” Renewable and Sustainable Energy Reviews, vol. 160, p. 112268, May 2022, doi: 10.1016/J.RSER.2022.112268.
[^33]: H. Y. S. H. Nugroho et al., “Toward Water, Energy, and Food Security in Rural Indonesia: A Review,” Water 2022, Vol. 14, Page 1645, vol. 14, no. 10, p. 1645, May 2022, doi: 10.3390/W14101645.
[^34]: EDGE Buildings, “EDGE App - EDGE Buildings.” [Online]. Available: [https://edgebuildings.com/about/edge-app/](https://edgebuildings.com/about/edge-app/)
[^35]: Nima forouzandeh, M. Tahsildoost, and Z. S. Zomorodian, “A review of web-based building energy analysis applications,” J Clean Prod, vol. 306, p. 127251, Jul. 2021, doi: 10.1016/J.JCLEPRO.2021.127251.
[^36]: National Renewable Energy Laboratory, “NREL/OpenStudio: OpenStudio is a cross-platform collection of software tools to support whole building energy modeling using EnergyPlus and advanced daylight analysis using Radiance.,” Sep. 2024, National Renewable Energy Laboratory. [Online]. Available: [https://github.com/NREL/OpenStudio](https://github.com/NREL/OpenStudio)
[^37]: K. A. Barber and M. Krarti, “A review of optimization based tools for design and control of building energy systems,” Renewable and Sustainable Energy Reviews, vol. 160, p. 112359, May 2022, doi: 10.1016/J.RSER.2022.112359.
[^38]: Sefaira, “Sefaira.” [Online]. Available: [https://www.sketchup.com/en/products/sefaira](https://www.sketchup.com/en/products/sefaira)
[^39]: O. Kang and S. Kim, “Daylighting Analysis and Simulation Tools in Architectural Design of Tools and Compatibility with Architectural CAD Platforms,” KIEAE Journal, vol. 21, no. 1, pp. 13–22, Feb. 2021, doi: 10.12813/kieae.2021.21.1.013.
[^40]: B. Lin et al., “MOOSAS – A systematic solution for multiple objective building performance optimization in the early design stage,” Build Environ, vol. 200, p. 107929, Aug. 2021, doi: 10.1016/J.BUILDENV.2021.107929.
[^41]: M. W. Akram, M. Hasannuzaman, E. Cuce, and P. M. Cuce, “Global technological advancement and challenges of glazed window, facade system and vertical greenery-based energy savings in buildings: A comprehensive review,” Energy and Built Environment, vol. 4, no. 2, pp. 206–226, Apr. 2023, doi: 10.1016/J.ENBENV.2021.11.003.
[^42]: W. R. Abdullah, S. Azri, and U. Ujang, “Assessing and addressing energy cooling demand in Malaysia’s buildings: a comprehensive review,” IOP Conf Ser Earth Environ Sci, vol. 1412, no. 1, p. 012037, Dec. 2024, doi: 10.1088/1755-1315/1412/1/012037.
[^43]: W. R. Abdullah, S. Azri, and U. Ujang, “Assessing and addressing energy cooling demand in Malaysia’s buildings: a comprehensive review,” IOP Conf Ser Earth Environ Sci, vol. 1412, no. 1, p. 012037, Dec. 2024, doi: 10.1088/1755-1315/1412/1/012037.
[^44]: F. Mostafavi, M. Tahsildoost, and Z. S. Zomorodian, “Energy efficiency and carbon emission in high-rise buildings: A review (2005-2020),” Build Environ, vol. 206, p. 108329, Dec. 2021, doi: 10.1016/J.BUILDENV.2021.108329.
[^45]: D. S. Ayuningtias, M. A. Berawi, G. Saroji, and M. Sari, “A Qualitative Review on the Strategies to Reduce the Buildings’ Carbon Emissions,” E3S Web of Conferences, vol. 517, p. 5018, 2024, doi: 10.1051/e3sconf/202451705018.
[^46]: B. Hoyle, Low energy building engineering. World Technologies, 2011.
[^47]: Y. Elaouzy and A. El Fadar, “Energy, economic and environmental benefits of integrating passive design strategies into buildings: A review,” Renewable and Sustainable Energy Reviews, vol. 167, p. 112828, Oct. 2022, doi: 10.1016/J.RSER.2022.112828.
[^48]: K. Palanisamy, E. Lucchi, C. Liu, S. Sharples, and H. Mohammadpourkarbasi, “A Review of Building Energy Retrofit Measures, Passive Design Strategies and Building Regulation for the Low Carbon Development of Existing Dwellings in the Hot Summer–Cold Winter Region of China,” Energies 2023, Vol. 16, Page 4115, vol. 16, no. 10, p. 4115, May 2023, doi: 10.3390/EN16104115.
[^49]: M. Ghamari et al., “Advancing sustainable building through passive cooling with phase change materials, a comprehensive literature review,” Energy Build, vol. 312, p. 114164, Jun. 2024, doi: 10.1016/J.ENBUILD.2024.114164.
[^50]: V. Anand, V. L. Kadiri, and C. Putcha, “Passive buildings: a state-of-the-art review,” Journal of Infrastructure Preservation and Resilience 2023 4:1, vol. 4, no. 1, pp. 1–24, Jan. 2023, doi: 10.1186/S43065-022-00068-Z.
[^51]: H. Taherian and R. W. Peters, “Advanced Active and Passive Methods in Residential Energy Efficiency,” Energies 2023, Vol. 16, Page 3905, vol. 16, no. 9, p. 3905, May 2023, doi: 10.3390/EN16093905.
[^52]: X. Meng and M. Wang, “Exploring the health impacts of window views: a literature review,” Journal of Asian Architecture and Building Engineering, Nov. 2024, doi: 10.1080/13467581.2024.2412120.
[^53]: X. Li and Y. Wu, “A review of complex window-glazing systems for building energy saving and daylight comfort: Glazing technologies and their building performance prediction,” J Build Phys, Sep. 2024, doi: 10.1177/17442591241269182.
[^54]: V. Gupta and C. Deb, “Envelope design for low-energy buildings in the tropics: A review,” Renewable and Sustainable Energy Reviews, vol. 186, p. 113650, Oct. 2023, doi: 10.1016/J.RSER.2023.113650.
[^55]: S. Al Niyadi and M. H. Elnabawi Mahgoub, “Advancing hybrid ventilation in hot climates: a review of current research and limitations,” Front Built Environ, vol. 10, p. 1502941, Jan. 2024, doi: 10.3389/FBUIL.2024.1502941/BIBTEX.
[^56]: X. Tong, T. Zhou, C. Ye, A. Nurjannah, and A. R. Trihamdani, “Energy Saving Effort for Residential Buildings in the Hot and Humid Climate: A Review on Ventilation Performance Requirements,” IOP Conf Ser Earth Environ Sci, vol. 1058, no. 1, p. 012005, Jul. 2022, doi: 10.1088/1755-1315/1058/1/012005.
[^57]: Y. Dong, J. Kong, S. Mousavi, B. Rismanchi, and P. S. Yap, “Wall Insulation Materials in Different Climate Zones: A Review on Challenges and Opportunities of Available Alternatives,” Thermo 2023, Vol. 3, Pages 38-65, vol. 3, no. 1, pp. 38–65, Jan. 2023, doi: 10.3390/THERMO3010003.
[^58]: X. Li and D. Densley Tingley, “A whole life, national approach to optimize the thickness of wall insulation,” Renewable and Sustainable Energy Reviews, vol. 174, p. 113137, Mar. 2023, doi: 10.1016/J.RSER.2022.113137.
[^59]: F. Tariku, Y. Shang, and S. Molleti, “Thermal performance of flat roof insulation materials: A review of temperature, moisture and aging effects,” Journal of Building Engineering, vol. 76, p. 107142, Oct. 2023, doi: 10.1016/J.JOBE.2023.107142.
[^60]: F. I. Nugrahanti, T. Kubota, D. Larasati, A. R. Trihamdani, K. Morita, and H. Inoue, “Low Carbon Affordable Apartments in Hot-Humid Climate of Indonesia: Design Concept of the Full-Scale Experimental House,” in Proceedings of the EduARCHsia & Senvar 2019 International Conference (EduARCHsia 2019), Paris, France: Atlantis Press, 2020. doi: 10.2991/aer.k.200214.013.
[^61]: Google Maps, “Rusun Jalingkut Kota Tegal.” [Online]. Available: [https://maps.app.goo.gl/ag354dy6daJtg6oD8](https://maps.app.goo.gl/ag354dy6daJtg6oD8)
[^62]: Menteri Pekerjaan Umum dan Perumahan Rakyat Republik Indonesia, Peraturan Menteri Pekerjaan Umum dan Perumahan Rakyat Republik Indonesia Nomor 02/PRT/M/2015 Tentang Bangunan Gedung Hijau. 2015.
[^63]: SketchUp, “SketchUp 3D Design Software 3D Modeling & Drawing.” [Online]. Available: [https://www.sketchup.com/en](https://www.sketchup.com/en)
[^64]: D. Larasati, H. Aisha, Y. Hanifah, S. Triyadi, Suhendri, and A. Primasetra, “Effects of utilizing various types of facade material on the Embodied and operational energy; a case study of apartment building in Indonesia,” Journal of Asian Architecture and Building Engineering, pp. 1–20, 2023.
[^65]: Badan Standardisasi Nasional, SNI 6389-2011. Badan Standardisasi Nasional, 2011. Accessed: Jan. 29, 2025. [Online]. Available: [https://akses-sni.bsn.go.id/dokumen/2011/SNI%206389-2011/](https://akses-sni.bsn.go.id/dokumen/2011/SNI%206389-2011/)
[^66]: D. A. Putra, C. Ichwania, A. R. I. Utami, A. H. D. Abdullah, Suwandi, and A. N. S. Gunawan, “Evaluating the Impact of Biocomposite Brick Materials on The OTTV and Diverse Thermal Characteristics of Rooms in Residential Buildings,” J Phys Conf Ser, vol. 2673, no. 1, p. 012023, Dec. 2023, doi: 10.1088/1742-6596/2673/1/012023.
[^67]: A. Kitsopoulou, E. Bellos, and C. Tzivanidis, “An Up-to-Date Review of Passive Building Envelope Technologies for Sustainable Design,” Energies 2024, Vol. 17, Page 4039, vol. 17, no. 16, p. 4039, Aug. 2024, doi: 10.3390/EN17164039.
[^68]: A. A. S. Bahdad, S. F. S. Fadzil, H. O. Onubi, and S. A. BenLasod, “Sensitivity analysis linked to multi-objective optimization for adjustments of light-shelves design parameters in response to visual comfort and thermal energy performance,” Journal of Building Engineering, vol. 44, p. 102996, Dec. 2021, doi: 10.1016/J.JOBE.2021.102996.
[^69]: G. S. Odiyur Vathanam et al., “A Review on Effective Use of Daylight Harvesting Using Intelligent Lighting Control Systems for Sustainable Office Buildings in India,” Sustainability, vol. 13, no. 9, p. 4973, Apr. 2021, doi: 10.3390/su13094973.

