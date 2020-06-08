let images = document.querySelectorAll(".main img")
let time = 2000;
let index = 0; // posiçao atual do slide
let maxImgs = images.length;

function slide(){
    setInterval(function changeImg () {
        
        images[index].classList.remove("selected");
        index++;
        

        if(index >= maxImgs){
            index = 0;
        } // zera o array, caso chegue na ultima imgem, fazendo um loop
        
        images[index].classList.add("selected"); // recebe a  classe selected 
       
    }, time);
}

window.addEventListener("load", slide)

