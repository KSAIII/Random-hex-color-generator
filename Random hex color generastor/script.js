const hex = document.querySelector(".hex");
const button = document.querySelector(".generate");
const generateColor = () => {
    const randomcolor = Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor = "#" + randomcolor;
    hex.innerHTML = "#" + randomcolor;
};
button.addEventListener("click",generateColor);
generateColor();







console.log(color);
