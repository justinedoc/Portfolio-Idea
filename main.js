// readmore 

const hiddenTexts = document.querySelector("readmore-unclicked");
const readMoreBtn = document.getElementById("readMoreBtn");
const aboutContent = document.getElementById("aboutContent");
const aboutSection = document.getElementById("about");

readMoreBtn.addEventListener("click", () => {
    if (!aboutContent.classList.contains("read-more-clicked")) {
        aboutContent.classList.add("read-more-clicked");
        document.getElementById("btnText").textContent = `Show Less`
    } else {
        aboutContent.classList.remove("read-more-clicked");
        document.getElementById("btnText").textContent = `Read More`
    }
    aboutSection.classList.toggle("read-more-clicked-for-positioning");
});
