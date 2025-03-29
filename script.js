const songs = [
    {
        hint: "Pista: Esta canción tiene el título 'Despacito'.",
        answer: "Despacito"
    },
    {
        hint: "Pista: Esta canción es conocida por su letra 'Let it be'.",
        answer: "Let it be"
    },
    {
        hint: "Pista: Esta canción tiene el título 'Shape of You'.",
        answer: "Shape of You"
    }
];

let currentSong = 0;

function loadSong() {
    document.getElementById('hint').innerText = songs[currentSong].hint;
    document.getElementById('message').innerText = "";
    document.getElementById('guess').value = "";
}

function checkGuess() {
    const guess = document.getElementById('guess').value.trim();
    if (guess.toLowerCase() === songs[currentSong].answer.toLowerCase()) {
        document.getElementById('message').innerText = "¡Correcto! 🎉";
        currentSong = (currentSong + 1) % songs.length;
        setTimeout(loadSong, 2000);
    } else {
        document.getElementById('message').innerText = "Incorrecto. Inténtalo de nuevo.";
    }
}

// Cargar la primera canción al inicio
loadSong();
