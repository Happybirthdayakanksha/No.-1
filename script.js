/* =====================================
   BIRTHDAY CELEBRATION
===================================== */

function createFallingItem() {

    const container = document.getElementById("celebration");

    if (!container) return;

    const items = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💝",
        "🎈",
        "🎂",
        "🎉",
        "✨",
        "🌸",
        "🥳"
    ];

    const item = document.createElement("div");

    item.classList.add("falling-item");

    item.innerText =
        items[Math.floor(Math.random() * items.length)];

    item.style.left =
        Math.random() * 100 + "vw";

    item.style.fontSize =
        (18 + Math.random() * 20) + "px";

    item.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    item.style.animationDelay =
        Math.random() * 0.5 + "s";

    container.appendChild(item);


    setTimeout(() => {

        item.remove();

    }, 8000);
}


/* =====================================
   START SURPRISE
===================================== */

function startSurprise() {

    const button = document.querySelector(".surprise-btn");

    if (button) {

        button.innerHTML = "💗 Surprise Incoming...";

        button.style.pointerEvents = "none";
    }


    /* Create lots of falling objects */

    for (let i = 0; i < 70; i++) {

        setTimeout(() => {

            createFallingItem();

        }, i * 45);

    }


    /*
       Wait for the celebration,
       then move to the second page.
    */

    setTimeout(() => {

        window.location.href = "surprise.html";

    }, 2600);
}


/* =====================================
   EXTRA SURPRISE
===================================== */

function moreSurprise() {

    for (let i = 0; i < 45; i++) {

        setTimeout(() => {

            createFallingItem();

        }, i * 55);

    }

}
