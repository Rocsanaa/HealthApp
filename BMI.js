var button2 = document.getElementById('bmi');

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

button2.addEventListener('click', convert);
