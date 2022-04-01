const button = document.querySelector("button");
const colors = ["EE4530","C72C41","801336","2D132C"];

let i = 0;

const changeColor = () => {
    if(i < colors.length){
        document.body.style.backgroundColor = "#" + colors[i]; 
        ++i;
        console.log(i)
    }else{
        i=0;
        document.body.style.backgroundColor = "#" + colors[i]; 
        i++;
    }
}

button.addEventListener("click", changeColor);