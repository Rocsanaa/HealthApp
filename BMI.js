var button2 = document2.getElementById('bmi');

function final() {
    var feet = document2.getElementById('inputft').value;
    var pounds = document2.getElementById('inputW').value;

    var first = poundstokg(pounds);
    var second = fttometers(feet);

    document2.getElementById("product").textContent = "Your BMI score is " +  + ". Your BMI category is " +  + "."
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
