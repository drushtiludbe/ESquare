
/* =====================================================
   ESQUARE — SHARED EQUIPMENT RECORD PAGE

   One equipment.html page for every destination.
   Reads the selected destination and equipment index
   from the URL.

   IMPORTANT:
   Load script.js BEFORE equipment.js.
===================================================== */

(() => {

    // ==========================================
    // 1. GET SELECTED DESTINATION AND EQUIPMENT
    // ==========================================

    const params = new URLSearchParams(window.location.search);

    const place = params.get("place") || "mars";
    const itemIndex = Number.parseInt(params.get("item") || "0", 10);

    const destination =
        typeof destinations !== "undefined"
            ? destinations[place]
            : null;

    const item =
        destination &&
        Array.isArray(destination.equipment) &&
        Number.isInteger(itemIndex) &&
        itemIndex >= 0
            ? destination.equipment[itemIndex]
            : null;


    // ==========================================
    // 2. HELPER FUNCTIONS
    // ==========================================

    const byId = id => document.getElementById(id);

    function set(id, value) {

        const element = byId(id);

        if (element) {
            element.textContent =
                value || "Not specified in this record";
        }

    }


    function recordNotFound() {

        const container = byId("equipmentRecord");

        if (!container) return;

        container.innerHTML = `
            <section class="game-record-window record-not-found">

                <h1>RECORD NOT FOUND</h1>

                <p>
                    This equipment entry could not be found
                    in the selected destination archive.
                </p>

                <a href="explore.html">
                    RETURN TO EXPLORE
                </a>

            </section>
        `;

    }


    if (!destination || !item) {
        recordNotFound();
        return;
    }


    // ==========================================
    // 3. EQUIPMENT DATABASE
    // Names match script.js exactly.
    // ==========================================

    const records = {

        // ======================================
        // MARS — 9 RECORDS
        // ======================================

        "mars pathfinder lander": {

            type: "MARS LANDER",

            launch: "December 4, 1996",
            landing: "July 4, 1997",
            contact: "September 27, 1997",

            status: "MISSION COMPLETE — LEFT ON MARS",

            overview:
                "Mars Pathfinder was a NASA mission designed to demonstrate a cost-effective way to deliver scientific equipment to the Martian surface. It combined a stationary lander with a small robotic rover.",

            role:
                "The lander served as the communication centre for Sojourner. It carried cameras and scientific instruments that examined the surrounding terrain, atmosphere and Martian soil.",

            final:
                "Pathfinder operated beyond its original planned mission period. Communication with the lander was lost on September 27, 1997, bringing the mission to an end.",

            remains:
                "The Pathfinder lander remains at Ares Vallis on Mars. Its landing platform became part of the Martian landscape after the mission ended."

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
                "Sojourner was the small robotic rover carried to Mars by the Pathfinder lander. It became the first successful wheeled rover to operate on another planet.",

            role:
                "It travelled around the landing area, examined nearby rocks and soil, and tested the possibility of using a compact robotic vehicle for planetary exploration.",

            final:
                "Designed for a short demonstration mission, Sojourner operated for 83 Martian days. It stopped communicating when its Pathfinder base station lost contact with Earth.",

            remains:
                "Sojourner remains near the Pathfinder lander at Ares Vallis. Although its mission ended decades ago, it demonstrated the potential of robotic surface exploration."

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
                "Viking 1 was part of NASA's Viking programme. It became the first successful US spacecraft to land and operate on Mars.",

            role:
                "The lander photographed the Martian surface, monitored weather conditions and conducted experiments on Martian soil. Some of its experiments investigated whether the soil showed signs of biological activity.",

            final:
                "Viking 1 operated for several years. Communication ended on November 13, 1982, following problems associated with an attempted software update.",

            remains:
                "The lander remains at Chryse Planitia on Mars, where it completed its historic landing in 1976."

        },


        "viking 2 lander": {

            type: "MARS LANDER",

            launch: "September 9, 1975",
            landing: "September 3, 1976",
            contact: "April 11, 1980",

            status: "MISSION COMPLETE — LEFT ON MARS",

            overview:
                "Viking 2 was the second successful lander in NASA's Viking programme. It explored a different region of Mars from Viking 1.",

            role:
                "It photographed the surrounding terrain, monitored Martian weather and performed scientific experiments to investigate the planet's surface and soil.",

            final:
                "Viking 2 continued its scientific work until communication ended on April 11, 1980, after its batteries failed.",

            remains:
                "Viking 2 remains at Utopia Planitia on Mars. Its observations helped scientists understand the planet's surface conditions."

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
                "Spirit was one of NASA's twin Mars Exploration Rovers. It was originally designed for a 90-Martian-day mission, but continued operating for more than six years.",

            role:
                "It explored Gusev Crater, examined rocks and soil, and collected evidence that helped scientists investigate the history of water on Mars.",

            final:
                "Spirit became trapped in soft soil in 2009. NASA continued attempting to communicate with the rover, but its last signal arrived on March 22, 2010. Recovery efforts ended in 2011.",

            remains:
                "Spirit remains on Mars at the location where it became immobilised. Its extended mission greatly exceeded its original design lifetime."

        },


        "opportunity rover": {

            type: "MARS EXPLORATION ROVER",

            launch: "July 7, 2003",
            landing: "January 25, 2004",
            contact: "June 10, 2018",

            status: "MISSION COMPLETE — LEFT ON MARS",

            image:
                "https://commons.wikimedia.org/wiki/Special:FilePath/MER%20rovers%20and%20Sojourner%20(PIA04422).jpg",

            caption: "NASA / JPL — Mars Exploration Rover",

            overview:
                "Opportunity was one of NASA's twin Mars Exploration Rovers. Designed for a 90-sol mission, it continued exploring Mars for almost 15 years.",

            role:
                "It investigated rocks and soil in Meridiani Planum, discovering geological evidence that liquid water had affected the Martian environment in the distant past.",

            final:
                "A major dust storm in 2018 reduced the sunlight reaching Opportunity's solar panels. The rover last communicated with Earth on June 10, 2018. NASA declared the mission complete on February 13, 2019.",

            remains:
                "Opportunity remains on Mars at the location where it stopped operating. Its extraordinary operational lifetime made it one of the longest-running surface missions on the planet."

        },


        "phoenix lander": {

            type: "MARS POLAR LANDER",

            launch: "August 4, 2007",
            landing: "May 25, 2008",
            contact: "November 2, 2008",

            status: "MISSION COMPLETE — LEFT ON MARS",

            overview:
                "Phoenix was a stationary NASA lander sent to investigate the northern polar region of Mars. Its mission focused on understanding the soil and the presence of water ice.",

            role:
                "Its robotic arm collected soil samples and delivered them to onboard instruments. The lander confirmed the presence of water ice beneath the Martian surface.",

            final:
                "Phoenix completed its planned surface investigation. As seasonal darkness increased and temperatures dropped, its available power decreased. Its last communication was received in November 2008.",

            remains:
                "Phoenix remains at its landing location in the northern plains of Mars. Its findings provided important information about water ice and the Martian environment."

        },


        "insight lander": {

            type: "MARS GEOPHYSICAL LANDER",

            launch: "May 5, 2018",
            landing: "November 26, 2018",
            contact: "December 15, 2022",

            status: "MISSION COMPLETE — LEFT ON MARS",

            overview:
                "InSight was a stationary NASA lander designed to investigate the internal structure of Mars rather than explore large areas of its surface.",

            role:
                "It studied marsquakes, internal activity and heat flow. Its instruments helped scientists investigate the structure and formation of the planet.",

            final:
                "Dust gradually accumulated on its solar panels and reduced its available power. NASA ended the mission after the lander stopped communicating in December 2022.",

            remains:
                "InSight remains at Elysium Planitia on Mars. Its measurements provided scientists with a new understanding of the planet's interior."

        },


        "perseverance landing hardware": {

            type: "MARS LANDING SYSTEM HARDWARE",

            launch: "July 30, 2020",
            landing: "February 18, 2021",
            contact: "Not applicable — separated during landing",

            status: "LANDING HARDWARE LEFT ON MARS",

            overview:
                "Perseverance used a complex entry, descent and landing system to reach Jezero Crater safely. This equipment included several components that separated from the rover during landing.",

            role:
                "The heat shield protected the spacecraft during atmospheric entry. A parachute slowed its descent, while the powered descent stage and sky crane system lowered the rover onto the surface.",

            final:
                "During the landing sequence, the heat shield separated, the parachute and backshell were released, and the descent stage lowered Perseverance before flying away from the landing location.",

            remains:
                "The separated landing components remain at different locations near the Perseverance landing site. This record describes the discarded landing hardware, not the operating rover."

        },


        // ======================================
        // MOON — 5 RECORDS
        // ======================================

        "apollo lunar module descent stages": {

            type: "LUNAR MODULE DESCENT STAGES",

            launch: "Apollo missions, 1969–1972",
            landing: "First crewed landing: July 20, 1969",
            contact: "Not applicable — intentionally left",

            status: "INTENTIONALLY LEFT ON THE MOON",

            overview:
                "The descent stage was the lower section of the Apollo Lunar Module. It carried astronauts from lunar orbit down to the Moon's surface.",

            role:
                "It contained the landing engine, landing legs, fuel and equipment support. It also served as the launch platform from which the ascent stage departed.",

            final:
                "After the astronauts returned to lunar orbit using the ascent stage, the descent stage remained at the landing site. Leaving it behind was part of the Apollo mission design.",

            remains:
                "Descent stages from several Apollo missions remain at their respective lunar landing sites. They are still on the Moon today."

        },


        "apollo lunar roving vehicles": {

            type: "LUNAR ROVING VEHICLES",

            launch: "Apollo 15, 16 and 17 missions",
            landing: "First deployed: July 31, 1971",
            contact: "Last used: December 1972",

            status: "LEFT ON THE MOON",

            overview:
                "The Lunar Roving Vehicle was an electric vehicle used by astronauts during the later Apollo missions. It expanded the distance astronauts could explore from their landing modules.",

            role:
                "The vehicles transported astronauts, scientific instruments and lunar samples across the surface. Their use allowed crews to investigate areas beyond immediate walking distance.",

            final:
                "At the end of each mission, the astronauts parked their vehicles near their final exploration locations before departing the Moon.",

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
                "ALSEP stands for Apollo Lunar Surface Experiments Package. These scientific instrument stations were deployed by astronauts at several Apollo landing sites.",

            role:
                "The instruments measured lunar activity and environmental conditions. Experiments included seismic measurements, heat-flow studies and investigations of the lunar environment.",

            final:
                "The stations continued transmitting scientific measurements after the astronauts returned to Earth. NASA switched off the ALSEP stations on September 30, 1977.",

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
                "The landers photographed the surface, examined soil properties and helped scientists determine whether the Moon could support the landing of crewed spacecraft.",

            final:
                "Individual Surveyor missions ended after completing their scientific operations or losing communication. Surveyor 3 was later visited by Apollo 12 astronauts.",

            remains:
                "Successful Surveyor landers remain at their respective lunar landing sites. Their measurements helped prepare for the Apollo programme."

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
                "After the astronauts transferred to the command module, some ascent stages were deliberately directed to impact the Moon. Other stages followed different disposal plans.",

            remains:
                "Some Apollo ascent stages impacted the lunar surface and were destroyed. This record refers to the stages deliberately sent into lunar impact trajectories, not every ascent stage."

        },


        // ======================================
        // SATURN — 1 RECORD
        // ======================================

        "cassini spacecraft": {

            type: "SATURN ORBITER",

            launch: "October 15, 1997",
            landing: "Not applicable — entered Saturn's atmosphere",
            contact: "September 15, 2017",

            status: "DELIBERATELY DISPOSED OF",

            overview:
                "Cassini was a NASA spacecraft that studied Saturn, its rings and its moons. It spent more than 13 years exploring the Saturn system after arriving in orbit in 2004.",

            role:
                "It investigated Saturn's atmosphere, ring system and moons. It also carried the European Huygens probe, which successfully landed on Titan.",

            final:
                "NASA deliberately directed Cassini into Saturn's atmosphere on September 15, 2017. This planned end-of-mission disposal reduced the risk of contaminating potentially habitable moons.",

            remains:
                "Cassini was destroyed during its final descent into Saturn's atmosphere. It was not left intact on Saturn's surface."

        },


        // ======================================
        // ASTEROIDS — 2 RECORDS
        // ======================================

        "near shoemaker": {

            type: "ASTEROID ORBITER AND LANDER",

            launch: "February 17, 1996",
            landing: "February 12, 2001 — Eros",
            contact: "February 28, 2001",

            status: "LEFT ON ASTEROID EROS",

            overview:
                "NEAR Shoemaker was a NASA spacecraft designed to study the near-Earth asteroid Eros. It became the first spacecraft to successfully land on an asteroid.",

            role:
                "It mapped Eros, examined its surface and collected information about its composition. At the end of its orbital mission, the spacecraft attempted a controlled descent.",

            final:
                "NEAR Shoemaker touched down on Eros on February 12, 2001. Although it had not originally been designed as a lander, it continued communicating for a short period after touchdown.",

            remains:
                "NEAR Shoemaker remains on the surface of asteroid Eros. Its landing demonstrated that spacecraft could reach and operate on the surface of a small asteroid."

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
                "The spacecraft was directed toward Dimorphos, the small moonlet orbiting the asteroid Didymos. Scientists measured the change in Dimorphos's orbit after the collision.",

            final:
                "DART deliberately collided with Dimorphos on September 26, 2022. The collision was the planned final step of the asteroid-deflection experiment.",

            remains:
                "The spacecraft was destroyed during impact. Its material became part of the impact site and surrounding debris on Dimorphos."

        }

    };


    // ==========================================
    // 4. FIND THE SELECTED EQUIPMENT RECORD
    // ==========================================

    const key = item.name.trim().toLowerCase();

    const data = records[key];

    if (!data) {

        console.error(
            "Equipment record missing:",
            item.name,
            "Destination:",
            place
        );

        recordNotFound();
        return;

    }


    // ==========================================
    // 5. DISPLAY THE SELECTED RECORD
    // ==========================================

    document.title =
        `${item.name} | ESquare Equipment Record`;

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


    // ==========================================
    // 6. DISPLAY THE CORRECT IMAGE
    // ==========================================

    const img = byId("equipmentImage");

    if (img) {

        const fallbackImage =
            destination.image || "spacebg.jpg";

        img.src = data.image || fallbackImage;

        img.alt = `${item.name} equipment image`;

        img.onerror = () => {

            img.onerror = null;
            img.src = fallbackImage;

        };

    }


    // ==========================================
    // 7. BACK AND RETURN LINKS
    // ==========================================

    const returnUrl =
        `story.html?place=${encodeURIComponent(place)}`;

    const back = byId("equipmentBack");
    const returnLink = byId("equipmentReturn");

    if (back) {
        back.href = returnUrl;
    }

    if (returnLink) {
        returnLink.href = returnUrl;
    }


})();
