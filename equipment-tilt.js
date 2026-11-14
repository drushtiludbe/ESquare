/* =====================================
   ESqr - Equipment card Efect
===================================== */

const equipmentCard = document.querySelector(".game-record-window");

if (equipmentCard) {

    const maxRotation = 7;

    equipmentCard.addEventListener("pointermove", (event) => {

        // Only activate for a mouse
        if (event.pointerType !== "mouse") return;

        // Disable on smaller screens
        if (window.innerWidth <= 800) return;

        const rect = equipmentCard.getBoundingClientRect();

        const mouseX = event.clientX - rect.left;
        const centerX = rect.width / 2;

        const rotateY =
            ((mouseX - centerX) / centerX) * maxRotation;

        equipmentCard.style.transform = `
            perspective(1200px)
            rotateY(${rotateY}deg)
        `;

    });

    equipmentCard.addEventListener("pointerleave", () => {

        equipmentCard.style.transform = `
            perspective(1200px)
            rotateY(0deg)
        `;

    });

}