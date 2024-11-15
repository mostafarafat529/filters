let saturate = document.getElementById("saturate")
let contrast = document.getElementById("contrast")
let brightness = document.getElementById("brightness")
let sepia = document.getElementById("sepia")
let grayscale = document.getElementById("grayscale")
let blur = document.getElementById("blur")
let huerotate = document.getElementById("hue-rotate")
let download = document.getElementById("download")
let upload = document.getElementById("upload")
let img = document.getElementById("img")
let reset = document.querySelector("span")
let img_box = document.querySelector(".img-box")


function resetvalue(){
    img.style.filter = "none" ;
    saturate.value = "100" ;
    contrast.value = "100" ;
    brightness.value = "100" ;
    sepia.value = "0" ;
    grayscale.value = "100" ;
    blur.value = "0" ;
    huerotate.value = "0" ;

}

window.onload =function(){
    download.style.display = "none"
    reset.style.display = "none"
    img_box.style.display ="none"
}
upload.onchange = function(){
    resetvalue()
    download.style.display = "block"
    reset.style.display = "block"
    img_box.style.display ="block"
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload= function(){
        img.src = file.result ;
    }
}

let filters = document.querySelectorAll("ul li input");

filters.forEach(function(filter){
    filter.addEventListener("input" , function(){
        img.style.filter = `
        saturate(${saturate.value}%) 
        contrast(${contrast.value}%) 
        brightness(${brightness.value}%) 
        sepia(${sepia.value}%) 
        grayscale(${grayscale.value}) 
        blur(${blur.value}px) 
        hue-rotate(${huerotate.value}deg) 
        `
    })
})