
// alert("Hello, JavaScript is working!");        

// console.log("Hello javascript")

// let // const difference 

// for (let i = 1; i <= 5; i++) {
//     console.log(i); // Outputs: 1, 2, 3, 4, 5
// }

let btn=document.getElementById("btn")
let resultDiv= document.getElementById("result")
function sum(){
let num1= Number(document.getElementById("num1").value)
let num2= Number(document.getElementById("num2").value)

    resultDiv.innerHTML=num1+num2    
}
btn.addEventListener("click",sum)






