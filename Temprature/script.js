const screenInput = document.getElementById("screen");
const ToFahrenheit = document.getElementById("celcius");
const ToCelcius = document.getElementById("fahrenheit");
const convertBtn = document.getElementById("convert");
const ShowDisplaky = document.getElementById("display");

convertBtn.onclick = function(){
    if(ToFahrenheit.checked){
        temp = Number(screenInput.value);
        if(temp === isNaN){
            ShowDisplaky.textContent = "Please enter a valid number.";
        }
        temp = temp*(9/5)+32;
        ShowDisplaky.textContent = temp + "F";
    }

    else if(ToCelcius.checked){
        temp = Number(screenInput.value);
        if(temp === isNaN){
            ShowDisplaky.textContent = "Please enter a valid number.";
        }
        temp = (temp-32)*(5/9);
        ShowDisplaky.textContent = temp + "C";
    }

    else{
        ShowDisplaky.textContent = "Please Select a Unit";
    }

}
