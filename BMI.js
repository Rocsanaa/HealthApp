var button2 = document.getElementById('bmi');



function final() {
    var feet = document.getElementById('inputft').value;
    var pounds = document.getElementById('inputW').value;
    var kilos = poundstokg(pounds);
    var m = fttometers(feet);

    document.getElementById("product").textContent = "Your weight in kg is " + kilos + ". Your height in meters is " + m + "."
}

function poundstokg(pounds) {
    var kg = (pounds * 0.453592);
    return kg;
}

function fttometers(feet) {
    var meters = (feet * 0.3048);
    return meters;
}

button2.addEventListener('click', final);
