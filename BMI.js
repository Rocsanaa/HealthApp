var button2 = document.getElementById('bmi');

    var feet = document.getElementById('inputft').value;
    var pounds = document.getElementById('inputW').value;

function final() {
    var first = poundstokg(pounds);
    var second = fttometers(feet);

    document.getElementById("product").textContent = "Your BMI score is " + kg + ". Your BMI category is " + meters + "."
}

function poundstokg(first) {
    kg = (pounds * 0.453592);
    return kg;
}

function fttometers(second) {
    meters = (feet * 0.3048);
    return meters;
}

button2.addEventListener('click', final);
