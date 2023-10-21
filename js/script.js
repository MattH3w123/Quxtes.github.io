
document.addEventListener("DOMContentLoaded", function() {
  const body = document.querySelector('body');
  const Changee = document.getElementById('change');

  const colorchanger = () => {
    if (body.getAttribute('data-mode') === 'two') {
      body.setAttribute('data-mode', 'one');
    } else {
      body.setAttribute('data-mode', 'two');
    }
  };

  Changee.addEventListener('click', colorchanger);
});

function changeColor(button) {
    
    if (button.classList.contains("red-heart")) {
      button.classList.remove("red-heart");
    } else {
      button.classList.add("red-heart");
    }
};


let SeeMore = document.querySelector("#quote-see-more");
let quotebox = 3;

SeeMore.onclick = () => {
  let boxes = [...document.querySelectorAll('.qt-content-area .qt-content .qot')];
  for (var i = quotebox; i < quotebox + 3; i++) {
    boxes[i].style.display = "inline-flex";
  };

  quotebox += 3;

  const copyButto = document.querySelectorAll(".copy");
  copyButto.forEach(copyButton => {
    copyButton.addEventListener("click", async () => {
      const quoteText = copyButton.closest(".quote-text-content").querySelector(".quote-text").innerText;
      await navigator.clipboard.writeText(quoteText);
    });
  });
};
  
