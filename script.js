let scrollContainter = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainter.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollContainter.scrollLeft += evt.deltaY;
    scrollContainter.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
    scrollContainter.style.scrollBehavior = "smooth";
    scrollContainter.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrollContainter.style.scrollBehavior = "smooth";
    scrollContainter.scrollLeft -= 900;
});