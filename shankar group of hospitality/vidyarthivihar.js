const images = ["vidyarthivihar2.jpg","primansha1.jpeg","primansha3.html.jpeg","primansha4.jpeg"];
let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnails img");
const zoomWindow = document.getElementById("zoomWindow");
const lens = document.querySelector(".lens");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

let zoomLevel = 2.5;

/* Update Image */
function updateImage(index){
    currentIndex = index;

    mainImage.style.opacity = 0;

    setTimeout(()=>{
        mainImage.src = images[currentIndex];
        zoomWindow.style.backgroundImage = `url(${images[currentIndex]})`;
        mainImage.style.opacity = 1;
    },200);

    thumbnails.forEach(img => img.classList.remove("active"));
    thumbnails[currentIndex].classList.add("active");
}

/* Thumbnail Click */
thumbnails.forEach(img=>{
    img.addEventListener("click", ()=>{
        updateImage(parseInt(img.dataset.index));
    });
});

/* Arrow Navigation */
leftArrow.addEventListener("click", ()=>{
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
});

rightArrow.addEventListener("click", ()=>{
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
});

/* Zoom Effect */
mainImage.addEventListener("mouseenter", ()=>{
    lens.style.display = "block";
    zoomWindow.style.display = "block";
});

mainImage.addEventListener("mouseleave", ()=>{
    lens.style.display = "none";
    zoomWindow.style.display = "none";
});

mainImage.addEventListener("mousemove", moveLens);

function moveLens(e){

    const rect = mainImage.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    const lensWidth = lens.offsetWidth;
    const lensHeight = lens.offsetHeight;

    x -= lensWidth/2;
    y -= lensHeight/2;

    if(x < 0) x = 0;
    if(y < 0) y = 0;
    if(x > rect.width - lensWidth) x = rect.width - lensWidth;
    if(y > rect.height - lensHeight) y = rect.height - lensHeight;

    lens.style.left = x + "px";
    lens.style.top = y + "px";

   zoomWindow.style.backgroundSize = 
    `${mainImage.naturalWidth * zoomLevel}px ${mainImage.naturalHeight * zoomLevel}px`;
    
    zoomWindow.style.backgroundPosition =
        "-" + (x * zoomLevel) + "px -" +
        (y * zoomLevel) + "px";
}

/* Initialize */
zoomWindow.style.backgroundImage = `url(${images[0]})`;