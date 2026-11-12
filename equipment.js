
/* =====================================================
   ESQUARE — INDIVIDUAL EQUIPMENT RECORDS
   Uses destination and equipment data from script.js.
   Load script.js BEFORE equipment.js.
===================================================== */

(() => {
  const params = new URLSearchParams(window.location.search);

  const place = params.get("place") || "mars";
  const itemIndex = Number.parseInt(params.get("item") || "0", 10);

  const destination =
    typeof destinations !== "undefined" ? destinations[place] : null;

  const item =
    destination && Array.isArray(destination.equipment)
      ? destination.equipment[itemIndex]
      : null;

  const byId = id => document.getElementById(id);

  const set = (id, value) => {
    const element = byId(id);
    if (element) {
      element.textContent = value || "Not specified in this record";
    }
  };

  const recordNotFound = () => {
    const container = byId("equipmentRecord");

    if (container) {
      container.innerHTML = `
        <section class="game-record-window record-not-found">
          <h1>RECORD NOT FOUND</h1>
          <p>
            This equipment entry could not be found in the
            selected destination archive.
          </p>
          <a href="explore.html">RETURN TO EXPLORE</a>
        </section>
      `;
    }
  };

  if (!destination || !item) {
    recordNotFound();
    return;
  }

  /* =====================================================
     COMPLETE EQUIPMENT RECORD DATABASE
     Each key matches an equipment name in script.js.
  ===================================================== */

  const records = {

    /* ===================== MARS ===================== */

    "mars pathfinder lander": {
      type: "MARS LANDER",
      launch: "December 4, 1996",
      landing: "July 4, 1997",
      contact: "September 27, 1997",
      status: "MISSION COMPLETE — LEFT ON MARS",

      overview:
        "Mars Pathfinder was a NASA mission that demonstrated a low-cost method of delivering a lander and rover to the Martian surface.",

      role:
        "The stationary lander served as the main communication station for the Sojourner rover. It also carried scientific instruments and cameras to study the Martian environment.",

      final:
        "The mission operated beyond its original planned duration. Communication with the lander was lost on September 27, 1997, ending the mission.",

      remains:
        "The Pathfinder lander remains at Ares Vallis on Mars. It was left at its landing site after the mission ended."
    },

    "sojourner rover": {
      type: "MARS MICRO ROVER",
      launch: "December 4, 1996",
      landing: "July 4, 1997",
      contact: "September 27, 1997",
      status: "MISSION COMPLETE — LEFT ON MARS",

      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sojourner%20rover%20scheme.jpg",

      caption: "NASA — Sojourner rover engineering illustration",

      overview:
        "Sojourner was the small robotic rover delivered to Mars by the Pathfinder lander. It became the first successful wheeled rover to operate on another planet.",

      role:
        "It examined nearby rocks and soil, tested rover mobility and demonstrated that a compact robotic vehicle could perform useful scientific work on Mars.",

      final:
        "The rover operated for 83 Martian days. Communication was lost when the Pathfinder lander stopped communicating with Earth in September 1997.",

      remains:
        "Sojourner remains on Mars near the Pathfinder lander at Ares Vallis."
    },

    "viking 1 lander": {
      type: "MARS LANDER",
      launch: "August 20, 1975",
      landing: "July 20, 1976",
      contact: "November 13, 1982",
      status: "MISSION COMPLETE — LEFT ON MARS",

      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Viking%20spacecraft.jpg",

      caption: "NASA — Viking spacecraft",

      overview:
        "Viking 1 was part of NASA's Viking programme and became the first successful US spacecraft to land and operate on Mars.",

      role:
        "It photographed the Martian surface, monitored weather conditions and conducted experiments on Martian soil, including experiments related to the search for life.",

      final:
        "The lander stopped communicating on November 13, 1982, following a problem associated with an attempted software update.",

      remains:
        "The Viking 1 lander remains at Chryse Planitia on Mars."
    },

    "viking 2 lander": {
      type: "MARS LANDER",
      launch: "September 9, 1975",
      landing: "September 3, 1976",
      contact: "April 11, 1980",
      status: "MISSION COMPLETE — LEFT ON MARS",

      overview:
        "Viking 2 was the second successful NASA Viking lander. It explored a different region of Mars from Viking 1.",

      role:
        "It returned photographs, monitored Martian weather and carried out scientific experiments to investigate the surface and soil.",

      final:
        "The lander stopped communicating on April 11, 1980, after its batteries failed.",

      remains:
        "Viking 2 remains at Utopia Planitia on Mars, where it landed in 1976."
    },

    "spirit rover": {
      type: "MARS EXPLORATION ROVER",
      launch: "June 10, 2003",
      landing: "January 4, 2004",
      contact: "March 22, 2010",
      status: "MISSION COMPLETE — LEFT ON MARS",

      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/MER%20rovers%20and%20Sojourner%20(PIA04422).jpg",

      caption: "NASA / JPL — Mars rover family",

      overview:
        "Spirit was one of NASA's twin Mars Exploration Rovers. Although designed for a 90-Martian-day mission, it operated for more than six years.",

      role:
        "It explored Gusev Crater, examined rocks and soil and helped scientists investigate evidence of past water-related environments.",

      final:
        "Spirit became stuck in soft soil in 2009 and could not reach a favourable position for the Martian winter. Its last communication was received on March 22, 2010. NASA ended recovery efforts in 2011.",

      remains:
        "Spirit remains on the Martian surface at the location where it became immobilised."
    },

    "opportunity rover": {
      type: "MARS EXPLORATION ROVER",
      launch: "July 7, 2003",
      landing: "January 25, 2004",
      contact: "June 10, 2018",
      status: "MISSION COMPLETE — LEFT ON MARS",

      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/MER%20rovers%20and%20Sojourner%20(PIA04422).jpg",

      caption: "NASA / JPL — Mars rover family",

      overview:
        "Opportunity was one of NASA's twin Mars Exploration Rovers. It was designed for a 90-sol mission but continued operating for almost 15 years.",

      role:
        "It examined rocks and soil in Meridiani Planum and found geological evidence that liquid water had affected the Martian environment in the past.",

      final:
        "A planet-encircling dust storm in 2018 reduced the sunlight reaching its solar panels. The rover last communicated with Earth on June 10, 2018. NASA declared the mission complete on February 13, 2019.",

      remains:
        "Opportunity remains on Mars at the site where it stopped operating. It was not deliberately abandoned while active."
    },

    "phoenix lander": {
      type: "MARS POLAR LANDER",
      launch: "August 4, 2007",
      landing: "May 25, 2008",
      contact: "November 2, 2008",
      status: "MISSION COMPLETE — LEFT ON MARS",

      overview:
        "Phoenix was a stationary NASA lander sent to investigate the Martian arctic region.",

      role:
        "It used a robotic arm to dig into the soil, examined samples and confirmed the presence of water ice beneath the Martian surface.",

      final:
        "The lander stopped communicating in November 2008 as seasonal conditions reduced the available sunlight and temperatures became too low for continued operation.",

      remains:
        "Phoenix remains at its landing site in the northern plains of Mars."
    },

    "insight lander": {
      type: "MARS GEOPHYSICAL LANDER",
      launch: "May 5, 2018",
      landing: "November 26, 2018",
      contact: "December 15, 2022",
      status: "MISSION COMPLETE — LEFT ON MARS",

      overview:
        "InSight was a stationary NASA lander designed to investigate the internal structure of Mars.",

      role:
        "It studied marsquakes, the planet's internal activity and heat flow. Its instruments helped scientists understand the structure and formation of Mars.",

      final:
        "Dust gradually accumulated on its solar panels and reduced its available power. NASA ended the mission after the lander stopped communicating in December 2022.",

      remains:
        "The InSight lander remains at Elysium Planitia on Mars."
    },

    "perseverance landing hardware": {
      type: "MARS LANDING SYSTEM HARDWARE",
      launch: "July 30, 2020",
      landing: "February 18, 2021",
      contact: "Not applicable — separated during landing",
      status: "LANDING HARDWARE LEFT ON MARS",

      overview:
        "Perseverance used a complex entry, descent and landing system to reach the Martian surface safely.",

      role:
        "The landing system included a heat shield, backshell, parachute and powered descent stage. These components protected and delivered the rover to the surface.",

      final:
        "During landing, the heat shield separated, the parachute and backshell were released, and the descent stage lowered the rover before flying away from the landing location.",

      remains:
        "The separated landing components remain at different locations near the Perseverance landing site. This record refers to the discarded landing hardware, not the operating Perseverance rover."
    },


    /* ===================== THE MOON ===================== */

    "apollo lunar module descent stages": {
      type: "LUNAR MODULE DESCENT STAGES",
      launch: "Apollo missions, 1969–1972",
      landing: "Apollo 11: July 20, 1969",
      contact: "Not applicable — intentionally left",
      status: "INTENTIONALLY LEFT ON THE MOON",

      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/AS11-40-5864%20-%20Apollo%2011%20-%20Apollo%2011%20Mission%20image%20-%20The%20Lunar%20Module%20sits%20on%20the%20surface%20of%20the%20moon%20-%20NARA%20-%2016685019.jpg",

      caption: "NASA — Apollo 11 lunar module on the Moon",

      overview:
        "The Lunar Module descent stage was the lower section of the Apollo Lunar Module. It carried astronauts to the lunar surface.",

      role:
        "It provided the landing engine, landing legs, fuel and equipment support. It also served as the launch platform for the ascent stage.",

      final:
        "After the astronauts returned to lunar orbit using the ascent stage, the descent stage remained at the landing site. Leaving it behind was part of the mission design.",

      remains:
        "Descent stages from several Apollo missions remain at their respective lunar landing sites. This record refers to the group of descent stages, not one single object."
    },

    "apollo lunar roving vehicles": {
      type: "LUNAR ROVING VEHICLES",
      launch: "Apollo 15, 16 and 17 missions",
      landing: "First deployed: July 31, 1971",
      contact: "Last used: December 1972",
      status: "LEFT ON THE MOON",

      overview:
        "The Lunar Roving Vehicle was an electric vehicle used by astronauts during the later Apollo missions.",

      role:
        "It allowed astronauts to travel farther from their landing modules, carry scientific equipment and collect lunar samples.",

      final:
        "The vehicles were parked at their final mission locations when the astronauts departed the Moon.",

      remains:
        "Three Lunar Roving Vehicles remain on the Moon, left behind by Apollo 15, Apollo 16 and Apollo 17."
    },

    "apollo alsep instruments": {
      type: "LUNAR SCIENTIFIC INSTRUMENTS",
      launch: "Apollo missions, 1969–1972",
      landing: "First deployment: July 21, 1969",
      contact: "Switched off on September 30, 1977",
      status: "DELIBERATELY LEFT ON THE MOON",

      overview:
        "ALSEP stands for Apollo Lunar Surface Experiments Package. These were scientific instrument packages deployed by astronauts at several Apollo landing sites.",

      role:
        "The instruments measured lunar activity and environmental conditions. Experiments included seismic measurements, heat-flow studies and investigations of the lunar environment.",

      final:
        "The instruments continued transmitting scientific data after the astronauts returned to Earth. NASA switched off the ALSEP stations in September 1977.",

      remains:
        "The ALSEP instruments and their support equipment remain at the Apollo landing sites on the Moon."
    },

    "surveyor landers": {
      type: "ROBOTIC LUNAR LANDERS",
      launch: "Surveyor programme, 1966–1968",
      landing: "First successful landing: June 2, 1966",
      contact: "Varied by individual mission",
      status: "MISSION COMPLETE — LEFT ON THE MOON",

      overview:
        "The Surveyor programme consisted of robotic spacecraft sent to investigate the lunar surface before human lunar landings.",

      role:
        "The landers photographed the lunar surface, studied soil properties and tested whether the surface could support the weight of future crewed landing vehicles.",

      final:
        "Individual Surveyor missions ended after completing their planned scientific operations or losing communication.",

      remains:
        "Successful Surveyor landers remain at their respective lunar landing locations. Surveyor 3 was also visited by Apollo 12 astronauts."
    },

    "luna 2": {
      type: "LUNAR IMPACT PROBE",
      launch: "September 12, 1959",
      landing: "September 13, 1959 — lunar impact",
      contact: "September 13, 1959",
      status: "INTENTIONALLY IMPACTED THE MOON",

      overview:
        "Luna 2 was a Soviet spacecraft and the first human-made object to reach the lunar surface.",

      role:
        "It carried instruments to investigate the space environment near the Moon and study the lunar region during its journey.",

      final:
        "The spacecraft was designed to impact the Moon rather than perform a soft landing. It reached the lunar surface on September 13, 1959.",

      remains:
        "Luna 2's remains are at its lunar impact site. The spacecraft was destroyed on impact."
    },

    "apollo ascent stages": {
      type: "LUNAR MODULE ASCENT STAGES",
      launch: "Apollo missions, 1969–1972",
      landing: "Varied by Apollo mission",
      contact: "Varied by mission",
      status: "SOME DELIBERATELY IMPACTED THE MOON",

      overview:
        "The ascent stage was the upper section of the Apollo Lunar Module. It carried astronauts from the lunar surface back into lunar orbit.",

      role:
        "It contained the crew cabin, guidance systems and engine needed to lift astronauts away from the lunar surface and return them to the command module.",

      final:
        "After the astronauts transferred to the command module, some ascent stages were deliberately directed to impact the Moon. Others followed different mission disposal plans.",

      remains:
        "Some Apollo ascent stages impacted the lunar surface and were destroyed. This record refers only to the stages deliberately sent into lunar impact trajectories, not every Apollo ascent stage."
    },

    "chandrayaan-3 vikram lander": {
      type: "INDIAN LUNAR LANDER",
      launch: "July 14, 2023",
      landing: "August 23, 2023",
      contact: "September 2023 — end of first lunar day",
      status: "MISSION COMPLETE — LEFT ON THE MOON",

      overview:
        "Vikram was the lander of India's Chandrayaan-3 mission. It achieved a successful soft landing near the lunar south polar region.",

      role:
        "It carried scientific instruments to study the lunar surface and deployed the Pragyan rover.",

      final:
        "Vikram completed its planned surface operations during the lunar day. It entered sleep mode during the lunar night and did not resume operations afterward.",

      remains:
        "The Vikram lander remains at the Chandrayaan-3 landing site on the Moon."
    },

    "chandrayaan-3 pragyan rover": {
      type: "INDIAN LUNAR ROVER",
      launch: "July 14, 2023",
      landing: "Deployed on August 24, 2023",
      contact: "September 2023 — end of first lunar day",
      status: "MISSION COMPLETE — LEFT ON THE MOON",

      overview:
        "Pragyan was the six-wheeled robotic rover carried by the Chandrayaan-3 Vikram lander.",

      role:
        "It travelled around the landing area, examined lunar soil and rocks, and carried instruments to study the composition of the lunar surface.",

      final:
        "Pragyan completed its planned operations and was placed into sleep mode before the lunar night. It did not resume operations afterward.",

      remains:
        "The Pragyan rover remains near the Vikram landing site on the Moon."
    },


    /* ===================== SATURN / TITAN ===================== */

    "huygens probe": {
      type: "TITAN ATMOSPHERIC ENTRY AND LANDING PROBE",
      launch: "October 15, 1997",
      landing: "January 14, 2005 — Titan",
      contact: "Approximately 90 minutes after landing",
      status: "MISSION COMPLETE — LEFT ON TITAN",

      overview:
        "Huygens was a European Space Agency probe carried to Saturn by the Cassini-Huygens mission. It was designed to descend through the atmosphere of Titan, Saturn's largest moon.",

      role:
        "It studied Titan's atmosphere during descent and returned images and measurements of the surface after landing.",

      final:
        "Huygens successfully landed on Titan on January 14, 2005. It continued transmitting information from the surface for approximately 90 minutes.",

      remains:
        "The Huygens probe remains on Titan. It is important to note that it landed on Saturn's moon, not on Saturn itself."
    },

    "cassini spacecraft": {
      type: "SATURN ORBITER",
      launch: "October 15, 1997",
      landing: "Not applicable — entered Saturn's atmosphere",
      contact: "September 15, 2017",
      status: "DELIBERATELY DISPOSED OF",

      overview:
        "Cassini was a NASA spacecraft that studied Saturn, its rings and its moons for more than 13 years after arriving in orbit around the planet.",

      role:
        "It investigated Saturn's atmosphere, ring system and moons. It also carried the European Huygens probe, which landed on Titan.",

      final:
        "NASA deliberately directed Cassini into Saturn's atmosphere on September 15, 2017. This planned end-of-mission disposal reduced the risk of contaminating potentially habitable moons.",

      remains:
        "Cassini was destroyed during its final descent into Saturn's atmosphere. It was not left intact on Saturn's surface."
    },


    /* ===================== ASTEROIDS ===================== */

    "near shoemaker": {
      type: "ASTEROID ORBITER AND LANDER",
      launch: "February 17, 1996",
      landing: "February 12, 2001 — Eros",
      contact: "February 28, 2001",
      status: "INTENTIONALLY LEFT ON ASTEROID EROS",

      overview:
        "NEAR Shoemaker was a NASA spacecraft designed to study the near-Earth asteroid Eros.",

      role:
        "It mapped the asteroid, studied its composition and returned detailed images and measurements. At the end of its mission, it attempted a controlled descent to the surface.",

      final:
        "The spacecraft successfully touched down on Eros on February 12, 2001. Although it was not originally designed as a lander, it continued communicating for a short period after touchdown.",

      remains:
        "NEAR Shoemaker remains on the surface of asteroid Eros. It became the first spacecraft to land on an asteroid."
    },

    "hayabusa2 minerva-ii rovers": {
      type: "ASTEROID HOPPING ROVERS",
      launch: "December 3, 2014",
      landing: "Deployed on September 21, 2018 — Ryugu",
      contact: "Varied by individual rover",
      status: "DEPLOYED ON ASTEROID RYUGU",

      overview:
        "MINERVA-II was a group of small robotic hopping rovers carried by Japan's Hayabusa2 spacecraft to asteroid Ryugu.",

      role:
        "The rovers used a hopping mechanism to move across the asteroid's low-gravity surface. They captured images and collected information about the terrain.",

      final:
        "The rovers were released from Hayabusa2 and descended to the asteroid. Their individual operating periods and communication histories differed.",

      remains:
        "The deployed MINERVA-II rovers were left on the surface of Ryugu after their operations. They were not returned to Earth with the Hayabusa2 sample capsule."
    },

    "hayabusa2 mascot lander": {
      type: "ASTEROID SURFACE LANDER",
      launch: "December 3, 2014",
      landing: "October 3, 2018 — Ryugu",
      contact: "Approximately 17 hours of surface operation",
      status: "MISSION COMPLETE — LEFT ON RYUGU",

      overview:
        "MASCOT was a small lander developed by the German Aerospace Center and the French space agency CNES. It travelled to asteroid Ryugu aboard Hayabusa2.",

      role:
        "It carried scientific instruments to study the asteroid's surface, including its mineral composition, magnetic properties and thermal behaviour.",

      final:
        "MASCOT operated on Ryugu for approximately 17 hours. Its battery eventually ran out, ending its surface operations.",

      remains:
        "MASCOT remains on the surface of asteroid Ryugu. It was not returned to Earth."
    },

    "dart impactor": {
      type: "ASTEROID DEFLECTION IMPACTOR",
      launch: "November 24, 2021",
      landing: "September 26, 2022 — Dimorphos impact",
      contact: "September 26, 2022",
      status: "DELIBERATELY IMPACTED DIMORPHOS",

      overview:
        "DART was NASA's Double Asteroid Redirection Test mission. It tested whether a spacecraft impact could change the motion of an asteroid moonlet.",

      role:
        "The spacecraft was directed toward Dimorphos, the small moonlet orbiting the asteroid Didymos. The mission measured the change in Dimorphos's orbit after impact.",

      final:
        "DART deliberately collided with Dimorphos on September 26, 2022. The collision was the planned final step of the experiment.",

      remains:
        "The spacecraft was destroyed during impact. Its material became part of the impact site and surrounding debris on Dimorphos."
    }

  };


  /* =====================================================
     SELECT THE CORRECT RECORD
  ===================================================== */

  const key = item.name.trim().toLowerCase();
  const curated = records[key];

  const fallbackImage = destination.image || "spacebg.jpg";

  const data = curated || {
    type: "MISSION EQUIPMENT / SURFACE HARDWARE",
    launch: "See mission record",
    landing: "See mission record",
    contact: "Not recorded here",
    status: "GENERAL ARCHIVE RECORD",

    overview:
      `${item.name} is included in the ${destination.name} equipment archive.`,

    role: item.description,

    final:
      "The current destination archive describes this item as equipment left, deployed or disposed of during a mission. Consult the original mission documentation for its exact operational timeline.",

    remains: item.description
  };


  /* =====================================================
     DISPLAY THE SELECTED RECORD
  ===================================================== */

  document.title = `${item.name} | ESquare Equipment Record`;

  set(
    "equipmentKicker",
    `DESTINATION ${destination.number} / EQUIPMENT ${String(itemIndex + 1).padStart(2, "0")}`
  );

  set("equipmentName", item.name);
  set("equipmentType", data.type);
  set("equipmentLocation", destination.name);

  set("equipmentOverview", data.overview);
  set("equipmentRole", data.role);
  set("equipmentFinal", data.final);
  set("equipmentRemains", data.remains);

  set("equipmentLaunch", data.launch);
  set("equipmentLanding", data.landing);
  set("equipmentLastContact", data.contact);
  set("equipmentStatus", data.status);

  set(
    "equipmentImageCaption",
    data.caption || `${item.name} — destination archive image`
  );


  /* =====================================================
     IMAGE HANDLING
  ===================================================== */

  const img = byId("equipmentImage");

  if (img) {
    img.src = data.image || fallbackImage;
    img.alt = `${item.name} equipment image`;

    img.onerror = () => {
      img.onerror = null;
      img.src = fallbackImage;
    };
  }


  /* =====================================================
     BACK / RETURN LINKS
  ===================================================== */

  const returnUrl = `story.html?place=${encodeURIComponent(place)}`;

  const back = byId("equipmentBack");
  const returnLink = byId("equipmentReturn");

  if (back) back.href = returnUrl;
  if (returnLink) returnLink.href = returnUrl;

})();
