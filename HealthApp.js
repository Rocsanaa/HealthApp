var button = document.getElementById('bmi');

function convert() {
    var feet = document.getElementById('inputft').value;
    var pounds = document.getElementById('inputW').value;
    var kilos = poundstokg(pounds);
    var m = fttometers(feet);

    var score = Math.floor((kilos/m)/(m));
    var category = part(score);

    document.getElementById("product").textContent = "Your weight in kg is " + kilos + ". Your height in meters is " + m + ". Your BMI score is " + score + ". Your BMI category is " + category + "."
}

function poundstokg(pounds) {
    var kg = (pounds * 0.453592);
    return kg;
}

function fttometers(feet) {
    var meters = (feet * 0.3048);
    return meters;
}

function part(score) {
    if (score < 19) {
        return "Underweight";
    } else if ((score > 18) && (score < 25)) {
        return "Normal";
    } else if ((score > 24) && (score < 30)) {
        return "Overweight";
    } else if (score > 29) {
        return "Obese";
   }
}

button.addEventListener('click', convert);

var button2 = document.getElementById('zones');

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

button2.addEventListener('click', everything);


var button3 = document.getElementById('levels');

function phase() {
    var zone1a = Math.floor(later * 0.5);
    var zone1b = Math.floor(later * 0.6);
    var zone2a = Math.floor(later * 0.6);
    var zone2b = Math.floor(later * 0.7);
    var zone3a = Math.floor(later * 0.7);
    var zone3b = Math.floor(later * 0.8);
    var zone4a = Math.floor(later * 0.8);
    var zone4b = Math.floor(later * 0.9);
    var zone5a = Math.floor(later * 0.9);
    var zone5b = Math.floor(later * 1.0);

    document.getElementById("triple").textContent = "Zone 1: " + zone1a + " - " + zone1b + " BPM. Zone 2: " + zone2a + " - " + zone2b + " BPM. Zone 3: " + zone3a + " - " + zone3b + " BPM. Zone 4: " + zone4a + " - " + zone4b + " BPM. Zone 5: " + zone5a + " - " + zone5b + " BPM."

}

button3.addEventListener('click', phase);

