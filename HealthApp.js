var button = document.getElementById('zones');

function everything() {
    var age = document.getElementById('inputAge').value;
    var pulse = document.getElementById('inputPulse').value;

    var rHR = resting(pulse);
    var mHR = maximum(age);

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


var button3 = document.getElementById('levels');

function phase() {
    var zone1a = later * 0.5;
    var zone1b = later * 0.6;
    var zone2a = later * 0.6;
    var zone2b = later * 0.7;
    var zone3a = later * 0.7;
    var zone3b = later * 0.8;
    var zone4a = later * 0.8;
    var zone4b = later * 0.9;
    var zone5a = later * 0.9;
    var zone5b = later * 1.0;

    document.getElementById("triple").textContent = "Zone 1: " + zone1a + " - " + zone1b + " BPM. Zone 2: " + zone2a + " - " + zone2b + " BPM. Zone 3: " + zone3a + " - " + zone3b + " BPM. Zone 4: " + zone4a + " - " + zone4b + " BPM. Zone 5: " + zone5a + " - " + zone5b + " BPM."

}

button3.addEventListener('click', phase);
