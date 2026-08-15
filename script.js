function openSurprise() {

    const surprise = document.getElementById("surprise");

    surprise.classList.remove("hidden");

    surprise.scrollIntoView({
        behavior: "smooth"
    });

}


function revealDNA() {

    const message = document.getElementById("dnaMessage");

    message.innerText =
        "If you were AUG, I'd be UAC. 🧬❤️";

}