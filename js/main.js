let allButton = document.querySelectorAll(".numbers");
let allButtonSpread = [...allButton];
let calcDisplay = document.querySelector(".calc__display");
let deleteButton = document.querySelector(".delete");
let resetButton = document.querySelector(".reset");
let resultButton = document.querySelector(".equal");
let theme1=document.querySelector('.theme-1');
let theme2=document.querySelector('.theme-2');
let theme3=document.querySelector('.theme-3');



const setTheme1=()=>{
    document.querySelector("body").setAttribute("data-theme","theme-1");
    
    localStorage.setItem("selectedTheme","theme-1");
}
const setTheme2=()=>{
    document.querySelector("body").setAttribute("data-theme","theme-2");
    localStorage.setItem("selectedTheme","theme-2");
}
const setTheme3=()=>{
    document.querySelector("body").setAttribute("data-theme","theme-3");
    localStorage.setItem("selectedTheme","theme-3");
}

let selectedTheme=localStorage.getItem("selectedTheme");

if(selectedTheme==="theme-3"){
    setTheme3();
    theme3.classList.add('active');
    theme2.classList.remove('active'); 
    theme1.classList.remove('active'); 
}
else if(selectedTheme==="theme-2"){
    setTheme2();
    theme2.classList.add('active');
    theme1.classList.remove('active'); 
    theme3.classList.remove('active');
}
else{
    setTheme1();
    theme1.classList.add('active');
    theme2.classList.remove('active'); 
    theme3.classList.remove('active'); 
}
theme1.addEventListener('click',()=>{
    setTheme1();  
    theme1.classList.add('active');
    theme2.classList.remove('active'); 
    theme3.classList.remove('active'); 
})
theme2.addEventListener('click',()=>{
    setTheme2(); 
    theme2.classList.add('active');
    theme1.classList.remove('active'); 
    theme3.classList.remove('active');
})
theme3.addEventListener('click',()=>{
    setTheme3();
    theme3.classList.add('active');
    theme2.classList.remove('active'); 
    theme1.classList.remove('active'); 
})

allButton.forEach((button, index) => {
    
  button.addEventListener("click", () => {

    let value = allButton[index].innerHTML;
    if (allButton[index].innerHTML === "x") {
      value = "*";
    }
    calcDisplay.innerHTML += value;
  });
});

resultButton.addEventListener("click", () => {
  try {
    let allInput = calcDisplay.innerHTML;
    calcDisplay.innerHTML = eval(allInput);
  } catch (err) {
    calcDisplay.innerHTML = err.message;
  }
});

resetButton.addEventListener("click",()=>{
    calcDisplay.innerHTML='';
})

deleteButton.addEventListener("click",()=>{
    let input=calcDisplay.innerHTML;
    calcDisplay.innerHTML=input.substring(0,input.length-1);
})
