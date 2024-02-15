document.addEventListener("DOMContentLoaded", function() {
  
  const body = document.querySelector('body');
  const changeButton = document.getElementById('change');

  function colorchanger() {
    
    if (body.getAttribute('data-mode') === 'two') {
      body.setAttribute('data-mode', 'one');
      localStorage.setItem('colorMode', 'one');
    } else {
      body.setAttribute('data-mode', 'two');
      localStorage.setItem('colorMode', 'two');
    }
  }

  if (changeButton) {
    changeButton.addEventListener('click', colorchanger);
  } else {
    console.log("Change button not found");
  }

  const savedColorMode = localStorage.getItem('colorMode');
  
  if (savedColorMode) {
    body.setAttribute('data-mode', savedColorMode);
  } else {
    console.log("No saved color mode found");
  }
});

let SeeMore = document.querySelector("#quote-see-more");
let quotebox = 3;

SeeMore.onclick = () => {
  let boxes = [...document.querySelectorAll('.qt-content-area .qt-content .qot')];
  for (let i = quotebox; i < quotebox + 3 && i < boxes.length; i++) {
    boxes[i].style.display = "inline-flex";
  }

  quotebox += 3;

  const copyButtons = document.querySelectorAll(".copy");
  copyButtons.forEach(copyButton => {
    copyButton.addEventListener("click", async () => {
      const quoteText = copyButton.closest(".quote-text-content").querySelector(".quote-text").innerText;
      await navigator.clipboard.writeText(quoteText);
    });
  });

  document.querySelectorAll('.copy').forEach(copyButton => {
    copyButton.style.display = 'flex';
  });
};


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});
  
  
const hiddenEle = document.querySelectorAll('.hidden');
hiddenEle.forEach((el) => observer.observe(el))
  
  
const Secoundobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add('show-fast');
      } else {
          entry.target.classList.remove('show-fast');
      }
  });
});

const hiddenElesecend = document.querySelectorAll('.hidden-fast');
hiddenElesecend.forEach((el) => Secoundobserver.observe(el));
