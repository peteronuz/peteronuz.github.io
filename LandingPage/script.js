const slider = document.querySelector(".slider");
img1 = slider.querySelectorAll("img")[0];
arrows = document.querySelectorAll(".wrapper i");


let isDragStart = false, prevPageX, prevScrollLeft;
let img1Width = img1.clientWidth + 14;

arrows.forEach(icon => {
    icon.addEventListener("click", () => {
        console.log(icon);
        slider.scrollLeft += icon.id == "left" ? -img1Width : img1Width;
    });
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    slider.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    slider.classList.remove("dragging");
}

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
slider.addEventListener("mouseup", dragStop);