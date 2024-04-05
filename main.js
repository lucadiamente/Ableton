const moreBtn = document.querySelector(".more")

moreBtn.textContent

moreBtn.addEventListener("click", function() {
    if (moreBtn.textContent === "More +") {
        moreBtn.textContent = "More -"
    } else {
        moreBtn.textContent = "More +"
    }
})