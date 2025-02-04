var text = document.getElementById("text")
var result = document.getElementById("result")
let limit  = 60;
result.textContent = 0  + "/" + limit;

text.addEventListener("input",()=>{
    let textLength = text.value.length;
    result.textContent = textLength + "/" + limit;

    if(textLength > limit){
        text.style.borderColor = "#ff2851";
        result.style.color = "#ff2851"
    }else{
        text.style.borderColor = "#b2b2b2"
        result.style.color = "#737373"
    }    
})