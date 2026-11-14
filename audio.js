
/* ESQUARE GLOBAL BACKGROUND MUSIC */

(() => {
    const AUDIO_FILE = "bgesquare.mp3";
    const DEFAULT_VOLUME = 0.25;
    const STORAGE_KEY = "esquareMusicEnabled";

    let musicEnabled = localStorage.getItem(STORAGE_KEY) !== "false";

    const audio = document.createElement("audio");
    audio.src = AUDIO_FILE;
    audio.loop = true;
    audio.volume = DEFAULT_VOLUME;
    audio.preload = "auto";
    document.body.appendChild(audio);

    const musicControl = document.createElement("div");
    musicControl.className = "music-control";

    musicControl.innerHTML = `
        <span class="music-label">MUSIC</span>
        <button type="button"
            class="music-switch"
            id="musicSwitch"
            role="switch"
            aria-label="Background music"
            aria-checked="false">
            <span class="music-switch-circle"></span>
        </button>
    `;

    // Place music control inside mobile navigation
    const nav = document.querySelector(".nav-links");

    if (nav) {
        nav.appendChild(musicControl);
    } else {
        document.body.appendChild(musicControl);
    }

    const musicSwitch = document.getElementById("musicSwitch");

    function updateSwitch() {
        musicSwitch.classList.toggle("active", musicEnabled);
        musicSwitch.setAttribute("aria-checked", String(musicEnabled));
    }

    async function playMusic() {
        if (!musicEnabled) return;

        try {
            await audio.play();
        } catch (error) {
            console.log("Music will start after user interaction.");
        }
    }

    musicSwitch.addEventListener("click", async () => {
        musicEnabled = !musicEnabled;

        localStorage.setItem(STORAGE_KEY, String(musicEnabled));

        updateSwitch();

        if (musicEnabled) {
            await playMusic();
        } else {
            audio.pause();
        }
    });

    // Try playback after the first user interaction
    document.addEventListener("pointerdown", playMusic, { once: true });

    updateSwitch();
    if (musicEnabled) playMusic();
})();
