/* ESQUARE STORY EQUIPMENT LINKS
   Enhances the existing equipment slide without changing Explore or other pages. */
(() => {
    const params = new URLSearchParams(window.location.search);
    const place = params.get('place') || 'mars';
    const equipmentList = document.getElementById('equipmentList');
    if (!equipmentList) return;

    // script.js creates the original records first; turn only equipment records into links.
    const records = equipmentList.querySelectorAll('.record-item');
    records.forEach((record, index) => {
        const link = document.createElement('a');
        link.className = 'equipment-record-link';
        link.href = `equipment.html?place=${encodeURIComponent(place)}&item=${index}`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', `Open equipment record ${index + 1} in a new tab`);
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
        intro.textContent = 'Select a record to open its individual equipment file in a new tab. Records distinguish equipment intentionally left behind, surface hardware, and spacecraft that simply completed their missions.';
    }
})();
