
// ==========================================
// ESQUARE — NAVIGATION & DESTINATION RECORDS
// ==========================================


// MOBILE NAVIGATION

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(open));
    });
}


// DESTINATION DATA

const destinations = {

    mars: {
        number: "001",
        name: "MARS",
        image: "MarsBG.jpeg",

        overview: "Mars has been explored by orbiters, landers and rovers. These missions have studied its surface, atmosphere, climate and geological history. Some landing hardware remains on the planet after the missions.",

        missions: [
            { name: "Mariner 4", description: "Performed the first successful close flyby of Mars in 1965 and returned the first close-up images of the planet." },
            { name: "Viking 1", description: "Entered Mars orbit and became the first successful US spacecraft to land and operate on the Martian surface in 1976." },
            { name: "Viking 2", description: "Studied the Martian surface and atmosphere after landing in 1976." },
            { name: "Mars Pathfinder", description: "Delivered the Sojourner rover to Mars in 1997 to examine rocks and soil." },
            { name: "Spirit", description: "Explored the Martian surface and studied rocks and soil after landing in 2004." },
            { name: "Opportunity", description: "Investigated the geology of Mars after landing in 2004 and operated for many years." },
            { name: "Phoenix", description: "Landed in the Martian north polar region in 2008 and examined soil and water ice." },
            { name: "Curiosity", description: "Has studied the geology and habitability of Gale Crater since landing in 2012." },
            { name: "InSight", description: "Studied the planet's interior, including marsquakes and its internal structure." },
            { name: "Perseverance", description: "Landed in Jezero Crater in 2021 to study ancient environments and collect rock samples." }
        ],

        equipment: [
            { name: "Mars Pathfinder lander", description: "The stationary NASA lander remained on Mars after the 1997 mission." },
            { name: "Sojourner rover", description: "The small NASA rover was deployed by Pathfinder and remained on the Martian surface." },
            { name: "Viking 1 lander", description: "The NASA lander remained at its landing site after its mission ended." },
            { name: "Viking 2 lander", description: "The NASA lander remained on Mars after completing its scientific operations." },
            { name: "Spirit rover", description: "The NASA rover became stationary in 2009 and its mission ended in 2011." },
            { name: "Opportunity rover", description: "The NASA rover remained on Mars after its mission ended in 2019." },
            { name: "Phoenix lander", description: "The NASA lander remained at its polar landing site after its mission ended." },
            { name: "InSight lander", description: "The stationary NASA lander remained on Mars after its mission ended in 2022." },
            { name: "Perseverance landing hardware", description: "The NASA mission's heat shield, backshell and descent-stage hardware were separated during landing and left on Mars." }
        ],

        prev: "asteroid",
        next: "moon"
    },


    moon: {
        number: "002",
        name: "THE MOON",
        image: "moonBg.jpg",

        overview: "The Moon has been visited by crewed and robotic missions. NASA landers, scientific instruments, tools and other equipment have been left at several landing sites. Some Apollo hardware was deliberately sent into lunar impact trajectories.",

        missions: [
            { name: "Luna 2", description: "The Soviet spacecraft became the first human-made object to reach the lunar surface in 1959." },
            { name: "Luna 9", description: "Made the first successful soft landing on the Moon in 1966." },
            { name: "Surveyor 1", description: "Successfully landed on the Moon in 1966 and sent back images and surface information." },
            { name: "Apollo 11", description: "Carried the first humans to the lunar surface in July 1969." },
            { name: "Apollo 12", description: "Landed near the Surveyor 3 spacecraft and returned samples and equipment." },
            { name: "Apollo 14", description: "Conducted lunar surface exploration and deployed scientific instruments in 1971." },
            { name: "Apollo 15", description: "Used the Lunar Roving Vehicle and carried out extensive surface investigations." },
            { name: "Apollo 16", description: "Explored the lunar highlands and deployed scientific equipment in 1972." },
            { name: "Apollo 17", description: "The final crewed Apollo lunar landing, conducted in December 1972." },
            { name: "Chandrayaan-3", description: "India's mission achieved a soft landing near the lunar south polar region in 2023." }
        ],

        equipment: [
            { name: "Apollo lunar module descent stages", description: "The descent stages of NASA's Apollo lunar modules were left at their landing sites." },
            { name: "Apollo Lunar Roving Vehicles", description: "The NASA rovers used during Apollo 15, 16 and 17 remained on the lunar surface." },
            { name: "Apollo ALSEP instruments", description: "NASA's Apollo Lunar Surface Experiments Packages were deployed at Apollo landing sites and left there." },
            { name: "Surveyor landers", description: "NASA Surveyor spacecraft that completed their missions remained on the lunar surface." },
            { name: "Apollo ascent stages", description: "Some Apollo lunar module ascent stages were deliberately directed to impact the Moon; this does not mean every ascent stage followed that outcome." }
        ],

        prev: "mars",
        next: "saturn"
    },


    saturn: {
        number: "003",
        name: "SATURN",
        image: "SaturnBg.jpg",

        overview: "Saturn has been studied by flyby spacecraft and the Cassini-Huygens mission. NASA's Cassini spacecraft deliberately ended its mission by entering Saturn's atmosphere. Huygens was an ESA probe that landed on Titan.",

        missions: [
            { name: "Pioneer 11", description: "Performed the first close flyby of Saturn in 1979." },
            { name: "Voyager 1", description: "Studied Saturn and its moons during its 1980 flyby." },
            { name: "Voyager 2", description: "Conducted a Saturn flyby in 1981 and returned observations of the planet and its rings." },
            { name: "Cassini-Huygens", description: "Studied Saturn, its rings and moons from orbit. The Huygens probe landed on Titan in 2005." }
        ],

        equipment: [
            { name: "Cassini spacecraft", description: "NASA's Cassini spacecraft was deliberately sent into Saturn's atmosphere on 15 September 2017 to end the mission and reduce contamination risk to its moons." }
        ],

        prev: "moon",
        next: "asteroid"
    },


    asteroid: {
        number: "004",
        name: "ASTEROIDS",
        image: "astBg.jpg",

        overview: "Asteroid missions have mapped small bodies, collected samples and tested ways to change an asteroid's motion. NASA's NEAR Shoemaker spacecraft landed on Eros, while DART deliberately impacted Dimorphos. Sample-return capsules brought back to Earth are not classified as equipment left on an asteroid.",

        missions: [
            { name: "NEAR Shoemaker", description: "Studied asteroid Eros and became the first spacecraft to land on an asteroid in 2001." },
            { name: "Hayabusa", description: "Visited asteroid Itokawa and returned a sample to Earth in 2010." },
            { name: "Dawn", description: "Studied the large asteroids Vesta and Ceres from orbit." },
            { name: "Hayabusa2", description: "Visited asteroid Ryugu, deployed small surface devices and returned samples to Earth." },
            { name: "OSIRIS-REx", description: "Collected a sample from asteroid Bennu and returned its sample capsule to Earth in 2023." },
            { name: "DART", description: "Tested asteroid deflection by deliberately impacting the moonlet Dimorphos in 2022." }
        ],

        equipment: [
            { name: "NEAR Shoemaker", description: "NASA's spacecraft was deliberately placed on the surface of asteroid Eros at the end of its mission in 2001." },
            { name: "DART impactor", description: "NASA's spacecraft deliberately impacted Dimorphos in 2022 as part of an asteroid-deflection test." }
        ],

        prev: "saturn",
        next: "mars"
    }

};


