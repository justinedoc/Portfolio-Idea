let words = document.querySelectorAll(".word");

words.forEach(function (word) {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach(function (letter) {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});




let currentWorldIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWorldIndex].style.opacity = "1";


let changeText = function () {

    let currentWord = words[currentWorldIndex];
    let nextWord = currentWorldIndex === maxWordIndex ? words[0] : words[currentWorldIndex + 1];
    Array.from(currentWord.children).forEach(function (letter, i) {
        setTimeout(function () {
            letter.className = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach(function (letter, i) {
        letter.className = "letter behind";

        setTimeout(function () {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWorldIndex = currentWorldIndex === maxWordIndex ? 0 : currentWorldIndex + 1;
};
changeText();
setInterval(changeText, 3000);




// CIRCLES 

const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;


    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;
    const pointsmarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsmarked[i].classList.add('marked')
    }
})


//  MIX IT UP 

var mixer = mixitup('.portfolio-gallery');



