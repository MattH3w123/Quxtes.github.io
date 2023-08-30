const QuoteContent = document.querySelector(".quote-text"),
authorn = document.querySelector(".quote-artist .aname"),
quoteBttn = document.querySelector("#next-quote"),
soundIcn = document.querySelector(".speak"),
copyIcn = document.querySelector(".copy"),
facebook = document.querySelector(".facebk"),
likeit = document.querySelector(".bttn.red-heart"),
button = likeit.querySelector("i.fa-heart");


function randomQuote(){
    quoteBttn.innerText = "Wait";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        QuoteContent.innerText = result.content;
        authorn.innerText = result.author;
        quoteBttn.innerText = "Next";
    });
};

soundIcn.addEventListener("click", ()=>{
    let utter = new SpeechSynthesisUtterance(QuoteContent.innerText);
    let availableVoices = speechSynthesis.getVoices();
    let englishVoice = availableVoices.find(voice => voice.lang === 'en' || voice.lang === 'en-US');
    
    if (englishVoice) {
        utter.voice = englishVoice;
        speechSynthesis.defaultVoice = englishVoice; // Ustaw domyślny głos
        speechSynthesis.speak(utter);
    } else {
        console.log("Brak dostępnego głosu w języku angielskim.");
    }
});


copyIcn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(QuoteContent.innerText);

});


likeit.classList.remove("red-heart");
likeit.addEventListener("click", () => {
    if (likeit.classList.contains("red-heart")) {
        likeit.classList.remove("red-heart");
    } else {
        likeit.classList.add("red-heart");
    }
});

quoteBttn.addEventListener("click", () => {
    likeit.classList.remove("red-heart");
});



quoteBttn.addEventListener("click", randomQuote);
