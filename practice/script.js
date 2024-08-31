const increase = document.getElementById("inc");
const decrease = document.getElementById("dec");
const reset = document.getElementById("reset");
const counter = document.getElementById("counter");

let count = 0;

increase.onclick = function(){
    count++;
    counter.textContent = count;
}

decrease.onclick = function(){
    count--;
    counter.textContent = count;
}

reset.onclick = function(){
    count = 0;
    counter.textContent = count;
}