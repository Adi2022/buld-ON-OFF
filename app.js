
const bulbOff=document.getElementById("bulboff");

const buttonChange=document.getElementById("turnBtn")

buttonChange.addEventListener("click",changeImage)


function changeImage(){
    if (bulbOff.getAttribute("src") === "/assets/bulboff.png") {
        bulbOff.setAttribute("src","/assets/bulbon.avif")
        buttonChange.textContent="Turn off"
    }else{
        bulbOff.setAttribute("src","/assets/bulboff.png")
        buttonChange.textContent="Turn on"
    }
}