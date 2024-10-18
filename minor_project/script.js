let  mode = document.querySelector("#btn");
let body = document.querySelector("body")
let currMode="light";

mode.addEventListener("click", ()=>{
    if (currMode==="light"){
        currMode="dark";
        let dark = document.querySelector("body")
        // dark.style.backgroundColor="black";
        body.classList.add("dark");                 //add using class
        body.classList.remove("light");
    } else{
        currMode="light";
        body.classList.add("light");
        // light.style.backgroundColor="white";
        body.classList.remove("dark");
    }
    console.log(currMode);
    
});