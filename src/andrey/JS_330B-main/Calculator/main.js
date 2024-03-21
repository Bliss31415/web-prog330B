function calculate() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operation = document.getElementById("operation").value;
  let result = 0;

  if (isNaN(num1) || isNaN(num2)) {
    result = "0";
  } else {
    switch(operation){
      case "addition":
        result = num1 + num2;
        break;
      case "subtraction":
        result = num1 - num2;
        break;
      case "multiplication":
        result = num1 * num2;
        break;
      case "division":
        result = num1 / num2;
        break;
      case "stepen":
        result = num1 ** num2;
        break;
      case "ostatok":
        result = num1 % num2;
        break;
      default:
        result = "0";
        break;
    }
  }
  
  document.getElementById("output").innerHTML = result;
}

function ban_words(evt){ //Блокировка  всех символов клавиатуры, кроме исключений
  if(evt.which){
    var charCode = evt.which;
  }else{
    var charCode = event.keyCode;
  }
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 45 && charCode != 46){
    return false;
  }
  return true;
}

function clearFields(){ // Очищение полей ввода
  document.getElementById("num1").value ="";
  document.getElementById("num2").value ="";
}

function performOperations(){
  calculate();
  clearFields();
}

function handleInput_one(){
  const input = document.getElementById("num1");
  let inputText = input.value;

  if (inputText.includes("-")) {
    inputText = inputText.replace(/-/g, "");
    inputText = "-" + inputText;
  }
  input.value =  inputText; 
  input.onkeydown = validateInput;
}

function handleInput_two(){
  const input = document.getElementById("num2");
  let inputText = input.value;

  if (inputText.includes("-")) {
    inputText = inputText.replace(/-/g, "");
    inputText = "-" + inputText;
  }

  input.value = inputText;
  input.onkeydown = validateInput2;
}

//Проверка на наличие точки
function validateInput(event){
  var input = document.getElementById("num1");
  if(event.key === '.' && input.value.includes(".")){
    event.preventDefault();
  }
}
function validateInput2(event){
  var input = document.getElementById("num2");
  if(event.key === '.' && input.value.includes(".")){
    event.preventDefault();
  }
}