// ==========================================
// HELPER FUNCTIONS
// ==========================================

function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
}


// DISPLAY MISSION AND EQUIPMENT RECORDS

function displayRecords(containerId, records) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.replaceChildren();

    const params = new URLSearchParams(window.location.search);
    const place = params.get("place") || "mars";

    records.forEach((record, index) => {

        const article = document.createElement("article");
        article.className = "record-item";

        const heading = document.createElement("h3");
        heading.textContent =
            `${String(index + 1).padStart(2, "0")}. ${record.name}`;

        const paragraph = document.createElement("p");
        paragraph.textContent = record.description;

        article.append(heading, paragraph);

        if (containerId === "equipmentList") {

            const link = document.createElement("a");

            link.className = "equipment-choice-link";

            link.href =
                `equipment.html?place=${encodeURIComponent(place)}&item=${index}`;

            link.textContent = "VIEW EQUIPMENT RECORD →  " ;

            article.appendChild(link);
        }

        container.appendChild(article);
    });
}


function displayDefinitionList(containerId, entries) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.replaceChildren();

    entries.forEach(([label, value]) => {
        const dt = document.createElement("dt");
        const dd = document.createElement("dd");

        dt.textContent = label;
        dd.textContent = value;

        container.append(dt, dd);
    });
}


