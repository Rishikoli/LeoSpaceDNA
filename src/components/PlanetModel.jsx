import React from "react";
import EarthModel from "./EarthModel";
import BubbleChart from "./BubbleChart";
import PlanetInfo from "./PlanetInfo";
import "./PlanetModel.css";

const mercuryFacts = `
  Orbital Period: 88 Earth days
  Mean Distance from Sun: 0.39 AU
  Radius: 2,439.7 km
  Mass: 0.055 Earth masses
  Surface Gravity: 0.38 g
  Rotation Period: 58.6 Earth days
  Axial Tilt: 0.034°
  Number of Moons: 0
  Atmospheric Composition: Trace amounts of oxygen, sodium, hydrogen
  Surface Temperature: -173 to 427°C
`;

const venusFacts = `
  Orbital Period: 224.7 Earth days
  Mean Distance from Sun: 0.72 AU
  Radius: 6,051.8 km
  Mass: 0.815 Earth masses
  Surface Gravity: 0.9 g
  Rotation Period: 243 Earth days (retrograde)
  Axial Tilt: 177.4°
  Number of Moons: 0
  Atmospheric Composition: Carbon dioxide, nitrogen
  Surface Temperature: 462°C (average)
`;

const earthFacts = `
  Orbital Period: 365.25 Earth days
  Mean Distance from Sun: 1 AU
  Radius: 6371 km
  Mass: 1 Earth mass
  Surface Gravity: 1 g
  Rotation Period: 23.93 hours
  Axial Tilt: 23.44°
  Number of Moons: 1
  Atmospheric Composition: Nitrogen, Oxygen
  Surface Temperature: -88 to 58°C
`;

const marsFacts = `
  Orbital Period: 687 Earth days
  Mean Distance from Sun: 1.52 AU
  Radius: 3,389.5 km
  Mass: 0.107 Earth masses
  Surface Gravity: 0.38 g
  Rotation Period: 24.6 hours
  Axial Tilt: 25.2°
  Number of Moons: 2 (Phobos and Deimos)
  Atmospheric Composition: Carbon dioxide, nitrogen, argon
  Surface Temperature: -125 to 20°C
`;

const jupiterFacts = `
  Orbital Period: 11.86 Earth years
  Mean Distance from Sun: 5.2 AU
  Radius: 69,911 km
  Mass: 317.8 Earth masses
  Surface Gravity: 2.53 g
  Rotation Period: 9.93 hours
  Axial Tilt: 3.13°
  Number of Moons: 79 (including Ganymede, Europa, Io, Callisto)
  Atmospheric Composition: Hydrogen, helium
  Surface Temperature: -145°C (cloud tops)
`;

const saturnFacts = `
  Orbital Period: 29.5 Earth years
  Mean Distance from Sun: 9.58 AU
  Radius: 58,232 km
  Mass: 95.16 Earth masses
  Surface Gravity: 1.07 g
  Rotation Period: 10.7 hours
  Axial Tilt: 26.7°
  Number of Moons: 83 (including Titan, Enceladus, Rhea)
  Atmospheric Composition: Hydrogen, helium
  Surface Temperature: -178°C (cloud tops)
`;

const uranusFacts = `
  Orbital Period: 84 Earth years
  Mean Distance from Sun: 19.22 AU
  Radius: 25,362 km
  Mass: 14.54 Earth masses
  Surface Gravity: 0.89 g
  Rotation Period: 17.24 hours (retrograde)
  Axial Tilt: 97.77°
  Number of Moons: 27 (including Titania, Oberon, Miranda)
  Atmospheric Composition: Hydrogen, helium, methane
  Surface Temperature: -224°C
`;

const neptuneFacts = `
  Orbital Period: 164.8 Earth years
  Mean Distance from Sun: 30.05 AU
  Radius: 24,622 km
  Mass: 17.15 Earth masses
  Surface Gravity: 1.14 g
  Rotation Period: 16.11 hours
  Axial Tilt: 28.32°
  Number of Moons: 14 (including Triton)
  Atmospheric Composition: Hydrogen, helium, methane
  Surface Temperature: -218°C
`;

const plutoFacts = `
  Orbital Period: 248 Earth years
  Mean Distance from Sun: 39.48 AU
  Radius: 1,188.3 km
  Mass: 0.00218 Earth masses
  Surface Gravity: 0.063 g
  Rotation Period: 6.39 Earth days (retrograde)
  Axial Tilt: 122.5°
  Number of Moons: 5 (including Charon, Nix, Hydra)
  Atmospheric Composition: Nitrogen, methane, carbon monoxide
  Surface Temperature: -229°C
`;



// You can add other planet facts similarly, e.g., `mercuryFacts`, `marsFacts`, etc.

const Space = () => {
  return (
    <div className="space-container">
      <div className="earth-model">
        <EarthModel />
      </div>
      <div className="Info">
        <PlanetInfo name="Earth" title="Home" facts={earthFacts} />
        <div className="corner-box bottom-right">
          <BubbleChart />
        </div>
      </div>
    </div>
  );
};

export default Space;
