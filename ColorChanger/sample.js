let ColorInput= document.getElementById("colorInput")
let btn=document.getElementById("btn")

function changeColor(){
    document.body.style.backgroundColor=ColorInput.value

}
btn.addEventListener("click",changeColor)

