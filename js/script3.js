const body = document.querySelector('body');
const Changee = document.getElementById('change');

    const colorchanger = () => {
        if(body.getAttribute('data-mode') === 'two') {
            body.setAttribute('data-mode', 'one')
        } else {
            body.setAttribute('data-mode', 'two')
        }
    };

    Changee.addEventListener('click', colorchanger);

function changeColor(button) {
    
    if (button.classList.contains("red-heart")) {
      button.classList.remove("red-heart");
    } else {
      button.classList.add("red-heart");
    }
};


const SeeMore = document.getElementById("quote-see-more"),
QuoteContentArea = document.querySelector('.qt-content-area .qt-content');

let quotebox = 0;

SeeMore.onclick = async () => {
  for (let i = 0; i < 3; i++) {
    SeeMore.innerText = "Wait";
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    const newQuoteBox = document.createElement('div');
    newQuoteBox.classList.add('qot');
    newQuoteBox.innerHTML = `
      <div class="quote-text-content qot">
        <div class="quote-artist">
          <span class="aname">${data.author}</span>
        </div>
        <hr class="hrr">
        <div class="quote-main-content">
          <i class="fa-solid fa-quote-left" style="color: #000000;"></i>
          <p class="quote-text">${data.content}</p>
          <i class="fa-solid fa-quote-right" style="color: #000000;"></i>
        </div>
        <hr class="hrr">
        <div class="btnn">
          <ul>
            <li class="speak"><i class="fa-solid fa-volume-high"></i></li>
            <li class="copy"><i class="fa-solid fa-copy"></i></li>
          </ul>
          <button class="bttn red-heart" onclick="changeColor(this)"><i class="fa-solid fa-heart"></i></button>
        </div>
      </div>
    `;
    SeeMore.innerHTML = "See more<br>&#9661;";

    QuoteContentArea.appendChild(newQuoteBox);
  }
  quotebox += 3;
  
  const copyButtons = document.querySelectorAll(".copy");
  copyButtons.forEach(copyButton => {
    copyButton.addEventListener("click", async () => {
      const quoteText = copyButton.closest(".quote-text-content").querySelector(".quote-text").innerText;
      await navigator.clipboard.writeText(quoteText);
    });
  });

  const soundIcons = document.querySelectorAll(".speak");
  const clickDelay = 3000; 

  function handleVoicesChanged() {
    let availableVoices = speechSynthesis.getVoices();
    return availableVoices.find(voice => voice.lang === 'en' || voice.lang === 'en-US');
  }

  speechSynthesis.addEventListener('voiceschanged', () => {
    soundIcons.forEach(soundIcon => {
      soundIcon.disabled = false; 
    });
  });

  soundIcons.forEach(soundIcon => {
    soundIcon.addEventListener("click", () => {
      if (!soundIcon.disabled) {
        soundIcon.disabled = true; 
        soundIcon.style.opacity = 0.9; 
        soundIcon.style.backgroundColor = "rgba(51, 51, 50)"; 

        let quoteText = soundIcon.closest(".quote-text-content").querySelector(".quote-text").innerText;
        let utter = new SpeechSynthesisUtterance(quoteText);

        let englishVoice = handleVoicesChanged();

        if (englishVoice) {
          utter.voice = englishVoice;
          speechSynthesis.defaultVoice = englishVoice;
          speechSynthesis.speak(utter);
        } else {
          console.log("Brak dostępnego głosu w języku angielskim.");
        }

        
        setTimeout(() => {
          soundIcon.disabled = false;
          soundIcon.style.opacity = 1; 
          soundIcon.style.backgroundColor = ""; 
        }, clickDelay);
      }
    });
  });

};

const copyButtons = document.querySelectorAll(".copy");
  copyButtons.forEach(copyButton => {
    copyButton.addEventListener("click", async () => {
      const quoteText = copyButton.closest(".quote-text-content").querySelector(".quote-text").innerText;
      await navigator.clipboard.writeText(quoteText);
    });
  });

const soundIcons = document.querySelectorAll(".speak");
const clickDelay = 5000; 

function handleVoicesChanged() {
  let availableVoices = speechSynthesis.getVoices();
  return availableVoices.find(voice => voice.lang === 'en' || voice.lang === 'en-US');
}

speechSynthesis.addEventListener('voiceschanged', () => {
  soundIcons.forEach(soundIcon => {
    soundIcon.disabled = false;
  });
});

soundIcons.forEach(soundIcon => {
  soundIcon.addEventListener("click", () => {
    if (!soundIcon.disabled) {
      soundIcon.disabled = true; 
      soundIcon.style.opacity = 0.9; 
      soundIcon.style.backgroundColor = "rgba(51, 51, 50)"; 

      let quoteText = soundIcon.closest(".quote-text-content").querySelector(".quote-text").innerText;
      let utter = new SpeechSynthesisUtterance(quoteText);

      let englishVoice = handleVoicesChanged();

      if (englishVoice) {
        utter.voice = englishVoice;
        speechSynthesis.defaultVoice = englishVoice;
        speechSynthesis.speak(utter);
      } else {
        console.log("Brak dostępnego głosu w języku angielskim.");
      }

      setTimeout(() => {
        soundIcon.disabled = false;
        soundIcon.style.opacity = 1; 
        soundIcon.style.backgroundColor = ""; 
      }, clickDelay);
    }
  });
});

