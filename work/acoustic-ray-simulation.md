# Acoustic Ray Simulation

```bibtex
@online{fereetal_2023_acou,
  title = {Acoustic {Ray} {Simulation}},
  author = {Ferels, Arnott and Juliardi, Robby D. and Maulidin, Ekky and Z, Ghina and Azmi, Zulafa},
  url = {https://arnottferels.github.io/work/acoustic-ray-simulation/},
  abstract = {This study details the creation of a specialized auditorium model, inspired by Architect\textquoteright{}s Data by Neufert. Employing Grasshopper for algorithmic modeling, parameters were refined, emphasizing ray distribution simulation for acoustic analysis via Ray Pachyderm Acoustical Simulation. Data visualization, featuring a heat map, illustrates ray counts at each step for seats. In conclusion, this method offers insights into sound ray behavior in acoustics.},
  date = {2023-10},
  keywords = {Computation,Auditorium design,Acoustic design,Acoustic simulation,Design optimization},
  language = {en}
}

```

# Method

![Animation (https://youtube.com/embed/-1DhkZLcgt8)](https://img.youtube.com/vi/-1DhkZLcgt8/sddefault.jpg)

_Video: Animation (https://youtube.com/embed/-1DhkZLcgt8)_

![Method.](https://arnottferels.github.io/a/img/1516/SVj9.webp)

_Figure: Method._

Initialized by the clients according to the Terms of Reference (TOR) from Kereta Api Indonesia [^1], the project aimed to create a comprehensive auditorium model. Drawing inspiration from Architect’s Data by Neufert [^2], [^3], I parameterized this model using an algorithmic approach and continuously optimized it with the Pachyderm Acoustic Simulation engine [^4].

# Distribution of Sound Particles (Audio)

![Distribution of sound particles (audio) (1).](https://arnottferels.github.io/a/img/1485/WZL9.webp)

_Figure: Distribution of sound particles (audio) (1)._

The diagram depicts the simulation in a 1530-seat auditorium, recording 61,208 Ray Curves (RC) for ATD. Red areas signal more than 10 sound reflections, while blue and yellow indicate 2 and 6 reflections, optimizing sound based on seat positions.

![Distribution of sound particles (audio) (2).](https://arnottferels.github.io/a/img/1489/qzvt.webp)

_Figure: Distribution of sound particles (audio) (2)._

# Animation

![Front (https://youtube.com/embed/uyrB8jYWXSA)](https://img.youtube.com/vi/uyrB8jYWXSA/sddefault.jpg)

_Video: Front (https://youtube.com/embed/uyrB8jYWXSA)_

![Axonometric (https://youtube.com/embed/nuKRgFvHTII)](https://img.youtube.com/vi/nuKRgFvHTII/sddefault.jpg)

_Video: Axonometric (https://youtube.com/embed/nuKRgFvHTII)_

![Top (https://youtube.com/embed/w9u6KCcH3MY)](https://img.youtube.com/vi/w9u6KCcH3MY/sddefault.jpg)

_Video: Top (https://youtube.com/embed/w9u6KCcH3MY)_

![Right (https://youtube.com/embed/ZGoC3yJz7LQ)](https://img.youtube.com/vi/ZGoC3yJz7LQ/sddefault.jpg)

_Video: Right (https://youtube.com/embed/ZGoC3yJz7LQ)_

# Optimizing Sound Absorption

> [!TIP]
The HTML version of this table is available [here](https://arnottferels.github.io/work/acoustic-ray-simulation/#table1).

_Table 1. Acoustic material recommendations for absorption in auditorium spaces. Source: Acoustic Projects Study (Acoustic Traffic LLC, 2023)._

| No. | Element | Material | Finishing | Absorption coef (% energy absorbed) | Page Ref. [^5] |
| --- | --- | --- | --- | --- | --- |
| 62.5Hz | 125Hz | 250Hz | 500Hz | 1KHz | 2KHz | 4KHz | 8KHz | Flatten All |
| 1 | Wall | Rockwool 75mm | Fabric | - | 0.3 | 0.69 | 0.94 | 1 | 1 | 1 | - | 0.82 | 10 |
| 2 | Floor | Carpet | Fabric | - | 0.1 | 0.15 | 0.25 | 0.3 | 0.3 | 0.3 | - | 0.23 | 1 |
| 3 | Furniture | Chair | Fabric | - | 0.33 | 0.44 | 0.45 | 0.45 | 0.45 | 0.45 | - | 0.42 | 2 |
| 4 | Ceiling | Woodwool 50mm | Fabric | - | 0.3 | 0.4 | 0.5 | 0.85 | 0.5 | 0.65 | - | 0.53 | 3 |
| 5 | LED screen | - | - | - | - | - | - | - | - | - | - | - | 5 |

The table outlines acoustic material recommendations for optimizing sound in the auditorium, considering material types, finishes, and absorption coefficients. Selection criteria include sound resonance, durability, and aesthetics. Follow these guidelines for enhanced sound quality and material durability in the auditorium.

![Implementation of acoustic materials in the auditorium space.](https://arnottferels.github.io/a/img/717/6IVr.webp)

_Figure: Implementation of acoustic materials in the auditorium space._

Acoustic materials in the auditorium are optimized for the best sound absorption. From Rockwool on the walls to carpet on the floor, every element contributes to improving the room’s sound quality.

# Footnote

[Pachyderm](https://www.food4rhino.com/en/app/pachyderm-acoustical-simulation) is an open source collection of numerical and geometrical simulation techniques curated by Open Research in Acoustical Science and Education [^4].

---

# References

[^1]: Kereta Api Indonesia. (2023). In Wikipedia. [https://en.wikipedia.org/w/index.php?title=Kereta_Api_Indonesia&oldid=1183278651](https://en.wikipedia.org/w/index.php?title=Kereta_Api_Indonesia&oldid=1183278651)
[^2]: Neufert, E., & Neufert, P. (2012). Architects’ Data. John Wiley & Sons.
[^3]: Architects’ Data. (2023). In Wikipedia. [https://en.wikipedia.org/w/index.php?title=Architects%27_Data&oldid=1142529729](https://en.wikipedia.org/w/index.php?title=Architects%27_Data&oldid=1142529729)
[^4]: Pachyderm Acoustical Simulation. (2014). [Computer software]. [https://www.food4rhino.com/en/app/pachyderm-acoustical-simulation](https://www.food4rhino.com/en/app/pachyderm-acoustical-simulation)
[^5]: Acoustic Traffic LLC. (n.d.). Absorption coefficients [dataset]. [https://www.acoustic.ua/st/web_absorption_data_eng.pdf](https://www.acoustic.ua/st/web_absorption_data_eng.pdf)

