const productBackground = document.querySelector(".background-contact");

productBackground.addEventListener("mousemove", (e) => {
    productBackground.style.backgroundPositionX = (-e.pageX  / 10) + "px";
});
