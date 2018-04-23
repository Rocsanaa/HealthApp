var button = document.getElementById('mHRandRHR');

var age = document.getElementById('inputAge').value;
var pulse = document.getElementById('inputPulse').value;

var rHR = resting(pulse);
function everything() {
    document.getElementById("results").textContent = "Your resting heart rate is " + present + ". Your Maximum Heart Rate is " + later + ". "
}
function resting(rHR) {
    present = (rHR * 10);
    return present;
}

var mRH = max(age);
function max(mRH) {
    later = (220 - mRH);
    return later
}



button.addEventListener('click', everything);
