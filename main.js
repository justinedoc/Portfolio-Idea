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



// Navbar

const nav = document.querySelector(".navlist");
const menuBtn = document.getElementById("menu-icon");
const closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", () => {
    nav.classList.add("active");
})

function closeNav() {
    nav.classList.remove("active");
}
closeBtn.addEventListener("click", closeNav)

