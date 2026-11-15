
/* ==========================================
   ESQUARE — STORY EQUIPMENT LINKS
   + LEFT / RIGHT STORY NAVIGATION
========================================== */

(() => {
    const params = new URLSearchParams(window.location.search);
    const place = params.get('place') || 'mars';

    // ==========================================
    // EQUIPMENT RECORD LINKS
    // ==========================================

    const equipmentList = document.getElementById('equipmentList');

    if (equipmentList) {
        const records = equipmentList.querySelectorAll('.record-item');

        records.forEach((record, index) => {
            const link = document.createElement('a');

            link.className = 'equipment-record-link';
            link.href = `equipment.html?place=${encodeURIComponent(place)}&item=${index}`;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';

            link.setAttribute(
                'aria-label',
                `Open equipment record ${index + 1} in a new tab`
            );

            record.parentNode.insertBefore(link, record);
            link.appendChild(record);

            const heading = record.querySelector('h3');

            if (heading) {
                const prompt = document.createElement('span');

                prompt.className = 'equipment-open-prompt';
                prompt.textContent = 'OPEN RECORD  ▶';

                record.appendChild(prompt);
            }
        });

        const intro = document.getElementById('equipmentIntro');

        if (intro) {
            intro.textContent =
                'Select a record to open its individual equipment file in a new tab. Records distinguish equipment intentionally left behind, surface hardware, and spacecraft that simply completed their missions.';
        }
    }

    // ==========================================
    // STORY LEFT / RIGHT ARROW NAVIGATION
    // ==========================================

    const storyTrack = document.getElementById('storyTrack');

    const previousButton = document.getElementById('storyPrev');
    const nextButton = document.getElementById('storyNext');

    if (!storyTrack || !previousButton || !nextButton) return;

    function updateArrowButtons() {
        const maxScroll = Math.max(
            0,
            storyTrack.scrollWidth - storyTrack.clientWidth
        );

        previousButton.disabled = storyTrack.scrollLeft <= 2;

        nextButton.disabled =
            storyTrack.scrollLeft >= maxScroll - 2;
    }

    previousButton.addEventListener('click', () => {
        storyTrack.scrollBy({
            left: -storyTrack.clientWidth,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', () => {
        storyTrack.scrollBy({
            left: storyTrack.clientWidth,
            behavior: 'smooth'
        });
    });

    storyTrack.addEventListener('scroll', updateArrowButtons);

    window.addEventListener('resize', updateArrowButtons);

    updateArrowButtons();

})();
