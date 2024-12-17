function changeColor(){
    const colors=["green","blue","yellow","red","crimson","cyan"]
    const randomColor=Math.floor(Math.random()*colors.length)
    document.body.style.backgroundColor=colors[randomColor]

}

