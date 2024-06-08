const imagecontainerEl = document.querySelector(".image-container");
const PrevEl = document.getElementById("prev");
const nextEl = document.getElementById("nex");


let x =  0;
let timer;
PrevEl.addEventListener("click",()=>{
    x = x+45;
    clearTimeout(timer);
    updateGallery();
});

nextEl.addEventListener("click",()=>{
    x = x-45;
    clearTimeout(timer);
    updateGalleryBack();
});


function updateGallery(){
    imagecontainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(()=>{
        x = x-45;
        updateGallery();
    },3000);
};

updateGallery();


function updateGalleryBack(){
    imagecontainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}