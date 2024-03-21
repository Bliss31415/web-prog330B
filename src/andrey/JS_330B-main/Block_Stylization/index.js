function changeWidth() {
    let widthInput = document.getElementById("width");
    let block = document.getElementById("block");
    block.style.width = widthInput.value + "px";
}

function changeHeight(){
    let heightInput = document.getElementById("height");
    let block = document.getElementById("block");
    block.style.height = heightInput.value + "px";
}

function changeColor(){
    let colorInput = document.getElementById("color");
    let block = document.getElementById("block");
    block.style.backgroundColor = colorInput.value;
}

function changeImage() {
    let imageInput = document.getElementById("image");
    let block = document.getElementById("block");
    block.style.backgroundImage = `url('${imageInput.value}')`;
}

function changeBorder(){
    let borderEnabled = document.getElementById("borderEnabled");
    let borderWidthInput = document.getElementById("borderWidth");
    let borderColorInput = document.getElementById("borderColor");
    let borderStyleInput = document.getElementById("borderStyle");
    let block = document.getElementById("block");

    if(borderEnabled.checked){
        block.style.borderWidth = borderWidthInput.value + "px";
        block.style.borderColor = borderColorInput.value;
        block.style.borderStyle = borderStyleInput.value;
    } else {
        block.style.borderStyle = "none";
    }
}

function changeposition() {
    const block = document.getElementById("block");
    const textpos = document.getElementById("position");
    switch(textpos.value){
        case "top-left": 
            block.style.justifyContent = "start";
            block.style.alignItems = "start";
            block.style.textAlign = "left";
            break;
        case "top-center": 
            block.style.justifyContent = "center";
            block.style.alignItems = "start";
            block.style.textAlign = "center";
            break;
        case "top-right":
            block.style.justifyContent = "end";
            block.style.alignItems = "start";
            block.style.textAlign = "right";
            break;
        case "center-left": 
            block.style.justifyContent = "start";
            block.style.alignItems = "center";
            block.style.textAlign = "left";
            break;
        case "center":
            block.style.justifyContent = "center";
            block.style.alignItems = "center";
            block.style.textAlign = "center";
            break;
        case "center-right":
            block.style.justifyContent = "end";
            block.style.alignItems = "center";
            block.style.textAlign = "right";
            break;
        case "bottom-left":
            block.style.justifyContent = "start";
            block.style.alignItems = "end";
            block.style.textAlign = "left";
            break;
        case "bottom-center":
            block.style.justifyContent = "center";
            block.style.alignItems = "end";
            block.style.textAlign = "center";
            break;
        case "bottom-right":
            block.style.justifyContent = "end";
            block.style.alignItems = "end";
            block.style.textAlign = "right";
            break;
    }
}

function changetext() {
    const newtext = document.getElementById("text");
    document.getElementById("textblock").textContent = newtext.value;
}
//Работает
function repeattext() {
    let text = document.getElementById("textblock");
    const repeat = document.getElementById("repetitions");
    const originalText = text.innerHTML;
  
    for (let i=1; i < repeat.value; i++){
      text.innerHTML += originalText;
    }
}
//Работает
function updateShadow(){
	let xOffset = document.getElementById("xOffset").value;
	let yOffset = document.getElementById("yOffset").value;
	let blur = document.getElementById("blur").value;
	let shadowColor = document.getElementById("shadowColor").value;
    let block = document.getElementById("block");
	
	block.style.boxShadow = `${shadowColor} ${xOffset + `px`} ${yOffset + `px`} ${blur + `px`}`
}

function animation(){
    let animationSelect = document.getElementById("animations");
    let textblock = document.getElementById("textblock");
    let selectedAnimation = animationSelect.value;

    textblock.classList.remove("fade-in");
    textblock.classList.remove("slide-in");
    textblock.classList.remove("pulse");

    if(selectedAnimation === "fade-in"){
        textblock.classList.add("fade-in");
    }else if(selectedAnimation === "slide-in"){
        textblock.classList.add("slide-in");
    }else if(selectedAnimation === "pulse"){
        textblock.classList.add("pulse");
    }

}



function allAccept(){
    changeWidth();
    changeHeight();
    changeColor();
    changeImage();
    changeBorder();
    changeposition();
    changetext();
    repeattext();
    updateShadow();
    animation();
}
