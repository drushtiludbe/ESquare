
/* =====================================
   ESQUARE - 3D EQUIPMENT WINDOW EFFECT
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
        const mouseY = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY =
            ((mouseX - centerX) / centerX) * maxRotation;

        const rotateX =
            ((centerY - mouseY) / centerY) * maxRotation;

        equipmentCard.style.transform = `
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;

    });

    // Return to original position when mouse leaves

    equipmentCard.addEventListener("pointerleave", () => {

        equipmentCard.style.transform = `
            perspective(1200px)
            rotateX(0deg)
            rotateY(0deg)
        `;

    });

}