// ==========================================
// LOAD DESTINATION
// ==========================================

const storyTitle = document.getElementById("storyTitle");

if (storyTitle) {

    const params = new URLSearchParams(window.location.search);
    const key = params.get("place") || "mars";
    const destination = destinations[key] || destinations.mars;

    document.title = `${destination.name} | ESquare Records`;

    storyTitle.textContent = destination.name;

    setText("storyKicker", `DESTINATION ${destination.number} / ${destination.name}`);
    setText("storyTagline", "MISSION AND EQUIPMENT RECORDS");

    const planetImage = document.getElementById("planetImage");

    if (planetImage) {
        planetImage.src = destination.image;
        planetImage.alt = `${destination.name} destination`;
    }

    // OVERVIEW

    setText("overviewHeading", `${destination.name} Mission Records`);
    setText("overviewText", destination.overview);

    displayDefinitionList("missionSummary", [
        ["MISSION RECORDS", destination.missions.length],
        ["EQUIPMENT RECORDS", destination.equipment.length],
        ["DESTINATION FILE", destination.number]
    ]);

    // MISSIONS

    setText("missionDestination", destination.name);

    setText(
        "missionIntro",
        `${destination.missions.length} selected mission records are included in this destination file.`
    );

    displayRecords("missionList", destination.missions);

    // EQUIPMENT

    setText(
        "equipmentIntro",
        "This NASA equipment archive includes hardware deliberately left behind, deployed onto a destination, or disposed of as part of a mission. Merely inactive spacecraft are not automatically included."
    );

    displayDefinitionList("equipmentSummary", [
        ["EQUIPMENT RECORDS", destination.equipment.length]
    ]);

    displayRecords("equipmentList", destination.equipment);

    const equipmentEmpty = document.getElementById("equipmentEmpty");

    if (equipmentEmpty) {
        equipmentEmpty.hidden = destination.equipment.length !== 0;
    }

    // PREVIOUS AND NEXT LINKS

    const previousLink = document.getElementById("prevStory");
    const nextLink = document.getElementById("nextStory");

    if (previousLink) {
        previousLink.href =
            `story.html?place=${encodeURIComponent(destination.prev)}`;

        previousLink.textContent =
            `← ${destinations[destination.prev].name}`;
    }

    if (nextLink) {
        nextLink.href =
            `story.html?place=${encodeURIComponent(destination.next)}`;

        nextLink.textContent =
            `${destinations[destination.next].name} →`;
    }
}


// ==========================================
// HORIZONTAL SLIDE NAVIGATION
// ==========================================

const storyTrack = document.getElementById("storyTrack");

if (storyTrack) {

    const storyBoxes = storyTrack.querySelectorAll(".story-box");

    const prevPanel = document.getElementById("prevPanel");
    const nextPanel = document.getElementById("nextPanel");
    const storyCounter = document.getElementById("storyCounter");


    function getCurrentPanel() {

        const center =
            storyTrack.getBoundingClientRect().left +
            storyTrack.clientWidth / 2;

        let current = 0;
        let smallestDistance = Infinity;

        storyBoxes.forEach((box, index) => {

            const boxCenter =
                box.getBoundingClientRect().left +
                box.offsetWidth / 2;

            const distance = Math.abs(center - boxCenter);

            if (distance < smallestDistance) {
                smallestDistance = distance;
                current = index;
            }
        });

        return current;
    }


    function updateStoryCounter() {

        const current = getCurrentPanel();

        if (storyCounter) {
            storyCounter.textContent =
                `${String(current + 1).padStart(2, "0")} / ${String(storyBoxes.length).padStart(2, "0")}`;
        }

        if (prevPanel) {
            prevPanel.disabled = current === 0;
        }

        if (nextPanel) {
            nextPanel.disabled = current === storyBoxes.length - 1;
        }
    }


    function moveStory(direction) {

        const current = getCurrentPanel();

        const next = Math.max(
            0,
            Math.min(storyBoxes.length - 1, current + direction)
        );

        storyBoxes[next].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });
    }


    prevPanel?.addEventListener("click", () => moveStory(-1));

    nextPanel?.addEventListener("click", () => moveStory(1));

    storyTrack.addEventListener("scroll", updateStoryCounter);

    window.addEventListener("resize", updateStoryCounter);

    updateStoryCounter();
}
