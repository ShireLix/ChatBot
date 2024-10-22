 // Előre meghatározott válaszok tárolása
 const botReplies = {
    "szia": "Szia! Hogy vagy?",
    "segíts": "Hogyan segíthetek?",
    "hogy vagy?": "Jól, köszönöm, és te?",
    "mi a neved?": "Chatbotnak hívnak.",
    "hány éves vagy?": "Én egy program vagyok, így nincs korom.",
    "szeretnék látni egy jó weboldalt": "Itt találod: <a href='https://digisulim.hu/' target='_blank'>digisulim.hu</a>",
    "mit tudsz csinálni?": "Sok mindent! Kérdezz bármit, és próbálok segíteni.",
    "mi a kedvenc színed?": "A kék, mint az ég!",
    "default": "Elnézést, nem értem. Próbáld meg másképp megfogalmazni!",
    "viszlát":"Szép napot neked!"
};

// Lehetséges elírások javítása
const typoCorrections = {
    "szi": "szia",
    "segits": "segíts",
    "vagy": "hogy vagy",
    "név": "mi a neved",
    "oldal": "szeretnék látni egy jó weboldalt"
};

// Felhasználói üzenet és bot válasz kezelése
function getResponse() {
    const userInputRaw = document.getElementById("userInput").value.toLowerCase();
    const chatbox = document.getElementById("chatbox");

    let userInput = userInputRaw;
    // Elírás javítása
    if (typoCorrections[userInputRaw]) {
        userInput = typoCorrections[userInputRaw];
    }

    // Bot válasz keresése
    let botResponse = botReplies[userInput] || botReplies["default"];

    // Bot és felhasználói üzenetek megjelenítése
    const userText = `<p><b>Te:</b> ${userInputRaw}</p>`;
    const botText = `<p><b>LevChat:</b> ${botResponse}</p>`;

    chatbox.innerHTML += userText + botText;

    // Görgetés az új üzenethez
    chatbox.scrollTop = chatbox.scrollHeight;

    // Input mező ürítése
    document.getElementById("userInput").value = "";
}
