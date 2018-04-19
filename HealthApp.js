var button = document.getElementById('mHRandRHR');

var age = document.getElementById('inputAge').value;
var pulse = document.getElementById('inputPulse').value;

var rHR = resting(age);

function everything() {
    document.getElementById("results").textContent = "Your resting heart rate is " + present + "."
}

function resting(rHR) {
    present = (rHR * 10);
    return present;
}

button.addEventListener('click', everything);
