document.querySelector(".submit").addEventListener("click",submited);
function submited(e){
    e.preventDefault();
    const input = document.querySelector(".input").value;
    const country = document.querySelector("#country").value;
    const category = document.querySelector("#category").value;
    
    if(input !== "" || category !== "" || country !== ""){
        console.log("true")
    }else{
        console.log("false")
    }
}