var button = document.getElementById('zones');

function everything() {
    var rHR = resting(pulse);
    var mHR = maximum(age);

    var age = document.getElementById('inputAge').value;
    var pulse = document.getElementById('inputPulse').value;

    document.getElementById("results").textContent = "Your resting heart rate is " + present + " beats per minute. Your Maximum Heart Rate is " + later + "."
}

function resting(rHR) {
    present = (rHR * 10);
    return present;
}

function maximum(mHR) {
    later = (220 - mHR);
    return later;
}

button.addEventListener('click', everything);
